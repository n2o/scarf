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
  [this id]
  (om/transact! this `[(scarf/current {:id ~id})]))

(defn change-cursor [thumbnail?]
  (if thumbnail? "pointer" "crosshair"))

(defn gray-thumb [thumbnail?]
  (when thumbnail? "grayscale smooth"))

(defn create-path [this field fill d]
  (let [{:keys [thumbnail?]} (om/props this)
        field (keyword (str "scarf/" field))]
    (dom/path #js {:className "smooth highlight-stroke"
                   :onClick #(colorize this thumbnail? field)
                   :fill fill
                   :d d})))

(def scarf-background
  (dom/path #js {:fill "#333"
                 :d "M124,19.3l106.8,17.9l-6-6.5c0,0,99.8,18.1,230,18.4C581,49.3,682.6,30.9,682.6,30.9l-2.2,5.4l105.2-17.4
	c0,0-7.5,7.7-5.2,7.5c50.3-3.7,109.4-18.5,109.4-18.5s-54.3,51.3-134.9,54.7c-38.9,1.6-122,20.3-122,20.3L455,259.5L276.8,82.9
	c0,0-100.8-19.3-116.5-19.5C76,62.3,19.7,8.2,19.7,8.2s42.2,11.7,112.2,18.6C134.5,27.1,124,19.3,124,19.3z"}))

;; -----------------------------------------------------------------------------
;; View components

(defn svg-options [this id scale width height thumbnail?]
  #js {:className (gray-thumb thumbnail?)
       ;; :onClick #(switch-chosen-one this id thumbnail?)
       :width (scale-dimension scale width)
       :height (scale-dimension scale height)
       :style #js {:cursor (change-cursor thumbnail?)}})
