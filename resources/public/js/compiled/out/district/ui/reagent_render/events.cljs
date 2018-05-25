(ns district.ui.reagent-render.events
  (:require [district.ui.reagent-render.spec :as spec]
            [district.ui.reagent-render.utils :as render-utils]
            [re-frame.core :as re-frame]))

(def interceptors [re-frame/trim-v])

(re-frame/reg-event-fx
 ::start
 [interceptors]
 (fn [_ [opts]]
   {:dispatch [::render opts]}))

(re-frame/reg-event-fx
 ::render
 [interceptors]
 (fn [_ [opts]]
   {::render-fx [opts]}))

(re-frame/reg-fx
 ::render-fx
 (fn [[opts]]
   (render-utils/re-render opts)))
