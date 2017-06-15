(ns scarf.templates.crossed.triangle
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :refer [scarf-background] :as utils]))

(defui EinfacheBorte
  "Dreieck mit gekreuzter Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5007
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
                                              :points "266,0 138,127 10,0 3,0 138,135 273,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "258,0 18,0 138,118"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill c2
                                              :points "266,0 258,0 129,126 134,131"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill c2
                                              :points  "10,0 18,0 147,126 142,131"}))))))
(def einfache-borte (om/factory EinfacheBorte))

(defui DoppelteBorte
  "Dreieck mit gekreuzter Doppelborte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5008
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 scarf/current thumbnail?]} (om/props this)
                cmid1 (:rgb mid1) s1 (:rgb stripe1) s2 (:rgb stripe2)
                width 276
                height 140
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill cmid1
                                              :points "266,0 138,127 10,0 3,0 138,135 273,0"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill cmid1
                                              :points "258,0 18,0 138,118"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "266,0 258,0 129,126 134,131"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "10,0 18,0 147,126 142,131"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill s2
                                              :points "258,0 250,0 124,121 129,126"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill s2
                                              :points "18,0 26,0 152,121 147,126"}))))))
(def doppelte-borte (om/factory DoppelteBorte))
