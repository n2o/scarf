(ns scarf.components.order
  (:require [om.next :as om :refer-macros [defui]]
            [sablono.core :as html :refer-macros [html]]
            [scarf.templates.utils :as utils]
            [scarf.templates.scarfs :as scarfs]
            [scarf.lib :as lib]))

(def urls
  {5000 "https://www.ausruester-eschwege.de/Pfadfinderbuende-und-Ringe/Ring-Ev-Gemeindepfadfinder-REGP/Halstuecher-REGP/Halstuch-A-einfarbig::32023.html"
   5001 "https://www.ausruester-eschwege.de/Pfadfinderbuende-und-Ringe/Ring-Ev-Gemeindepfadfinder-REGP/Halstuecher-REGP/Halstuch-B-einfarbig-mit-Borte::32024.html"
   5002 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-C-einfarbig-mit-Rand-umlegt-::32025.html"
   5003 "https://www.ausruester-eschwege.de/Pfadfinderbuende-und-Ringe/Ring-Ev-Gemeindepfadfinder-REGP/Halstuecher-REGP/Halstuch-D-einfarbig-mit-Rand-aufgesetzt-::32026.html"
   5004 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-E-einfarbig-mit-2-Raendern-umlegt-::32027.html"
   5005 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-F-einfarbig-mit-2-Raendern-aufgesetzt::32134.html"
   5006 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-G-einfarbig-mit-2-Borten::40819.html"
   5007 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-H-einfarbig-mit-gekreuzter-Borte::45344.html"
   5008 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-I-einfarbig-mit-2-gekreuzter-Borten::45345.html"
   5009 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-J-zweifarbig-vertikal-geteilt::45346.html"
   5010 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-K-zweifarbig-vertikal-geteilt-mit-Borte::32028.html"
   5011 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-L-zweifarbig-vert-get-mit-Rand-umlegt::32135.html"
   5012 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-M-zweifarbig-vert-get-mit-Rand-aufges::32029.html"
   5013 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-N-horizontal-geteilt-4-5-zu-1-5::32030.html"
   5014 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-O-horizontal-get-4-5-zu-1-5-mit-Borte::32031.html"
   5015 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-P-horiz-get-4-5-zu-1-5-mit-Rand-umschl::32136.html"
   5016 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-Q-einfarbig-mit-zweifarbiger-Borte::45347.html"
   5017 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-R-einfarbig-mit-zweifarbigem-Rand-aufg-::45349.html"
   5018 "https://www.ausruester-eschwege.de/Halstuchnaeherei/Halstuecher-dreieckig/Halstuch-S-einfarbig-mit-zweifarbigem-Rand-uml-::45350.html"})

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
  [:div
   (add-article-header current "Ohne Rand und ohne Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]])

(defmethod order-template 5001 [current {:keys [mid1 stripe1]}]
  [:div
   (add-article-header current "Mit einfacher Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe Borte: " (destructure-color stripe1)]])

(defmethod order-template 5002 [current {:keys [mid1 stripe1 stripe-option]}]
  [:div
   (add-article-header current "Mit einfachem Rand" stripe-option)
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe Randstreifen: " (destructure-color stripe1)]
   (build-stripe-option stripe-option)])

(defmethod order-template 5003 [_ props]
  (order-template 5002 props))

(defmethod order-template 5004 [current {:keys [mid1 stripe1 stripe2 stripe-option]}]
  [:div
   (add-article-header current "Mit doppeltem Rand" stripe-option)
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe innerer Randstreifen: " (destructure-color stripe1)]
   [:p "Farbe äußerer Randstreifen: " (destructure-color stripe2)]
   (build-stripe-option stripe-option)])

(defmethod order-template 5005 [_ props]
  (order-template 5004 props))

(defmethod order-template 5006 [current {:keys [mid1 stripe1 stripe2]}]
  [:div
   (add-article-header current "Mit doppelter Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe innere Borte: " (destructure-color stripe1)]
   [:p "Farbe äußere Borte: " (destructure-color stripe2)]])

(defmethod order-template 5007 [current {:keys [mid1 stripe1]}]
  [:div
   (add-article-header current "Mit gekreuzter Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe gekreuzte Borte: " (destructure-color stripe1)]])

(defmethod order-template 5008 [current {:keys [mid1 stripe1 stripe2]}]
  [:div
   (add-article-header current "Mit gekreuzter Doppelborte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe innere Borte: " (destructure-color stripe1)]
   [:p "Farbe äußere Borte: " (destructure-color stripe2)]])

(defmethod order-template 5009 [current {:keys [mid1 mid2]}]
  [:div
   (add-article-header current "Zweifarbig, vertikal geteilt, 1/2 zu 1/2, ohne Rand und Borte")
   [:p "Farbe linke Hälfte: " (destructure-color mid1)]
   [:p "Farbe rechte Hälfte: " (destructure-color mid2)]])

(defmethod order-template 5010 [current {:keys [mid1 mid2 stripe1]}]
  [:div
   (add-article-header current "Zweifarbig, vertikal geteilt, 1/2 zu 1/2, mit einfacher Borte")
   [:p "Farbe linke Hälfte: " (destructure-color mid1)]
   [:p "Farbe rechte Hälfte: " (destructure-color mid2)]
   [:p "Farbe Borte: " (destructure-color stripe1)]])

(defmethod order-template 5011 [current {:keys [mid1 mid2 stripe1 stripe-option]}]
  [:div
   (add-article-header current "Zweifarbig, vertikal geteilt, 1/2 zu 1/2, mit einfachem Rand" stripe-option)
   [:p "Farbe linke Hälfte: " (destructure-color mid1)]
   [:p "Farbe rechte Hälfte: " (destructure-color mid2)]
   [:p "Farbe Rand: " (destructure-color stripe1)]
   (build-stripe-option stripe-option)])

(defmethod order-template 5012 [_ props]
  (order-template 5011 props))

(defmethod order-template 5013 [current {:keys [mid1 mid2]}]
  [:div
   (add-article-header current "Zweifarbig, horizontal geteilt, 4/5 zu 1/5, ohne Rand und Borte")
   [:p "Farbe obere größere Fläche: " (destructure-color mid1)]
   [:p "Farbe untere kleinere Fläche: " (destructure-color mid2)]])

(defmethod order-template 5014 [current {:keys [mid1 mid2 stripe1]}]
  [:div
   (add-article-header current "Zweifarbig, horizontal geteilt, 4/5 zu 1/5, mit einfacher Borte")
   [:p "Farbe obere größere Fläche: " (destructure-color mid1)]
   [:p "Farbe untere kleinere Fläche: " (destructure-color mid2)]
   [:p "Farbe Borte: " (destructure-color stripe1)]])

(defmethod order-template 5015 [current {:keys [mid1 mid2 stripe1]}]
  [:div
   (add-article-header current "Zweifarbig, horizontal geteilt, 4/5 zu 1/5, mit einfachem Rand")
   [:p "Farbe obere größere Fläche: " (destructure-color mid1)]
   [:p "Farbe untere kleinere Fläche: " (destructure-color mid2)]
   [:p "Farbe Rand: " (destructure-color stripe1)]
   (build-stripe-option :umgeschlagen)])

(defmethod order-template 5016 [current {:keys [mid1 stripe1 stripe2]}]
  [:div
   (add-article-header current "Mit zweifarbiger Borte")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe linke Borte: " (destructure-color stripe1)]
   [:p "Farbe rechte Borte: " (destructure-color stripe2)]])

(defmethod order-template 5017 [current {:keys [mid1 stripe1 stripe2 stripe-option]}]
  [:div
   (add-article-header current "Mit zweifarbigem Rand")
   [:p "Grundfarbe: " (destructure-color mid1)]
   [:p "Farbe linker Randstreifen: " (destructure-color stripe1)]
   [:p "Farbe rechter Randstreifen: " (destructure-color stripe2)]
   (build-stripe-option stripe-option)])

(defmethod order-template 5018 [_ props]
  (order-template 5017 props))

(defmethod order-template :default [_ _]
  [:p "Bei der Generierung der Artikelbeschreibung ist ein Fehler aufgetreten.
  Bitte kontaktiere uns und berichte von dem Problem."])


;; -----------------------------------------------------------------------------

(defui OrderNo
  static om/IQuery
  (query [this] [:scarf/current :scarf/mid1 :scarf/mid2
                 :scarf/stripe1 :scarf/stripe2
                 :option/stripe])
  Object
  (render
   [this]
   (let [{:keys [scarf/current scarf/mid1 scarf/mid2
                 scarf/stripe1 scarf/stripe2
                 option/stripe]} (om/props this)]
     (html [:div.card
            [:div.card-body
             [:div.card-text
              [:div.row
               [:div.col-lg-9.col-md-7.col-sm-12 {:style {:paddingBottom "0.5em"}}
                [:div.card.bg-light#article-description
                 [:div.card-body
                  [:div.card-text#article-no
                   (if (and (utils/stripe-dispatch current)
                            (zero? (count (name stripe))))
                     [:p "Bitte oben den Randtyp auswählen!"]
                     (order-template (utils/stripe-dispatch-with-option current stripe)
                                     {:mid1 mid1 :mid2 mid2
                                      :stripe1 stripe1 :stripe2 stripe2
                                      :stripe-option stripe}))]]]]
               [:div.ml-auto.col-lg-3.col-md-5.col-sm-12
                [:div.card
                 [:div.card-header "Vorschau"]
                 [:div.card-body
                  ((scarfs/id->scarf-factory current)
                   (merge (om/props this) {:thumbnail? true}))]]]]
              [:btn {:class "btn btn-sm btn-primary pointer"
                     :id "copy-to-clipboard"
                     :data-clipboard-target "#article-no"
                     :onClick #(lib/timed-tooltip "#copy-to-clipboard")
                     :style {:margin-top "0.5rem"}}
               "Artikelbeschreibung kopieren"]]]]))))
(def order-no (om/factory OrderNo))

(defui ShopLink
  static om/IQuery
  (query [this] [:scarf/current :option/stripe])
  Object
  (render [this]
          (let [{:keys [scarf/current option/stripe]} (om/props this)]
            (html [:div.card
                   [:div.card-body
                    [:div.card-text
                     [:p "Die Abwicklung des Bestellvorgangs erfolgt über
                      unseren Onlineshop ausruester-eschwege.de. Dort findest du
                      alle Grundartikel, wobei diese Artikel keine Farben
                      definiert haben. Die Definition der Farben hast du aber
                      über diese Seite schon erledigt und musst sie bei der
                      Bestellung später mit angeben."]
                     [:p "Dein Grundartikel hat die Nummer "
                      [:strong (utils/stripe-dispatch-with-option current stripe)]
                      ". Die Artikelnummer des Artikels im Shop muss mit dieser Nummer übereinstimmen."]
                     [:p "Klicke auf diesen Link, um direkt zum Artikel im Shop zu springen:"]
                     [:p
                      [:a {:class "btn btn-sm btn-primary pointer"
                           :href (get urls (utils/stripe-dispatch-with-option current stripe))
                           :target :_blank}
                       "Link zum Artikel"]]]]]))))
(def shop-link (om/factory ShopLink))

(defn- add-article-to-cart []
  (html
   [:div.row
    [:div.col-md-9.col-sm-12 {:style {:paddingBottom "0.5em"}}
     [:div.card
      [:div.card-body
       [:div.card-text
        [:p "Über den Link aus dem vorherigen Schritt kannst du direkt zum
        richtigen Artikel im Shop springen. Füge diesen Artikel zu deinem
        Warenkorb hinzu und stöbere ruhig weiter in unserem Shop."]
        [:p "Beim Abschluss der Bestellung musst du die Artikelbeschreibung aus
        Schritt 1 einfügen."]]]]]
    [:div.ml-auto.col-md-3.col-sm-12
     [:div.card
      [:div.card-header "Beispielartikel"]
      [:div.card-body
       [:a {:href "img/beispielartikel.png"
            :data-lightbox "sample-article"
            :data-title "Beispielartikel aus unserem Shop. Es handelt sich hier
            um ein Bildschirmfoto. Der Artikel kann aus dem echten Shop
            abweichen. Es gelten die im Onlineshop hinterlegten Details und
            Bedingungen."}
        [:img.img-thumbnail {:src "img/beispielartikel.png"}]]]]]]))

(defn- copy-description []
  (html
   [:div.row
    [:div.col-md-9.col-sm-12 {:style {:paddingBottom "0.5em"}}
     [:div.card
      [:div.card-body
       [:div.card-text
        [:p "Wenn du im Onlineshop auf \"Zur Kasse\" klickst, wird der Abschluss
        der Bestellung eingeleitet. Warst du zu diesem Zeitpunkt noch nicht
        eingeloggt, so musst du das an dieser Stelle tun."]
        [:p "Nachdem du die Versandart ausgewählt hast, folgt der Schritt \"2.
        Bezahlart auswählen\". Hier hast du die Möglichkeit eine Anmerkung zu
        deiner Bestellung einzufügen. Füge an diese Stelle bitte die
        Artikelbeschreibung von oben ein, indem du mit der rechten Maustaste in
        das Formular klickst und dann auf \"Einfügen\" klickst. Das fügt den
        Inhalt deiner Zwischenablage in das Feld ein."]]]]]
    [:div.ml-auto.col-md-3.col-sm-12
     [:div.card
      [:div.card-header "Bestellanmerkung"]
      [:div.card-body
       [:a {:href "img/order-description.png"
            :data-lightbox "sample-article"
            :data-title "Beispielhafte Anmerkung zu einer Bestellung. Bei
            anderen Mustern oder Farben wird eine andere Beschreibung generiert,
            die an diese Stelle eingefügt werden kann."}
        [:img.img-thumbnail {:src "img/order-description.png"}]]]]]]))


;; -----------------------------------------------------------------------------

(defn- order-steps [title subtitle link]
  (html
   [:a {:href (str "#" link)}
    [:div {:className "card hover pointer text-center"}
     [:div.card-body
      [:h5.card-title title]
      [:p.card-text subtitle]]]]))

(defui Order
  Object
  (render
   [this]
   (html
    [:div
     [:p.lead
      "Über die Einstellungen oben hast du oben ein Halstuch konfiguriert. Die
      passende Artikelbeschreibung findest du weiter unten. Diese Beschreibung
      wird benötigt, um den Bestellvorgang über unsere Shop
      ausruester-eschwege.de abzuschließen. Dabei musst du nur den folgenden
      Schritten folgen und am Ende die Bestellung überprüfen."]
     [:br]

     [:div.row
      [:div.col-sm-12.col-md {:style {:paddingBottom "0.5em"}}
       (order-steps "1. Artikelbeschreibung kopieren"
                    "Die generierte Artikelbeschreibung unten im Feld in die
                    Zwischenablage kopieren (auf den Button klicken)."
                    "artikelbeschreibung-kopieren")]
      [:div.col-sm-12.col-md  {:style {:paddingBottom "0.5em"}}
       (order-steps "2. Onlineshop öffnen"
                    "Die Halstücher werden über unseren Shop vertrieben. Du
                    benötigst dort einen Benutzeraccount."
                    "onlineshop-oeffnen")]
      [:div.col-sm-12.col-md  {:style {:paddingBottom "0.5em"}}
       (order-steps "3. Artikel in den Warenkorb legen"
                    "Den passenden Grundartikel in den Warenkorb einfügen. Unten
                    findest du einen Link dazu."
                    "artikel-in-warenkorb")]
      [:div.col-sm-12.col-md
       (order-steps "4. Artikelbeschreibung in die Bestellanmerkungen einfügen"
                    "Grundartikel + hier generierte Artikelbeschreibung
                    beschreiben dein Halstuch."
                    "artikelbeschreibung-einfuegen")]]
     [:br]

     [:a {:name "artikelbeschreibung-kopieren"}]
     [:h3 "1. Artikelbeschreibung kopieren"]
     (order-no (om/props this))
     [:br]

     [:a {:name "onlineshop-oeffnen"}]
     [:h3 "2. Onlineshop öffnen und einloggen"]
     (shop-link (om/props this))
     [:br]

     [:a {:name "artikel-in-warenkorb"}]
     [:h3 "3. Artikel in den Warenkorb legen"]
     (add-article-to-cart)
     [:br]

     [:a {:name "artikelbeschreibung-einfuegen"}]
     [:h3 "4. Artikelbeschreibung in die Bestellanmerkungen einfügen"]
     (copy-description)
     [:br]])))
(def order (om/factory Order))
