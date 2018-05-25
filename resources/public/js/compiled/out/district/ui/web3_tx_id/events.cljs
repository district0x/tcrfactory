(ns district.ui.web3-tx-id.events
  (:require
    [cljs-web3.core :as web3]
    [cljs.spec.alpha :as s]
    [day8.re-frame.forward-events-fx]
    [district.ui.web3-tx-id.queries :as queries]
    [district.ui.web3-tx.events :as tx-events]
    [district.ui.web3-tx.queries :as tx-queries]
    [district0x.re-frame.spec-interceptors :refer [validate-first-arg validate-args]]
    [re-frame.core :refer [reg-event-fx trim-v inject-cofx]]))

(def interceptors [trim-v])
(s/def ::tx-hash string?)
(s/def ::tx-id (complement nil?))
(s/def ::from web3/address?)
(s/def ::fn keyword?)
(s/def ::opts (s/keys :opt-un [::fn ::from]))

(reg-event-fx
  ::start
  [interceptors (inject-cofx :web3-tx-id-localstorage)]
  (fn [{:keys [:db :web3-tx-id-localstorage]}]
    {:db (queries/assoc-web3-tx-id db (if (tx-queries/localstorage-disabled? db)
                                        {}
                                        (queries/web3-tx-id web3-tx-id-localstorage)))
     :forward-events [{:register ::tx-hash
                       :events #{::tx-events/tx-hash}
                       :dispatch-to [::add-tx-hash*]}
                      {:register ::remove-tx
                       :events #{::tx-events/remove-tx}
                       :dispatch-to [::remove-tx-id*]}
                      {:register ::clear-localstorage
                       :events #{::tx-events/clear-localstorage}
                       :dispatch-to [::clear-localstorage]}]}))


(reg-event-fx
  ::add-tx-hash*
  interceptors
  (fn [{:keys [:db]} [[_ {:keys [:tx-id :tx-opts :fn]} tx-hash]]]
    (when tx-id
      {:dispatch [::add-tx-hash tx-id tx-hash {:from (:from tx-opts) :fn fn}]})))


(reg-event-fx
  ::add-tx-hash
  [interceptors (validate-args (s/cat :tx-id ::tx-id
                                      :tx-hash ::tx-hash
                                      :opts (s/nilable ::opts)
                                      :args (s/* any?)))]
  (fn [{:keys [:db]} [tx-id tx-hash opts]]
    (let [new-db (queries/add-tx-hash db tx-id tx-hash opts)]
      (merge
        {:db new-db}
        (when-not (tx-queries/localstorage-disabled? db)
          {:web3-tx-id-localstorage (select-keys new-db [queries/db-key])})))))


(reg-event-fx
  ::remove-tx-id*
  interceptors
  (fn [{:keys [:db]} [[_ tx-hash]]]
    {:dispatch [::remove-tx-id tx-hash]}))


(reg-event-fx
  ::remove-tx-id
  [interceptors (validate-first-arg ::tx-hash)]
  (fn [{:keys [:db]} [tx-hash]]
    (let [new-db (queries/remove-tx-id db tx-hash)]
      (merge
        {:db new-db}
        (when-not (tx-queries/localstorage-disabled? db)
          {:web3-tx-id-localstorage (select-keys new-db [queries/db-key])})))))


(reg-event-fx
  ::clear-localstorage
  (fn []
    {:web3-tx-id-localstorage nil}))


(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]}]
    {:db (queries/dissoc-web3-tx-id db)
     :forward-events [{:unregister ::tx-hash}
                      {:unregister ::remove-tx}
                      {:unregister ::clear-localstorage}]}))

