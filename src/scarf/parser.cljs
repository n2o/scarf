(ns scarf.parser
  (:require [om.next :as om]
            [scarf.lib :as lib]))

(defn- random-price [r]
  (lib/str->float (.toFixed (rand r) 2)))

(def init-data
  {:nav/category :einfach
   :option/stripe :umgeschlagen
   :scarf/current 5001
   :scarf/mid1 {:id "SW21" :rgb "#D0D6E0" :name "silbergrau" :price (random-price 5)}
   :scarf/mid2 {:id "SW33" :rgb "#B1D3F9" :name "hellblau" :price (random-price 5)}
   :scarf/stripe1 {:id "SW50" :rgb "#D14541" :name "hochrot" :price (random-price 5)}
   :scarf/stripe2 {:id "SW47" :rgb "#48AE99" :name "smaragd" :price (random-price 5)}
   :scarf/stripe3 {:id "SW30" :rgb "#659BCE" :name "marine" :price (random-price 5)}
   :color/selected {:id "SW42" :rgb "#B0DE7C" :name "lemon" :price (random-price 5)}
   :color/items [{:id "SW01" :rgb "#E2E2E2" :name "weiß" :price (random-price 5)}
                 {:id "SW02" :rgb "#D1C6B7" :name "natur" :price (random-price 5)}
                 {:id "SW10" :rgb "#F1D5B0" :name "beige" :price (random-price 5)}
                 {:id "SW12" :rgb "#D7BC9F" :name "sand" :price (random-price 5)}
                 {:id "SW14" :rgb "#D19B92" :name "hellbraun" :price (random-price 5)}
                 {:id "SW15" :rgb "#968381" :name "dunkelbraun" :price (random-price 5)}
                 {:id "SW20" :rgb "#4B4E51" :name "schwarz" :price (random-price 5)}
                 {:id "SW21" :rgb "#D0D6E0" :name "silbergrau" :price (random-price 5)}
                 {:id "SW22" :rgb "#BACFE4" :name "mittelgrau" :price (random-price 5)}
                 {:id "SW23" :rgb "#9E9CA0" :name "dunkelgrau" :price (random-price 5)}
                 {:id "SW30" :rgb "#659BCE" :name "marine" :price (random-price 5)}
                 {:id "SW31" :rgb "#3F98EA" :name "royal" :price (random-price 5)}
                 {:id "SW32" :rgb "#65D0FF" :name "türkis" :price (random-price 5)}
                 {:id "SW33" :rgb "#B1D3F9" :name "hellblau" :price (random-price 5)}
                 {:id "SW34" :rgb "#4894A7" :name "petrol" :price (random-price 5)}
                 {:id "SW35" :rgb "#82A6E8" :name "flieder" :price (random-price 5)}
                 {:id "SW36" :rgb "#8FA2E2" :name "lila" :price (random-price 5)}
                 {:id "SW38" :rgb "#7ABBF5" :name "jeansblau" :price (random-price 5)}
                 {:id "SW39" :rgb "#609DCA" :name "rauchblau" :price (random-price 5)}
                 {:id "SW40" :rgb "#4EA57C" :name "gras" :price (random-price 5)}
                 {:id "SW41" :rgb "#B7DAD6" :name "mint" :price (random-price 5)}
                 {:id "SW42" :rgb "#B0DE7C" :name "lemon" :price (random-price 5)}
                 {:id "SW43" :rgb "#90AF5A" :name "helloliv" :price (random-price 5)}
                 {:id "SW44" :rgb "#81A68B" :name "kaki" :price (random-price 5)}
                 {:id "SW45" :rgb "#7B7A65" :name "dunkeloliv" :price (random-price 5)}
                 {:id "SW46" :rgb "#628E85" :name "tanne" :price (random-price 5)}
                 {:id "SW47" :rgb "#48AE99" :name "smaragd" :price (random-price 5)}
                 {:id "SW49" :rgb "#6AD07C" :name "giftgrün" :price (random-price 5)}
                 {:id "SW50" :rgb "#D14541" :name "hochrot" :price (random-price 5)}
                 {:id "SW52" :rgb "#D25756" :name "weinrot" :price (random-price 5)}
                 {:id "SW53" :rgb "#9D4343" :name "bordeaux" :price (random-price 5)}
                 {:id "SW55" :rgb "#DE8B99" :name "rosa" :price (random-price 5)}
                 {:id "SWXX" :rgb "#E0C9D7" :name "hellrosa" :price (random-price 5)}
                 {:id "SW56" :rgb "#D67E81" :name "altrosa" :price (random-price 5)}
                 {:id "SW57" :rgb "#D95E7B" :name "pink" :price (random-price 5)}
                 {:id "SW58" :rgb "#824455" :name "erika" :price (random-price 5)}
                 {:id "SW60" :rgb "#DA6A42" :name "orange" :price (random-price 5)}
                 {:id "SW62" :rgb "#DCA583" :name "lachs" :price (random-price 5)}
                 {:id "SW63" :rgb "#DB7361" :name "hellterra" :price (random-price 5)}
                 {:id "SW64" :rgb "#934240" :name "dunkelterra" :price (random-price 5)}
                 {:id "SW70" :rgb "#DB9343" :name "dunkelgelb" :price (random-price 5)}
                 {:id "SW71" :rgb "#DCC469" :name "sonnengelb" :price (random-price 5)}
                 {:id "SW72" :rgb "#D0AF5F" :name "hellgelb" :price (random-price 5)}]})

;; -----------------------------------------------------------------------------
;; Parsing

(defmulti read (fn [env key params] key))
(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmethod read :color/items
  [{:keys [query state]} k _]
  (let [st @state]
    {:value (om/db->tree query (get st k) st)}))

(defmethod read :color/by-id
  [{:keys [state]} _ {:keys [id]}]
  (let [st @state
        color (for [item (get st :color/items) :when (= id (:id item))] item)]
    (when (seq color)
      {:value color})))
;; (read {:state (om/app-state scarf.core/reconciler)} :color/by-id {:id 1})

(defmulti mutate om/dispatch)
(defmethod mutate 'color/temp
  [{:keys [state]} _ {:keys [color]}]
  {:action (fn [] (swap! state update-in [:user :selected-color] (fn [] color)))})

(defmethod mutate 'scarf/colorize
  [{:keys [state]} _ {:keys [field]}]
  (let [color (:color/selected @state)]
    {:action (fn [] (swap! state update-in [field] (fn [] color)))}))

(defmethod mutate 'scarf/current
  [{:keys [state]} _ {:keys [id]}]
  {:action (fn [] (swap! state update-in [:scarf/current] (fn [] id)))})

(defmethod mutate 'option/stripe
  [{:keys [state]} _ {:keys [option]}]
  {:action (fn [] (swap! state update-in [:option/stripe] (fn [] (keyword option))))})

(defmethod mutate 'color/selected
  [{:keys [state]} _ color]
  {:action (fn [] (swap! state update-in [:color/selected] (fn [] color)))})

(defmethod mutate 'nav/change-category
  [{:keys [state]} _ {:keys [category]}]
  {:action (fn [] (swap! state update-in [:nav/category] (fn [] category)))})


;; -----------------------------------------------------------------------------
;; Testing the parser

;; (def my-parser (om/parser {:read read}))
;; (my-parser {:state init-data} [:color/items])
