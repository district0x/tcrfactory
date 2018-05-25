(ns district.ui.web3-account-balances
  (:require
    [cljs.spec.alpha :as s]
    [district.ui.web3-account-balances.events :as events]
    [district.ui.web3-accounts]
    [district.ui.web3-balances]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate web3-account-balances
  :start (start (:web3-account-balances (mount/args)))
  :stop (stop))

(s/def ::for-contracts sequential?)
(s/def ::disable-loading-at-start? boolean?)
(s/def ::disable-watching? boolean?)
(s/def ::opts (s/nilable (s/keys :opt-un [::for-contracts ::disable-loading-at-start? ::disable-watching?])))

(defn start [opts]
  (s/assert ::opts opts)
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))
