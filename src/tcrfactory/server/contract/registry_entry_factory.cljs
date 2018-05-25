(ns tcrfactory.server.contract.registry-entry-factory
  (:require
    [district.server.smart-contracts :refer [contract-call instance contract-event-in-tx]]
    [tcrfactory.server.contract.registry-token :as registry-token]
    [cljs-web3.eth :as web3-eth]))


(defn create-registry-entry-data [{:keys [:creator :title :description]}]
  (web3-eth/contract-get-data (instance :registry-entry-factory) :create-registry-entry creator title description))


(defn approve-and-create-registry-entry [{:keys [:deposit :registry-token :registry-entry-factory] :as args} & [opts]]
  (registry-token/approve-and-call
    registry-token
    {:spender registry-entry-factory
     :amount deposit
     :extra-data (create-registry-entry-data (merge {:creator (:from opts)} args))}
    (merge {:gas 6000000} opts)))
