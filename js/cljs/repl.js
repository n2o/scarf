// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27398_27412 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27399_27413 = null;
var count__27400_27414 = (0);
var i__27401_27415 = (0);
while(true){
if((i__27401_27415 < count__27400_27414)){
var f_27416 = cljs.core._nth.call(null,chunk__27399_27413,i__27401_27415);
cljs.core.println.call(null,"  ",f_27416);

var G__27417 = seq__27398_27412;
var G__27418 = chunk__27399_27413;
var G__27419 = count__27400_27414;
var G__27420 = (i__27401_27415 + (1));
seq__27398_27412 = G__27417;
chunk__27399_27413 = G__27418;
count__27400_27414 = G__27419;
i__27401_27415 = G__27420;
continue;
} else {
var temp__4657__auto___27421 = cljs.core.seq.call(null,seq__27398_27412);
if(temp__4657__auto___27421){
var seq__27398_27422__$1 = temp__4657__auto___27421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27398_27422__$1)){
var c__19209__auto___27423 = cljs.core.chunk_first.call(null,seq__27398_27422__$1);
var G__27424 = cljs.core.chunk_rest.call(null,seq__27398_27422__$1);
var G__27425 = c__19209__auto___27423;
var G__27426 = cljs.core.count.call(null,c__19209__auto___27423);
var G__27427 = (0);
seq__27398_27412 = G__27424;
chunk__27399_27413 = G__27425;
count__27400_27414 = G__27426;
i__27401_27415 = G__27427;
continue;
} else {
var f_27428 = cljs.core.first.call(null,seq__27398_27422__$1);
cljs.core.println.call(null,"  ",f_27428);

var G__27429 = cljs.core.next.call(null,seq__27398_27422__$1);
var G__27430 = null;
var G__27431 = (0);
var G__27432 = (0);
seq__27398_27412 = G__27429;
chunk__27399_27413 = G__27430;
count__27400_27414 = G__27431;
i__27401_27415 = G__27432;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27433 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18398__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27433);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27433)))?cljs.core.second.call(null,arglists_27433):arglists_27433));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27402 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27403 = null;
var count__27404 = (0);
var i__27405 = (0);
while(true){
if((i__27405 < count__27404)){
var vec__27406 = cljs.core._nth.call(null,chunk__27403,i__27405);
var name = cljs.core.nth.call(null,vec__27406,(0),null);
var map__27407 = cljs.core.nth.call(null,vec__27406,(1),null);
var map__27407__$1 = ((((!((map__27407 == null)))?((((map__27407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27407):map__27407);
var doc = cljs.core.get.call(null,map__27407__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27407__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27434 = seq__27402;
var G__27435 = chunk__27403;
var G__27436 = count__27404;
var G__27437 = (i__27405 + (1));
seq__27402 = G__27434;
chunk__27403 = G__27435;
count__27404 = G__27436;
i__27405 = G__27437;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27402);
if(temp__4657__auto__){
var seq__27402__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27402__$1)){
var c__19209__auto__ = cljs.core.chunk_first.call(null,seq__27402__$1);
var G__27438 = cljs.core.chunk_rest.call(null,seq__27402__$1);
var G__27439 = c__19209__auto__;
var G__27440 = cljs.core.count.call(null,c__19209__auto__);
var G__27441 = (0);
seq__27402 = G__27438;
chunk__27403 = G__27439;
count__27404 = G__27440;
i__27405 = G__27441;
continue;
} else {
var vec__27409 = cljs.core.first.call(null,seq__27402__$1);
var name = cljs.core.nth.call(null,vec__27409,(0),null);
var map__27410 = cljs.core.nth.call(null,vec__27409,(1),null);
var map__27410__$1 = ((((!((map__27410 == null)))?((((map__27410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27410):map__27410);
var doc = cljs.core.get.call(null,map__27410__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27410__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27442 = cljs.core.next.call(null,seq__27402__$1);
var G__27443 = null;
var G__27444 = (0);
var G__27445 = (0);
seq__27402 = G__27442;
chunk__27403 = G__27443;
count__27404 = G__27444;
i__27405 = G__27445;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map