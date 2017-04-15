(ns scarf.templates.utils
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.config :as config]))

(def config-width (:thumbnail/width config/scarf))
(def config-height (:thumbnail/height config/scarf))

(defn scale-dimension [scale dimension]
  (str (* scale dimension) "px"))

(defn scale-to-width [thumbnail? actual]
  (let [target (if thumbnail? (:thumbnail/width config/scarf) (:width config/scarf))]
    (/ target actual)))

(defn colorize
  "Verify that a color has been selected before transacting a nil-value."
  [this thumbnail? field]
  (when-not thumbnail?
    (let [{:keys [color/selected]} (om/props this)]
      (when-not (nil? selected)
        (om/transact! this `[(scarf/colorize {:field ~field})])))))

(defn switch-chosen-one
  "If current scarf is not active but it has been clicked, make it the new chosen one."
  [this id thumbnail?]
  (when thumbnail?
    (om/transact! this `[(scarf/current {:id ~id})])))

(defn change-cursor [thumbnail?]
  (if thumbnail? "pointer" "crosshair"))

(defn gray-thumb [thumbnail?]
  (when thumbnail? "grayscale smooth"))


;; -----------------------------------------------------------------------------
;; View components

(defn svg-options [this id scale width height thumbnail?]
  #js {:className (gray-thumb thumbnail?)
       :onClick #(switch-chosen-one this id thumbnail?)
       :width (scale-dimension scale width)
       :height (scale-dimension scale height)
       :style #js {:cursor (change-cursor thumbnail?)}})
