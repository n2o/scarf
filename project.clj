(defproject scarf "0.2"
  :description "Create clickable SVG objects, which can be colorized"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.495"]
                 [org.omcljs/om "1.0.0-alpha47"]]
  :plugins [[lein-figwheel "0.5.9"]
            [lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]
            [lein-codox "0.10.3"]
            [lein-ancient "0.6.10"]
            [lein-kibit "0.1.3"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "scarf.core/on-js-reload"
                                   :open-urls ["http://localhost:3449/index.html"]}
                        :compiler {:main scarf.core
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/scarf.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true
                                   :preloads [devtools.preload scarf.extensions]}}
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/compiled/scarf.js"
                                   :main scarf.core
                                   :optimizations :advanced
                                   :pretty-print false}}]}
  :figwheel {:css-dirs ["resources/public/css"]} ;; watch and update CSS

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.2"]
                                  [figwheel-sidecar "0.5.9"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {; for nREPL dev you really need to limit output
                                  :init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
