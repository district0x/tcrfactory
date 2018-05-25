(ns district.ui.router-google-analytics.events
  (:require
    [day8.re-frame.forward-events-fx]
    [district.ui.router.events :as router-events]
    [district.ui.router.queries :as router-queries]
    [re-frame.core :refer [reg-event-fx trim-v reg-fx inject-cofx]]))


(def interceptors [trim-v])


(reg-event-fx
  ::start
  interceptors
  (fn [{:keys [:db]} [{:keys [:enabled?]}]]
    (when enabled?
      {:forward-events {:register ::active-page-changed
                        :events #{::router-events/active-page-changed}
                        :dispatch-to [::active-page-changed]}})))


(reg-event-fx
  ::active-page-changed
  interceptors
  (fn [{:keys [:db]} [[_ name params query]]]
    {:ga/page-view [(router-queries/resolve db name params query)]}))


(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]}]
    {:forward-events {:unregister ::active-page-changed}}))

