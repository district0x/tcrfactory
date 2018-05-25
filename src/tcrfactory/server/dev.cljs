(ns tcrfactory.server.dev
  (:require [cljs-time.core :as t]
            [cljs-web3.core :as web3]
            [cljs.nodejs :as nodejs]
            [cljs.pprint :as pprint :refer [print-table]]
            [clojure.string :as str]
            [district.server.db :as db]
            [district.server.graphql :as graphql]
            [district.server.middleware.logging :refer [logging-middlewares]]
            district.server.smart-contracts
            [district.server.web3 :refer [web3]]
            [mount.core :as mount]
            tcrfactory.server.db
            tcrfactory.server.deployer
            tcrfactory.server.generator
            [tcrfactory.server.graphql-mock-root-value
             :refer
             [graphql-mock-root-value]]
            tcrfactory.server.syncer
            [tcrfactory.server.graphql-resolvers :refer [graphql-resolvers]]
            [tcrfactory.shared.graphql-schema :refer [graphql-schema]]
            tcrfactory.shared.smart-contracts))


(nodejs/enable-util-print!)

(def graphql-module (nodejs/require "graphql"))
(def parse-graphql (aget graphql-module "parse"))
(def visit (aget graphql-module "visit"))

(defn on-jsload []
  (graphql/restart {:root-value graphql-resolvers :schema graphql-schema}))


(defn deploy-to-mainnet []
  (mount/stop #'district.server.web3/web3
              #'district.server.smart-contracts/smart-contracts)
  (mount/start-with-args (merge
                          (mount/args)
                          {:web3 {:port 8545}
                           :deployer {:write? true
                                      :gas-price (web3/to-wei 4 :gwei)}})
                         #'district.server.web3/web3
                         #'district.server.smart-contracts/smart-contracts))


(defn redeploy []
  (mount/stop)
  (-> (mount/with-args
        (merge
         (mount/args)
         {:deployer {:write? true}}))
      (mount/start)
      pprint/pprint))


(defn resync []
  (mount.core/stop #'tcrfactory.server.db/tcrfactory-db
                   #'tcrfactory.server.syncer/syncer)
  (-> (mount.core/start #'tcrfactory.server.db/tcrfactory-db
                        #'tcrfactory.server.syncer/syncer)
      pprint/pprint))

(defn -main [& _]
  (-> (mount/with-args
        {:config {:default {:logging {:level "info"
                                      :console? true}
                            :graphql {:port 6400
                                      :middlewares [logging-middlewares]
                                      :schema graphql-schema
                                      :root-value graphql-resolvers
                                      :path "/graphql"
                                      :graphiql true}
                            :web3 {:port 8549}
                            :generator {:tcr-count 7
                                        :total-supply (web3/to-wei 1000000000 :ether)
                                        :challenge-period-duration (t/in-seconds (t/minutes 5))
                                        :commit-period-duration (t/in-seconds (t/minutes 5))
                                        :reveal-period-duration (t/in-seconds (t/minutes 5))
                                        :deposit (web3/to-wei 1000 :ether)}
                            :deployer {}}}
         :smart-contracts {:contracts-var #'tcrfactory.shared.smart-contracts/smart-contracts
                           :print-gas-usage? true
                           :auto-mining? true}})
      (mount/except [#'tcrfactory.server.deployer/deployer
                     #'tcrfactory.server.generator/generator])
      (mount/start)
      pprint/pprint))

(set! *main-cli-fn* -main)

(defn select
  "Usage: (select [:*] :from [:memes])"
  [& [select-fields & r]]
  (-> (db/all (->> (partition 2 r)
                   (map vec)
                   (into {:select select-fields})))
      (print-table)))

(defn print-db
  "Prints all db tables to the repl"
  []
  (let [all-tables (->> (db/all {:select [:name] :from [:sqlite-master] :where [:= :type "table"]})
                        (map :name))]
    (doseq [t all-tables]
      (println "#######" (str/upper-case t) "#######")
      (select [:*] :from [(keyword t)])
      (println "\n\n"))))
