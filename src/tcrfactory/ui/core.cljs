(ns tcrfactory.ui.core
  (:require
    [cljs.spec.alpha :as s]
    [district.ui.component.router :refer [router]]
    [district.ui.graphql]
    [district.ui.notification]
    [district.ui.now]
    [district.ui.reagent-render]
    [district.ui.router-google-analytics]
    [district.ui.router]
    [district.ui.smart-contracts]
    [district.ui.web3-account-balances]
    [district.ui.web3-accounts]
    [district.ui.web3-balances]
    [district.ui.web3-sync-now]
    [district.ui.web3-tx-id]
    [district.ui.web3-tx-log]
    [district.ui.web3-tx]
    [district.ui.web3]
    [district.ui.window-size]
    [mount.core :as mount]
    [print.foo :include-macros true]
    [tcrfactory.shared.graphql-schema :refer [graphql-schema]]
    [tcrfactory.shared.routes :refer [routes]]
    [tcrfactory.shared.smart-contracts :refer [smart-contracts]]
    [tcrfactory.ui.component.create-registry]
    [tcrfactory.ui.component.home]
    [tcrfactory.ui.component.registry-detail]
    [tcrfactory.ui.component.search-registries]
    [tcrfactory.ui.events]
    [tcrfactory.ui.subs]))

(def debug? ^boolean js/goog.DEBUG)

(defn ^:export init []
  (s/check-asserts debug?)
  (enable-console-print!)
  (-> (mount/with-args
        {:web3 {:url "http://localhost:8549"}
         :smart-contracts {:contracts smart-contracts}
         :web3-tx-log {:open-on-tx-hash? true
                       :tx-costs-currencies [:USD]}
         :reagent-render {:id "app"
                          :component-var #'router}
         :router {:routes routes
                  :default-route :route/home
                  :html5? false}
         :router-google-analytics {:enabled? (not debug?)}
         :graphql {:schema graphql-schema
                   :url "http://localhost:6400/graphql"}})
    (mount/start)))
