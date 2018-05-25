(ns district.ui.reagent-render.spec
  (:require [cljs.spec.alpha :as s]))

(s/def ::target #(string? (.-innerHTML %)))

(s/def ::id string?)

(s/def ::component-var #(instance? cljs.core/Var %))

(s/def ::opts (s/or :opts1 (s/nilable (s/keys :req-un [::component-var ::target]))
                    :opts2 (s/nilable (s/keys :req-un [::component-var ::id]))))
