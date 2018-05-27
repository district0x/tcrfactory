(ns tcrfactory.ui.component.create-registry
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe dispatch]]
    [reagent.core :as re]
    [tcrfactory.ui.element.inputs :refer [with-label text-input int-input]]
    [tcrfactory.ui.component.app-layout :refer [app-layout]]
    [cljs-web3.core :as web3]))

(def default-reg {:registry/token-name "TNAME", :registry/title "RTITE", :registry/challenge-period-duration 5555, :registry/deposit 444, :registry/token-symbol "TSYM", :registry/total-supply 2222222, :registry/reveal-period-duration 777777, :registry/commit-period-duration 6666, :registry/description "TDESC"})

(defn create-registry [form-data _]
  (dispatch [:create-registry form-data]))

(defn create-registry-form-buttons [form-data errors]
  (if (empty? @errors)
    [:div.registry-form-buttons
     [:button.button.ui.right.floated {:type :button
                                       :on-click (partial create-registry
                                                          (-> @form-data
                                                            (update :registry/total-supply web3/to-wei :ether)
                                                            (update :registry/deposit web3/to-wei :ether)))}
      "Create!"]]
    [:div (str "Errors: " @errors)]))

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
    [with-label "Total supply"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/total-supply}]]]
   [:div.field
    [with-label "Deposit amount"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/deposit}]]]
   [:div.field
    [with-label "Challenge period duration (seconds)"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/challenge-period-duration}]]]
   [:div.field
    [with-label "Commit period duration (seconds)"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/commit-period-duration}]]]
   [:div.field
    [with-label "Reveal period duration (seconds)"
     [int-input {:form-data form-data
                 :errors errors
                 :id :registry/reveal-period-duration}]]]
   [create-registry-form-buttons form-data errors]])


(defmethod page :route/create-registry []
  (let [form-data (re/atom default-reg)
        errors (re/atom {})]
    (fn []
      [app-layout
       [:div.ui.segment
        [:h1 "Create Registry"]
        ;; [f]
        [:div.ui.hidden.divider]
        [create-registry-form form-data errors]
        ]])))
