(ns tcrfactory.ui.component.create-registry
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe]]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]))

(defmethod page :route/create-registry []
  [app-layout
   [:div "Create Registry"]])
