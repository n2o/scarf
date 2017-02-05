(ns scarf.views
  (:require [goog.dom :as gdom]
            [cljs.test :refer-macros [is testing]]
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
  (ident [this {:keys [rgb]}]
         [:color/by-rgb rgb])

  Object
  (render [this]
          (let [color (om/props this)]
            (dom/div #js {:className "color-block-wrapper"
                          ;;:onClick   #(lib/save-selected-color! color)
                          :style     #js {:backgroundColor (:rgb color)}}
                     (dom/div #js {:className "color-block"})
                     (dom/span #js {:className "tooltiptext"} (:name color))))))
(def color-block (om/factory ColorBlock))

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

(defui Scarf
  static om/IQuery
  (query [this]
         [:scarf :user])
  Object
  (render [this]
          (dom/div nil
                   (dom/svg #js {:enableBackground "new 0 0 276 138"
                                 ;; :viewBow           "0 0 276 128"
                                 :height            "138px"
                                 :width             "276px"
                                 :x                 "0"
                                 :y                 "0"}
                            (dom/g nil
                                   (dom/polygon #js {;; :onClick #(lib/update-color! :color1)
                                                     ;; :fill    (:rgb (get-in @lib/app-state [:scarf :color1]))
                                                     :points  "266.118,0 138.001,127.452 9.882,0 0,0 138.001,138 276,0"})
                                   (dom/polygon #js {;; :onClick #(lib/update-color! :color2)
                                                     ;; :fill    (:rgb (get-in @lib/app-state [:scarf :color2]))
                                                     :points  "266.118,0 246.666,0 138.001,108.833 29.333,0 9.882,0 138.001,127.452"})
                                   (dom/polygon #js {;; :onClick #(lib/update-color! :color1)
                                                     ;; :fill    (:rgb (get-in @lib/app-state [:scarf :color1]))
                                                     :points  "246.666,0 29.333,0 138.001,108.833"})))
                   (dom/div nil
                            #_(dom/span nil "Current selection:")
                            #_(dom/span #js {:id "current-selection"}
                                      (color-block (lib/get-selected-color)))))))
(def scarf (om/factory Scarf))

(defui Main
  Object
  (render [this]
          (dom/div nil
                   (dom/h4 nil "scarf")
                   (scarf)
                   (colors (om/props this)))))
