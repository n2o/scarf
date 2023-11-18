(defproject scarf "1.0.1"
  :description "Create clickable SVG objects, which can be colorized"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [org.clojure/core.async "0.4.474"]
                 [org.clojure/test.check "1.1.1"]
                 [org.clojure/tools.reader "1.3.7"]
                 [org.omcljs/om "1.0.0-beta3"]
                 [sablono "0.8.6"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]]

  :plugins [[lein-ancient "0.6.15"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-codox "0.10.3"]
            [lein-figwheel "0.5.16"]
            [lein-kibit "0.1.6"]
            [lein-set-version "0.4.1"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :jvm-opts ~(let [version (System/getProperty "java.version")
                   [major _ _] (clojure.string/split version #"\.")]
               (if (>= (Integer. major) 9)
                 ["--add-modules" "java.xml.bind"]
                 []))

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "scarf.core/on-js-reload"
                                   :open-urls ["http://localhost:3449/"]}
                        :compiler {:main scarf.core
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/scarf.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true
                                   :closure-defines {scarf.core/version ~(-> "project.clj" slurp read-string (nth 2))}
                                   :preloads [devtools.preload scarf.extensions]}}
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/compiled/scarf.js"
                                   :main scarf.core
                                   :optimizations :advanced
                                   :closure-defines {scarf.core/version ~(-> "project.clj" slurp read-string (nth 2))}
                                   :externs ["resources/public/node_modules/jspdf/dist/jspdf.min.js"
                                             "resources/public/node_modules/jquery/dist/jquery.min.js"]
                                   :pretty-print false}}]}
  :figwheel {:css-dirs ["resources/public/css"]} ;; watch and update CSS

  :profiles {:dev {:dependencies [[binaryage/devtools "1.0.7"]
                                  [figwheel-sidecar "0.5.20"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {; for nREPL dev you really need to limit output
                                  :init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
