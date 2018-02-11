(ns scarf.components.nav
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [scarf.templates.scarfs :as scarfs]))

(defn- change-category [this category]
  (om/transact! this `[(nav/change-category {:category ~category})]))


;; -----------------------------------------------------------------------------

(defui Category
  static om/IQuery
  (query [this]
         [:nav/category])
  Object
  (render [this]
          (let [{:keys [whoami title body nav/category disabled?]} (om/props this)]
            (html [:div {:class (str "card hover pointer"
                                     (when (= category whoami) " card-outline-highlight")
                                     (when disabled? " not-allowed text-muted"))
                         :on-click (when-not disabled? #(change-category this whoami))}
                   [:div.card-body
                    (when title [:h5.card-title title])
                    (when body [:p.card-text body])]]))))
(def category (om/factory Category))


(defui Categories
  static om/IQuery
  (query [this]
         [:nav/category])
  Object
  (render [this]
          (html
           [:div
            [:h3 "Kategorien"] [:br] [:h6 "Einfarbige Grundfläche"]
            [:div.row
             [:div.col
              (category (merge (om/props this) {:whoami :einfach
                                                :title "einfach"
                                                :body "Mit und ohne Rand / Borte"}))]
             [:div.col
              (category (merge (om/props this) {:whoami :doppelt
                                                :title "doppelt"
                                                :body "Mit doppeltem Rand / Borte"}))]
             [:div.col
              (category (merge (om/props this) {:whoami :gekreuzt
                                                :title "gekreuzt"
                                                :body "Mit gekreuzten Borten"}))]
             [:div.col
              (category (merge (om/props this) {:whoami :zweifarbige-schenkel
                                                :title "einfach"
                                                :body "Mit zweifarbigem Rand / Borte"}))]]
            [:br]
            [:h6 "Zweifarbige Grundfläche"]
            [:div.row
             [:div.col
              (category (merge (om/props this) {:whoami :halbiert
                                                :title "vertikal geteilt, 1/2 zu 1/2"
                                                :body "Mit und ohne Rand / Borte"}))]
             [:div.col
              (category (merge (om/props this) {:whoami :geviertelt
                                                :title "horizontal geteilt, 4/5 zu 1/5"
                                                :body "Mit und ohne Rand / Borte"}))]]])))
(def categories (om/factory Categories))

(defui SubCategories
  static om/IQuery
  (query [this]
         [:nav/category])
  Object
  (render [this]
          (let [{:keys [nav/category]} (om/props this)]
            (html [:div
                   [:h4 "Wähle eine Variante aus"]
                   (case category
                     :einfach (scarfs/einfach (om/props this))
                     :doppelt (scarfs/doppelt (om/props this))
                     :gekreuzt (scarfs/gekreuzt (om/props this))
                     :halbiert (scarfs/halbiert (om/props this))
                     :geviertelt (scarfs/geviertelt (om/props this))
                     :zweifarbige-schenkel (scarfs/zweifarbige-schenkel (om/props this))
                     nil)]))))
(def sub-categories (om/factory SubCategories))


(defui Products
  Object
  (render [this]
          (html [:div
                 (categories (om/props this))
                 [:br]
                 (sub-categories (om/props this))])))
(def products (om/factory Products))
