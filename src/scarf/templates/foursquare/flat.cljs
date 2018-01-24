(ns scarf.templates.foursquare.flat
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
          (let [id 6000
                {:keys [scarf/mid1 thumbnail?]} (om/props this)
                c1 (:rgb mid1)
                width 270
                height 270
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "1,1 267,1 267,267 1,267"}))))))
(def ohne-dekor (om/factory OhneDekor))

(defui Borte
  "Dreieck mit Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :color/selected])
  Object
  (render [this]
          (let [id 6001
                {:keys [scarf/mid1 scarf/stripe1 thumbnail?]} (om/props this)
                c1 (:rgb mid1) s1 (:rgb stripe1)
                width 270
                height 270
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "1,1 267,1 267,267 1,267"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "9,9 259,9 259,259 9,259"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "17,17 251,17 251,251 17,251"}))))))
(def borte (om/factory Borte))

(defui Rand
  "Dreieck mit Randstreifen."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :color/selected])
  Object
  (render [this]
          (let [id 6002
                {:keys [scarf/mid1 scarf/stripe1 thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb stripe1)
                width 270
                height 270
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill c2
                                              :points "1,1 267,1 267,267 1,267"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "9,9 259,9 259,259 9,259"}))))))
(def randstreifen (om/factory Rand))

(defui DoppelRand
  "Viereck mit doppeltem Rand."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :color/selected])
  Object
  (render [this]
          (let [id 6004
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 thumbnail?]} (om/props this)
                c1 (:rgb mid1) s1 (:rgb stripe1) s2 (:rgb stripe2)
                width 270
                height 270
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill s2
                                              :points "1,1 267,1 267,267 1,267"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "9,9 259,9 259,259 9,259"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "17,17 251,17 251,251 17,251"}))))))
(def doppelrand (om/factory DoppelRand))

(defui DoppelBorte
  "Dreieck mit Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :color/selected])
  Object
  (render [this]
          (let [id 6006
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 thumbnail?]} (om/props this)
                c1 (:rgb mid1) s1 (:rgb stripe1) s2 (:rgb stripe2)
                width 270
                height 270
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "1,1 267,1 267,267 1,267"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill s2
                                              :points "9,9 259,9 259,259 9,259"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "17,17 251,17 251,251 17,251"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill c1
                                              :points "25,25 243,25 243,243 25,243"}))))))
(def doppelborte (om/factory DoppelBorte))
