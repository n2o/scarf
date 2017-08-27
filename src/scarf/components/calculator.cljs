(ns scarf.components.calculator
  (:require [goog.string :as gstring]
            [clojure.string :refer [lower-case]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.lib :as lib]
            [scarf.templates.scarfs :as scarfs]))

(defn- order-no [color1 color2 current]
  (str "ht-s" current "_" (subs (lower-case (:name color1)) 0 5) "-" (subs (lower-case (:name color2)) 0 5)))

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
                     (println query)
                     (dom/div #js {:className "row"}
                              (dom/div #js {:className "col-6"}
                                       (dom/table #js {:className "table table-hover table-striped table-condensed"}
                                                  (dom/thead nil
                                                             (dom/tr nil
                                                                     (dom/th #js {:width "10%"})
                                                                     (dom/th #js {:width "50%"} "Bereich")
                                                                     (dom/th #js {:width "40%"} "Farbe")))
                                                  (dom/tbody nil
                                                             (when (contains? query :scarf/mid1)
                                                               (dom/tr nil
                                                                       (dom/td nil)
                                                                       (dom/td nil "Mitte 1")
                                                                       (dom/td nil (:name mid1))))
                                                             (when (contains? query :scarf/mid2)
                                                               (dom/tr nil
                                                                       (dom/td nil)
                                                                       (dom/td nil "Mitte 2")
                                                                       (dom/td nil (:name mid2))))
                                                             (when (contains? query :scarf/stripe1)
                                                               (dom/tr nil
                                                                       (dom/td nil)
                                                                       (dom/td nil "Borte / Rand 1")
                                                                       (dom/td nil (:name stripe1))))
                                                             (when (contains? query :scarf/stripe2)
                                                               (dom/tr nil
                                                                       (dom/td nil)
                                                                       (dom/td nil "Borte / Rand 2")
                                                                       (dom/td nil (:name stripe2))))
                                                             (dom/tr #js {:style #js {:borderTop "4px double lightgrey"}}
                                                                     (dom/td nil (dom/i #js {:className "fa fa-barcode"}))
                                                                     (dom/td nil "Bestellnummer:")
                                                                     (dom/td nil (order-no mid1 mid2 current)))))))))))
(def view (om/factory Calculator))
