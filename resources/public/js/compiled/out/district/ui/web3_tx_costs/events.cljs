(ns district.ui.web3-tx-costs.events
  (:require
    [bignumber.core :as bn]
    [cljs-web3.core :as web3]
    [cljs.spec.alpha :as s]
    [day8.re-frame.forward-events-fx]
    [district.ui.conversion-rates.events :as rates-events]
    [district.ui.conversion-rates.queries :as rates-queries]
    [district.ui.web3-tx-costs.queries :as queries]
    [district.ui.web3-tx.events :as tx-events]
    [district0x.re-frame.spec-interceptors :refer [validate-first-arg validate-args]]
    [re-frame.core :refer [reg-event-fx trim-v inject-cofx]]))

(def interceptors [trim-v])

(reg-event-fx
  ::start
  interceptors
  (fn [{:keys [:db]} [{:keys [:currencies :request-interval-ms]}]]
    {:db (queries/set-currencies db #{})
     :dispatch [::add-currencies currencies {:request-interval-ms request-interval-ms}]
     :forward-events [{:register ::tx-loaded
                       :events #{::tx-events/tx-loaded}
                       :dispatch-to [::tx-loaded]}]}))


(reg-event-fx
  ::add-currencies
  [interceptors (validate-first-arg :district.ui.web3-tx-costs/currencies)]
  (fn [{:keys [:db]} [currencies {:keys [:request-interval-ms]}]]
    (when currencies
      {:db (queries/add-currencies db currencies)
       :dispatch [::rates-events/watch-conversion-rates (merge {:from-currencies [:ETH]
                                                                :to-currencies currencies}
                                                               (when request-interval-ms
                                                                 {:request-interval-ms request-interval-ms}))]})))


(reg-event-fx
  ::tx-loaded
  interceptors
  (fn [{:keys [:db]} [[_ tx-hash tx-receipt tx]]]
    (let [tx-cost-eth (bn/number (web3/from-wei (bn/* (:gas-price tx) (:gas-used tx-receipt)) :ether))
          tx-costs (reduce
                     (fn [result currency]
                       (assoc result currency (rates-queries/convert db :ETH currency tx-cost-eth)))
                     {:ETH tx-cost-eth}
                     (queries/currencies db))]
      {:dispatch [::tx-events/set-tx tx-hash {:tx-costs tx-costs}]})))


(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]}]
    {:db (queries/dissoc-web3-tx-costs db)
     :forward-events {:unregister ::tx-loaded}}))
