(ns tcrfactory.ui.component.home
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [tcrfactory.ui.component.app-menu :refer [main-menu]]
    [re-frame.core :refer [subscribe]]))

(defmethod page :route/home []
  [:div.welcome
   [:h1 "TCR Factory"]
   [main-menu nil]])
