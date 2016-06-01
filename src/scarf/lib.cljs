(ns scarf.lib
  (:require [om.next :as om :refer-macros [defui]]))

(defonce app-state
         (atom
           {:scarf  {:color1 "white"
                     :color2 "white"}
            :colors [{:rgb "#efe406", :name "Hellgelb", :price (rand 5)}
                     {:rgb "#f3e747", :name "Zitrone", :price (rand 5)}
                     {:rgb "#c98200", :name "Orange", :price (rand 5)}
                     {:rgb "#b92f1f", :name "Scharlachrot", :price (rand 5)}
                     {:rgb "#b92f1f", :name "Dunkelrot", :price (rand 5)}
                     {:rgb "#480d2c", :name "Kastanienbraun", :price (rand 5)}
                     {:rgb "#5c068c", :name "Lila", :price (rand 5)}
                     {:rgb "#c98f47", :name "Gold", :price (rand 5)}
                     {:rgb "#826e57", :name "Kaki", :price (rand 5)}
                     {:rgb "#422310", :name "Schokolade", :price (rand 5)}
                     {:rgb "#7b0065", :name "Traube", :price (rand 5)}
                     {:rgb "#1a6a30", :name "Smaragdgrün", :price (rand 5)}
                     {:rgb "#1a6a30", :name "Piniengrün", :price (rand 5)}
                     {:rgb "#143422", :name "Scoutgrün", :price (rand 5)}
                     {:rgb "#afc3d5", :name "Himmelfarben", :price (rand 5)}
                     {:rgb "#21145c", :name "Königsblau", :price (rand 5)}
                     {:rgb "#152442", :name "Marineblau", :price (rand 5)}
                     {:rgb "#f9f9f9", :name "Weiß", :price (rand 5)}
                     {:rgb "#7e7f84", :name "Grau", :price (rand 5)}
                     {:rgb "#000000", :name "Schwarz", :price (rand 5)}
                     {:rgb "#cd6888", :name "Pink", :price (rand 5)}
                     {:rgb "#b9cfe4", :name "Blaugrau", :price (rand 5)}
                     {:rgb "#44bce3", :name "Türkis", :price (rand 5)}
                     {:rgb "#ff5e00", :name "Orangerot", :price (rand 5)}
                     {:rgb "#c2bcec", :name "Fliederfarben", :price (rand 5)}
                     {:rgb "#e6ff15", :name "Tageslicht Gelb", :price (rand 5)}]
            :user   {:selected-color ""}}))

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

(defn get-colors
  "Return list with all available colors."
  []
  (:colors @app-state))