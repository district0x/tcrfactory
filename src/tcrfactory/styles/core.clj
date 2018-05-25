(ns tcrfactory.styles.core
  (:require [garden.def :refer [defstyles]]
            [garden.units :refer [px]]
            [tcrfactory.styles.app-layout :as app-layout]
            [tcrfactory.styles.app-bar :as app-bar]
            [tcrfactory.styles.app-menu :as app-menu]
            [tcrfactory.styles.pages.index :as page-index]
            ))

(defstyles main
  app-layout/core
  app-bar/core
  app-menu/core
  page-index/core)
