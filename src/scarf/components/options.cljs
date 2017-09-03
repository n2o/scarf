(ns scarf.components.options
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]))

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
                                                       :placeholder "Angaben in cm"
                                                       :onInput #(om/transact! this `[(option/size {:dimension :option/size-a :value ~(utils/convert-number (.. % -target -value))})])})
                                       (dom/div #js {:className "input-group-addon"} "cm")))
                     (dom/div #js {:className "form-group"}
                              (dom/label nil (dom/span nil "Höhe " (dom/strong nil "B")))
                              (dom/div #js {:className "input-group"}
                                       (dom/input #js {:type "text"
                                                       :className "form-control"
                                                       :placeholder "Angaben in cm"
                                                       :onInput #(om/transact! this `[(option/size {:dimension :option/size-b :value ~(utils/convert-number (.. % -target -value))})])})
                                       (dom/div #js {:className "input-group-addon"} "cm")))))))
(def sizes (om/factory Sizes))

(defui StripeOptions
  static om/IQuery
  (query [this]
         [:option/stripe :scarf/current])
  Object
  (render [this]
          (let [{:keys [option/stripe scarf/current]} (om/props this)]
            (when (utils/stripe-dispatch current)
              (dom/div #js {:className "form-group"}
                       (dom/label nil "Rand umgeschlagen oder aufgesetzt?")
                       (dom/select #js {:className "form-control"
                                        :onChange #(om/transact! this `[(option/stripe {:option ~(.. % -target -value)})])}
                                   (dom/option #js {:value "umgeschlagen"
                                                    :defaultValue (= :umgeschlagen stripe)} "umgeschlagen")
                                   (dom/option #js {:value "aufgesetzt"
                                                    :defaultValue (= :aufgesetzt stripe)} "aufgesetzt")))))))
(def stripe-options (om/factory StripeOptions))

(defui Options
  static om/IQuery
  (query [this]
         [:option/stripe])
  Object
  (render [this]
          (dom/div nil
                   (utils/red-heading "Optionen")
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col-md-6 col-12"}
                                     (let [line #js {:stroke "rgb(100,100,100)"
                                                     :strokeWidth "1px"}]
                                       (dom/div #js {:className "svg-container"
                                                     :style #js {:paddingBottom "250px"}}
                                                (dom/svg #js {:viewBox "0 0 400 220"
                                                              :preserveAspectRatio "xMinYMin meet"
                                                              :className "svg-content"}
                                                         (dom/g #js {:transform (str "scale(1.2)")}
                                                                (dom/polygon #js {:fill "#e9ecef"
                                                                                  :points "0,25 300,25 150,175"})
                                                                (dom/line #js {:x1 1 :y1 10 ;; horizontal line left
                                                                               :x2 140 :y2 10
                                                                               :style line})
                                                                (dom/line #js {:x1 160 :y1 10 ;; horizontal line right
                                                                               :x2 300 :y2 10
                                                                               :style line})
                                                                (dom/line #js {:x1 1 :y1 10 ;; vertical line left
                                                                               :x2 1 :y2 20
                                                                               :style line})
                                                                (dom/line #js {:x1 300 :y1 10 ;; vertical line right
                                                                               :x2 300 :y2 20
                                                                               :style line})
                                                                (dom/line #js {:x1 305 :y1 25 ;; small horizontal line right
                                                                               :x2 315 :y2 25
                                                                               :style line})
                                                                (dom/line #js {:x1 155 :y1 175 ;; line bottom
                                                                               :x2 315 :y2 175
                                                                               :style line})
                                                                (dom/line #js {:x1 315 :y1 25 ;; long right v line top
                                                                               :x2 315 :y2 90
                                                                               :style line})
                                                                (dom/line #js {:x1 315 :y1 110 ;; long right v line bottom
                                                                               :x2 315 :y2 175
                                                                               :style line})
                                                                (dom/text #js {:x 145 :y 15 :fill "#212529"} "A")
                                                                (dom/text #js {:x 310 :y 105 :fill "#212529"} "B"))))))
                            (dom/div #js {:className "col-md-6 col-12"}
                                     (dom/form nil
                                               (sizes (om/props this))
                                               (stripe-options (om/props this))))))))
(def options (om/factory Options))
