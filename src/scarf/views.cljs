(ns scarf.views
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.components.calculator :as calc]
            [scarf.lib :as lib]))
(enable-console-print!)

(def width "280px")
(def height "140px")

(defn- colorize
  "Verify that a color has been selected before transacting a nil-value."
  [this field]
  (let [{:keys [color/selected]} (om/props this)]
    (when-not (nil? selected)
      (om/transact! this `[(scarf/colorize {:field ~field})]))))

;; -----------------------------------------------------------------------------

(defui ColorBlock
  static om/IQuery
  (query [this]
         [:rgb :name :price])
  static om/Ident
  (ident [this {:keys [id]}]
         [:color/by-id id])

  Object
  (render [this]
          (let [{:keys [rgb name price id selected] :as color-complete} (om/props this)
                color (dissoc color-complete :selected)]
            (dom/div #js {:className (str "color-block-wrapper" (when (= id (:id selected)) " block-active"))
                          :onClick #(om/transact! this `[(color/selected ~color)])
                          :style #js {:backgroundColor rgb}}
                     (dom/div #js {:className "color-block"})
                     (dom/span #js {:className "tooltiptext"} name)))))
(def color-block (om/factory ColorBlock {:keyfn :id}))

(defui Colors
  static om/IQuery
  (query [this]
         `[{:color/items ~(om/get-query ColorBlock)}
           :color/selected])
  Object
  (render [this]
          (let [{:keys [color/items color/selected]} (om/props this)]
            (dom/div nil
                     (map #(color-block (merge % {:selected selected})) items)))))
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
(def scarf (om/factory Scarf))

(defui Main
  Object
  (render [this]
          (dom/div nil
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col-md-6 text-center"}
                                     (scarf (om/props this)))
                            (dom/div #js {:className "col-md-offset-1 col-md-4 text-center"}
                                     (colors (om/props this))
                                     (selection (om/props this))))
                   (dom/hr nil)
                   (calc/view (om/props this)))))


;; (def norm-data (om/tree->db Scarf scarf.parser/init-data true))
;; norm-data
