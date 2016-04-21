(ns scarf.core
  (:require [goog.dom :as gdom]
            [om.next :as om]
            [scarf.lib :as lib]
            [scarf.views :as views]))

(enable-console-print!)

;;;;;;;;;;;;;;;;
;; https://github.com/omcljs/om/wiki/Components%2C-Identity-%26-Normalization#something-to-look-at
;;;;;;;;;;;;;;;;

(om/add-root! lib/reconciler
              views/Colors (gdom/getElement "scarf-colors"))

(om/add-root! lib/reconciler
              views/ScarfExample (gdom/getElement "scarf-example"))

;;;; Old stuff from tutorial

;(defmethod read :animals/list
;  [{:keys [state] :as env} key {:keys [start end]}]
;  {:value (subvec (:animals/list @state) start end)})
;
;(defui AnimalsList
;  static om/IQueryParams
;  (params [this]
;    {:start 0 :end 10})
;  static om/IQuery
;  (query [this]
;    '[:app/title (:animals/list {:start ?start :end ?end})])
;  Object
;  (render [this]
;    (let [{:keys [app/title animals/list]} (om/props this)]
;      (dom/div nil
;               (dom/h2 nil title)
;               (apply dom/ul nil
;                      (map
;                        (fn [[i name]]
;                          (dom/li nil (str i ". " name)))
;                        list))))))

;(om/add-root! reconciler
;              AnimalsList (gdom/getElement "app"))
