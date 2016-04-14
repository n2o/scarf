// Compiled by ClojureScript 1.8.40 {}
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
var or__18445__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18445__auto__){
return or__18445__auto__;
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
var or__18445__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26511_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26511_SHARP_));
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
var seq__26516 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26517 = null;
var count__26518 = (0);
var i__26519 = (0);
while(true){
if((i__26519 < count__26518)){
var n = cljs.core._nth.call(null,chunk__26517,i__26519);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26520 = seq__26516;
var G__26521 = chunk__26517;
var G__26522 = count__26518;
var G__26523 = (i__26519 + (1));
seq__26516 = G__26520;
chunk__26517 = G__26521;
count__26518 = G__26522;
i__26519 = G__26523;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26516);
if(temp__4657__auto__){
var seq__26516__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26516__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__26516__$1);
var G__26524 = cljs.core.chunk_rest.call(null,seq__26516__$1);
var G__26525 = c__19256__auto__;
var G__26526 = cljs.core.count.call(null,c__19256__auto__);
var G__26527 = (0);
seq__26516 = G__26524;
chunk__26517 = G__26525;
count__26518 = G__26526;
i__26519 = G__26527;
continue;
} else {
var n = cljs.core.first.call(null,seq__26516__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26528 = cljs.core.next.call(null,seq__26516__$1);
var G__26529 = null;
var G__26530 = (0);
var G__26531 = (0);
seq__26516 = G__26528;
chunk__26517 = G__26529;
count__26518 = G__26530;
i__26519 = G__26531;
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

var seq__26570_26577 = cljs.core.seq.call(null,deps);
var chunk__26571_26578 = null;
var count__26572_26579 = (0);
var i__26573_26580 = (0);
while(true){
if((i__26573_26580 < count__26572_26579)){
var dep_26581 = cljs.core._nth.call(null,chunk__26571_26578,i__26573_26580);
topo_sort_helper_STAR_.call(null,dep_26581,(depth + (1)),state);

var G__26582 = seq__26570_26577;
var G__26583 = chunk__26571_26578;
var G__26584 = count__26572_26579;
var G__26585 = (i__26573_26580 + (1));
seq__26570_26577 = G__26582;
chunk__26571_26578 = G__26583;
count__26572_26579 = G__26584;
i__26573_26580 = G__26585;
continue;
} else {
var temp__4657__auto___26586 = cljs.core.seq.call(null,seq__26570_26577);
if(temp__4657__auto___26586){
var seq__26570_26587__$1 = temp__4657__auto___26586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26570_26587__$1)){
var c__19256__auto___26588 = cljs.core.chunk_first.call(null,seq__26570_26587__$1);
var G__26589 = cljs.core.chunk_rest.call(null,seq__26570_26587__$1);
var G__26590 = c__19256__auto___26588;
var G__26591 = cljs.core.count.call(null,c__19256__auto___26588);
var G__26592 = (0);
seq__26570_26577 = G__26589;
chunk__26571_26578 = G__26590;
count__26572_26579 = G__26591;
i__26573_26580 = G__26592;
continue;
} else {
var dep_26593 = cljs.core.first.call(null,seq__26570_26587__$1);
topo_sort_helper_STAR_.call(null,dep_26593,(depth + (1)),state);

var G__26594 = cljs.core.next.call(null,seq__26570_26587__$1);
var G__26595 = null;
var G__26596 = (0);
var G__26597 = (0);
seq__26570_26577 = G__26594;
chunk__26571_26578 = G__26595;
count__26572_26579 = G__26596;
i__26573_26580 = G__26597;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26574){
var vec__26576 = p__26574;
var x = cljs.core.nth.call(null,vec__26576,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26576,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26576,x,xs,get_deps__$1){
return (function (p1__26532_SHARP_){
return clojure.set.difference.call(null,p1__26532_SHARP_,x);
});})(vec__26576,x,xs,get_deps__$1))
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
var seq__26610 = cljs.core.seq.call(null,provides);
var chunk__26611 = null;
var count__26612 = (0);
var i__26613 = (0);
while(true){
if((i__26613 < count__26612)){
var prov = cljs.core._nth.call(null,chunk__26611,i__26613);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26614_26622 = cljs.core.seq.call(null,requires);
var chunk__26615_26623 = null;
var count__26616_26624 = (0);
var i__26617_26625 = (0);
while(true){
if((i__26617_26625 < count__26616_26624)){
var req_26626 = cljs.core._nth.call(null,chunk__26615_26623,i__26617_26625);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26626,prov);

var G__26627 = seq__26614_26622;
var G__26628 = chunk__26615_26623;
var G__26629 = count__26616_26624;
var G__26630 = (i__26617_26625 + (1));
seq__26614_26622 = G__26627;
chunk__26615_26623 = G__26628;
count__26616_26624 = G__26629;
i__26617_26625 = G__26630;
continue;
} else {
var temp__4657__auto___26631 = cljs.core.seq.call(null,seq__26614_26622);
if(temp__4657__auto___26631){
var seq__26614_26632__$1 = temp__4657__auto___26631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26614_26632__$1)){
var c__19256__auto___26633 = cljs.core.chunk_first.call(null,seq__26614_26632__$1);
var G__26634 = cljs.core.chunk_rest.call(null,seq__26614_26632__$1);
var G__26635 = c__19256__auto___26633;
var G__26636 = cljs.core.count.call(null,c__19256__auto___26633);
var G__26637 = (0);
seq__26614_26622 = G__26634;
chunk__26615_26623 = G__26635;
count__26616_26624 = G__26636;
i__26617_26625 = G__26637;
continue;
} else {
var req_26638 = cljs.core.first.call(null,seq__26614_26632__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26638,prov);

var G__26639 = cljs.core.next.call(null,seq__26614_26632__$1);
var G__26640 = null;
var G__26641 = (0);
var G__26642 = (0);
seq__26614_26622 = G__26639;
chunk__26615_26623 = G__26640;
count__26616_26624 = G__26641;
i__26617_26625 = G__26642;
continue;
}
} else {
}
}
break;
}

var G__26643 = seq__26610;
var G__26644 = chunk__26611;
var G__26645 = count__26612;
var G__26646 = (i__26613 + (1));
seq__26610 = G__26643;
chunk__26611 = G__26644;
count__26612 = G__26645;
i__26613 = G__26646;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26610);
if(temp__4657__auto__){
var seq__26610__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26610__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__26610__$1);
var G__26647 = cljs.core.chunk_rest.call(null,seq__26610__$1);
var G__26648 = c__19256__auto__;
var G__26649 = cljs.core.count.call(null,c__19256__auto__);
var G__26650 = (0);
seq__26610 = G__26647;
chunk__26611 = G__26648;
count__26612 = G__26649;
i__26613 = G__26650;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26610__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26618_26651 = cljs.core.seq.call(null,requires);
var chunk__26619_26652 = null;
var count__26620_26653 = (0);
var i__26621_26654 = (0);
while(true){
if((i__26621_26654 < count__26620_26653)){
var req_26655 = cljs.core._nth.call(null,chunk__26619_26652,i__26621_26654);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26655,prov);

var G__26656 = seq__26618_26651;
var G__26657 = chunk__26619_26652;
var G__26658 = count__26620_26653;
var G__26659 = (i__26621_26654 + (1));
seq__26618_26651 = G__26656;
chunk__26619_26652 = G__26657;
count__26620_26653 = G__26658;
i__26621_26654 = G__26659;
continue;
} else {
var temp__4657__auto___26660__$1 = cljs.core.seq.call(null,seq__26618_26651);
if(temp__4657__auto___26660__$1){
var seq__26618_26661__$1 = temp__4657__auto___26660__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26618_26661__$1)){
var c__19256__auto___26662 = cljs.core.chunk_first.call(null,seq__26618_26661__$1);
var G__26663 = cljs.core.chunk_rest.call(null,seq__26618_26661__$1);
var G__26664 = c__19256__auto___26662;
var G__26665 = cljs.core.count.call(null,c__19256__auto___26662);
var G__26666 = (0);
seq__26618_26651 = G__26663;
chunk__26619_26652 = G__26664;
count__26620_26653 = G__26665;
i__26621_26654 = G__26666;
continue;
} else {
var req_26667 = cljs.core.first.call(null,seq__26618_26661__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26667,prov);

var G__26668 = cljs.core.next.call(null,seq__26618_26661__$1);
var G__26669 = null;
var G__26670 = (0);
var G__26671 = (0);
seq__26618_26651 = G__26668;
chunk__26619_26652 = G__26669;
count__26620_26653 = G__26670;
i__26621_26654 = G__26671;
continue;
}
} else {
}
}
break;
}

var G__26672 = cljs.core.next.call(null,seq__26610__$1);
var G__26673 = null;
var G__26674 = (0);
var G__26675 = (0);
seq__26610 = G__26672;
chunk__26611 = G__26673;
count__26612 = G__26674;
i__26613 = G__26675;
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
var seq__26680_26684 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26681_26685 = null;
var count__26682_26686 = (0);
var i__26683_26687 = (0);
while(true){
if((i__26683_26687 < count__26682_26686)){
var ns_26688 = cljs.core._nth.call(null,chunk__26681_26685,i__26683_26687);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26688);

var G__26689 = seq__26680_26684;
var G__26690 = chunk__26681_26685;
var G__26691 = count__26682_26686;
var G__26692 = (i__26683_26687 + (1));
seq__26680_26684 = G__26689;
chunk__26681_26685 = G__26690;
count__26682_26686 = G__26691;
i__26683_26687 = G__26692;
continue;
} else {
var temp__4657__auto___26693 = cljs.core.seq.call(null,seq__26680_26684);
if(temp__4657__auto___26693){
var seq__26680_26694__$1 = temp__4657__auto___26693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26680_26694__$1)){
var c__19256__auto___26695 = cljs.core.chunk_first.call(null,seq__26680_26694__$1);
var G__26696 = cljs.core.chunk_rest.call(null,seq__26680_26694__$1);
var G__26697 = c__19256__auto___26695;
var G__26698 = cljs.core.count.call(null,c__19256__auto___26695);
var G__26699 = (0);
seq__26680_26684 = G__26696;
chunk__26681_26685 = G__26697;
count__26682_26686 = G__26698;
i__26683_26687 = G__26699;
continue;
} else {
var ns_26700 = cljs.core.first.call(null,seq__26680_26694__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26700);

var G__26701 = cljs.core.next.call(null,seq__26680_26694__$1);
var G__26702 = null;
var G__26703 = (0);
var G__26704 = (0);
seq__26680_26684 = G__26701;
chunk__26681_26685 = G__26702;
count__26682_26686 = G__26703;
i__26683_26687 = G__26704;
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
goog.require_figwheel_backup_ = (function (){var or__18445__auto__ = goog.require__;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
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
var G__26705__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26706__i = 0, G__26706__a = new Array(arguments.length -  0);
while (G__26706__i < G__26706__a.length) {G__26706__a[G__26706__i] = arguments[G__26706__i + 0]; ++G__26706__i;}
  args = new cljs.core.IndexedSeq(G__26706__a,0);
} 
return G__26705__delegate.call(this,args);};
G__26705.cljs$lang$maxFixedArity = 0;
G__26705.cljs$lang$applyTo = (function (arglist__26707){
var args = cljs.core.seq(arglist__26707);
return G__26705__delegate(args);
});
G__26705.cljs$core$IFn$_invoke$arity$variadic = G__26705__delegate;
return G__26705;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26709 = cljs.core._EQ_;
var expr__26710 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26709.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26710))){
var path_parts = ((function (pred__26709,expr__26710){
return (function (p1__26708_SHARP_){
return clojure.string.split.call(null,p1__26708_SHARP_,/[\/\\]/);
});})(pred__26709,expr__26710))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26709,expr__26710){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26712){if((e26712 instanceof Error)){
var e = e26712;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26712;

}
}})());
});
;})(path_parts,sep,root,pred__26709,expr__26710))
} else {
if(cljs.core.truth_(pred__26709.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26710))){
return ((function (pred__26709,expr__26710){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26709,expr__26710){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26709,expr__26710))
);

return deferred.addErrback(((function (deferred,pred__26709,expr__26710){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26709,expr__26710))
);
});
;})(pred__26709,expr__26710))
} else {
return ((function (pred__26709,expr__26710){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26709,expr__26710))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26713,callback){
var map__26716 = p__26713;
var map__26716__$1 = ((((!((map__26716 == null)))?((((map__26716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26716):map__26716);
var file_msg = map__26716__$1;
var request_url = cljs.core.get.call(null,map__26716__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26716,map__26716__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26716,map__26716__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__){
return (function (state_26740){
var state_val_26741 = (state_26740[(1)]);
if((state_val_26741 === (7))){
var inst_26736 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26742_26762 = state_26740__$1;
(statearr_26742_26762[(2)] = inst_26736);

(statearr_26742_26762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (1))){
var state_26740__$1 = state_26740;
var statearr_26743_26763 = state_26740__$1;
(statearr_26743_26763[(2)] = null);

(statearr_26743_26763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (4))){
var inst_26720 = (state_26740[(7)]);
var inst_26720__$1 = (state_26740[(2)]);
var state_26740__$1 = (function (){var statearr_26744 = state_26740;
(statearr_26744[(7)] = inst_26720__$1);

return statearr_26744;
})();
if(cljs.core.truth_(inst_26720__$1)){
var statearr_26745_26764 = state_26740__$1;
(statearr_26745_26764[(1)] = (5));

} else {
var statearr_26746_26765 = state_26740__$1;
(statearr_26746_26765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (6))){
var state_26740__$1 = state_26740;
var statearr_26747_26766 = state_26740__$1;
(statearr_26747_26766[(2)] = null);

(statearr_26747_26766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (3))){
var inst_26738 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26740__$1,inst_26738);
} else {
if((state_val_26741 === (2))){
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26741 === (11))){
var inst_26732 = (state_26740[(2)]);
var state_26740__$1 = (function (){var statearr_26748 = state_26740;
(statearr_26748[(8)] = inst_26732);

return statearr_26748;
})();
var statearr_26749_26767 = state_26740__$1;
(statearr_26749_26767[(2)] = null);

(statearr_26749_26767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (9))){
var inst_26724 = (state_26740[(9)]);
var inst_26726 = (state_26740[(10)]);
var inst_26728 = inst_26726.call(null,inst_26724);
var state_26740__$1 = state_26740;
var statearr_26750_26768 = state_26740__$1;
(statearr_26750_26768[(2)] = inst_26728);

(statearr_26750_26768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (5))){
var inst_26720 = (state_26740[(7)]);
var inst_26722 = figwheel.client.file_reloading.blocking_load.call(null,inst_26720);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(8),inst_26722);
} else {
if((state_val_26741 === (10))){
var inst_26724 = (state_26740[(9)]);
var inst_26730 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26724);
var state_26740__$1 = state_26740;
var statearr_26751_26769 = state_26740__$1;
(statearr_26751_26769[(2)] = inst_26730);

(statearr_26751_26769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (8))){
var inst_26720 = (state_26740[(7)]);
var inst_26726 = (state_26740[(10)]);
var inst_26724 = (state_26740[(2)]);
var inst_26725 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26726__$1 = cljs.core.get.call(null,inst_26725,inst_26720);
var state_26740__$1 = (function (){var statearr_26752 = state_26740;
(statearr_26752[(9)] = inst_26724);

(statearr_26752[(10)] = inst_26726__$1);

return statearr_26752;
})();
if(cljs.core.truth_(inst_26726__$1)){
var statearr_26753_26770 = state_26740__$1;
(statearr_26753_26770[(1)] = (9));

} else {
var statearr_26754_26771 = state_26740__$1;
(statearr_26754_26771[(1)] = (10));

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
});})(c__23568__auto__))
;
return ((function (switch__23456__auto__,c__23568__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23457__auto__ = null;
var figwheel$client$file_reloading$state_machine__23457__auto____0 = (function (){
var statearr_26758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26758[(0)] = figwheel$client$file_reloading$state_machine__23457__auto__);

(statearr_26758[(1)] = (1));

return statearr_26758;
});
var figwheel$client$file_reloading$state_machine__23457__auto____1 = (function (state_26740){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_26740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e26759){if((e26759 instanceof Object)){
var ex__23460__auto__ = e26759;
var statearr_26760_26772 = state_26740;
(statearr_26760_26772[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26773 = state_26740;
state_26740 = G__26773;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23457__auto__ = function(state_26740){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23457__auto____1.call(this,state_26740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23457__auto____0;
figwheel$client$file_reloading$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23457__auto____1;
return figwheel$client$file_reloading$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__))
})();
var state__23570__auto__ = (function (){var statearr_26761 = f__23569__auto__.call(null);
(statearr_26761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_26761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__))
);

return c__23568__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26774,callback){
var map__26777 = p__26774;
var map__26777__$1 = ((((!((map__26777 == null)))?((((map__26777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26777):map__26777);
var file_msg = map__26777__$1;
var namespace = cljs.core.get.call(null,map__26777__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26777,map__26777__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26777,map__26777__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26779){
var map__26782 = p__26779;
var map__26782__$1 = ((((!((map__26782 == null)))?((((map__26782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26782):map__26782);
var file_msg = map__26782__$1;
var namespace = cljs.core.get.call(null,map__26782__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18433__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18433__auto__){
var or__18445__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
var or__18445__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18445__auto____$1)){
return or__18445__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18433__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26784,callback){
var map__26787 = p__26784;
var map__26787__$1 = ((((!((map__26787 == null)))?((((map__26787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26787):map__26787);
var file_msg = map__26787__$1;
var request_url = cljs.core.get.call(null,map__26787__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26787__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23568__auto___26875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___26875,out){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___26875,out){
return (function (state_26857){
var state_val_26858 = (state_26857[(1)]);
if((state_val_26858 === (1))){
var inst_26835 = cljs.core.nth.call(null,files,(0),null);
var inst_26836 = cljs.core.nthnext.call(null,files,(1));
var inst_26837 = files;
var state_26857__$1 = (function (){var statearr_26859 = state_26857;
(statearr_26859[(7)] = inst_26836);

(statearr_26859[(8)] = inst_26835);

(statearr_26859[(9)] = inst_26837);

return statearr_26859;
})();
var statearr_26860_26876 = state_26857__$1;
(statearr_26860_26876[(2)] = null);

(statearr_26860_26876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (2))){
var inst_26837 = (state_26857[(9)]);
var inst_26840 = (state_26857[(10)]);
var inst_26840__$1 = cljs.core.nth.call(null,inst_26837,(0),null);
var inst_26841 = cljs.core.nthnext.call(null,inst_26837,(1));
var inst_26842 = (inst_26840__$1 == null);
var inst_26843 = cljs.core.not.call(null,inst_26842);
var state_26857__$1 = (function (){var statearr_26861 = state_26857;
(statearr_26861[(11)] = inst_26841);

(statearr_26861[(10)] = inst_26840__$1);

return statearr_26861;
})();
if(inst_26843){
var statearr_26862_26877 = state_26857__$1;
(statearr_26862_26877[(1)] = (4));

} else {
var statearr_26863_26878 = state_26857__$1;
(statearr_26863_26878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (3))){
var inst_26855 = (state_26857[(2)]);
var state_26857__$1 = state_26857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26857__$1,inst_26855);
} else {
if((state_val_26858 === (4))){
var inst_26840 = (state_26857[(10)]);
var inst_26845 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26840);
var state_26857__$1 = state_26857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26857__$1,(7),inst_26845);
} else {
if((state_val_26858 === (5))){
var inst_26851 = cljs.core.async.close_BANG_.call(null,out);
var state_26857__$1 = state_26857;
var statearr_26864_26879 = state_26857__$1;
(statearr_26864_26879[(2)] = inst_26851);

(statearr_26864_26879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (6))){
var inst_26853 = (state_26857[(2)]);
var state_26857__$1 = state_26857;
var statearr_26865_26880 = state_26857__$1;
(statearr_26865_26880[(2)] = inst_26853);

(statearr_26865_26880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (7))){
var inst_26841 = (state_26857[(11)]);
var inst_26847 = (state_26857[(2)]);
var inst_26848 = cljs.core.async.put_BANG_.call(null,out,inst_26847);
var inst_26837 = inst_26841;
var state_26857__$1 = (function (){var statearr_26866 = state_26857;
(statearr_26866[(12)] = inst_26848);

(statearr_26866[(9)] = inst_26837);

return statearr_26866;
})();
var statearr_26867_26881 = state_26857__$1;
(statearr_26867_26881[(2)] = null);

(statearr_26867_26881[(1)] = (2));


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
});})(c__23568__auto___26875,out))
;
return ((function (switch__23456__auto__,c__23568__auto___26875,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto____0 = (function (){
var statearr_26871 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26871[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto__);

(statearr_26871[(1)] = (1));

return statearr_26871;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto____1 = (function (state_26857){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_26857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e26872){if((e26872 instanceof Object)){
var ex__23460__auto__ = e26872;
var statearr_26873_26882 = state_26857;
(statearr_26873_26882[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26883 = state_26857;
state_26857 = G__26883;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto__ = function(state_26857){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto____1.call(this,state_26857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___26875,out))
})();
var state__23570__auto__ = (function (){var statearr_26874 = f__23569__auto__.call(null);
(statearr_26874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___26875);

return statearr_26874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___26875,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26884,opts){
var map__26888 = p__26884;
var map__26888__$1 = ((((!((map__26888 == null)))?((((map__26888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26888):map__26888);
var eval_body__$1 = cljs.core.get.call(null,map__26888__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18433__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18433__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18433__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26890){var e = e26890;
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
return (function (p1__26891_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26891_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__26896){
var vec__26897 = p__26896;
var k = cljs.core.nth.call(null,vec__26897,(0),null);
var v = cljs.core.nth.call(null,vec__26897,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26898){
var vec__26899 = p__26898;
var k = cljs.core.nth.call(null,vec__26899,(0),null);
var v = cljs.core.nth.call(null,vec__26899,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26903,p__26904){
var map__27151 = p__26903;
var map__27151__$1 = ((((!((map__27151 == null)))?((((map__27151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27151):map__27151);
var opts = map__27151__$1;
var before_jsload = cljs.core.get.call(null,map__27151__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27151__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27151__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27152 = p__26904;
var map__27152__$1 = ((((!((map__27152 == null)))?((((map__27152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27152):map__27152);
var msg = map__27152__$1;
var files = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27152__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27305){
var state_val_27306 = (state_27305[(1)]);
if((state_val_27306 === (7))){
var inst_27167 = (state_27305[(7)]);
var inst_27168 = (state_27305[(8)]);
var inst_27169 = (state_27305[(9)]);
var inst_27166 = (state_27305[(10)]);
var inst_27174 = cljs.core._nth.call(null,inst_27167,inst_27169);
var inst_27175 = figwheel.client.file_reloading.eval_body.call(null,inst_27174,opts);
var inst_27176 = (inst_27169 + (1));
var tmp27307 = inst_27167;
var tmp27308 = inst_27168;
var tmp27309 = inst_27166;
var inst_27166__$1 = tmp27309;
var inst_27167__$1 = tmp27307;
var inst_27168__$1 = tmp27308;
var inst_27169__$1 = inst_27176;
var state_27305__$1 = (function (){var statearr_27310 = state_27305;
(statearr_27310[(7)] = inst_27167__$1);

(statearr_27310[(11)] = inst_27175);

(statearr_27310[(8)] = inst_27168__$1);

(statearr_27310[(9)] = inst_27169__$1);

(statearr_27310[(10)] = inst_27166__$1);

return statearr_27310;
})();
var statearr_27311_27397 = state_27305__$1;
(statearr_27311_27397[(2)] = null);

(statearr_27311_27397[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (20))){
var inst_27209 = (state_27305[(12)]);
var inst_27217 = figwheel.client.file_reloading.sort_files.call(null,inst_27209);
var state_27305__$1 = state_27305;
var statearr_27312_27398 = state_27305__$1;
(statearr_27312_27398[(2)] = inst_27217);

(statearr_27312_27398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (27))){
var state_27305__$1 = state_27305;
var statearr_27313_27399 = state_27305__$1;
(statearr_27313_27399[(2)] = null);

(statearr_27313_27399[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (1))){
var inst_27158 = (state_27305[(13)]);
var inst_27155 = before_jsload.call(null,files);
var inst_27156 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27157 = (function (){return ((function (inst_27158,inst_27155,inst_27156,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26900_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26900_SHARP_);
});
;})(inst_27158,inst_27155,inst_27156,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27158__$1 = cljs.core.filter.call(null,inst_27157,files);
var inst_27159 = cljs.core.not_empty.call(null,inst_27158__$1);
var state_27305__$1 = (function (){var statearr_27314 = state_27305;
(statearr_27314[(14)] = inst_27155);

(statearr_27314[(13)] = inst_27158__$1);

(statearr_27314[(15)] = inst_27156);

return statearr_27314;
})();
if(cljs.core.truth_(inst_27159)){
var statearr_27315_27400 = state_27305__$1;
(statearr_27315_27400[(1)] = (2));

} else {
var statearr_27316_27401 = state_27305__$1;
(statearr_27316_27401[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (24))){
var state_27305__$1 = state_27305;
var statearr_27317_27402 = state_27305__$1;
(statearr_27317_27402[(2)] = null);

(statearr_27317_27402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (39))){
var inst_27259 = (state_27305[(16)]);
var state_27305__$1 = state_27305;
var statearr_27318_27403 = state_27305__$1;
(statearr_27318_27403[(2)] = inst_27259);

(statearr_27318_27403[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (46))){
var inst_27300 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27319_27404 = state_27305__$1;
(statearr_27319_27404[(2)] = inst_27300);

(statearr_27319_27404[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (4))){
var inst_27203 = (state_27305[(2)]);
var inst_27204 = cljs.core.List.EMPTY;
var inst_27205 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27204);
var inst_27206 = (function (){return ((function (inst_27203,inst_27204,inst_27205,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26901_SHARP_){
var and__18433__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26901_SHARP_);
if(cljs.core.truth_(and__18433__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26901_SHARP_));
} else {
return and__18433__auto__;
}
});
;})(inst_27203,inst_27204,inst_27205,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27207 = cljs.core.filter.call(null,inst_27206,files);
var inst_27208 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27209 = cljs.core.concat.call(null,inst_27207,inst_27208);
var state_27305__$1 = (function (){var statearr_27320 = state_27305;
(statearr_27320[(12)] = inst_27209);

(statearr_27320[(17)] = inst_27203);

(statearr_27320[(18)] = inst_27205);

return statearr_27320;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27321_27405 = state_27305__$1;
(statearr_27321_27405[(1)] = (16));

} else {
var statearr_27322_27406 = state_27305__$1;
(statearr_27322_27406[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (15))){
var inst_27193 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27323_27407 = state_27305__$1;
(statearr_27323_27407[(2)] = inst_27193);

(statearr_27323_27407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (21))){
var inst_27219 = (state_27305[(19)]);
var inst_27219__$1 = (state_27305[(2)]);
var inst_27220 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27219__$1);
var state_27305__$1 = (function (){var statearr_27324 = state_27305;
(statearr_27324[(19)] = inst_27219__$1);

return statearr_27324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27305__$1,(22),inst_27220);
} else {
if((state_val_27306 === (31))){
var inst_27303 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27305__$1,inst_27303);
} else {
if((state_val_27306 === (32))){
var inst_27259 = (state_27305[(16)]);
var inst_27264 = inst_27259.cljs$lang$protocol_mask$partition0$;
var inst_27265 = (inst_27264 & (64));
var inst_27266 = inst_27259.cljs$core$ISeq$;
var inst_27267 = (inst_27265) || (inst_27266);
var state_27305__$1 = state_27305;
if(cljs.core.truth_(inst_27267)){
var statearr_27325_27408 = state_27305__$1;
(statearr_27325_27408[(1)] = (35));

} else {
var statearr_27326_27409 = state_27305__$1;
(statearr_27326_27409[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (40))){
var inst_27280 = (state_27305[(20)]);
var inst_27279 = (state_27305[(2)]);
var inst_27280__$1 = cljs.core.get.call(null,inst_27279,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27281 = cljs.core.get.call(null,inst_27279,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27282 = cljs.core.not_empty.call(null,inst_27280__$1);
var state_27305__$1 = (function (){var statearr_27327 = state_27305;
(statearr_27327[(21)] = inst_27281);

(statearr_27327[(20)] = inst_27280__$1);

return statearr_27327;
})();
if(cljs.core.truth_(inst_27282)){
var statearr_27328_27410 = state_27305__$1;
(statearr_27328_27410[(1)] = (41));

} else {
var statearr_27329_27411 = state_27305__$1;
(statearr_27329_27411[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (33))){
var state_27305__$1 = state_27305;
var statearr_27330_27412 = state_27305__$1;
(statearr_27330_27412[(2)] = false);

(statearr_27330_27412[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (13))){
var inst_27179 = (state_27305[(22)]);
var inst_27183 = cljs.core.chunk_first.call(null,inst_27179);
var inst_27184 = cljs.core.chunk_rest.call(null,inst_27179);
var inst_27185 = cljs.core.count.call(null,inst_27183);
var inst_27166 = inst_27184;
var inst_27167 = inst_27183;
var inst_27168 = inst_27185;
var inst_27169 = (0);
var state_27305__$1 = (function (){var statearr_27331 = state_27305;
(statearr_27331[(7)] = inst_27167);

(statearr_27331[(8)] = inst_27168);

(statearr_27331[(9)] = inst_27169);

(statearr_27331[(10)] = inst_27166);

return statearr_27331;
})();
var statearr_27332_27413 = state_27305__$1;
(statearr_27332_27413[(2)] = null);

(statearr_27332_27413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (22))){
var inst_27227 = (state_27305[(23)]);
var inst_27222 = (state_27305[(24)]);
var inst_27223 = (state_27305[(25)]);
var inst_27219 = (state_27305[(19)]);
var inst_27222__$1 = (state_27305[(2)]);
var inst_27223__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27222__$1);
var inst_27224 = (function (){var all_files = inst_27219;
var res_SINGLEQUOTE_ = inst_27222__$1;
var res = inst_27223__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27227,inst_27222,inst_27223,inst_27219,inst_27222__$1,inst_27223__$1,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26902_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26902_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27227,inst_27222,inst_27223,inst_27219,inst_27222__$1,inst_27223__$1,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27225 = cljs.core.filter.call(null,inst_27224,inst_27222__$1);
var inst_27226 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27227__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27226);
var inst_27228 = cljs.core.not_empty.call(null,inst_27227__$1);
var state_27305__$1 = (function (){var statearr_27333 = state_27305;
(statearr_27333[(23)] = inst_27227__$1);

(statearr_27333[(24)] = inst_27222__$1);

(statearr_27333[(25)] = inst_27223__$1);

(statearr_27333[(26)] = inst_27225);

return statearr_27333;
})();
if(cljs.core.truth_(inst_27228)){
var statearr_27334_27414 = state_27305__$1;
(statearr_27334_27414[(1)] = (23));

} else {
var statearr_27335_27415 = state_27305__$1;
(statearr_27335_27415[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (36))){
var state_27305__$1 = state_27305;
var statearr_27336_27416 = state_27305__$1;
(statearr_27336_27416[(2)] = false);

(statearr_27336_27416[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (41))){
var inst_27280 = (state_27305[(20)]);
var inst_27284 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27285 = cljs.core.map.call(null,inst_27284,inst_27280);
var inst_27286 = cljs.core.pr_str.call(null,inst_27285);
var inst_27287 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27286)].join('');
var inst_27288 = figwheel.client.utils.log.call(null,inst_27287);
var state_27305__$1 = state_27305;
var statearr_27337_27417 = state_27305__$1;
(statearr_27337_27417[(2)] = inst_27288);

(statearr_27337_27417[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (43))){
var inst_27281 = (state_27305[(21)]);
var inst_27291 = (state_27305[(2)]);
var inst_27292 = cljs.core.not_empty.call(null,inst_27281);
var state_27305__$1 = (function (){var statearr_27338 = state_27305;
(statearr_27338[(27)] = inst_27291);

return statearr_27338;
})();
if(cljs.core.truth_(inst_27292)){
var statearr_27339_27418 = state_27305__$1;
(statearr_27339_27418[(1)] = (44));

} else {
var statearr_27340_27419 = state_27305__$1;
(statearr_27340_27419[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (29))){
var inst_27259 = (state_27305[(16)]);
var inst_27227 = (state_27305[(23)]);
var inst_27222 = (state_27305[(24)]);
var inst_27223 = (state_27305[(25)]);
var inst_27219 = (state_27305[(19)]);
var inst_27225 = (state_27305[(26)]);
var inst_27255 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27258 = (function (){var all_files = inst_27219;
var res_SINGLEQUOTE_ = inst_27222;
var res = inst_27223;
var files_not_loaded = inst_27225;
var dependencies_that_loaded = inst_27227;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27259,inst_27227,inst_27222,inst_27223,inst_27219,inst_27225,inst_27255,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27257){
var map__27341 = p__27257;
var map__27341__$1 = ((((!((map__27341 == null)))?((((map__27341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27341):map__27341);
var namespace = cljs.core.get.call(null,map__27341__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27259,inst_27227,inst_27222,inst_27223,inst_27219,inst_27225,inst_27255,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27259__$1 = cljs.core.group_by.call(null,inst_27258,inst_27225);
var inst_27261 = (inst_27259__$1 == null);
var inst_27262 = cljs.core.not.call(null,inst_27261);
var state_27305__$1 = (function (){var statearr_27343 = state_27305;
(statearr_27343[(28)] = inst_27255);

(statearr_27343[(16)] = inst_27259__$1);

return statearr_27343;
})();
if(inst_27262){
var statearr_27344_27420 = state_27305__$1;
(statearr_27344_27420[(1)] = (32));

} else {
var statearr_27345_27421 = state_27305__$1;
(statearr_27345_27421[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (44))){
var inst_27281 = (state_27305[(21)]);
var inst_27294 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27281);
var inst_27295 = cljs.core.pr_str.call(null,inst_27294);
var inst_27296 = [cljs.core.str("not required: "),cljs.core.str(inst_27295)].join('');
var inst_27297 = figwheel.client.utils.log.call(null,inst_27296);
var state_27305__$1 = state_27305;
var statearr_27346_27422 = state_27305__$1;
(statearr_27346_27422[(2)] = inst_27297);

(statearr_27346_27422[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (6))){
var inst_27200 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27347_27423 = state_27305__$1;
(statearr_27347_27423[(2)] = inst_27200);

(statearr_27347_27423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (28))){
var inst_27225 = (state_27305[(26)]);
var inst_27252 = (state_27305[(2)]);
var inst_27253 = cljs.core.not_empty.call(null,inst_27225);
var state_27305__$1 = (function (){var statearr_27348 = state_27305;
(statearr_27348[(29)] = inst_27252);

return statearr_27348;
})();
if(cljs.core.truth_(inst_27253)){
var statearr_27349_27424 = state_27305__$1;
(statearr_27349_27424[(1)] = (29));

} else {
var statearr_27350_27425 = state_27305__$1;
(statearr_27350_27425[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (25))){
var inst_27223 = (state_27305[(25)]);
var inst_27239 = (state_27305[(2)]);
var inst_27240 = cljs.core.not_empty.call(null,inst_27223);
var state_27305__$1 = (function (){var statearr_27351 = state_27305;
(statearr_27351[(30)] = inst_27239);

return statearr_27351;
})();
if(cljs.core.truth_(inst_27240)){
var statearr_27352_27426 = state_27305__$1;
(statearr_27352_27426[(1)] = (26));

} else {
var statearr_27353_27427 = state_27305__$1;
(statearr_27353_27427[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (34))){
var inst_27274 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
if(cljs.core.truth_(inst_27274)){
var statearr_27354_27428 = state_27305__$1;
(statearr_27354_27428[(1)] = (38));

} else {
var statearr_27355_27429 = state_27305__$1;
(statearr_27355_27429[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (17))){
var state_27305__$1 = state_27305;
var statearr_27356_27430 = state_27305__$1;
(statearr_27356_27430[(2)] = recompile_dependents);

(statearr_27356_27430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (3))){
var state_27305__$1 = state_27305;
var statearr_27357_27431 = state_27305__$1;
(statearr_27357_27431[(2)] = null);

(statearr_27357_27431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (12))){
var inst_27196 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27358_27432 = state_27305__$1;
(statearr_27358_27432[(2)] = inst_27196);

(statearr_27358_27432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (2))){
var inst_27158 = (state_27305[(13)]);
var inst_27165 = cljs.core.seq.call(null,inst_27158);
var inst_27166 = inst_27165;
var inst_27167 = null;
var inst_27168 = (0);
var inst_27169 = (0);
var state_27305__$1 = (function (){var statearr_27359 = state_27305;
(statearr_27359[(7)] = inst_27167);

(statearr_27359[(8)] = inst_27168);

(statearr_27359[(9)] = inst_27169);

(statearr_27359[(10)] = inst_27166);

return statearr_27359;
})();
var statearr_27360_27433 = state_27305__$1;
(statearr_27360_27433[(2)] = null);

(statearr_27360_27433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (23))){
var inst_27227 = (state_27305[(23)]);
var inst_27222 = (state_27305[(24)]);
var inst_27223 = (state_27305[(25)]);
var inst_27219 = (state_27305[(19)]);
var inst_27225 = (state_27305[(26)]);
var inst_27230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27232 = (function (){var all_files = inst_27219;
var res_SINGLEQUOTE_ = inst_27222;
var res = inst_27223;
var files_not_loaded = inst_27225;
var dependencies_that_loaded = inst_27227;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27227,inst_27222,inst_27223,inst_27219,inst_27225,inst_27230,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27231){
var map__27361 = p__27231;
var map__27361__$1 = ((((!((map__27361 == null)))?((((map__27361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27361):map__27361);
var request_url = cljs.core.get.call(null,map__27361__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27227,inst_27222,inst_27223,inst_27219,inst_27225,inst_27230,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27233 = cljs.core.reverse.call(null,inst_27227);
var inst_27234 = cljs.core.map.call(null,inst_27232,inst_27233);
var inst_27235 = cljs.core.pr_str.call(null,inst_27234);
var inst_27236 = figwheel.client.utils.log.call(null,inst_27235);
var state_27305__$1 = (function (){var statearr_27363 = state_27305;
(statearr_27363[(31)] = inst_27230);

return statearr_27363;
})();
var statearr_27364_27434 = state_27305__$1;
(statearr_27364_27434[(2)] = inst_27236);

(statearr_27364_27434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (35))){
var state_27305__$1 = state_27305;
var statearr_27365_27435 = state_27305__$1;
(statearr_27365_27435[(2)] = true);

(statearr_27365_27435[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (19))){
var inst_27209 = (state_27305[(12)]);
var inst_27215 = figwheel.client.file_reloading.expand_files.call(null,inst_27209);
var state_27305__$1 = state_27305;
var statearr_27366_27436 = state_27305__$1;
(statearr_27366_27436[(2)] = inst_27215);

(statearr_27366_27436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (11))){
var state_27305__$1 = state_27305;
var statearr_27367_27437 = state_27305__$1;
(statearr_27367_27437[(2)] = null);

(statearr_27367_27437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (9))){
var inst_27198 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27368_27438 = state_27305__$1;
(statearr_27368_27438[(2)] = inst_27198);

(statearr_27368_27438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (5))){
var inst_27168 = (state_27305[(8)]);
var inst_27169 = (state_27305[(9)]);
var inst_27171 = (inst_27169 < inst_27168);
var inst_27172 = inst_27171;
var state_27305__$1 = state_27305;
if(cljs.core.truth_(inst_27172)){
var statearr_27369_27439 = state_27305__$1;
(statearr_27369_27439[(1)] = (7));

} else {
var statearr_27370_27440 = state_27305__$1;
(statearr_27370_27440[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (14))){
var inst_27179 = (state_27305[(22)]);
var inst_27188 = cljs.core.first.call(null,inst_27179);
var inst_27189 = figwheel.client.file_reloading.eval_body.call(null,inst_27188,opts);
var inst_27190 = cljs.core.next.call(null,inst_27179);
var inst_27166 = inst_27190;
var inst_27167 = null;
var inst_27168 = (0);
var inst_27169 = (0);
var state_27305__$1 = (function (){var statearr_27371 = state_27305;
(statearr_27371[(32)] = inst_27189);

(statearr_27371[(7)] = inst_27167);

(statearr_27371[(8)] = inst_27168);

(statearr_27371[(9)] = inst_27169);

(statearr_27371[(10)] = inst_27166);

return statearr_27371;
})();
var statearr_27372_27441 = state_27305__$1;
(statearr_27372_27441[(2)] = null);

(statearr_27372_27441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (45))){
var state_27305__$1 = state_27305;
var statearr_27373_27442 = state_27305__$1;
(statearr_27373_27442[(2)] = null);

(statearr_27373_27442[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (26))){
var inst_27227 = (state_27305[(23)]);
var inst_27222 = (state_27305[(24)]);
var inst_27223 = (state_27305[(25)]);
var inst_27219 = (state_27305[(19)]);
var inst_27225 = (state_27305[(26)]);
var inst_27242 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27244 = (function (){var all_files = inst_27219;
var res_SINGLEQUOTE_ = inst_27222;
var res = inst_27223;
var files_not_loaded = inst_27225;
var dependencies_that_loaded = inst_27227;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27227,inst_27222,inst_27223,inst_27219,inst_27225,inst_27242,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27243){
var map__27374 = p__27243;
var map__27374__$1 = ((((!((map__27374 == null)))?((((map__27374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27374):map__27374);
var namespace = cljs.core.get.call(null,map__27374__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27374__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27227,inst_27222,inst_27223,inst_27219,inst_27225,inst_27242,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27245 = cljs.core.map.call(null,inst_27244,inst_27223);
var inst_27246 = cljs.core.pr_str.call(null,inst_27245);
var inst_27247 = figwheel.client.utils.log.call(null,inst_27246);
var inst_27248 = (function (){var all_files = inst_27219;
var res_SINGLEQUOTE_ = inst_27222;
var res = inst_27223;
var files_not_loaded = inst_27225;
var dependencies_that_loaded = inst_27227;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27227,inst_27222,inst_27223,inst_27219,inst_27225,inst_27242,inst_27244,inst_27245,inst_27246,inst_27247,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27227,inst_27222,inst_27223,inst_27219,inst_27225,inst_27242,inst_27244,inst_27245,inst_27246,inst_27247,state_val_27306,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27249 = setTimeout(inst_27248,(10));
var state_27305__$1 = (function (){var statearr_27376 = state_27305;
(statearr_27376[(33)] = inst_27242);

(statearr_27376[(34)] = inst_27247);

return statearr_27376;
})();
var statearr_27377_27443 = state_27305__$1;
(statearr_27377_27443[(2)] = inst_27249);

(statearr_27377_27443[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (16))){
var state_27305__$1 = state_27305;
var statearr_27378_27444 = state_27305__$1;
(statearr_27378_27444[(2)] = reload_dependents);

(statearr_27378_27444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (38))){
var inst_27259 = (state_27305[(16)]);
var inst_27276 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27259);
var state_27305__$1 = state_27305;
var statearr_27379_27445 = state_27305__$1;
(statearr_27379_27445[(2)] = inst_27276);

(statearr_27379_27445[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (30))){
var state_27305__$1 = state_27305;
var statearr_27380_27446 = state_27305__$1;
(statearr_27380_27446[(2)] = null);

(statearr_27380_27446[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (10))){
var inst_27179 = (state_27305[(22)]);
var inst_27181 = cljs.core.chunked_seq_QMARK_.call(null,inst_27179);
var state_27305__$1 = state_27305;
if(inst_27181){
var statearr_27381_27447 = state_27305__$1;
(statearr_27381_27447[(1)] = (13));

} else {
var statearr_27382_27448 = state_27305__$1;
(statearr_27382_27448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (18))){
var inst_27213 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
if(cljs.core.truth_(inst_27213)){
var statearr_27383_27449 = state_27305__$1;
(statearr_27383_27449[(1)] = (19));

} else {
var statearr_27384_27450 = state_27305__$1;
(statearr_27384_27450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (42))){
var state_27305__$1 = state_27305;
var statearr_27385_27451 = state_27305__$1;
(statearr_27385_27451[(2)] = null);

(statearr_27385_27451[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (37))){
var inst_27271 = (state_27305[(2)]);
var state_27305__$1 = state_27305;
var statearr_27386_27452 = state_27305__$1;
(statearr_27386_27452[(2)] = inst_27271);

(statearr_27386_27452[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27306 === (8))){
var inst_27179 = (state_27305[(22)]);
var inst_27166 = (state_27305[(10)]);
var inst_27179__$1 = cljs.core.seq.call(null,inst_27166);
var state_27305__$1 = (function (){var statearr_27387 = state_27305;
(statearr_27387[(22)] = inst_27179__$1);

return statearr_27387;
})();
if(inst_27179__$1){
var statearr_27388_27453 = state_27305__$1;
(statearr_27388_27453[(1)] = (10));

} else {
var statearr_27389_27454 = state_27305__$1;
(statearr_27389_27454[(1)] = (11));

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
});})(c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23456__auto__,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto____0 = (function (){
var statearr_27393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27393[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto__);

(statearr_27393[(1)] = (1));

return statearr_27393;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto____1 = (function (state_27305){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_27305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e27394){if((e27394 instanceof Object)){
var ex__23460__auto__ = e27394;
var statearr_27395_27455 = state_27305;
(statearr_27395_27455[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27456 = state_27305;
state_27305 = G__27456;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto__ = function(state_27305){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto____1.call(this,state_27305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23570__auto__ = (function (){var statearr_27396 = f__23569__auto__.call(null);
(statearr_27396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_27396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__,map__27151,map__27151__$1,opts,before_jsload,on_jsload,reload_dependents,map__27152,map__27152__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23568__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27459,link){
var map__27462 = p__27459;
var map__27462__$1 = ((((!((map__27462 == null)))?((((map__27462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27462):map__27462);
var file = cljs.core.get.call(null,map__27462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27462,map__27462__$1,file){
return (function (p1__27457_SHARP_,p2__27458_SHARP_){
if(cljs.core._EQ_.call(null,p1__27457_SHARP_,p2__27458_SHARP_)){
return p1__27457_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27462,map__27462__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27468){
var map__27469 = p__27468;
var map__27469__$1 = ((((!((map__27469 == null)))?((((map__27469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27469):map__27469);
var match_length = cljs.core.get.call(null,map__27469__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27469__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27464_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27464_SHARP_);
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
var args27471 = [];
var len__19514__auto___27474 = arguments.length;
var i__19515__auto___27475 = (0);
while(true){
if((i__19515__auto___27475 < len__19514__auto___27474)){
args27471.push((arguments[i__19515__auto___27475]));

var G__27476 = (i__19515__auto___27475 + (1));
i__19515__auto___27475 = G__27476;
continue;
} else {
}
break;
}

var G__27473 = args27471.length;
switch (G__27473) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27471.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27478_SHARP_,p2__27479_SHARP_){
return cljs.core.assoc.call(null,p1__27478_SHARP_,cljs.core.get.call(null,p2__27479_SHARP_,key),p2__27479_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27480){
var map__27483 = p__27480;
var map__27483__$1 = ((((!((map__27483 == null)))?((((map__27483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27483):map__27483);
var f_data = map__27483__$1;
var file = cljs.core.get.call(null,map__27483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27485,files_msg){
var map__27492 = p__27485;
var map__27492__$1 = ((((!((map__27492 == null)))?((((map__27492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27492):map__27492);
var opts = map__27492__$1;
var on_cssload = cljs.core.get.call(null,map__27492__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27494_27498 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27495_27499 = null;
var count__27496_27500 = (0);
var i__27497_27501 = (0);
while(true){
if((i__27497_27501 < count__27496_27500)){
var f_27502 = cljs.core._nth.call(null,chunk__27495_27499,i__27497_27501);
figwheel.client.file_reloading.reload_css_file.call(null,f_27502);

var G__27503 = seq__27494_27498;
var G__27504 = chunk__27495_27499;
var G__27505 = count__27496_27500;
var G__27506 = (i__27497_27501 + (1));
seq__27494_27498 = G__27503;
chunk__27495_27499 = G__27504;
count__27496_27500 = G__27505;
i__27497_27501 = G__27506;
continue;
} else {
var temp__4657__auto___27507 = cljs.core.seq.call(null,seq__27494_27498);
if(temp__4657__auto___27507){
var seq__27494_27508__$1 = temp__4657__auto___27507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27494_27508__$1)){
var c__19256__auto___27509 = cljs.core.chunk_first.call(null,seq__27494_27508__$1);
var G__27510 = cljs.core.chunk_rest.call(null,seq__27494_27508__$1);
var G__27511 = c__19256__auto___27509;
var G__27512 = cljs.core.count.call(null,c__19256__auto___27509);
var G__27513 = (0);
seq__27494_27498 = G__27510;
chunk__27495_27499 = G__27511;
count__27496_27500 = G__27512;
i__27497_27501 = G__27513;
continue;
} else {
var f_27514 = cljs.core.first.call(null,seq__27494_27508__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27514);

var G__27515 = cljs.core.next.call(null,seq__27494_27508__$1);
var G__27516 = null;
var G__27517 = (0);
var G__27518 = (0);
seq__27494_27498 = G__27515;
chunk__27495_27499 = G__27516;
count__27496_27500 = G__27517;
i__27497_27501 = G__27518;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27492,map__27492__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27492,map__27492__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map