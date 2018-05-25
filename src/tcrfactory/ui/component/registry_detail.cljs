(ns tcrfactory.ui.component.registry-detail
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe]]
    [district.ui.router.subs :as router-subs]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]))


(defn registry-detail-header []
  [:div "Registry detail header"])


(defmethod page :route/registry-detail []
  (let [page-params (subscribe [::router-subs/active-page-params])]
    (fn []
      [app-layout
       [registry-detail-header]
       [:div [:a
              {:href (str "#" (router-utils/resolve :route/create-registry-entry @page-params))}
              "Submit Entry"]]
       [:div]])))
