(ns tcrfactory.ui.component.search-registries
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [tcrfactory.ui.utils :as utils]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe]]
    [tcrfactory.ui.element.inputs :refer [text-input]]
    [reagent.core :as re]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]))

(defn search-form [form-data errors]
  [:div.ui.form
   [:div.field
    [:label "Keyword:"]
    [text-input {:form-data form-data
                 :errors errors
                 :id :term}]]])

(defn registry-line [data]
  [:a.item.line {:href (utils/path :route/registry-detail {:registry-address (:registry/address data)})}
   [:i.icon.newspaper]
   [:div.content
    [:div.header.title
     (:registry/title data)]
    [:div.description
     (:registry/description data)]]])

(defn registries-list [term]
  (fn [term]
    (let [registries @(subscribe [::gql/query {:queries [[:search-registries
                                                          {:keyword term}
                                                          [:registry/title
                                                           :registry/description
                                                           :registry/address]]]}])]
      [:div
       (when (:search-registries registries)
         [:div.ui.segment
          [:div.ui.list.registries
           (doall
            (map (fn [{:keys [:registry/address] :as line}]
                   ^{:key address} [registry-line line])
                 (:search-registries registries)))]])])))

(defmethod page :route/search-registries []
  (let [form-data (re/atom {:term ""})
        errors (re/atom {})]
    (fn []
      [app-layout
       [:div
        [:div.ui.segment
         [:h1 (str "Search Registries")]
         [:div.ui.hidden.divider]
         [search-form form-data errors]]
        [registries-list (:term @form-data)]]])))
