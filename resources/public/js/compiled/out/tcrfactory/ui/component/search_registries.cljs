(ns tcrfactory.ui.component.search-registries
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe]]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]))

(defn registries-list []
  (let [registries (subscribe [::gql/query {:queries [[:search-registries
                                                       {:keyword "abc"}
                                                       [:registry/title]]]}])]
    (fn []
      (println @registries)
      [:div "hh"])))

(defmethod page :route/search-registries []
  [app-layout
   [:div "Search Registries"]
   [registries-list]])
