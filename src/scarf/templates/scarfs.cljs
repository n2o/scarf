(ns scarf.templates.scarfs
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]]
            [scarf.templates.simple.triangle :as simple-triangle]
            [scarf.templates.twice.triangle :as twice-triangle]
            [scarf.templates.crossed.triangle :as crossed-triangle]
            [scarf.templates.halved.triangle :as halved-triangle]
            [scarf.templates.quartered.triangle :as quartered-triangle]
            [scarf.templates.twolegs.triangle :as twolegs-triangle]
            [scarf.templates.foursquare.flat :as foursquare-flat]
            [scarf.templates.utils :as utils]))

(defn id->component [id]
  (get {5000 simple-triangle/OhneDekor
        5001 simple-triangle/Borte
        5002 simple-triangle/Rand
        5003 simple-triangle/Rand
        5004 twice-triangle/Rand
        5005 twice-triangle/Rand
        5006 twice-triangle/Borte
        5007 crossed-triangle/EinfacheBorte
        5008 crossed-triangle/DoppelteBorte
        5009 halved-triangle/OhneDekor
        5010 halved-triangle/Borte
        5011 halved-triangle/Rand
        5012 halved-triangle/Rand
        5013 quartered-triangle/OhneDekor
        5014 quartered-triangle/Borte
        5015 quartered-triangle/Rand
        5016 twolegs-triangle/Borte
        5017 twolegs-triangle/Rand
        5018 twolegs-triangle/Rand} id))

(defn id->query [id]
  (set (om/get-query (id->component id))))

(defn id->scarf-factory [id]
  (om/factory (id->component id)))

(defn- build-article-no
  "When there are two options for the scarf, show both numbers in the view."
  [id]
  (let [second-id (utils/stripe-dispatch id)]
    (if second-id
      (str id " / " second-id)
      id)))

(defui ScarfCard
  static om/IQuery
  (query [this]
         [:scarf/current])
  Object
  (render [this]
          (let [{:keys [scarf id title subtitle scarf/current]} (om/props this)]
            (html
             [:div {:className (str "card hover pointer text-center"
                                    (when (= id current) " card-outline-highlight"))
                    :onClick #(utils/switch-chosen-one this id)}
              [:div.card-img-top {:style {:padding "1rem"}}
               (scarf (merge (om/props this) {:thumbnail? true}))]
              [:div.card-body
               [:h5.card-title
                [:div title [:br] [:small subtitle]]]
               [:p.card-text
                [:small.text-muted
                 (str "Artikelnummer: " (build-article-no id))]]]]))))
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


;; Zweifarbige Schenkel
(defui ZweifarbigeSchenkel
  Object
  (render [this]
          (dom/div #js {:className "row"}
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf twolegs-triangle/borte
                                                :id 5016
                                                :title "Mit zweifarbiger Borte"})))
                   (dom/div #js {:className "col"}
                            (scarf-card (merge (om/props this)
                                               {:scarf twolegs-triangle/randstreifen
                                                :id 5017
                                                :title "Mit zweifarbigem Rand"
                                                :subtitle "umgeschlagen oder aufgesetzt"}))))))
(def zweifarbige-schenkel (om/factory ZweifarbigeSchenkel))


;; Zweifarbige Mitte
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
                                                :title "Mit einfachem Rand"
                                                :subtitle "umgeschlagen"}))))))
(def geviertelt (om/factory Viertel))


;; Viereckig
(defui Viereckig
  Object
  (render
   [this]
   (html [:div
          [:hr]
          [:h4 "Vorschau: Viereckige Halstücher"]
          [:div.row {:style {:paddingBottom "1em"}}
           [:div.col
            (scarf-card (merge (om/props this)
                               {:scarf foursquare-flat/ohne-dekor
                                :id 6000
                                :title "Ohne Rand und Borte"}))]
           [:div.col
            (scarf-card (merge (om/props this)
                               {:scarf foursquare-flat/borte
                                :id 6001
                                :title "Mit einfacher Borte"}))]
           [:div.col
            (scarf-card (merge (om/props this)
                               {:scarf foursquare-flat/randstreifen
                                :id 6002
                                :title "Mit einfachem Rand"
                                :subtitle "umgeschlagen oder aufgesetzt"}))]]
          [:div.row
           [:div.col
            (scarf-card (merge (om/props this)
                               {:scarf foursquare-flat/doppelrand
                                :id 6004
                                :title "Mit doppeltem Rand"
                                :subtitle "umgeschlagen oder aufgesetzt"}))]
           [:div.col
            (scarf-card (merge (om/props this)
                               {:scarf foursquare-flat/doppelborte
                                :id 6006
                                :title "Mit doppelter Borte"}))]
           [:div.col]]])))
(def viereckig-flach (om/factory Viereckig))
