(ns tcrfactory.server.graphql-resolvers
  (:require [cljs.nodejs :as nodejs]
            [cljs-time.core :as t]
            [clojure.string :as string]
            [district.server.db :as db]
            [district.graphql-utils :as graphql-utils]
            [honeysql.core :as sql]
            [district.server.web3 :as web3]
            [cljs-web3.core :as web3-core]
            [cljs-web3.eth :as web3-eth]
            [taoensso.timbre :as log]
            [tcrfactory.server.db :as meme-db]
            [print.foo :include-macros true :refer [look]]
            [clojure.string :as str]
            [district.server.graphql :refer [run-query]]))

(defn registry-entries-resolver [args context document]
(log/info "registry-entries resolver args" args)
  {})

(defn registry-resolver [{:keys [:registry/address] :as args} context document]
  (log/info "registry resolver args" args)
  (merge (db/get {:select [:*]
                  :from [:registries]
                  :where [:= address :registries.registry/address]})
         {:registry/entries (registry-entries-resolver args context document)}))

(defn search-registries-resolver [{:keys [keyword] :as args} context document]
  (log/info ":registry " args)
  (db/all {:select [:*]
           :from [:registries]
           :where [:or
                   [:like (sql/call :upper :registries.registry/title) (str/upper-case (str "%" keyword "%"))]
                   [:like (sql/call :upper :registries.registry/description) (str/upper-case (str "%" keyword "%"))]]}))
 
(def graphql-resolvers

  {:registry registry-resolver 
   :search-registries search-registries-resolver })

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
