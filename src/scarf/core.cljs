(ns scarf.core
  (:require [goog.dom :as gdom]
            [om.next :as om]
            [scarf.parser :as p]
            [scarf.views :as views]))

(defonce reconciler
  (om/reconciler
   {:state  p/init-data
    :parser (om/parser {:read p/read :mutate p/mutate})}))

(om/add-root! reconciler
              views/Main (gdom/getElement "scarf"))
