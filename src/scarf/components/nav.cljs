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
                              (dom/h5 #js {:className "card-title"} title)
                              (dom/p #js {:className "card-text"} body))))))
(def category (om/factory Category))


(defui Categories
  static om/IQuery
  (query [this]
         [:nav/category])
  Object
  (render [this]
          (dom/div nil
                   (dom/h3 nil "Kategorien")
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :dreieckig-einfarbig-einfach
                                                                       :title "dreieckig, einfarbig"
                                                                       :body "Mit und ohne einfachem Rand / Borte"})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :dreieckig-einfarbig-doppelt
                                                                       :title "dreieckig, einfarbig"
                                                                       :body "Mit doppeltem Rand / Borte"})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :dreieckig-zweifarbig
                                                                       :title "dreieckig, zweifarbig"
                                                                       :body "halb / halb senkrecht, mit und ohne Rand"
                                                                       :disabled? true})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :viereckig-zweifarbig
                                                                       :title "viereckig, zweifarbig"
                                                                       :body "3/4 zu 1/4 horizontal, mit und ohne Rand"
                                                                       :disabled? true})))))))
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
                       :dreieckig-einfarbig-einfach (scarfs/dreieckig-einfarbig-einfach (om/props this))
                       :dreieckig-einfarbig-doppelt (scarfs/dreieckig-einfarbig-doppelt (om/props this)))))))
(def sub-categories (om/factory SubCategories))


(defui Products
  Object
  (render [this]
          (dom/div nil
                   (categories (om/props this))
                   (dom/br nil)
                   (sub-categories (om/props this)))))
(def products (om/factory Products))
