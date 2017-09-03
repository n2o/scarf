(ns scarf.templates.twice.triangle
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]))

(defui Borte
  "Dreieck mit Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :color/selected])
  Object
  (render [this]
          (let [id 5001
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 thumbnail?]} (om/props this)
                c1 (:rgb mid1) s1 (:rgb stripe1) s2 (:rgb stripe2)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points  "266,0 138,127 10,0 3,0 138,135 273,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill s2
                                              :points  "266,0 258,0 138,117 18,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points  "258,0 250,0 138,107 26,0 18,0 138,118"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points  "250,0 26,0 138,110"}))))))
(def borte (om/factory Borte))

(defui Rand
  "Dreieck mit Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :color/selected])
  Object
  (render [this]
          (let [id 5001
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb stripe1) c3 (:rgb stripe2)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill c3
                                              :points  "266,0 138,127 10,0 3,0 138,135 273,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill c2
                                              :points  "266,0 258,0 138,117 18,0 10,0 138,127"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points  "258,0 18,0 138,118"}))))))
(def randstreifen (om/factory Rand))



