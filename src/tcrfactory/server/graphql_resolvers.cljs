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
            [clojure.string :as str]))

(def graphql-resolvers
  {:registry (fn [{:keys [:registry/address] :as args} context document]
               (merge (db/get {:select [:*]
                               :from [:registries]
                               :where [:= address :registries.registry/address]})
                      :registry/entries (fn [args context document]

                                          )))



   })
