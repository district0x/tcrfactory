(ns district.ui.web3-tx-log
  (:require
    [akiroz.re-frame.storage :as re-frame-storage]
    [cljs.spec.alpha :as s]
    [district.ui.web3-tx-log.events :as events]
    [district.ui.web3-tx]
    [district.ui.web3-tx-log-core]
    [district.ui.web3-tx-costs]
    [district.ui.web3-accounts]
    [mount.core :as mount :refer [defstate]]
    [re-frame.core :refer [dispatch-sync]]))

(declare start)
(declare stop)
(defstate web3-tx-log
          :start (start (:web3-tx-log (mount/args)))
          :stop (stop))

(s/def ::disable-using-localstorage? boolean?)
(s/def ::open-on-tx-hash? boolean?)
(s/def ::tx-costs-currencies ::district.ui.web3-tx-costs/currencies)
(s/def ::opts (s/nilable (s/keys :opt-un [::disable-using-localstorage?
                                          ::tx-costs-currencies
                                          ::open-on-tx-hash?])))

(defn start [opts]
  (s/assert ::opts opts)
  (re-frame-storage/reg-co-fx! :district.ui.web3-tx-log {:fx :web3-tx-log-localstorage :cofx :web3-tx-log-localstorage})
  (dispatch-sync [::events/start opts])
  opts)


(defn stop []
  (dispatch-sync [::events/stop]))

