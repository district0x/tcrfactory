(ns district.ui.web3-tx-log-core.queries
  (:require [district.ui.web3-tx.queries :as tx-queries]))

(defn tx-hashes [db]
  (-> db :district.ui.web3-tx-log-core :tx-hashes))

(defn txs [db & args]
  (let [txs (apply tx-queries/txs db args)
        hashes (set (keys txs))]
    (->> (tx-hashes db)
      (filter (partial contains? hashes))
      (map txs))))

(defn add-tx-hash [db tx-hash]
  (update-in db [:district.ui.web3-tx-log-core :tx-hashes] conj tx-hash))

(defn remove-tx-hash [db tx-hash]
  (update-in db [:district.ui.web3-tx-log-core :tx-hashes] (partial remove #(= tx-hash %))))

(defn assoc-tx-hashes [db tx-hashes]
  (assoc-in db [:district.ui.web3-tx-log-core :tx-hashes] tx-hashes))

(defn dissoc-web3-tx-log-core [db]
  (dissoc db :district.ui.web3-tx-log-core))

