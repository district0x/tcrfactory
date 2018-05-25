(ns district.ui.web3-tx-log.queries
  (:require
    [district.ui.web3-accounts.queries :as accounts-queries]
    [district.ui.web3-tx-log-core.queries :as tx-log-core-queries]))

(def db-key :district.ui.web3-tx-log)

(defn settings [db]
  (get-in db [db-key :settings]))

(defn from-active-address-only? [db]
  (boolean (:from-active-address-only? (settings db))))

(defn open? [db]
  (boolean (:open? (settings db))))

(defn txs [db]
  (tx-log-core-queries/txs db (when (from-active-address-only? db)
                                {:from (accounts-queries/active-account db)})))

(defn merge-settings [db settings]
  (update-in db [db-key :settings] merge settings))

(defn localstorage-disabled? [db]
  (-> db db-key :disable-using-localstorage?))

(defn assoc-opt [db key value]
  (assoc-in db [db-key key] value))

(defn dissoc-web3-tx-log [db]
  (dissoc db db-key))