// Compiled by ClojureScript 1.8.40 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__21471_21475 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__21472_21476 = null;
var count__21473_21477 = (0);
var i__21474_21478 = (0);
while(true){
if((i__21474_21478 < count__21473_21477)){
var k_21479 = cljs.core._nth.call(null,chunk__21472_21476,i__21474_21478);
var v_21480 = (b[k_21479]);
(a[k_21479] = v_21480);

var G__21481 = seq__21471_21475;
var G__21482 = chunk__21472_21476;
var G__21483 = count__21473_21477;
var G__21484 = (i__21474_21478 + (1));
seq__21471_21475 = G__21481;
chunk__21472_21476 = G__21482;
count__21473_21477 = G__21483;
i__21474_21478 = G__21484;
continue;
} else {
var temp__4657__auto___21485 = cljs.core.seq.call(null,seq__21471_21475);
if(temp__4657__auto___21485){
var seq__21471_21486__$1 = temp__4657__auto___21485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21471_21486__$1)){
var c__19256__auto___21487 = cljs.core.chunk_first.call(null,seq__21471_21486__$1);
var G__21488 = cljs.core.chunk_rest.call(null,seq__21471_21486__$1);
var G__21489 = c__19256__auto___21487;
var G__21490 = cljs.core.count.call(null,c__19256__auto___21487);
var G__21491 = (0);
seq__21471_21475 = G__21488;
chunk__21472_21476 = G__21489;
count__21473_21477 = G__21490;
i__21474_21478 = G__21491;
continue;
} else {
var k_21492 = cljs.core.first.call(null,seq__21471_21486__$1);
var v_21493 = (b[k_21492]);
(a[k_21492] = v_21493);

var G__21494 = cljs.core.next.call(null,seq__21471_21486__$1);
var G__21495 = null;
var G__21496 = (0);
var G__21497 = (0);
seq__21471_21475 = G__21494;
chunk__21472_21476 = G__21495;
count__21473_21477 = G__21496;
i__21474_21478 = G__21497;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args21498 = [];
var len__19514__auto___21501 = arguments.length;
var i__19515__auto___21502 = (0);
while(true){
if((i__19515__auto___21502 < len__19514__auto___21501)){
args21498.push((arguments[i__19515__auto___21502]));

var G__21503 = (i__19515__auto___21502 + (1));
i__19515__auto___21502 = G__21503;
continue;
} else {
}
break;
}

var G__21500 = args21498.length;
switch (G__21500) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21498.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__21505 = (i + (2));
var G__21506 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21505;
ret = G__21506;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21507_21511 = cljs.core.seq.call(null,v);
var chunk__21508_21512 = null;
var count__21509_21513 = (0);
var i__21510_21514 = (0);
while(true){
if((i__21510_21514 < count__21509_21513)){
var x_21515 = cljs.core._nth.call(null,chunk__21508_21512,i__21510_21514);
ret.push(x_21515);

var G__21516 = seq__21507_21511;
var G__21517 = chunk__21508_21512;
var G__21518 = count__21509_21513;
var G__21519 = (i__21510_21514 + (1));
seq__21507_21511 = G__21516;
chunk__21508_21512 = G__21517;
count__21509_21513 = G__21518;
i__21510_21514 = G__21519;
continue;
} else {
var temp__4657__auto___21520 = cljs.core.seq.call(null,seq__21507_21511);
if(temp__4657__auto___21520){
var seq__21507_21521__$1 = temp__4657__auto___21520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21507_21521__$1)){
var c__19256__auto___21522 = cljs.core.chunk_first.call(null,seq__21507_21521__$1);
var G__21523 = cljs.core.chunk_rest.call(null,seq__21507_21521__$1);
var G__21524 = c__19256__auto___21522;
var G__21525 = cljs.core.count.call(null,c__19256__auto___21522);
var G__21526 = (0);
seq__21507_21511 = G__21523;
chunk__21508_21512 = G__21524;
count__21509_21513 = G__21525;
i__21510_21514 = G__21526;
continue;
} else {
var x_21527 = cljs.core.first.call(null,seq__21507_21521__$1);
ret.push(x_21527);

var G__21528 = cljs.core.next.call(null,seq__21507_21521__$1);
var G__21529 = null;
var G__21530 = (0);
var G__21531 = (0);
seq__21507_21511 = G__21528;
chunk__21508_21512 = G__21529;
count__21509_21513 = G__21530;
i__21510_21514 = G__21531;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21532_21536 = cljs.core.seq.call(null,v);
var chunk__21533_21537 = null;
var count__21534_21538 = (0);
var i__21535_21539 = (0);
while(true){
if((i__21535_21539 < count__21534_21538)){
var x_21540 = cljs.core._nth.call(null,chunk__21533_21537,i__21535_21539);
ret.push(x_21540);

var G__21541 = seq__21532_21536;
var G__21542 = chunk__21533_21537;
var G__21543 = count__21534_21538;
var G__21544 = (i__21535_21539 + (1));
seq__21532_21536 = G__21541;
chunk__21533_21537 = G__21542;
count__21534_21538 = G__21543;
i__21535_21539 = G__21544;
continue;
} else {
var temp__4657__auto___21545 = cljs.core.seq.call(null,seq__21532_21536);
if(temp__4657__auto___21545){
var seq__21532_21546__$1 = temp__4657__auto___21545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21532_21546__$1)){
var c__19256__auto___21547 = cljs.core.chunk_first.call(null,seq__21532_21546__$1);
var G__21548 = cljs.core.chunk_rest.call(null,seq__21532_21546__$1);
var G__21549 = c__19256__auto___21547;
var G__21550 = cljs.core.count.call(null,c__19256__auto___21547);
var G__21551 = (0);
seq__21532_21536 = G__21548;
chunk__21533_21537 = G__21549;
count__21534_21538 = G__21550;
i__21535_21539 = G__21551;
continue;
} else {
var x_21552 = cljs.core.first.call(null,seq__21532_21546__$1);
ret.push(x_21552);

var G__21553 = cljs.core.next.call(null,seq__21532_21546__$1);
var G__21554 = null;
var G__21555 = (0);
var G__21556 = (0);
seq__21532_21536 = G__21553;
chunk__21533_21537 = G__21554;
count__21534_21538 = G__21555;
i__21535_21539 = G__21556;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21557_21561 = cljs.core.seq.call(null,v);
var chunk__21558_21562 = null;
var count__21559_21563 = (0);
var i__21560_21564 = (0);
while(true){
if((i__21560_21564 < count__21559_21563)){
var x_21565 = cljs.core._nth.call(null,chunk__21558_21562,i__21560_21564);
ret.push(x_21565);

var G__21566 = seq__21557_21561;
var G__21567 = chunk__21558_21562;
var G__21568 = count__21559_21563;
var G__21569 = (i__21560_21564 + (1));
seq__21557_21561 = G__21566;
chunk__21558_21562 = G__21567;
count__21559_21563 = G__21568;
i__21560_21564 = G__21569;
continue;
} else {
var temp__4657__auto___21570 = cljs.core.seq.call(null,seq__21557_21561);
if(temp__4657__auto___21570){
var seq__21557_21571__$1 = temp__4657__auto___21570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21557_21571__$1)){
var c__19256__auto___21572 = cljs.core.chunk_first.call(null,seq__21557_21571__$1);
var G__21573 = cljs.core.chunk_rest.call(null,seq__21557_21571__$1);
var G__21574 = c__19256__auto___21572;
var G__21575 = cljs.core.count.call(null,c__19256__auto___21572);
var G__21576 = (0);
seq__21557_21561 = G__21573;
chunk__21558_21562 = G__21574;
count__21559_21563 = G__21575;
i__21560_21564 = G__21576;
continue;
} else {
var x_21577 = cljs.core.first.call(null,seq__21557_21571__$1);
ret.push(x_21577);

var G__21578 = cljs.core.next.call(null,seq__21557_21571__$1);
var G__21579 = null;
var G__21580 = (0);
var G__21581 = (0);
seq__21557_21561 = G__21578;
chunk__21558_21562 = G__21579;
count__21559_21563 = G__21580;
i__21560_21564 = G__21581;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args21582 = [];
var len__19514__auto___21593 = arguments.length;
var i__19515__auto___21594 = (0);
while(true){
if((i__19515__auto___21594 < len__19514__auto___21593)){
args21582.push((arguments[i__19515__auto___21594]));

var G__21595 = (i__19515__auto___21594 + (1));
i__19515__auto___21594 = G__21595;
continue;
} else {
}
break;
}

var G__21584 = args21582.length;
switch (G__21584) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21582.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__21585 = obj;
G__21585.push(kfn.call(null,k),vfn.call(null,v));

return G__21585;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21586 = cljs.core.clone.call(null,handlers);
x21586.forEach = ((function (x21586,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21587 = cljs.core.seq.call(null,coll);
var chunk__21588 = null;
var count__21589 = (0);
var i__21590 = (0);
while(true){
if((i__21590 < count__21589)){
var vec__21591 = cljs.core._nth.call(null,chunk__21588,i__21590);
var k = cljs.core.nth.call(null,vec__21591,(0),null);
var v = cljs.core.nth.call(null,vec__21591,(1),null);
f.call(null,v,k);

var G__21597 = seq__21587;
var G__21598 = chunk__21588;
var G__21599 = count__21589;
var G__21600 = (i__21590 + (1));
seq__21587 = G__21597;
chunk__21588 = G__21598;
count__21589 = G__21599;
i__21590 = G__21600;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21587);
if(temp__4657__auto__){
var seq__21587__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21587__$1)){
var c__19256__auto__ = cljs.core.chunk_first.call(null,seq__21587__$1);
var G__21601 = cljs.core.chunk_rest.call(null,seq__21587__$1);
var G__21602 = c__19256__auto__;
var G__21603 = cljs.core.count.call(null,c__19256__auto__);
var G__21604 = (0);
seq__21587 = G__21601;
chunk__21588 = G__21602;
count__21589 = G__21603;
i__21590 = G__21604;
continue;
} else {
var vec__21592 = cljs.core.first.call(null,seq__21587__$1);
var k = cljs.core.nth.call(null,vec__21592,(0),null);
var v = cljs.core.nth.call(null,vec__21592,(1),null);
f.call(null,v,k);

var G__21605 = cljs.core.next.call(null,seq__21587__$1);
var G__21606 = null;
var G__21607 = (0);
var G__21608 = (0);
seq__21587 = G__21605;
chunk__21588 = G__21606;
count__21589 = G__21607;
i__21590 = G__21608;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21586,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21586;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args21609 = [];
var len__19514__auto___21615 = arguments.length;
var i__19515__auto___21616 = (0);
while(true){
if((i__19515__auto___21616 < len__19514__auto___21615)){
args21609.push((arguments[i__19515__auto___21616]));

var G__21617 = (i__19515__auto___21616 + (1));
i__19515__auto___21616 = G__21617;
continue;
} else {
}
break;
}

var G__21611 = args21609.length;
switch (G__21611) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21609.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit21612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit21612 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta21613){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta21613 = meta21613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit21612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21614,meta21613__$1){
var self__ = this;
var _21614__$1 = this;
return (new cognitect.transit.t_cognitect$transit21612(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta21613__$1));
});

cognitect.transit.t_cognitect$transit21612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21614){
var self__ = this;
var _21614__$1 = this;
return self__.meta21613;
});

cognitect.transit.t_cognitect$transit21612.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21612.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21612.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21612.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta21613","meta21613",998462064,null)], null);
});

cognitect.transit.t_cognitect$transit21612.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit21612.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit21612";

cognitect.transit.t_cognitect$transit21612.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cognitect.transit/t_cognitect$transit21612");
});

cognitect.transit.__GT_t_cognitect$transit21612 = (function cognitect$transit$__GT_t_cognitect$transit21612(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21613){
return (new cognitect.transit.t_cognitect$transit21612(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21613));
});

}

return (new cognitect.transit.t_cognitect$transit21612(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18445__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map