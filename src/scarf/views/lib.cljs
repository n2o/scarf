(ns scarf.views.lib
  (:require [om.dom :as dom]
            [scarf.lib :as lib]))

(defn red-heading [heading]
  (dom/div nil
           (dom/hr nil)
           (dom/a #js {:name (lib/simple-slug heading)})
           (dom/h2 nil heading)
           (dom/div #js {:className "underline"})))
