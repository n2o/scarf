(ns scarf.views
  (:require [goog.dom :as gdom]
            [devcards.core :as dc :refer-macros [defcard deftest]]
            [devcards-om-next.core :as don :refer-macros [om-next-root defcard-om-next]]
            [cljs.test :refer-macros [is testing]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.lib :as lib]))

(enable-console-print!)

(def width "276px")
(def height "138px")

(defui ^:once ColorBlock
  Object
  (render [this]
    (let [[color name] (:color (om/props this))]
      (dom/div #js {:className "color-block-wrapper"
                    :onClick   #(lib/save-selected-color! color)
                    :style     #js {:backgroundColor color}}
               (dom/div #js {:className "color-block"})
               (dom/span #js {:className "tooltiptext"} name)))))
(def color-block (om/factory ColorBlock {}))

(defui ^:once Colors
  Object
  (render [this]
    (dom/div nil
             (let [colors (lib/get-colors)]
               (apply dom/ul #js {:id "colors"}
                      (map #(color-block {:color %}) colors))))))

(defn colors
  "Create color palette"
  ([data] (om/factory Colors data))
  ([] (colors {})))

(defui ^:once Scarf
  static om/IQuery
  (query [this]
    [:scarf :user])
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
                             (dom/polygon #js {:onClick #(lib/update-color! :color1)
                                               :fill    (get-in @lib/app-state [:scarf :color1])
                                               :points  "266.118,0 138.001,127.452 9.882,0 0,0 138.001,138 276,0"})
                             (dom/polygon #js {:onClick #(lib/update-color! :color2)
                                               :fill    (get-in @lib/app-state [:scarf :color2])
                                               :points  "266.118,0 246.666,0 138.001,108.833 29.333,0 9.882,0 138.001,127.452"})
                             (dom/polygon #js {:onClick #(lib/update-color! :color1)
                                               :fill    (get-in @lib/app-state [:scarf :color1])
                                               :points  "246.666,0 29.333,0 138.001,108.833"})))
             (dom/div nil
                      (dom/span nil "Current selection:")
                      (color-block {:color [(lib/get-selected-color) "Aktuelle Auswahl"]})))))
(def scarf (om/factory Scarf {}))

#_(defui Main
    Object
    (render [this]
      (dom/div nil
               (dom/h4 nil "scarf")
               (scarf)
               (colors))))

(defcard-om-next scarf-om-next
                 "## Main Scarf Component"
                 Scarf
                 lib/reconciler)

#_(defcard-om-next colors-card
                   "## Choose your color"
                   Colors
                   lib/reconciler)

(defcard colors
         ""
         (colors))

(deftest scarf-tests
         "## Testing main component"
         (testing
           "failing"
           (is (= 1 2))))