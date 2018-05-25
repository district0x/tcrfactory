(ns district.ui.notification.events
  (:require [day8.re-frame.forward-events-fx]
            [district0x.re-frame.interval-fx]
            [district0x.re-frame.spec-interceptors :as d0x-spec-interceptors]
            [district.ui.notification.spec :as spec]
            [district.ui.notification.queries :as queries]
            [re-frame.core :as re-frame]
            [cljs.pprint :refer [pprint]]))

(def interceptors [re-frame/trim-v])

(re-frame/reg-event-fx
 ::start
 [interceptors]
 (fn [{:keys [db]} [opts]]
   {:db (queries/assoc-district-ui-notification db opts)
    :forward-events {:register queries/db-key
                     :events #{::queue-notification}
                     :dispatch-to [::process-queue]}}))

(re-frame/reg-event-fx
 ::stop
 [interceptors]
 (fn [{:keys [:db]}]
   {:db (queries/dissoc-district-ui-notification db)
    :forward-events {:unregister queries/db-key}}))

(re-frame/reg-event-fx
 ::show
 [interceptors (d0x-spec-interceptors/validate-first-arg ::spec/notification)]
 (fn [{:keys [db]} [notification]]
   {:dispatch [::queue-notification notification]}))

(re-frame/reg-event-db
 ::queue-notification
 [interceptors]
 (fn [db [notification]]
   (queries/queue-notification db notification)))

(re-frame/reg-event-db
 ::clear-queue
 [interceptors]
 (fn [db]
   (queries/clear-queue db)))

(re-frame/reg-event-fx
 ::process-queue
 [interceptors]
 ^{:doc "This handler works by interweaving queued events with 'empty' notifications, which work as ::hide-notification events.
         Re-frame queue of events becomes (distinct (concat [show1 hide] [show1 show2 hide])) etc. where each vector is a sequence of queued notifications."}
 (fn [{:keys [:db]} ]
   (let [hide-duration (queries/default-hide-duration db)
         queue (queries/queue db)
         events (loop [queue queue
                       this (peek queue)
                       events [{:delay 0 :notification this}]]
                  (if (empty? queue)
                    events
                    (recur (pop queue)
                           (peek (pop queue))
                           (let [{:keys [delay]} (last events)
                                 {:keys [show-duration]} this
                                 next (peek (pop queue))]
                             (conj events {:delay (+ delay
                                                     (if show-duration
                                                       show-duration
                                                       (queries/default-show-duration db))
                                                     (if next
                                                       hide-duration
                                                       0))
                                           :notification next})))))]
     {:dispatch-n (mapv #(vec [::schedule-next-notification %])
                        events)
      :dispatch-later [{:ms (-> events last :delay)
                        :dispatch [::clear-queue]}]})))

(re-frame/reg-event-fx
 ::schedule-next-notification
 [interceptors]
 (fn [{:keys [:db]} [{:keys [delay notification]}]]
   {:dispatch-later [{:ms delay
                      :dispatch [::show-notification notification]}]}))

(re-frame/reg-event-db
 ::show-notification
 [interceptors]
 (fn [db [notification]]
   (queries/show-notification db notification)))

(re-frame/reg-event-fx
 ::hide-notification
 [interceptors]
 (fn [{:keys [db]} _]
   {:db (-> db
            (queries/assoc-open false))}))
