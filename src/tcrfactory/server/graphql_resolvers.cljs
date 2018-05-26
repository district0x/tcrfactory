(ns tcrfactory.server.graphql-resolvers
  (:require [cljs.nodejs :as nodejs]
            [cljs-time.core :as t]
            [cljs-time.coerce :as tcoerce]
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

(def graphql-fields (nodejs/require "graphql-fields"))

(defn- last-block-timestamp []
  (tcoerce/to-epoch (t/now)))

(defn- resolver-fields
  "Returns the first order fields"
  [info] (->> (-> info
                  graphql-fields
                  js->clj)
              keys
              (map graphql-utils/gql-name->kw)
              set))

(defn reg-entry-status [now {:keys [:reg-entry/created-on :reg-entry/challenge-period-end :challenge/challenger
                                    :challenge/commit-period-end :challenge/commit-period-end
                                    :challenge/reveal-period-end :challenge/votes-for :challenge/votes-against] :as args}]
  
  (cond
    (and (< now challenge-period-end) (not challenger)) :reg-entry.status/challenge-period
    (< now commit-period-end)                           :reg-entry.status/commit-period
    (< now reveal-period-end)                           :reg-entry.status/reveal-period
    (or (< votes-against votes-for)
        (< challenge-period-end now))                   :reg-entry.status/whitelisted
    :else                                               :reg-entry.status/blacklisted))

(defn registry-entries-resolver [{:keys [:reg-entry/registry :reg-entry/status] :as args} context document]
  (log/info "registry-entries resolver args" args)
  (let [fields (resolver-fields document)
        sql-query (db/all {:select (into [:challenge/votes-for
                                          :challenge/votes-against
                                          :reg-entry/created-on :reg-entry/challenge-period-end :challenge/challenger
                                          :challenge/commit-period-end :challenge/commit-period-end
                                          :challenge/reveal-period-end]
                                         (filter #(contains? (set meme-db/registry-entries-column-names) %) fields))
                           :from [:reg-entries]
                           :where [:= registry :reg-entries.reg-entry/registry]})
        now (last-block-timestamp)]
    (log/info "registry-entries fields" (look fields))
    (reduce (fn [m {:keys [:challenge/votes-for :challenge/votes-against] :as reg-entry}]
              (log/info status (reg-entry-status now reg-entry))
              (if (= status (reg-entry-status now reg-entry))
                (conj m (merge reg-entry
                               (when (contains? fields :reg-entry/status) {:reg-entry/status (enum status)})
                               (when (contains? fields :reg-entry/status) {:challenge/votes-total (+ votes-for votes-against)})))
                m))
            []
            sql-query)))

(defn registry-resolver [{:keys [:registry/address] :as args} context document]
  (log/info "registry resolver args" args)
  (let [fields (resolver-fields document)]
    (merge (db/get {:select (into [:registry/address]
                                  (filter #(contains? (set meme-db/registries-column-names) %) fields))
                    :from [:registries]
                    :where [:= address :registries.registry/address]})
           {:registry/entries (fn [{:keys [:status] :as args} context document]
                                (registry-entries-resolver {:reg-entry/registry address
                                                            :reg-entry/status (when status (graphql-utils/gql-name->kw status))} context document))})))

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

  (run-query {:queries [[:search-registries {:keyword "movies"}
                         [:registry/address
                          :registry/title
                          :registry/description]]]})

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
