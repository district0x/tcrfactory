(ns district.time
  (:require
    [cljs-time.coerce :as time-coerce]))


(defn time-units [milis]
  {:seconds (js/Math.floor (mod (/ milis 1000) 60))
   :minutes (js/Math.floor (mod (/ (/ milis 1000) 60) 60))
   :hours (js/Math.floor (mod (/ milis 3600000) 24))
   :days (js/Math.floor (/ milis 86400000))})


(defn biggest-time-unit [{:keys [:seconds :minutes :hours :days]}]
  (cond
    (pos? days) [:days days]
    (pos? hours) [:hours hours]
    (pos? minutes) [:minutes minutes]
    :else [:seconds seconds]))


(defn time-remaining [from-time to-time]
  (let [milis-difference (- (time-coerce/to-long to-time) (time-coerce/to-long from-time))]
    (if (pos? milis-difference)
      (time-units milis-difference)
      {:seconds 0 :minutes 0 :hours 0 :days 0})))


(defn time-remaining-biggest-unit [from-time to-time]
  (biggest-time-unit (time-remaining from-time to-time)))


(defn long->epoch [x]
  (/ x 1000))


(defn epoch->long [x]
  (* x 1000))