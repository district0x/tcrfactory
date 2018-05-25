(ns district.ui.window-size.queries)

(defn breakpoints [db]
  (-> db :district.ui.window-size :breakpoints))

(defn size [db]
  (-> db :district.ui.window-size :size))

(defn calculate-size [db window-width & [breakpts]]
  (let [{:keys [:max-large-monitor :max-computer :max-tablet :max-mobile]} (or breakpts (breakpoints db))]
    (cond
      (> window-width max-large-monitor) 4
      (> window-width max-computer) 3
      (> window-width max-tablet) 2
      (> window-width max-mobile) 1
      :else 0)))

(defn wide-monitor? [db]
  (= (size db) 4))

(defn large-monitor? [db]
  (= (size db) 3))

(defn computer? [db]
  (= (size db) 2))

(defn tablet? [db]
  (= (size db) 1))

(defn mobile? [db]
  (= (size db) 0))

(defn max-large-monitor? [db]
  (<= (size db) 3))

(defn max-computer? [db]
  (<= (size db) 2))

(defn max-tablet? [db]
  (<= (size db) 1))

(defn min-large-monitor? [db]
  (>= (size db) 3))

(defn min-computer? [db]
  (>= (size db) 2))

(defn min-tablet? [db]
  (>= (size db) 1))

(defn assoc-breakpoints [db breakpoints]
  (assoc-in db [:district.ui.window-size :breakpoints] breakpoints))

(defn assoc-size [db size]
  (assoc-in db [:district.ui.window-size :size] size))

(defn assoc-window-size [db {:keys [:breakpoints :size]}]
  (-> db
    (assoc-breakpoints breakpoints)
    (assoc-size size)))

(defn dissoc-window-size [db]
  (dissoc db :district.ui.window-size))
