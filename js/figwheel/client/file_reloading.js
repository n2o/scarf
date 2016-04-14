// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18398__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18398__auto__){
return or__18398__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18398__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26374_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26374_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26379 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26380 = null;
var count__26381 = (0);
var i__26382 = (0);
while(true){
if((i__26382 < count__26381)){
var n = cljs.core._nth.call(null,chunk__26380,i__26382);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26383 = seq__26379;
var G__26384 = chunk__26380;
var G__26385 = count__26381;
var G__26386 = (i__26382 + (1));
seq__26379 = G__26383;
chunk__26380 = G__26384;
count__26381 = G__26385;
i__26382 = G__26386;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26379);
if(temp__4657__auto__){
var seq__26379__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26379__$1)){
var c__19209__auto__ = cljs.core.chunk_first.call(null,seq__26379__$1);
var G__26387 = cljs.core.chunk_rest.call(null,seq__26379__$1);
var G__26388 = c__19209__auto__;
var G__26389 = cljs.core.count.call(null,c__19209__auto__);
var G__26390 = (0);
seq__26379 = G__26387;
chunk__26380 = G__26388;
count__26381 = G__26389;
i__26382 = G__26390;
continue;
} else {
var n = cljs.core.first.call(null,seq__26379__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26391 = cljs.core.next.call(null,seq__26379__$1);
var G__26392 = null;
var G__26393 = (0);
var G__26394 = (0);
seq__26379 = G__26391;
chunk__26380 = G__26392;
count__26381 = G__26393;
i__26382 = G__26394;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26433_26440 = cljs.core.seq.call(null,deps);
var chunk__26434_26441 = null;
var count__26435_26442 = (0);
var i__26436_26443 = (0);
while(true){
if((i__26436_26443 < count__26435_26442)){
var dep_26444 = cljs.core._nth.call(null,chunk__26434_26441,i__26436_26443);
topo_sort_helper_STAR_.call(null,dep_26444,(depth + (1)),state);

var G__26445 = seq__26433_26440;
var G__26446 = chunk__26434_26441;
var G__26447 = count__26435_26442;
var G__26448 = (i__26436_26443 + (1));
seq__26433_26440 = G__26445;
chunk__26434_26441 = G__26446;
count__26435_26442 = G__26447;
i__26436_26443 = G__26448;
continue;
} else {
var temp__4657__auto___26449 = cljs.core.seq.call(null,seq__26433_26440);
if(temp__4657__auto___26449){
var seq__26433_26450__$1 = temp__4657__auto___26449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26433_26450__$1)){
var c__19209__auto___26451 = cljs.core.chunk_first.call(null,seq__26433_26450__$1);
var G__26452 = cljs.core.chunk_rest.call(null,seq__26433_26450__$1);
var G__26453 = c__19209__auto___26451;
var G__26454 = cljs.core.count.call(null,c__19209__auto___26451);
var G__26455 = (0);
seq__26433_26440 = G__26452;
chunk__26434_26441 = G__26453;
count__26435_26442 = G__26454;
i__26436_26443 = G__26455;
continue;
} else {
var dep_26456 = cljs.core.first.call(null,seq__26433_26450__$1);
topo_sort_helper_STAR_.call(null,dep_26456,(depth + (1)),state);

var G__26457 = cljs.core.next.call(null,seq__26433_26450__$1);
var G__26458 = null;
var G__26459 = (0);
var G__26460 = (0);
seq__26433_26440 = G__26457;
chunk__26434_26441 = G__26458;
count__26435_26442 = G__26459;
i__26436_26443 = G__26460;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26437){
var vec__26439 = p__26437;
var x = cljs.core.nth.call(null,vec__26439,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26439,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26439,x,xs,get_deps__$1){
return (function (p1__26395_SHARP_){
return clojure.set.difference.call(null,p1__26395_SHARP_,x);
});})(vec__26439,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26473 = cljs.core.seq.call(null,provides);
var chunk__26474 = null;
var count__26475 = (0);
var i__26476 = (0);
while(true){
if((i__26476 < count__26475)){
var prov = cljs.core._nth.call(null,chunk__26474,i__26476);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26477_26485 = cljs.core.seq.call(null,requires);
var chunk__26478_26486 = null;
var count__26479_26487 = (0);
var i__26480_26488 = (0);
while(true){
if((i__26480_26488 < count__26479_26487)){
var req_26489 = cljs.core._nth.call(null,chunk__26478_26486,i__26480_26488);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26489,prov);

var G__26490 = seq__26477_26485;
var G__26491 = chunk__26478_26486;
var G__26492 = count__26479_26487;
var G__26493 = (i__26480_26488 + (1));
seq__26477_26485 = G__26490;
chunk__26478_26486 = G__26491;
count__26479_26487 = G__26492;
i__26480_26488 = G__26493;
continue;
} else {
var temp__4657__auto___26494 = cljs.core.seq.call(null,seq__26477_26485);
if(temp__4657__auto___26494){
var seq__26477_26495__$1 = temp__4657__auto___26494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26477_26495__$1)){
var c__19209__auto___26496 = cljs.core.chunk_first.call(null,seq__26477_26495__$1);
var G__26497 = cljs.core.chunk_rest.call(null,seq__26477_26495__$1);
var G__26498 = c__19209__auto___26496;
var G__26499 = cljs.core.count.call(null,c__19209__auto___26496);
var G__26500 = (0);
seq__26477_26485 = G__26497;
chunk__26478_26486 = G__26498;
count__26479_26487 = G__26499;
i__26480_26488 = G__26500;
continue;
} else {
var req_26501 = cljs.core.first.call(null,seq__26477_26495__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26501,prov);

var G__26502 = cljs.core.next.call(null,seq__26477_26495__$1);
var G__26503 = null;
var G__26504 = (0);
var G__26505 = (0);
seq__26477_26485 = G__26502;
chunk__26478_26486 = G__26503;
count__26479_26487 = G__26504;
i__26480_26488 = G__26505;
continue;
}
} else {
}
}
break;
}

var G__26506 = seq__26473;
var G__26507 = chunk__26474;
var G__26508 = count__26475;
var G__26509 = (i__26476 + (1));
seq__26473 = G__26506;
chunk__26474 = G__26507;
count__26475 = G__26508;
i__26476 = G__26509;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26473);
if(temp__4657__auto__){
var seq__26473__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26473__$1)){
var c__19209__auto__ = cljs.core.chunk_first.call(null,seq__26473__$1);
var G__26510 = cljs.core.chunk_rest.call(null,seq__26473__$1);
var G__26511 = c__19209__auto__;
var G__26512 = cljs.core.count.call(null,c__19209__auto__);
var G__26513 = (0);
seq__26473 = G__26510;
chunk__26474 = G__26511;
count__26475 = G__26512;
i__26476 = G__26513;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26473__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26481_26514 = cljs.core.seq.call(null,requires);
var chunk__26482_26515 = null;
var count__26483_26516 = (0);
var i__26484_26517 = (0);
while(true){
if((i__26484_26517 < count__26483_26516)){
var req_26518 = cljs.core._nth.call(null,chunk__26482_26515,i__26484_26517);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26518,prov);

var G__26519 = seq__26481_26514;
var G__26520 = chunk__26482_26515;
var G__26521 = count__26483_26516;
var G__26522 = (i__26484_26517 + (1));
seq__26481_26514 = G__26519;
chunk__26482_26515 = G__26520;
count__26483_26516 = G__26521;
i__26484_26517 = G__26522;
continue;
} else {
var temp__4657__auto___26523__$1 = cljs.core.seq.call(null,seq__26481_26514);
if(temp__4657__auto___26523__$1){
var seq__26481_26524__$1 = temp__4657__auto___26523__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26481_26524__$1)){
var c__19209__auto___26525 = cljs.core.chunk_first.call(null,seq__26481_26524__$1);
var G__26526 = cljs.core.chunk_rest.call(null,seq__26481_26524__$1);
var G__26527 = c__19209__auto___26525;
var G__26528 = cljs.core.count.call(null,c__19209__auto___26525);
var G__26529 = (0);
seq__26481_26514 = G__26526;
chunk__26482_26515 = G__26527;
count__26483_26516 = G__26528;
i__26484_26517 = G__26529;
continue;
} else {
var req_26530 = cljs.core.first.call(null,seq__26481_26524__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26530,prov);

var G__26531 = cljs.core.next.call(null,seq__26481_26524__$1);
var G__26532 = null;
var G__26533 = (0);
var G__26534 = (0);
seq__26481_26514 = G__26531;
chunk__26482_26515 = G__26532;
count__26483_26516 = G__26533;
i__26484_26517 = G__26534;
continue;
}
} else {
}
}
break;
}

var G__26535 = cljs.core.next.call(null,seq__26473__$1);
var G__26536 = null;
var G__26537 = (0);
var G__26538 = (0);
seq__26473 = G__26535;
chunk__26474 = G__26536;
count__26475 = G__26537;
i__26476 = G__26538;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26543_26547 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26544_26548 = null;
var count__26545_26549 = (0);
var i__26546_26550 = (0);
while(true){
if((i__26546_26550 < count__26545_26549)){
var ns_26551 = cljs.core._nth.call(null,chunk__26544_26548,i__26546_26550);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26551);

var G__26552 = seq__26543_26547;
var G__26553 = chunk__26544_26548;
var G__26554 = count__26545_26549;
var G__26555 = (i__26546_26550 + (1));
seq__26543_26547 = G__26552;
chunk__26544_26548 = G__26553;
count__26545_26549 = G__26554;
i__26546_26550 = G__26555;
continue;
} else {
var temp__4657__auto___26556 = cljs.core.seq.call(null,seq__26543_26547);
if(temp__4657__auto___26556){
var seq__26543_26557__$1 = temp__4657__auto___26556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26543_26557__$1)){
var c__19209__auto___26558 = cljs.core.chunk_first.call(null,seq__26543_26557__$1);
var G__26559 = cljs.core.chunk_rest.call(null,seq__26543_26557__$1);
var G__26560 = c__19209__auto___26558;
var G__26561 = cljs.core.count.call(null,c__19209__auto___26558);
var G__26562 = (0);
seq__26543_26547 = G__26559;
chunk__26544_26548 = G__26560;
count__26545_26549 = G__26561;
i__26546_26550 = G__26562;
continue;
} else {
var ns_26563 = cljs.core.first.call(null,seq__26543_26557__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26563);

var G__26564 = cljs.core.next.call(null,seq__26543_26557__$1);
var G__26565 = null;
var G__26566 = (0);
var G__26567 = (0);
seq__26543_26547 = G__26564;
chunk__26544_26548 = G__26565;
count__26545_26549 = G__26566;
i__26546_26550 = G__26567;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18398__auto__ = goog.require__;
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26568__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26569__i = 0, G__26569__a = new Array(arguments.length -  0);
while (G__26569__i < G__26569__a.length) {G__26569__a[G__26569__i] = arguments[G__26569__i + 0]; ++G__26569__i;}
  args = new cljs.core.IndexedSeq(G__26569__a,0);
} 
return G__26568__delegate.call(this,args);};
G__26568.cljs$lang$maxFixedArity = 0;
G__26568.cljs$lang$applyTo = (function (arglist__26570){
var args = cljs.core.seq(arglist__26570);
return G__26568__delegate(args);
});
G__26568.cljs$core$IFn$_invoke$arity$variadic = G__26568__delegate;
return G__26568;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26572 = cljs.core._EQ_;
var expr__26573 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26572.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26573))){
var path_parts = ((function (pred__26572,expr__26573){
return (function (p1__26571_SHARP_){
return clojure.string.split.call(null,p1__26571_SHARP_,/[\/\\]/);
});})(pred__26572,expr__26573))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26572,expr__26573){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26575){if((e26575 instanceof Error)){
var e = e26575;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26575;

}
}})());
});
;})(path_parts,sep,root,pred__26572,expr__26573))
} else {
if(cljs.core.truth_(pred__26572.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26573))){
return ((function (pred__26572,expr__26573){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26572,expr__26573){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26572,expr__26573))
);

return deferred.addErrback(((function (deferred,pred__26572,expr__26573){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26572,expr__26573))
);
});
;})(pred__26572,expr__26573))
} else {
return ((function (pred__26572,expr__26573){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26572,expr__26573))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26576,callback){
var map__26579 = p__26576;
var map__26579__$1 = ((((!((map__26579 == null)))?((((map__26579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26579):map__26579);
var file_msg = map__26579__$1;
var request_url = cljs.core.get.call(null,map__26579__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26579,map__26579__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26579,map__26579__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__){
return (function (state_26603){
var state_val_26604 = (state_26603[(1)]);
if((state_val_26604 === (7))){
var inst_26599 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
var statearr_26605_26625 = state_26603__$1;
(statearr_26605_26625[(2)] = inst_26599);

(statearr_26605_26625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (1))){
var state_26603__$1 = state_26603;
var statearr_26606_26626 = state_26603__$1;
(statearr_26606_26626[(2)] = null);

(statearr_26606_26626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (4))){
var inst_26583 = (state_26603[(7)]);
var inst_26583__$1 = (state_26603[(2)]);
var state_26603__$1 = (function (){var statearr_26607 = state_26603;
(statearr_26607[(7)] = inst_26583__$1);

return statearr_26607;
})();
if(cljs.core.truth_(inst_26583__$1)){
var statearr_26608_26627 = state_26603__$1;
(statearr_26608_26627[(1)] = (5));

} else {
var statearr_26609_26628 = state_26603__$1;
(statearr_26609_26628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (6))){
var state_26603__$1 = state_26603;
var statearr_26610_26629 = state_26603__$1;
(statearr_26610_26629[(2)] = null);

(statearr_26610_26629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (3))){
var inst_26601 = (state_26603[(2)]);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26603__$1,inst_26601);
} else {
if((state_val_26604 === (2))){
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26603__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26604 === (11))){
var inst_26595 = (state_26603[(2)]);
var state_26603__$1 = (function (){var statearr_26611 = state_26603;
(statearr_26611[(8)] = inst_26595);

return statearr_26611;
})();
var statearr_26612_26630 = state_26603__$1;
(statearr_26612_26630[(2)] = null);

(statearr_26612_26630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (9))){
var inst_26589 = (state_26603[(9)]);
var inst_26587 = (state_26603[(10)]);
var inst_26591 = inst_26589.call(null,inst_26587);
var state_26603__$1 = state_26603;
var statearr_26613_26631 = state_26603__$1;
(statearr_26613_26631[(2)] = inst_26591);

(statearr_26613_26631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (5))){
var inst_26583 = (state_26603[(7)]);
var inst_26585 = figwheel.client.file_reloading.blocking_load.call(null,inst_26583);
var state_26603__$1 = state_26603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26603__$1,(8),inst_26585);
} else {
if((state_val_26604 === (10))){
var inst_26587 = (state_26603[(10)]);
var inst_26593 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26587);
var state_26603__$1 = state_26603;
var statearr_26614_26632 = state_26603__$1;
(statearr_26614_26632[(2)] = inst_26593);

(statearr_26614_26632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26604 === (8))){
var inst_26589 = (state_26603[(9)]);
var inst_26583 = (state_26603[(7)]);
var inst_26587 = (state_26603[(2)]);
var inst_26588 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26589__$1 = cljs.core.get.call(null,inst_26588,inst_26583);
var state_26603__$1 = (function (){var statearr_26615 = state_26603;
(statearr_26615[(9)] = inst_26589__$1);

(statearr_26615[(10)] = inst_26587);

return statearr_26615;
})();
if(cljs.core.truth_(inst_26589__$1)){
var statearr_26616_26633 = state_26603__$1;
(statearr_26616_26633[(1)] = (9));

} else {
var statearr_26617_26634 = state_26603__$1;
(statearr_26617_26634[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23505__auto__))
;
return ((function (switch__23393__auto__,c__23505__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23394__auto__ = null;
var figwheel$client$file_reloading$state_machine__23394__auto____0 = (function (){
var statearr_26621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26621[(0)] = figwheel$client$file_reloading$state_machine__23394__auto__);

(statearr_26621[(1)] = (1));

return statearr_26621;
});
var figwheel$client$file_reloading$state_machine__23394__auto____1 = (function (state_26603){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_26603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e26622){if((e26622 instanceof Object)){
var ex__23397__auto__ = e26622;
var statearr_26623_26635 = state_26603;
(statearr_26623_26635[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26636 = state_26603;
state_26603 = G__26636;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23394__auto__ = function(state_26603){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23394__auto____1.call(this,state_26603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23394__auto____0;
figwheel$client$file_reloading$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23394__auto____1;
return figwheel$client$file_reloading$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__))
})();
var state__23507__auto__ = (function (){var statearr_26624 = f__23506__auto__.call(null);
(statearr_26624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__))
);

return c__23505__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26637,callback){
var map__26640 = p__26637;
var map__26640__$1 = ((((!((map__26640 == null)))?((((map__26640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26640):map__26640);
var file_msg = map__26640__$1;
var namespace = cljs.core.get.call(null,map__26640__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26640,map__26640__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26640,map__26640__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26642){
var map__26645 = p__26642;
var map__26645__$1 = ((((!((map__26645 == null)))?((((map__26645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26645):map__26645);
var file_msg = map__26645__$1;
var namespace = cljs.core.get.call(null,map__26645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18386__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18386__auto__){
var or__18398__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
var or__18398__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18398__auto____$1)){
return or__18398__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18386__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26647,callback){
var map__26650 = p__26647;
var map__26650__$1 = ((((!((map__26650 == null)))?((((map__26650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26650):map__26650);
var file_msg = map__26650__$1;
var request_url = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23505__auto___26738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___26738,out){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___26738,out){
return (function (state_26720){
var state_val_26721 = (state_26720[(1)]);
if((state_val_26721 === (1))){
var inst_26698 = cljs.core.nth.call(null,files,(0),null);
var inst_26699 = cljs.core.nthnext.call(null,files,(1));
var inst_26700 = files;
var state_26720__$1 = (function (){var statearr_26722 = state_26720;
(statearr_26722[(7)] = inst_26698);

(statearr_26722[(8)] = inst_26700);

(statearr_26722[(9)] = inst_26699);

return statearr_26722;
})();
var statearr_26723_26739 = state_26720__$1;
(statearr_26723_26739[(2)] = null);

(statearr_26723_26739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (2))){
var inst_26700 = (state_26720[(8)]);
var inst_26703 = (state_26720[(10)]);
var inst_26703__$1 = cljs.core.nth.call(null,inst_26700,(0),null);
var inst_26704 = cljs.core.nthnext.call(null,inst_26700,(1));
var inst_26705 = (inst_26703__$1 == null);
var inst_26706 = cljs.core.not.call(null,inst_26705);
var state_26720__$1 = (function (){var statearr_26724 = state_26720;
(statearr_26724[(10)] = inst_26703__$1);

(statearr_26724[(11)] = inst_26704);

return statearr_26724;
})();
if(inst_26706){
var statearr_26725_26740 = state_26720__$1;
(statearr_26725_26740[(1)] = (4));

} else {
var statearr_26726_26741 = state_26720__$1;
(statearr_26726_26741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (3))){
var inst_26718 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26720__$1,inst_26718);
} else {
if((state_val_26721 === (4))){
var inst_26703 = (state_26720[(10)]);
var inst_26708 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26703);
var state_26720__$1 = state_26720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26720__$1,(7),inst_26708);
} else {
if((state_val_26721 === (5))){
var inst_26714 = cljs.core.async.close_BANG_.call(null,out);
var state_26720__$1 = state_26720;
var statearr_26727_26742 = state_26720__$1;
(statearr_26727_26742[(2)] = inst_26714);

(statearr_26727_26742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (6))){
var inst_26716 = (state_26720[(2)]);
var state_26720__$1 = state_26720;
var statearr_26728_26743 = state_26720__$1;
(statearr_26728_26743[(2)] = inst_26716);

(statearr_26728_26743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26721 === (7))){
var inst_26704 = (state_26720[(11)]);
var inst_26710 = (state_26720[(2)]);
var inst_26711 = cljs.core.async.put_BANG_.call(null,out,inst_26710);
var inst_26700 = inst_26704;
var state_26720__$1 = (function (){var statearr_26729 = state_26720;
(statearr_26729[(8)] = inst_26700);

(statearr_26729[(12)] = inst_26711);

return statearr_26729;
})();
var statearr_26730_26744 = state_26720__$1;
(statearr_26730_26744[(2)] = null);

(statearr_26730_26744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23505__auto___26738,out))
;
return ((function (switch__23393__auto__,c__23505__auto___26738,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto____0 = (function (){
var statearr_26734 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26734[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto__);

(statearr_26734[(1)] = (1));

return statearr_26734;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto____1 = (function (state_26720){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_26720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e26735){if((e26735 instanceof Object)){
var ex__23397__auto__ = e26735;
var statearr_26736_26745 = state_26720;
(statearr_26736_26745[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26746 = state_26720;
state_26720 = G__26746;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto__ = function(state_26720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto____1.call(this,state_26720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___26738,out))
})();
var state__23507__auto__ = (function (){var statearr_26737 = f__23506__auto__.call(null);
(statearr_26737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___26738);

return statearr_26737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___26738,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26747,opts){
var map__26751 = p__26747;
var map__26751__$1 = ((((!((map__26751 == null)))?((((map__26751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26751):map__26751);
var eval_body__$1 = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26751__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18386__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18386__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18386__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26753){var e = e26753;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26754_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26754_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26759){
var vec__26760 = p__26759;
var k = cljs.core.nth.call(null,vec__26760,(0),null);
var v = cljs.core.nth.call(null,vec__26760,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26761){
var vec__26762 = p__26761;
var k = cljs.core.nth.call(null,vec__26762,(0),null);
var v = cljs.core.nth.call(null,vec__26762,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26766,p__26767){
var map__27014 = p__26766;
var map__27014__$1 = ((((!((map__27014 == null)))?((((map__27014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27014):map__27014);
var opts = map__27014__$1;
var before_jsload = cljs.core.get.call(null,map__27014__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27014__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27014__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27015 = p__26767;
var map__27015__$1 = ((((!((map__27015 == null)))?((((map__27015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27015):map__27015);
var msg = map__27015__$1;
var files = cljs.core.get.call(null,map__27015__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27015__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27015__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27168){
var state_val_27169 = (state_27168[(1)]);
if((state_val_27169 === (7))){
var inst_27032 = (state_27168[(7)]);
var inst_27030 = (state_27168[(8)]);
var inst_27031 = (state_27168[(9)]);
var inst_27029 = (state_27168[(10)]);
var inst_27037 = cljs.core._nth.call(null,inst_27030,inst_27032);
var inst_27038 = figwheel.client.file_reloading.eval_body.call(null,inst_27037,opts);
var inst_27039 = (inst_27032 + (1));
var tmp27170 = inst_27030;
var tmp27171 = inst_27031;
var tmp27172 = inst_27029;
var inst_27029__$1 = tmp27172;
var inst_27030__$1 = tmp27170;
var inst_27031__$1 = tmp27171;
var inst_27032__$1 = inst_27039;
var state_27168__$1 = (function (){var statearr_27173 = state_27168;
(statearr_27173[(7)] = inst_27032__$1);

(statearr_27173[(8)] = inst_27030__$1);

(statearr_27173[(9)] = inst_27031__$1);

(statearr_27173[(11)] = inst_27038);

(statearr_27173[(10)] = inst_27029__$1);

return statearr_27173;
})();
var statearr_27174_27260 = state_27168__$1;
(statearr_27174_27260[(2)] = null);

(statearr_27174_27260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (20))){
var inst_27072 = (state_27168[(12)]);
var inst_27080 = figwheel.client.file_reloading.sort_files.call(null,inst_27072);
var state_27168__$1 = state_27168;
var statearr_27175_27261 = state_27168__$1;
(statearr_27175_27261[(2)] = inst_27080);

(statearr_27175_27261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (27))){
var state_27168__$1 = state_27168;
var statearr_27176_27262 = state_27168__$1;
(statearr_27176_27262[(2)] = null);

(statearr_27176_27262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (1))){
var inst_27021 = (state_27168[(13)]);
var inst_27018 = before_jsload.call(null,files);
var inst_27019 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27020 = (function (){return ((function (inst_27021,inst_27018,inst_27019,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26763_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26763_SHARP_);
});
;})(inst_27021,inst_27018,inst_27019,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27021__$1 = cljs.core.filter.call(null,inst_27020,files);
var inst_27022 = cljs.core.not_empty.call(null,inst_27021__$1);
var state_27168__$1 = (function (){var statearr_27177 = state_27168;
(statearr_27177[(14)] = inst_27018);

(statearr_27177[(15)] = inst_27019);

(statearr_27177[(13)] = inst_27021__$1);

return statearr_27177;
})();
if(cljs.core.truth_(inst_27022)){
var statearr_27178_27263 = state_27168__$1;
(statearr_27178_27263[(1)] = (2));

} else {
var statearr_27179_27264 = state_27168__$1;
(statearr_27179_27264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (24))){
var state_27168__$1 = state_27168;
var statearr_27180_27265 = state_27168__$1;
(statearr_27180_27265[(2)] = null);

(statearr_27180_27265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (39))){
var inst_27122 = (state_27168[(16)]);
var state_27168__$1 = state_27168;
var statearr_27181_27266 = state_27168__$1;
(statearr_27181_27266[(2)] = inst_27122);

(statearr_27181_27266[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (46))){
var inst_27163 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27182_27267 = state_27168__$1;
(statearr_27182_27267[(2)] = inst_27163);

(statearr_27182_27267[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (4))){
var inst_27066 = (state_27168[(2)]);
var inst_27067 = cljs.core.List.EMPTY;
var inst_27068 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27067);
var inst_27069 = (function (){return ((function (inst_27066,inst_27067,inst_27068,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26764_SHARP_){
var and__18386__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26764_SHARP_);
if(cljs.core.truth_(and__18386__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26764_SHARP_));
} else {
return and__18386__auto__;
}
});
;})(inst_27066,inst_27067,inst_27068,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27070 = cljs.core.filter.call(null,inst_27069,files);
var inst_27071 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27072 = cljs.core.concat.call(null,inst_27070,inst_27071);
var state_27168__$1 = (function (){var statearr_27183 = state_27168;
(statearr_27183[(17)] = inst_27066);

(statearr_27183[(18)] = inst_27068);

(statearr_27183[(12)] = inst_27072);

return statearr_27183;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27184_27268 = state_27168__$1;
(statearr_27184_27268[(1)] = (16));

} else {
var statearr_27185_27269 = state_27168__$1;
(statearr_27185_27269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (15))){
var inst_27056 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27186_27270 = state_27168__$1;
(statearr_27186_27270[(2)] = inst_27056);

(statearr_27186_27270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (21))){
var inst_27082 = (state_27168[(19)]);
var inst_27082__$1 = (state_27168[(2)]);
var inst_27083 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27082__$1);
var state_27168__$1 = (function (){var statearr_27187 = state_27168;
(statearr_27187[(19)] = inst_27082__$1);

return statearr_27187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27168__$1,(22),inst_27083);
} else {
if((state_val_27169 === (31))){
var inst_27166 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27168__$1,inst_27166);
} else {
if((state_val_27169 === (32))){
var inst_27122 = (state_27168[(16)]);
var inst_27127 = inst_27122.cljs$lang$protocol_mask$partition0$;
var inst_27128 = (inst_27127 & (64));
var inst_27129 = inst_27122.cljs$core$ISeq$;
var inst_27130 = (inst_27128) || (inst_27129);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27130)){
var statearr_27188_27271 = state_27168__$1;
(statearr_27188_27271[(1)] = (35));

} else {
var statearr_27189_27272 = state_27168__$1;
(statearr_27189_27272[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (40))){
var inst_27143 = (state_27168[(20)]);
var inst_27142 = (state_27168[(2)]);
var inst_27143__$1 = cljs.core.get.call(null,inst_27142,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27144 = cljs.core.get.call(null,inst_27142,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27145 = cljs.core.not_empty.call(null,inst_27143__$1);
var state_27168__$1 = (function (){var statearr_27190 = state_27168;
(statearr_27190[(21)] = inst_27144);

(statearr_27190[(20)] = inst_27143__$1);

return statearr_27190;
})();
if(cljs.core.truth_(inst_27145)){
var statearr_27191_27273 = state_27168__$1;
(statearr_27191_27273[(1)] = (41));

} else {
var statearr_27192_27274 = state_27168__$1;
(statearr_27192_27274[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (33))){
var state_27168__$1 = state_27168;
var statearr_27193_27275 = state_27168__$1;
(statearr_27193_27275[(2)] = false);

(statearr_27193_27275[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (13))){
var inst_27042 = (state_27168[(22)]);
var inst_27046 = cljs.core.chunk_first.call(null,inst_27042);
var inst_27047 = cljs.core.chunk_rest.call(null,inst_27042);
var inst_27048 = cljs.core.count.call(null,inst_27046);
var inst_27029 = inst_27047;
var inst_27030 = inst_27046;
var inst_27031 = inst_27048;
var inst_27032 = (0);
var state_27168__$1 = (function (){var statearr_27194 = state_27168;
(statearr_27194[(7)] = inst_27032);

(statearr_27194[(8)] = inst_27030);

(statearr_27194[(9)] = inst_27031);

(statearr_27194[(10)] = inst_27029);

return statearr_27194;
})();
var statearr_27195_27276 = state_27168__$1;
(statearr_27195_27276[(2)] = null);

(statearr_27195_27276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (22))){
var inst_27086 = (state_27168[(23)]);
var inst_27082 = (state_27168[(19)]);
var inst_27090 = (state_27168[(24)]);
var inst_27085 = (state_27168[(25)]);
var inst_27085__$1 = (state_27168[(2)]);
var inst_27086__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27085__$1);
var inst_27087 = (function (){var all_files = inst_27082;
var res_SINGLEQUOTE_ = inst_27085__$1;
var res = inst_27086__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27086,inst_27082,inst_27090,inst_27085,inst_27085__$1,inst_27086__$1,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26765_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26765_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27086,inst_27082,inst_27090,inst_27085,inst_27085__$1,inst_27086__$1,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27088 = cljs.core.filter.call(null,inst_27087,inst_27085__$1);
var inst_27089 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27090__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27089);
var inst_27091 = cljs.core.not_empty.call(null,inst_27090__$1);
var state_27168__$1 = (function (){var statearr_27196 = state_27168;
(statearr_27196[(26)] = inst_27088);

(statearr_27196[(23)] = inst_27086__$1);

(statearr_27196[(24)] = inst_27090__$1);

(statearr_27196[(25)] = inst_27085__$1);

return statearr_27196;
})();
if(cljs.core.truth_(inst_27091)){
var statearr_27197_27277 = state_27168__$1;
(statearr_27197_27277[(1)] = (23));

} else {
var statearr_27198_27278 = state_27168__$1;
(statearr_27198_27278[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (36))){
var state_27168__$1 = state_27168;
var statearr_27199_27279 = state_27168__$1;
(statearr_27199_27279[(2)] = false);

(statearr_27199_27279[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (41))){
var inst_27143 = (state_27168[(20)]);
var inst_27147 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27148 = cljs.core.map.call(null,inst_27147,inst_27143);
var inst_27149 = cljs.core.pr_str.call(null,inst_27148);
var inst_27150 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27149)].join('');
var inst_27151 = figwheel.client.utils.log.call(null,inst_27150);
var state_27168__$1 = state_27168;
var statearr_27200_27280 = state_27168__$1;
(statearr_27200_27280[(2)] = inst_27151);

(statearr_27200_27280[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (43))){
var inst_27144 = (state_27168[(21)]);
var inst_27154 = (state_27168[(2)]);
var inst_27155 = cljs.core.not_empty.call(null,inst_27144);
var state_27168__$1 = (function (){var statearr_27201 = state_27168;
(statearr_27201[(27)] = inst_27154);

return statearr_27201;
})();
if(cljs.core.truth_(inst_27155)){
var statearr_27202_27281 = state_27168__$1;
(statearr_27202_27281[(1)] = (44));

} else {
var statearr_27203_27282 = state_27168__$1;
(statearr_27203_27282[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (29))){
var inst_27088 = (state_27168[(26)]);
var inst_27086 = (state_27168[(23)]);
var inst_27082 = (state_27168[(19)]);
var inst_27122 = (state_27168[(16)]);
var inst_27090 = (state_27168[(24)]);
var inst_27085 = (state_27168[(25)]);
var inst_27118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27121 = (function (){var all_files = inst_27082;
var res_SINGLEQUOTE_ = inst_27085;
var res = inst_27086;
var files_not_loaded = inst_27088;
var dependencies_that_loaded = inst_27090;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27088,inst_27086,inst_27082,inst_27122,inst_27090,inst_27085,inst_27118,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27120){
var map__27204 = p__27120;
var map__27204__$1 = ((((!((map__27204 == null)))?((((map__27204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27204):map__27204);
var namespace = cljs.core.get.call(null,map__27204__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27088,inst_27086,inst_27082,inst_27122,inst_27090,inst_27085,inst_27118,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27122__$1 = cljs.core.group_by.call(null,inst_27121,inst_27088);
var inst_27124 = (inst_27122__$1 == null);
var inst_27125 = cljs.core.not.call(null,inst_27124);
var state_27168__$1 = (function (){var statearr_27206 = state_27168;
(statearr_27206[(16)] = inst_27122__$1);

(statearr_27206[(28)] = inst_27118);

return statearr_27206;
})();
if(inst_27125){
var statearr_27207_27283 = state_27168__$1;
(statearr_27207_27283[(1)] = (32));

} else {
var statearr_27208_27284 = state_27168__$1;
(statearr_27208_27284[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (44))){
var inst_27144 = (state_27168[(21)]);
var inst_27157 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27144);
var inst_27158 = cljs.core.pr_str.call(null,inst_27157);
var inst_27159 = [cljs.core.str("not required: "),cljs.core.str(inst_27158)].join('');
var inst_27160 = figwheel.client.utils.log.call(null,inst_27159);
var state_27168__$1 = state_27168;
var statearr_27209_27285 = state_27168__$1;
(statearr_27209_27285[(2)] = inst_27160);

(statearr_27209_27285[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (6))){
var inst_27063 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27210_27286 = state_27168__$1;
(statearr_27210_27286[(2)] = inst_27063);

(statearr_27210_27286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (28))){
var inst_27088 = (state_27168[(26)]);
var inst_27115 = (state_27168[(2)]);
var inst_27116 = cljs.core.not_empty.call(null,inst_27088);
var state_27168__$1 = (function (){var statearr_27211 = state_27168;
(statearr_27211[(29)] = inst_27115);

return statearr_27211;
})();
if(cljs.core.truth_(inst_27116)){
var statearr_27212_27287 = state_27168__$1;
(statearr_27212_27287[(1)] = (29));

} else {
var statearr_27213_27288 = state_27168__$1;
(statearr_27213_27288[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (25))){
var inst_27086 = (state_27168[(23)]);
var inst_27102 = (state_27168[(2)]);
var inst_27103 = cljs.core.not_empty.call(null,inst_27086);
var state_27168__$1 = (function (){var statearr_27214 = state_27168;
(statearr_27214[(30)] = inst_27102);

return statearr_27214;
})();
if(cljs.core.truth_(inst_27103)){
var statearr_27215_27289 = state_27168__$1;
(statearr_27215_27289[(1)] = (26));

} else {
var statearr_27216_27290 = state_27168__$1;
(statearr_27216_27290[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (34))){
var inst_27137 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27137)){
var statearr_27217_27291 = state_27168__$1;
(statearr_27217_27291[(1)] = (38));

} else {
var statearr_27218_27292 = state_27168__$1;
(statearr_27218_27292[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (17))){
var state_27168__$1 = state_27168;
var statearr_27219_27293 = state_27168__$1;
(statearr_27219_27293[(2)] = recompile_dependents);

(statearr_27219_27293[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (3))){
var state_27168__$1 = state_27168;
var statearr_27220_27294 = state_27168__$1;
(statearr_27220_27294[(2)] = null);

(statearr_27220_27294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (12))){
var inst_27059 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27221_27295 = state_27168__$1;
(statearr_27221_27295[(2)] = inst_27059);

(statearr_27221_27295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (2))){
var inst_27021 = (state_27168[(13)]);
var inst_27028 = cljs.core.seq.call(null,inst_27021);
var inst_27029 = inst_27028;
var inst_27030 = null;
var inst_27031 = (0);
var inst_27032 = (0);
var state_27168__$1 = (function (){var statearr_27222 = state_27168;
(statearr_27222[(7)] = inst_27032);

(statearr_27222[(8)] = inst_27030);

(statearr_27222[(9)] = inst_27031);

(statearr_27222[(10)] = inst_27029);

return statearr_27222;
})();
var statearr_27223_27296 = state_27168__$1;
(statearr_27223_27296[(2)] = null);

(statearr_27223_27296[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (23))){
var inst_27088 = (state_27168[(26)]);
var inst_27086 = (state_27168[(23)]);
var inst_27082 = (state_27168[(19)]);
var inst_27090 = (state_27168[(24)]);
var inst_27085 = (state_27168[(25)]);
var inst_27093 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27095 = (function (){var all_files = inst_27082;
var res_SINGLEQUOTE_ = inst_27085;
var res = inst_27086;
var files_not_loaded = inst_27088;
var dependencies_that_loaded = inst_27090;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27088,inst_27086,inst_27082,inst_27090,inst_27085,inst_27093,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27094){
var map__27224 = p__27094;
var map__27224__$1 = ((((!((map__27224 == null)))?((((map__27224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27224):map__27224);
var request_url = cljs.core.get.call(null,map__27224__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27088,inst_27086,inst_27082,inst_27090,inst_27085,inst_27093,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27096 = cljs.core.reverse.call(null,inst_27090);
var inst_27097 = cljs.core.map.call(null,inst_27095,inst_27096);
var inst_27098 = cljs.core.pr_str.call(null,inst_27097);
var inst_27099 = figwheel.client.utils.log.call(null,inst_27098);
var state_27168__$1 = (function (){var statearr_27226 = state_27168;
(statearr_27226[(31)] = inst_27093);

return statearr_27226;
})();
var statearr_27227_27297 = state_27168__$1;
(statearr_27227_27297[(2)] = inst_27099);

(statearr_27227_27297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (35))){
var state_27168__$1 = state_27168;
var statearr_27228_27298 = state_27168__$1;
(statearr_27228_27298[(2)] = true);

(statearr_27228_27298[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (19))){
var inst_27072 = (state_27168[(12)]);
var inst_27078 = figwheel.client.file_reloading.expand_files.call(null,inst_27072);
var state_27168__$1 = state_27168;
var statearr_27229_27299 = state_27168__$1;
(statearr_27229_27299[(2)] = inst_27078);

(statearr_27229_27299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (11))){
var state_27168__$1 = state_27168;
var statearr_27230_27300 = state_27168__$1;
(statearr_27230_27300[(2)] = null);

(statearr_27230_27300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (9))){
var inst_27061 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27231_27301 = state_27168__$1;
(statearr_27231_27301[(2)] = inst_27061);

(statearr_27231_27301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (5))){
var inst_27032 = (state_27168[(7)]);
var inst_27031 = (state_27168[(9)]);
var inst_27034 = (inst_27032 < inst_27031);
var inst_27035 = inst_27034;
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27035)){
var statearr_27232_27302 = state_27168__$1;
(statearr_27232_27302[(1)] = (7));

} else {
var statearr_27233_27303 = state_27168__$1;
(statearr_27233_27303[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (14))){
var inst_27042 = (state_27168[(22)]);
var inst_27051 = cljs.core.first.call(null,inst_27042);
var inst_27052 = figwheel.client.file_reloading.eval_body.call(null,inst_27051,opts);
var inst_27053 = cljs.core.next.call(null,inst_27042);
var inst_27029 = inst_27053;
var inst_27030 = null;
var inst_27031 = (0);
var inst_27032 = (0);
var state_27168__$1 = (function (){var statearr_27234 = state_27168;
(statearr_27234[(32)] = inst_27052);

(statearr_27234[(7)] = inst_27032);

(statearr_27234[(8)] = inst_27030);

(statearr_27234[(9)] = inst_27031);

(statearr_27234[(10)] = inst_27029);

return statearr_27234;
})();
var statearr_27235_27304 = state_27168__$1;
(statearr_27235_27304[(2)] = null);

(statearr_27235_27304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (45))){
var state_27168__$1 = state_27168;
var statearr_27236_27305 = state_27168__$1;
(statearr_27236_27305[(2)] = null);

(statearr_27236_27305[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (26))){
var inst_27088 = (state_27168[(26)]);
var inst_27086 = (state_27168[(23)]);
var inst_27082 = (state_27168[(19)]);
var inst_27090 = (state_27168[(24)]);
var inst_27085 = (state_27168[(25)]);
var inst_27105 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27107 = (function (){var all_files = inst_27082;
var res_SINGLEQUOTE_ = inst_27085;
var res = inst_27086;
var files_not_loaded = inst_27088;
var dependencies_that_loaded = inst_27090;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27088,inst_27086,inst_27082,inst_27090,inst_27085,inst_27105,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27106){
var map__27237 = p__27106;
var map__27237__$1 = ((((!((map__27237 == null)))?((((map__27237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27237):map__27237);
var namespace = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27088,inst_27086,inst_27082,inst_27090,inst_27085,inst_27105,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27108 = cljs.core.map.call(null,inst_27107,inst_27086);
var inst_27109 = cljs.core.pr_str.call(null,inst_27108);
var inst_27110 = figwheel.client.utils.log.call(null,inst_27109);
var inst_27111 = (function (){var all_files = inst_27082;
var res_SINGLEQUOTE_ = inst_27085;
var res = inst_27086;
var files_not_loaded = inst_27088;
var dependencies_that_loaded = inst_27090;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27088,inst_27086,inst_27082,inst_27090,inst_27085,inst_27105,inst_27107,inst_27108,inst_27109,inst_27110,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27088,inst_27086,inst_27082,inst_27090,inst_27085,inst_27105,inst_27107,inst_27108,inst_27109,inst_27110,state_val_27169,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27112 = setTimeout(inst_27111,(10));
var state_27168__$1 = (function (){var statearr_27239 = state_27168;
(statearr_27239[(33)] = inst_27105);

(statearr_27239[(34)] = inst_27110);

return statearr_27239;
})();
var statearr_27240_27306 = state_27168__$1;
(statearr_27240_27306[(2)] = inst_27112);

(statearr_27240_27306[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (16))){
var state_27168__$1 = state_27168;
var statearr_27241_27307 = state_27168__$1;
(statearr_27241_27307[(2)] = reload_dependents);

(statearr_27241_27307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (38))){
var inst_27122 = (state_27168[(16)]);
var inst_27139 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27122);
var state_27168__$1 = state_27168;
var statearr_27242_27308 = state_27168__$1;
(statearr_27242_27308[(2)] = inst_27139);

(statearr_27242_27308[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (30))){
var state_27168__$1 = state_27168;
var statearr_27243_27309 = state_27168__$1;
(statearr_27243_27309[(2)] = null);

(statearr_27243_27309[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (10))){
var inst_27042 = (state_27168[(22)]);
var inst_27044 = cljs.core.chunked_seq_QMARK_.call(null,inst_27042);
var state_27168__$1 = state_27168;
if(inst_27044){
var statearr_27244_27310 = state_27168__$1;
(statearr_27244_27310[(1)] = (13));

} else {
var statearr_27245_27311 = state_27168__$1;
(statearr_27245_27311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (18))){
var inst_27076 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
if(cljs.core.truth_(inst_27076)){
var statearr_27246_27312 = state_27168__$1;
(statearr_27246_27312[(1)] = (19));

} else {
var statearr_27247_27313 = state_27168__$1;
(statearr_27247_27313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (42))){
var state_27168__$1 = state_27168;
var statearr_27248_27314 = state_27168__$1;
(statearr_27248_27314[(2)] = null);

(statearr_27248_27314[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (37))){
var inst_27134 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27249_27315 = state_27168__$1;
(statearr_27249_27315[(2)] = inst_27134);

(statearr_27249_27315[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (8))){
var inst_27042 = (state_27168[(22)]);
var inst_27029 = (state_27168[(10)]);
var inst_27042__$1 = cljs.core.seq.call(null,inst_27029);
var state_27168__$1 = (function (){var statearr_27250 = state_27168;
(statearr_27250[(22)] = inst_27042__$1);

return statearr_27250;
})();
if(inst_27042__$1){
var statearr_27251_27316 = state_27168__$1;
(statearr_27251_27316[(1)] = (10));

} else {
var statearr_27252_27317 = state_27168__$1;
(statearr_27252_27317[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23393__auto__,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto____0 = (function (){
var statearr_27256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27256[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto__);

(statearr_27256[(1)] = (1));

return statearr_27256;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto____1 = (function (state_27168){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_27168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e27257){if((e27257 instanceof Object)){
var ex__23397__auto__ = e27257;
var statearr_27258_27318 = state_27168;
(statearr_27258_27318[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27319 = state_27168;
state_27168 = G__27319;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto__ = function(state_27168){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto____1.call(this,state_27168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23507__auto__ = (function (){var statearr_27259 = f__23506__auto__.call(null);
(statearr_27259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_27259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__,map__27014,map__27014__$1,opts,before_jsload,on_jsload,reload_dependents,map__27015,map__27015__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23505__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27322,link){
var map__27325 = p__27322;
var map__27325__$1 = ((((!((map__27325 == null)))?((((map__27325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27325):map__27325);
var file = cljs.core.get.call(null,map__27325__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27325,map__27325__$1,file){
return (function (p1__27320_SHARP_,p2__27321_SHARP_){
if(cljs.core._EQ_.call(null,p1__27320_SHARP_,p2__27321_SHARP_)){
return p1__27320_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27325,map__27325__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27331){
var map__27332 = p__27331;
var map__27332__$1 = ((((!((map__27332 == null)))?((((map__27332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27332):map__27332);
var match_length = cljs.core.get.call(null,map__27332__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27332__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27327_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27327_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27334 = [];
var len__19467__auto___27337 = arguments.length;
var i__19468__auto___27338 = (0);
while(true){
if((i__19468__auto___27338 < len__19467__auto___27337)){
args27334.push((arguments[i__19468__auto___27338]));

var G__27339 = (i__19468__auto___27338 + (1));
i__19468__auto___27338 = G__27339;
continue;
} else {
}
break;
}

var G__27336 = args27334.length;
switch (G__27336) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27334.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27341_SHARP_,p2__27342_SHARP_){
return cljs.core.assoc.call(null,p1__27341_SHARP_,cljs.core.get.call(null,p2__27342_SHARP_,key),p2__27342_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27343){
var map__27346 = p__27343;
var map__27346__$1 = ((((!((map__27346 == null)))?((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346):map__27346);
var f_data = map__27346__$1;
var file = cljs.core.get.call(null,map__27346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27348,files_msg){
var map__27355 = p__27348;
var map__27355__$1 = ((((!((map__27355 == null)))?((((map__27355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27355):map__27355);
var opts = map__27355__$1;
var on_cssload = cljs.core.get.call(null,map__27355__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27357_27361 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27358_27362 = null;
var count__27359_27363 = (0);
var i__27360_27364 = (0);
while(true){
if((i__27360_27364 < count__27359_27363)){
var f_27365 = cljs.core._nth.call(null,chunk__27358_27362,i__27360_27364);
figwheel.client.file_reloading.reload_css_file.call(null,f_27365);

var G__27366 = seq__27357_27361;
var G__27367 = chunk__27358_27362;
var G__27368 = count__27359_27363;
var G__27369 = (i__27360_27364 + (1));
seq__27357_27361 = G__27366;
chunk__27358_27362 = G__27367;
count__27359_27363 = G__27368;
i__27360_27364 = G__27369;
continue;
} else {
var temp__4657__auto___27370 = cljs.core.seq.call(null,seq__27357_27361);
if(temp__4657__auto___27370){
var seq__27357_27371__$1 = temp__4657__auto___27370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27357_27371__$1)){
var c__19209__auto___27372 = cljs.core.chunk_first.call(null,seq__27357_27371__$1);
var G__27373 = cljs.core.chunk_rest.call(null,seq__27357_27371__$1);
var G__27374 = c__19209__auto___27372;
var G__27375 = cljs.core.count.call(null,c__19209__auto___27372);
var G__27376 = (0);
seq__27357_27361 = G__27373;
chunk__27358_27362 = G__27374;
count__27359_27363 = G__27375;
i__27360_27364 = G__27376;
continue;
} else {
var f_27377 = cljs.core.first.call(null,seq__27357_27371__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27377);

var G__27378 = cljs.core.next.call(null,seq__27357_27371__$1);
var G__27379 = null;
var G__27380 = (0);
var G__27381 = (0);
seq__27357_27361 = G__27378;
chunk__27358_27362 = G__27379;
count__27359_27363 = G__27380;
i__27360_27364 = G__27381;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27355,map__27355__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27355,map__27355__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map