(ns scarf.views
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def width "276px")
(def height "138px")

(defui ScarfExample
  Object
  (render [this]
    (dom/div nil
             (dom/h4 nil "scarf-cljs")
             (dom/svg #js {:enable-background "new 0 0 276 138"
                           :viewBow           "0 0 276 128"
                           :height            "138px"
                           :width             "276px"
                           :x                 "0"
                           :y                 "0"}
                      (dom/g nil
                             (dom/polygon #js {:fill "#AA0000"
                                               :points "266.118,0 138.001,127.452 9.882,0 0,0 138.001,138 276,0"})
                             (dom/polygon #js {:fill "#008800"
                                               :points "266.118,0 246.666,0 138.001,108.833 29.333,0 9.882,0 138.001,127.452"})
                             (dom/polygon #js {:fill "#FF0000"
                                               :points "246.666,0 29.333,0 138.001,108.833"}))))))

(defui Colors
  Object
  (render [this]
    (dom/div nil
             (dom/h4 nil "Available Colors"))))