(ns district.ui.reagent-render.utils
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]))

(defn re-render [{:keys [id target component-var]}]
  (re-frame/clear-subscription-cache!)
  (js/setTimeout
    (fn []
      (r/render [component-var] (cond
                                  target
                                  target

                                  id
                                  (.getElementById js/document id))))
    0))
