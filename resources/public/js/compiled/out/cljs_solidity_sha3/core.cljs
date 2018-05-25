(ns cljs-solidity-sha3.core
  (:require
    [cljs-web3.core :as web3]
    [clojure.string :as string]
    [cljs.pprint :refer [cl-format]]))

(defn remove-0x [s]
  (string/replace s #"0x" ""))


(defn left-pad
  ([s len] (left-pad s len " "))
  ([s len ch]
   (cl-format nil (str "~" len ",'" ch "d") (str s))))


(defn solidity-sha3 [& args]
  (web3/sha3 (string/join ""
                          (map (fn [arg]
                                 (cond
                                   (and (string? arg) (string/starts-with? arg "0x"))
                                   (remove-0x arg)

                                   (string? arg)
                                   (remove-0x (web3/to-hex arg))

                                   (number? arg)
                                   (left-pad (remove-0x (web3/to-hex arg)) 64 "0")))
                               args))
             {:encoding "hex"}))
