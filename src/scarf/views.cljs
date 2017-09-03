(ns scarf.views
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.components.calculator :as calc]
            [scarf.components.colors :as colors]
            [scarf.components.nav :as nav]
            [scarf.components.options :as options]
            [scarf.templates.simple.rolled :as simple-rolled]
            [scarf.templates.twice.rolled :as twice-rolled]
            [scarf.templates.crossed.rolled :as crossed-rolled]
            [scarf.templates.halved.rolled :as halved-rolled]
            [scarf.templates.quartered.rolled :as quartered-rolled]
            [scarf.templates.twolegs.rolled :as twolegs-rolled]
            [scarf.templates.utils :as utils]))

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
            (dom/div #js {:className "smooth text-center"}
                     (when-not selected
                       (dom/p nil "Bitte wähle zunächst eine Farbe aus"))))))
(def selection (om/factory Selection))

(defui Main
  Object
  (render [this]
          (dom/div nil
                   (nav/products (om/props this))
                   (dom/hr nil)
                   (selection (om/props this))
                   (dom/div #js {:className "text-center"
                                 :style #js {:padding "3rem 0"}}
                            (dispatch-current-scarf this))
                   (dom/div #js {:className "text-center"}
                            (colors/colors (om/props this)))
                   (options/options (om/props this))
                   (utils/red-heading "Übersicht und Artikelnummer")
                   (calc/view (om/props this)))))
