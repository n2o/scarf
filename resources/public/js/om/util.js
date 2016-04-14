// Compiled by ClojureScript 1.8.40 {}
goog.provide('om.util');
goog.require('cljs.core');
om.util.force_children = (function om$util$force_children(x){
var G__19891 = x;
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om$util$force_children),G__19891);
} else {
return G__19891;
}
});

//# sourceMappingURL=util.js.map