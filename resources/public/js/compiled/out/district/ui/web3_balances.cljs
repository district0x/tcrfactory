(ns district.ui.web3-balances
  (:require
    [cljs-web3.core :as web3]
    [cljs.spec.alpha :as s]
    [district.ui.web3-balances.events :as events]
    [district.ui.web3]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate web3-balances
  :start (start (:web3-balances (mount/args)))
  :stop (stop))

(s/def ::address web3/address?)
(s/def ::contract (s/keys :req-un [::address]))
(s/def ::contracts (s/map-of any? ::contract))
(s/def ::opts (s/nilable (s/keys :opt-un [::contracts])))


(defn start [opts]
  (s/assert ::opts opts)
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop @web3-balances]))
