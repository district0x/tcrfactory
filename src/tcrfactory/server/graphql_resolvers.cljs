(ns tcrfactory.server.graphql-resolvers
  (:require [bignumber.core :as bn]
            [cljs-time.coerce :as time-coerce]
            [cljs-time.core :as t]
            [cljs-time.format :as time-format]
            [cljs.nodejs :as nodejs]
            [clojure.string :as str]
            [district.graphql-utils :as graphql-utils]
            [district.server.db :as db]
            [district.server.graphql :refer [run-query]]
            [honeysql.core :as sql]
            [district.server.web3 :as web3]
            [cljs-web3.core :as web3-core]
            [cljs.pprint :as pprint]
            [cljs-web3.eth :as web3-eth]
            [print.foo :refer [look] :include-macros true]
            [taoensso.timbre :as log]
            [tcrfactory.server.contract.registry-entry :as sre]
            [tcrfactory.server.db :as meme-db]
            [tcrfactory.server.contract.registry-token :as registry-token]))

(defn- to-millis [epoch]
  (* 1000 epoch)
  #_(time-format/unparse (time-format/formatters :date) (time-coerce/from-long epoch)))

(def enum graphql-utils/kw->gql-name)

(def graphql-fields (nodejs/require "graphql-fields"))

(defn- last-block-timestamp []
  (time-coerce/to-epoch (t/now)))

(defn- resolver-fields
  "Returns the first order fields"
  [debug] (->> (-> debug
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
;;     (and (< now challenge-period-end) (not challenger)) "regEntry_status_challengePeriod" #_:reg-entry.status/challenge-period
;;     (< now commit-period-end)                           "regEntry_status_commitPeriod" #_:reg-entry.status/commit-period
;;     (< now reveal-period-end)                           "regEntry_status_revealPeriod" #_:reg-entry.status/reveal-period
;;     (or (< votes-against votes-for)
;;         (< challenge-period-end now))                   "regEntry_status_whitelisted" #_:reg-entry.status/whitelisted
;;     :else                                               "regEntry_status_blacklisted" #_:reg-entry.status/blacklisted))

(defn registry-entries-resolver [{:keys [:reg-entry/registry :reg-entry/status] :as args} context document]
  (log/debug "registry-entries resolver args" args)
  (let [fields (resolver-fields document)
        sql-query (db/all {:select (into [:challenge/votes-for
                                          :challenge/votes-against
                                          :reg-entry/created-on :reg-entry/challenge-period-end :challenge/challenger
                                          :challenge/commit-period-end :challenge/commit-period-end
                                          :challenge/reveal-period-end]
                                         (filter #(contains? (set meme-db/registry-entries-column-names) %) fields))
                           :from [:reg-entries]
                           :where [:= registry :reg-entries.reg-entry/registry]})
        now (last-block-timestamp)
        response (reduce (fn [m {:keys [:challenge/votes-for :challenge/votes-against :reg-entry/created-on] :as reg-entry}]
                           (let [entry-status (sre/status (:reg-entry/address reg-entry))]
                             (if (= status entry-status)
                               (conj m (merge reg-entry
                                              {:reg-entry/created-on (to-millis created-on)}
                                              (when (contains? fields :reg-entry/status) {:reg-entry/status (enum status)})
                                              (when (contains? fields :reg-entry/status) {:challenge/votes-total (+ votes-for votes-against)})))
                               m)))
                         []
                         sql-query)]
    (log/debug "registry-entries fields" fields)
    (log/debug "registry-entries query" sql-query)
    (log/info "registry-entries response" response)
    response))

(defn registry-resolver [{:keys [:registry/address] :as args} context document]
  (log/debug "registry resolver args" args)
  (let [fields (resolver-fields document)]
    (let [registry (db/get {:select (into [:registry/address]
                                          (filter #(contains? (set meme-db/registries-column-names) %) fields))
                            :from [:registries]
                            :where [:= address :registries.registry/address]})]
      (merge registry
             {:registry/entries (fn [{:keys [:status] :as args} context document]
                                  (registry-entries-resolver {:reg-entry/registry address
                                                              :reg-entry/status (when status (graphql-utils/gql-name->kw status))}
                                                             context document))
              :registry/token-balance (fn [{:keys [:account]}]
                                        (bn/number (registry-token/balance-of (:registry/token registry)
                                                                              account)))}))))

(defn search-registries-resolver [{:keys [keyword] :as args} context document]
  (log/debug "search-registry args" args)
  (let [sql-query (db/all (merge {:select [:*]
                                  :from [:registries]}
                                 (when keyword {:where [:or
                                                        [:like (sql/call :upper :registries.registry/title) (str/upper-case (str "%" keyword "%"))]
                                                        [:like (sql/call :upper :registries.registry/description) (str/upper-case (str "%" keyword "%"))]]})))]
    (log/debug "search-registry query" sql-query)
    sql-query))

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
