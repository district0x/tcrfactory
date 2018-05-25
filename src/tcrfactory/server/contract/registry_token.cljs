(ns tcrfactory.server.contract.registry-token
  (:require
    [bignumber.core :as bn]
    [district.server.smart-contracts :refer [contract-call]])
  (:refer-clojure :exclude [symbol name]))

(defn approve-and-call [contract-addr {:keys [:spender :amount :extra-data]} & [opts]]
  (contract-call [:registry-token contract-addr] :approve-and-call spender (bn/number amount) extra-data (merge {:gas 4000000} opts)))

(defn approve [contract-addr {:keys [:spender :amount]} & [opts]]
  (contract-call [:registry-token contract-addr] :approve spender (bn/number amount) (merge {:gas 1000000} opts)))

(defn transfer [contract-addr {:keys [:to :amount]} & [opts]]
  (contract-call [:registry-token contract-addr] :transfer to (bn/number amount) (merge {:gas 200000} opts)))

(defn balance-of [contract-addr owner]
  (contract-call [:registry-token contract-addr] :balance-of owner))

(defn total-supply [contract-addr]
  (contract-call [:registry-token contract-addr] :total-supply))

(defn name [contract-addr]
  (contract-call [:registry-token contract-addr] :name))

(defn symbol [contract-addr]
  (contract-call [:registry-token contract-addr] :symbol))

(defn controller [contract-addr]
  (contract-call [:registry-token contract-addr] :controller))

(defn batch-transfer [contract-addr {:keys [:to :amount]} & [opts]]
  (contract-call [:registry-token contract-addr] :batch-transfer to amount (merge {:gas 6000000} opts)))
