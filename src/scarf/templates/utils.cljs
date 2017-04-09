(ns scarf.templates.utils
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defn scale-dimensions [scale dimension]
  (str (* scale dimension) "px"))

(defn colorize
  "Verify that a color has been selected before transacting a nil-value."
  [this scale field]
  (when (= 1 scale)
    (let [{:keys [color/selected]} (om/props this)]
      (when-not (nil? selected)
        (om/transact! this `[(scarf/colorize {:field ~field})])))))

(defn switch-chosen-one
  "If current scarf is not active but it has been clicked, make it the new chosen one."
  [this id scale]
  (when-not (= 1 scale)
    (om/transact! this `[(scarf/current {:id ~id})])))

(defn change-cursor [scale]
  (if (= 1 scale) "crosshair" "pointer"))

(defn gray-thumb [scale]
  (when-not (= 1 scale) "grayscale smooth"))
