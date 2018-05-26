(ns tcrfactory.styles.base.input
  (:require [garden.def :refer [defstyles]]
            [garden.stylesheet :refer [at-media]]
            [clojure.string :as s]
            [garden.units :refer [px]]))

(defstyles core
  [:input
   #_{:margin "0px"
    :max-width "100px"
    :-webkit-box-flex 1
    :flex "1 0 auto"
    :outline "0"
    :-webkit-tap-highlight-color "rgba(255,255,255,0)"
    :text-align "left"
    :line-height "1.21428571em"
    :font-family "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
    :padding ".67857143em 1em"
    :background "#fff"
    :border "1px solid rgba(34,36,38,.15)"
    :color "rgba(0,0,0,.87)"
    :border-radius ".28571429rem"
    :transition "box-shadow .1s ease,border-color .1s ease,-webkit-box-shadow .1s ease"
    :box-shadow "none"}
   ])
