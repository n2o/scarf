(ns scarf.lib
  (:require [om.next :as om :refer-macros [defui]]))

(defonce app-state
  (atom
    {:scarf     {:color1 "#ff0000"
                 :color2 "#00ff00"}
     :scarf/color1 "#ff0000"
     :scarf/color2 "#00ff00"
     :colors    ["#ff0000"
                 "#00ff00"
                 "#0000ff"
                 "yellow"]
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