(ns district.ui.web3-tx-costs.queries
  (:require
    [clojure.set :as set]))

(def db-key :district.ui.web3-tx-costs)

(defn currencies [db]
  (-> db db-key :currencies))

(defn set-currencies [db currencies]
  (assoc-in db [db-key :currencies] currencies))

(defn add-currencies [db currencies]
  (update-in db [db-key :currencies] set/union currencies))

(defn dissoc-web3-tx-costs [db]
  (dissoc db db-key))

