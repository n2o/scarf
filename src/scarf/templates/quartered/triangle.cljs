(ns scarf.templates.quartered.triangle
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]))

(defui OhneDekor
  "Dreieck ohne Dekor, zweifarbig 3/4 zu 1/4."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5013
                {:keys [scarf/mid1 scarf/mid2 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2)
                width 266
                height 130
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "0,0 100,95 166,95 266,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid2)
                                              :fill c2
                                              :points "100,95 166,95 133,127"}))))))
(def ohne-dekor (om/factory OhneDekor))

(defui Borte
  "Dreieck, geviertelt mit Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5014
                {:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2) s1 (:rgb stripe1)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "0,0 105,103 171,103 274,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid2)
                                              :fill c2
                                              :points "105,103 171,103 138,136"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "266,0 258,0 138,117 18,0 10,0 138,127"}))))))
(def borte (om/factory Borte))

(defui Rand
  "Dreieck, geviertelt mit Rand."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5015
                {:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2) s1 (:rgb stripe1)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "10,0 115,103 161,103 266,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid2)
                                              :fill c2
                                              :points "115,103 161,103 138,126"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "274,0 266,0 138,126 10,0 0,0 138,136"}))))))
(def randstreifen (om/factory Rand))
