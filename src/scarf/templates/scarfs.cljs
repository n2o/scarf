(ns scarf.templates.scarfs
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.config :as config]
            [scarf.templates.triangle :as triangle]
            [scarf.templates.rolled :as rolled]
            [scarf.templates.utils :as utils]))

(defui ScarfCard
  static om/IQuery
  (query [this]
         [:scarf/current])
  Object
  (render [this]
          (let [{:keys [scarf id title subtitle art-no body scarf/current]} (om/props this)]
            (dom/div #js {:className (str "card pointer text-center"
                                          (when (= id current) " card-outline-highlight"))
                          :onClick #(utils/switch-chosen-one this id)}
                     (dom/div #js {:className "card-img-top"
                                   :style #js {:padding "1rem"}}
                              (scarf (merge (om/props this) {:thumbnail? true})))
                     (dom/div #js {:className "card-block"}
                              (dom/h5 #js {:className "card-title"}
                                      (dom/div nil title (dom/br nil) (dom/small nil subtitle)))
                              (dom/p #js {:className "card-text"}
                                     (dom/small #js {:className "text-muted"}
                                                (str "Artikelnummer: " (if art-no art-no id)))))))))
(def scarf-card (om/factory ScarfCard))

(defui DreieckigEinfarbigEinfach
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf triangle/einfarbig-ohne-dekor
                                                :id 5000
                                                :title "Ohne Rand und Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf triangle/einfarbig-borte
                                                :id 5001
                                                :title "Mit einfacher Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf triangle/einfarbig-rand
                                                :id 5002
                                                :art-no "5002 / 5003"
                                                :title "Mit einfachem Rand"
                                                :subtitle "umgeschlagen oder aufgesetzt"}))))))
(def dreieckig-einfarbig-einfach (om/factory DreieckigEinfarbigEinfach))

(defui ListScarfs
  Object
  (render [this]
          (dom/div nil
                   (triangle/einfarbig-ohne-dekor (merge (om/props this) {:thumbnail? true}))
                   (triangle/einfarbig-rand (merge (om/props this) {:thumbnail? true}))
                   (triangle/einfarbig-borte (merge (om/props this) {:thumbnail? true}))
                   (rolled/drei-streifen-mitte-halbiert (merge (om/props this) {:thumbnail? true}))
                   (rolled/ohne-dekor (merge (om/props this) {:thumbnail? true}))
                   (rolled/einfache-borte (merge (om/props this) {:thumbnail? true}))
                   (rolled/einfacher-rand (merge (om/props this) {:thumbnail? true})))))
(def list-scarfs (om/factory ListScarfs))

;; (set! (.. (first (js/document.getElementsByTagName "g")) -style -transform) "scale(0.1)")
