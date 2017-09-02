(ns scarf.components.options
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.scarfs :as scarfs]))

(defui Options
  static om/IQuery
  (query [this]
         [:option/stripe])
  Object
  (render [this]
          (let [{:keys [option/stripe]} (om/props this)]
            (dom/form nil
                      (dom/div #js {:className "form-group"}
                                 (dom/label #js {:htmlFor "option-stripe"} "Rand umgeschlagen oder aufgesetzt?")
                                 (dom/select #js {:className "form-control"
                                                  :onChange #(om/transact! this `[(option/stripe {:option ~(.. % -target -value)})])}
                                             (dom/option #js {:value :umgeschlagen} "umgeschlagen")
                                             (dom/option #js {:value :aufgesetzt} "aufgesetzt")))))))
(def options (om/factory Options))
