(ns tcrfactory.ui.component.app-layout
  (:require
   [reagent.core :as r]
   [district.ui.component.active-account :refer [active-account]]
   [district.ui.component.active-account-balance :refer [active-account-balance]]
   [tcrfactory.ui.component.app-menu :refer [main-menu]]
   [re-frame.core :refer [dispatch subscribe]]))



(defn app-bar [active-page]
  (let [open? (r/atom nil);;(subscribe [:district0x.transaction-log/open?])
        my-addresses (r/atom nil);;(subscribe [:district0x/my-addresses])
        ]
    (fn [active-page]
      [:div.app-bar
       [:div.menu-section
        ;; [active-account]
        [main-menu @active-page]
        #_[:i.icon.hamburger
         {:on-click (fn [e]
                      (dispatch [:district0x.menu-drawer/set true])
                      (.stopPropagation e))}]]
       [:div.search-section
        ;; [app-bar-search]
        ]
       [:div.addr-section
        {:on-click (fn []
                     (if (empty? @my-addresses)
                       (dispatch [:district0x.location/nav-to :route/how-it-works {}])
                       (dispatch [:district0x.transaction-log/set-open (not @open?)])))}
        (if false;;(empty? @my-addresses)
          [:div "No Accounts"]
          [:div
#_           [active-account-balance
            {:token :ETH
             :locale "en-US"
             :max-fraction-digits 3
             :min-fraction-digits 2}]])
        [:i.icon.transactions]]])))




(defn app-layout [& children]
  (let [active-page (r/atom nil);;(subscribe [:district0x/active-page])
        drawer-open? (r/atom true);;(subscribe [:district0x/menu-drawer-open?])
        ]
    (fn [& children]
      [:div.app-container
       [app-bar active-page]
       (into [:div.app-content] children)])))
