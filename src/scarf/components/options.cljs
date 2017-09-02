(ns scarf.components.options
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.views.lib :as vlib]))

(defui StripeOptions
  static om/IQuery
  (query [this]
         [:option/stripe])
  Object
  (render [this]
          (let [{:keys [option/stripe]} (om/props this)]
            (dom/div #js {:className "form-group"}
                     (dom/label #js {:htmlFor "option-stripe"} "Rand umgeschlagen oder aufgesetzt?")
                     (dom/select #js {:className "form-control"
                                      :onChange #(om/transact! this `[(option/stripe {:option ~(.. % -target -value)})])}
                                 (dom/option #js {:value "umgeschlagen"
                                                  :defaultValue (= :umgeschlagen stripe)} "umgeschlagen")
                                 (dom/option #js {:value "aufgesetzt"
                                                  :defaultValue (= :aufgesetzt stripe)} "aufgesetzt"))))))
(def stripe-options (om/factory StripeOptions))

(defui Options
  static om/IQuery
  (query [this]
         [:option/stripe])
  Object
  (render [this]
          (dom/div nil
                   (vlib/red-heading "Optionen")
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col-6"}
                                     "Irgendwas mit Dreiecken")
                            (dom/div #js {:className "col-6"}
                                     (dom/form nil
                                               (stripe-options (om/props this))))))))
(def options (om/factory Options))
