(ns scarf.components.calculator
  (:require [goog.string :as gstring]
            [clojure.string :refer [lower-case]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.lib :as lib]))

(take 3 "fooooo")

(defn- order-no [color1 color2 current]
  (str "ht-s" current "_" (subs (lower-case (:name color1)) 0 5) "-" (subs (lower-case (:name color2)) 0 5)))

(defui Calculator
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :scarf/stripe2 :scarf/stripe3 :scarf/current])
  Object
  (render [this]
          (let [{:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/stripe2 scarf/stripe3
                        scarf/current]} (om/props this)]
            #_(dom/div nil
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
                                                                     (dom/td nil (lib/num->currency (+ (:price color1) (:price color2)))))
                                                             (dom/tr nil
                                                                     (dom/td nil (dom/i #js {:className "fa fa-barcode"}))
                                                                     (dom/td nil "Bestellnummer:")
                                                                     (dom/td nil (order-no color1 color2 current)))))))))))
(def view (om/factory Calculator))
