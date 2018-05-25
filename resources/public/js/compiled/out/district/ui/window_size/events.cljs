(ns district.ui.window-size.events
  (:require
    [district0x.re-frame.window-fx]
    [district.ui.window-size.queries :as queries]
    [re-frame.core :refer [reg-event-fx trim-v]]))

(def interceptors [trim-v])

(reg-event-fx
  ::start
  interceptors
  (fn [{:keys [:db]} [{:keys [:breakpoints :debounce-ms]}]]
    {:db (queries/assoc-window-size db {:breakpoints breakpoints
                                        :size (queries/calculate-size db js/window.innerWidth breakpoints)})
     :window/on-resize {:dispatch [::window-resized]
                        :debounce-ms (or debounce-ms 166)
                        :id ::on-resize}}))


(reg-event-fx
  ::window-resized
  interceptors
  (fn [{:keys [:db]} [width height]]
    (let [new-size (queries/calculate-size db width)
          old-size (queries/size db)]
      (when-not (= new-size old-size)
        {:db (queries/assoc-size db new-size)
         :dispatch [::size-changed new-size old-size]}))))


(reg-event-fx
  ::size-changed
  (constantly nil))


(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]}]
    {:db (queries/dissoc-window-size db)
     :window/stop-on-resize {:id ::on-resize}}))


