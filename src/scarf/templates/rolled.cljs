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

;; ----------------------------------------------------------------------------
;; Dreieck, einfarbig, mit und ohne einfachem Rand / Borte
(defui DreieckOhneDekor
  "Gerolltes Halstuch, einfarbig, ohne Deko.
   Original size: 903x273 px.
   ID: 5000"
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
                            (dom/path #js {:fill "#333"
                                           :d "M124,19.3l106.8,17.9l-6-6.5c0,0,99.8,18.1,230,18.4C581,49.3,682.6,30.9,682.6,30.9l-2.2,5.4l105.2-17.4
	c0,0-7.5,7.7-5.2,7.5c50.3-3.7,109.4-18.5,109.4-18.5s-54.3,51.3-134.9,54.7c-38.9,1.6-122,20.3-122,20.3L455,259.5L276.8,82.9
	c0,0-100.8-19.3-116.5-19.5C76,62.3,19.7,8.2,19.7,8.2s42.2,11.7,112.2,18.6C134.5,27.1,124,19.3,124,19.3z"})
                            ;; Far left to mid
                            (create-path this "mid1" cmid1 "M 183.63808,63.775013 C 165.1497,61.289652 165.47846,60.442145 144.33546,59.830383 128.65298,59.376618 95.865788,49.648866 84.475471,44.906209 62.586204,35.792037 39.464242,18.677087 34.6,15.3 c 0,0 25.586664,4.179798 52.246487,8.758225 C 113.88355,28.701437 142.02436,33.771899 145.7,37.8 c 6.2,6.7 37.93808,25.975013 37.93808,25.975013 z")
                            (create-path this "mid1" cmid1 "M 271.0819,78.867008 C 236.20165,69.106236 203.68766,68.294059 193.5435,64.421817 169.16003,55.114128 143.5919,30.263932 131.9,23.3 l 103.9,18.6 c 15.3,14.5 35.2819,36.967008 35.2819,36.967008 z")
                            ;; Far right to mid
                            (create-path this "mid1" cmid1 "m 726.7085,62.560649 c 13.89633,-2.675043 56.79118,-3.382898 84.32746,-13.64481 C 855.52047,32.33785 866.49738,23.076885 874.8,15.2 l -60.55663,10.241192 -42.44444,5.702961 c -16,13.4 -45.09043,31.416496 -45.09043,31.416496 z")
                            (create-path this "mid1" cmid1 "M 638.67501,78.438818 C 659.10506,72.153413 698.55354,67.808271 716.87959,62.338281 731.56526,57.954877 762.64347,30.547869 777.6,23.3 L 676.61169,39.330858 c -15.3,14.5 -37.93668,39.10796 -37.93668,39.10796 z")
                            ;; Mid
                            (create-path this "mid1" cmid1 "m 232.3,34.8 c 3.51941,1.18966 113.15513,17.472415 222.57388,17.204974 C 566.19459,51.732884 677.3,34.9 677.3,34.9 L 454.90942,256.26417 c 0.1,0 -230.1839,-228.760969 -222.60942,-221.46417 z"))))))
(def ohne-dekor (om/factory DreieckOhneDekor))


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
                scale (utils/scale-to-width thumbnail? width)]
            (dom/svg (utils/svg-options this id scale width height thumbnail?)
                     (dom/g #js {:transform (str "scale(" scale ")")}
                            ;; Background
                            (dom/path #js {:fill "#333"
                                           :d "M124,19.3l106.8,17.9l-6-6.5c0,0,99.8,18.1,230,18.4C581,49.3,682.6,30.9,682.6,30.9l-2.2,5.4l105.2-17.4
	c0,0-7.5,7.7-5.2,7.5c50.3-3.7,109.4-18.5,109.4-18.5s-54.3,51.3-134.9,54.7c-38.9,1.6-122,20.3-122,20.3L455,259.5L276.8,82.9
	c0,0-100.8-19.3-116.5-19.5C76,62.3,19.7,8.2,19.7,8.2s42.2,11.7,112.2,18.6C134.5,27.1,124,19.3,124,19.3z"})
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
                            (dom/polygon #js {:onClick #(utils/colorize this thumbnail? :scarf/stripe1)
                                              :fill cstripe1
                                              :points "677.3,34.9 454.8,256.9 232.3,34.8 252.3,37.4 454.8,237.9 657.3,37.4"})
                            (dom/polygon #js {:onClick #(utils/colorize this thumbnail? :scarf/stripe2)
                                              :fill cstripe2
                                              :points "652,38.2 454.8,235.9 258.2,37.9 276.8,40.1 454.8,215.9 632.1,40.6"})
                            (dom/polygon #js {:onClick #(utils/colorize this thumbnail? :scarf/stripe3)
                                              :fill cstripe3
                                              :points "627.3,42.2 454.7,213.8 282.8,41.8 300.8,44 455.4,196.4 610.3,43.5"}))))))
(def drei-streifen-mitte-halbiert (om/factory DreiStreifenHalbiert))
