(ns tcrfactory.server.graphql-mock-root-value
  (:require
    [cljs-time.core :as t]
    [cljs-web3.core :as web3]))

(def graphql-mock-root-value
  {:registry (fn []
               {:registry/address "0x148b2fd1d764c72351e548eb602d26afc8dfcac2"
                :registry/title "Top Ethereum Smart-Contract Auditors"
                :registry/description "Currated list of most talented Ethereum smart-contract auditors to hire for your audit job."
                :registry/db "0x65b30b8746eed04c9f685d6caa365747ce07c749"
                :registry/token "0x42455fe00e8d140c6212255349ffa64667279f15"
                :registry/token-total-supply (web3/to-wei 1000000 :ether)
                :registry/token-name "Smart-Contract Auditors TCR"
                :registry/token-symbol "SCA-TCR"
                :registry/challenge-period-duration 300
                :registry/commit-period-duration 300
                :registry/reveal-period-duration 300
                :registry/deposit (web3/to-wei 10 :ether)
                :registry/entries
                (fn []
                  [{:reg-entry/address "0x148b2fd1d764c72351e548eb602d26afc8dfcac2"
                    :reg-entry/version 1
                    :reg-entry/title "Jordi Baylina"
                    :reg-entry/description "Experienced Solidity Developer, well known for auditing smart-contracts.\nWorking for Giveth team. \nhttps://twitter.com/jbaylina"
                    :reg-entry/status :reg-entry.status/whitelisted
                    :reg-entry/creator "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                    :reg-entry/deposit (web3/to-wei 10 :ether)
                    :reg-entry/created-on (t/date-time 2018 05 01)
                    :reg-entry/challenge-period-end (t/date-time 2018 05 02)
                    :challenge/challenger "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                    :challenge/description "Not good"
                    :challenge/reward-pool (web3/to-wei 5 :ether)
                    :challenge/commit-period-end (t/date-time 2018 05 03)
                    :challenge/reveal-period-end (t/date-time 2018 05 04)
                    :challenge/votes-for (web3/to-wei 1 :ether)
                    :challenge/votes-against (web3/to-wei 0.5 :ether)
                    :challenge/votes-total (web3/to-wei 1.5 :ether)}
                   {:reg-entry/address "0x65b30b8746eed04c9f685d6caa365747ce07c749"
                    :reg-entry/version 1
                    :reg-entry/title "Matthew Di Ferrante"
                    :reg-entry/description "Well known Ethereum Foundation developer and contract auditor.  \nhttps://twitter.com/matthewdif"
                    :reg-entry/status :reg-entry.status/challenge-period
                    :reg-entry/creator "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                    :reg-entry/deposit (web3/to-wei 10 :ether)
                    :reg-entry/created-on (t/date-time 2018 05 01)
                    :reg-entry/challenge-period-end (t/date-time 2018 05 02)
                    :challenge/challenger "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                    :challenge/description "Not good"
                    :challenge/reward-pool (web3/to-wei 5 :ether)
                    :challenge/commit-period-end (t/date-time 2018 05 03)
                    :challenge/reveal-period-end (t/date-time 2018 05 04)
                    :challenge/votes-for (web3/to-wei 1 :ether)
                    :challenge/votes-against (web3/to-wei 0.5 :ether)
                    :challenge/votes-total (web3/to-wei 1.5 :ether)}])})
   :search-registries (fn []
                        [{:registry/address "0x148b2fd1d764c72351e548eb602d26afc8dfcac2"
                          :registry/title "Top Ethereum Smart-Contract Auditors"
                          :registry/description "Currated list of most talented Ethereum smart-contract auditors to hire for your audit job."
                          :registry/db "0x65b30b8746eed04c9f685d6caa365747ce07c749"
                          :registry/token "0x42455fe00e8d140c6212255349ffa64667279f15"
                          :registry/token-total-supply (web3/to-wei 1000000 :ether)
                          :registry/token-name "Smart-Contract Auditors TCR"
                          :registry/token-symbol "SCA-TCR"
                          :registry/challenge-period-duration 300
                          :registry/commit-period-duration 300
                          :registry/reveal-period-duration 300
                          :registry/deposit (web3/to-wei 10 :ether)
                          :registry/entries
                          (fn []
                            [{:reg-entry/address "0x148b2fd1d764c72351e548eb602d26afc8dfcac2"
                              :reg-entry/version 1
                              :reg-entry/title "Jordi Baylina"
                              :reg-entry/description "Experienced Solidity Developer, well known for auditing smart-contracts.\nWorking for Giveth team. \nhttps://twitter.com/jbaylina"
                              :reg-entry/status :reg-entry.status/whitelisted
                              :reg-entry/creator "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                              :reg-entry/deposit (web3/to-wei 10 :ether)
                              :reg-entry/created-on (t/date-time 2018 05 01)
                              :reg-entry/challenge-period-end (t/date-time 2018 05 02)
                              :challenge/challenger "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                              :challenge/description "Not good"
                              :challenge/reward-pool (web3/to-wei 5 :ether)
                              :challenge/commit-period-end (t/date-time 2018 05 03)
                              :challenge/reveal-period-end (t/date-time 2018 05 04)
                              :challenge/votes-for (web3/to-wei 1 :ether)
                              :challenge/votes-against (web3/to-wei 0.5 :ether)
                              :challenge/votes-total (web3/to-wei 1.5 :ether)}
                             {:reg-entry/address "0x42455fe00e8d140c6212255349ffa64667279f15"
                              :reg-entry/version 1
                              :reg-entry/title "Matthew Di Ferrante"
                              :reg-entry/description "Well known Ethereum Foundation developer and contract auditor.  \nhttps://twitter.com/matthewdif"
                              :reg-entry/status :reg-entry.status/challenge-period
                              :reg-entry/creator "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                              :reg-entry/deposit (web3/to-wei 10 :ether)
                              :reg-entry/created-on (t/date-time 2018 05 01)
                              :reg-entry/challenge-period-end (t/date-time 2018 05 02)
                              :challenge/challenger "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                              :challenge/description "Not good"
                              :challenge/reward-pool (web3/to-wei 5 :ether)
                              :challenge/commit-period-end (t/date-time 2018 05 03)
                              :challenge/reveal-period-end (t/date-time 2018 05 04)
                              :challenge/votes-for (web3/to-wei 1 :ether)
                              :challenge/votes-against (web3/to-wei 0.5 :ether)
                              :challenge/votes-total (web3/to-wei 1.5 :ether)}])}
                         {:registry/address "0x42455fe00e8d140c6212255349ffa64667279f15"
                          :registry/title "Top Movies of 2017"
                          :registry/description "List of websites known for involvement in fraud and scams."
                          :registry/db "0x65b30b8746eed04c9f685d6caa365747ce07c749"
                          :registry/token "0x42455fe00e8d140c6212255349ffa64667279f15"
                          :registry/token-total-supply (web3/to-wei 1000000 :ether)
                          :registry/token-name "Top Movies of 2017 TCR"
                          :registry/token-symbol "TM-2017"
                          :registry/challenge-period-duration 300
                          :registry/commit-period-duration 300
                          :registry/reveal-period-duration 300
                          :registry/deposit (web3/to-wei 10 :ether)
                          :registry/entries
                          (fn []
                            [{:reg-entry/address "0x65b30b8746eed04c9f685d6caa365747ce07c749"
                              :reg-entry/version 1
                              :reg-entry/title "Top Movies of 2017 Entry 1"
                              :reg-entry/description "Top Movies of 2017 Entry 1 desc"
                              :reg-entry/status :reg-entry.status/whitelisted
                              :reg-entry/creator "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                              :reg-entry/deposit (web3/to-wei 10 :ether)
                              :reg-entry/created-on (t/date-time 2018 05 01)
                              :reg-entry/challenge-period-end (t/date-time 2018 05 02)
                              :challenge/challenger "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                              :challenge/description "Not good"
                              :challenge/reward-pool (web3/to-wei 5 :ether)
                              :challenge/commit-period-end (t/date-time 2018 05 03)
                              :challenge/reveal-period-end (t/date-time 2018 05 04)
                              :challenge/votes-for (web3/to-wei 1 :ether)
                              :challenge/votes-against (web3/to-wei 0.5 :ether)
                              :challenge/votes-total (web3/to-wei 1.5 :ether)}
                             {:reg-entry/address "0x148b2fd1d764c72351e548eb602d26afc8dfcac2"
                              :reg-entry/version 1
                              :reg-entry/title "Top Movies of 2017 Entry 2"
                              :reg-entry/description "Top Movies of 2017 Entry 2 desc"
                              :reg-entry/status :reg-entry.status/challenge-period
                              :reg-entry/creator "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                              :reg-entry/deposit (web3/to-wei 10 :ether)
                              :reg-entry/created-on (t/date-time 2018 05 01)
                              :reg-entry/challenge-period-end (t/date-time 2018 05 02)
                              :challenge/challenger "0x9c077c1325596b6b56d683552fbfbc4ddfa5cdc6"
                              :challenge/description "Not good"
                              :challenge/reward-pool (web3/to-wei 5 :ether)
                              :challenge/commit-period-end (t/date-time 2018 05 03)
                              :challenge/reveal-period-end (t/date-time 2018 05 04)
                              :challenge/votes-for (web3/to-wei 1 :ether)
                              :challenge/votes-against (web3/to-wei 0.5 :ether)
                              :challenge/votes-total (web3/to-wei 1.5 :ether)}])}])})


