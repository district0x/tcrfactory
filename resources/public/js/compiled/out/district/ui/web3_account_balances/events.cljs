(ns district.ui.web3-account-balances.events
  (:require
    [day8.re-frame.forward-events-fx]
    [district.ui.web3-accounts.events :as accounts-events]
    [district.ui.web3-accounts.queries :as accounts-queries]
    [district.ui.web3-balances.events :as balances-events]
    [district0x.re-frame.spec-interceptors :refer [validate-first-arg]]
    [re-frame.core :refer [reg-event-fx trim-v]]))

(def interceptors [trim-v])

(reg-event-fx
  ::start
  interceptors
  (fn [{:keys [:db]} [{:keys [:disable-loading-at-start?] :as opts}]]
    (when-not disable-loading-at-start?
      {:forward-events {:register ::accounts-changed
                        :events #{::accounts-events/accounts-changed}
                        :dispatch-to [::load-account-balances opts]}})))


(reg-event-fx
  ::load-account-balances
  [interceptors (validate-first-arg :district.ui.web3-account-balances/opts)]
  (fn [{:keys [:db]} [{:keys [:disable-loading-at-start? :for-contracts]} [_ {:keys [:old]}]]]
    (merge
      (when (seq old)
        {:dispatch [::balances-events/stop-watching
                    (flatten
                      (for [address old]
                        (for [contract for-contracts]
                          {:address address
                           :contract contract})))]})

      (let [for-contracts (if for-contracts for-contracts [:ETH])
            accounts (accounts-queries/accounts db)]
        (when (seq accounts)
          {:dispatch [::balances-events/load-balances
                      (flatten
                        (for [address accounts]
                          (for [contract for-contracts]
                            {:address address
                             :contract contract
                             :watch? (not disable-loading-at-start?)})))]})))))


(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]} [{:keys [:disable-loading-at-start?]}]]
    (when-not disable-loading-at-start?
      {:forward-events {:unregister ::accounts-changed}})))

