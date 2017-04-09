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
         [:scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 1
                {:keys [scarf/mid1 scarf/stripe1 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb stripe1)
                width 266
                height 138
                scale (utils/scale-to-width thumbnail? width)]
            (dom/svg #js {:className (utils/gray-thumb thumbnail?)
                          :onClick #(utils/switch-chosen-one this id thumbnail?)
                          :width (utils/scale-dimension scale width)
                          :height (utils/scale-dimension scale height)
                          :style #js {:cursor (utils/change-cursor thumbnail?)}}
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(utils/colorize this thumbnail? :scarf/stripe1)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(utils/colorize this thumbnail? :scarf/mid1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def stripe (om/factory Stripe))

(defui StripeEdge
  "Dreieck mit dünnem Streifen und Randstück.
   ID: 0"
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          #_(let [id 0
                {:keys [scarf/mid1 scarf/stripe1 scarf/current scale]} (om/props this)
                scale (or scale 1)
                c1 (:rgb mid1)
                c2 (:rgb stripe1)
                swidth (utils/scale-dimension scale width)
                sheight (utils/scale-dimension scale height)]
            (dom/svg #js {:className (utils/gray-thumb scale)
                          :onClick #(utils/switch-chosen-one this id scale)
                          :height sheight
                          :width swidth
                          :style #js {:cursor (utils/change-cursor scale)}}
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(utils/colorize this scale :scarf/mid1)
                                              :fill c1
                                              :points  "266,0 138,127 10,0 0,0 138,138 276,0"})
                            (dom/polygon #js {:onClick #(utils/colorize this scale :scarf/stripe1)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(utils/colorize this scale :scarf/mid1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def stripe-edge (om/factory StripeEdge))
