(ns tcrfactory.ui.component.app-layout
  (:require
    [re-frame.core :refer [subscribe]]))

(defn app-bar []
  [:div "App Bar"])

(defn app-layout [& children]
  [:div
   [app-bar]
   (vec
     (concat
       [:div]
       children))])
