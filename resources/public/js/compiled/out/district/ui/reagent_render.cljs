(ns district.ui.reagent-render
  (:require [cljs.pprint :as pprint]
            [cljs.spec.alpha :as s]
            [district.ui.reagent-render.events :as events]
            [district.ui.reagent-render.spec :as spec]
            [district.ui.reagent-render.utils :as render-utils]
            [mount.core :as mount :refer [defstate]]
            [re-frame.core :as re-frame]))

(defn start [opts]
  {:pre [(s/assert ::spec/opts opts)]}
  (re-frame/dispatch-sync [::events/start opts])
  opts)

(defstate district-ui-reagent-render
  :start (start (:reagent-render (mount/args)))
  :stop :stopped)

(defn rerender []
  (render-utils/re-render @district-ui-reagent-render))
