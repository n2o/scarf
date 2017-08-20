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
          (let [id 5013
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

(defui Borte
  "Gerolltes Halstuch, einfarbig, ohne Deko."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5014
                {:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/current width thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2) borte (:rgb stripe1)
                height 273
                width 903
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            scarf-background
                            ;; Far left to mid
                            (create-path this "mid1" c1 "M121.3,55.8c0,0-19.9-1.9-46.4-16.3C64.5,34,34.6,15.3,34.6,15.3S52,18,64.7,25.8  C80.5,35.6,121.3,55.8,121.3,55.8z")
                            (create-path this "stripe1" borte "M144.2,57.5c0,0-18.9-1.8-45.5-16.1c-10.3-5.6-37.7-21.7-37.7-21.7s15.6,0.2,28.3,8  C105.2,37.5,144.2,57.5,144.2,57.5z")
                            (create-path this "mid1" c1 "m 189.59973,65.900534 c 0,0 -8.4912,-1.495361 -18.62594,-3.598765 C 164.7867,61.017674 156.90304,61.026876 152.68704,59.725517 141.32733,54.640237 93.1,26.1 93.1,26.1 c 0,0 45.3,3.7 52.6,11.7 6.2,6.7 43.89973,28.100534 43.89973,28.100534 z")
                            (create-path this "mid1" c1 "M212.3,68.8c0,0-16.3,1.1-46.1-18.8c-9.8-6.5-34.3-26.7-34.3-26.7s14.2-0.1,23,7.3  C170.4,43.5,212.3,68.8,212.3,68.8z")
                            (create-path this "stripe1" borte "M234,71.3c0,0-8.4,3.1-42.1-18.1c-9.9-6.3-34.1-24.7-34.1-24.7s18,2.3,24.4,7.3  C198.1,48.2,234,71.3,234,71.3z")
                            (create-path this "mid1" c1 "m 272.96594,79.380836 c 0,0 -27.33557,-2.71116 -41.70636,-13.290973 C 221.45958,59.589863 184.8,33.5 184.8,33.5 l 51,8.4 c 15.3,14.5 37.16594,37.480836 37.16594,37.480836 z")
                            ;; Far right to mid
                            (create-path this "mid1" c1 "M788.2,55.8c0,0,19.9-1.9,46.4-16.3c10.3-5.6,40.2-24.3,40.2-24.3s-17.4,2.7-30,10.5  C829,35.6,788.2,55.8,788.2,55.8z")
                            (create-path this "stripe1" borte "M765.2,57.5c0,0,18.9-1.8,45.5-16.1c10.3-5.6,37.7-21.7,37.7-21.7s-15.6,0.2-28.3,8  C804.3,37.5,765.2,57.5,765.2,57.5z")
                            (create-path this "mid1" c1 "m 725.16553,63.351127 c 0,0 30.06433,-3.296648 40.07218,-10.087795 C 775.53771,47.663332 816.4,26.1 816.4,26.1 l -45.8,6.5 c -16,13.4 -45.43447,30.751127 -45.43447,30.751127 z")
                            (create-path this "mid1" c1 "M697.2,68.8c0,0,16.3,1.1,46.1-18.8c9.8-6.5,34.3-26.7,34.3-26.7s-14.2-0.1-23,7.3  C739.1,43.5,697.2,68.8,697.2,68.8z")
                            (create-path this "stripe1" borte "M675.5,71.3c0,0,8.4,3.1,42.1-18.1c9.9-6.3,34.1-24.7,34.1-24.7s-18,2.3-24.4,7.3  C711.4,48.2,675.5,71.3,675.5,71.3z")
                            (create-path this "mid1" c1 "m 637.49225,79.228863 c 0,0 30.22875,-4.044421 42.60995,-14.961132 C 689.9022,57.767731 724.7,33.5 724.7,33.5 l -51,8.4 c -15.3,14.5 -36.20775,37.328863 -36.20775,37.328863 z")
                            ;; Mid
                            (create-path this "mid1" c1 "m 407.97852,191.25 h -19.10293 c 0,0 -146.75523,-146.04859 -156.57559,-156.35 l 20,2.5 c 4.49089,3.02478 155.67852,153.85 155.67852,153.85 z")
                            (create-path this "mid1" c1 "m 281.71001,40.952226 c 3.51941,1.18966 63.74512,11.320185 173.16387,11.052744 111.32071,-0.27209 173.2825,-10.575713 173.2825,-10.575713 L 477.99301,191.25 h -45.70386 c 0.1,0 -158.15362,-157.594574 -150.57914,-150.297774 z")
                            (create-path this "mid2" c2 "m 390.34813,192.74338 19.15362,0 45.49937,44.89917 45.11346,-44.89917 19.11276,0 -64.22622,65.26159 c 0.1,0 -64.65299,-65.26159 -64.65299,-65.26159 z")
                            (create-path this "mid2" c2 "m 433.94259,192.74338 42.40431,0 -21.54466,21.58885 c 0.1,0 -20.85965,-21.58885 -20.85965,-21.58885 z")
                            (create-path this "mid1" c1 "m 501.61492,191.25 h 19.10293 c 0,0 146.76179,-146.04859 156.58215,-156.35 l -20,2.5 c -4.49089,3.02478 -155.68508,153.85 -155.68508,153.85 z")
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill borte
                                              :points "652,38.2 454.8,235.9 258.2,37.9 276.8,40.1 454.8,215.9 632.1,40.6"}))))))
(def borte (om/factory Borte))

(defui Rand
  "Gerolltes Halstuch, zweifarbig, halbiert mit einfachem Rand."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5011
                {:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/current width thumbnail?]} (om/props this)
                c1 (:rgb mid1) c2 (:rgb mid2) stripe (:rgb stripe1)
                height 273
                width 903
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            scarf-background
                            ;; Far left to mid
                            (create-path this "stripe1" stripe "M121.3,55.8c0,0-19.9-1.9-46.4-16.3C64.5,34,34.6,15.3,34.6,15.3S52,18,64.7,25.8  C80.5,35.6,121.3,55.8,121.3,55.8z")
                            (create-path this "mid1" c1 "m 182.3967,63.472237 c 0,0 -1.60801,0.697152 -12.90852,-1.166977 -14.5476,-2.399768 -18.39909,1.021214 -42.24973,-6.618874 C 115.66479,51.324572 61,19.7 61,19.7 c 0,0 65.34951,9.252226 75.31393,11.499477 3.99973,3.059652 15.63504,11.922692 27.55681,20.24189 12.41108,8.660649 18.52596,12.03087 18.52596,12.03087 z")
                            (create-path this "stripe1" stripe "M212.3,68.8c0,0-16.3,1.1-46.1-18.8c-9.8-6.5-34.3-26.7-34.3-26.7s14.2-0.1,23,7.3  C170.4,43.5,212.3,68.8,212.3,68.8z")
                            (create-path this "mid1" c1 "m 271.61451,78.578186 c 0,0 -47.4793,-6.447328 -64.50486,-16.342036 C 197.30965,55.73615 157.8,28.5 157.8,28.5 l 77.03112,13.763332 c 15.3,14.5 36.78339,36.314854 36.78339,36.314854 z")
                            ;; Far right to mid
                            (create-path this "stripe1" stripe "M788.2,55.8c0,0,19.9-1.9,46.4-16.3c10.3-5.6,40.2-24.3,40.2-24.3s-17.4,2.7-30,10.5  C829,35.6,788.2,55.8,788.2,55.8z")
                            (create-path this "mid1" c1 "m 726.53722,63.074477 c 0,0 27.69462,-4.352646 54.38026,-6.235126 C 793.39747,51.602683 848.4,19.7 848.4,19.7 l -43.67213,6.6103 -31.38745,3.720558 c -13.5165,14.598933 -46.8032,33.043619 -46.8032,33.043619 z")
                            (create-path this "stripe1" stripe "M697.2,68.8c0,0,16.3,1.1,46.1-18.8c9.8-6.5,34.3-26.7,34.3-26.7s-14.2-0.1-23,7.3  C739.1,43.5,697.2,68.8,697.2,68.8z")
                            (create-path this "mid1" c1 "m 639.18884,78.010627 c 0,0 20.91272,-5.023388 53.2675,-9.951088 C 702.25634,61.559539 751.7,28.5 751.7,28.5 l -78,13.4 c -15.3,14.5 -34.51116,36.110627 -34.51116,36.110627 z")
                            ;; Mid
                            (create-path this "mid1" c1 "m 255.83834,37.657779 c 3.51941,1.18966 89.61679,14.614637 199.03554,14.347196 111.32071,-0.27209 199.32181,-13.874906 199.32181,-13.874906 l -153.40567,152.143561 -91.01186,0 c 0.1,0 -161.5143,-159.91265 -153.93982,-152.615851 z")
                            (create-path this "mid2" c2 "m 410.99219,191.68665 h 88.61718 l -44.8125,43.93835 z")
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill stripe
                                              :points "677.3,34.9 454.8,256.9 232.3,34.8 252.3,37.4 454.8,237.9 657.3,37.4"}))))))
(def randstreifen (om/factory Rand))
