(ns tcrfactory.ui.component.create-registry-entry
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe]]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]
    [tcrfactory.ui.component.registry-detail :refer [registry-detail-header]]))

(defmethod page :route/create-registry-entry []
  [app-layout
   [registry-detail-header]
   [:div "Create Registry Entry"]])
