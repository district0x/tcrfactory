(ns tcrfactory.styles.app-layout
  (:require [garden.def :refer [defstyles]]
            [tcrfactory.styles.base.media :refer [for-media-max]]
            [tcrfactory.styles.base.grid :refer [grid-columns]]
            [clojure.string :as s]
            [garden.units :refer [px]]))


(defstyles core
  [:.menu-section {}]
  [:.app-container
   {:display :grid}
   (grid-columns "20%" "80%")
   (for-media-max :mobile
                  [:&
                   (grid-columns "100%")])])
