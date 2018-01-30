(ns scarf.components.calculator
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [scarf.templates.scarfs :as scarfs]
            [scarf.components.colors :as colors]
            [scarf.templates.utils :as utils]))

(defn- calculator-color-row [query field description color]
  (when (contains? query field)
    [:tr
     [:td description]
     [:td
      [:span#color-selection-sample {:style {:paddingRight "0.5em"}} (colors/color-block color)]
      (:name color)]
     [:td (:id color)]]))

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
                      [:thead [:tr [:th "Farbbereich"] [:th.text-center "Farbe"] [:th.text-center "Farbcode"]]]
                      [:tbody
                       (calculator-color-row query :scarf/mid1 "Mitte 1" mid1)
                       (calculator-color-row query :scarf/mid2 "Mitte 2" mid2)
                       (calculator-color-row query :scarf/stripe1 "Borte / Rand 1" stripe1)
                       (calculator-color-row query :scarf/stripe2 "Borte / Rand 2" stripe2)]]]]]))))
(def view (om/factory Calculator))
