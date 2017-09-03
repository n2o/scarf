(ns scarf.templates.halved.triangle
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]))

(defui OhneDekor
  "Dreieck, halbiert ohne Dekor."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :color/selected])
  Object
  (render [this]
          (let [id 5009
                {:keys [scarf/mid1 scarf/mid2 thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2)
                width 266
                height 130
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "0,0 133,127 133,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid2)
                                              :fill c2
                                              :points "133,127 266,0 133,0"}))))))
(def ohne-dekor (om/factory OhneDekor))

(defui Borte
  "Dreieck, halbiert mit Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :color/selected])
  Object
  (render [this]
          (let [id 5010
                {:keys [scarf/mid1 scarf/mid2 scarf/stripe1 thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2) s1 (:rgb stripe1)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "0,0 138,136 138,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid2)
                                              :fill c2
                                              :points "138,136 274,0 138,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "266,0 258,0 138,117 18,0 10,0 138,127"}))))))
(def borte (om/factory Borte))

(defui Rand
  "Dreieck, halbiert mit Randstreifen."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :color/selected])
  Object
  (render [this]
          (let [id 5011
                {:keys [scarf/mid1 scarf/mid2 scarf/stripe1 thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2) s1 (:rgb stripe1)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "18,0 138,117 138,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid2)
                                              :fill c2
                                              :points "138,117 258,0 138,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "266,0 258,0 138,117 18,0 10,0 138,127"}))))))
(def randstreifen (om/factory Rand))
