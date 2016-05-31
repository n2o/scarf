(ns scarf.devcards.core
  (:require [devcards.core :refer-macros [defcard deftest]]
            [devcards-om-next.core :refer-macros [om-next-root defcard-om-next]]
            [cljs.test :refer-macros [is testing]]
            [scarf.lib :as lib]
            [scarf.views :as views]))

(enable-console-print!)

;;;; Init
(defcard-om-next scarf-om-next
                 "## Main Scarf Component"
                 views/Scarf
                 lib/reconciler)

(defcard colors
         ""
         (views/colors))

(deftest scarf-tests
         "## Testing main component"
         (testing
           "failing"
           (is (= 1 2))))