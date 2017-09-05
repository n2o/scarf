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
                                     (dom/div #js {:className "input-group-addon"} "cm"))))))
(def sizes (om/factory Sizes))

(defui StripeOptions
  static om/IQuery
  (query [this]
         [:option/stripe :scarf/current])
  Object
  (render [this]
          (let [{:keys [option/stripe scarf/current]} (om/props this)]
            (when (utils/stripe-dispatch current)
              (dom/div nil
                       (dom/div #js {:className "form-group"}
                                (dom/label nil "Rand umgeschlagen oder aufgesetzt?")
                                (dom/select #js {:className "form-control"
                                                 :onChange #(om/transact! this `[(option/stripe {:option ~(.. % -target -value)})])}
                                            (dom/option #js {:value ""
                                                             :defaultValue (nil? stripe)} "--- Option wählen ---")
                                            (dom/option #js {:value "umgeschlagen"
                                                             :defaultValue (= :umgeschlagen stripe)} "umgeschlagen")
                                            (dom/option #js {:value "aufgesetzt"
                                                             :defaultValue (= :aufgesetzt stripe)} "aufgesetzt")))
                       (when (= "" stripe)
                         (dom/p #js {:className "text-info"}
                                "Bitte auswählen, ob der Rand umgeschlagen oder aufgesetzt sein soll!")))))))
(def stripe-options (om/factory StripeOptions))

(defui Options
  static om/IQuery
  (query [this]
         [:option/stripe])
  Object
  (render [this]
          (dom/div nil
                   (utils/red-heading "Abmessungen")
                   (dom/p #js {:className "text-center"}
                          "Hier findest du die Standardabmessungen unserer
                   Halstücher. Diese können produktionsbedingt ein wenig
                   schwanken. Es ist auch möglich dein Halstuch in einer
                   Sondergröße zu bestellen -- kontaktiere uns einfach und wir
                   schicken dir ein Angebot zu!")
                   (dom/br nil)
                   (dom/div #js {:className "text-center"}
                            (let [line #js {:stroke "rgb(100,100,100)"
                                            :strokeWidth "1px"}]
                              (dom/div #js {:className "svg-container"
                                            :style #js {:maxWidth "600px"
                                                        :paddingBottom "350px"}}
                                       (dom/svg #js {:viewBox "0 0 400 320"
                                                     :preserveAspectRatio "xMinYMin meet"
                                                     :className "svg-content"}
                                                (dom/g #js {:transform (str "scale(1.2)")}
                                                       (dom/polygon #js {:fill "#e9ecef"
                                                                         :points "0,25 300,25 150,175"})
                                                       (dom/line #js {:x1 1 :y1 10 ;; horizontal line left
                                                                      :x2 100 :y2 10
                                                                      :style line})
                                                       (dom/line #js {:x1 200 :y1 10 ;; horizontal line right
                                                                      :x2 300 :y2 10
                                                                      :style line})
                                                       (dom/line #js {:x1 1 :y1 10 ;; vertical line left
                                                                      :x2 1 :y2 20
                                                                      :style line})
                                                       (dom/line #js {:x1 300 :y1 10 ;; vertical line right
                                                                      :x2 300 :y2 20
                                                                      :style line})

                                                       (dom/line #js {:x1 305 :y1 28 ;; top right
                                                                      :x2 314 :y2 37
                                                                      :style line})
                                                       (dom/line #js {:x1 314 :y1 37 ;; long top right
                                                                      :x2 269 :y2 84
                                                                      :style line})
                                                       (dom/line #js {:x1 154 :y1 179 ;; line bottom
                                                                      :x2 164 :y2 189
                                                                      :style line})
                                                       (dom/line #js {:x1 164 :y1 189 ;; long right v line bottom
                                                                      :x2 209 :y2 144
                                                                      :style line})

                                                       (dom/line #js {:x1 150 :y1 25 ;; long right v line bottom
                                                                      :x2 150 :y2 175
                                                                      :style line
                                                                      :strokeDasharray "5, 5"})
                                                       (dom/text #js {:x 115 :y 15 :fill "#212529"} "ca. 112 cm")
                                                       (dom/text #js {:fill "#212529" :transform "translate(219,139)rotate(-45)"}
                                                                 "ca. 80 cm")
                                                       (dom/text #js {:fill "#212529" :transform "translate(147,115)rotate(-90)" :fontSize "12"}
                                                                 "ca. 57 cm")))))))))
(def options (om/factory Options))
