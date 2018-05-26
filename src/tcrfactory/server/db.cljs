(ns tcrfactory.server.db
  (:require
    [district.server.config :refer [config]]
    [district.server.db :as db]
    [district.server.db.column-types :refer [address not-nil default-nil default-zero default-false sha3-hash primary-key]]
    [district.server.db.honeysql-extensions]
    [honeysql.core :as sql]
    [honeysql.helpers :refer [merge-where merge-order-by merge-left-join defhelper]]
    [medley.core :as medley]
    [mount.core :as mount :refer [defstate]]
    [taoensso.timbre :as logging :refer-macros [info warn error]]))

(declare start)
(declare stop)
(defstate ^{:on-reload :noop} tcrfactory-db
  :start (start (merge (:tcrfactory/db @config)
                       (:tcrfactory/db (mount/args))))
  :stop (stop))

(def registries-columns
  [[:registry/address address primary-key not-nil]
   [:registry/title :varchar default-nil]
   [:registry/description :varchar default-nil]   
   [:registry/db address not-nil]
   [:registry/entry-factory address not-nil]
   [:registry/token address not-nil]
   [:registry/token-total-supply :BIG :INT default-nil]
   [:registry/token-name :varchar default-nil]
   [:registry/token-symbol :varchar default-nil]
   [:registry/challenge-period-duration :unsigned :integer default-nil]
   [:registry/commit-period-duration :unsigned :integer default-nil]
   [:registry/reveal-period-duration :unsigned :integer default-nil]
   [:registry/created-on :unsigned :integer not-nil]
   [:registry/deposit :unsigned :integer default-nil]])

(def registry-entries-columns
  [[:reg-entry/address address primary-key not-nil]
   [:reg-entry/registry address not-nil]
   [:reg-entry/title :varchar default-nil]
   [:reg-entry/description :varchar default-nil]
   [:reg-entry/version :unsigned :integer not-nil]
   [:reg-entry/creator address not-nil]
   [:reg-entry/deposit :unsigned :BIG :INT not-nil]
   [:reg-entry/created-on :unsigned :integer not-nil]
   [:reg-entry/challenge-period-end :unsigned :integer not-nil]
   [:challenge/challenger address default-nil]
   [:challenge/created-on :unsigned :integer default-nil]
   [:challenge/voting-token address default-nil]
   [:challenge/reward-pool :unsigned :BIG :INT default-nil]
   [:challenge/description :varchar default-nil]
   [:challenge/commit-period-end :unsigned :integer default-nil]
   [:challenge/reveal-period-end :unsigned :integer default-nil]
   [:challenge/votes-for :BIG :INT default-nil]
   [:challenge/votes-against :BIG :INT default-nil]
   [:challenge/claimed-reward-on :unsigned :integer default-nil]])

(def registries-column-names (map first registries-columns))
(def registry-entries-column-names (map first registry-entries-columns))

(defn start [opts]
  (db/run! {:create-table [:registries]
            :with-columns [registries-columns]})

  (db/run! {:create-table [:reg-entries]
            :with-columns [registry-entries-columns]}))

(defn stop []
  (db/run! {:drop-table [:registries]})
  (db/run! {:drop-table [:reg-entries]}))

(defn create-insert-fn [table-name column-names & [{:keys [:insert-or-replace?]}]]
  (fn [item]
    (let [item (select-keys item column-names)]
      (db/run! {(if insert-or-replace? :insert-or-replace-into :insert-into) table-name
                :columns (keys item)
                :values [(vals item)]}))))

(defn create-update-fn [table-name column-names id-keys]
  (fn [item]
    (let [item (select-keys item column-names)
          id-keys (if (sequential? id-keys) id-keys [id-keys])]
      (db/run! {:update table-name
                :set item
                :where (concat
                         [:and]
                         (for [id-key id-keys]
                           [:= id-key (get item id-key)]))}))))

(defn create-get-fn [table-name id-keys]
  (let [id-keys (if (sequential? id-keys) id-keys [id-keys])]
    (fn [item fields]
      (cond-> (db/get {:select (if (sequential? fields) fields [fields])
                       :from [table-name]
                       :where (concat
                                [:and]
                                (for [id-key id-keys]
                                  [:= id-key (get item id-key)]))})
        (keyword? fields) fields))))

(def insert-registry! (create-insert-fn :registries registries-column-names))
(def update-registry! (create-update-fn :registries registries-column-names :registry/address))
(def get-registry (create-get-fn :registries :registry/address))

(def insert-registry-entry! (create-insert-fn :reg-entries registry-entries-column-names))
(def update-registry-entry! (create-update-fn :reg-entries registry-entries-column-names :reg-entry/address))
(def get-registry-entry (create-get-fn :reg-entries :reg-entry/address))

