(ns tcrfactory.styles.core
  (:require [garden.def :refer [defstyles]]
            [garden.units :refer [px]]
            [tcrfactory.styles.app-layout :as app-layout]
            [tcrfactory.styles.app-bar :as app-bar]
            [tcrfactory.styles.app-menu :as app-menu]
            [tcrfactory.styles.base.input :as base-input]
            [tcrfactory.styles.pages.index :as page-index]
            ))

(defstyles main
  base-input/core
  app-layout/core
  app-bar/core
  app-menu/core
  page-index/core)
