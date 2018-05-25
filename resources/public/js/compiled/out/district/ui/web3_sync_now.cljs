(ns district.ui.web3-sync-now
  (:require [district.ui.web3-sync-now.events :as events]
            [mount.core :as mount :refer [defstate]]
            [re-frame.core :as re-frame]))

(defn start [opts]
  (re-frame/dispatch-sync [::events/start opts])
  opts)

(defn stop []
  (re-frame/dispatch-sync [::events/stop]))

(defstate now
  :start (start (:web3-sync-now (mount/args)))
  :stop (stop))
