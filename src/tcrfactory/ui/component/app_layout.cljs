(ns tcrfactory.ui.component.app-layout
  (:require
   [reagent.core :as r]
   [district.ui.component.active-account :refer [active-account]]
   [district.ui.component.active-account-balance :refer [active-account-balance]]
    [re-frame.core :refer [dispatch subscribe]]))

(def nav-menu-items-props [{:text "Search Registry"
                            :route :route/search-registries
                            :class :marketplace}
                           {:text "Create Registry"
                            :route :route/create-registry
                            :class :dankregistry
                            ;; :children [{:text "Submit"
                            ;;             :route :route.marketplace/index}
                            ;;            {:text "Vote"
                            ;;             :route :route.marketplace/index}]
                            }])

(defn path-for [path]
  (str "#/" (name path)))

(defn current-page? [a b]
  (= a b))

(defn app-menu [props active-page]
  [:div.app-menu
   (doall
    (for [{:keys [:text :route :href :class :children]} props]
      (let [href (or href (path-for route))]
        [:div.node
         [:div.item
          {:class (concat [class] (when (current-page? active-page href)));; (conj [class] )
           }
          [:a {:href href} text]]
         (when children
           [app-menu children active-page])
         ])))])

(defn app-bar [active-page]
  (let [open? (r/atom nil);;(subscribe [:district0x.transaction-log/open?])
        my-addresses (r/atom nil);;(subscribe [:district0x/my-addresses])
        ]
    (fn [active-page]
      [:div.app-bar
       [:div.menu-section
        ;; [active-account]
        [app-menu nav-menu-items-props @active-page]
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
           [active-account-balance
            {:token :ETH
             :locale "en-US"
             :max-fraction-digits 3
             :min-fraction-digits 2}]])
        [:i.icon.transactions]]])))




(defn app-layout [& children]
  (let [active-page (r/atom nil);;(subscribe [:district0x/active-page])
        drawer-open? (r/atom true);;(subscribe [:district0x/menu-drawer-open?])
        ]
    [:div
     [app-bar active-page]
     [:div.app-content]
     (vec
      (concat
       [:div]
       children))]))
