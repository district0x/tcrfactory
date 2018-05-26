(ns tcrfactory.styles.app-bar
  (:require [garden.def :refer [defstyles]]
            [tcrfactory.styles.base.media :refer [for-media-max]]
            [tcrfactory.styles.base.grid :refer [grid-columns]]
            [clojure.string :as s]
            [garden.units :refer [px]]))

(defstyles core
  [:.app-bar
   {:box-shadow "0 0 50px 20px rgba(0,0,0,.04)"
    :display :grid}
   (grid-columns "60%" "20%" "20%")])
