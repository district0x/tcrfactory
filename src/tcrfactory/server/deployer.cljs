(ns tcrfactory.server.deployer
  (:require
    [cljs-web3.core :as web3]
    [cljs-web3.eth :as web3-eth]
    [district.cljs-utils :refer [rand-str]]
    [district.server.config :refer [config]]
    [district.server.smart-contracts :refer [contract-event-in-tx contract-address deploy-smart-contract! write-smart-contracts!]]
    [district.server.web3 :refer [web3]]
    [tcrfactory.server.contract.ds-auth :as ds-auth]
    [tcrfactory.server.contract.ds-guard :as ds-guard]
    [tcrfactory.server.contract.mutable-forwarder :as mutable-forwarder]
    [tcrfactory.server.contract.registry :as registry]
    [mount.core :as mount :refer [defstate]]))

(declare deploy)
(defstate ^{:on-reload :noop} deployer
  :start (deploy (merge (:deployer @config)
                        (:deployer (mount/args)))))

(def forwarder-target-placeholder "beefbeefbeefbeefbeefbeefbeefbeefbeefbeef")

(defn deploy-registry! [default-opts]
  (deploy-smart-contract! :registry (merge default-opts {:gas 3200000})))

(defn deploy-registry-entry! [default-opts]
  (deploy-smart-contract! :registry-entry (merge default-opts {:gas 3200000})))

(defn deploy-registry-factory! [default-opts]
  (deploy-smart-contract! :registry-factory (merge default-opts {:gas 6200000
                                                                 :arguments [(contract-address :registry)]
                                                                 :placeholder-replacements
                                                                 {forwarder-target-placeholder :registry-entry}})))

(defn deploy-minime-token-factory! [default-opts]
  (deploy-smart-contract! :minime-token-factory (merge default-opts {:gas 2300000})))

(defn deploy-ds-guard! [default-opts]
  (deploy-smart-contract! :ds-guard (merge default-opts {:gas 1000000})))

(defn deploy [{:keys [:write?]
               :as deploy-opts}]
  (let [accounts (web3-eth/accounts @web3)
        deploy-opts (merge {:from (last accounts)}
                           deploy-opts)]

    (deploy-minime-token-factory! deploy-opts)

    (deploy-registry-entry! deploy-opts)

    (deploy-registry! deploy-opts)

    (deploy-registry-factory! deploy-opts)

    (when write?
      (write-smart-contracts!))))
