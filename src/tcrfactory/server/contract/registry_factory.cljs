(ns tcrfactory.server.contract.registry-factory
  (:require [district.server.smart-contracts :refer [contract-call contract-event-in-tx]]))

(defn create-registry [params & [opts]]
  (apply contract-call (concat [:registry-factory
                                :create-registry]
                               ((juxt :title
                                      :description
                                      :token-name
                                      :token-symbol
                                      :total-supply
                                      :token-factory
                                      :challenge-period-duration
                                      :commit-period-duration
                                      :reveal-period-duration
                                      :deposit) params)
                               [(merge {:gas 6200000} opts)])))

(defn registry-created [& args]
  (apply contract-call :registry-factory :RegistryCreated args))

(defn registry-created2 [& args]
  (apply contract-call :registry-factory :RegistryCreated2 args))

(defn registry-created-in-tx [tx-hash & args]
  (apply contract-event-in-tx tx-hash :registry-factory :RegistryCreated args))

(defn registry-entry-event [& args]
  (apply contract-call :registry-factory :RegistryEntryEvent args))

(defn registry-entry-event-in-tx [tx-hash & args]
  (apply contract-event-in-tx tx-hash :registry-factory :RegistryEntryEvent args))