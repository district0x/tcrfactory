(ns district.ui.web3-tx-log.events
  (:require
    [cljs.spec.alpha :as s]
    [day8.re-frame.forward-events-fx]
    [district.ui.web3-tx-costs.events :as tx-costs-events]
    [district.ui.web3-tx-log.queries :as queries]
    [district.ui.web3-tx.events :as tx-events]
    [district0x.re-frame.spec-interceptors :refer [validate-first-arg]]
    [re-frame.core :refer [reg-event-fx trim-v inject-cofx]]))

(def interceptors [trim-v])
(s/def ::settings map?)

(reg-event-fx
  ::start
  [interceptors (inject-cofx :web3-tx-log-localstorage)]
  (fn [{:keys [:db :web3-tx-log-localstorage]} [{:keys [:disable-using-localstorage?
                                                        :tx-costs-currencies
                                                        :open-on-tx-hash?]}]]
    (let [settings (if disable-using-localstorage? {} (queries/settings web3-tx-log-localstorage))]

      (merge
        {:db (-> db
               (queries/merge-settings settings)
               (queries/assoc-opt :disable-using-localstorage? disable-using-localstorage?))
         :dispatch [::tx-costs-events/add-currencies tx-costs-currencies]}
        (when open-on-tx-hash?
          {:forward-events [{:register ::open-on-tx-hash
                             :events #{::tx-events/tx-hash}
                             :dispatch-to [::set-open true]}]})))))


(reg-event-fx
  ::set-open
  interceptors
  (fn [{:keys [:db]} [open?]]
    {:dispatch [::set-settings {:open? open?}]}))


(reg-event-fx
  ::set-settings
  [interceptors (validate-first-arg ::settings)]
  (fn [{:keys [:db]} [settings]]
    (let [new-db (queries/merge-settings db settings)]
      (merge
        {:db new-db}
        (when-not (queries/localstorage-disabled? db)
          {:web3-tx-log-localstorage (select-keys new-db [queries/db-key])})))))


(reg-event-fx
  ::clear-localstorage
  (fn []
    {:web3-tx-log-localstorage nil}))


(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]}]
    {:db (queries/dissoc-web3-tx-log db)
     :forward-events {:unregister ::open-on-tx-hash}}))

