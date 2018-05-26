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
    :justify-content :flex-start
    :background (color "white")}
   [:.node
    {:border "1px"
     :border-color (color :light-grey)
     :border-style "solid"}

    [:.item
     {:display :flex
      :align-items :center
      :padding-top menu-gutter
      :padding-bottom menu-gutter}
     [:&:before
      {:font-family "Icons"
       :font-size "2em"
       :display :block
       :height (px 40)
       :width (px 40)
       :text-align :center
       :vertical-align :middle
       :line-height "1.4em"
       :color (color "grey")}]
     [:&.search-registry:before
      {:content "\"\\f002\""}]"\f002"
     [:&.create-registry:before
      {:content "\"\\f044\""}]]]])
