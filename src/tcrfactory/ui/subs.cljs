(ns tcrfactory.ui.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :vote-option
 (fn [db {:keys [:reg-entry/address :account]}]
   (get-in db [:vote-options account address]))) 
