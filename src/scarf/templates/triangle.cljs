(ns scarf.templates.triangle
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]
            [scarf.config :as config]))

(def width (:thumbnail/width config/scarf))
(def height (:thumbnail/height config/scarf))

;; -----------------------------------------------------------------------------

(defui Stripe
  "Dreieck mit Randstreifen.
   ID: 1"
  static om/IQuery
  (query [this]
         [:scarf/color1 :scarf/color2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 1
                {:keys [scarf/color1 scarf/color2 scarf/current scale]} (om/props this)
                scale (or scale 1)
                c1 (:rgb color1)
                c2 (:rgb color2)
                swidth (utils/scale-dimensions scale width)
                sheight (utils/scale-dimensions scale height)]
            (dom/svg #js {:className (utils/gray-thumb scale)
                          :onClick #(utils/switch-chosen-one this id scale)
                          :height sheight
                          :width swidth
                          :style #js {:cursor (utils/change-cursor scale)}}
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(utils/colorize this scale :scarf/color2)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(utils/colorize this scale :scarf/color1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def stripe (om/factory Stripe))

(defui StripeEdge
  "Dreieck mit dünnem Streifen und Randstück.
   ID: 0"
  static om/IQuery
  (query [this]
         [:scarf/color1 :scarf/color2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 0
                {:keys [scarf/color1 scarf/color2 scarf/current scale]} (om/props this)
                scale (or scale 1)
                c1 (:rgb color1)
                c2 (:rgb color2)
                swidth (utils/scale-dimensions scale width)
                sheight (utils/scale-dimensions scale height)]
            (dom/svg #js {:className (utils/gray-thumb scale)
                          :onClick #(utils/switch-chosen-one this id scale)
                          :height sheight
                          :width swidth
                          :style #js {:cursor (utils/change-cursor scale)}}
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(utils/colorize this scale :scarf/color1)
                                              :fill c1
                                              :points  "266,0 138,127 10,0 0,0 138,138 276,0"})
                            (dom/polygon #js {:onClick #(utils/colorize this scale :scarf/color2)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(utils/colorize this scale :scarf/color1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def stripe-edge (om/factory StripeEdge))
