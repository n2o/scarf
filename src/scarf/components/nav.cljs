(ns scarf.components.nav
  (:require [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [scarf.templates.scarfs :as scarfs]
            [scarf.parser :as parser]))

(defn- change-category [this category]
  (om/transact! this `[(nav/change-category {:category ~category})]))


;; -----------------------------------------------------------------------------

(defui Category
  static om/IQuery
  (query [this]
         [:nav/category])
  Object
  (render [this]
          (let [{:keys [whoami title body nav/category]} (om/props this)]
            (dom/div #js {:className (str "card"
                                          (when (= category whoami) " card-outline-primary")
                                          " pointer")
                          :onClick #(change-category this whoami)}
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
                   (dom/h4 nil "Kategorien")
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :dreieckig-einfarbig-einfach
                                                                       :title "dreieckig, einfarbig"
                                                                       :body "Mit und ohne einfachen Rand / Borte"})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :dreieckig-einfarbig-doppelt
                                                                       :title "dreieckig, einfarbig"
                                                                       :body "Mit doppeltem Rand / Borte"})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :dreieckig-zweifarbig
                                                                       :title "dreieckig, zweifarbig"
                                                                       :body "halb / halb senkrecht, mit und ohne Rand"})))
                            (dom/div #js {:className "col"}
                                     (category (merge (om/props this) {:whoami :viereckig-zweifarbig
                                                                       :title "viereckig, zweifarbig"
                                                                       :body "3/4 zu 1/4 horizontal, mit und ohne Rand"})))))))
(def categories (om/factory Categories))
