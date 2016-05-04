(ns scarf.core
  (:require [goog.dom :as gdom]
            [om.next :as om]
            [scarf.lib :as lib]
            [scarf.views :as views]))

(enable-console-print!)

#_(om/add-root! lib/reconciler
              views/Main (gdom/getElement "scarf"))