(ns district.web3-utils
  (:require
    [bignumber.core :as bn]
    [cljs-time.coerce :as time-coerce]
    [cljs-time.core :as t]
    [cljs-web3.core :as web3]
    [clojure.string :as string]))

(defn wei->eth [x]
  (when x
    (try
      (web3/from-wei x :ether)
      (catch :default _
        nil))))

(def wei->eth-number (comp bn/number wei->eth))

(defn eth->wei [x]
  (when x
    (try
      (web3/to-wei (if (string? x)
                     (string/replace x \, \.)
                     x)
                   :ether)
      (catch :default _
        nil))))

(def eth->wei-number (comp bn/number eth->wei))

(def zero-address "0x0000000000000000000000000000000000000000")

(defn zero-address? [x]
  (or (= x zero-address)
      (= x "0x")))

(defn empty-address? [x]
  (or (empty? x)
      (zero-address? x)))

(defn remove-0x [s]
  (string/replace s #"0x" ""))

(defn web3-time->date-time [x]
  (time-coerce/from-long (* (bn/number x) 1000)))

(defn web3-time->local-date-time [x]
  (when-let [dt (web3-time->date-time x)]
    (t/to-default-time-zone dt)))

(defn prepend-address-zeros [address]
  (let [n (- 42 (count address))]
    (if (pos? n)
      (->> (subs address 2)
        (str (string/join (take n (repeat "0"))))
        (str "0x"))
      address)))

(defn remove-zero-chars [s]
  (string/join (take-while #(< 0 (.charCodeAt % 0)) s)))

(def bytes32->str (comp remove-zero-chars web3/to-ascii))

(def uint->address (comp prepend-address-zeros web3/from-decimal))
