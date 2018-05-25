(ns tcrfactory.styles.app-menu
  (:require [garden.def :refer [defstyles]]
            [garden.stylesheet :refer [at-media]]
            [clojure.string :as s]
            [tcrfactory.styles.base.colors :refer [color]]
            [garden.units :refer [px]]))

(def menu-gutter (px 15))
(defstyles core
  [:.app-menu
   {:display :flex
    :align-items :center
    :background (color "white")}
   [:.node
    {:border "1px"
     :border-color (color "gray")
     :border-style "dotted"}

    [:.item
     {:display :flex
      :align-items :center
      :padding-top menu-gutter
      :padding-bottom menu-gutter}
     [:&:before
      {:font-family "Icons"
       :display :block
       :height (px 40)
       :width (px 40)
       :float :left
       :color (color "green")}]
     [:&.dankregistry:before
      {:content "\"\\f0c2\""}]
     [:&.marketplace:before
      {:content "\"\\f2a3\""}]]]])
