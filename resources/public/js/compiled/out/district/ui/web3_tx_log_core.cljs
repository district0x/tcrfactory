(ns district.ui.web3-tx-log-core
  (:require
    [akiroz.re-frame.storage :as re-frame-storage]
    [district.ui.web3-tx-log-core.events :as events]
    [district.ui.web3-tx]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)

(defstate web3-tx-log-core
          :start (start (:web3-tx-log-core (mount/args)))
          :stop (stop))


(defn start [opts]
  (re-frame-storage/reg-co-fx! :district.ui.web3-tx-log-core {:fx :web3-tx-log-core-localstorage :cofx :web3-tx-log-core-localstorage})
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))

