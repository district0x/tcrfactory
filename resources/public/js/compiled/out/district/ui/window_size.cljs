(ns district.ui.window-size
  (:require
    [cljs.spec.alpha :as s]
    [district.ui.window-size.events :as events]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate window-size
  :start (start (:window-size (mount/args)))
  :stop (stop))

(s/def ::max-large-monitor number?)
(s/def ::max-computer number?)
(s/def ::max-tablet number?)
(s/def ::max-mobile number?)
(s/def ::breakpoints (s/keys ::req-un [::max-large-monitor ::max-computer ::max-tablet ::max-mobile]))
(s/def ::opts (s/nilable (s/keys :opt-un [::breakpoints ::debounce-ms])))

(def default-breakpoints
  {:max-large-monitor 1920
   :max-computer 1200
   :max-tablet 992
   :max-mobile 768})

(defn start [opts]
  (dispatch-sync [::events/start (merge {:breakpoints default-breakpoints}
                                        opts)])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))
