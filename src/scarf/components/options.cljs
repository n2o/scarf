(ns scarf.components.options
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [scarf.templates.utils :as utils]))

(defui Sizes
  Object
  (render [this]
          (html [:div
                 [:div.form-group
                  [:label [:span "Breite " [:strong "A"]]]
                  [:div.input-group
                   [:input {:type "text"
                            :class "form-control"
                            :placeholder "Angaben in cm"
                            :on-input #(om/transact! this `[(option/size {:dimension :option/size-a :value ~(utils/convert-number (.. % -target -value))})])}]
                   [:div.input-group-addon "cm"]]]
                 [:div.form-group
                  [:label [:span "Höhe " [:strong "B"]]]
                  [:div.input-group
                   [:input {:type "text"
                            :class "form-control"
                            :placeholder "Angaben in cm"
                            :on-input #(om/transact! this `[(option/size {:dimension :option/size-b :value ~(utils/convert-number (.. % -target -value))})])}]
                   [:div.input-group-addon "cm"]]]])))
(def sizes (om/factory Sizes))

(defui StripeOptions
  static om/IQuery
  (query [this]
         [:option/stripe :scarf/current])
  Object
  (render [this]
          (let [{:keys [option/stripe scarf/current]} (om/props this)]
            (when (utils/stripe-dispatch current)
              (html [:div
                     [:div.form-group
                      [:label "Rand umgeschlagen oder aufgesetzt?"]
                      [:select {:class "form-control"
                                :onChange #(om/transact! this `[(option/stripe {:option ~(.. % -target -value)})])}
                       [:option {:value ""
                                 :defaultValue (nil? stripe)} "--- Option wählen ---"]
                       [:option {:value "umgeschlagen"
                                 :defaultValue (= :umgeschlagen stripe)} "umgeschlagen"]
                       [:option {:value "aufgesetzt"
                                 :defaultValue (= :aufgesetzt stripe)} "aufgesetzt"]]]
                     (when (zero? (count (name stripe)))
                       [:p.text-info "Bitte auswählen, ob der Rand umgeschlagen oder aufgesetzt sein soll!"])])))))
(def stripe-options (om/factory StripeOptions))

(defn- text-when-selected [stripe option]
  (when (= option stripe)
    [:div.float-right.text-success "Ausgewählt!"]))

(defui BorderOptions
  "Beschreibe die beiden Randoptionen mit Bildern."
  static om/IQuery
  (query [this]
         [:option/stripe :scarf/current])
  Object
  (render [this]
          (let [{:keys [option/stripe scarf/current]} (om/props this)]
            (when (utils/stripe-dispatch current)
              (html [:div
                     (utils/red-heading "Ränder")
                     [:p.text-center
                      "Bei den Rändern gibt es zwei Optionen: sie werden auf die
                      Halstuchgrundfläche oben draufgenäht oder sie werden um
                      den Rand der Halstuchgrundfläche umgeschlagen. Bitte wähle
                      hier die gewünschte Option aus."]
                     [:br]
                     [:div.row
                      [:div.col-md-2]
                      [:div.col-12.col-md-4
                       [:div {:class (str "card hover pointer"
                                          (when (= :umgeschlagen stripe) " card-outline-highlight"))
                              :onClick #(om/transact! this `[(option/stripe {:option :umgeschlagen})])}
                        [:div.card-header "Umgeschlagener Rand" (text-when-selected :umgeschlagen stripe)]
                        [:div.card-body [:img {:src "img/rand_umgeschlagen.jpg"
                                               :class "img-fluid"}]]]]
                      [:div.col-12.col-md-4
                       [:div {:class (str "card hover pointer"
                                          (when (= :aufgesetzt stripe) " card-outline-highlight"))
                              :onClick #(om/transact! this `[(option/stripe {:option :aufgesetzt})])}
                        [:div.card-header "Aufgesetzter Rand" (text-when-selected :aufgesetzt stripe)]
                        [:div.card-body [:img {:src "img/rand_aufgesetzt.jpg"
                                               :class "img-fluid"}]]]]]])))))
(def border-options (om/factory BorderOptions))

(defui Options
  static om/IQuery
  (query [this]
         [:option/stripe])
  Object
  (render [this]
          (html [:div
                 (utils/red-heading "Abmessungen")
                 [:p.text-center
                  "Hier findest du die Standardabmessungen unserer Halstücher.
                   Diese können produktionsbedingt ein wenig schwanken. Es ist
                   auch möglich dein Halstuch in einer Sondergröße zu bestellen
                   -- kontaktiere uns einfach und wir schicken dir ein Angebot
                   zu!"]
                 [:br]
                 [:div.text-center
                  (let [line {:stroke "rgb(100,100,100)"
                              :stroke-width "1px"}]
                    [:div {:class "svg-container"
                           :style {:max-width "600px"
                                   :padding-bottom "350px"}}
                     [:svg {:view-box "0 0 400 320"
                            :preserve-aspect-ratio "xMinYMin meet"
                            :class "svg-content"}
                      [:g {:transform (str "scale(1.2)")}
                       [:polygon {:fill "#e9ecef"
                                  :points "0,25 300,25 150,175"}]
                       [:line {:x1 1 :y1 10 ;; horizontal line left
                               :x2 100 :y2 10
                               :style line}]
                       [:line {:x1 200 :y1 10 ;; horizontal line right
                               :x2 300 :y2 10
                               :style line}]
                       [:line {:x1 1 :y1 10 ;; vertical line left
                               :x2 1 :y2 20
                               :style line}]
                       [:line {:x1 300 :y1 10 ;; vertical line right
                               :x2 300 :y2 20
                               :style line}]

                       [:line {:x1 305 :y1 28 ;; top right
                               :x2 314 :y2 37
                               :style line}]
                       [:line {:x1 314 :y1 37 ;; long top right
                               :x2 269 :y2 84
                               :style line}]
                       [:line {:x1 154 :y1 179 ;; line bottom
                               :x2 164 :y2 189
                               :style line}]
                       [:line {:x1 164 :y1 189 ;; long right v line bottom
                               :x2 209 :y2 144
                               :style line}]

                       [:line {:x1 150 :y1 25 ;; long right v line bottom
                               :x2 150 :y2 175
                               :style line
                               :strokeDasharray "5, 5"}]
                       [:text {:x 115 :y 15 :fill "#212529"} "ca. 112 cm"]
                       [:text {:fill "#212529" :transform "translate(219,139)rotate(-45)"}
                        "ca. 80 cm"]
                       [:text {:fill "#212529" :transform "translate(147,115)rotate(-90)" :fontSize "12"}
                        "ca. 57 cm"]]]])]])))
(def options (om/factory Options))
