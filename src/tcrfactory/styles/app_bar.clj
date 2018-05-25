(ns tcrfactory.styles.app-bar
  (:require [garden.def :refer [defstyles]]
            [tcrfactory.styles.base.media :refer [for-media-max]]
            [tcrfactory.styles.base.grid :refer [grid-columns]]
            [clojure.string :as s]
            [garden.units :refer [px]]))

(defstyles core
  [:.app-bar
   {:display :grid}
   (grid-columns "60%" "20%" "20%")])
