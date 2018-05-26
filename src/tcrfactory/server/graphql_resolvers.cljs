(ns tcrfactory.server.graphql-resolvers
  (:require [bignumber.core :as bn]
            [cljs-time.coerce :as tcoerce]
            [cljs-time.core :as t]
            [cljs.nodejs :as nodejs]
            [clojure.string :as str]
            [district.graphql-utils :as graphql-utils]
            [district.server.db :as db]
            [district.server.graphql :refer [run-query]]
            [honeysql.core :as sql]
            [print.foo :refer [look] :include-macros true]
            [taoensso.timbre :as log]
            [tcrfactory.server.contract.registry-entry :as sre]
            [tcrfactory.server.db :as meme-db]))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Not using this anymore  ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn reg-entry-status [now {:keys [:reg-entry/created-on :reg-entry/challenge-period-end :challenge/challenger
;;                                     :challenge/commit-period-end :challenge/commit-period-end
;;                                     :challenge/reveal-period-end :challenge/votes-for :challenge/votes-against] :as args}]
  
;;   (cond
;;     (and (< now challenge-period-end) (not challenger)) :reg-entry.status/challenge-period
;;     (< now commit-period-end)                           :reg-entry.status/commit-period
;;     (< now reveal-period-end)                           :reg-entry.status/reveal-period
;;     (or (< votes-against votes-for)
;;         (< challenge-period-end now))                   :reg-entry.status/whitelisted
;;     :else                                               :reg-entry.status/blacklisted))

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
    (log/info "registry-entries fields" fields)
    (reduce (fn [m {:keys [:challenge/votes-for :challenge/votes-against] :as reg-entry}]
              (let [entry-status (sre/status (:reg-entry/address reg-entry))]
                (log/info status entry-status)
                (if (= status entry-status)
                  (conj m (merge reg-entry
                                 (when (contains? fields :reg-entry/status) {:reg-entry/status (enum status)})
                                 (when (contains? fields :reg-entry/status) {:challenge/votes-total (+ votes-for votes-against)})))
                  m)))
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

  (->> (db/all {:select [:*]
                :from [:reg-entries]})
       (map (fn [re]
              {:title (:reg-entry/title re)
               :blockchain-status (sre/status (:reg-entry/address re))
               :server-status (reg-entry-status (last-block-timestamp) re)
               :get-now (sre/get-now (:reg-entry/address re))
               :latest-block-now (last-block-timestamp)})))
  
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

  (->> (db/all {:select [:*]
                :from [:reg-entries]})
       (map (fn [re]
              {:title (:reg-entry/title re)
               :blockchain-status (sre/status (:reg-entry/address re))
               :server-status (reg-entry-status (last-block-timestamp) re)
               :get-now (bn/number (sre/get-now (:reg-entry/address re)))
               :latest-block-now (last-block-timestamp)})))
  )
