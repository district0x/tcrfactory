(ns district.ui.smart-contracts
  (:require
    [cljs-web3.core :as web3]
    [cljs.spec.alpha :as s]
    [district.ui.smart-contracts.events :as events]
    [district.ui.web3]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate smart-contracts
  :start (start (:smart-contracts (mount/args)))
  :stop (stop))

(s/def ::disable-loading-at-start? boolean?)
(s/def ::load-bin? boolean?)
(s/def ::contracts-path string?)
(s/def ::request-timeout number?)
(s/def ::contracts-version any?)

(s/def ::contract-key keyword?)
(s/def ::name string?)
(s/def ::address web3/address?)
(s/def ::abi array?)
(s/def ::bin string?)
(s/def ::path string?)
(s/def ::version any?)
(s/def ::contract (s/keys :opt-un [::name ::address ::abi ::bin ::path ::version]))
(s/def ::contracts (s/map-of ::contract-key ::contract))

(s/def ::opts (s/nilable (s/keys :req-un [::contracts]
                                 :opt-un [::load-bin? ::contracts-path ::disable-loading-at-start?
                                          ::request-timeout ::contracts-version])))


(defn start [opts]
  (s/assert ::opts opts)
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))

