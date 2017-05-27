(ns scarf.templates.rolled
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [scarf.templates.utils :as utils]))

(defn- create-path [this field fill d]
  (let [{:keys [thumbnail?]} (om/props this)
        field (keyword (str "scarf/" field))]
    (dom/path #js {:className "smooth highlight-stroke"
                   :onClick #(utils/colorize this thumbnail? field)
                   :fill fill
                   :d d})))

(def scarf-background
  (dom/path #js {:fill "#333"
                 :d "M124,19.3l106.8,17.9l-6-6.5c0,0,99.8,18.1,230,18.4C581,49.3,682.6,30.9,682.6,30.9l-2.2,5.4l105.2-17.4
	c0,0-7.5,7.7-5.2,7.5c50.3-3.7,109.4-18.5,109.4-18.5s-54.3,51.3-134.9,54.7c-38.9,1.6-122,20.3-122,20.3L455,259.5L276.8,82.9
	c0,0-100.8-19.3-116.5-19.5C76,62.3,19.7,8.2,19.7,8.2s42.2,11.7,112.2,18.6C134.5,27.1,124,19.3,124,19.3z"}))

;; ----------------------------------------------------------------------------
;; Dreieck, einfarbig, mit und ohne einfachem Rand / Borte

(defui DreieckOhneDekor
  "Gerolltes Halstuch, einfarbig, ohne Deko."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5000
                {:keys [scarf/mid1 scarf/current width thumbnail?]} (om/props this)
                cmid1 (:rgb mid1)
                height 273
                width 903
                scale (utils/scale-to-width thumbnail? width)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            scarf-background
                            ;; Far left to mid
                            (create-path this "mid1" cmid1 "M 183.63808,63.775013 C 165.1497,61.289652 165.47846,60.442145 144.33546,59.830383 128.65298,59.376618 95.865788,49.648866 84.475471,44.906209 62.586204,35.792037 39.464242,18.677087 34.6,15.3 c 0,0 25.586664,4.179798 52.246487,8.758225 C 113.88355,28.701437 142.02436,33.771899 145.7,37.8 c 6.2,6.7 37.93808,25.975013 37.93808,25.975013 z")
                            (create-path this "mid1" cmid1 "M 271.0819,78.867008 C 236.20165,69.106236 203.68766,68.294059 193.5435,64.421817 169.16003,55.114128 143.5919,30.263932 131.9,23.3 l 103.9,18.6 c 15.3,14.5 35.2819,36.967008 35.2819,36.967008 z")
                            ;; Far right to mid
                            (create-path this "mid1" cmid1 "m 726.7085,62.560649 c 13.89633,-2.675043 56.79118,-3.382898 84.32746,-13.64481 C 855.52047,32.33785 866.49738,23.076885 874.8,15.2 l -60.55663,10.241192 -42.44444,5.702961 c -16,13.4 -45.09043,31.416496 -45.09043,31.416496 z")
                            (create-path this "mid1" cmid1 "M 638.67501,78.438818 C 659.10506,72.153413 698.55354,67.808271 716.87959,62.338281 731.56526,57.954877 762.64347,30.547869 777.6,23.3 L 676.61169,39.330858 c -15.3,14.5 -37.93668,39.10796 -37.93668,39.10796 z")
                            ;; Mid
                            (create-path this "mid1" cmid1 "m 232.3,34.8 c 3.51941,1.18966 113.15513,17.472415 222.57388,17.204974 C 566.19459,51.732884 677.3,34.9 677.3,34.9 L 454.90942,256.26417 c 0.1,0 -230.1839,-228.760969 -222.60942,-221.46417 z"))))))
(def ohne-dekor (om/factory DreieckOhneDekor))

(defui DreieckBorteEinfach
  "Gerolltes Halstuch, einfarbig, mit einfacher Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5001
                {:keys [scarf/mid1 scarf/stripe1 scarf/current width thumbnail?]} (om/props this)
                cmid1 (:rgb mid1) borte (:rgb stripe1)
                height 273
                width 903
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            scarf-background
                            ;; Far left to mid
                            (create-path this "mid1" cmid1 "M121.3,55.8c0,0-19.9-1.9-46.4-16.3C64.5,34,34.6,15.3,34.6,15.3S52,18,64.7,25.8  C80.5,35.6,121.3,55.8,121.3,55.8z")
                            (create-path this "stripe1" borte "M144.2,57.5c0,0-18.9-1.8-45.5-16.1c-10.3-5.6-37.7-21.7-37.7-21.7s15.6,0.2,28.3,8  C105.2,37.5,144.2,57.5,144.2,57.5z")
                            (create-path this "mid1" cmid1 "m 189.59973,65.900534 c 0,0 -8.4912,-1.495361 -18.62594,-3.598765 C 164.7867,61.017674 156.90304,61.026876 152.68704,59.725517 141.32733,54.640237 93.1,26.1 93.1,26.1 c 0,0 45.3,3.7 52.6,11.7 6.2,6.7 43.89973,28.100534 43.89973,28.100534 z")
                            (create-path this "mid1" cmid1 "M212.3,68.8c0,0-16.3,1.1-46.1-18.8c-9.8-6.5-34.3-26.7-34.3-26.7s14.2-0.1,23,7.3  C170.4,43.5,212.3,68.8,212.3,68.8z")
                            (create-path this "stripe1" borte "M234,71.3c0,0-8.4,3.1-42.1-18.1c-9.9-6.3-34.1-24.7-34.1-24.7s18,2.3,24.4,7.3  C198.1,48.2,234,71.3,234,71.3z")
                            (create-path this "mid1" cmid1 "m 272.96594,79.380836 c 0,0 -27.33557,-2.71116 -41.70636,-13.290973 C 221.45958,59.589863 184.8,33.5 184.8,33.5 l 51,8.4 c 15.3,14.5 37.16594,37.480836 37.16594,37.480836 z")
                            ;; Far right to mid
                            (create-path this "mid1" cmid1 "M788.2,55.8c0,0,19.9-1.9,46.4-16.3c10.3-5.6,40.2-24.3,40.2-24.3s-17.4,2.7-30,10.5  C829,35.6,788.2,55.8,788.2,55.8z")
                            (create-path this "stripe1" borte "M765.2,57.5c0,0,18.9-1.8,45.5-16.1c10.3-5.6,37.7-21.7,37.7-21.7s-15.6,0.2-28.3,8  C804.3,37.5,765.2,57.5,765.2,57.5z")
                            (create-path this "mid1" cmid1 "m 725.16553,63.351127 c 0,0 30.06433,-3.296648 40.07218,-10.087795 C 775.53771,47.663332 816.4,26.1 816.4,26.1 l -45.8,6.5 c -16,13.4 -45.43447,30.751127 -45.43447,30.751127 z")
                            (create-path this "mid1" cmid1 "M697.2,68.8c0,0,16.3,1.1,46.1-18.8c9.8-6.5,34.3-26.7,34.3-26.7s-14.2-0.1-23,7.3  C739.1,43.5,697.2,68.8,697.2,68.8z")
                            (create-path this "stripe1" borte "M675.5,71.3c0,0,8.4,3.1,42.1-18.1c9.9-6.3,34.1-24.7,34.1-24.7s-18,2.3-24.4,7.3  C711.4,48.2,675.5,71.3,675.5,71.3z")
                            (create-path this "mid1" cmid1 "m 637.49225,79.228863 c 0,0 30.22875,-4.044421 42.60995,-14.961132 C 689.9022,57.767731 724.7,33.5 724.7,33.5 l -51,8.4 c -15.3,14.5 -36.20775,37.328863 -36.20775,37.328863 z")
                            ;; Mid
                            (create-path this "mid1" cmid1 "m 281.71001,40.952226 c 3.01296,1.787772 88.95741,11.348968 172.93973,11.160864 86.50863,-0.193763 173.50664,-10.683833 173.50664,-10.683833 L 454.7,213.8 c 0.1,0 -181.08334,-178.969984 -172.98999,-172.847774 z")
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill borte
                                              :points "652,38.2 454.8,235.9 258.2,37.9 276.8,40.1 454.8,215.9 632.1,40.6"})
                            (dom/polygon #js {:onClick #(colorize :scarf/mid1)
                                              :fill cmid1
                                              :points "677.3,34.9 454.8,256.9 232.3,34.8 252.3,37.4 454.8,237.9 657.3,37.4"}))))))
(def einfache-borte (om/factory DreieckBorteEinfach))

(defui DreieckRandEinfach
  "Gerolltes Halstuch, einfarbig, mit einfachem Rand."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5002
                {:keys [scarf/mid1 scarf/stripe1 scarf/current width thumbnail?]} (om/props this)
                cmid1 (:rgb mid1) stripe (:rgb stripe1)
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
                            (create-path this "mid1" cmid1 "m 182.3967,63.472237 c 0,0 -1.60801,0.697152 -12.90852,-1.166977 -14.5476,-2.399768 -18.39909,1.021214 -42.24973,-6.618874 C 115.66479,51.324572 61,19.7 61,19.7 c 0,0 65.34951,9.252226 75.31393,11.499477 3.99973,3.059652 15.63504,11.922692 27.55681,20.24189 12.41108,8.660649 18.52596,12.03087 18.52596,12.03087 z")
                            (create-path this "stripe1" stripe "M212.3,68.8c0,0-16.3,1.1-46.1-18.8c-9.8-6.5-34.3-26.7-34.3-26.7s14.2-0.1,23,7.3  C170.4,43.5,212.3,68.8,212.3,68.8z")
                            (create-path this "mid1" cmid1 "m 271.61451,78.578186 c 0,0 -47.4793,-6.447328 -64.50486,-16.342036 C 197.30965,55.73615 157.8,28.5 157.8,28.5 l 77.03112,13.763332 c 15.3,14.5 36.78339,36.314854 36.78339,36.314854 z")
                            ;; Far right to mid
                            (create-path this "stripe1" stripe "M788.2,55.8c0,0,19.9-1.9,46.4-16.3c10.3-5.6,40.2-24.3,40.2-24.3s-17.4,2.7-30,10.5  C829,35.6,788.2,55.8,788.2,55.8z")
                            (create-path this "mid1" cmid1 "m 726.53722,63.074477 c 0,0 27.69462,-4.352646 54.38026,-6.235126 C 793.39747,51.602683 848.4,19.7 848.4,19.7 l -43.67213,6.6103 -31.38745,3.720558 c -13.5165,14.598933 -46.8032,33.043619 -46.8032,33.043619 z")
                            (create-path this "stripe1" stripe "M697.2,68.8c0,0,16.3,1.1,46.1-18.8c9.8-6.5,34.3-26.7,34.3-26.7s-14.2-0.1-23,7.3  C739.1,43.5,697.2,68.8,697.2,68.8z")
                            (create-path this "mid1" cmid1 "m 639.18884,78.010627 c 0,0 20.91272,-5.023388 53.2675,-9.951088 C 702.25634,61.559539 751.7,28.5 751.7,28.5 l -78,13.4 c -15.3,14.5 -34.51116,36.110627 -34.51116,36.110627 z")
                            ;; Mid
                            (create-path this "mid1" cmid1 "m 258.2,37.9 c 64.88976,8.596357 131.10978,11.656623 196.44452,12.221803 67.66361,0.585325 135.10919,-6.404802 199.55117,-11.991734 L 454.8,235.9 C 450.78224,230.32892 247.2,34.2 258.2,37.9 Z")
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill stripe
                                              :points "677.3,34.9 454.8,256.9 232.3,34.8 252.3,37.4 454.8,237.9 657.3,37.4"}))))))
(def einfacher-rand (om/factory DreieckRandEinfach))


;; -----------------------------------------------------------------------------
;; Category: Double stripes

(defui DreieckigEinfarbigDoppelrand
  "Gerolltes Halstuch, dreieckig, einfarbig, mit doppeltem Rand."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5004
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 scarf/current width thumbnail?]} (om/props this)
                cmid1 (:rgb mid1) s1 (:rgb stripe1) s2 (:rgb stripe2)
                height 273
                width 903
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            scarf-background
                            ;; Far left to mid
                            (create-path this "stripe2" s2 "M121.3,55.8c0,0-19.9-1.9-46.4-16.3C64.5,34,34.6,15.3,34.6,15.3S52,18,64.7,25.8  C80.5,35.6,121.3,55.8,121.3,55.8z")
                            (create-path this "stripe1" s1 "M144.2,57.5c0,0-18.9-1.8-45.5-16.1c-10.3-5.6-37.7-21.7-37.7-21.7s15.6,0.2,28.3,8  C105.2,37.5,144.2,57.5,144.2,57.5z")
                            (create-path this "mid1" cmid1 "m 189.59973,65.900534 c 0,0 -8.4912,-1.495361 -18.62594,-3.598765 C 164.7867,61.017674 156.90304,61.026876 152.68704,59.725517 141.32733,54.640237 93.1,26.1 93.1,26.1 c 0,0 45.3,3.7 52.6,11.7 6.2,6.7 43.89973,28.100534 43.89973,28.100534 z")
                            (create-path this "stripe2" s2 "M212.3,68.8c0,0-16.3,1.1-46.1-18.8c-9.8-6.5-34.3-26.7-34.3-26.7s14.2-0.1,23,7.3  C170.4,43.5,212.3,68.8,212.3,68.8z")
                            (create-path this "stripe1" s1 "M234,71.3c0,0-8.4,3.1-42.1-18.1c-9.9-6.3-34.1-24.7-34.1-24.7s18,2.3,24.4,7.3  C198.1,48.2,234,71.3,234,71.3z")
                            (create-path this "mid1" cmid1 "m 272.96594,79.380836 c 0,0 -27.33557,-2.71116 -41.70636,-13.290973 C 221.45958,59.589863 184.8,33.5 184.8,33.5 l 51,8.4 c 15.3,14.5 37.16594,37.480836 37.16594,37.480836 z")
                            ;; Far right to mid
                            (create-path this "stripe2" s2 "M788.2,55.8c0,0,19.9-1.9,46.4-16.3c10.3-5.6,40.2-24.3,40.2-24.3s-17.4,2.7-30,10.5  C829,35.6,788.2,55.8,788.2,55.8z")
                            (create-path this "stripe1" s1 "M765.2,57.5c0,0,18.9-1.8,45.5-16.1c10.3-5.6,37.7-21.7,37.7-21.7s-15.6,0.2-28.3,8  C804.3,37.5,765.2,57.5,765.2,57.5z")
                            (create-path this "mid1" cmid1 "m 725.16553,63.351127 c 0,0 30.06433,-3.296648 40.07218,-10.087795 C 775.53771,47.663332 816.4,26.1 816.4,26.1 l -45.8,6.5 c -16,13.4 -45.43447,30.751127 -45.43447,30.751127 z")
                            (create-path this "stripe2" s2 "M697.2,68.8c0,0,16.3,1.1,46.1-18.8c9.8-6.5,34.3-26.7,34.3-26.7s-14.2-0.1-23,7.3  C739.1,43.5,697.2,68.8,697.2,68.8z")
                            (create-path this "stripe1" s1 "M675.5,71.3c0,0,8.4,3.1,42.1-18.1c9.9-6.3,34.1-24.7,34.1-24.7s-18,2.3-24.4,7.3  C711.4,48.2,675.5,71.3,675.5,71.3z")
                            (create-path this "mid1" cmid1 "m 637.49225,79.228863 c 0,0 30.22875,-4.044421 42.60995,-14.961132 C 689.9022,57.767731 724.7,33.5 724.7,33.5 l -51,8.4 c -15.3,14.5 -36.20775,37.328863 -36.20775,37.328863 z")
                            ;; Mid
                            (create-path this "mid1" cmid1 "m 281.71001,40.952226 c 3.01296,1.787772 88.95741,11.348968 172.93973,11.160864 86.50863,-0.193763 173.50664,-10.683833 173.50664,-10.683833 L 454.7,213.8 c 0.1,0 -181.08334,-178.969984 -172.98999,-172.847774 z")
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "652,38.2 454.8,235.9 258.2,37.9 276.8,40.1 454.8,215.9 632.1,40.6"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill s2
                                              :points "677.3,34.9 454.8,256.9 232.3,34.8 252.3,37.4 454.8,237.9 657.3,37.4"}))))))
(def einfarbig-doppelrand (om/factory DreieckigEinfarbigDoppelrand))

(defui DreieckigEinfarbigDoppelborte
  "Gerolltes Halstuch, dreieckig, einfarbig, mit doppelter Borte."
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/stripe1 :scarf/stripe2 :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 5006
                {:keys [scarf/mid1 scarf/stripe1 scarf/stripe2 scarf/current width thumbnail?]} (om/props this)
                cmid1 (:rgb mid1) s1 (:rgb stripe1) s2 (:rgb stripe2)
                height 273
                width 903
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            scarf-background
                            ;; Far left to mid
                            (create-path this "mid1" cmid1 "M121.3,55.8c0,0-19.9-1.9-46.4-16.3C64.5,34,34.6,15.3,34.6,15.3S52,18,64.7,25.8  C80.5,35.6,121.3,55.8,121.3,55.8z")
                            (create-path this "stripe2" s2 "M144.2,57.5c0,0-18.9-1.8-45.5-16.1c-10.3-5.6-37.7-21.7-37.7-21.7s15.6,0.2,28.3,8  C105.2,37.5,144.2,57.5,144.2,57.5z")
                            (create-path this "stripe1" s1 "M169.8,62.8c0,0-12.5-0.7-39-15c-10.3-5.6-37.7-21.7-37.7-21.7l21.1,2.8C130.2,39.8,169.8,62.8,169.8,62.8z")
                            (create-path this "mid1" cmid1 "M189.3,66.5c0,0-5.6,0.7-32.2-13.6c-10.3-5.6-37.9-23.6-37.9-23.6s19.2,0.5,26.5,8.5  C151.9,44.5,189.3,66.5,189.3,66.5z")
                            (create-path this "mid1" cmid1 "M212.3,68.8c0,0-16.3,1.1-46.1-18.8c-9.8-6.5-34.3-26.7-34.3-26.7s14.2-0.1,23,7.3  C170.4,43.5,212.3,68.8,212.3,68.8z")
                            (create-path this "stripe2" s2 "M234,71.3c0,0-8.4,3.1-42.1-18.1c-9.9-6.3-34.1-24.7-34.1-24.7s18,2.3,24.4,7.3  C198.1,48.2,234,71.3,234,71.3z")
                            (create-path this "stripe1" s1 "M265.2,77.6c-0.2,1-18.5-0.1-48.3-20c-9.8-6.5-32.1-24.1-32.1-24.1s16.6,0.5,25.4,7.8  C225.6,54.2,265.5,76,265.2,77.6z")
                            (create-path this "mid1" cmid1 "M266.8,73.9c0,0-3.1,0.8-32.8-19.2c-9.8-6.5-23.2-17.3-23.2-17.3l25,4.5C251.1,56.4,266.8,73.9,266.8,73.9z")
                            ;; Far right to mid
                            (create-path this "mid1" cmid1 "M788.2,55.8c0,0,19.9-1.9,46.4-16.3c10.3-5.6,40.2-24.3,40.2-24.3s-17.4,2.7-30,10.5  C829,35.6,788.2,55.8,788.2,55.8z")
                            (create-path this "stripe2" s2 "M765.2,57.5c0,0,18.9-1.8,45.5-16.1c10.3-5.6,37.7-21.7,37.7-21.7s-15.6,0.2-28.3,8  C804.3,37.5,765.2,57.5,765.2,57.5z")
                            (create-path this "stripe1" s1 "M739.7,62.8c0,0,12.5-0.7,39-15c10.3-5.6,37.7-21.7,37.7-21.7l-21.1,2.8C779.3,39.8,739.7,62.8,739.7,62.8z")
                            (create-path this "mid1" cmid1 "m 725.2,64.375318 c 0,0 5.20057,0.660019 29.90328,-12.823235 C 764.66862,46.271928 790.3,29.3 790.3,29.3 l -18.29486,3.11152 C 757.14636,45.046178 725.2,64.375318 725.2,64.375318 Z")
                            (create-path this "mid1" cmid1 "M697.2,68.8c0,0,16.3,1.1,46.1-18.8c9.8-6.5,34.3-26.7,34.3-26.7s-14.2-0.1-23,7.3  C739.1,43.5,697.2,68.8,697.2,68.8z")
                            (create-path this "stripe2" s2 "M675.5,71.3c0,0,8.4,3.1,42.1-18.1c9.9-6.3,34.1-24.7,34.1-24.7s-18,2.3-24.4,7.3  C711.4,48.2,675.5,71.3,675.5,71.3z")
                            (create-path this "stripe1" s1 "M644.3,77.6c0.2,1,18.5-0.1,48.3-20c9.8-6.5,32.1-24.1,32.1-24.1s-16.6,0.5-25.4,7.8  C683.9,54.2,644,76,644.3,77.6z")
                            (create-path this "mid1" cmid1 "M642.7,73.9c0,0,3.1,0.8,32.8-19.2c9.8-6.5,23.2-17.3,23.2-17.3l-25,4.5C658.4,56.4,642.7,73.9,642.7,73.9z")
                            ;; Mid
                            (create-path this "mid1" cmid1 "m 607.2902,42.881995 c -3.32543,1.12409 -36.71397,3.997903 -71.46271,5.796011 -13.38845,0.692799 -45.25104,2.415108 -80.58918,2.368153 -10.74912,-0.01428 -45.96775,-0.897697 -79.16494,-2.635088 -37.83471,-1.980098 -72.52543,-4.219862 -72.52543,-4.219862 L 455.74319,193.59766 c 3.3e-4,0 151.54701,-150.715665 151.54701,-150.715665 z")
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s1
                                              :points "627.3,42.2 454.7,213.8 282.8,41.8 300.8,44 455.4,196.4 610.3,43.5"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill s2
                                              :points "652,38.2 454.8,235.9 258.2,37.9 276.8,40.1 454.8,215.9 632.1,40.6"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill cmid1
                                              :points "677.3,34.9 454.8,256.9 232.3,34.8 252.3,37.4 454.8,237.9 657.3,37.4"}))))))
(def einfarbig-doppelborte (om/factory DreieckigEinfarbigDoppelborte))


;; -----------------------------------------------------------------------------
;; Halbierte Halstücher

(defui DreiStreifenHalbiert
  "Rolled triangle, three outer stripes and a vertical line in the middle.
   Original size: 903x273 px.
   ID: 2"
  static om/IQuery
  (query [this]
         [:scarf/mid1 :scarf/mid2 :scarf/stripe1 :scarf/stripe2 :scarf/stripe3
          :scarf/current :color/selected])
  Object
  (render [this]
          (let [id 2
                {:keys [scarf/mid1 scarf/mid2 scarf/stripe1 scarf/stripe2 scarf/stripe3
                        scarf/current width thumbnail?]} (om/props this)
                cmid1 (:rgb mid1) cmid2 (:rgb mid2) cstripe1 (:rgb stripe1)
                cstripe2 (:rgb stripe2) cstripe3 (:rgb stripe3)
                height 273
                width 903
                scale (utils/scale-to-width thumbnail? width)
                colorize #(utils/colorize this thumbnail? %)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            scarf-background
                            ;; Far left to mid
                            (create-path this "stripe1" cstripe1 "M121.3,55.8c0,0-19.9-1.9-46.4-16.3C64.5,34,34.6,15.3,34.6,15.3S52,18,64.7,25.8
	C80.5,35.6,121.3,55.8,121.3,55.8z")
                            (create-path this "stripe2" cstripe2 "M144.2,57.5c0,0-18.9-1.8-45.5-16.1c-10.3-5.6-37.7-21.7-37.7-21.7s15.6,0.2,28.3,8
	C105.2,37.5,144.2,57.5,144.2,57.5z")
                            (create-path this "stripe3" cstripe3 "M169.8,62.8c0,0-12.5-0.7-39-15c-10.3-5.6-37.7-21.7-37.7-21.7l21.1,2.8C130.2,39.8,169.8,62.8,169.8,62.8z")
                            (create-path this "mid1" cmid1 "M189.3,66.5c0,0-5.6,0.7-32.2-13.6c-10.3-5.6-37.9-23.6-37.9-23.6s19.2,0.5,26.5,8.5
	C151.9,44.5,189.3,66.5,189.3,66.5z")
                            (create-path this "stripe1" cstripe1 "M212.3,68.8c0,0-16.3,1.1-46.1-18.8c-9.8-6.5-34.3-26.7-34.3-26.7s14.2-0.1,23,7.3
	C170.4,43.5,212.3,68.8,212.3,68.8z")
                            (create-path this "stripe2" cstripe2 "M234,71.3c0,0-8.4,3.1-42.1-18.1c-9.9-6.3-34.1-24.7-34.1-24.7s18,2.3,24.4,7.3
	C198.1,48.2,234,71.3,234,71.3z")
                            (create-path this "stripe3" cstripe3 "M265.2,77.6c-0.2,1-18.5-0.1-48.3-20c-9.8-6.5-32.1-24.1-32.1-24.1s16.6,0.5,25.4,7.8
	C225.6,54.2,265.5,76,265.2,77.6z")
                            (create-path this "mid1" cmid1 "M266.8,73.9c0,0-3.1,0.8-32.8-19.2c-9.8-6.5-23.2-17.3-23.2-17.3l25,4.5C251.1,56.4,266.8,73.9,266.8,73.9z")
                            ;; Far right to mid
                            (create-path this "stripe1" cstripe1 "M788.2,55.8c0,0,19.9-1.9,46.4-16.3c10.3-5.6,40.2-24.3,40.2-24.3s-17.4,2.7-30,10.5
	C829,35.6,788.2,55.8,788.2,55.8z")
                            (create-path this "stripe2" cstripe2 "M765.2,57.5c0,0,18.9-1.8,45.5-16.1c10.3-5.6,37.7-21.7,37.7-21.7s-15.6,0.2-28.3,8
	C804.3,37.5,765.2,57.5,765.2,57.5z")
                            (create-path this "stripe3" cstripe3 "M739.7,62.8c0,0,12.5-0.7,39-15c10.3-5.6,37.7-21.7,37.7-21.7l-21.1,2.8C779.3,39.8,739.7,62.8,739.7,62.8z")
                            (create-path this "mid2" cmid2 "M720.2,66.5c0,0,5.6,0.7,32.2-13.6c10.3-5.6,37.9-23.6,37.9-23.6l-19.7,3.3C754.6,46,720.2,66.5,720.2,66.5z")
                            (create-path this "stripe1" cstripe1 "M697.2,68.8c0,0,16.3,1.1,46.1-18.8c9.8-6.5,34.3-26.7,34.3-26.7s-14.2-0.1-23,7.3
	C739.1,43.5,697.2,68.8,697.2,68.8z")
                            (create-path this "stripe2" cstripe2 "M675.5,71.3c0,0,8.4,3.1,42.1-18.1c9.9-6.3,34.1-24.7,34.1-24.7s-18,2.3-24.4,7.3
	C711.4,48.2,675.5,71.3,675.5,71.3z")
                            (create-path this "stripe3" cstripe3 "M644.3,77.6c0.2,1,18.5-0.1,48.3-20c9.8-6.5,32.1-24.1,32.1-24.1s-16.6,0.5-25.4,7.8
	C683.9,54.2,644,76,644.3,77.6z")
                            (create-path this "mid2" cmid2 "M642.7,73.9c0,0,3.1,0.8,32.8-19.2c9.8-6.5,23.2-17.3,23.2-17.3l-25,4.5C658.4,56.4,642.7,73.9,642.7,73.9z")
                            ;; Mid-left
                            (create-path this "mid1" cmid1 "M309.8,44.3c7.1,2.4,144.2,8,144.2,8v139.6C454.1,191.9,298.8,40.6,309.8,44.3z")
                            ;; Mid-right
                            (create-path this "mid2" cmid2 "M599.5,44.3c-7.1,2.4-144.2,8-144.2,8v139.6C455.3,191.9,610.6,40.6,599.5,44.3z")
                            ;; Outer to inner stripes
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe1)
                                              :fill cstripe1
                                              :points "677.3,34.9 454.8,256.9 232.3,34.8 252.3,37.4 454.8,237.9 657.3,37.4"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe2)
                                              :fill cstripe2
                                              :points "652,38.2 454.8,235.9 258.2,37.9 276.8,40.1 454.8,215.9 632.1,40.6"})
                            (dom/polygon #js {:onClick #(colorize :scarf/stripe3)
                                              :fill cstripe3
                                              :points "627.3,42.2 454.7,213.8 282.8,41.8 300.8,44 455.4,196.4 610.3,43.5"}))))))
(def drei-streifen-mitte-halbiert (om/factory DreiStreifenHalbiert))
