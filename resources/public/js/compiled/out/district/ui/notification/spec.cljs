(ns district.ui.notification.spec
  (:require [cljs.spec.alpha :as s]))

(def pos-int #(and % integer? pos?))

(s/def ::default-show-duration pos-int)
(s/def ::show-duration pos-int)
(s/def ::hide-duration pos-int)
(s/def ::default-hide-duration pos-int)
(s/def ::message string?)
(s/def ::open? boolean?)
(s/def ::notification (s/or :string ::message
                            :map (s/keys :req-un [::message]
                                    :opt-un [::open? ::show-duration])))

(s/def ::queue (s/+ ::notification))
(s/def ::opts (s/nilable (s/keys :req-un [::default-show-duration ::default-hide-duration]
                                 :opt-un [::notification ::queue])))
