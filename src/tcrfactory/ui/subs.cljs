(ns tcrfactory.ui.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :vote-option
 (fn [db [_ {:keys [:reg-entry/address :account]}]]
   (get-in db [:vote-options account address])))

(re-frame/reg-sub
 :current-status
 (fn [db]
   (:current-status db))) 

