(ns district.ui.web3-tx-id
  (:require
    [akiroz.re-frame.storage :as re-frame-storage]
    [district.ui.web3-tx-id.events :as events]
    [district.ui.web3-tx]
    [district.ui.web3-accounts]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate web3-tx-id
  :start (start (:web3-tx-id (mount/args)))
  :stop (stop))

(defn start [opts]
  (re-frame-storage/reg-co-fx! :district.ui.web3-tx-id {:fx :web3-tx-id-localstorage :cofx :web3-tx-id-localstorage})
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))

