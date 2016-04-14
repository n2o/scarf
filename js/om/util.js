// Compiled by ClojureScript 1.8.34 {}
goog.provide('om.util');
goog.require('cljs.core');
om.util.force_children = (function om$util$force_children(x){
var G__19909 = x;
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om$util$force_children),G__19909);
} else {
return G__19909;
}
});

//# sourceMappingURL=util.js.map