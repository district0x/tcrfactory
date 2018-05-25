(ns district.ui.now
  (:require
    [district.ui.now.events :as events]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate now
  :start (start (:now (mount/args)))
  :stop (stop))

(defn start [opts]
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))
