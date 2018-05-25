(ns district.ui.logging.events
  (:require [re-frame.core :as re-frame]
            [taoensso.timbre :refer-macros [info warn error]]))

(def interceptors [re-frame/trim-v])

(re-frame/reg-event-fx
 ::success
 [interceptors]
 (fn [_ [args]]
   {:log/success args}))

(re-frame/reg-fx
 :log/success
 (fn [[message & [opts]]]
   (info "Success" message opts)))

(re-frame/reg-event-fx
 ::error
 [interceptors]
 (fn [_ [args]]
   {:log/error args}))

(re-frame/reg-fx
 :log/error
 (fn [[message & [opts]]]
   (error "Error" message opts)))
