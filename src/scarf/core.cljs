(ns scarf.core
  (:require [goog.dom :as gdom]
            [om.next :as om]
            [scarf.parser :as p]
            [scarf.views :as views]))

(goog-define version "0.2")

(defonce reconciler
  (om/reconciler
   {:state  p/init-data
    :parser (om/parser {:read p/read :mutate p/mutate})}))

(om/add-root! reconciler
              views/Main (gdom/getElement "scarf"))

(set! (.-innerHTML (gdom/getElement "scarf-version")) (str "v" version))
