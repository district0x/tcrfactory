(ns district.ui.router-google-analytics
  (:require
    [district.ui.router-google-analytics.events :as events]
    [district.ui.router]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(def debug? ^boolean js/goog.DEBUG)

(defn start [opts]
  (dispatch-sync [::events/start (merge {:enabled? (not debug?)} opts)])
  opts)

(defn stop []
  (dispatch-sync [::events/stop]))


(defstate router-google-analytics
  :start (start (:router-google-analytics (mount/args)))
  :stop (stop))

