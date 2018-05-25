(ns district.ui.now.events
  (:require
    [cljs-time.core :as t]
    [district.ui.now.queries :as queries]
    [district0x.re-frame.interval-fx]
    [re-frame.core :refer [reg-event-fx trim-v]]))

(def interceptors [trim-v])

(reg-event-fx
  ::start
  interceptors
  (fn [{:keys [:db]} []]
    (merge
      {:db (queries/assoc-now db (t/now))
       :dispatch-interval {:dispatch [::update-now]
                           :id ::update-now
                           :ms 1000}})))

(reg-event-fx
  ::update-now
  interceptors
  (fn [{:keys [:db]}]
    (let [[delta qualifier] (queries/delta-now db)]
      {:db (queries/assoc-now db (cond
                                   (nil? delta)
                                   (t/now)

                                   (= :after qualifier)
                                   (t/plus (t/now) (t/millis delta))

                                   (= :before qualifier)
                                   (t/minus (t/now) (t/millis delta))))})))

(reg-event-fx
 ::set-now
 interceptors
 (fn [{:keys [:db]} [date-time]]
   (let [now (t/now)]
     {:db (queries/assoc-delta-now db (if (t/after? date-time now)
                                        [(t/in-millis (t/interval now date-time)) :after]
                                        [(t/in-millis (t/interval date-time now)) :before]))})))

(reg-event-fx
 ::increment-now
 interceptors
 (fn [{:keys [:db]} [millis]]
   (let [[delta qualifier] (queries/delta-now db)]
     {:db (queries/assoc-delta-now db (cond
                                        (nil? delta)
                                        [millis :after]

                                        (= :after qualifier)
                                        [(+ delta millis) :after]

                                        (= :before qualifier)
                                        (let [diff (- delta millis)]
                                          (if (pos? diff)
                                            [diff :before]
                                            [(.abs js/Math diff) :after]))))})))

(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]}]
    {:db (queries/dissoc-now db)
     :clear-interval {:id ::update-now}}))
