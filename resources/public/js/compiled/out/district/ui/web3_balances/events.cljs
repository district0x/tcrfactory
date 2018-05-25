(ns district.ui.web3-balances.events
  (:require
    [cljs-web3.core :as web3]
    [cljs-web3.eth :as web3-eth]
    [cljs.spec.alpha :as s]
    [day8.re-frame.async-flow-fx]
    [district.ui.web3-balances.queries :as queries]
    [district.ui.web3.events :as web3-events]
    [district.ui.web3.queries :as web3-queries]
    [district0x.re-frame.spec-interceptors :refer [validate-first-arg]]
    [district0x.re-frame.web3-fx]
    [re-frame.core :refer [reg-event-fx trim-v]]))

(def interceptors [trim-v])
(def abi-balance-of (js/JSON.parse "[{\"constant\":true,\"inputs\":[{\"name\":\"who\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]"))

(s/def ::contract any?)
(s/def ::watch? (s/nilable boolean?))
(s/def ::address web3/address?)
(s/def ::item (s/keys :req-un [::address] :opt-un [::watch? ::contract]))
(s/def ::items (s/coll-of ::item))

(reg-event-fx
  ::start
  interceptors
  (fn [{:keys [:db]} [{:keys [:contracts]}]]
    {:db (queries/merge-web3-balances db {:balances {}
                                          :contracts contracts
                                          :watch-ids []})}))



(defn- contract->instance [db contract]
  (let [balance-key (queries/balance-key db contract)]
    (cond
      (web3/address? balance-key) (web3-eth/contract-at (web3-queries/web3 db) abi-balance-of balance-key)
      (aget balance-key "address") balance-key
      :else nil)))


(defn- item->watch-id [db {:keys [:address :contract]}]
  [address (queries/balance-key db contract)])


(reg-event-fx
  ::load-balances
  [interceptors (validate-first-arg ::items)]
  (fn [{:keys [:db]} [items]]
    (let [watch-ids (->> items
                      (filter :watch?)
                      (map item->watch-id))]
      (if-let [web3 (web3-queries/web3 db)]
        {:db (queries/concat-watch-ids db watch-ids)
         :web3/get-balances {:web3 web3
                             :addresses (for [{:keys [:address :watch? :contract] :as item} items]
                                          {:id (and watch? (item->watch-id db item))
                                           :instance (contract->instance db contract)
                                           :address address
                                           :watch? watch?
                                           :on-success [::set-balance item]
                                           :on-error [::balance-load-failed]})}}
        {:async-flow {:first-dispatch [::do-nothing*]
                      :rules [{:when :seen?
                               :events [::web3-events/web3-created]
                               :halt? true
                               :dispatch [::load-balances items]}]}}))))


(reg-event-fx
  ::do-nothing*
  (fn []
    nil))


(reg-event-fx
  ::set-balance
  [interceptors (validate-first-arg ::item)]
  (fn [{:keys [:db]} [{:keys [:address :contract]} balance]]
    {:db (queries/assoc-balance db address contract balance)}))


(reg-event-fx
  ::balance-load-failed
  (constantly nil))


(reg-event-fx
  ::stop-watching
  [interceptors (validate-first-arg ::items)]
  (fn [{:keys [:db]} [items]]
    {:web3/stop-watching {:ids (map item->watch-id items)}}))


(reg-event-fx
  ::stop-watching-all
  interceptors
  (fn [{:keys [:db]}]
    {:web3/stop-watching {:ids (queries/watch-ids db)}}))


(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]}]
    (merge
      {:db (queries/dissoc-web3-balances db)
       :web3/stop-watching {:ids (queries/watch-ids db)}})))









