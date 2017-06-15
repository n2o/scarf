(ns scarf.templates.scarfs
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.config :as config]
            [scarf.templates.triangle :as triangle]
            [scarf.templates.simple.triangle :as simple-triangle]
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
                                                (str "Artikelnummer: " (or art-no id)))))))))
(def scarf-card (om/factory ScarfCard))

(defui DreieckigEinfarbigEinfach
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf simple-triangle/ohne-dekor
                                                :id 5000
                                                :title "Ohne Rand und Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf simple-triangle/borte
                                                :id 5001
                                                :title "Mit einfacher Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf simple-triangle/rand
                                                :id 5002
                                                :art-no "5002 / 5003"
                                                :title "Mit einfachem Rand"
                                                :subtitle "umgeschlagen oder aufgesetzt"}))))))
(def dreieckig-einfarbig-einfach (om/factory DreieckigEinfarbigEinfach))

(defui DreieckigEinfarbigDoppelt
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf triangle/einfarbig-doppelrand
                                                :id 5004
                                                :art-no "5004 / 5005"
                                                :title "Mit doppeltem Rand"
                                                :subtitle "umgeschlagen oder aufgesetzt"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf triangle/einfarbig-doppelborte
                                                :id 5006
                                                :title "Mit doppelter Borte"}))))))
(def dreieckig-einfarbig-doppelt (om/factory DreieckigEinfarbigDoppelt))


;; Gekreuzte Borten
(defui EinfarbigGekreuzt
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf triangle/einfarbig-borte-gekreuzt
                                                :id 5007
                                                :title "Mit gekreuzter Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf triangle/einfarbig-borte-doppelt-gekreuzt
                                                :id 5008
                                                :title "Mit gekreuzter Doppelborte"}))))))
(def einfarbig-gekreuzt (om/factory EinfarbigGekreuzt))
