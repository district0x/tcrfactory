(ns tcrfactory.ui.component.create-registry
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe dispatch]]
    [reagent.core :as re]
    [tcrfactory.ui.element.inputs :refer [with-label text-input int-input]]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]))

(def default-reg {:registry/token-name "TNAME",:registry/title "RTITE", :registry/challenge-period-duration 5555, :registry/deposit 444, :registry/token-symbol "TSYM", :registry/total-supply 2222222, :registry/reveal-period-duration 777777, :registry/commit-period-duration 6666, :registry/description "TDESC"})

(defn create-registry-form [form-data errors]
  [:div.registry-form
   [with-label "Title"
    [text-input {:form-data form-data

                 :errors errors
                 :id :registry/title}]]
   [with-label "Token name"
    [text-input {:form-data form-data
                 :errors errors
                 :id :registry/token-name}]]
   [with-label "Token description"
    [text-input {:form-data form-data
                 :input-type :textarea
                 :errors errors
                 :id :registry/description}]]
   [with-label "Token symbol"
    [text-input {:form-data form-data
                 :errors errors
                 :id :registry/token-symbol}]]
   [with-label "Total supply, wei"
    [int-input {:form-data form-data
                     :errors errors
                     :id :registry/total-supply}]]
   [with-label "Deposit amount, wei"
    [int-input {:form-data form-data
                     :errors errors
                     :id :registry/deposit}]]
   [with-label "Challenge period duration, sec"
    [int-input {:form-data form-data
                :errors errors
                :id :registry/challenge-period-duration}]]
   [with-label "Commit period duration, sec"
    [int-input {:form-data form-data
                :errors errors
                :id :registry/commit-period-duration}]]
   [with-label "Reveal period duration, sec"
    [int-input {:form-data form-data
                :errors errors
                :id :registry/reveal-period-duration}]]
   ])

(defn create-registry [form-data _]
  (dispatch [:create-registry form-data]))

(defn create-registry-form-buttons [form-data errors]
  (if (empty? @errors)
    [:div.registry-form-buttons
     [:button.ui.button {:type :button
                         :on-click (partial create-registry @form-data)}
      "Create!"]]
    [:div (str "Errors: " @errors)])
  )
(defmethod page :route/create-registry []
  (let [form-data (re/atom default-reg)
        errors (re/atom {})]
    (fn []
      [app-layout
       [:div "Create Registry"]
       [create-registry-form form-data errors]
       [create-registry-form-buttons form-data errors]])))
