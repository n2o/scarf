(ns scarf.lib
  (:require [om.next :as om :refer-macros [defui]]
            [scarf.config :as config]))

(defn num->currency
  [value]
  (.toLocaleString value "de-DE" #js {:style "currency" :currency "EUR"}))

(def colors
  "Define all available colors."
  [{:rgb "#efe406", :name "Hellgelb", :price (num->currency (rand 5))}
   {:rgb "#f3e747", :name "Zitrone", :price (num->currency (rand 5))}
   {:rgb "#c98200", :name "Orange", :price (num->currency (rand 5))}
   {:rgb "#b92f1f", :name "Scharlachrot", :price (num->currency (rand 5))}
   {:rgb "#b92f1f", :name "Dunkelrot", :price (num->currency (rand 5))}
   {:rgb "#480d2c", :name "Kastanienbraun", :price (num->currency (rand 5))}
   {:rgb "#5c068c", :name "Lila", :price (num->currency (rand 5))}
   {:rgb "#c98f47", :name "Gold", :price (num->currency (rand 5))}
   {:rgb "#826e57", :name "Kaki", :price (num->currency (rand 5))}
   {:rgb "#422310", :name "Schokolade", :price (num->currency (rand 5))}
   {:rgb "#7b0065", :name "Traube", :price (num->currency (rand 5))}
   {:rgb "#1a6a30", :name "Smaragdgrün", :price (num->currency (rand 5))}
   {:rgb "#1a6a30", :name "Piniengrün", :price (num->currency (rand 5))}
   {:rgb "#143422", :name "Scoutgrün", :price (num->currency (rand 5))}
   {:rgb "#afc3d5", :name "Himmelfarben", :price (num->currency (rand 5))}
   {:rgb "#21145c", :name "Königsblau", :price (num->currency (rand 5))}
   {:rgb "#152442", :name "Marineblau", :price (num->currency (rand 5))}
   {:rgb "#f9f9f9", :name "Weiß", :price (num->currency (rand 5))}
   {:rgb "#7e7f84", :name "Grau", :price (num->currency (rand 5))}
   {:rgb "#000000", :name "Schwarz", :price (num->currency (rand 5))}
   {:rgb "#cd6888", :name "Pink", :price (num->currency (rand 5))}
   {:rgb "#b9cfe4", :name "Blaugrau", :price (num->currency (rand 5))}
   {:rgb "#44bce3", :name "Türkis", :price (num->currency (rand 5))}
   {:rgb "#ff5e00", :name "Orangerot", :price (num->currency (rand 5))}
   {:rgb "#c2bcec", :name "Fliederfarben", :price (num->currency (rand 5))}
   {:rgb "#e6ff15", :name "Tageslicht Gelb", :price (num->currency (rand 5))}])

(defonce app-state
         (atom
           {:scarf {:color1 "white"
                    :color2 "white"}
            :user  {:selected-color ""}}))

(defonce counter (atom 0))

(defn get-unique-key
  "Return unique react-key."
  []
  (println (:name config/project))
  (str (:name config/project) "-unique-react-key-" (swap! counter inc)))

;;;; Auxiliary
(defn get-selected-color
  "Return the user's current selection."
  []
  (get-in @app-state [:user :selected-color]))


;;;; Functions concerning the reconciler
(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmulti mutate om/dispatch)

(defmethod mutate 'color/temp
  [{:keys [state]} _ {:keys [color]}]
  (println color)
  {:action (fn [] (swap! state update-in [:user :selected-color] (fn [] color)))})

(defmethod mutate 'color/set
  [{:keys [state]} _ {:keys [name field]}]
  (let [color (get-selected-color)]
    {:action (fn [] (swap! state update-in [:scarf field] (fn [] color)))}))

(defonce reconciler
         (om/reconciler
           {:state  app-state
            :parser (om/parser {:read read :mutate mutate})}))


;;;; Colors
(defn save-selected-color!
  "Store the selected color in the app-state."
  [color]
  (om/transact! reconciler `[(color/temp {:color ~color})]))

(defn update-color!
  "Update color selection."
  [field]
  (om/transact! reconciler `[(color/set {:field ~field})]))