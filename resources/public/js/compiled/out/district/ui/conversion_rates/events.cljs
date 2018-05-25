(ns district.ui.conversion-rates.events
  (:require
    [ajax.core :as ajax]
    [cljs.spec.alpha :as s]
    [clojure.string :as string]
    [day8.re-frame.http-fx]
    [district.ui.conversion-rates.queries :as queries]
    [district0x.re-frame.interval-fx]
    [district0x.re-frame.spec-interceptors :refer [validate-first-arg]]
    [goog.string :as gstring]
    [goog.string.format]
    [re-frame.core :refer [reg-event-fx trim-v]]))

(def interceptors [trim-v])

(s/def ::conversion-rates (s/map-of keyword? (s/map-of keyword? number?)))

(reg-event-fx
  ::start
  interceptors
  (fn [{:keys [:db]} [{:keys [:cache-ttl]
                       :or {cache-ttl 180000}
                       :as opts}]]
    {:db (-> db
           (queries/merge-conversion-rates {})
           (queries/assoc-cache-ttl cache-ttl))
     :dispatch [::watch-conversion-rates (merge opts {:id ::start})]}))


(reg-event-fx
  ::watch-conversion-rates
  [interceptors (validate-first-arg :district.ui.conversion-rates/opts)]
  (fn [{:keys [:db]} [{:keys [:request-interval-ms :id]
                       :or {request-interval-ms 300000}
                       :as opts}]]
    (merge
      {:dispatch [::load-conversion-rates opts]}
      (when (pos? request-interval-ms)
        {:dispatch-interval {:dispatch [::load-conversion-rates opts]
                             :id id
                             :ms request-interval-ms}}))))


(reg-event-fx
  ::stop-watching-conversion-rates
  interceptors
  (fn [{:keys [:db]} [id]]
    {:clear-interval {:id id}}))


(reg-event-fx
  ::load-conversion-rates
  [interceptors (validate-first-arg :district.ui.conversion-rates/opts)]
  (fn [{:keys [:db]} [{:keys [:from-currencies :to-currencies :request-timeout]
                       :or {request-timeout 10000}}]]
    (when (and (seq from-currencies)
               (seq to-currencies)
               (not (queries/cache-has-all-pairs? db from-currencies to-currencies)))
      {:http-xhrio {:method :get
                    :uri (gstring/format "https://min-api.cryptocompare.com/data/pricemulti?fsyms=%s&tsyms=%s"
                                         (string/join "," (map name from-currencies))
                                         (string/join "," (map name to-currencies)))
                    :timeout request-timeout
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success [::set-conversion-rates]
                    :on-failure [::conversion-rates-load-failed]}
       :db (queries/update-cache db from-currencies to-currencies)})))


(reg-event-fx
  ::set-conversion-rates
  [interceptors (validate-first-arg ::conversion-rates)]
  (fn [{:keys [:db]} [conversion-rates]]
    {:db (queries/merge-conversion-rates db conversion-rates)}))


(reg-event-fx
  ::conversion-rates-load-failed
  (constantly nil))


(reg-event-fx
  ::stop
  interceptors
  (fn [{:keys [:db]}]
    {:db (queries/dissoc-conversion-rates db)
     :clear-interval {:id ::start}}))