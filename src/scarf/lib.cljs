(ns scarf.lib
  (:require [clojure.string :as str]
            [cljs.core.async :refer [chan close! <!]]
            [cljs.spec.alpha :as s])
  (:require-macros [cljs.core.async.macros :as m :refer [go]]))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(defn timed-tooltip [elem]
  (let [jquery (js* "$")]
    (go
      (.tooltip (jquery elem) "show")
      (<! (timeout 1500))
      (.tooltip (jquery elem) "hide"))))
(s/fdef timed-tooltip
        :args (s/cat :element string?))

(defn num->currency
  [value]
  (when value
    (.toLocaleString value "de-DE" #js {:style "currency" :currency "EUR"})))

(defn str->float
  "Convert String to Float."
  [s]
  (let [converted (js/parseFloat s)]
    (when-not (js/isNaN converted)
      converted)))

(defn str->int
  "Convert String to Integer."
  [s]
  (let [converted (js/parseInt s)]
    (when-not (js/isNaN converted)
      converted)))

(defn simple-slug [string]
  (-> string
      str/lower-case
      (str/replace #" " "-")))
