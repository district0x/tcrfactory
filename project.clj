(defproject tcrfactory "1.0.0"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[camel-snake-kebab "0.4.0"]
                 [cljs-web3 "0.19.0-0-10"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [com.taoensso/encore "2.92.0"]
                 [com.taoensso/timbre "4.10.0"]
                 [day8.re-frame/re-frame-10x "0.3.1"]
                 [district0x/bignumber "1.0.1"]
                 [district0x/cljs-solidity-sha3 "1.0.0"]
                 [district0x/district-cljs-utils "1.0.3"]
                 [district0x/district-format "1.0.0"]
                 [district0x/district-graphql-utils "1.0.5"]
                 [district0x/district-server-db "1.0.1"]
                 [district0x/district-server-graphql "1.0.12"]
                 [district0x/district-server-logging "1.0.1"]
                 [district0x/district-server-middleware-logging "1.0.0"]
                 [district0x/district-server-smart-contracts "1.0.8"]
                 [district0x/district-server-web3 "1.0.1"]
                 [district0x/district-server-web3-watcher "1.0.2"]
                 [district0x/district-ui-component-active-account "1.0.0"]
                 [district0x/district-ui-component-active-account-balance "1.0.0"]
                 [district0x/district-ui-component-input "1.0.0"]
                 [district0x/district-ui-component-notification "1.0.0"]
                 [district0x/district-ui-component-tx-button "1.0.0"]
                 [district0x/district-ui-graphql "1.0.0"]
                 [district0x/district-ui-logging "1.0.1"]
                 [district0x/district-ui-notification "1.0.1"]
                 [district0x/district-ui-now "1.0.2"]
                 [district0x/district-ui-reagent-render "1.0.1"]
                 [district0x/district-ui-router "1.0.4"]
                 [district0x/district-ui-router-google-analytics "1.0.0"]
                 [district0x/district-ui-smart-contracts "1.0.5"]
                 [district0x/district-ui-web3 "1.0.1"]
                 [district0x/district-ui-web3-account-balances "1.0.2"]
                 [district0x/district-ui-web3-accounts "1.0.5"]
                 [district0x/district-ui-web3-balances "1.0.2"]
                 [district0x/district-ui-web3-sync-now "1.0.3"]
                 [district0x/district-ui-web3-tx "1.0.9"]
                 [district0x/district-ui-web3-tx-id "1.0.1"]
                 [district0x/district-ui-web3-tx-log "1.0.2"]
                 [district0x/district-ui-window-size "1.0.1"]
                 [district0x/district-web3-utils "1.0.2"]
                 [medley "1.0.0"]
                 [mount "0.1.12"]
                 [org.clojure/clojurescript "1.10.238"]
                 [print-foo-cljs "2.0.3"]
                 [re-frame "0.10.5"]]

  :plugins [[lein-auto "0.1.2"]
            [lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.14"]
            [lein-shell "0.5.0"]
            [lein-solc "1.0.0"]
            [lein-doo "0.1.8"]
            [lein-npm "0.6.2"]
            [lein-pdo "0.1.1"]
            [lein-garden "0.3.0"]]

  :npm {:dependencies [#_[semantic-ui "2.2.14"]
                       [solc "0.4.20"]
                       [source-map-support "0.5.3"]
                       [ws "4.0.0"]]}

  :solc {:src-path "resources/public/contracts/src"
         :build-path "resources/public/contracts/build"
         :solc-err-only true
         :wc true
         :contracts ["Registry.sol"
                     "RegistryFactory.sol"
                     "RegistryEntry.sol"
                     "RegistryEntryFactory.sol"
                     "RegistryToken.sol"
                     "auth/DSGuard.sol"]}

  :source-paths ["src" "test"]

  :figwheel {:server-port 4787
             :css-dirs ["resources/public/css"]
             :repl-eval-timeout 30000}

  :aliases {"watch-css" ["shell" "./semantic.sh" "watch"]
            "build-css" ["shell" "./semantic.sh" "build-css"]
            "test" ["do" ["build-tests"] ["shell" "node" "smart-contracts-tests/smart-contracts-tests.js"]]
            "build-tests" ["cljsbuild" "once" "smart-contracts-tests"]
            "test-dev" ["doo" "node" "smart-contracts-tests"]}

  :profiles {:dev {:dependencies [[org.clojure/clojure "1.9.0"]
                                  [binaryage/devtools "0.9.9"]
                                  [com.cemerick/piggieback "0.2.2"]
                                  [figwheel-sidecar "0.5.14" :exclusions [org.clojure/core.async]]
                                  [org.clojure/tools.reader "1.2.1"]]
                   :source-paths ["dev" "src"]
                   :resource-paths ["resources"]}}

  :garden {:builds [{:id "screen"
                     :source-paths ["src"]
                     :stylesheet tcrfactory.styles.core/main
                     ;; Compiler flags passed to `garden.core/css`:
                     :compiler {;; Where to save the file:
                                :output-to "resources/public/css/main.css"
                                ;; Compress the output?
                                :pretty-print? false}}]}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/tcrfactory/ui" "src/tcrfactory/shared"]
                        :figwheel {:on-jsload "district.ui.reagent-render/rerender"}
                        :compiler {:main "tcrfactory.ui.core"
                                   :output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :source-map-timestamp true
                                   :preloads [print.foo.preloads.devtools
                                              day8.re-frame-10x.preload]
                                   :closure-defines {goog.DEBUG true
                                                     "re_frame.trace.trace_enabled_QMARK_" true}
                                   :external-config {:devtools/config {:features-to-install :all}}}}
                       {:id "dev-server"
                        :source-paths ["src/tcrfactory/server" "src/tcrfactory/shared"]
                        :figwheel {:on-jsload "tcrfactory.server.dev/on-jsload"}
                        :compiler {:main "tcrfactory.server.dev"
                                   :output-to "dev-server/tcrfactory.js"
                                   :output-dir "dev-server"
                                   :target :nodejs
                                   :optimizations :none
                                   :closure-defines {goog.DEBUG true}
                                   :source-map true}}
                       {:id "ui"
                        :source-paths ["src"]
                        :compiler {:main "tcrfactory.ui.core"
                                   :output-to "resources/public/js/compiled/app.js"
                                   :optimizations :advanced
                                   :closure-defines {goog.DEBUG false}
                                   :pretty-print false
                                   :pseudo-names false}}]})
