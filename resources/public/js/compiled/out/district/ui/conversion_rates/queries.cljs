(ns district.ui.conversion-rates.queries)

(def db-kw :district.ui.conversion-rates)


(defn conversion-rates
  ([db] (-> db db-kw :conversion-rates))
  ([db from] (get (conversion-rates db) from)))


(defn conversion-rate [db from to]
  (get (conversion-rates db from) to))


(defn cache-ttl [db]
  (-> db db-kw :cache-ttl))


(defn cache-has? [db pair]
  (boolean
    (when-let [t (get-in db [db-kw :cache pair])]
      (let [ttl (cache-ttl db)]
        (< (- (.getTime (js/Date.))
              t)
           ttl)))))


(defn- pairs [from-currencies to-currencies]
  (for [f from-currencies
        t to-currencies]
    [f t]))


(defn cache-has-all-pairs? [db from-currencies to-currencies]
  (every? (partial cache-has? db) (pairs from-currencies to-currencies)))


(defn convert
  ([db from value]
   (into {} (map (fn [[k v]]
                   [k (* v value)])
                 (conversion-rates db from))))
  ([db from to value]
   (* (conversion-rate db from to) value)))


(defn merge-conversion-rates [db conversion-rates]
  (update-in db [db-kw :conversion-rates] merge conversion-rates))


(defn assoc-cache-ttl [db cache-ttl]
  (assoc-in db [db-kw :cache-ttl] cache-ttl))


(defn update-cache [db from-currencies to-currencies]
  (update-in db [db-kw :cache] merge (zipmap (pairs from-currencies to-currencies)
                                             (repeat (.getTime (js/Date.))))))


(defn dissoc-conversion-rates [db]
  (dissoc db db-kw))
