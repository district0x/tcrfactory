(ns district.ui.window-focus
  (:require
    [district.ui.window-focus.events :as events]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate window-focus
          :start (start (:window-focus (mount/args)))
          :stop (stop))


(defn start [opts]
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))


