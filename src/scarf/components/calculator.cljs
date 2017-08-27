(ns scarf.components.calculator
  (:require [goog.string :as gstring]
            [clojure.string :refer [lower-case]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.lib :as lib]
            [scarf.components.colors :as colors]
            [scarf.templates.scarfs :as scarfs]))

(defn- order-no [current color1 color2 stripe1 stripe2]
  (str current))

(defui Calculator
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :scarf/stripe2 :scarf/stripe3 :scarf/current])
  Object
  (render [this]
          (let [{:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/stripe2 scarf/stripe3
                        scarf/current]} (om/props this)
                query (scarfs/id->query current)]
            (dom/div nil
                     (dom/div #js {:className "row"}
                              (dom/div #js {:className "col-6"}
                                       (dom/table #js {:className "table table-hover table-striped table-condensed"}
                                                  (dom/thead nil
                                                             (dom/tr nil
                                                                     (dom/th nil"Bereich")
                                                                     (dom/th nil "Farbe")
                                                                     (dom/th nil "Farbcode")))
                                                  (dom/tbody nil
                                                             (when (contains? query :scarf/mid1)
                                                               (dom/tr nil
                                                                       (dom/td nil "Mitte 1")
                                                                       (dom/td nil (:name mid1))
                                                                       (dom/td nil (:id mid1))))
                                                             (when (contains? query :scarf/mid2)
                                                               (dom/tr nil
                                                                       (dom/td nil "Mitte 2")
                                                                       (dom/td nil (:name mid2))
                                                                       (dom/td nil (:id mid2))))
                                                             (when (contains? query :scarf/stripe1)
                                                               (dom/tr nil
                                                                       (dom/td nil "Borte / Rand 1")
                                                                       (dom/td nil (:name stripe1))
                                                                       (dom/td nil (:id stripe1))))
                                                             (when (contains? query :scarf/stripe2)
                                                               (dom/tr nil
                                                                       (dom/td nil "Borte / Rand 2")
                                                                       (dom/td nil (:name stripe2))
                                                                       (dom/td nil (:id stripe2))))
                                                             (dom/tr #js {:style #js {:borderTop "4px double lightgrey"}}
                                                                     (dom/td nil "Artikelnummer:")
                                                                     (dom/td #js {:colSpan 2} (order-no current mid1 mid2 stripe1 stripe2)))))))))))
(def view (om/factory Calculator))
