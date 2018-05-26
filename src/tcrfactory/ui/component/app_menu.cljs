(ns tcrfactory.ui.component.app-menu
  (:require
   [reagent.core :as r]
   [district.ui.router.utils :as router-utils]
   [re-frame.core :refer [dispatch subscribe]]
   [tcrfactory.ui.utils :as utils]))

(def nav-menu-items-props [{:text "Search Registry"
                            :route :route/search-registries
                            :icon :search
                            :class :search-registry}
                           {:text "Create Registry"
                            :route :route/create-registry
                            :icon :edit
                            :class :create-registry
                            }])

(defn current-page? [a b]
  (= a b))

(defn menu [props active-page]
  [:div.ui.two.item.menu
   (doall
    (for [{:keys [:icon :text :route :href :class :children]} props]
      (let [href (or href (utils/path route))]
        ^{:key route} [:div.item
                       {:class (concat [class] (when (current-page? active-page href)))}
                       [:i.icon {:class icon}]
                       [:a {:href href} text]])))])

(def main-menu (partial menu nav-menu-items-props))
