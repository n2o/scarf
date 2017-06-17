(ns scarf.templates.scarfs
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.config :as config]
            [scarf.templates.simple.triangle :as simple-triangle]
            [scarf.templates.twice.triangle :as twice-triangle]
            [scarf.templates.crossed.triangle :as crossed-triangle]
            [scarf.templates.halved.triangle :as halved-triangle]
            [scarf.templates.quartered.triangle :as quartered-triangle]
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

(defui Einfach
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
                                               {:scarf simple-triangle/randstreifen
                                                :id 5002
                                                :art-no "5002 / 5003"
                                                :title "Mit einfachem Rand"
                                                :subtitle "umgeschlagen oder aufgesetzt"}))))))
(def einfach (om/factory Einfach))

(defui Doppelt
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf twice-triangle/randstreifen
                                                :id 5004
                                                :art-no "5004 / 5005"
                                                :title "Mit doppeltem Rand"
                                                :subtitle "umgeschlagen oder aufgesetzt"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf twice-triangle/borte
                                                :id 5006
                                                :title "Mit doppelter Borte"}))))))
(def doppelt (om/factory Doppelt))


;; Gekreuzte Borten
(defui Gekreuzt
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf crossed-triangle/einfache-borte
                                                :id 5007
                                                :title "Mit gekreuzter Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf crossed-triangle/doppelte-borte
                                                :id 5008
                                                :title "Mit gekreuzter Doppelborte"}))))))
(def gekreuzt (om/factory Gekreuzt))

(defui Halbiert
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf halved-triangle/ohne-dekor
                                                :id 5009
                                                :title "Ohne Rand und Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf halved-triangle/borte
                                                :id 5010
                                                :title "Mit einfacher Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf halved-triangle/randstreifen
                                                :id 5011
                                                :art-no "5011 / 5012"
                                                :title "Mit einfachem Rand"
                                                :subtitle "umgeschlagen oder aufgesetzt"}))))))
(def halbiert (om/factory Halbiert))

(defui Viertel
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf quartered-triangle/ohne-dekor
                                                :id 5013
                                                :title "Ohne Rand und Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf quartered-triangle/borte
                                                :id 5014
                                                :title "Mit einfacher Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf quartered-triangle/randstreifen
                                                :id 5015
                                                :art-no "5015 / 5016"
                                                :title "Mit einfachem Rand"
                                                :subtitle "umgeschlagen oder aufgesetzt"}))))))
(def geviertelt (om/factory Viertel))
