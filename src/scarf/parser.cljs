(ns scarf.parser
  (:require [om.next :as om]))

(def init-data
  {:nav/category :einfach
   :option/stripe ""
   :option/size-a "112" ;; cm
   :option/size-b "80"
   :option/size-c "57"
   :scarf/current 5001
   :scarf/mid1 {:id "SW21" :rgb "#D0D6E0" :name "silbergrau"}
   :scarf/mid2 {:id "SW33" :rgb "#B1D3F9" :name "hellblau"}
   :scarf/stripe1 {:id "SW50" :rgb "#D14541" :name "hochrot"}
   :scarf/stripe2 {:id "SW47" :rgb "#48AE99" :name "smaragd"}
   :scarf/stripe3 {:id "SW30" :rgb "#659BCE" :name "marine"}
   :color/selected {:id "SW42" :rgb "#B0DE7C" :name "lemon"}
   :color/items [{:id "SW01" :rgb "#E2E2E2" :name "weiß"}
                 {:id "SW02" :rgb "#D1C6B7" :name "natur"}
                 {:id "SW10" :rgb "#F1D5B0" :name "beige"}
                 {:id "SW12" :rgb "#D7BC9F" :name "sand"}
                 {:id "SW14" :rgb "#D19B92" :name "hellbraun"}
                 {:id "SW15" :rgb "#968381" :name "dunkelbraun"}
                 {:id "SW20" :rgb "#4B4E51" :name "schwarz"}
                 {:id "SW21" :rgb "#D0D6E0" :name "silbergrau"}
                 {:id "SW22" :rgb "#BACFE4" :name "mittelgrau"}
                 {:id "SW23" :rgb "#9E9CA0" :name "dunkelgrau"}
                 {:id "SW30" :rgb "#659BCE" :name "marine"}
                 {:id "SW31" :rgb "#3F98EA" :name "royal"}
                 {:id "SW32" :rgb "#65D0FF" :name "türkis"}
                 {:id "SW33" :rgb "#B1D3F9" :name "hellblau"}
                 {:id "SW34" :rgb "#4894A7" :name "petrol"}
                 {:id "SW35" :rgb "#82A6E8" :name "flieder"}
                 {:id "SW36" :rgb "#8FA2E2" :name "lila"}
                 {:id "SW38" :rgb "#7ABBF5" :name "jeansblau"}
                 {:id "SW39" :rgb "#609DCA" :name "rauchblau"}
                 {:id "SW40" :rgb "#4EA57C" :name "gras"}
                 {:id "SW41" :rgb "#B7DAD6" :name "mint"}
                 {:id "SW42" :rgb "#B0DE7C" :name "lemon"}
                 {:id "SW43" :rgb "#90AF5A" :name "helloliv"}
                 {:id "SW44" :rgb "#81A68B" :name "kaki"}
                 {:id "SW45" :rgb "#7B7A65" :name "dunkeloliv"}
                 {:id "SW46" :rgb "#628E85" :name "tanne"}
                 {:id "SW47" :rgb "#48AE99" :name "smaragd"}
                 {:id "SW49" :rgb "#6AD07C" :name "giftgrün"}
                 {:id "SW50" :rgb "#D14541" :name "hochrot"}
                 {:id "SW52" :rgb "#D25756" :name "weinrot"}
                 {:id "SW53" :rgb "#9D4343" :name "bordeaux"}
                 {:id "SW55" :rgb "#DE8B99" :name "rosa"}
                 {:id "SW59" :rgb "#E0C9D7" :name "hellrosa"}
                 {:id "SW56" :rgb "#D67E81" :name "altrosa"}
                 {:id "SW57" :rgb "#D95E7B" :name "pink"}
                 {:id "SW58" :rgb "#824455" :name "erika"}
                 {:id "SW60" :rgb "#DA6A42" :name "orange"}
                 {:id "SW62" :rgb "#DCA583" :name "lachs"}
                 {:id "SW63" :rgb "#DB7361" :name "hellterra"}
                 {:id "SW64" :rgb "#934240" :name "dunkelterra"}
                 {:id "SW70" :rgb "#DB9343" :name "dunkelgelb"}
                 {:id "SW71" :rgb "#DCC469" :name "sonnengelb"}
                 {:id "SW72" :rgb "#D0AF5F" :name "hellgelb"}]})

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
