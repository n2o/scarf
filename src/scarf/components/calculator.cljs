(ns scarf.components.calculator
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.scarfs :as scarfs]
            [scarf.components.options :as options]
            [scarf.templates.utils :as utils]))

(defn- order-no [current color1 color2 stripe1 stripe2]
  (str current))

(defui Calculator
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :scarf/stripe2 :scarf/current
          :option/size-a :option/size-b :option/size-c])
  Object
  (render [this]
          (let [{:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/stripe2
                        option/size-a option/size-b option/size-c
                        scarf/current]} (om/props this)
                query (scarfs/id->query current)]
            (dom/div nil
                     (let [table-style #js {:className "table table-striped table-condensed"}]
                       (dom/div #js {:className "row"}
                                (dom/div #js {:className "col-6"}
                                         (dom/table table-style
                                                    (dom/thead nil
                                                               (dom/tr nil
                                                                       (dom/th nil "Option")
                                                                       (dom/th nil "Farbe")
                                                                       (dom/th nil "Farbcode")))
                                                    (dom/tbody nil
                                                               (when (contains? query :scarf/mid1)
                                                                 (dom/tr nil
                                                                         (dom/td nil "Mitte 1")
                                                                         (dom/td nil (:name mid1))
                                                                         (dom/td nil (:id mid1))))
                                                               (when (contains? query :scarf/mid2)
                                                                 (dom/tr nil
                                                                         (dom/td nil "Mitte 2")
                                                                         (dom/td nil (:name mid2))
                                                                         (dom/td nil (:id mid2))))
                                                               (when (contains? query :scarf/stripe1)
                                                                 (dom/tr nil
                                                                         (dom/td nil "Borte / Rand 1")
                                                                         (dom/td nil (:name stripe1))
                                                                         (dom/td nil (:id stripe1))))
                                                               (when (contains? query :scarf/stripe2)
                                                                 (dom/tr nil
                                                                         (dom/td nil "Borte / Rand 2")
                                                                         (dom/td nil (:name stripe2))
                                                                         (dom/td nil (:id stripe2))))))
                                         (when (utils/stripe-dispatch current)
                                           (options/stripe-options (om/props this))))
                                (dom/div #js {:className "col-6"}
                                         (dom/table table-style
                                                    (dom/thead nil
                                                               (dom/tr nil
                                                                       (dom/th nil "Eigenschaft")
                                                                       (dom/th nil "Wert")))
                                                    (dom/tbody nil
                                                               (dom/tr nil
                                                                       (dom/td nil (dom/span nil "Artikelnummer"))
                                                                       (dom/td nil (order-no current mid1 mid2 stripe1 stripe2)))
                                                               (dom/tr nil
                                                                       (dom/td nil (dom/span nil "Breite"))
                                                                       (dom/td nil
                                                                               (if (not= "" size-a) (str "ca. " size-a " cm") "nicht festgelegt")))
                                                               (dom/tr nil
                                                                       (dom/td nil (dom/span nil "Breite"))
                                                                       (dom/td nil
                                                                               (if (not= "" size-b) (str "ca. " size-b " cm") "nicht festgelegt")))
                                                               (dom/tr nil
                                                                       (dom/td nil (dom/span nil "Höhe"))
                                                                       (dom/td nil
                                                                               (if (not= "" size-c) (str "ca. " size-c " cm") "nicht festgelegt"))))))))))))
(def view (om/factory Calculator))
