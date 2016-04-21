(ns scarf.lib
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def app-state
  (atom
    {:app/title "Animals"
     :animals/list
                [[1 "Ant"] [2 "Antelope"] [3 "Bird"] [4 "Cat"] [5 "Dog"]
                 [6 "Lion"] [7 "Mouse"] [8 "Monkey"] [9 "Snake"] [10 "Zebra"]]
     :scarf {:color1 "#ff0000"}
     :colors {:red   "#ff0000"
              :green "#00ff00"
              :blue  "#0000ff"}
     :user {:selected-color ""}}))

;;;; Functions concerning the reconciler
(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmulti mutate om/dispatch)

(defmethod mutate 'color/set
  [{:keys [state]} _ {:keys [name color]}]
  {:action (fn [] (swap! state update-in [:user :selected-color] (fn [] color)))})
;; (om/transact! reconciler `[(color/set {:color :foo})])

(def reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read :mutate mutate})}))

;;;; Setting Colors
(defn save-selected-color!
  "Store the selected color in the app-state."
  [color]
  (om/transact! reconciler `[(color/set {:color ~color})]))