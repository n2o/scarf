// Compiled by ClojureScript 1.8.34 {}
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
var seq__21498_21502 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__21499_21503 = null;
var count__21500_21504 = (0);
var i__21501_21505 = (0);
while(true){
if((i__21501_21505 < count__21500_21504)){
var k_21506 = cljs.core._nth.call(null,chunk__21499_21503,i__21501_21505);
var v_21507 = (b[k_21506]);
(a[k_21506] = v_21507);

var G__21508 = seq__21498_21502;
var G__21509 = chunk__21499_21503;
var G__21510 = count__21500_21504;
var G__21511 = (i__21501_21505 + (1));
seq__21498_21502 = G__21508;
chunk__21499_21503 = G__21509;
count__21500_21504 = G__21510;
i__21501_21505 = G__21511;
continue;
} else {
var temp__4657__auto___21512 = cljs.core.seq.call(null,seq__21498_21502);
if(temp__4657__auto___21512){
var seq__21498_21513__$1 = temp__4657__auto___21512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21498_21513__$1)){
var c__19209__auto___21514 = cljs.core.chunk_first.call(null,seq__21498_21513__$1);
var G__21515 = cljs.core.chunk_rest.call(null,seq__21498_21513__$1);
var G__21516 = c__19209__auto___21514;
var G__21517 = cljs.core.count.call(null,c__19209__auto___21514);
var G__21518 = (0);
seq__21498_21502 = G__21515;
chunk__21499_21503 = G__21516;
count__21500_21504 = G__21517;
i__21501_21505 = G__21518;
continue;
} else {
var k_21519 = cljs.core.first.call(null,seq__21498_21513__$1);
var v_21520 = (b[k_21519]);
(a[k_21519] = v_21520);

var G__21521 = cljs.core.next.call(null,seq__21498_21513__$1);
var G__21522 = null;
var G__21523 = (0);
var G__21524 = (0);
seq__21498_21502 = G__21521;
chunk__21499_21503 = G__21522;
count__21500_21504 = G__21523;
i__21501_21505 = G__21524;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/VectorBuilder");
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
var args21525 = [];
var len__19467__auto___21528 = arguments.length;
var i__19468__auto___21529 = (0);
while(true){
if((i__19468__auto___21529 < len__19467__auto___21528)){
args21525.push((arguments[i__19468__auto___21529]));

var G__21530 = (i__19468__auto___21529 + (1));
i__19468__auto___21529 = G__21530;
continue;
} else {
}
break;
}

var G__21527 = args21525.length;
switch (G__21527) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21525.length)].join('')));

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
var G__21532 = (i + (2));
var G__21533 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21532;
ret = G__21533;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/SymbolHandler");
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
var seq__21534_21538 = cljs.core.seq.call(null,v);
var chunk__21535_21539 = null;
var count__21536_21540 = (0);
var i__21537_21541 = (0);
while(true){
if((i__21537_21541 < count__21536_21540)){
var x_21542 = cljs.core._nth.call(null,chunk__21535_21539,i__21537_21541);
ret.push(x_21542);

var G__21543 = seq__21534_21538;
var G__21544 = chunk__21535_21539;
var G__21545 = count__21536_21540;
var G__21546 = (i__21537_21541 + (1));
seq__21534_21538 = G__21543;
chunk__21535_21539 = G__21544;
count__21536_21540 = G__21545;
i__21537_21541 = G__21546;
continue;
} else {
var temp__4657__auto___21547 = cljs.core.seq.call(null,seq__21534_21538);
if(temp__4657__auto___21547){
var seq__21534_21548__$1 = temp__4657__auto___21547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21534_21548__$1)){
var c__19209__auto___21549 = cljs.core.chunk_first.call(null,seq__21534_21548__$1);
var G__21550 = cljs.core.chunk_rest.call(null,seq__21534_21548__$1);
var G__21551 = c__19209__auto___21549;
var G__21552 = cljs.core.count.call(null,c__19209__auto___21549);
var G__21553 = (0);
seq__21534_21538 = G__21550;
chunk__21535_21539 = G__21551;
count__21536_21540 = G__21552;
i__21537_21541 = G__21553;
continue;
} else {
var x_21554 = cljs.core.first.call(null,seq__21534_21548__$1);
ret.push(x_21554);

var G__21555 = cljs.core.next.call(null,seq__21534_21548__$1);
var G__21556 = null;
var G__21557 = (0);
var G__21558 = (0);
seq__21534_21538 = G__21555;
chunk__21535_21539 = G__21556;
count__21536_21540 = G__21557;
i__21537_21541 = G__21558;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/MapHandler");
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
var seq__21559_21563 = cljs.core.seq.call(null,v);
var chunk__21560_21564 = null;
var count__21561_21565 = (0);
var i__21562_21566 = (0);
while(true){
if((i__21562_21566 < count__21561_21565)){
var x_21567 = cljs.core._nth.call(null,chunk__21560_21564,i__21562_21566);
ret.push(x_21567);

var G__21568 = seq__21559_21563;
var G__21569 = chunk__21560_21564;
var G__21570 = count__21561_21565;
var G__21571 = (i__21562_21566 + (1));
seq__21559_21563 = G__21568;
chunk__21560_21564 = G__21569;
count__21561_21565 = G__21570;
i__21562_21566 = G__21571;
continue;
} else {
var temp__4657__auto___21572 = cljs.core.seq.call(null,seq__21559_21563);
if(temp__4657__auto___21572){
var seq__21559_21573__$1 = temp__4657__auto___21572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21559_21573__$1)){
var c__19209__auto___21574 = cljs.core.chunk_first.call(null,seq__21559_21573__$1);
var G__21575 = cljs.core.chunk_rest.call(null,seq__21559_21573__$1);
var G__21576 = c__19209__auto___21574;
var G__21577 = cljs.core.count.call(null,c__19209__auto___21574);
var G__21578 = (0);
seq__21559_21563 = G__21575;
chunk__21560_21564 = G__21576;
count__21561_21565 = G__21577;
i__21562_21566 = G__21578;
continue;
} else {
var x_21579 = cljs.core.first.call(null,seq__21559_21573__$1);
ret.push(x_21579);

var G__21580 = cljs.core.next.call(null,seq__21559_21573__$1);
var G__21581 = null;
var G__21582 = (0);
var G__21583 = (0);
seq__21559_21563 = G__21580;
chunk__21560_21564 = G__21581;
count__21561_21565 = G__21582;
i__21562_21566 = G__21583;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/SetHandler");
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
var seq__21584_21588 = cljs.core.seq.call(null,v);
var chunk__21585_21589 = null;
var count__21586_21590 = (0);
var i__21587_21591 = (0);
while(true){
if((i__21587_21591 < count__21586_21590)){
var x_21592 = cljs.core._nth.call(null,chunk__21585_21589,i__21587_21591);
ret.push(x_21592);

var G__21593 = seq__21584_21588;
var G__21594 = chunk__21585_21589;
var G__21595 = count__21586_21590;
var G__21596 = (i__21587_21591 + (1));
seq__21584_21588 = G__21593;
chunk__21585_21589 = G__21594;
count__21586_21590 = G__21595;
i__21587_21591 = G__21596;
continue;
} else {
var temp__4657__auto___21597 = cljs.core.seq.call(null,seq__21584_21588);
if(temp__4657__auto___21597){
var seq__21584_21598__$1 = temp__4657__auto___21597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21584_21598__$1)){
var c__19209__auto___21599 = cljs.core.chunk_first.call(null,seq__21584_21598__$1);
var G__21600 = cljs.core.chunk_rest.call(null,seq__21584_21598__$1);
var G__21601 = c__19209__auto___21599;
var G__21602 = cljs.core.count.call(null,c__19209__auto___21599);
var G__21603 = (0);
seq__21584_21588 = G__21600;
chunk__21585_21589 = G__21601;
count__21586_21590 = G__21602;
i__21587_21591 = G__21603;
continue;
} else {
var x_21604 = cljs.core.first.call(null,seq__21584_21598__$1);
ret.push(x_21604);

var G__21605 = cljs.core.next.call(null,seq__21584_21598__$1);
var G__21606 = null;
var G__21607 = (0);
var G__21608 = (0);
seq__21584_21588 = G__21605;
chunk__21585_21589 = G__21606;
count__21586_21590 = G__21607;
i__21587_21591 = G__21608;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/UUIDHandler");
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
var args21609 = [];
var len__19467__auto___21620 = arguments.length;
var i__19468__auto___21621 = (0);
while(true){
if((i__19468__auto___21621 < len__19467__auto___21620)){
args21609.push((arguments[i__19468__auto___21621]));

var G__21622 = (i__19468__auto___21621 + (1));
i__19468__auto___21621 = G__21622;
continue;
} else {
}
break;
}

var G__21611 = args21609.length;
switch (G__21611) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21609.length)].join('')));

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
var G__21612 = obj;
G__21612.push(kfn.call(null,k),vfn.call(null,v));

return G__21612;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21613 = cljs.core.clone.call(null,handlers);
x21613.forEach = ((function (x21613,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21614 = cljs.core.seq.call(null,coll);
var chunk__21615 = null;
var count__21616 = (0);
var i__21617 = (0);
while(true){
if((i__21617 < count__21616)){
var vec__21618 = cljs.core._nth.call(null,chunk__21615,i__21617);
var k = cljs.core.nth.call(null,vec__21618,(0),null);
var v = cljs.core.nth.call(null,vec__21618,(1),null);
f.call(null,v,k);

var G__21624 = seq__21614;
var G__21625 = chunk__21615;
var G__21626 = count__21616;
var G__21627 = (i__21617 + (1));
seq__21614 = G__21624;
chunk__21615 = G__21625;
count__21616 = G__21626;
i__21617 = G__21627;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21614);
if(temp__4657__auto__){
var seq__21614__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21614__$1)){
var c__19209__auto__ = cljs.core.chunk_first.call(null,seq__21614__$1);
var G__21628 = cljs.core.chunk_rest.call(null,seq__21614__$1);
var G__21629 = c__19209__auto__;
var G__21630 = cljs.core.count.call(null,c__19209__auto__);
var G__21631 = (0);
seq__21614 = G__21628;
chunk__21615 = G__21629;
count__21616 = G__21630;
i__21617 = G__21631;
continue;
} else {
var vec__21619 = cljs.core.first.call(null,seq__21614__$1);
var k = cljs.core.nth.call(null,vec__21619,(0),null);
var v = cljs.core.nth.call(null,vec__21619,(1),null);
f.call(null,v,k);

var G__21632 = cljs.core.next.call(null,seq__21614__$1);
var G__21633 = null;
var G__21634 = (0);
var G__21635 = (0);
seq__21614 = G__21632;
chunk__21615 = G__21633;
count__21616 = G__21634;
i__21617 = G__21635;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21613,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21613;
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
var args21636 = [];
var len__19467__auto___21642 = arguments.length;
var i__19468__auto___21643 = (0);
while(true){
if((i__19468__auto___21643 < len__19467__auto___21642)){
args21636.push((arguments[i__19468__auto___21643]));

var G__21644 = (i__19468__auto___21643 + (1));
i__19468__auto___21643 = G__21644;
continue;
} else {
}
break;
}

var G__21638 = args21636.length;
switch (G__21638) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21636.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit21639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit21639 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta21640){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta21640 = meta21640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit21639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21641,meta21640__$1){
var self__ = this;
var _21641__$1 = this;
return (new cognitect.transit.t_cognitect$transit21639(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta21640__$1));
});

cognitect.transit.t_cognitect$transit21639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21641){
var self__ = this;
var _21641__$1 = this;
return self__.meta21640;
});

cognitect.transit.t_cognitect$transit21639.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21639.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21639.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21639.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta21640","meta21640",1306697811,null)], null);
});

cognitect.transit.t_cognitect$transit21639.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit21639.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit21639";

cognitect.transit.t_cognitect$transit21639.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cognitect.transit/t_cognitect$transit21639");
});

cognitect.transit.__GT_t_cognitect$transit21639 = (function cognitect$transit$__GT_t_cognitect$transit21639(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21640){
return (new cognitect.transit.t_cognitect$transit21639(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21640));
});

}

return (new cognitect.transit.t_cognitect$transit21639(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__18398__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
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