(ns scarf.specs
  (:require [cljs.spec.alpha :as s]))

(s/def ::id int?)
(s/def ::rgb (s/and string?
                    #(= 7 (count %))
                    #(-> % first (= "#"))))
(s/def ::name string?)
(s/def ::price number?)
(s/def ::color (s/keys :req-un [::id ::rgb ::name ::price]))

;; (def colors (:color/items scarf.parser/init-data))
;; (map #(s/explain ::color %) colors)
;; (s/explain ::color (first colors))
 
