(ns tcrfactory.styles.base.colors)

(def names->colors {:violet "#2e1f37"
                    :light-violet "rgba(116,100,126,.15)"
                    :paper "rgba(243, 243, 243, 0.7)"
                    :light-grey "rgba(0,0,0,.7)" })

(defn color [name]
  (get names->colors name name))

