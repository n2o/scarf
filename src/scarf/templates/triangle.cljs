(ns scarf.templates.triangle
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]
            [scarf.config :as config]))

(def width (:thumbnail/width config/scarf))
(def height (:thumbnail/height config/scarf))

;; -----------------------------------------------------------------------------

(defui EinfarbigOhneDekor
  "Dreieck mit Randstreifen."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id -1
                {:keys [scarf/mid1 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1)
                width 266
                height 130
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points  "266,0 0,0 133,127"}))))))
(def einfarbig-ohne-dekor (om/factory EinfarbigOhneDekor))

(defui EinfarbigRand
  "Dreieck mit Randstreifen."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5002
                {:keys [scarf/mid1 scarf/stripe1 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb stripe1)
                width 266
                height 130
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def einfarbig-rand (om/factory EinfarbigRand))

(defui EinfarbigBorte
  "Dreieck mit dünnem Streifen und Randstück."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5001
                {:keys [scarf/mid1 scarf/stripe1 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb stripe1)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points  "266,0 138,127 10,0 0,0 138,138 276,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill c2
                                              :points  "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points  "247,0 29,0 138,109"}))))))
(def einfarbig-borte (om/factory EinfarbigBorte))
