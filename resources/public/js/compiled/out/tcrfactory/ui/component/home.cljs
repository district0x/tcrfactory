(ns tcrfactory.ui.component.home
  (:require
    [district.ui.component.page :refer [page]]
    [district.ui.graphql.subs :as gql]
    [district.ui.router.utils :as router-utils]
    [re-frame.core :refer [subscribe]]))

(defmethod page :route/home []
  [:div
   [:div "TCR Factory"]
   [:div [:a
          {:href (str "#" (router-utils/resolve :route/search-registries))}
          "Search Registries"]]
   [:div [:a
          {:href (str "#" (router-utils/resolve :route/create-registry))}
          "Create Registry"]]])