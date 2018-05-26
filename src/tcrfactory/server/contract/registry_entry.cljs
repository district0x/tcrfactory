(ns tcrfactory.server.contract.registry-entry
  (:require
    [bignumber.core :as bn]
    [camel-snake-kebab.core :as cs :include-macros true]
    [cljs-solidity-sha3.core :refer [solidity-sha3]]
    [cljs-web3.eth :as web3-eth]
    [district.server.smart-contracts :refer [contract-call instance contract-address]]
    [tcrfactory.server.contract.registry-token :as registry-token]
    [tcrfactory.shared.contract.registry-entry :refer [parse-status parse-load-registry-entry
                                                       parse-load-registry-entry-challenge
                                                       parse-load-vote vote-option->num]]))

(defn registry [contract-addr]
  (contract-call [:registry-entry contract-addr] :registry))

(defn status
  [contract-addr]
  (parse-status (contract-call [:registry-entry contract-addr] :status)))

(defn get-now
  [contract-addr]
  (contract-call [:registry-entry contract-addr] :get-now))

(defn load-registry-entry [contract-addr]
  (parse-load-registry-entry
    contract-addr
    (contract-call (instance :registry-entry contract-addr) :load-registry-entry)))

(defn load-registry-entry-challenge [contract-addr]
  (parse-load-registry-entry-challenge
    contract-addr
    (contract-call (instance :registry-entry contract-addr) :load-registry-entry-challenge)))

(defn create-challenge [contract-addr {:keys [:challenger :description]} & [opts]]
  (contract-call (instance :registry-entry contract-addr) :create-challenge challenger description (merge {:gas 1200000} opts)))

(defn create-challenge-data [{:keys [:challenger :description]}]
  (web3-eth/contract-get-data (instance :registry-entry) :create-challenge challenger description))

(defn approve-and-create-challenge [token-contract-addr contract-addr {:keys [:amount] :as args} & [opts]]
  (registry-token/approve-and-call
    token-contract-addr
    {:spender contract-addr
     :amount amount
     :extra-data (create-challenge-data (merge {:challenger (:from opts)} args))}
    (merge {:gas 6000000} opts)))

(defn commit-vote [contract-addr {:keys [:voter :amount :vote-option :salt]} & [opts]]
  (contract-call (instance :registry-entry contract-addr) :commit-vote voter amount (solidity-sha3 (vote-option->num vote-option) salt) (merge {:gas 1200000} opts)))

(defn commit-vote-data [{:keys [:voter :amount :vote-option :salt]}]
  (web3-eth/contract-get-data (instance :registry-entry) :commit-vote voter amount (solidity-sha3 (vote-option->num vote-option) salt)))

(defn approve-and-commit-vote [token-addr {:keys [:amount] :as args} & [opts]]
  (registry-token/approve-and-call token-addr
                                   {:spender token-addr
                                    :amount amount
                                    :extra-data (commit-vote-data (merge {:voter (:from opts)} args))}
                                   (merge opts {:gas 1200000})))

(defn reveal-vote [contract-addr {:keys [:vote-option :salt]} & [opts]]
  (contract-call (instance :registry-entry contract-addr) :reveal-vote (vote-option->num vote-option) salt (merge {:gas 500000} opts)))

(defn claim-vote-reward [contract-addr & [opts]]
  (contract-call (instance :registry-entry contract-addr) :claim-vote-reward (:from opts) (merge {:gas 500000} opts)))

(defn load-vote [contract-addr voter-address]
  (parse-load-vote
    contract-addr
    voter-address
    (contract-call (instance :registry-entry contract-addr) :load-vote voter-address)))

(defn vote-reward [contract-addr voter-address]
  (contract-call (instance :registry-entry contract-addr) :vote-reward voter-address))

(defn voting-token-balance-of [contract-addr voter-address]
  (contract-call (instance :registry-entry contract-addr) :voting-token-balance-of voter-address))

(defn claim-challenge-reward [contract-addr & [opts]]
  (contract-call (instance :registry-entry contract-addr) :claim-challenge-reward (merge {:gas 500000} opts)))

