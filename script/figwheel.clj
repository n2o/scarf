(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {}
   :build-ids ["dev"]
   :all-builds
                     [{:id "dev"
                       :figwheel true
                       :source-paths ["src"]
                       :compiler {:main 'scarf.core
                                  :asset-path "js"
                                  :output-to "resources/public/js/main.js"
                                  :output-dir "resources/public/js"
                                  :verbose true}}]
   :css-dirs ["resources/public/css"]})

(ra/cljs-repl)
