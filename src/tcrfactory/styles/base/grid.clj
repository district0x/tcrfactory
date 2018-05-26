(ns tcrfactory.styles.base.grid
  (:require [garden.def :refer [defstyles]]
            [garden.stylesheet :refer [at-media]]
            [clojure.string :as s]
            [garden.units :refer [px]]))

(defn grid-columns [& columns]
  {:grid-template-columns (s/join " " (map str columns))})

(defn grid-rows [& columns]
  {:grid-template-rows (s/join " " (map str columns))})
