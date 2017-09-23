(ns scarf.components.order
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [scarf.templates.utils :as utils]))

(def urls
  {5000 "http://ausruester-eschwege.de/Pfadfinderbuende-und-Ringe/Ring-Ev-Gemeindepfadfinder-REGP/Halstuecher-REGP/Halstuch-A-einfarbig::32023.html"})

(defn- destructure-color [color]
  (str (:name color) ", " (:id color)))

(defn- add-article-header
  ([current description]
   [:span [:p "Artikelnummer: " current] [:p "Beschreibung: " description]])
  ([current description stripe-option]
   (let [ncurrent (utils/stripe-dispatch-with-option current stripe-option)]
     (add-article-header ncurrent description))))

(defn- build-stripe-option [stripe-option]
  (case stripe-option
    :umgeschlagen [:p "Rand wird " [:strong "umgeschlagen"]]
    :aufgesetzt [:p "Rand wird " [:strong "aufgesetzt"]]
    :default [:p "Bitte oben den Randtyp auswählen!"]))

(defmulti order-template (fn [current _] current))
(defmethod order-template 5000 [current {:keys [mid1]}]
  [:span
   (add-article-header current "Ohne Rand und ohne Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]])

(defmethod order-template 5001 [current {:keys [mid1 stripe1]}]
  [:span
   (add-article-header current "Mit einfacher Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe Borte: " (destructure-color stripe1)]])

(defmethod order-template 5002 [current {:keys [mid1 stripe1 stripe-option] :as props}]
  [:span
   (add-article-header current "Mit einfachem Rand" stripe-option)
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe Randstreifen: " (destructure-color stripe1)]
   (build-stripe-option stripe-option)])

(defmethod order-template 5003 [_ props]
  (order-template 5002 props))

(defmethod order-template 5004 [current {:keys [mid1 stripe1 stripe2 stripe-option]}]
  [:span
   (add-article-header current "Mit doppeltem Rand" stripe-option)
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe innerer Randstreifen: " (destructure-color stripe1)]
   [:p "Farbe äußerer Randstreifen: " (destructure-color stripe2)]
   (build-stripe-option stripe-option)])

(defmethod order-template 5005 [_ props]
  (order-template 5004 props))

(defmethod order-template 5006 [current {:keys [mid1 stripe1 stripe2]}]
  [:span
   (add-article-header current "Mit doppelter Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe innere Borte: " (destructure-color stripe1)]
   [:p "Farbe äußere Borte: " (destructure-color stripe2)]])

(defmethod order-template 5007 [current {:keys [mid1 stripe1]}]
  [:span
   (add-article-header current "Mit gekreuzter Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe gekreuzte Borte: " (destructure-color stripe1)]])

(defmethod order-template 5008 [current {:keys [mid1 stripe1 stripe2]}]
  [:span
   (add-article-header current "Mit gekreuzter Doppelborte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe innere Borte: " (destructure-color stripe1)]
   [:p "Farbe äußere Borte: " (destructure-color stripe2)]])

(defmethod order-template 5009 [current {:keys [mid1 mid2]}]
  [:span
   (add-article-header current "Zweifarbig, vertikal geteilt, 1/2 zu 1/2, ohne Rand und Borte")
   [:p "Farbe linke Hälfte: " (destructure-color mid1)]
   [:p "Farbe rechte Hälfte: " (destructure-color mid2)]])

(defmethod order-template 5010 [current {:keys [mid1 mid2 stripe1]}]
  [:span
   (add-article-header current "Zweifarbig, vertikal geteilt, 1/2 zu 1/2, mit einfacher Borte")
   [:p "Farbe linke Hälfte: " (destructure-color mid1)]
   [:p "Farbe rechte Hälfte: " (destructure-color mid2)]
   [:p "Farbe Borte: " (destructure-color stripe1)]])

(defmethod order-template 5011 [current {:keys [mid1 mid2 stripe1 stripe-option]}]
  [:span
   (add-article-header current "Zweifarbig, vertikal geteilt, 1/2 zu 1/2, mit einfachem Rand" stripe-option)
   [:p "Farbe linke Hälfte: " (destructure-color mid1)]
   [:p "Farbe rechte Hälfte: " (destructure-color mid2)]
   [:p "Farbe Rand: " (destructure-color stripe1)]
   (build-stripe-option stripe-option)])

(defmethod order-template 5012 [_ props]
  (order-template 5011 props))

(defmethod order-template 5013 [current {:keys [mid1 mid2]}]
  [:span
   (add-article-header current "Zweifarbig, horizontal geteilt, 3/4 zu 1/4, ohne Rand und Borte")
   [:p "Farbe obere dreiviertel Fläche: " (destructure-color mid1)]
   [:p "Farbe untere viertel Fläche: " (destructure-color mid2)]])

(defmethod order-template 5014 [current {:keys [mid1 mid2 stripe1]}]
  [:span
   (add-article-header current "Zweifarbig, horizontal geteilt, 3/4 zu 1/4, mit einfacher Borte")
   [:p "Farbe obere dreiviertel Fläche: " (destructure-color mid1)]
   [:p "Farbe untere viertel Fläche: " (destructure-color mid2)]
   [:p "Farbe Borte: " (destructure-color stripe1)]])

(defmethod order-template 5015 [current {:keys [mid1 mid2 stripe1]}]
  [:span
   (add-article-header current "Zweifarbig, horizontal geteilt, 3/4 zu 1/4, mit einfachem Rand")
   [:p "Farbe obere dreiviertel Fläche: " (destructure-color mid1)]
   [:p "Farbe untere viertel Fläche: " (destructure-color mid2)]
   [:p "Farbe Rand: " (destructure-color stripe1)]
   (build-stripe-option :umgeschlagen)])

(defmethod order-template 5016 [current {:keys [mid1 stripe1 stripe2]}]
  [:span
   (add-article-header current "Mit zweifarbiger Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe linke Borte: " (destructure-color stripe1)]
   [:p "Farbe rechte Borte: " (destructure-color stripe2)]])

(defmethod order-template 5017 [current {:keys [mid1 stripe1 stripe2 stripe-option]}]
  [:span
   (add-article-header current "Mit zweifarbigem Rand")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe linker Randstreifen: " (destructure-color stripe1)]
   [:p "Farbe rechter Randstreifen: " (destructure-color stripe2)]
   (build-stripe-option stripe-option)])

(defmethod order-template 5018 [_ props]
  (order-template 5017 props))

(defmethod order-template :default [_ {:keys [mid1 stripe1]}]
  [:p "Bei der Generierung der Artikelbeschreibung ist ein Fehler aufgetreten.
  Bitte kontaktiere uns und berichte von dem Problem."])


;; -----------------------------------------------------------------------------

(defui OrderNo
  static om/IQuery
  (query [this] [:scarf/current :scarf/mid1 :scarf/mid2
                 :scarf/stripe1 :scarf/stripe2
                 :option/stripe])
  Object
  (render [this]
          (let [{:keys [scarf/current scarf/mid1 scarf/mid2
                        scarf/stripe1 scarf/stripe2
                        option/stripe]} (om/props this)]
            (html [:div.card
                   [:div.card-body
                    [:div.card-text
                     [:div.row
                      [:div.col-6
                       [:div.card.bg-light
                        [:div.card-body
                         [:div.card-text
                          (if (and (utils/stripe-dispatch current)
                                   (zero? (count (name stripe))))
                            [:p "Bitte oben den Randtyp auswählen!"]
                            (order-template (utils/stripe-dispatch-with-option current stripe)
                                            {:mid1 mid1 :mid2 mid2
                                             :stripe1 stripe1 :stripe2 stripe2
                                             :stripe-option stripe}))]]
                        [:a {:class "btn btn-sm btn-primary"}
                         "Artikel kopieren"]]]
                      [:div.col-6
                       ""]]]]]))))
(def order-no (om/factory OrderNo))

(defui Order
  static om/IQuery
  (query [this] [:scarf/current :scarf/stripe1 :scarf/stripe2
                 :scarf/mid1 :scarf/mid2])
  Object
  (render [this]
          (let [{:keys [scarf/current scarf/mid1 scarf/mid2
                        scarf/stripe1 scarf/stripe2]} (om/props this)]
            (html [:div
                   [:p "Hier bekommst du eine Beschreibung deines konfigurierten
                   Halstuchs. Kopiere die Beschreibung bitte in deine
                   Zwischenablage, indem du auf den entsprechenden Button unten
                   klickst. Anschließend kommst du über einen Link zu dem
                   Artikel in unserem Shop, den du personalisieren möchtest.
                   Füge diesen Artikel in deinen Warenkorb hinzu und die
                   kopierte Beschreibung in die Anmerkungen zu deiner Bestellung
                   ein. Schließe den Bestellvorgang ab und erhalte von uns"]

                   (order-no (om/props this))

                   [:ol
                    [:li "ausruester-eschwege.de aufrufen und einloggen"]
                    [:li "Artikel auswählen und in den Warenkorb hinzufügen"]
                    [:li "Zur Kasse gehen"]
                    [:li "Bei \"2. Bezahlart wählen\" im Anmerkungsfeld folgendes einfügen:"]
                    [:li "Bestellung überprüfen und abschicken"]]]))))
(def order (om/factory Order))
