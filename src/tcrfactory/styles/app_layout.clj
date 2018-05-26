(ns tcrfactory.styles.app-layout
  (:require [garden.def :refer [defstyles]]
            [tcrfactory.styles.base.media :refer [for-media-max]]
            [tcrfactory.styles.base.grid :refer [grid-columns grid-rows]]
            [clojure.string :as s]
            [tcrfactory.styles.base.colors :refer [color]]
            [garden.units :refer [px]]))


(defstyles core
  [:body
   {:background-color (color :paper)}]
  [:.menu-section {}]
  [:.addr-section
   {:height (px 45)}
   [:.active-account-select
    {:height (px 45)}]]
  [:.app-container
   {:display :grid
    :height "100%"}
   (grid-rows "45px")
   (grid-columns "10%" "80%" "10%")
   (for-media-max :mobile
                  [:&
                   (grid-columns "100%")])
   [:.app-content
    {:margin "3em"
     :padding "2em"
     :box-shadow "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
     :background-color (color :white)}]
   [:.app-bar
    {:background-color (color :white)
     :grid-column "1 / span 3"}]
   [:.app-content
    {:grid-column "2 / span 1"}]
   [:.ui.segment
    {:border-style :none
     :box-shadow :none}]
   ])
