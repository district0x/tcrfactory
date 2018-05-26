(ns tcrfactory.ui.component.app-menu
  (:require
   [reagent.core :as r]
   [district.ui.router.utils :as router-utils]
   [re-frame.core :refer [dispatch subscribe]]))

(def nav-menu-items-props [{:text "Search Registry"
                            :route :route/search-registries
                            :class :search-registry}
                           {:text "Create Registry"
                            :route :route/create-registry
                            :class :create-registry
                            ;; :children [{:text "Submit"
                            ;;             :route :route.marketplace/index}
                            ;;            {:text "Vote"
                            ;;             :route :route.marketplace/index}]
                            }])

(defn current-page? [a b]
  (= a b))

(defn path [route]
  (str "#" (router-utils/resolve route)))

(defn menu [props active-page]
  [:div.app-menu
   (doall
    (for [{:keys [:text :route :href :class :children]} props]
      (let [href (or href (path route))]
        [:div.node
         [:div.item
          {:class (concat [class] (when (current-page? active-page href)));; (conj [class] )
           }
          [:a {:href href} text]]
         (when children
           [menu children active-page])])))])

(def main-menu (partial menu nav-menu-items-props))
