(ns district.ui.web3-balances.queries
  (:require [cljs-web3.core :as web3]))

(defn contracts [db]
  (-> db :district.ui.web3-balances :contracts))

(defn merge-contracts [db contracts]
  (update-in db [:district.ui.web3-balances :contracts] merge contracts))

(defn contract-address [db contract-key]
  (get-in (contracts db) [contract-key :address]))

(defn balance-key [db contract]
  (if (and contract
           (not= contract :ETH))
    (let [instance-addr (aget contract "address")]
      (cond
        instance-addr instance-addr
        (web3/address? contract) contract
        :else (contract-address db contract)))
    :ETH))

(defn balances [db]
  (-> db :district.ui.web3-balances :balances))

(defn balance [db address & [contract]]
  (get-in (balances db) [(balance-key db contract) address]))

(defn assoc-balance
  ([db address balance]
   ((assoc-balance db address nil balance)))
  ([db address contract balance]
   (assoc-in db [:district.ui.web3-balances :balances (balance-key db contract) address] balance)))

(defn merge-balances [db balances]
  (update-in db [:district.ui.web3-balances :balances] merge balances))

(defn watch-ids [db]
  (-> db :district.ui.web3-balances :watch-ids))

(defn concat-watch-ids [db watch-ids]
  (update-in db [:district.ui.web3-balances :watch-ids] concat watch-ids))

(defn merge-web3-balances [db {:keys [:balances :contracts :watch-ids]}]
  (-> db
    (merge-balances balances)
    (merge-contracts contracts)
    (concat-watch-ids watch-ids)))

(defn dissoc-web3-balances [db]
  (dissoc db :district.ui.web3-balances))