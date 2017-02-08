(ns scarf.lib
  (:require [om.next :as om]
            [scarf.config :as config]))

(defn num->currency
  [value]
  (.toLocaleString value "de-DE" #js {:style "currency" :currency "EUR"}))

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
