(ns district.ui.web3-tx-id.queries
  (:require
    [district.ui.web3-accounts.queries :as accounts-queries]
    [district.ui.web3-tx.queries :as tx-queries]
    [medley.core :as medley]))

(def db-key :district.ui.web3-tx-id)

(defn add-tx-hash [db tx-id tx-hash & [{:keys [:from :fn]}]]
  (-> db
    (update-in [db-key :txs tx-id] conj {:tx-hash tx-hash :from from :fn fn})
    (assoc-in [db-key :tx-hashes tx-hash] {:tx-id tx-id :from from :fn fn})))

(defn tx-hash [db tx-id & [opts]]
  (:tx-hash (medley/find-first
              (fn [item]
                (and (= (or (:from opts) (accounts-queries/active-account db))
                        (:from item))
                     (or (not (:fn opts))
                         (= (:fn opts)
                            (:fn item)))))
              (get-in db [db-key :txs tx-id]))))

(defn tx [db tx-id & [opts]]
  (tx-queries/tx db (tx-hash db tx-id opts)))

(defn tx-status [db tx-id & [opts]]
  (:status (tx db tx-id opts)))

(defn tx-pending? [db tx-id & [opts]]
  (= :tx.status/pending (tx-status db tx-id opts)))

(defn tx-success? [db tx-id & [opts]]
  (= :tx.status/success (tx-status db tx-id opts)))

(defn tx-error? [db tx-id & [opts]]
  (= :tx.status/error (tx-status db tx-id opts)))

(defn remove-tx-id [db tx-hash]
  (let [{:keys [:tx-id]} (get-in db [db-key :tx-hashes tx-hash])]
    (-> db
      (update-in [db-key :txs tx-id] (partial remove #(= (:tx-hash %) tx-hash)))
      (update-in [db-key :tx-hashes tx-hash] dissoc))))

(defn web3-tx-id [db]
  (get db db-key))

(defn assoc-web3-tx-id [db {:keys [:txs :tx-hashes]}]
  (-> db
    (assoc-in [db-key :txs] txs)
    (assoc-in [db-key :tx-hashes] tx-hashes)))

(defn dissoc-web3-tx-id [db]
  (dissoc db db-key))