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
  [:div.ui.fluid.form.registry-form
   [:div.field
    [with-label "Title"
     [text-input {:form-data form-data

                  :errors errors
                  :id :registry/title}]]]
   [:div.field
    [with-label "Token name"
     [text-input {:form-data form-data
                  :errors errors
                  :id :registry/token-name}]]]
   [:div.field
    [with-label "Token description"
     [text-input {:form-data form-data
                  :input-type :textarea
                  :errors errors
                  :id :registry/description}]]]
   [:div.field
    [with-label "Token symbol"
     [text-input {:form-data form-data
                  :errors errors
                  :id :registry/token-symbol}]]]
   [:div.field
    [with-label "Total supply, wei"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/total-supply}]]]
   [:div.field
    [with-label "Deposit amount, wei"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/deposit}]]]
   [:div.field
    [with-label "Challenge period duration, sec"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/challenge-period-duration}]]]
   [:div.field
    [with-label "Commit period duration, sec"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/commit-period-duration}]]]
   [:div.field
    [with-label "Reveal period duration, sec"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/reveal-period-duration}]]]
   ])
(defn f []
  [:form {:class "ui form"}
   [:div {:class "field"}
    [:label "First Name"]
    [:input {:type "text", :name "first-name", :placeholder "First Name"}]]
   [:div {:class "field"}
    [:label "Last Name"]
    [:input {:type "text", :name "last-name", :placeholder "Last Name"}]]
   [:div {:class "field"}
    [:div {:class "ui checkbox"}
     [:input {:type "checkbox", :tabindex "0", :class "hidden"}]
     [:label "I agree to the Terms and Conditions"]]]
   [:button {:class "ui button", :type "submit"} "Submit"]]
  )
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
       ;; [f]
       [create-registry-form form-data errors]
       [create-registry-form-buttons form-data errors]])))
