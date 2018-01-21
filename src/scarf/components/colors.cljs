(ns scarf.components.colors
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]))

(defui ColorBlock
  static om/IQuery
  (query [this]
         [:id :rgb :name])
  static om/Ident
  (ident [this {:keys [id]}]
         [:color/by-id id])
  Object
  (render [this]
          (let [{:keys [rgb name id selected] :as color-complete} (om/props this)
                color (dissoc color-complete :selected)]
            (html
             [:div {:class (str "color-block-wrapper" (when (= id (:id selected)) " block-active"))
                    :on-click #(om/transact! this `[(color/selected ~color)])
                    :style {:backgroundColor rgb}}
              [:div.color-block]
              [:span.tooltiptext
               [:span name] [:br] [:span id]]]))))
(def color-block (om/factory ColorBlock {:keyfn :id}))

(defui Colors
  static om/IQuery
  (query [this]
         `[{:color/items ~(om/get-query ColorBlock)}
           :color/selected :scarf/current :nav/category])
  Object
  (render [this]
          (let [{:keys [color/items color/selected scarf/current nav/category]} (om/props this)]
            (html [:div
                   (when (and current category)
                     (map #(color-block (merge % {:selected selected})) items))
                   [:div
                    "Ausgewählte Farbe: " (:name selected) ", " (:id selected)
                    [:span#color-selection-sample (color-block selected)]]]))))
(def colors (om/factory Colors))
