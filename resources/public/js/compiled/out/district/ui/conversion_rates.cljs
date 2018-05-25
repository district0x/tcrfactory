(ns district.ui.conversion-rates
  (:require
    [cljs.spec.alpha :as s]
    [district.ui.conversion-rates.events :as events]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate conversion-rates
  :start (start (:conversion-rates (mount/args)))
  :stop (stop))

(s/def ::from-currencies (s/coll-of keyword?))
(s/def ::to-currencies (s/coll-of keyword?))
(s/def ::request-timeout number?)
(s/def ::request-interval-ms number?)
(s/def ::cache-ttl? number?)
(s/def ::opts (s/nilable (s/keys :opt-un [::from-currencies ::to-currencies ::request-timeout ::request-interval-ms ::cache-ttl?])))

(defn start [opts]
  (s/assert ::opts opts)
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))

