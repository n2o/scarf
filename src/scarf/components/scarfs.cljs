(ns scarf.components.scarfs
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def width 280)
(def height 140)

(defn- scale-dimensions [scale dimension]
  (str (* scale dimension) "px"))

(defn- colorize
  "Verify that a color has been selected before transacting a nil-value."
  [this scale field]
  (when (= 1 scale)
    (let [{:keys [color/selected]} (om/props this)]
      (when-not (nil? selected)
        (om/transact! this `[(scarf/colorize {:field ~field})])))))

(defn- switch-chosen-one
  "If current scarf is not active but it has been clicked, make it the new chosen one."
  [this id scale]
  (when-not (= 1 scale)
    (om/transact! this `[(scarf/current {:id ~id})])))

;; -----------------------------------------------------------------------------

(defui TriangleStripe
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
                swidth (scale-dimensions scale width)
                sheight (scale-dimensions scale height)]
            (dom/svg #js {:onClick #(switch-chosen-one this id scale)
                          :height sheight
                          :width swidth}
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize this scale :scarf/color2)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize this scale :scarf/color1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def triangle-stripe (om/factory TriangleStripe))

(defui TriangleStripeEdge
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
                swidth (scale-dimensions scale width)
                sheight (scale-dimensions scale height)]
            (dom/svg #js {:onClick #(switch-chosen-one this id scale)
                          :height sheight
                          :width swidth}
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize this scale :scarf/color1)
                                              :fill c1
                                              :points  "266,0 138,127 10,0 0,0 138,138 276,0"})
                            (dom/polygon #js {:onClick #(colorize this scale :scarf/color2)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize this scale :scarf/color1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def triangle-stripe-edge (om/factory TriangleStripeEdge))

;; -----------------------------------------------------------------------------

(defui ListScarfs
  Object
  (render [this]
          (let [scale 0.4]
            (dom/div #js {:filter "gray"}
                     (triangle-stripe-edge (merge (om/props this) {:scale scale}))
                     (triangle-stripe (merge (om/props this) {:scale scale}))))))
(def list-scarfs (om/factory ListScarfs))

;; (set! (.. (first (js/document.getElementsByTagName "g")) -style -transform) "scale(0.1)")
