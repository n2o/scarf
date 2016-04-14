// Compiled by ClojureScript 1.8.40 {}
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
var seq__27535_27549 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27536_27550 = null;
var count__27537_27551 = (0);
var i__27538_27552 = (0);
while(true){
if((i__27538_27552 < count__27537_27551)){
var f_27553 = cljs.core._nth.call(null,chunk__27536_27550,i__27538_27552);
cljs.core.println.call(null,"  ",f_27553);

var G__27554 = seq__27535_27549;
var G__27555 = chunk__27536_27550;
var G__27556 = count__27537_27551;
var G__27557 = (i__27538_27552 + (1));
seq__27535_27549 = G__27554;
chunk__27536_27550 = G__27555;
count__27537_27551 = G__27556;
i__27538_27552 = G__27557;
continue;
} else {
var temp__4657__auto___27558 = cljs.core.seq.call(null,seq__27535_27549);
if(temp__4657__auto___27558){
var seq__27535_27559__$1 = temp__4657__auto___27558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27535_27559__$1)){
var c__19256__auto___27560 = cljs.core.chunk_first.call(null,seq__27535_27559__$1);
var G__27561 = cljs.core.chunk_rest.call(null,seq__27535_27559__$1);
var G__27562 = c__19256__auto___27560;
var G__27563 = cljs.core.count.call(null,c__19256__auto___27560);
var G__27564 = (0);
seq__27535_27549 = G__27561;
chunk__27536_27550 = G__27562;
count__27537_27551 = G__27563;
i__27538_27552 = G__27564;
continue;
} else {
var f_27565 = cljs.core.first.call(null,seq__27535_27559__$1);
cljs.core.println.call(null,"  ",f_27565);

var G__27566 = cljs.core.next.call(null,seq__27535_27559__$1);
var G__27567 = null;
var G__27568 = (0);
var G__27569 = (0);
seq__27535_27549 = G__27566;
chunk__27536_27550 = G__27567;
count__27537_27551 = G__27568;
i__27538_27552 = G__27569;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27570 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18445__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27570);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27570)))?cljs.core.second.call(null,arglists_27570):arglists_27570));
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
var seq__27539 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27540 = null;
var count__27541 = (0);
var i__27542 = (0);
while(true){
if((i__27542 < count__27541)){
var vec__27543 = cljs.core._nth.call(null,chunk__27540,i__27542);
var name = cljs.core.nth.call(null,vec__27543,(0),null);
var map__27544 = cljs.core.nth.call(null,vec__27543,(1),null);
var map__27544__$1 = ((((!((map__27544 == null)))?((((map__27544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27544):map__27544);
var doc = cljs.core.get.call(null,map__27544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27544__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27571 = seq__27539;
var G__27572 = chunk__27540;
var G__27573 = count__27541;
var G__27574 = (i__27542 + (1));
seq__27539 = G__27571;
chunk__27540 = G__27572;
count__27541 = G__27573;
i__27542 = G__27574;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27539);
if(temp__4657__auto__){
var seq__27539__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27539__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__27539__$1);
var G__27575 = cljs.core.chunk_rest.call(null,seq__27539__$1);
var G__27576 = c__19256__auto__;
var G__27577 = cljs.core.count.call(null,c__19256__auto__);
var G__27578 = (0);
seq__27539 = G__27575;
chunk__27540 = G__27576;
count__27541 = G__27577;
i__27542 = G__27578;
continue;
} else {
var vec__27546 = cljs.core.first.call(null,seq__27539__$1);
var name = cljs.core.nth.call(null,vec__27546,(0),null);
var map__27547 = cljs.core.nth.call(null,vec__27546,(1),null);
var map__27547__$1 = ((((!((map__27547 == null)))?((((map__27547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27547):map__27547);
var doc = cljs.core.get.call(null,map__27547__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27547__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27579 = cljs.core.next.call(null,seq__27539__$1);
var G__27580 = null;
var G__27581 = (0);
var G__27582 = (0);
seq__27539 = G__27579;
chunk__27540 = G__27580;
count__27541 = G__27581;
i__27542 = G__27582;
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