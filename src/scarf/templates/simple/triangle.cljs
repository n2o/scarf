(ns scarf.templates.simple.triangle
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]))

(defui OhneDekor
  "Dreieck ohne Dekor."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :color/selected])
  Object
  (render [this]
          (let [id 5000
                {:keys [scarf/mid1 thumbnail?]} (om/props this)
                c1 (:rgb mid1)
                width 266
                height 130
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "266,0 0,0 133,127"}))))))
(def ohne-dekor (om/factory OhneDekor))

(defui Borte
  "Dreieck mit Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :color/selected])
  Object
  (render [this]
          (let [id 5001
                {:keys [scarf/mid1 scarf/stripe1 thumbnail?]} (om/props this)
                c1 (:rgb mid1) s1 (:rgb stripe1)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "266,0 138,127 10,0 3,0 138,135 273,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "266,0 258,0 138,117 18,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "258,0 18,0 138,118"}))))))
(def borte (om/factory Borte))

(defui Rand
  "Dreieck mit Randstreifen."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :color/selected])
  Object
  (render [this]
          (let [id 5002
                {:keys [scarf/mid1 scarf/stripe1 thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb stripe1)
                width 266
                height 130
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill c2
                                              :points "266,0 247,0 138,109 29,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "258,0 18,0 138,118"}))))))
(def randstreifen (om/factory Rand))
