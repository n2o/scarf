(ns scarf.views
  (:require [goog.dom :as gdom]
            [devcards.core :as dc :refer-macros [defcard deftest]]
            [cljs.test :refer-macros [is testing]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.lib :as lib]))

(enable-console-print!)

(def width "276px")
(def height "138px")

(defui Scarf
  Object
  (render [this]
    (dom/div nil
             (dom/svg #js {:enable-background "new 0 0 276 138"
                           :viewBow           "0 0 276 128"
                           :height            "138px"
                           :width             "276px"
                           :x                 "0"
                           :y                 "0"}
                      (dom/g nil
                             (dom/polygon #js {:fill   "#AA0000"
                                               :points "266.118,0 138.001,127.452 9.882,0 0,0 138.001,138 276,0"})
                             (dom/polygon #js {:fill   "#008800"
                                               :points "266.118,0 246.666,0 138.001,108.833 29.333,0 9.882,0 138.001,127.452"})
                             (dom/polygon #js {:fill   "#AA0000"
                                               :points "246.666,0 29.333,0 138.001,108.833"}))))))
(def scarf (om/factory Scarf {}))

(defui ColorBlock
  Object
  (render [this]
    (let [color (:color (om/props this))]
      (dom/div #js {:className "color-block-wrapper"
                    :style     {:color color}}
               (dom/div #js {:className "color-block"})))))
(def color-block (om/factory ColorBlock {}))

(defui Colors
  Object
  (render [this]
    (dom/div nil
             (dom/h4 nil "Available Colors")
             (let [colors (lib/get-colors)]
               (apply dom/ul #js {:id "colors"}
                      (map #(color-block {:color %}) colors))))))
(defn colors
  "Create color palette"
  ([data] (om/factory Colors data))
  ([]     (colors {})))

;(defui Main
;  Object
;  (render [this]
;    (dom/div nil
;             (dom/h4 nil "scarf")
;             (scarf)
;             (colors))))


(defcard scarf-card
         "## Main Scarf component"
         (scarf))

(defcard colors-card
         "## Choose your color"
         (colors))

(deftest scarf-tests
         "## Testing main component"
         (testing
           "failing"
           (is (= 1 2))))