(ns scarf.parser
  (:require [om.next :as om]
            [scarf.lib :as lib]))

(defn- random-price [r]
  (lib/str->float (.toFixed (rand r) 2)))

(def init-data
  {:nav/category :einfach
   :scarf/mid1 {:id 21 :rgb "#b9cfe4", :name "Blaugrau", :price (random-price 5)}
   :scarf/mid2 {:id 11 :rgb "#1a6a30", :name "Smaragdgrün", :price (random-price 5)}
   :scarf/stripe1 {:id 4 :rgb "#b92f1f", :name "Dunkelrot", :price (random-price 5)}
   :scarf/stripe2 {:id 24 :rgb "#c2bcec", :name "Fliederfarben", :price (random-price 5)}
   :scarf/stripe3 {:id 22 :rgb "#44bce3", :name "Türkis", :price (random-price 5)}
   :scarf/current 5001
   :color/selected nil
   :color/items [{:id 0 :rgb "#efe406", :name "Hellgelb", :price (random-price 5)}
                 {:id 1 :rgb "#f3e747", :name "Zitrone", :price (random-price 5)}
                 {:id 2 :rgb "#c98200", :name "Orange", :price (random-price 5)}
                 {:id 3 :rgb "#b92f1f", :name "Scharlachrot", :price (random-price 5)}
                 {:id 4 :rgb "#b92f1f", :name "Dunkelrot", :price (random-price 5)}
                 {:id 5 :rgb "#480d2c", :name "Kastanienbraun", :price (random-price 5)}
                 {:id 6 :rgb "#5c068c", :name "Lila", :price (random-price 5)}
                 {:id 7 :rgb "#c98f47", :name "Gold", :price (random-price 5)}
                 {:id 8 :rgb "#826e57", :name "Kaki", :price (random-price 5)}
                 {:id 9 :rgb "#422310", :name "Schokolade", :price (random-price 5)}
                 {:id 10 :rgb "#7b0065", :name "Traube", :price (random-price 5)}
                 {:id 11 :rgb "#1a6a30", :name "Smaragdgrün", :price (random-price 5)}
                 {:id 12 :rgb "#1a6a30", :name "Piniengrün", :price (random-price 5)}
                 {:id 13 :rgb "#143422", :name "Scoutgrün", :price (random-price 5)}
                 {:id 14 :rgb "#afc3d5", :name "Himmelfarben", :price (random-price 5)}
                 {:id 15 :rgb "#21145c", :name "Königsblau", :price (random-price 5)}
                 {:id 16 :rgb "#152442", :name "Marineblau", :price (random-price 5)}
                 {:id 17 :rgb "#f9f9f9", :name "Weiß", :price (random-price 5)}
                 {:id 18 :rgb "#7e7f84", :name "Grau", :price (random-price 5)}
                 {:id 19 :rgb "#000000", :name "Schwarz", :price (random-price 5)}
                 {:id 20 :rgb "#cd6888", :name "Pink", :price (random-price 5)}
                 {:id 21 :rgb "#b9cfe4", :name "Blaugrau", :price (random-price 5)}
                 {:id 22 :rgb "#44bce3", :name "Türkis", :price (random-price 5)}
                 {:id 23 :rgb "#ff5e00", :name "Orangerot", :price (random-price 5)}
                 {:id 24 :rgb "#c2bcec", :name "Fliederfarben", :price (random-price 5)}
                 {:id 25 :rgb "#e6ff15", :name "Tageslicht Gelb", :price (random-price 5)}]})


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
