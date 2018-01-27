(ns scarf.components.calculator
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [scarf.templates.scarfs :as scarfs]
            [scarf.components.options :as options]
            [scarf.templates.utils :as utils]))

(defui Calculator
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :scarf/stripe2 :scarf/current
          :option/size-a :option/size-b :option/size-c :option/stripe])
  Object
  (render [this]
          (let [{:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/stripe2
                        option/size-a option/size-b option/size-c option/stripe
                        scarf/current]} (om/props this)
                query (scarfs/id->query current)]
            (html [:div
                   [:div.row
                    [:div.col-md-6.col-sm-12
                     [:table.table.table-striped.table-condensed
                      [:thead [:tr [:th "Eigenschaft"] [:th "Wert"]]]
                      [:tbody
                       [:tr [:td "Muster"] [:td (utils/stripe-dispatch-with-option current stripe)]]
                       [:tr [:td "Lange Seite"] [:td (str "ca. " size-a " cm")]]
                       [:tr [:td "Kurze Seite"] [:td (str "ca. " size-b " cm")]]
                       [:tr [:td "Höhe"] [:td (str "ca. " size-c " cm")]]]]]
                    [:div.col-md-6.col-sm-12
                     [:table.table.table-striped.table-condensed
                      [:thead [:tr [:th "Farbbereich"] [:th "Farbe"] [:th "Farbcode"]]]
                      [:tbody
                       (when (contains? query :scarf/mid1)
                         [:tr [:td "Mitte 1"] [:td (:name mid1)] [:td (:id mid1)]])
                       (when (contains? query :scarf/mid2)
                         [:tr [:td "Mitte 2"] [:td (:name mid2)] [:td (:id mid2)]])
                       (when (contains? query :scarf/stripe1)
                         [:tr [:td "Borte / Rand 1"] [:td (:name stripe1)] [:td (:id stripe1)]])
                       (when (contains? query :scarf/stripe2)
                         [:tr [:td "Borte / Rand 2"] [:td (:name stripe2)] [:td (:id stripe2)]])]]]]]))))
(def view (om/factory Calculator))
