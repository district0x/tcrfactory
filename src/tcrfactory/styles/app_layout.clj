(ns tcrfactory.styles.app-layout
  (:require [garden.def :refer [defstyles]]
            [tcrfactory.styles.base.media :refer [for-media-max]]
            [tcrfactory.styles.base.grid :refer [grid-columns]]
            [clojure.string :as s]
            [tcrfactory.styles.base.colors :refer [color]]
            [garden.units :refer [px]]))


(defstyles core
  [:body
   {:background-color (color :paper)}]
  [:.menu-section {}]
  [:.app-container
   {:display :grid}
   (grid-columns "10%" "80%" "10%")
   (for-media-max :mobile
                  [:&
                   (grid-columns "100%")])
   [:.app-content
    {:background-color (color :white)}]
   [:.app-bar
    {:background-color (color :white)
     :grid-column "1 / span 3"}]
   [:.app-content
    {:grid-column "2 / span 1"}]
   ])
