(ns scarf.templates.quartered.rolled
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :refer [create-path scarf-background] :as utils]))

(defui OhneDekor
  "Gerolltes Halstuch, zweifarbig, ohne Deko."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5000
                {:keys [scarf/mid1 scarf/mid2 scarf/current width thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2)
                height 273
                width 903
                scale (utils/scale-to-width thumbnail? width)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            scarf-background
                            ;; Far left to mid
                            (create-path this "mid1" c1 "M 183.63808,63.775013 C 165.1497,61.289652 165.47846,60.442145 144.33546,59.830383 128.65298,59.376618 95.865788,49.648866 84.475471,44.906209 62.586204,35.792037 39.464242,18.677087 34.6,15.3 c 0,0 25.586664,4.179798 52.246487,8.758225 C 113.88355,28.701437 142.02436,33.771899 145.7,37.8 c 6.2,6.7 37.93808,25.975013 37.93808,25.975013 z")
                            (create-path this "mid1" c1 "M 271.0819,78.867008 C 236.20165,69.106236 203.68766,68.294059 193.5435,64.421817 169.16003,55.114128 143.5919,30.263932 131.9,23.3 l 103.9,18.6 c 15.3,14.5 35.2819,36.967008 35.2819,36.967008 z")
                            ;; Far right to mid
                            (create-path this "mid1" c1 "m 726.7085,62.560649 c 13.89633,-2.675043 56.79118,-3.382898 84.32746,-13.64481 C 855.52047,32.33785 866.49738,23.076885 874.8,15.2 l -60.55663,10.241192 -42.44444,5.702961 c -16,13.4 -45.09043,31.416496 -45.09043,31.416496 z")
                            (create-path this "mid1" c1 "M 638.67501,78.438818 C 659.10506,72.153413 698.55354,67.808271 716.87959,62.338281 731.56526,57.954877 762.64347,30.547869 777.6,23.3 L 676.61169,39.330858 c -15.3,14.5 -37.93668,39.10796 -37.93668,39.10796 z")
                            ;; Mid
                            (create-path this "mid1" c1 "m 232.3,34.8 c 3.51941,1.18966 113.15513,17.472415 222.57388,17.204974 C 566.19459,51.732884 677.3,34.9 677.3,34.9 l -163.30699,162.52704 -118.20386,0 c 0.1,0 -171.06363,-169.923839 -163.48915,-162.62704 z")
                            (create-path this "mid2" c2 "m 397.44626,199.09435 114.9691,0 -57.42032,57.07272 c 0.1,0 -57.54878,-57.07272 -57.54878,-57.07272 z"))))))
(def ohne-dekor (om/factory OhneDekor))
