(ns scarf.components.calculator
  (:require [goog.string :as gstring]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.extensions]
            [scarf.lib :as lib]))

(defui Calculator
  static om/IQuery
  (query [this]
         [:scarf/color1 :scarf/color2])
  Object
  (render [this]
          (let [{:keys [scarf/color1 scarf/color2]} (om/props this)]
            (dom/div nil
                     (dom/h6 nil "Berechnungen")
                     (dom/p nil
                            (str "Du hast die Farben " (:name color1) " und " (:name color2) " ausgewählt."))
                     (dom/div #js {:className "row"}
                              (dom/div #js {:className "col-md-6"}
                                       (dom/table #js {:className "table table-hover table-striped table-condensed"}
                                                  (dom/thead nil
                                                             (dom/tr nil
                                                                     (dom/th #js {:width "10%"} "#")
                                                                     (dom/th #js {:width "50%"} "Name")
                                                                     (dom/th #js {:width "40%"} "Preis")))
                                                  (dom/tbody nil
                                                             (dom/tr nil
                                                                     (dom/td nil 1)
                                                                     (dom/td nil (:name color1))
                                                                     (dom/td nil (lib/num->currency (:price color1))))
                                                             (dom/tr nil
                                                                     (dom/td nil 2)
                                                                     (dom/td nil (:name color2))
                                                                     (dom/td nil (lib/num->currency (:price color2))))
                                                             (dom/tr #js {:style #js {:borderTop "4px double lightgrey"}}
                                                                     (dom/td nil (gstring/unescapeEntities "&sum;"))
                                                                     (dom/td nil "Summe")
                                                                     (dom/td nil (lib/num->currency (+ (:price color1) (:price color2)))))))))))))
(def view (om/factory Calculator))
