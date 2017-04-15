(ns scarf.templates.scarfs
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.config :as config]
            [scarf.templates.triangle :as triangle]
            [scarf.templates.rolled :as rolled]
            [scarf.templates.utils :as utils]))

(defui ListScarfs
  Object
  (render [this]
          (let [scale 0.4]
            (dom/div nil
                     (triangle/einfarbig-rand (merge (om/props this) {:thumbnail? true}))
                     (triangle/einfarbig-borte (merge (om/props this) {:thumbnail? true}))
                     (rolled/drei-streifen-mitte-halbiert (merge (om/props this) {:thumbnail? true}))
                     (rolled/ohne-dekor (merge (om/props this) {:thumbnail? true}))
                     (rolled/einfache-borte (merge (om/props this) {:thumbnail? true}))
                     (rolled/einfacher-rand (merge (om/props this) {:thumbnail? true}))))))
(def list-scarfs (om/factory ListScarfs))

;; (set! (.. (first (js/document.getElementsByTagName "g")) -style -transform) "scale(0.1)")
