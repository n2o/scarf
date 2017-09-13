(ns scarf.components.calculator
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [scarf.templates.scarfs :as scarfs]))

(defn- order-no [current color1 color2 stripe1 stripe2]
  (str current))

(defui Calculator
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :scarf/stripe2 :scarf/current
          :option/size-a :option/size-b :option/size-c])
  Object
  (render [this]
          (let [{:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/stripe2
                        option/size-a option/size-b option/size-c
                        scarf/current]} (om/props this)
                query (scarfs/id->query current)]
            (html [:div
                   [:div.row
                    [:div.col-6
                     [:table.table.table-striped.table-condensed
                      [:thead [:tr [:th "Option"] [:th "Farbe"] [:th "Farbcode"]]]
                      [:tbody
                       (when (contains? query :scarf/mid1)
                         [:tr [:td "Mitte 1"] [:td (:name mid1)] [:td (:id mid1)]])
                       (when (contains? query :scarf/mid2)
                         [:tr [:td "Mitte 2"] [:td (:name mid2)] [:td (:id mid2)]])
                       (when (contains? query :scarf/stripe1)
                         [:tr [:td "Borte / Rand 1"] [:td (:name stripe1)] [:td (:id stripe1)]])
                       (when (contains? query :scarf/stripe2)
                         [:tr [:td "Borte / Rand 2"] [:td (:name stripe2)] [:td (:id stripe2)]])]]]
                    [:div.col-6
                     [:table.table.table-striped.table-condensed
                      [:thead [:tr [:th "Eigenschaft"] [:th "Wert"]]]
                      [:tbody
                       [:tr [:td "Muster"] [:td (order-no current mid1 mid2 stripe1 stripe2)]]
                       [:tr [:td "Lange Seite"] [:td (str "ca. " size-a " cm")]]
                       [:tr [:td "Kurze Seite"] [:td (str "ca. " size-b " cm")]]
                       [:tr [:td "Höhe"] [:td (str "ca. " size-c " cm")]]]]]]
                   [:h4 "Fertig konfiguriert?"]
                   [:p "Dann lies bitte die Informationen zu unseren Farben und
                   lass' dir unten zeigen, wie du das Halstuch bestellen kannst."]]))))
(def view (om/factory Calculator))
