(ns scarf.lib
  (:require [om.next :as om :refer-macros [defui]]))

(defonce app-state
  (atom
    {:scarf     {:color1 "white"
                 :color2 "white"}
     :colors    [["#efe406" "Hellgelb"]
                 ["#f3e747" "Zitrone"]
                 ["#c98200" "Orange"]
                 ["#b92f1f" "Scharlachrot"]
                 ["#b92f1f" "Dunkelrot"]
                 ["#480d2c" "Kastanienbraun"]
                 ["#5c068c" "Lila"]
                 ["#c98f47" "Gold"]
                 ["#826e57" "Kaki"]
                 ["#422310" "Schokolade"]
                 ["#7b0065" "Traube"]
                 ["#1a6a30" "Smaragdgrün"]
                 ["#1a6a30" "Piniengrün"]
                 ["#143422" "Scoutgrün"]
                 ["#afc3d5" "Himmelfarben"]
                 ["#21145c" "Königsblau"]
                 ["#152442" "Marineblau"]
                 ["#f9f9f9" "Weiß"]
                 ["#7e7f84" "Grau"]
                 ["#000000" "Schwarz"]
                 ["#cd6888" "Pink"]
                 ["#b9cfe4" "Blaugrau"]
                 ["#44bce3" "Türkis"]
                 ["#ff5e00" "Orangerot"]
                 ["#c2bcec" "Fliederfarben"]
                 ["#e6ff15" "Tageslicht Gelb"]]
     :user      {:selected-color ""}}))

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
  [{:keys [state]} _ {:keys [name color]}]
  {:action (fn [] (swap! state update-in [:user :selected-color] (fn [] color)))})

(defmethod mutate 'color/set
  [{:keys [state]} _ {:keys [name field]}]
  (let [color (get-in @app-state [:user :selected-color])]
    {:action (fn [] (swap! state update-in [:scarf field] (fn [] color)))}))

(defonce reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read :mutate mutate})}))

;;;; Setting Colors
(defn save-selected-color!
  "Store the selected color in the app-state."
  [color]
  (om/transact! reconciler `[(color/temp {:color ~color})]))

(defn update-color!
  "Update color selection."
  [field]
  (om/transact! reconciler `[(color/set {:field ~field})]))

;;;; Getter
(defn get-colors
  "Return list with all available colors."
  []
  (:colors @app-state))