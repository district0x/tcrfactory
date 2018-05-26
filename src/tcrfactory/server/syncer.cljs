(ns tcrfactory.server.syncer
  (:require
    [bignumber.core :as bn]
    [camel-snake-kebab.core :as cs :include-macros true]
    [cljs-web3.core :as web3]
    [cljs-web3.eth :as web3-eth]
    [district.server.config :refer [config]]
    [district.server.smart-contracts :refer [replay-past-events]]
    [district.server.web3 :refer [web3]]
    [district.web3-utils :as web3-utils]
    [mount.core :as mount :refer [defstate]]
    [taoensso.timbre :refer-macros [info warn error]]
    [tcrfactory.server.contract.registry-entry :as registry-entry]
    [tcrfactory.server.contract.registry-factory :as registry-factory]
    [tcrfactory.server.contract.registry-token :as registry-token]
    [tcrfactory.server.db :as db]
    [tcrfactory.server.deployer]
    [tcrfactory.server.generator]))

(declare start)
(declare stop)
(defstate ^{:on-reload :noop} syncer
  :start (start (merge (:syncer @config)
                       (:syncer (mount/args))))
  :stop (stop syncer))

(def info-text "smart-contract event")
(def error-text "smart-contract event error")


(defn on-registry-created [err {:keys [:args]}]
  (info info-text {:args args} ::on-registry-created)
  (try
    (let [{:keys [:registry :db :registry-token :registry-entry-factory :creator :challenge-period-duration
                  :commit-period-duration :reveal-period-duration :deposit :timestamp]} args]
      (db/insert-registry! {:registry/address registry
                            :registry/db db
                            :registry/token registry-token
                            :registry/token-name (registry-token/name registry-token)
                            :registry/token-symbol (registry-token/symbol registry-token)
                            :registry/token-total-supply (bn/number (registry-token/total-supply registry-token))
                            :registry/challenge-period-duration (bn/number challenge-period-duration)
                            :registry/commit-period-duration (bn/number commit-period-duration)
                            :registry/reveal-period-duration (bn/number reveal-period-duration)
                            :registry/deposit (bn/number deposit)
                            :registry/created-on (bn/number timestamp)})) 
    (catch :default e
      (error error-text {:args args :error (ex-message e)} ::on-registry-created))))


(defn on-registry-created2 [err {:keys [:args]}]
  (info info-text {:args args} ::on-registry-created2)
  (try
    (let [{:keys [:registry :title :description :token-name :token-symbol :token-total-supply]} args]
      (db/update-registry! {:registry/address registry
                            :registry/title title
                            :registry/description description
                            :registry/token-name token-name
                            :registry/token-symbol token-symbol
                            :registry/token-total-supply (bn/number token-total-supply)}))
    (catch :default e
      (error error-text {:args args :error (ex-message e)} ::on-registry-created2))))


(defn on-constructed [{:keys [:registry-entry :timestamp] :as args} _]
  (info info-text {:args args} ::on-constructed)
  (try
    (db/insert-registry-entry! (merge (registry-entry/load-registry-entry registry-entry)
                                      (registry-entry/load-registry-entry-challenge registry-entry)
                                      {:reg-entry/created-on timestamp}))
    (catch :default e
      (error error-text {:args args :error (ex-message e)} ::on-constructed))))


(defn on-challenge-created [{:keys [:registry-entry :timestamp] :as args}]
  (info info-text {:args args} ::on-challenge-created)
  (try
    (db/update-registry-entry! (merge (registry-entry/load-registry-entry registry-entry)
                                      (registry-entry/load-registry-entry-challenge registry-entry)
                                      {:challenge/created-on timestamp}))
    (catch :default e
      (error error-text {:args args :error (ex-message e)} ::on-challenge-created))))


(defn on-vote-revealed [{:keys [:registry-entry :timestamp :data] :as args}]
  (info info-text {:args args} ::on-vote-revealed)
  (try
    (db/update-registry-entry! (merge (registry-entry/load-registry-entry registry-entry)
                                      (registry-entry/load-registry-entry-challenge registry-entry)))
    (catch :default e
      (error error-text {:args args :error (ex-message e)} ::on-vote-revealed))))


(def registry-entry-events
  {:constructed on-constructed
   :challenge-created on-challenge-created
   :vote-revealed on-vote-revealed})


(defn dispatch-registry-entry-event [err {{:keys [:event-type] :as args} :args :as event}]
  (let [event-type (cs/->kebab-case-keyword (web3-utils/bytes32->str event-type))]
    (when-let [f (get registry-entry-events event-type identity)]
      (f (-> args
           (assoc :event-type event-type)
           (update :timestamp bn/number)
           (update :version bn/number))
         event
         type))))

(defn start [opts]
  (when-not (web3/connected? @web3)
    (throw (js/Error. "Can't connect to Ethereum node")))

  [(registry-factory/registry-created {} "latest" on-registry-created)
   (registry-factory/registry-created2 {} "latest" on-registry-created2)
   (registry-factory/registry-entry-event {} "latest" dispatch-registry-entry-event)

   (-> (registry-factory/registry-created {} {:from-block 0 :to-block "latest"})
     (replay-past-events on-registry-created))
   (-> (registry-factory/registry-created2 {} {:from-block 0 :to-block "latest"})
     (replay-past-events on-registry-created2))
   (-> (registry-factory/registry-entry-event {} {:from-block 0 :to-block "latest"})
     (replay-past-events dispatch-registry-entry-event))])

(defn stop [syncer]
  (doseq [filter (remove nil? @syncer)]
    (web3-eth/stop-watching! filter (fn [err]))))


