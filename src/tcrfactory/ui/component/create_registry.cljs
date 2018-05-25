(ns tcrfactory.ui.component.create-registry
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe]]
    [reagent.core :as re]
    [tcrfactory.ui.element.inputs :refer [text-input]]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]))

(defn create-registry []
  (let [form-data (re/atom {})
        errors (re/atom {})]
    [:div.search-form
     [text-input {:form-data form-data
                  :errors errors
                  :id :registry/title}]]))

(defmethod page :route/create-registry []
  (let [form ()])
  [app-layout
   [:div "Create Registry"]])
