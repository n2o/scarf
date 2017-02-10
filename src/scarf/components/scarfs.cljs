(ns scarf.components.scarfs
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def width "280px")
(def height "140px")
(def scale 0.4)


(defn- colorize
  "Verify that a color has been selected before transacting a nil-value."
  [this the-chosen-one field]
  (when the-chosen-one
    (let [{:keys [color/selected]} (om/props this)]
      (when-not (nil? selected)
        (om/transact! this `[(scarf/colorize {:field ~field})])))))

(defn- transform-current
  "If this scarf is not the current activated scarf, reduce its size."
  [the-chosen-one]
  (if-not the-chosen-one
    #js {:className "smooth"
         :transform (str "scale(" scale ")")}
    #js {:className "smooth"}))

(defn- switch-chosen-one
  "If current scarf is not active but it has been clicked, make it the new chosen one."
  [this id the-chosen-one]
  (when-not the-chosen-one
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
                {:keys [scarf/color1 scarf/color2 scarf/current]} (om/props this)
                c1 (:rgb color1)
                c2 (:rgb color2)
                the-chosen-one (= id current)]
            (dom/svg #js {:id (str "scarf-" id)
                          :enableBackground (str "new 0 0 " width " " height)
                          :height height
                          :width width
                          :onClick #(switch-chosen-one this id the-chosen-one)
                          :x "0"
                          :y "0"}
                     (dom/g (transform-current the-chosen-one)
                            (dom/polygon #js {:onClick #(colorize this the-chosen-one :scarf/color2)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize this the-chosen-one :scarf/color1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def triangle-stripe (om/factory TriangleStripe {:foo :foo}))

(defui TriangleStripeEdge
  "Dreieck mit dünnem Streifen und Randstück.
   ID: 0"
  static om/IQuery
  (query [this]
         [:scarf/color1 :scarf/color2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 0
                {:keys [scarf/color1 scarf/color2 scarf/current]} (om/props this)
                c1 (:rgb color1)
                c2 (:rgb color2)
                the-chosen-one (= id current)]
            (dom/svg #js {:id (str "scarf-" id)
                          :enableBackground (str "new 0 0 " width " " height)
                          :height height
                          :width width
                          :onClick #(switch-chosen-one this id the-chosen-one)
                          :x "0"
                          :y "0"}
                     (dom/g (transform-current the-chosen-one)
                            (dom/polygon #js {:onClick #(colorize this the-chosen-one :scarf/color1)
                                              :fill c1
                                              :points  "266,0 138,127 10,0 0,0 138,138 276,0"})
                            (dom/polygon #js {:onClick #(colorize this the-chosen-one :scarf/color2)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize this the-chosen-one :scarf/color1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def triangle-stripe-edge (om/factory TriangleStripeEdge))

;; (set! (.. (first (js/document.getElementsByTagName "g")) -style -transform) "scale(0.1)")
