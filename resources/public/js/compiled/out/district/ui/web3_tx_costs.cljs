(ns district.ui.web3-tx-costs
  (:require
    [cljs.spec.alpha :as s]
    [district.ui.conversion-rates]
    [district.ui.web3-tx-costs.events :as events]
    [district.ui.web3-tx]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)

(defstate web3-tx-costs
          :start (start (:web3-tx-costs (mount/args)))
          :stop (stop))

(s/def ::currencies (s/nilable (s/coll-of keyword?)))
(s/def ::opts (s/nilable (s/keys :opt-un [::currencies])))

(defn start [opts]
  (s/assert ::opts opts)
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))

