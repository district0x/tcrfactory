(ns tcrfactory.server.generator
  (:require
    [bignumber.core :as bn]
    [cljs-time.core :as t]
    [cljs-web3.core :as web3]
    [cljs-web3.eth :as web3-eth]
    [cljs-web3.evm :as web3-evm]
    [cljs-web3.utils :refer [js->cljkk camel-case]]
    [district.cljs-utils :refer [rand-str]]
    [district.server.config :refer [config]]
    [district.server.smart-contracts :refer [contract-address contract-call instance]]
    [district.server.web3 :refer [web3]]
    [medley.core :as medley]
    [mount.core :as mount :refer [defstate]]
    [tcrfactory.server.contract.registry-token :as registry-token]
    [tcrfactory.server.contract.registry :as registry]
    [tcrfactory.server.contract.registry-entry :as registry-entry]
    [tcrfactory.server.contract.registry-entry-factory :as registry-entry-factory]
    [tcrfactory.server.contract.registry-factory :as registry-factory]
    [tcrfactory.server.deployer]))

(declare start)
(defstate ^{:on-reload :noop} generator :start (start (merge (:generator @config)
                                                             (:generator (mount/args)))))


(def registries
  [{:title "Best & Affordable Skin Products"
    :description "Best skin products out there for reasonable prices."
    :token-symbol "ASP-TCR"
    :entries [{:from-n 1
               :title "Biossance Squalane"
               :description "Biossance found a way to derive it from sugarcane, making it pore-friendly, incredibly soothing."
               :challenge {:from-n 3
                           :description "This product is not good, I've tried."}}
              {:from-n 2
               :title "Drunk Elephant C-Firma Day Serum"
               :description "Drunk Elephant contains a gentle, yet effective, 15-percent concentration of the good stuff."}]}
   {:title "Top Movies of 2017"
    :description "List of best movies released in 2017."
    :token-symbol "M2017-TCR"
    :entries [{:from-n 0
               :title "Star Wars: The Last Jedi"
               :description "Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. "}
              {:from-n 2
               :title "Blade Runner 2049"
               :description "Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos."}]}
   {:title "Top Ethereum Smart-Contract Auditors"
    :description "Currated list of most talented Ethereum smart-contract auditors to hire for your audit job."
    :token-symbol "SCA-TCR"
    :entries [{:from-n 5
               :title "Jordi Baylina"
               :description "Experienced Solidity Developer, well known for auditing smart-contracts.\nWorking for Giveth team. \nhttps://twitter.com/jbaylina"}
              {:from-n 6
               :title "Matthew Di Ferrante"
               :description "Well known Ethereum Foundation developer and contract auditor.  \nhttps://twitter.com/matthewdif"}]}
   {:title "Best Web Design Companies in US"
    :description "Carefully curated list of best web design companies in US."
    :token-symbol "USWD-TCR"}
   {:title "Best Laptops of 2018"
    :description "List of best laptops released in 2018"
    :token-symbol "L2018-TCR"}
   {:title "Best Hostels in New York"
    :description "Discover list of best hostels in New York."
    :token-symbol "HNY-TCR"}
   {:title "Fraudulent Ecommerce Websites"
    :description "List of websites known for involvement in fraud and scams. "
    :token-symbol "FEW-TCR"}])


(defn start [{:keys [:tcr-count :total-supply :deposit] :as opts}]
  (let [accounts (web3-eth/accounts @web3)]
    (doseq [[i {:keys [:title :description :token-symbol :entries]}] (medley/indexed (take tcr-count registries))]
      (println "Creating:" title)
      (let [tcr-creator (nth accounts i)
            tx-hash (registry-factory/create-registry {:title title
                                                       :description description
                                                       :token-name title
                                                       :token-symbol token-symbol
                                                       :total-supply total-supply
                                                       :token-factory (contract-address :minime-token-factory)
                                                       :challenge-period-duration (:challenge-period-duration opts)
                                                       :commit-period-duration (:commit-period-duration opts)
                                                       :reveal-period-duration (:reveal-period-duration opts)
                                                       :deposit deposit}
                                                      {:from tcr-creator})]

        (let [{:keys [:registry :db :registry-token :registry-entry-factory]}
              (:args (registry-factory/registry-created-in-tx tx-hash))]

          (registry-token/batch-transfer registry-token
                                         {:to (remove #(= tcr-creator %) accounts)
                                          :amount (* (bn/number deposit) 3)}
                                         {:from tcr-creator})

          (doseq [{:keys [:from-n :title :description :challenge]} entries]
            (let [reg-entry-creator (nth accounts from-n)]

              (let [tx-hash (registry-entry-factory/approve-and-create-registry-entry
                              {:deposit deposit
                               :registry-token registry-token
                               :registry-entry-factory registry-entry-factory
                               :title title
                               :description description}
                              {:from reg-entry-creator})
                    {:keys [:registry-entry]} (:args (registry-factory/registry-entry-event-in-tx tx-hash))]

                (when-not registry-entry
                  (throw (js/Error. "Registry entry was not created")))

                (when challenge
                  (let [challenge-creator (nth accounts (:from-n challenge))]

                    (let [tx-hash (registry-entry/approve-and-create-challenge
                                    registry-token
                                    registry-entry
                                    {:amount deposit
                                     :description (:description challenge)}
                                    {:from challenge-creator})
                          {:keys [:registry-entry]} (:args (registry-factory/registry-entry-event-in-tx tx-hash))]

                      (when-not registry-entry
                        (throw (js/Error. "Challenge was not created"))))))))))))))
