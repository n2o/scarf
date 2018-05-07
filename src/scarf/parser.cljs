(ns scarf.parser
  (:require [om.next :as om]))

(def init-data
  {:nav/category :einfach
   :option/stripe ""
   :option/size-a "112" ;; cm
   :option/size-b "80"
   :option/size-c "57"
   :scarf/current 5001
   :scarf/mid1 {:id "SW21" :rgb "#c5ccd4" :name "silbergrau"}
   :scarf/mid2 {:id "SW33" :rgb "#abc9ed" :name "hellblau"}
   :scarf/stripe1 {:id "SW50" :rgb "#f02f20" :name "hochrot"}
   :scarf/stripe2 {:id "SW47" :rgb "#14b89f" :name "smaragd"}
   :scarf/stripe3 {:id "SW30" :rgb "#4a629e" :name "marine"}
   :color/selected {:id "SW42" :rgb "#cbf27f" :name "lemon"}
   :color/items [{:id "SW01" :rgb "#d6d5da" :name "weiß"}
                 {:id "SW02" :rgb "#c2c0b3" :name "natur"}
                 {:id "SW10" :rgb "#e5d0a3" :name "beige"}
                 {:id "SW12" :rgb "#c5b38b" :name "sand"}
                 {:id "SW14" :rgb "#ae7e6c" :name "hellbraun"}
                 {:id "SW15" :rgb "#76655e" :name "dunkelbraun"}
                 {:id "SW20" :rgb "#686c6f" :name "schwarz"}
                 {:id "SW21" :rgb "#c5ccd4" :name "silbergrau"}
                 {:id "SW22" :rgb "#aec0d4" :name "mittelgrau"}
                 {:id "SW23" :rgb "#9a999e" :name "dunkelgrau"}
                 {:id "SW30" :rgb "#4a629e" :name "marine"}
                 {:id "SW31" :rgb "#2359dd" :name "royal"}
                 {:id "SW32" :rgb "#3cccfe" :name "türkis"}
                 {:id "SW33" :rgb "#abc9ed" :name "hellblau"}
                 {:id "SW34" :rgb "#087e9e" :name "petrol"}
                 {:id "SW35" :rgb "#a98fe6" :name "flieder"}
                 {:id "SW36" :rgb "#9e6bf7" :name "lila"}
                 {:id "SW38" :rgb "#6995de" :name "jeansblau"}
                 {:id "SW39" :rgb "#406fa7" :name "rauchblau"}
                 {:id "SW40" :rgb "#199976" :name "gras"}
                 {:id "SW41" :rgb "#b5d4cc" :name "mint"}
                 {:id "SW42" :rgb "#cbf27f" :name "lemon"}
                 {:id "SW43" :rgb "#719032" :name "helloliv"}
                 {:id "SW44" :rgb "#739a7f" :name "kaki"}
                 {:id "SW45" :rgb "#686842" :name "dunkeloliv"}
                 {:id "SW46" :rgb "#35675e" :name "tanne"}
                 {:id "SW47" :rgb "#14b89f" :name "smaragd"}
                 {:id "SW49" :rgb "#4ec46c" :name "giftgrün"}
                 {:id "SW50" :rgb "#f02f20" :name "hochrot"}
                 {:id "SW52" :rgb "#ea202c" :name "weinrot"}
                 {:id "SW53" :rgb "#b11b38" :name "bordeaux"}
                 {:id "SW55" :rgb "#fb9cc8" :name "rosa"}
                 {:id "SW59" :rgb "#f3d4e3" :name "hellrosa"}
                 {:id "SW56" :rgb "#c3545b" :name "altrosa"}
                 {:id "SW57" :rgb "#e854b2" :name "pink"}
                 {:id "SW58" :rgb "#a45282" :name "erika"}
                 {:id "SW60" :rgb "#fe770b" :name "orange"}
                 {:id "SW62" :rgb "#eac18b" :name "lachs"}
                 {:id "SW63" :rgb "#fe885a" :name "hellterra"}
                 {:id "SW64" :rgb "#b44a32" :name "dunkelterra"}
                 {:id "SW70" :rgb "#edc913" :name "dunkelgelb"}
                 {:id "SW71" :rgb "#ede650" :name "sonnengelb"}
                 {:id "SW72" :rgb "#d2c260" :name "hellgelb"}]})

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
    {:action (fn [] (swap! state assoc field color))}))

(defmethod mutate 'scarf/current
  [{:keys [state]} _ {:keys [id]}]
  {:action (fn [] (swap! state assoc :scarf/current id))})

(defmethod mutate 'option/stripe
  [{:keys [state]} _ {:keys [option]}]
  {:action (fn [] (swap! state assoc :option/stripe (keyword option)))})

(defmethod mutate 'option/size
  [{:keys [state]} _ {:keys [dimension value]}]
  {:action (fn [] (swap! state assoc dimension value))})

(defmethod mutate 'color/selected
  [{:keys [state]} _ color]
  {:action (fn [] (swap! state assoc :color/selected color))})

(defmethod mutate 'nav/change-category
  [{:keys [state]} _ {:keys [category]}]
  {:action (fn [] (swap! state assoc :nav/category category))})


;; -----------------------------------------------------------------------------
;; Testing the parser

;; (def my-parser (om/parser {:read read}))
;; (my-parser {:state init-data} [:color/items])
