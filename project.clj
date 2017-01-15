(defproject scarf "0.1.64"
  :description "Create clickable SVG objects, which can be colorized"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.omcljs/om "1.0.0-alpha47"]]
  :plugins [[lein-figwheel "0.5.8"]
            [lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]
            [lein-codox "0.9.5"]
            [lein-ancient "0.6.10"]
            [lein-kibit "0.1.2"]]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "scarf.core/on-js-reload"}
                        :compiler {:main scarf.core
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/scarf.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true}}
                       {:id "devcards"
                        :source-paths ["src/scarf" "src/devcards"]
                        :figwheel {:devcards true}
                        :compiler {:main scarf.devcards.core
                                   :asset-path "../js/compiled/devcards/out"
                                   :output-to "resources/public/js/compiled/devcards/scarf.js"
                                   :output-dir "resources/public/js/compiled/devcards/out"
                                   :source-map-timestamp true}}
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/compiled/scarf.js"
                                   :main scarf.core
                                   :optimizations :advanced
                                   :pretty-print false}}]}
  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
