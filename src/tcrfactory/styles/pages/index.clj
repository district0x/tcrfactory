(ns tcrfactory.styles.pages.index
  (:require [garden.def :refer [defstyles]]
            [tcrfactory.styles.base.media :refer [for-media-max]]
            [tcrfactory.styles.base.grid :refer [grid-columns]]
            [clojure.string :as s]
            [garden.units :refer [px]])
  )

(defstyles core
  [:.welcome {:position :absolute
              :right "0px"
              :left "0px"
              :top "0px"
              :bottom "0px"
              :margin :auto
              :height (px 300)
              :width (px 500)
              }
   [:h1 {:text-align "center"}]
   [:.app-menu
    {:justify-content :space-between}
    [:.node {:border-width (px 3)}]]]
  )
