(ns scarf.templates.twolegs.triangle
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]))

(defui Borte
  "Dreieck, zweifarbige Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5016
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1) s1 (:rgb stripe1) s2 (:rgb stripe2)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "266,0 138,128 10,0 3,0 138,135 273,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "258,0 18,0 138,118"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "10,0 18,0 138,118 138,128"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill s2
                                              :points "266,0 258,0 138,118 138,128"}))))))
(def borte (om/factory Borte))

(defui Rand
  "Dreieck, zweifarbiger Randstreifen."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5017
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 scarf/current thumbnail?]} (om/props this)
                c1 (:rgb mid1) s1 (:rgb stripe1) s2 (:rgb stripe2)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "10,0 263,0 138,128"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "0,0 10,0 138,128 138,138"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill s2
                                              :points "273,0 263,0 138,128 138,138"}))))))
(def randstreifen (om/factory Rand))
