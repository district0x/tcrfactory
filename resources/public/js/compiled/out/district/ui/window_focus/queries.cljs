(ns district.ui.window-focus.queries)

(defn focused? [db]
  (-> db :district.ui.window-focus :focused?))

(defn assoc-focused [db focused?]
  (assoc-in db [:district.ui.window-focus :focused?] focused?))

(defn dissoc-window-focus [db]
  (dissoc db :district.ui.window-focus))
