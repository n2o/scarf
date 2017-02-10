(ns scarf.components.scarfs
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def width "280px")
(def height "140px")

(defn- colorize
  "Verify that a color has been selected before transacting a nil-value."
  [this field]
  (let [{:keys [color/selected]} (om/props this)]
    (when-not (nil? selected)
      (om/transact! this `[(scarf/colorize {:field ~field})]))))

;; -----------------------------------------------------------------------------

(defui TriangleStripeEdge
  "Dreieck mit dünnem Streifen und Randstück."
  static om/IQuery
  (query [this]
         [:scarf/color1 :scarf/color2 :color/selected])
  Object
  (render [this]
          (let [{:keys [scarf/color1 scarf/color2]} (om/props this)
                c1 (:rgb color1)
                c2 (:rgb color2)]
            (dom/svg #js {:enableBackground (str "new 0 0 " width " " height)
                          :height height
                          :width width
                          :x "0"
                          :y "0"}
                     (dom/g nil
                            (dom/polygon #js {:onClick #(colorize this :scarf/color1)
                                              :fill c1
                                              :points  "266,0 138,127 10,0 0,0 138,138 276,0"})
                            (dom/polygon #js {:onClick #(colorize this :scarf/color2)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize this :scarf/color1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def triangle-stripe-edge (om/factory TriangleStripeEdge))

