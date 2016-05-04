(ns scarf.core
  (:require [goog.dom :as gdom]
            [om.next :as om]
            [scarf.lib :as lib]
            [scarf.views :as views]))

(enable-console-print!)

;;;;;;;;;;;;;;;;
;; https://github.com/omcljs/om/wiki/Components%2C-Identity-%26-Normalization#something-to-look-at
;;;;;;;;;;;;;;;;
(om/add-root! lib/reconciler
              views/Main (gdom/getElement "scarf"))