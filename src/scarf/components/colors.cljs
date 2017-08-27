(ns scarf.components.colors
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui ColorBlock
  static om/IQuery
  (query [this]
         [:id :rgb :name :price])
  static om/Ident
  (ident [this {:keys [id]}]
         [:color/by-id id])
  Object
  (render [this]
          (let [{:keys [rgb name price id selected] :as color-complete} (om/props this)
                color (dissoc color-complete :selected)]
            (dom/div #js {:className (str "color-block-wrapper" (when (= id (:id selected)) " block-active"))
                          :onClick #(om/transact! this `[(color/selected ~color)])
                          :style #js {:backgroundColor rgb}}
                     (dom/div #js {:className "color-block"})
                     (dom/span #js {:className "tooltiptext"}
                               (dom/span nil name) (dom/br nil) (dom/span nil id))))))
(def color-block (om/factory ColorBlock {:keyfn :id}))

(defui Colors
  static om/IQuery
  (query [this]
         `[{:color/items ~(om/get-query ColorBlock)}
           :color/selected :scarf/current :nav/category])
  Object
  (render [this]
          (let [{:keys [color/items color/selected scarf/current nav/category]} (om/props this)]
            (dom/div nil
                     (when (and current category)
                       (map #(color-block (merge % {:selected selected})) items))))))
(def colors (om/factory Colors))
