(ns scarf.lib
  (:require [om.next :as om :refer-macros [defui]]))

(defonce app-state
         (atom
           {:scarf  {:color1 "white"
                     :color2 "white"}
            :colors [{:rgb  "#efe406"
                      :name "Hellgelb"}
                     {:rgb  "#f3e747"
                      :name "Zitrone"}
                     {:rgb  "#c98200"
                      :name "Orange"}
                     {:rgb  "#b92f1f"
                      :name "Scharlachrot"}
                     {:rgb  "#b92f1f"
                      :name "Dunkelrot"}
                     {:rgb  "#480d2c"
                      :name "Kastanienbraun"}
                     {:rgb  "#5c068c"
                      :name "Lila"}
                     {:rgb  "#c98f47"
                      :name "Gold"}
                     {:rgb  "#826e57"
                      :name "Kaki"}
                     {:rgb  "#422310"
                      :name "Schokolade"}
                     {:rgb  "#7b0065"
                      :name "Traube"}
                     {:rgb  "#1a6a30"
                      :name "Smaragdgrün"}
                     {:rgb  "#1a6a30"
                      :name "Piniengrün"}
                     {:rgb  "#143422"
                      :name "Scoutgrün"}
                     {:rgb  "#afc3d5"
                      :name "Himmelfarben"}
                     {:rgb  "#21145c"
                      :name "Königsblau"}
                     {:rgb  "#152442"
                      :name "Marineblau"}
                     {:rgb  "#f9f9f9"
                      :name "Weiß"}
                     {:rgb  "#7e7f84"
                      :name "Grau"}
                     {:rgb  "#000000"
                      :name "Schwarz"}
                     {:rgb  "#cd6888"
                      :name "Pink"}
                     {:rgb  "#b9cfe4"
                      :name "Blaugrau"}
                     {:rgb  "#44bce3"
                      :name "Türkis"}
                     {:rgb  "#ff5e00"
                      :name "Orangerot"}
                     {:rgb  "#c2bcec"
                      :name "Fliederfarben"}
                     {:rgb  "#e6ff15"
                      :name "Tageslicht Gelb"}]
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