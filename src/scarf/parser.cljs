(ns scarf.parser
  (:require [om.next :as om]
            [scarf.lib :as lib]))

(defn- num->currency
  [value]
  (.toLocaleString value "de-DE" #js {:style "currency" :currency "EUR"}))

(def init-data
  {:scarf/color1 "lightgrey"
   :scarf/color2 "darkred"
   :color/items [{:id 0 :rgb "#efe406", :name "Hellgelb", :price (num->currency (rand 5))}
                 {:id 1 :rgb "#f3e747", :name "Zitrone", :price (num->currency (rand 5))}
                 {:id 2 :rgb "#c98200", :name "Orange", :price (num->currency (rand 5))}
                 {:id 3 :rgb "#b92f1f", :name "Scharlachrot", :price (num->currency (rand 5))}
                 {:id 4 :rgb "#b92f1f", :name "Dunkelrot", :price (num->currency (rand 5))}
                 {:id 5 :rgb "#480d2c", :name "Kastanienbraun", :price (num->currency (rand 5))}
                 {:id 6 :rgb "#5c068c", :name "Lila", :price (num->currency (rand 5))}
                 {:id 7 :rgb "#c98f47", :name "Gold", :price (num->currency (rand 5))}
                 {:id 8 :rgb "#826e57", :name "Kaki", :price (num->currency (rand 5))}
                 {:id 9 :rgb "#422310", :name "Schokolade", :price (num->currency (rand 5))}
                 {:id 10 :rgb "#7b0065", :name "Traube", :price (num->currency (rand 5))}
                 {:id 11 :rgb "#1a6a30", :name "Smaragdgrün", :price (num->currency (rand 5))}
                 {:id 12 :rgb "#1a6a30", :name "Piniengrün", :price (num->currency (rand 5))}
                 {:id 13 :rgb "#143422", :name "Scoutgrün", :price (num->currency (rand 5))}
                 {:id 14 :rgb "#afc3d5", :name "Himmelfarben", :price (num->currency (rand 5))}
                 {:id 15 :rgb "#21145c", :name "Königsblau", :price (num->currency (rand 5))}
                 {:id 16 :rgb "#152442", :name "Marineblau", :price (num->currency (rand 5))}
                 {:id 17 :rgb "#f9f9f9", :name "Weiß", :price (num->currency (rand 5))}
                 {:id 18 :rgb "#7e7f84", :name "Grau", :price (num->currency (rand 5))}
                 {:id 19 :rgb "#000000", :name "Schwarz", :price (num->currency (rand 5))}
                 {:id 20 :rgb "#cd6888", :name "Pink", :price (num->currency (rand 5))}
                 {:id 21 :rgb "#b9cfe4", :name "Blaugrau", :price (num->currency (rand 5))}
                 {:id 22 :rgb "#44bce3", :name "Türkis", :price (num->currency (rand 5))}
                 {:id 23 :rgb "#ff5e00", :name "Orangerot", :price (num->currency (rand 5))}
                 {:id 24 :rgb "#c2bcec", :name "Fliederfarben", :price (num->currency (rand 5))}
                 {:id 25 :rgb "#e6ff15", :name "Tageslicht Gelb", :price (num->currency (rand 5))}]
   :user  {:selected-color ""}})

;; -----------------------------------------------------------------------------
;; Parsing

(defn get-list [state key]
  (let [st @state]
    (mapv #(get-in st %) (get st key))))

(defmulti read (fn [env key params] key))
(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmethod read :color/items
  [{:keys [state]} key _]
  {:value (get-list state key)})

(defmulti mutate om/dispatch)
(defmethod mutate 'color/temp
  [{:keys [state]} _ {:keys [color]}]
  {:action (fn [] (swap! state update-in [:user :selected-color] (fn [] color)))})

#_(defmethod mutate 'color/set
    [{:keys [state]} _ {:keys [name field]}]
    (let [color (get-selected-color)]
      {:action (fn [] (swap! state update-in [:scarf field] (fn [] color)))}))