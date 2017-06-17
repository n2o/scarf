(ns scarf.parser
  (:require [om.next :as om]
            [scarf.lib :as lib]))

(defn- random-price [r]
  (lib/str->float (.toFixed (rand r) 2)))

(def init-data
  {:nav/category :einfach
   :scarf/current 5001
   :scarf/mid1 {:id "10.00.82" :rgb "#dddddb" :name "hellgrau" :price (random-price 5)}
   :scarf/mid2 {:id "10.00.69" :rgb "#2b613f" :name "dunkelgrün" :price (random-price 5)}
   :scarf/stripe1 {:id "10.00.34" :rgb "#a91b29" :name "rot" :price (random-price 5)}
   :scarf/stripe2 {:id "10.00.64" :rgb "#3f9d8d" :name "smaragd" :price (random-price 5)}
   :scarf/stripe3 {:id "10.00.26" :rgb "#ffe880" :name "gelb" :price (random-price 5)}
   :color/selected {:id "10.00.51" :rgb "#c2e2ed" :name "hellblau" :price (random-price 5)}
   :color/items [{:id "10.00.24" :rgb "#f5eba4" :name "hellgelb" :price (random-price 5)}
                 {:id "10.00.25" :rgb "#e14b30" :name "dunkelorange" :price (random-price 5)}
                 {:id "10.00.26" :rgb "#ffe880" :name "gelb" :price (random-price 5)}
                 {:id "10.00.27" :rgb "#e1a841" :name "dunkelgelb" :price (random-price 5)}
                 {:id "10.00.28" :rgb "#eac7ab" :name "lachs" :price (random-price 5)}
                 {:id "10.00.29" :rgb "#e25740" :name "orange" :price (random-price 5)}
                 {:id "10.00.31" :rgb "#f2e8e9" :name "hellrosa" :price (random-price 5)}
                 {:id "10.00.32" :rgb "#d98dbc" :name "rosa" :price (random-price 5)}
                 {:id "10.00.33" :rgb "#b78489" :name "altrosa" :price (random-price 5)}
                 {:id "10.00.34" :rgb "#a91b29" :name "rot" :price (random-price 5)}
                 {:id "10.00.35" :rgb "#c54381" :name "pink" :price (random-price 5)}
                 {:id "10.00.36" :rgb "#c62a74" :name "dunkelpink" :price (random-price 5)}
                 {:id "10.00.38" :rgb "#8d1e2f" :name "weinrot" :price (random-price 5)}
                 {:id "10.00.39" :rgb "#592728" :name "bordeaux" :price (random-price 5)}
                 {:id "10.00.43" :rgb "#a795bd" :name "flieder" :price (random-price 5)}
                 {:id "10.00.47" :rgb "#81629e" :name "lila" :price (random-price 5)}
                 {:id "10.00.49" :rgb "#45335d" :name "dunkellila" :price (random-price 5)}
                 {:id "10.00.51" :rgb "#c2e2ed" :name "hellblau" :price (random-price 5)}
                 {:id "10.00.52" :rgb "#266ca8" :name "nato blau" :price (random-price 5)}
                 {:id "10.00.53" :rgb "#70848b" :name "rauchblau" :price (random-price 5)}
                 {:id "10.00.54" :rgb "#2b5492" :name "royal" :price (random-price 5)}
                 {:id "10.00.59" :rgb "#283641" :name "marine" :price (random-price 5)}
                 {:id "10.00.62" :rgb "#a2e071" :name "hellgrün" :price (random-price 5)}
                 {:id "10.00.63" :rgb "#58b996" :name "türkis" :price (random-price 5)}
                 {:id "10.00.64" :rgb "#3f9d8d" :name "smaragd" :price (random-price 5)}
                 {:id "10.00.65" :rgb "#24764e" :name "grün" :price (random-price 5)}
                 {:id "10.00.66" :rgb "#6b8353" :name "olive" :price (random-price 5)}
                 {:id "10.00.68" :rgb "#264033" :name "tannengrün" :price (random-price 5)}
                 {:id "10.00.69" :rgb "#2b613f" :name "dunkelgrün" :price (random-price 5)}
                 {:id "10.00.73" :rgb "#9a9075" :name "sand" :price (random-price 5)}
                 {:id "10.00.74" :rgb "#a63f36" :name "terrakotta" :price (random-price 5)}
                 {:id "10.00.75" :rgb "#614a42" :name "milchkaffee" :price (random-price 5)}
                 {:id "10.00.78" :rgb "#52352f" :name "rotbraun" :price (random-price 5)}
                 {:id "10.00.79" :rgb "#41342c" :name "dunkelbraun" :price (random-price 5)}
                 {:id "10.00.82" :rgb "#dddddb" :name "hellgrau" :price (random-price 5)}
                 {:id "10.00.88" :rgb "#5f6460" :name "grau" :price (random-price 5)}
                 {:id "10.00.89" :rgb "#2e3432" :name "schwarz" :price (random-price 5)}
                 {:id "10.00.91" :rgb "#fbfcf6" :name "weiß" :price (random-price 5)}
                 {:id "10.00.93" :rgb "#faf8ec" :name "natur" :price (random-price 5)}
                 {:id "10.00.94" :rgb "#ebddb8" :name "beige" :price (random-price 5)}]})

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
