(ns tcrfactory.ui.component.registry-detail
  (:require [district.ui.component.page :refer [page]]
            [district.ui.graphql.subs :as gql]
            [graphql-query.core :as q]
            [district.ui.router.subs :as router-subs]
            [district.ui.router.utils :as router-utils]
            [re-frame.core :refer [dispatch subscribe]]
            [reagent.core :as reagent]
            [print.foo :include-macros true :refer [look]]
            [tcrfactory.ui.component.app-layout :refer [app-layout]]
            [tcrfactory.ui.element.inputs :refer [text-input select-input with-label]]
            [district.ui.web3-accounts.subs :as accounts-subs]
            [district.graphql-utils :as graphql-utils]))

(defn registry-detail-header [{:keys [:registry/address]}]
  (let [result (:registry @(subscribe [::gql/query {:queries [[:registry {:registry/address address}
                                                               [:registry/created-on
                                                                :registry/title
                                                                :registry/description
                                                                :registry/token-symbol
                                                                :registry/token-total-supply
                                                                :registry/token]]]}]))]
    [:div.registry-info
     [:div.created-on (str (:registry/created-on result))]
     [:div.title (:registry/title result)]
     [:div.description (:registry/description result)]
     [:div.token-symbol (:registry/token-symbol result)]
     [:div.total-supply (:registry/token-total-supply result)]
     [:div.token (:registry/token result)]]))


(defn challenge-form []
  (let [open? (reagent/atom false)
        form-data (reagent/atom {})]
    (fn [{:keys [:registry/entry :registry/deposit :registry/token]}]
      (let [{:keys [:reg-entry/address]} entry]
        [:div.challenge-form

         (if @open?
           ;; when it's open
           [:div
            [with-label
             "Challenge Reason"
             [text-input {:form-data form-data
                          :id :challenge/description}]]

            [:button {:on-click #(dispatch [:create-challenge (look {:registry-entry address
                                                                :registry-token token
                                                                :deposit deposit
                                                                :description (:challenge/description @form-data)})])}
             "Submit challenge"]]
           ;; when it's close
           [:button.challenge {:on-click #(reset! open? true)} ">>"])]))))


(defn vote-form [{:keys [:reg-entry/address :reg-entry/token]}]
  (let [form-data (reagent/atom {})
        dispatch-commit-vote (fn [option]
                               (dispatch [:commit-vote {:registry-entry address
                                                        :registry-token token
                                                        :amount (:amount @form-data)
                                                        :vote-option option
                                                        :salt "a"}]))]
   [:div.vote-form
    [text-input {:form-data form-data :id :amount}]
    [:button {:on-click #(dispatch-commit-vote :vote.option/vote-for)} "Vote For"]
    [:button {:on-click #(dispatch-commit-vote :vote.option/vote-against)} "Vote Against"]]))

(defn reveal-form [{:keys [:reg-entry/address :reg-entry/token]}]
  (let [active-account @(subscribe [::accounts-subs/active-account])
        vote-option @(subscribe [:vote-option {:reg-entry/address address
                                                 :account active-account}])]

   [:div.reveal-form
    [:button {:on-click #(dispatch [:reveal-vote {:registry-entry address
                                                  :vote-option vote-option
                                                  :salt "a"}])}
     "Reveal"]]))

(defn registry-entries [{:keys [:registry/status :registry/address]}]
  (let [registry (->  @(subscribe [::gql/query {:queries (look [[:registry {:registry/address address}
                                                                 [:registry/deposit
                                                                  :registry/token
                                                                  [:registry/entries {:status status}
                                                                   [:reg-entry/address
                                                                    :reg-entry/title
                                                                    :reg-entry/description
                                                                    :reg-entry/status]]]]])}])
                      :registry)
        {:keys [:registry/deposit :registry/entries :registry/token]} registry]
    [:div
     (for [entry entries]
       [:div.reg-entry {:key (:reg-entry/address entry)
                        :style {:border "1px solid grey"}}
        [:div.title (:reg-entry/title entry)]
        [:div.description (:reg-entry/description entry)]
        (when-let [status (:reg-entry/status entry)]
         (case (graphql-utils/gql-name->kw status)
           :reg-entry.status/challenge-period [challenge-form {:registry/entry entry
                                                               :registry/token token
                                                               :registry/deposit deposit}]
           :reg-entry.status/commit-period [vote-form]
           :reg-entry.status/reveal-period [reveal-form]
           nil))])]))

(defmethod page :route/registry-detail []
  (let [page-params (subscribe [::router-subs/active-page-params])
        form-data (reagent/atom {:status :whitelist})]
    [app-layout
     [registry-detail-header {:registry/address (:registry-address @page-params)} ]
     [:div
      [:a {:href (str "#" (router-utils/resolve :route/create-registry-entry @page-params))} "Submit Item"]
      [select-input {:form-data form-data
                     :id :status
                     :options [{:key :whitelist :value "In Registry"}
                               {:key :challenge-period :value "In Challenge Period"}
                               {:key :commit-period :value "In Voting Period"}
                               {:key :reveal-period :value "In Reveal Period"}]}]]
     [registry-entries {:registry/status (get {:challenge-period :reg-entry.status/challenge-period
                                               :commit-period :reg-entry.status/commit-period
                                               :reveal-period :reg-entry.status/reveal-period
                                               :whitelist :reg-entry.status/whitelisted}
                                              (:status @form-data))
                        :registry/address (:registry-address @page-params)}]
     [:div [:a {:href (str "#" (router-utils/resolve :route/create-registry-entry @page-params))}
            "Submit Entry"]]]))

(defn create-registry-entry-body [{:keys [:registry/address]}]
  (let [form-data (reagent/atom {})
        result (subscribe [::gql/query {:queries [[:registry {:registry/address address}
                                                   [:registry/deposit
                                                    :registry/token
                                                    :registry/entry-factory]]]}])]
    (fn [{:keys [:registry/address]}]
      (let [{:keys [:registry/deposit :registry/token :registry/entry-factory]} (:registry @result)]
       [:div
        [with-label
         "Title"
         [text-input {:form-data form-data :id :title}]]
        [with-label
         "Description"
         [text-input {:form-data form-data :id :description}]]
        [:button {:on-click #(dispatch [:create-registry-entry (look {:registry-entry-factory entry-factory
                                                                      :registry-token token
                                                                      :deposit deposit
                                                                      :title (:title @form-data)
                                                                      :description (:description @form-data)})])}
         "Submit"]]))))

(defmethod page :route/create-registry-entry []
  (let [page-params (subscribe [::router-subs/active-page-params])]
    [app-layout
     [registry-detail-header {:registry/address (:registry-address @page-params)}]
     [create-registry-entry-body {:registry/address (:registry-address @page-params)}]]))

(comment

@(subscribe [::gql/query {:queries [[:registry {:registry/address "0x68f10917ae8e15b5f9808d41794564830c12309c"}
                                     [[:registry/entries {:status "regEntry_status_challengePeriod"}
                                       [:reg-entry/address
                                        :reg-entry/title
                                        :reg-entry/description
                                        :reg-entry/status
                                        :reg-entry/token]]]]]}])
(q/graphql-query {:queries [[:registry {:registry/address "0x68f10917ae8e15b5f9808d41794564830c12309c"}
                             [:registry/entries {:status "regEntry_status_challengePeriod"}
                                                                  [:reg-entry/address
                                                                   :reg-entry/title
                                                                   :reg-entry/description
                                                                   :reg-entry/status
                                                                   :reg-entry/token]]]]})
 )
