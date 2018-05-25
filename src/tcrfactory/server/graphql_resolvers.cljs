(ns tcrfactory.server.graphql-resolvers
  (:require [cljs.nodejs :as nodejs]
            [cljs-time.core :as t]
            [clojure.string :as string]
            [district.server.db :as db]
            [district.graphql-utils :as graphql-utils]
            [honeysql.core :as sql]
            [district.server.web3 :as web3]
            [cljs-web3.core :as web3-core]
            [cljs.pprint :as pprint]
            [cljs-web3.eth :as web3-eth]
            [print.foo :include-macros true :refer [look]]
            [taoensso.timbre :as log]
            [tcrfactory.server.db :as meme-db]
            [print.foo :include-macros true :refer [look]]
            [clojure.string :as str]
            [district.server.graphql :refer [run-query]]))

(def enum graphql-utils/kw->gql-name)

(defn- last-block-timestamp []
  (->> (web3-eth/block-number @web3/web3) (web3-eth/get-block @web3/web3) :timestamp))

(defn reg-entry-status [now {:keys [:reg-entry/created-on :reg-entry/challenge-period-end :challenge/challenger
                                    :challenge/commit-period-end :challenge/commit-period-end
                                    :challenge/reveal-period-end :challenge/votes-for :challenge/votes-against]}]

  (cond
    (and (< now challenge-period-end) (not challenger)) :reg-entry.status/challenge-period
    (< now commit-period-end)                           :reg-entry.status/commit-period
    (< now reveal-period-end)                           :reg-entry.status/reveal-period
    (or (< votes-against votes-for)
        (< challenge-period-end now))                   :reg-entry.status/whitelisted
    :else                                               :reg-entry.status/blacklisted))

(defn registry-entries-resolver [{:keys [:reg-entry/registry :reg-entry/status] :as args} context document]
  (log/info "registry-entries resolver args" args)

  (let [sql-query (db/all {:select [:*]
                           :from [:reg-entries]
                           :where [:= registry :reg-entries.reg-entry/registry]})
        now (last-block-timestamp)]
    (reduce (fn [m reg-entry]
              (log/info status (look (reg-entry-status now reg-entry)))
              (if (= status (reg-entry-status now reg-entry))
                (conj m (merge reg-entry
                               {:reg-entry/status (enum status)}))
                m))
            []
            sql-query)))

(defn registry-resolver [{:keys [:registry/address] :as args} context document]
  (log/info "registry resolver args" args)
  (merge (db/get {:select [:*]
                  :from [:registries]
                  :where [:= address :registries.registry/address]})
         {:registry/entries (fn [{:keys [:status] :as args} context document]
                              (registry-entries-resolver {:reg-entry/registry address :reg-entry/status (graphql-utils/gql-name->kw status)} context document))}))

(defn search-registries-resolver [{:keys [keyword] :as args} context document]
  (log/info ":registry " args)
  (db/all {:select [:*]
           :from [:registries]
           :where [:or
                   [:like (sql/call :upper :registries.registry/title) (str/upper-case (str "%" keyword "%"))]
                   [:like (sql/call :upper :registries.registry/description) (str/upper-case (str "%" keyword "%"))]]}))
 
(def graphql-resolvers
  {:registry registry-resolver
   :search-registries search-registries-resolver})

;;;;;;;;;;;
;; Tests ;;
;;;;;;;;;;;

(comment


  (db/get {:select [:*]
                        :from [:registries]
           :where [:= "0x1024477d9d41bc2d4740b152f4f847b8f805cf3a" :registries.registry/address]})

  (run-query {:queries [[:registry {:registry/address "0x1024477d9d41bc2d4740b152f4f847b8f805cf3a"}
                         [:registry/address
                          :registry/title]]]})

  (run-query {:queries [[:search-registries {:keyword "list"}
                         [:registry/address
                          :registry/title
                          :registry/description]]]})

  (run-query {:queries [[:search-registries {:keyword "movies"}
                         [:registry/address
                          :registry/title
                          :registry/description]]]})

  )
