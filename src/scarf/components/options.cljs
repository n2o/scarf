(ns scarf.components.options
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.views.lib :as vlib]))

(defui Sizes
  static om/IQuery
  (query [this]
         [:option/size-a :option/size-b])
  Object
  (render [this]
          (let [{:keys [option/size-a option/size-b]} (om/props this)]
            (dom/div nil
                     (dom/div #js {:className "form-group"}
                              (dom/label nil (dom/span nil "Breite " (dom/strong nil "A")))
                              (dom/div #js {:className "input-group"}
                                       (dom/input #js {:type "text"
                                                       :className "form-control"
                                                       :placeholder "Angaben in cm"})
                                       (dom/div #js {:className "input-group-addon"} "cm"))
                              )
                     (dom/div #js {:className "form-group"}
                              (dom/label nil (dom/span nil "Höhe " (dom/strong nil "B")))
                              (dom/div #js {:className "input-group"}
                                       (dom/input #js {:type "text"
                                                       :className "form-control"
                                                       :placeholder "Angaben in cm"})
                                       (dom/div #js {:className "input-group-addon"} "cm"))
                              )))))
(def sizes (om/factory Sizes))

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
                            (dom/div #js {:className "col-6 text-center"}
                                     (let [line #js {:stroke "rgb(100,100,100)"
                                                     :strokeWidth "1px"}]
                                       (dom/svg #js {:height 400
                                                     :width 400}
                                                (dom/g #js {:transform (str "scale(1)")}
                                                       (dom/polygon #js {:fill "green"
                                                                         :points "0,20 300,20 150,170"})
                                                       (dom/line #js {:x1 1 :y1 5 ;; horizontal line left
                                                                      :x2 140 :y2 5
                                                                      :style line})
                                                       (dom/line #js {:x1 160 :y1 5 ;; horizontal line right
                                                                      :x2 300 :y2 5
                                                                      :style line})
                                                       (dom/line #js {:x1 1 :y1 5 ;; vertical line left
                                                                      :x2 1 :y2 15
                                                                      :style line})
                                                       (dom/line #js {:x1 300 :y1 5 ;; vertical line right
                                                                      :x2 300 :y2 15
                                                                      :style line})
                                                       (dom/line #js {:x1 305 :y1 20 ;; small horizontal line right
                                                                      :x2 315 :y2 20
                                                                      :style line})
                                                       (dom/line #js {:x1 155 :y1 170 ;; line bottom
                                                                      :x2 315 :y2 170
                                                                      :style line})
                                                       (dom/line #js {:x1 315 :y1 20 ;; long right v line
                                                                      :x2 315 :y2 170
                                                                      :style line})

                                                       ))))
                            (dom/div #js {:className "col-6"}
                                     (dom/form nil
                                               (stripe-options (om/props this))
                                               (sizes (om/props this))))))))
(def options (om/factory Options))
