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
   [:label "Repo:"
    [text-input {:form-data form-data
                 :errors errors
                 :id :term}]
    #_[:input {:type "text"
             :on-change (fn [e]
                          (let [value (aget e "target" "value")]
                            (reset! term-atom value)))}]
    ]])

(defn registry-line [data]
  [:a.line {:href (utils/path :route/registry-detail {:registry-address (:registry/address data)})}
   [:div.title
    (:registry/title data)]
   [:div.description
    (:registry/description data)]])

(defn registries-list [term]
  (let []
    (fn [term]
      (let [registries @(subscribe [::gql/query {:queries [[:search-registries
                                                           {:keyword term}
                                                           [:registry/title
                                                            :registry/description
                                                            :registry/address]]]}])]
        (println term)
        (println registries)
        [:div
         (when (:search-registries registries)
           [:div.registries
            (doall
             (map (fn [line]
                    ^{:key (:registry/address line)}
                    [registry-line line])
                  (:search-registries registries)))
            ;; (str @registries)
            ])]))))

(defmethod page :route/search-registries []
  (let [form-data (re/atom {})
        errors (re/atom {})]
    (fn []
      [app-layout
       [:div (str "Search Registries: " (:term @form-data))]
       [search-form form-data errors]
       [registries-list (:term @form-data)]])))
