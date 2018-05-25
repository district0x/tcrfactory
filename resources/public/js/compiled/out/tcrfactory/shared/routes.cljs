(ns tcrfactory.shared.routes)

(def routes [["/" :route/home]
             ["/search-registries" :route/search-registries]
             ["/create-registry" :route/create-registry]
             ["/registry/:registry-address" :route/registry-detail]
             ["/registry/:registry-address/submit" :route/create-registry-entry]])