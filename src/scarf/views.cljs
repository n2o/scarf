(ns scarf.views
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [scarf.components.calculator :as calc]
            [scarf.components.colors :as colors]
            [scarf.components.nav :as nav]
            [scarf.components.options :as options]
            [scarf.components.order :as order]
            [scarf.templates.simple.rolled :as simple-rolled]
            [scarf.templates.twice.rolled :as twice-rolled]
            [scarf.templates.crossed.rolled :as crossed-rolled]
            [scarf.templates.halved.rolled :as halved-rolled]
            [scarf.templates.quartered.rolled :as quartered-rolled]
            [scarf.templates.twolegs.rolled :as twolegs-rolled]
            [scarf.templates.foursquare.flat :as foursquare-flat]
            [scarf.templates.utils :as utils]
            [scarf.templates.scarfs :as scarfs]))

(defn dispatch-current-scarf [this]
  (let [{:keys [scarf/current]} (om/props this)]
    (case current
      5000 (simple-rolled/ohne-dekor (om/props this))
      5001 (simple-rolled/borte (om/props this))
      5002 (simple-rolled/randstreifen (om/props this))
      5004 (twice-rolled/randstreifen (om/props this))
      5006 (twice-rolled/borte (om/props this))
      5007 (crossed-rolled/einfache-borte (om/props this))
      5008 (crossed-rolled/doppelte-borte (om/props this))
      5009 (halved-rolled/ohne-dekor (om/props this))
      5010 (halved-rolled/borte (om/props this))
      5011 (halved-rolled/randstreifen (om/props this))
      5013 (quartered-rolled/ohne-dekor (om/props this))
      5014 (quartered-rolled/borte (om/props this))
      5015 (quartered-rolled/randstreifen (om/props this))
      5016 (twolegs-rolled/borte (om/props this))
      5017 (twolegs-rolled/randstreifen (om/props this))
      nil)))

;; -----------------------------------------------------------------------------

(defui Selection
  static om/IQuery
  (query [this]
         [:color/selected])
  Object
  (render [this]
          (let [{:keys [color/selected]} (om/props this)]
            (html [:div.smooth.text-center
                   (when-not selected
                     [:p "Bitte wähle zunächst eine Farbe aus"])]))))
(def selection (om/factory Selection))

(defui Main
  Object
  (render [this]
          (html [:div
                 (nav/products (om/props this))
                 [:hr]
                 (selection (om/props this))
                 [:div {:class "text-center"
                        :style {:padding "3 rem 0"}}
                  (dispatch-current-scarf this)]
                 [:div.text-center
                  (colors/colors (om/props this))]
                 (options/options (om/props this))
                 (utils/red-heading "Übersicht")
                 (calc/view (om/props this))
                 (utils/red-heading "Bestellung vorbereiten")
                 (order/order (om/props this))
                 (scarfs/viereckig-flach (om/props this))])))
