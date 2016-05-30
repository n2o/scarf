(ns scarf.devcards.core
  (:require [goog.dom :as gdom]
            [devcards.core :as dc :refer-macros [defcard deftest]]
            [devcards-om-next.core :as don :refer-macros [om-next-root defcard-om-next]]
            [cljs.test :refer-macros [is testing]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.lib :as lib]
            [scarf.views :as views]))

(enable-console-print!)

(def width "276px")
(def height "138px")

(defcard-om-next scarf-om-next
                 "## Main Scarf Component"
                 views/Scarf
                 lib/reconciler)

#_(defcard-om-next colors-card
                   "## Choose your color"
                   Colors
                   lib/reconciler)

(defcard colors
         ""
         (views/colors))

(deftest scarf-tests
         "## Testing main component"
         (testing
           "failing"
           (is (= 1 2))))