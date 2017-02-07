(ns scarf.views
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.extensions]
            [scarf.lib :as lib]))
(enable-console-print!)

(def width "276px")
(def height "138px")

(defui ColorBlock
  static om/IQuery
  (query [this]
         [:rgb :name :price])
  static om/Ident
  (ident [this {:keys [id]}]
         [:color/by-id id])

  Object
  (render [this]
          (let [{:keys [rgb name price id] :as color} (om/props this)]
            (dom/div #js {:className "color-block-wrapper"
                          :onClick #(om/transact! this `[(color/selected ~color)])
                          :style #js {:backgroundColor rgb}}
                     (dom/div #js {:className "color-block"})
                     (dom/span #js {:className "tooltiptext"} name)))))
(def color-block (om/factory ColorBlock {:keyfn :id}))

(defui Colors
  static om/IQuery
  (query [this]
         `[{:color/items ~(om/get-query ColorBlock)}])
  Object
  (render [this]
          (let [{:keys [color/items]} (om/props this)]
            (dom/div nil
                     (map color-block items)))))
(def colors (om/factory Colors))

(defui Selection
  static om/IQuery
  (query [this]
         [:color/selected])
  Object
  (render [this]
          (let [{:keys [color/selected]} (om/props this)]
            (dom/div #js {:className "smooth"}
                     (when-not selected
                       (dom/p nil "Bitte wähle zunächst eine Farbe aus"))))))
(def selection (om/factory Selection))

(defui Scarf
  static om/IQuery
  (query [this]
         [:scarf/color1 :scarf/color2])
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
                            (dom/polygon #js {:onClick #(om/transact! this '[(scarf/colorize {:field :scarf/color1})])
                                              :fill c1
                                              :points  "266.118,0 138.001,127.452 9.882,0 0,0 138.001,138 276,0"})
                            (dom/polygon #js {:onClick #(om/transact! this '[(scarf/colorize {:field :scarf/color2})])
                                              :fill c2
                                              :points  "266.118,0 246.666,0 138.001,108.833 29.333,0 9.882,0 138.001,127.452"})
                            (dom/polygon #js {:onClick #(om/transact! this '[(scarf/colorize {:field :scarf/color1})])
                                              :fill c1
                                              :points  "246.666,0 29.333,0 138.001,108.833"}))))))
(def scarf (om/factory Scarf))

(defui Main
  Object
  (render [this]
          (dom/div nil
                   (dom/h4 nil "Halstuchkonfigurator")
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col-md-6"}
                                     (scarf (om/props this)))
                            (dom/div #js {:className "col-md-6"}
                                     (selection (om/props this))))

                   (colors (om/props this)))))


;; (def norm-data (om/tree->db Scarf scarf.parser/init-data true))
;; norm-data
