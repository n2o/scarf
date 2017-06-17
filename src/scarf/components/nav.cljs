(ns scarf.components.nav
  (:require [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [scarf.templates.scarfs :as scarfs]
            [scarf.templates.utils :as utils]
            [scarf.parser :as parser]))

(defn- change-category [this category]
  (om/transact! this `[(nav/change-category {:category ~category})])
  (utils/switch-chosen-one this nil))


;; -----------------------------------------------------------------------------

(defui Category
  static om/IQuery
  (query [this]
         [:nav/category])
  Object
  (render [this]
          (let [{:keys [whoami title body nav/category disabled?]} (om/props this)]
            (dom/div #js {:className (str "card pointer"
                                          (when (= category whoami) " card-outline-highlight")
                                          (when disabled? " not-allowed text-muted"))
                          :title "Mehr Kategorien folgen bald!"
                          :onClick (when-not disabled? #(change-category this whoami))}
                     (dom/div #js {:className "card-block"}
                              (when title
                                (dom/h5 #js {:className "card-title"} title))
                              (when body
                                (dom/p #js {:className "card-text"} body)))))))
(def category (om/factory Category))


(defui Categories
  static om/IQuery
  (query [this]
         [:nav/category])
  Object
  (render [this]
          (dom/div nil
                   (dom/h3 nil "Kategorien")
                   (dom/br nil)
                   (dom/h6 nil "Einfarbig")
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :einfach
                                                                       :title "einfach"
                                                                       :body "Mit und ohne einfachem Rand / Borte"})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :doppelt
                                                                       :title "doppelt"
                                                                       :body "Mit doppeltem Rand / Borte"})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :gekreuzt
                                                                       :title "gekreuzt"
                                                                       :body "Mit gekreuzten Borten"}))))
                   (dom/br nil)
                   (dom/h6 nil "Zweifarbig")
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :halbiert
                                                                       :title "vertikal geteilt, 1/2 zu 1/2"
                                                                       :body "Mit und ohne einfachem Rand / Borte"})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :geviertelt
                                                                       :title "horizontal geteilt, 3/4 zu 1/4"
                                                                       :body "Mit und ohne einfachem Rand / Borte"})))))))
(def categories (om/factory Categories))

(defui SubCategories
  static om/IQuery
  (query [this]
         [:nav/category])
  Object
  (render [this]
          (let [{:keys [nav/category]} (om/props this)]
            (dom/div nil
                     (dom/h4 nil "Wähle eine Variante aus")
                     (case category
                       :einfach (scarfs/einfach (om/props this))
                       :doppelt (scarfs/doppelt (om/props this))
                       :gekreuzt (scarfs/gekreuzt (om/props this))
                       :halbiert (scarfs/halbiert (om/props this))
                       :geviertelt (scarfs/geviertelt (om/props this))
                       nil)))))
(def sub-categories (om/factory SubCategories))


(defui Products
  Object
  (render [this]
          (dom/div nil
                   (categories (om/props this))
                   (dom/br nil)
                   (sub-categories (om/props this)))))
(def products (om/factory Products))
