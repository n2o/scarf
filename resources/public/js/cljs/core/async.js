// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23550 = [];
var len__19467__auto___23556 = arguments.length;
var i__19468__auto___23557 = (0);
while(true){
if((i__19468__auto___23557 < len__19467__auto___23556)){
args23550.push((arguments[i__19468__auto___23557]));

var G__23558 = (i__19468__auto___23557 + (1));
i__19468__auto___23557 = G__23558;
continue;
} else {
}
break;
}

var G__23552 = args23550.length;
switch (G__23552) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23550.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23553 = (function (f,blockable,meta23554){
this.f = f;
this.blockable = blockable;
this.meta23554 = meta23554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23555,meta23554__$1){
var self__ = this;
var _23555__$1 = this;
return (new cljs.core.async.t_cljs$core$async23553(self__.f,self__.blockable,meta23554__$1));
});

cljs.core.async.t_cljs$core$async23553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23555){
var self__ = this;
var _23555__$1 = this;
return self__.meta23554;
});

cljs.core.async.t_cljs$core$async23553.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23553.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23554","meta23554",888596355,null)], null);
});

cljs.core.async.t_cljs$core$async23553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23553";

cljs.core.async.t_cljs$core$async23553.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async23553");
});

cljs.core.async.__GT_t_cljs$core$async23553 = (function cljs$core$async$__GT_t_cljs$core$async23553(f__$1,blockable__$1,meta23554){
return (new cljs.core.async.t_cljs$core$async23553(f__$1,blockable__$1,meta23554));
});

}

return (new cljs.core.async.t_cljs$core$async23553(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23562 = [];
var len__19467__auto___23565 = arguments.length;
var i__19468__auto___23566 = (0);
while(true){
if((i__19468__auto___23566 < len__19467__auto___23565)){
args23562.push((arguments[i__19468__auto___23566]));

var G__23567 = (i__19468__auto___23566 + (1));
i__19468__auto___23566 = G__23567;
continue;
} else {
}
break;
}

var G__23564 = args23562.length;
switch (G__23564) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23562.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23569 = [];
var len__19467__auto___23572 = arguments.length;
var i__19468__auto___23573 = (0);
while(true){
if((i__19468__auto___23573 < len__19467__auto___23572)){
args23569.push((arguments[i__19468__auto___23573]));

var G__23574 = (i__19468__auto___23573 + (1));
i__19468__auto___23573 = G__23574;
continue;
} else {
}
break;
}

var G__23571 = args23569.length;
switch (G__23571) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23569.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23576 = [];
var len__19467__auto___23579 = arguments.length;
var i__19468__auto___23580 = (0);
while(true){
if((i__19468__auto___23580 < len__19467__auto___23579)){
args23576.push((arguments[i__19468__auto___23580]));

var G__23581 = (i__19468__auto___23580 + (1));
i__19468__auto___23580 = G__23581;
continue;
} else {
}
break;
}

var G__23578 = args23576.length;
switch (G__23578) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23576.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23583 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23583);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23583,ret){
return (function (){
return fn1.call(null,val_23583);
});})(val_23583,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23584 = [];
var len__19467__auto___23587 = arguments.length;
var i__19468__auto___23588 = (0);
while(true){
if((i__19468__auto___23588 < len__19467__auto___23587)){
args23584.push((arguments[i__19468__auto___23588]));

var G__23589 = (i__19468__auto___23588 + (1));
i__19468__auto___23588 = G__23589;
continue;
} else {
}
break;
}

var G__23586 = args23584.length;
switch (G__23586) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23584.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19312__auto___23591 = n;
var x_23592 = (0);
while(true){
if((x_23592 < n__19312__auto___23591)){
(a[x_23592] = (0));

var G__23593 = (x_23592 + (1));
x_23592 = G__23593;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23594 = (i + (1));
i = G__23594;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23598 = (function (alt_flag,flag,meta23599){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23599 = meta23599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23600,meta23599__$1){
var self__ = this;
var _23600__$1 = this;
return (new cljs.core.async.t_cljs$core$async23598(self__.alt_flag,self__.flag,meta23599__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23600){
var self__ = this;
var _23600__$1 = this;
return self__.meta23599;
});})(flag))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23598.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23598.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23599","meta23599",145795104,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23598";

cljs.core.async.t_cljs$core$async23598.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async23598");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23598 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23598(alt_flag__$1,flag__$1,meta23599){
return (new cljs.core.async.t_cljs$core$async23598(alt_flag__$1,flag__$1,meta23599));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23598(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23604 = (function (alt_handler,flag,cb,meta23605){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23605 = meta23605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23606,meta23605__$1){
var self__ = this;
var _23606__$1 = this;
return (new cljs.core.async.t_cljs$core$async23604(self__.alt_handler,self__.flag,self__.cb,meta23605__$1));
});

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23606){
var self__ = this;
var _23606__$1 = this;
return self__.meta23605;
});

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23605","meta23605",-1203297905,null)], null);
});

cljs.core.async.t_cljs$core$async23604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23604";

cljs.core.async.t_cljs$core$async23604.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async23604");
});

cljs.core.async.__GT_t_cljs$core$async23604 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23604(alt_handler__$1,flag__$1,cb__$1,meta23605){
return (new cljs.core.async.t_cljs$core$async23604(alt_handler__$1,flag__$1,cb__$1,meta23605));
});

}

return (new cljs.core.async.t_cljs$core$async23604(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23607_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23607_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23608_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23608_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18398__auto__ = wport;
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23609 = (i + (1));
i = G__23609;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18398__auto__ = ret;
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18386__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18386__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18386__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19474__auto__ = [];
var len__19467__auto___23615 = arguments.length;
var i__19468__auto___23616 = (0);
while(true){
if((i__19468__auto___23616 < len__19467__auto___23615)){
args__19474__auto__.push((arguments[i__19468__auto___23616]));

var G__23617 = (i__19468__auto___23616 + (1));
i__19468__auto___23616 = G__23617;
continue;
} else {
}
break;
}

var argseq__19475__auto__ = ((((1) < args__19474__auto__.length))?(new cljs.core.IndexedSeq(args__19474__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19475__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23612){
var map__23613 = p__23612;
var map__23613__$1 = ((((!((map__23613 == null)))?((((map__23613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23613):map__23613);
var opts = map__23613__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23610){
var G__23611 = cljs.core.first.call(null,seq23610);
var seq23610__$1 = cljs.core.next.call(null,seq23610);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23611,seq23610__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23618 = [];
var len__19467__auto___23668 = arguments.length;
var i__19468__auto___23669 = (0);
while(true){
if((i__19468__auto___23669 < len__19467__auto___23668)){
args23618.push((arguments[i__19468__auto___23669]));

var G__23670 = (i__19468__auto___23669 + (1));
i__19468__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var G__23620 = args23618.length;
switch (G__23620) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23618.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23505__auto___23672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___23672){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___23672){
return (function (state_23644){
var state_val_23645 = (state_23644[(1)]);
if((state_val_23645 === (7))){
var inst_23640 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
var statearr_23646_23673 = state_23644__$1;
(statearr_23646_23673[(2)] = inst_23640);

(statearr_23646_23673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (1))){
var state_23644__$1 = state_23644;
var statearr_23647_23674 = state_23644__$1;
(statearr_23647_23674[(2)] = null);

(statearr_23647_23674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (4))){
var inst_23623 = (state_23644[(7)]);
var inst_23623__$1 = (state_23644[(2)]);
var inst_23624 = (inst_23623__$1 == null);
var state_23644__$1 = (function (){var statearr_23648 = state_23644;
(statearr_23648[(7)] = inst_23623__$1);

return statearr_23648;
})();
if(cljs.core.truth_(inst_23624)){
var statearr_23649_23675 = state_23644__$1;
(statearr_23649_23675[(1)] = (5));

} else {
var statearr_23650_23676 = state_23644__$1;
(statearr_23650_23676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (13))){
var state_23644__$1 = state_23644;
var statearr_23651_23677 = state_23644__$1;
(statearr_23651_23677[(2)] = null);

(statearr_23651_23677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (6))){
var inst_23623 = (state_23644[(7)]);
var state_23644__$1 = state_23644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23644__$1,(11),to,inst_23623);
} else {
if((state_val_23645 === (3))){
var inst_23642 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23644__$1,inst_23642);
} else {
if((state_val_23645 === (12))){
var state_23644__$1 = state_23644;
var statearr_23652_23678 = state_23644__$1;
(statearr_23652_23678[(2)] = null);

(statearr_23652_23678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (2))){
var state_23644__$1 = state_23644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23644__$1,(4),from);
} else {
if((state_val_23645 === (11))){
var inst_23633 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
if(cljs.core.truth_(inst_23633)){
var statearr_23653_23679 = state_23644__$1;
(statearr_23653_23679[(1)] = (12));

} else {
var statearr_23654_23680 = state_23644__$1;
(statearr_23654_23680[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (9))){
var state_23644__$1 = state_23644;
var statearr_23655_23681 = state_23644__$1;
(statearr_23655_23681[(2)] = null);

(statearr_23655_23681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (5))){
var state_23644__$1 = state_23644;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23656_23682 = state_23644__$1;
(statearr_23656_23682[(1)] = (8));

} else {
var statearr_23657_23683 = state_23644__$1;
(statearr_23657_23683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (14))){
var inst_23638 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
var statearr_23658_23684 = state_23644__$1;
(statearr_23658_23684[(2)] = inst_23638);

(statearr_23658_23684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (10))){
var inst_23630 = (state_23644[(2)]);
var state_23644__$1 = state_23644;
var statearr_23659_23685 = state_23644__$1;
(statearr_23659_23685[(2)] = inst_23630);

(statearr_23659_23685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23645 === (8))){
var inst_23627 = cljs.core.async.close_BANG_.call(null,to);
var state_23644__$1 = state_23644;
var statearr_23660_23686 = state_23644__$1;
(statearr_23660_23686[(2)] = inst_23627);

(statearr_23660_23686[(1)] = (10));


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
});})(c__23505__auto___23672))
;
return ((function (switch__23393__auto__,c__23505__auto___23672){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_23664 = [null,null,null,null,null,null,null,null];
(statearr_23664[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_23664[(1)] = (1));

return statearr_23664;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_23644){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_23644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e23665){if((e23665 instanceof Object)){
var ex__23397__auto__ = e23665;
var statearr_23666_23687 = state_23644;
(statearr_23666_23687[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23688 = state_23644;
state_23644 = G__23688;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_23644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_23644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___23672))
})();
var state__23507__auto__ = (function (){var statearr_23667 = f__23506__auto__.call(null);
(statearr_23667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___23672);

return statearr_23667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___23672))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23872){
var vec__23873 = p__23872;
var v = cljs.core.nth.call(null,vec__23873,(0),null);
var p = cljs.core.nth.call(null,vec__23873,(1),null);
var job = vec__23873;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23505__auto___24055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___24055,res,vec__23873,v,p,job,jobs,results){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___24055,res,vec__23873,v,p,job,jobs,results){
return (function (state_23878){
var state_val_23879 = (state_23878[(1)]);
if((state_val_23879 === (1))){
var state_23878__$1 = state_23878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23878__$1,(2),res,v);
} else {
if((state_val_23879 === (2))){
var inst_23875 = (state_23878[(2)]);
var inst_23876 = cljs.core.async.close_BANG_.call(null,res);
var state_23878__$1 = (function (){var statearr_23880 = state_23878;
(statearr_23880[(7)] = inst_23875);

return statearr_23880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23878__$1,inst_23876);
} else {
return null;
}
}
});})(c__23505__auto___24055,res,vec__23873,v,p,job,jobs,results))
;
return ((function (switch__23393__auto__,c__23505__auto___24055,res,vec__23873,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0 = (function (){
var statearr_23884 = [null,null,null,null,null,null,null,null];
(statearr_23884[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__);

(statearr_23884[(1)] = (1));

return statearr_23884;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1 = (function (state_23878){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_23878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e23885){if((e23885 instanceof Object)){
var ex__23397__auto__ = e23885;
var statearr_23886_24056 = state_23878;
(statearr_23886_24056[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24057 = state_23878;
state_23878 = G__24057;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = function(state_23878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1.call(this,state_23878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___24055,res,vec__23873,v,p,job,jobs,results))
})();
var state__23507__auto__ = (function (){var statearr_23887 = f__23506__auto__.call(null);
(statearr_23887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___24055);

return statearr_23887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___24055,res,vec__23873,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23888){
var vec__23889 = p__23888;
var v = cljs.core.nth.call(null,vec__23889,(0),null);
var p = cljs.core.nth.call(null,vec__23889,(1),null);
var job = vec__23889;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19312__auto___24058 = n;
var __24059 = (0);
while(true){
if((__24059 < n__19312__auto___24058)){
var G__23890_24060 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23890_24060) {
case "compute":
var c__23505__auto___24062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24059,c__23505__auto___24062,G__23890_24060,n__19312__auto___24058,jobs,results,process,async){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (__24059,c__23505__auto___24062,G__23890_24060,n__19312__auto___24058,jobs,results,process,async){
return (function (state_23903){
var state_val_23904 = (state_23903[(1)]);
if((state_val_23904 === (1))){
var state_23903__$1 = state_23903;
var statearr_23905_24063 = state_23903__$1;
(statearr_23905_24063[(2)] = null);

(statearr_23905_24063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (2))){
var state_23903__$1 = state_23903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23903__$1,(4),jobs);
} else {
if((state_val_23904 === (3))){
var inst_23901 = (state_23903[(2)]);
var state_23903__$1 = state_23903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23903__$1,inst_23901);
} else {
if((state_val_23904 === (4))){
var inst_23893 = (state_23903[(2)]);
var inst_23894 = process.call(null,inst_23893);
var state_23903__$1 = state_23903;
if(cljs.core.truth_(inst_23894)){
var statearr_23906_24064 = state_23903__$1;
(statearr_23906_24064[(1)] = (5));

} else {
var statearr_23907_24065 = state_23903__$1;
(statearr_23907_24065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (5))){
var state_23903__$1 = state_23903;
var statearr_23908_24066 = state_23903__$1;
(statearr_23908_24066[(2)] = null);

(statearr_23908_24066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (6))){
var state_23903__$1 = state_23903;
var statearr_23909_24067 = state_23903__$1;
(statearr_23909_24067[(2)] = null);

(statearr_23909_24067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23904 === (7))){
var inst_23899 = (state_23903[(2)]);
var state_23903__$1 = state_23903;
var statearr_23910_24068 = state_23903__$1;
(statearr_23910_24068[(2)] = inst_23899);

(statearr_23910_24068[(1)] = (3));


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
});})(__24059,c__23505__auto___24062,G__23890_24060,n__19312__auto___24058,jobs,results,process,async))
;
return ((function (__24059,switch__23393__auto__,c__23505__auto___24062,G__23890_24060,n__19312__auto___24058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0 = (function (){
var statearr_23914 = [null,null,null,null,null,null,null];
(statearr_23914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__);

(statearr_23914[(1)] = (1));

return statearr_23914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1 = (function (state_23903){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_23903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e23915){if((e23915 instanceof Object)){
var ex__23397__auto__ = e23915;
var statearr_23916_24069 = state_23903;
(statearr_23916_24069[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24070 = state_23903;
state_23903 = G__24070;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = function(state_23903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1.call(this,state_23903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__;
})()
;})(__24059,switch__23393__auto__,c__23505__auto___24062,G__23890_24060,n__19312__auto___24058,jobs,results,process,async))
})();
var state__23507__auto__ = (function (){var statearr_23917 = f__23506__auto__.call(null);
(statearr_23917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___24062);

return statearr_23917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(__24059,c__23505__auto___24062,G__23890_24060,n__19312__auto___24058,jobs,results,process,async))
);


break;
case "async":
var c__23505__auto___24071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24059,c__23505__auto___24071,G__23890_24060,n__19312__auto___24058,jobs,results,process,async){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (__24059,c__23505__auto___24071,G__23890_24060,n__19312__auto___24058,jobs,results,process,async){
return (function (state_23930){
var state_val_23931 = (state_23930[(1)]);
if((state_val_23931 === (1))){
var state_23930__$1 = state_23930;
var statearr_23932_24072 = state_23930__$1;
(statearr_23932_24072[(2)] = null);

(statearr_23932_24072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (2))){
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23930__$1,(4),jobs);
} else {
if((state_val_23931 === (3))){
var inst_23928 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23930__$1,inst_23928);
} else {
if((state_val_23931 === (4))){
var inst_23920 = (state_23930[(2)]);
var inst_23921 = async.call(null,inst_23920);
var state_23930__$1 = state_23930;
if(cljs.core.truth_(inst_23921)){
var statearr_23933_24073 = state_23930__$1;
(statearr_23933_24073[(1)] = (5));

} else {
var statearr_23934_24074 = state_23930__$1;
(statearr_23934_24074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (5))){
var state_23930__$1 = state_23930;
var statearr_23935_24075 = state_23930__$1;
(statearr_23935_24075[(2)] = null);

(statearr_23935_24075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (6))){
var state_23930__$1 = state_23930;
var statearr_23936_24076 = state_23930__$1;
(statearr_23936_24076[(2)] = null);

(statearr_23936_24076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (7))){
var inst_23926 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
var statearr_23937_24077 = state_23930__$1;
(statearr_23937_24077[(2)] = inst_23926);

(statearr_23937_24077[(1)] = (3));


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
});})(__24059,c__23505__auto___24071,G__23890_24060,n__19312__auto___24058,jobs,results,process,async))
;
return ((function (__24059,switch__23393__auto__,c__23505__auto___24071,G__23890_24060,n__19312__auto___24058,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0 = (function (){
var statearr_23941 = [null,null,null,null,null,null,null];
(statearr_23941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__);

(statearr_23941[(1)] = (1));

return statearr_23941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1 = (function (state_23930){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_23930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e23942){if((e23942 instanceof Object)){
var ex__23397__auto__ = e23942;
var statearr_23943_24078 = state_23930;
(statearr_23943_24078[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24079 = state_23930;
state_23930 = G__24079;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = function(state_23930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1.call(this,state_23930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__;
})()
;})(__24059,switch__23393__auto__,c__23505__auto___24071,G__23890_24060,n__19312__auto___24058,jobs,results,process,async))
})();
var state__23507__auto__ = (function (){var statearr_23944 = f__23506__auto__.call(null);
(statearr_23944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___24071);

return statearr_23944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(__24059,c__23505__auto___24071,G__23890_24060,n__19312__auto___24058,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24080 = (__24059 + (1));
__24059 = G__24080;
continue;
} else {
}
break;
}

var c__23505__auto___24081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___24081,jobs,results,process,async){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___24081,jobs,results,process,async){
return (function (state_23966){
var state_val_23967 = (state_23966[(1)]);
if((state_val_23967 === (1))){
var state_23966__$1 = state_23966;
var statearr_23968_24082 = state_23966__$1;
(statearr_23968_24082[(2)] = null);

(statearr_23968_24082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (2))){
var state_23966__$1 = state_23966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23966__$1,(4),from);
} else {
if((state_val_23967 === (3))){
var inst_23964 = (state_23966[(2)]);
var state_23966__$1 = state_23966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23966__$1,inst_23964);
} else {
if((state_val_23967 === (4))){
var inst_23947 = (state_23966[(7)]);
var inst_23947__$1 = (state_23966[(2)]);
var inst_23948 = (inst_23947__$1 == null);
var state_23966__$1 = (function (){var statearr_23969 = state_23966;
(statearr_23969[(7)] = inst_23947__$1);

return statearr_23969;
})();
if(cljs.core.truth_(inst_23948)){
var statearr_23970_24083 = state_23966__$1;
(statearr_23970_24083[(1)] = (5));

} else {
var statearr_23971_24084 = state_23966__$1;
(statearr_23971_24084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (5))){
var inst_23950 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23966__$1 = state_23966;
var statearr_23972_24085 = state_23966__$1;
(statearr_23972_24085[(2)] = inst_23950);

(statearr_23972_24085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (6))){
var inst_23947 = (state_23966[(7)]);
var inst_23952 = (state_23966[(8)]);
var inst_23952__$1 = cljs.core.async.chan.call(null,(1));
var inst_23953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23954 = [inst_23947,inst_23952__$1];
var inst_23955 = (new cljs.core.PersistentVector(null,2,(5),inst_23953,inst_23954,null));
var state_23966__$1 = (function (){var statearr_23973 = state_23966;
(statearr_23973[(8)] = inst_23952__$1);

return statearr_23973;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23966__$1,(8),jobs,inst_23955);
} else {
if((state_val_23967 === (7))){
var inst_23962 = (state_23966[(2)]);
var state_23966__$1 = state_23966;
var statearr_23974_24086 = state_23966__$1;
(statearr_23974_24086[(2)] = inst_23962);

(statearr_23974_24086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (8))){
var inst_23952 = (state_23966[(8)]);
var inst_23957 = (state_23966[(2)]);
var state_23966__$1 = (function (){var statearr_23975 = state_23966;
(statearr_23975[(9)] = inst_23957);

return statearr_23975;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23966__$1,(9),results,inst_23952);
} else {
if((state_val_23967 === (9))){
var inst_23959 = (state_23966[(2)]);
var state_23966__$1 = (function (){var statearr_23976 = state_23966;
(statearr_23976[(10)] = inst_23959);

return statearr_23976;
})();
var statearr_23977_24087 = state_23966__$1;
(statearr_23977_24087[(2)] = null);

(statearr_23977_24087[(1)] = (2));


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
});})(c__23505__auto___24081,jobs,results,process,async))
;
return ((function (switch__23393__auto__,c__23505__auto___24081,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0 = (function (){
var statearr_23981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__);

(statearr_23981[(1)] = (1));

return statearr_23981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1 = (function (state_23966){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_23966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e23982){if((e23982 instanceof Object)){
var ex__23397__auto__ = e23982;
var statearr_23983_24088 = state_23966;
(statearr_23983_24088[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24089 = state_23966;
state_23966 = G__24089;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = function(state_23966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1.call(this,state_23966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___24081,jobs,results,process,async))
})();
var state__23507__auto__ = (function (){var statearr_23984 = f__23506__auto__.call(null);
(statearr_23984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___24081);

return statearr_23984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___24081,jobs,results,process,async))
);


var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__,jobs,results,process,async){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__,jobs,results,process,async){
return (function (state_24022){
var state_val_24023 = (state_24022[(1)]);
if((state_val_24023 === (7))){
var inst_24018 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24024_24090 = state_24022__$1;
(statearr_24024_24090[(2)] = inst_24018);

(statearr_24024_24090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (20))){
var state_24022__$1 = state_24022;
var statearr_24025_24091 = state_24022__$1;
(statearr_24025_24091[(2)] = null);

(statearr_24025_24091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (1))){
var state_24022__$1 = state_24022;
var statearr_24026_24092 = state_24022__$1;
(statearr_24026_24092[(2)] = null);

(statearr_24026_24092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (4))){
var inst_23987 = (state_24022[(7)]);
var inst_23987__$1 = (state_24022[(2)]);
var inst_23988 = (inst_23987__$1 == null);
var state_24022__$1 = (function (){var statearr_24027 = state_24022;
(statearr_24027[(7)] = inst_23987__$1);

return statearr_24027;
})();
if(cljs.core.truth_(inst_23988)){
var statearr_24028_24093 = state_24022__$1;
(statearr_24028_24093[(1)] = (5));

} else {
var statearr_24029_24094 = state_24022__$1;
(statearr_24029_24094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (15))){
var inst_24000 = (state_24022[(8)]);
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24022__$1,(18),to,inst_24000);
} else {
if((state_val_24023 === (21))){
var inst_24013 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24030_24095 = state_24022__$1;
(statearr_24030_24095[(2)] = inst_24013);

(statearr_24030_24095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (13))){
var inst_24015 = (state_24022[(2)]);
var state_24022__$1 = (function (){var statearr_24031 = state_24022;
(statearr_24031[(9)] = inst_24015);

return statearr_24031;
})();
var statearr_24032_24096 = state_24022__$1;
(statearr_24032_24096[(2)] = null);

(statearr_24032_24096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (6))){
var inst_23987 = (state_24022[(7)]);
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24022__$1,(11),inst_23987);
} else {
if((state_val_24023 === (17))){
var inst_24008 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
if(cljs.core.truth_(inst_24008)){
var statearr_24033_24097 = state_24022__$1;
(statearr_24033_24097[(1)] = (19));

} else {
var statearr_24034_24098 = state_24022__$1;
(statearr_24034_24098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (3))){
var inst_24020 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24022__$1,inst_24020);
} else {
if((state_val_24023 === (12))){
var inst_23997 = (state_24022[(10)]);
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24022__$1,(14),inst_23997);
} else {
if((state_val_24023 === (2))){
var state_24022__$1 = state_24022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24022__$1,(4),results);
} else {
if((state_val_24023 === (19))){
var state_24022__$1 = state_24022;
var statearr_24035_24099 = state_24022__$1;
(statearr_24035_24099[(2)] = null);

(statearr_24035_24099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (11))){
var inst_23997 = (state_24022[(2)]);
var state_24022__$1 = (function (){var statearr_24036 = state_24022;
(statearr_24036[(10)] = inst_23997);

return statearr_24036;
})();
var statearr_24037_24100 = state_24022__$1;
(statearr_24037_24100[(2)] = null);

(statearr_24037_24100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (9))){
var state_24022__$1 = state_24022;
var statearr_24038_24101 = state_24022__$1;
(statearr_24038_24101[(2)] = null);

(statearr_24038_24101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (5))){
var state_24022__$1 = state_24022;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24039_24102 = state_24022__$1;
(statearr_24039_24102[(1)] = (8));

} else {
var statearr_24040_24103 = state_24022__$1;
(statearr_24040_24103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (14))){
var inst_24000 = (state_24022[(8)]);
var inst_24002 = (state_24022[(11)]);
var inst_24000__$1 = (state_24022[(2)]);
var inst_24001 = (inst_24000__$1 == null);
var inst_24002__$1 = cljs.core.not.call(null,inst_24001);
var state_24022__$1 = (function (){var statearr_24041 = state_24022;
(statearr_24041[(8)] = inst_24000__$1);

(statearr_24041[(11)] = inst_24002__$1);

return statearr_24041;
})();
if(inst_24002__$1){
var statearr_24042_24104 = state_24022__$1;
(statearr_24042_24104[(1)] = (15));

} else {
var statearr_24043_24105 = state_24022__$1;
(statearr_24043_24105[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (16))){
var inst_24002 = (state_24022[(11)]);
var state_24022__$1 = state_24022;
var statearr_24044_24106 = state_24022__$1;
(statearr_24044_24106[(2)] = inst_24002);

(statearr_24044_24106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (10))){
var inst_23994 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24045_24107 = state_24022__$1;
(statearr_24045_24107[(2)] = inst_23994);

(statearr_24045_24107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (18))){
var inst_24005 = (state_24022[(2)]);
var state_24022__$1 = state_24022;
var statearr_24046_24108 = state_24022__$1;
(statearr_24046_24108[(2)] = inst_24005);

(statearr_24046_24108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24023 === (8))){
var inst_23991 = cljs.core.async.close_BANG_.call(null,to);
var state_24022__$1 = state_24022;
var statearr_24047_24109 = state_24022__$1;
(statearr_24047_24109[(2)] = inst_23991);

(statearr_24047_24109[(1)] = (10));


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
});})(c__23505__auto__,jobs,results,process,async))
;
return ((function (switch__23393__auto__,c__23505__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0 = (function (){
var statearr_24051 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__);

(statearr_24051[(1)] = (1));

return statearr_24051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1 = (function (state_24022){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_24022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e24052){if((e24052 instanceof Object)){
var ex__23397__auto__ = e24052;
var statearr_24053_24110 = state_24022;
(statearr_24053_24110[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24111 = state_24022;
state_24022 = G__24111;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__ = function(state_24022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1.call(this,state_24022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23394__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__,jobs,results,process,async))
})();
var state__23507__auto__ = (function (){var statearr_24054 = f__23506__auto__.call(null);
(statearr_24054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_24054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__,jobs,results,process,async))
);

return c__23505__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24112 = [];
var len__19467__auto___24115 = arguments.length;
var i__19468__auto___24116 = (0);
while(true){
if((i__19468__auto___24116 < len__19467__auto___24115)){
args24112.push((arguments[i__19468__auto___24116]));

var G__24117 = (i__19468__auto___24116 + (1));
i__19468__auto___24116 = G__24117;
continue;
} else {
}
break;
}

var G__24114 = args24112.length;
switch (G__24114) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24112.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24119 = [];
var len__19467__auto___24122 = arguments.length;
var i__19468__auto___24123 = (0);
while(true){
if((i__19468__auto___24123 < len__19467__auto___24122)){
args24119.push((arguments[i__19468__auto___24123]));

var G__24124 = (i__19468__auto___24123 + (1));
i__19468__auto___24123 = G__24124;
continue;
} else {
}
break;
}

var G__24121 = args24119.length;
switch (G__24121) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24119.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24126 = [];
var len__19467__auto___24179 = arguments.length;
var i__19468__auto___24180 = (0);
while(true){
if((i__19468__auto___24180 < len__19467__auto___24179)){
args24126.push((arguments[i__19468__auto___24180]));

var G__24181 = (i__19468__auto___24180 + (1));
i__19468__auto___24180 = G__24181;
continue;
} else {
}
break;
}

var G__24128 = args24126.length;
switch (G__24128) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24126.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23505__auto___24183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___24183,tc,fc){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___24183,tc,fc){
return (function (state_24154){
var state_val_24155 = (state_24154[(1)]);
if((state_val_24155 === (7))){
var inst_24150 = (state_24154[(2)]);
var state_24154__$1 = state_24154;
var statearr_24156_24184 = state_24154__$1;
(statearr_24156_24184[(2)] = inst_24150);

(statearr_24156_24184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (1))){
var state_24154__$1 = state_24154;
var statearr_24157_24185 = state_24154__$1;
(statearr_24157_24185[(2)] = null);

(statearr_24157_24185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (4))){
var inst_24131 = (state_24154[(7)]);
var inst_24131__$1 = (state_24154[(2)]);
var inst_24132 = (inst_24131__$1 == null);
var state_24154__$1 = (function (){var statearr_24158 = state_24154;
(statearr_24158[(7)] = inst_24131__$1);

return statearr_24158;
})();
if(cljs.core.truth_(inst_24132)){
var statearr_24159_24186 = state_24154__$1;
(statearr_24159_24186[(1)] = (5));

} else {
var statearr_24160_24187 = state_24154__$1;
(statearr_24160_24187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (13))){
var state_24154__$1 = state_24154;
var statearr_24161_24188 = state_24154__$1;
(statearr_24161_24188[(2)] = null);

(statearr_24161_24188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (6))){
var inst_24131 = (state_24154[(7)]);
var inst_24137 = p.call(null,inst_24131);
var state_24154__$1 = state_24154;
if(cljs.core.truth_(inst_24137)){
var statearr_24162_24189 = state_24154__$1;
(statearr_24162_24189[(1)] = (9));

} else {
var statearr_24163_24190 = state_24154__$1;
(statearr_24163_24190[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (3))){
var inst_24152 = (state_24154[(2)]);
var state_24154__$1 = state_24154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24154__$1,inst_24152);
} else {
if((state_val_24155 === (12))){
var state_24154__$1 = state_24154;
var statearr_24164_24191 = state_24154__$1;
(statearr_24164_24191[(2)] = null);

(statearr_24164_24191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (2))){
var state_24154__$1 = state_24154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24154__$1,(4),ch);
} else {
if((state_val_24155 === (11))){
var inst_24131 = (state_24154[(7)]);
var inst_24141 = (state_24154[(2)]);
var state_24154__$1 = state_24154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24154__$1,(8),inst_24141,inst_24131);
} else {
if((state_val_24155 === (9))){
var state_24154__$1 = state_24154;
var statearr_24165_24192 = state_24154__$1;
(statearr_24165_24192[(2)] = tc);

(statearr_24165_24192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (5))){
var inst_24134 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24135 = cljs.core.async.close_BANG_.call(null,fc);
var state_24154__$1 = (function (){var statearr_24166 = state_24154;
(statearr_24166[(8)] = inst_24134);

return statearr_24166;
})();
var statearr_24167_24193 = state_24154__$1;
(statearr_24167_24193[(2)] = inst_24135);

(statearr_24167_24193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (14))){
var inst_24148 = (state_24154[(2)]);
var state_24154__$1 = state_24154;
var statearr_24168_24194 = state_24154__$1;
(statearr_24168_24194[(2)] = inst_24148);

(statearr_24168_24194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (10))){
var state_24154__$1 = state_24154;
var statearr_24169_24195 = state_24154__$1;
(statearr_24169_24195[(2)] = fc);

(statearr_24169_24195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24155 === (8))){
var inst_24143 = (state_24154[(2)]);
var state_24154__$1 = state_24154;
if(cljs.core.truth_(inst_24143)){
var statearr_24170_24196 = state_24154__$1;
(statearr_24170_24196[(1)] = (12));

} else {
var statearr_24171_24197 = state_24154__$1;
(statearr_24171_24197[(1)] = (13));

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
});})(c__23505__auto___24183,tc,fc))
;
return ((function (switch__23393__auto__,c__23505__auto___24183,tc,fc){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_24175 = [null,null,null,null,null,null,null,null,null];
(statearr_24175[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_24175[(1)] = (1));

return statearr_24175;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_24154){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_24154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e24176){if((e24176 instanceof Object)){
var ex__23397__auto__ = e24176;
var statearr_24177_24198 = state_24154;
(statearr_24177_24198[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24199 = state_24154;
state_24154 = G__24199;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_24154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_24154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___24183,tc,fc))
})();
var state__23507__auto__ = (function (){var statearr_24178 = f__23506__auto__.call(null);
(statearr_24178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___24183);

return statearr_24178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___24183,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__){
return (function (state_24263){
var state_val_24264 = (state_24263[(1)]);
if((state_val_24264 === (7))){
var inst_24259 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24265_24286 = state_24263__$1;
(statearr_24265_24286[(2)] = inst_24259);

(statearr_24265_24286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (1))){
var inst_24243 = init;
var state_24263__$1 = (function (){var statearr_24266 = state_24263;
(statearr_24266[(7)] = inst_24243);

return statearr_24266;
})();
var statearr_24267_24287 = state_24263__$1;
(statearr_24267_24287[(2)] = null);

(statearr_24267_24287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (4))){
var inst_24246 = (state_24263[(8)]);
var inst_24246__$1 = (state_24263[(2)]);
var inst_24247 = (inst_24246__$1 == null);
var state_24263__$1 = (function (){var statearr_24268 = state_24263;
(statearr_24268[(8)] = inst_24246__$1);

return statearr_24268;
})();
if(cljs.core.truth_(inst_24247)){
var statearr_24269_24288 = state_24263__$1;
(statearr_24269_24288[(1)] = (5));

} else {
var statearr_24270_24289 = state_24263__$1;
(statearr_24270_24289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (6))){
var inst_24243 = (state_24263[(7)]);
var inst_24246 = (state_24263[(8)]);
var inst_24250 = (state_24263[(9)]);
var inst_24250__$1 = f.call(null,inst_24243,inst_24246);
var inst_24251 = cljs.core.reduced_QMARK_.call(null,inst_24250__$1);
var state_24263__$1 = (function (){var statearr_24271 = state_24263;
(statearr_24271[(9)] = inst_24250__$1);

return statearr_24271;
})();
if(inst_24251){
var statearr_24272_24290 = state_24263__$1;
(statearr_24272_24290[(1)] = (8));

} else {
var statearr_24273_24291 = state_24263__$1;
(statearr_24273_24291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (3))){
var inst_24261 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24263__$1,inst_24261);
} else {
if((state_val_24264 === (2))){
var state_24263__$1 = state_24263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24263__$1,(4),ch);
} else {
if((state_val_24264 === (9))){
var inst_24250 = (state_24263[(9)]);
var inst_24243 = inst_24250;
var state_24263__$1 = (function (){var statearr_24274 = state_24263;
(statearr_24274[(7)] = inst_24243);

return statearr_24274;
})();
var statearr_24275_24292 = state_24263__$1;
(statearr_24275_24292[(2)] = null);

(statearr_24275_24292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (5))){
var inst_24243 = (state_24263[(7)]);
var state_24263__$1 = state_24263;
var statearr_24276_24293 = state_24263__$1;
(statearr_24276_24293[(2)] = inst_24243);

(statearr_24276_24293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (10))){
var inst_24257 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24277_24294 = state_24263__$1;
(statearr_24277_24294[(2)] = inst_24257);

(statearr_24277_24294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (8))){
var inst_24250 = (state_24263[(9)]);
var inst_24253 = cljs.core.deref.call(null,inst_24250);
var state_24263__$1 = state_24263;
var statearr_24278_24295 = state_24263__$1;
(statearr_24278_24295[(2)] = inst_24253);

(statearr_24278_24295[(1)] = (10));


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
});})(c__23505__auto__))
;
return ((function (switch__23393__auto__,c__23505__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23394__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23394__auto____0 = (function (){
var statearr_24282 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24282[(0)] = cljs$core$async$reduce_$_state_machine__23394__auto__);

(statearr_24282[(1)] = (1));

return statearr_24282;
});
var cljs$core$async$reduce_$_state_machine__23394__auto____1 = (function (state_24263){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_24263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e24283){if((e24283 instanceof Object)){
var ex__23397__auto__ = e24283;
var statearr_24284_24296 = state_24263;
(statearr_24284_24296[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24297 = state_24263;
state_24263 = G__24297;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23394__auto__ = function(state_24263){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23394__auto____1.call(this,state_24263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23394__auto____0;
cljs$core$async$reduce_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23394__auto____1;
return cljs$core$async$reduce_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__))
})();
var state__23507__auto__ = (function (){var statearr_24285 = f__23506__auto__.call(null);
(statearr_24285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_24285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__))
);

return c__23505__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24298 = [];
var len__19467__auto___24350 = arguments.length;
var i__19468__auto___24351 = (0);
while(true){
if((i__19468__auto___24351 < len__19467__auto___24350)){
args24298.push((arguments[i__19468__auto___24351]));

var G__24352 = (i__19468__auto___24351 + (1));
i__19468__auto___24351 = G__24352;
continue;
} else {
}
break;
}

var G__24300 = args24298.length;
switch (G__24300) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24298.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__){
return (function (state_24325){
var state_val_24326 = (state_24325[(1)]);
if((state_val_24326 === (7))){
var inst_24307 = (state_24325[(2)]);
var state_24325__$1 = state_24325;
var statearr_24327_24354 = state_24325__$1;
(statearr_24327_24354[(2)] = inst_24307);

(statearr_24327_24354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (1))){
var inst_24301 = cljs.core.seq.call(null,coll);
var inst_24302 = inst_24301;
var state_24325__$1 = (function (){var statearr_24328 = state_24325;
(statearr_24328[(7)] = inst_24302);

return statearr_24328;
})();
var statearr_24329_24355 = state_24325__$1;
(statearr_24329_24355[(2)] = null);

(statearr_24329_24355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (4))){
var inst_24302 = (state_24325[(7)]);
var inst_24305 = cljs.core.first.call(null,inst_24302);
var state_24325__$1 = state_24325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24325__$1,(7),ch,inst_24305);
} else {
if((state_val_24326 === (13))){
var inst_24319 = (state_24325[(2)]);
var state_24325__$1 = state_24325;
var statearr_24330_24356 = state_24325__$1;
(statearr_24330_24356[(2)] = inst_24319);

(statearr_24330_24356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (6))){
var inst_24310 = (state_24325[(2)]);
var state_24325__$1 = state_24325;
if(cljs.core.truth_(inst_24310)){
var statearr_24331_24357 = state_24325__$1;
(statearr_24331_24357[(1)] = (8));

} else {
var statearr_24332_24358 = state_24325__$1;
(statearr_24332_24358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (3))){
var inst_24323 = (state_24325[(2)]);
var state_24325__$1 = state_24325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24325__$1,inst_24323);
} else {
if((state_val_24326 === (12))){
var state_24325__$1 = state_24325;
var statearr_24333_24359 = state_24325__$1;
(statearr_24333_24359[(2)] = null);

(statearr_24333_24359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (2))){
var inst_24302 = (state_24325[(7)]);
var state_24325__$1 = state_24325;
if(cljs.core.truth_(inst_24302)){
var statearr_24334_24360 = state_24325__$1;
(statearr_24334_24360[(1)] = (4));

} else {
var statearr_24335_24361 = state_24325__$1;
(statearr_24335_24361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (11))){
var inst_24316 = cljs.core.async.close_BANG_.call(null,ch);
var state_24325__$1 = state_24325;
var statearr_24336_24362 = state_24325__$1;
(statearr_24336_24362[(2)] = inst_24316);

(statearr_24336_24362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (9))){
var state_24325__$1 = state_24325;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24337_24363 = state_24325__$1;
(statearr_24337_24363[(1)] = (11));

} else {
var statearr_24338_24364 = state_24325__$1;
(statearr_24338_24364[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (5))){
var inst_24302 = (state_24325[(7)]);
var state_24325__$1 = state_24325;
var statearr_24339_24365 = state_24325__$1;
(statearr_24339_24365[(2)] = inst_24302);

(statearr_24339_24365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (10))){
var inst_24321 = (state_24325[(2)]);
var state_24325__$1 = state_24325;
var statearr_24340_24366 = state_24325__$1;
(statearr_24340_24366[(2)] = inst_24321);

(statearr_24340_24366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24326 === (8))){
var inst_24302 = (state_24325[(7)]);
var inst_24312 = cljs.core.next.call(null,inst_24302);
var inst_24302__$1 = inst_24312;
var state_24325__$1 = (function (){var statearr_24341 = state_24325;
(statearr_24341[(7)] = inst_24302__$1);

return statearr_24341;
})();
var statearr_24342_24367 = state_24325__$1;
(statearr_24342_24367[(2)] = null);

(statearr_24342_24367[(1)] = (2));


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
});})(c__23505__auto__))
;
return ((function (switch__23393__auto__,c__23505__auto__){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_24346 = [null,null,null,null,null,null,null,null];
(statearr_24346[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_24346[(1)] = (1));

return statearr_24346;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_24325){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_24325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e24347){if((e24347 instanceof Object)){
var ex__23397__auto__ = e24347;
var statearr_24348_24368 = state_24325;
(statearr_24348_24368[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24369 = state_24325;
state_24325 = G__24369;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_24325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_24325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__))
})();
var state__23507__auto__ = (function (){var statearr_24349 = f__23506__auto__.call(null);
(statearr_24349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_24349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__))
);

return c__23505__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19061__auto__ = (((_ == null))?null:_);
var m__19062__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,_);
} else {
var m__19062__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19061__auto__ = (((m == null))?null:m);
var m__19062__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19062__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19061__auto__ = (((m == null))?null:m);
var m__19062__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,m,ch);
} else {
var m__19062__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19061__auto__ = (((m == null))?null:m);
var m__19062__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,m);
} else {
var m__19062__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24591 = (function (mult,ch,cs,meta24592){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24592 = meta24592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24593,meta24592__$1){
var self__ = this;
var _24593__$1 = this;
return (new cljs.core.async.t_cljs$core$async24591(self__.mult,self__.ch,self__.cs,meta24592__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24593){
var self__ = this;
var _24593__$1 = this;
return self__.meta24592;
});})(cs))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24591.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24591.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24592","meta24592",-244285144,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24591";

cljs.core.async.t_cljs$core$async24591.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async24591");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24591 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24591(mult__$1,ch__$1,cs__$1,meta24592){
return (new cljs.core.async.t_cljs$core$async24591(mult__$1,ch__$1,cs__$1,meta24592));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24591(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23505__auto___24812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___24812,cs,m,dchan,dctr,done){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___24812,cs,m,dchan,dctr,done){
return (function (state_24724){
var state_val_24725 = (state_24724[(1)]);
if((state_val_24725 === (7))){
var inst_24720 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24726_24813 = state_24724__$1;
(statearr_24726_24813[(2)] = inst_24720);

(statearr_24726_24813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (20))){
var inst_24625 = (state_24724[(7)]);
var inst_24635 = cljs.core.first.call(null,inst_24625);
var inst_24636 = cljs.core.nth.call(null,inst_24635,(0),null);
var inst_24637 = cljs.core.nth.call(null,inst_24635,(1),null);
var state_24724__$1 = (function (){var statearr_24727 = state_24724;
(statearr_24727[(8)] = inst_24636);

return statearr_24727;
})();
if(cljs.core.truth_(inst_24637)){
var statearr_24728_24814 = state_24724__$1;
(statearr_24728_24814[(1)] = (22));

} else {
var statearr_24729_24815 = state_24724__$1;
(statearr_24729_24815[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (27))){
var inst_24672 = (state_24724[(9)]);
var inst_24596 = (state_24724[(10)]);
var inst_24667 = (state_24724[(11)]);
var inst_24665 = (state_24724[(12)]);
var inst_24672__$1 = cljs.core._nth.call(null,inst_24665,inst_24667);
var inst_24673 = cljs.core.async.put_BANG_.call(null,inst_24672__$1,inst_24596,done);
var state_24724__$1 = (function (){var statearr_24730 = state_24724;
(statearr_24730[(9)] = inst_24672__$1);

return statearr_24730;
})();
if(cljs.core.truth_(inst_24673)){
var statearr_24731_24816 = state_24724__$1;
(statearr_24731_24816[(1)] = (30));

} else {
var statearr_24732_24817 = state_24724__$1;
(statearr_24732_24817[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (1))){
var state_24724__$1 = state_24724;
var statearr_24733_24818 = state_24724__$1;
(statearr_24733_24818[(2)] = null);

(statearr_24733_24818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (24))){
var inst_24625 = (state_24724[(7)]);
var inst_24642 = (state_24724[(2)]);
var inst_24643 = cljs.core.next.call(null,inst_24625);
var inst_24605 = inst_24643;
var inst_24606 = null;
var inst_24607 = (0);
var inst_24608 = (0);
var state_24724__$1 = (function (){var statearr_24734 = state_24724;
(statearr_24734[(13)] = inst_24605);

(statearr_24734[(14)] = inst_24607);

(statearr_24734[(15)] = inst_24642);

(statearr_24734[(16)] = inst_24608);

(statearr_24734[(17)] = inst_24606);

return statearr_24734;
})();
var statearr_24735_24819 = state_24724__$1;
(statearr_24735_24819[(2)] = null);

(statearr_24735_24819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (39))){
var state_24724__$1 = state_24724;
var statearr_24739_24820 = state_24724__$1;
(statearr_24739_24820[(2)] = null);

(statearr_24739_24820[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (4))){
var inst_24596 = (state_24724[(10)]);
var inst_24596__$1 = (state_24724[(2)]);
var inst_24597 = (inst_24596__$1 == null);
var state_24724__$1 = (function (){var statearr_24740 = state_24724;
(statearr_24740[(10)] = inst_24596__$1);

return statearr_24740;
})();
if(cljs.core.truth_(inst_24597)){
var statearr_24741_24821 = state_24724__$1;
(statearr_24741_24821[(1)] = (5));

} else {
var statearr_24742_24822 = state_24724__$1;
(statearr_24742_24822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (15))){
var inst_24605 = (state_24724[(13)]);
var inst_24607 = (state_24724[(14)]);
var inst_24608 = (state_24724[(16)]);
var inst_24606 = (state_24724[(17)]);
var inst_24621 = (state_24724[(2)]);
var inst_24622 = (inst_24608 + (1));
var tmp24736 = inst_24605;
var tmp24737 = inst_24607;
var tmp24738 = inst_24606;
var inst_24605__$1 = tmp24736;
var inst_24606__$1 = tmp24738;
var inst_24607__$1 = tmp24737;
var inst_24608__$1 = inst_24622;
var state_24724__$1 = (function (){var statearr_24743 = state_24724;
(statearr_24743[(13)] = inst_24605__$1);

(statearr_24743[(18)] = inst_24621);

(statearr_24743[(14)] = inst_24607__$1);

(statearr_24743[(16)] = inst_24608__$1);

(statearr_24743[(17)] = inst_24606__$1);

return statearr_24743;
})();
var statearr_24744_24823 = state_24724__$1;
(statearr_24744_24823[(2)] = null);

(statearr_24744_24823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (21))){
var inst_24646 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24748_24824 = state_24724__$1;
(statearr_24748_24824[(2)] = inst_24646);

(statearr_24748_24824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (31))){
var inst_24672 = (state_24724[(9)]);
var inst_24676 = done.call(null,null);
var inst_24677 = cljs.core.async.untap_STAR_.call(null,m,inst_24672);
var state_24724__$1 = (function (){var statearr_24749 = state_24724;
(statearr_24749[(19)] = inst_24676);

return statearr_24749;
})();
var statearr_24750_24825 = state_24724__$1;
(statearr_24750_24825[(2)] = inst_24677);

(statearr_24750_24825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (32))){
var inst_24667 = (state_24724[(11)]);
var inst_24664 = (state_24724[(20)]);
var inst_24665 = (state_24724[(12)]);
var inst_24666 = (state_24724[(21)]);
var inst_24679 = (state_24724[(2)]);
var inst_24680 = (inst_24667 + (1));
var tmp24745 = inst_24664;
var tmp24746 = inst_24665;
var tmp24747 = inst_24666;
var inst_24664__$1 = tmp24745;
var inst_24665__$1 = tmp24746;
var inst_24666__$1 = tmp24747;
var inst_24667__$1 = inst_24680;
var state_24724__$1 = (function (){var statearr_24751 = state_24724;
(statearr_24751[(11)] = inst_24667__$1);

(statearr_24751[(20)] = inst_24664__$1);

(statearr_24751[(22)] = inst_24679);

(statearr_24751[(12)] = inst_24665__$1);

(statearr_24751[(21)] = inst_24666__$1);

return statearr_24751;
})();
var statearr_24752_24826 = state_24724__$1;
(statearr_24752_24826[(2)] = null);

(statearr_24752_24826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (40))){
var inst_24692 = (state_24724[(23)]);
var inst_24696 = done.call(null,null);
var inst_24697 = cljs.core.async.untap_STAR_.call(null,m,inst_24692);
var state_24724__$1 = (function (){var statearr_24753 = state_24724;
(statearr_24753[(24)] = inst_24696);

return statearr_24753;
})();
var statearr_24754_24827 = state_24724__$1;
(statearr_24754_24827[(2)] = inst_24697);

(statearr_24754_24827[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (33))){
var inst_24683 = (state_24724[(25)]);
var inst_24685 = cljs.core.chunked_seq_QMARK_.call(null,inst_24683);
var state_24724__$1 = state_24724;
if(inst_24685){
var statearr_24755_24828 = state_24724__$1;
(statearr_24755_24828[(1)] = (36));

} else {
var statearr_24756_24829 = state_24724__$1;
(statearr_24756_24829[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (13))){
var inst_24615 = (state_24724[(26)]);
var inst_24618 = cljs.core.async.close_BANG_.call(null,inst_24615);
var state_24724__$1 = state_24724;
var statearr_24757_24830 = state_24724__$1;
(statearr_24757_24830[(2)] = inst_24618);

(statearr_24757_24830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (22))){
var inst_24636 = (state_24724[(8)]);
var inst_24639 = cljs.core.async.close_BANG_.call(null,inst_24636);
var state_24724__$1 = state_24724;
var statearr_24758_24831 = state_24724__$1;
(statearr_24758_24831[(2)] = inst_24639);

(statearr_24758_24831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (36))){
var inst_24683 = (state_24724[(25)]);
var inst_24687 = cljs.core.chunk_first.call(null,inst_24683);
var inst_24688 = cljs.core.chunk_rest.call(null,inst_24683);
var inst_24689 = cljs.core.count.call(null,inst_24687);
var inst_24664 = inst_24688;
var inst_24665 = inst_24687;
var inst_24666 = inst_24689;
var inst_24667 = (0);
var state_24724__$1 = (function (){var statearr_24759 = state_24724;
(statearr_24759[(11)] = inst_24667);

(statearr_24759[(20)] = inst_24664);

(statearr_24759[(12)] = inst_24665);

(statearr_24759[(21)] = inst_24666);

return statearr_24759;
})();
var statearr_24760_24832 = state_24724__$1;
(statearr_24760_24832[(2)] = null);

(statearr_24760_24832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (41))){
var inst_24683 = (state_24724[(25)]);
var inst_24699 = (state_24724[(2)]);
var inst_24700 = cljs.core.next.call(null,inst_24683);
var inst_24664 = inst_24700;
var inst_24665 = null;
var inst_24666 = (0);
var inst_24667 = (0);
var state_24724__$1 = (function (){var statearr_24761 = state_24724;
(statearr_24761[(27)] = inst_24699);

(statearr_24761[(11)] = inst_24667);

(statearr_24761[(20)] = inst_24664);

(statearr_24761[(12)] = inst_24665);

(statearr_24761[(21)] = inst_24666);

return statearr_24761;
})();
var statearr_24762_24833 = state_24724__$1;
(statearr_24762_24833[(2)] = null);

(statearr_24762_24833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (43))){
var state_24724__$1 = state_24724;
var statearr_24763_24834 = state_24724__$1;
(statearr_24763_24834[(2)] = null);

(statearr_24763_24834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (29))){
var inst_24708 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24764_24835 = state_24724__$1;
(statearr_24764_24835[(2)] = inst_24708);

(statearr_24764_24835[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (44))){
var inst_24717 = (state_24724[(2)]);
var state_24724__$1 = (function (){var statearr_24765 = state_24724;
(statearr_24765[(28)] = inst_24717);

return statearr_24765;
})();
var statearr_24766_24836 = state_24724__$1;
(statearr_24766_24836[(2)] = null);

(statearr_24766_24836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (6))){
var inst_24656 = (state_24724[(29)]);
var inst_24655 = cljs.core.deref.call(null,cs);
var inst_24656__$1 = cljs.core.keys.call(null,inst_24655);
var inst_24657 = cljs.core.count.call(null,inst_24656__$1);
var inst_24658 = cljs.core.reset_BANG_.call(null,dctr,inst_24657);
var inst_24663 = cljs.core.seq.call(null,inst_24656__$1);
var inst_24664 = inst_24663;
var inst_24665 = null;
var inst_24666 = (0);
var inst_24667 = (0);
var state_24724__$1 = (function (){var statearr_24767 = state_24724;
(statearr_24767[(29)] = inst_24656__$1);

(statearr_24767[(11)] = inst_24667);

(statearr_24767[(20)] = inst_24664);

(statearr_24767[(12)] = inst_24665);

(statearr_24767[(21)] = inst_24666);

(statearr_24767[(30)] = inst_24658);

return statearr_24767;
})();
var statearr_24768_24837 = state_24724__$1;
(statearr_24768_24837[(2)] = null);

(statearr_24768_24837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (28))){
var inst_24683 = (state_24724[(25)]);
var inst_24664 = (state_24724[(20)]);
var inst_24683__$1 = cljs.core.seq.call(null,inst_24664);
var state_24724__$1 = (function (){var statearr_24769 = state_24724;
(statearr_24769[(25)] = inst_24683__$1);

return statearr_24769;
})();
if(inst_24683__$1){
var statearr_24770_24838 = state_24724__$1;
(statearr_24770_24838[(1)] = (33));

} else {
var statearr_24771_24839 = state_24724__$1;
(statearr_24771_24839[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (25))){
var inst_24667 = (state_24724[(11)]);
var inst_24666 = (state_24724[(21)]);
var inst_24669 = (inst_24667 < inst_24666);
var inst_24670 = inst_24669;
var state_24724__$1 = state_24724;
if(cljs.core.truth_(inst_24670)){
var statearr_24772_24840 = state_24724__$1;
(statearr_24772_24840[(1)] = (27));

} else {
var statearr_24773_24841 = state_24724__$1;
(statearr_24773_24841[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (34))){
var state_24724__$1 = state_24724;
var statearr_24774_24842 = state_24724__$1;
(statearr_24774_24842[(2)] = null);

(statearr_24774_24842[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (17))){
var state_24724__$1 = state_24724;
var statearr_24775_24843 = state_24724__$1;
(statearr_24775_24843[(2)] = null);

(statearr_24775_24843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (3))){
var inst_24722 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24724__$1,inst_24722);
} else {
if((state_val_24725 === (12))){
var inst_24651 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24776_24844 = state_24724__$1;
(statearr_24776_24844[(2)] = inst_24651);

(statearr_24776_24844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (2))){
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24724__$1,(4),ch);
} else {
if((state_val_24725 === (23))){
var state_24724__$1 = state_24724;
var statearr_24777_24845 = state_24724__$1;
(statearr_24777_24845[(2)] = null);

(statearr_24777_24845[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (35))){
var inst_24706 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24778_24846 = state_24724__$1;
(statearr_24778_24846[(2)] = inst_24706);

(statearr_24778_24846[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (19))){
var inst_24625 = (state_24724[(7)]);
var inst_24629 = cljs.core.chunk_first.call(null,inst_24625);
var inst_24630 = cljs.core.chunk_rest.call(null,inst_24625);
var inst_24631 = cljs.core.count.call(null,inst_24629);
var inst_24605 = inst_24630;
var inst_24606 = inst_24629;
var inst_24607 = inst_24631;
var inst_24608 = (0);
var state_24724__$1 = (function (){var statearr_24779 = state_24724;
(statearr_24779[(13)] = inst_24605);

(statearr_24779[(14)] = inst_24607);

(statearr_24779[(16)] = inst_24608);

(statearr_24779[(17)] = inst_24606);

return statearr_24779;
})();
var statearr_24780_24847 = state_24724__$1;
(statearr_24780_24847[(2)] = null);

(statearr_24780_24847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (11))){
var inst_24605 = (state_24724[(13)]);
var inst_24625 = (state_24724[(7)]);
var inst_24625__$1 = cljs.core.seq.call(null,inst_24605);
var state_24724__$1 = (function (){var statearr_24781 = state_24724;
(statearr_24781[(7)] = inst_24625__$1);

return statearr_24781;
})();
if(inst_24625__$1){
var statearr_24782_24848 = state_24724__$1;
(statearr_24782_24848[(1)] = (16));

} else {
var statearr_24783_24849 = state_24724__$1;
(statearr_24783_24849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (9))){
var inst_24653 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24784_24850 = state_24724__$1;
(statearr_24784_24850[(2)] = inst_24653);

(statearr_24784_24850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (5))){
var inst_24603 = cljs.core.deref.call(null,cs);
var inst_24604 = cljs.core.seq.call(null,inst_24603);
var inst_24605 = inst_24604;
var inst_24606 = null;
var inst_24607 = (0);
var inst_24608 = (0);
var state_24724__$1 = (function (){var statearr_24785 = state_24724;
(statearr_24785[(13)] = inst_24605);

(statearr_24785[(14)] = inst_24607);

(statearr_24785[(16)] = inst_24608);

(statearr_24785[(17)] = inst_24606);

return statearr_24785;
})();
var statearr_24786_24851 = state_24724__$1;
(statearr_24786_24851[(2)] = null);

(statearr_24786_24851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (14))){
var state_24724__$1 = state_24724;
var statearr_24787_24852 = state_24724__$1;
(statearr_24787_24852[(2)] = null);

(statearr_24787_24852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (45))){
var inst_24714 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24788_24853 = state_24724__$1;
(statearr_24788_24853[(2)] = inst_24714);

(statearr_24788_24853[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (26))){
var inst_24656 = (state_24724[(29)]);
var inst_24710 = (state_24724[(2)]);
var inst_24711 = cljs.core.seq.call(null,inst_24656);
var state_24724__$1 = (function (){var statearr_24789 = state_24724;
(statearr_24789[(31)] = inst_24710);

return statearr_24789;
})();
if(inst_24711){
var statearr_24790_24854 = state_24724__$1;
(statearr_24790_24854[(1)] = (42));

} else {
var statearr_24791_24855 = state_24724__$1;
(statearr_24791_24855[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (16))){
var inst_24625 = (state_24724[(7)]);
var inst_24627 = cljs.core.chunked_seq_QMARK_.call(null,inst_24625);
var state_24724__$1 = state_24724;
if(inst_24627){
var statearr_24792_24856 = state_24724__$1;
(statearr_24792_24856[(1)] = (19));

} else {
var statearr_24793_24857 = state_24724__$1;
(statearr_24793_24857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (38))){
var inst_24703 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24794_24858 = state_24724__$1;
(statearr_24794_24858[(2)] = inst_24703);

(statearr_24794_24858[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (30))){
var state_24724__$1 = state_24724;
var statearr_24795_24859 = state_24724__$1;
(statearr_24795_24859[(2)] = null);

(statearr_24795_24859[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (10))){
var inst_24608 = (state_24724[(16)]);
var inst_24606 = (state_24724[(17)]);
var inst_24614 = cljs.core._nth.call(null,inst_24606,inst_24608);
var inst_24615 = cljs.core.nth.call(null,inst_24614,(0),null);
var inst_24616 = cljs.core.nth.call(null,inst_24614,(1),null);
var state_24724__$1 = (function (){var statearr_24796 = state_24724;
(statearr_24796[(26)] = inst_24615);

return statearr_24796;
})();
if(cljs.core.truth_(inst_24616)){
var statearr_24797_24860 = state_24724__$1;
(statearr_24797_24860[(1)] = (13));

} else {
var statearr_24798_24861 = state_24724__$1;
(statearr_24798_24861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (18))){
var inst_24649 = (state_24724[(2)]);
var state_24724__$1 = state_24724;
var statearr_24799_24862 = state_24724__$1;
(statearr_24799_24862[(2)] = inst_24649);

(statearr_24799_24862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (42))){
var state_24724__$1 = state_24724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24724__$1,(45),dchan);
} else {
if((state_val_24725 === (37))){
var inst_24683 = (state_24724[(25)]);
var inst_24596 = (state_24724[(10)]);
var inst_24692 = (state_24724[(23)]);
var inst_24692__$1 = cljs.core.first.call(null,inst_24683);
var inst_24693 = cljs.core.async.put_BANG_.call(null,inst_24692__$1,inst_24596,done);
var state_24724__$1 = (function (){var statearr_24800 = state_24724;
(statearr_24800[(23)] = inst_24692__$1);

return statearr_24800;
})();
if(cljs.core.truth_(inst_24693)){
var statearr_24801_24863 = state_24724__$1;
(statearr_24801_24863[(1)] = (39));

} else {
var statearr_24802_24864 = state_24724__$1;
(statearr_24802_24864[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24725 === (8))){
var inst_24607 = (state_24724[(14)]);
var inst_24608 = (state_24724[(16)]);
var inst_24610 = (inst_24608 < inst_24607);
var inst_24611 = inst_24610;
var state_24724__$1 = state_24724;
if(cljs.core.truth_(inst_24611)){
var statearr_24803_24865 = state_24724__$1;
(statearr_24803_24865[(1)] = (10));

} else {
var statearr_24804_24866 = state_24724__$1;
(statearr_24804_24866[(1)] = (11));

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
});})(c__23505__auto___24812,cs,m,dchan,dctr,done))
;
return ((function (switch__23393__auto__,c__23505__auto___24812,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23394__auto__ = null;
var cljs$core$async$mult_$_state_machine__23394__auto____0 = (function (){
var statearr_24808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24808[(0)] = cljs$core$async$mult_$_state_machine__23394__auto__);

(statearr_24808[(1)] = (1));

return statearr_24808;
});
var cljs$core$async$mult_$_state_machine__23394__auto____1 = (function (state_24724){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_24724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e24809){if((e24809 instanceof Object)){
var ex__23397__auto__ = e24809;
var statearr_24810_24867 = state_24724;
(statearr_24810_24867[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24868 = state_24724;
state_24724 = G__24868;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23394__auto__ = function(state_24724){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23394__auto____1.call(this,state_24724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23394__auto____0;
cljs$core$async$mult_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23394__auto____1;
return cljs$core$async$mult_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___24812,cs,m,dchan,dctr,done))
})();
var state__23507__auto__ = (function (){var statearr_24811 = f__23506__auto__.call(null);
(statearr_24811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___24812);

return statearr_24811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___24812,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24869 = [];
var len__19467__auto___24872 = arguments.length;
var i__19468__auto___24873 = (0);
while(true){
if((i__19468__auto___24873 < len__19467__auto___24872)){
args24869.push((arguments[i__19468__auto___24873]));

var G__24874 = (i__19468__auto___24873 + (1));
i__19468__auto___24873 = G__24874;
continue;
} else {
}
break;
}

var G__24871 = args24869.length;
switch (G__24871) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24869.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19061__auto__ = (((m == null))?null:m);
var m__19062__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,m,ch);
} else {
var m__19062__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19061__auto__ = (((m == null))?null:m);
var m__19062__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,m,ch);
} else {
var m__19062__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19061__auto__ = (((m == null))?null:m);
var m__19062__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,m);
} else {
var m__19062__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19061__auto__ = (((m == null))?null:m);
var m__19062__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,m,state_map);
} else {
var m__19062__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19061__auto__ = (((m == null))?null:m);
var m__19062__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,m,mode);
} else {
var m__19062__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19474__auto__ = [];
var len__19467__auto___24886 = arguments.length;
var i__19468__auto___24887 = (0);
while(true){
if((i__19468__auto___24887 < len__19467__auto___24886)){
args__19474__auto__.push((arguments[i__19468__auto___24887]));

var G__24888 = (i__19468__auto___24887 + (1));
i__19468__auto___24887 = G__24888;
continue;
} else {
}
break;
}

var argseq__19475__auto__ = ((((3) < args__19474__auto__.length))?(new cljs.core.IndexedSeq(args__19474__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19475__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24880){
var map__24881 = p__24880;
var map__24881__$1 = ((((!((map__24881 == null)))?((((map__24881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24881):map__24881);
var opts = map__24881__$1;
var statearr_24883_24889 = state;
(statearr_24883_24889[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24881,map__24881__$1,opts){
return (function (val){
var statearr_24884_24890 = state;
(statearr_24884_24890[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24881,map__24881__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24885_24891 = state;
(statearr_24885_24891[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24876){
var G__24877 = cljs.core.first.call(null,seq24876);
var seq24876__$1 = cljs.core.next.call(null,seq24876);
var G__24878 = cljs.core.first.call(null,seq24876__$1);
var seq24876__$2 = cljs.core.next.call(null,seq24876__$1);
var G__24879 = cljs.core.first.call(null,seq24876__$2);
var seq24876__$3 = cljs.core.next.call(null,seq24876__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24877,G__24878,G__24879,seq24876__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25055 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25056){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25056 = meta25056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25057,meta25056__$1){
var self__ = this;
var _25057__$1 = this;
return (new cljs.core.async.t_cljs$core$async25055(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25056__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25057){
var self__ = this;
var _25057__$1 = this;
return self__.meta25056;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25056","meta25056",1318552678,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25055";

cljs.core.async.t_cljs$core$async25055.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async25055");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25055 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25055(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25056){
return (new cljs.core.async.t_cljs$core$async25055(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25056));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25055(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23505__auto___25218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___25218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___25218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25155){
var state_val_25156 = (state_25155[(1)]);
if((state_val_25156 === (7))){
var inst_25073 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25157_25219 = state_25155__$1;
(statearr_25157_25219[(2)] = inst_25073);

(statearr_25157_25219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (20))){
var inst_25085 = (state_25155[(7)]);
var state_25155__$1 = state_25155;
var statearr_25158_25220 = state_25155__$1;
(statearr_25158_25220[(2)] = inst_25085);

(statearr_25158_25220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (27))){
var state_25155__$1 = state_25155;
var statearr_25159_25221 = state_25155__$1;
(statearr_25159_25221[(2)] = null);

(statearr_25159_25221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (1))){
var inst_25061 = (state_25155[(8)]);
var inst_25061__$1 = calc_state.call(null);
var inst_25063 = (inst_25061__$1 == null);
var inst_25064 = cljs.core.not.call(null,inst_25063);
var state_25155__$1 = (function (){var statearr_25160 = state_25155;
(statearr_25160[(8)] = inst_25061__$1);

return statearr_25160;
})();
if(inst_25064){
var statearr_25161_25222 = state_25155__$1;
(statearr_25161_25222[(1)] = (2));

} else {
var statearr_25162_25223 = state_25155__$1;
(statearr_25162_25223[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (24))){
var inst_25108 = (state_25155[(9)]);
var inst_25129 = (state_25155[(10)]);
var inst_25115 = (state_25155[(11)]);
var inst_25129__$1 = inst_25108.call(null,inst_25115);
var state_25155__$1 = (function (){var statearr_25163 = state_25155;
(statearr_25163[(10)] = inst_25129__$1);

return statearr_25163;
})();
if(cljs.core.truth_(inst_25129__$1)){
var statearr_25164_25224 = state_25155__$1;
(statearr_25164_25224[(1)] = (29));

} else {
var statearr_25165_25225 = state_25155__$1;
(statearr_25165_25225[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (4))){
var inst_25076 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25076)){
var statearr_25166_25226 = state_25155__$1;
(statearr_25166_25226[(1)] = (8));

} else {
var statearr_25167_25227 = state_25155__$1;
(statearr_25167_25227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (15))){
var inst_25102 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25102)){
var statearr_25168_25228 = state_25155__$1;
(statearr_25168_25228[(1)] = (19));

} else {
var statearr_25169_25229 = state_25155__$1;
(statearr_25169_25229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (21))){
var inst_25107 = (state_25155[(12)]);
var inst_25107__$1 = (state_25155[(2)]);
var inst_25108 = cljs.core.get.call(null,inst_25107__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25109 = cljs.core.get.call(null,inst_25107__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25110 = cljs.core.get.call(null,inst_25107__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25155__$1 = (function (){var statearr_25170 = state_25155;
(statearr_25170[(12)] = inst_25107__$1);

(statearr_25170[(9)] = inst_25108);

(statearr_25170[(13)] = inst_25109);

return statearr_25170;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25155__$1,(22),inst_25110);
} else {
if((state_val_25156 === (31))){
var inst_25137 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25137)){
var statearr_25171_25230 = state_25155__$1;
(statearr_25171_25230[(1)] = (32));

} else {
var statearr_25172_25231 = state_25155__$1;
(statearr_25172_25231[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (32))){
var inst_25114 = (state_25155[(14)]);
var state_25155__$1 = state_25155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25155__$1,(35),out,inst_25114);
} else {
if((state_val_25156 === (33))){
var inst_25107 = (state_25155[(12)]);
var inst_25085 = inst_25107;
var state_25155__$1 = (function (){var statearr_25173 = state_25155;
(statearr_25173[(7)] = inst_25085);

return statearr_25173;
})();
var statearr_25174_25232 = state_25155__$1;
(statearr_25174_25232[(2)] = null);

(statearr_25174_25232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (13))){
var inst_25085 = (state_25155[(7)]);
var inst_25092 = inst_25085.cljs$lang$protocol_mask$partition0$;
var inst_25093 = (inst_25092 & (64));
var inst_25094 = inst_25085.cljs$core$ISeq$;
var inst_25095 = (inst_25093) || (inst_25094);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25095)){
var statearr_25175_25233 = state_25155__$1;
(statearr_25175_25233[(1)] = (16));

} else {
var statearr_25176_25234 = state_25155__$1;
(statearr_25176_25234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (22))){
var inst_25114 = (state_25155[(14)]);
var inst_25115 = (state_25155[(11)]);
var inst_25113 = (state_25155[(2)]);
var inst_25114__$1 = cljs.core.nth.call(null,inst_25113,(0),null);
var inst_25115__$1 = cljs.core.nth.call(null,inst_25113,(1),null);
var inst_25116 = (inst_25114__$1 == null);
var inst_25117 = cljs.core._EQ_.call(null,inst_25115__$1,change);
var inst_25118 = (inst_25116) || (inst_25117);
var state_25155__$1 = (function (){var statearr_25177 = state_25155;
(statearr_25177[(14)] = inst_25114__$1);

(statearr_25177[(11)] = inst_25115__$1);

return statearr_25177;
})();
if(cljs.core.truth_(inst_25118)){
var statearr_25178_25235 = state_25155__$1;
(statearr_25178_25235[(1)] = (23));

} else {
var statearr_25179_25236 = state_25155__$1;
(statearr_25179_25236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (36))){
var inst_25107 = (state_25155[(12)]);
var inst_25085 = inst_25107;
var state_25155__$1 = (function (){var statearr_25180 = state_25155;
(statearr_25180[(7)] = inst_25085);

return statearr_25180;
})();
var statearr_25181_25237 = state_25155__$1;
(statearr_25181_25237[(2)] = null);

(statearr_25181_25237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (29))){
var inst_25129 = (state_25155[(10)]);
var state_25155__$1 = state_25155;
var statearr_25182_25238 = state_25155__$1;
(statearr_25182_25238[(2)] = inst_25129);

(statearr_25182_25238[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (6))){
var state_25155__$1 = state_25155;
var statearr_25183_25239 = state_25155__$1;
(statearr_25183_25239[(2)] = false);

(statearr_25183_25239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (28))){
var inst_25125 = (state_25155[(2)]);
var inst_25126 = calc_state.call(null);
var inst_25085 = inst_25126;
var state_25155__$1 = (function (){var statearr_25184 = state_25155;
(statearr_25184[(7)] = inst_25085);

(statearr_25184[(15)] = inst_25125);

return statearr_25184;
})();
var statearr_25185_25240 = state_25155__$1;
(statearr_25185_25240[(2)] = null);

(statearr_25185_25240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (25))){
var inst_25151 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25186_25241 = state_25155__$1;
(statearr_25186_25241[(2)] = inst_25151);

(statearr_25186_25241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (34))){
var inst_25149 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25187_25242 = state_25155__$1;
(statearr_25187_25242[(2)] = inst_25149);

(statearr_25187_25242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (17))){
var state_25155__$1 = state_25155;
var statearr_25188_25243 = state_25155__$1;
(statearr_25188_25243[(2)] = false);

(statearr_25188_25243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (3))){
var state_25155__$1 = state_25155;
var statearr_25189_25244 = state_25155__$1;
(statearr_25189_25244[(2)] = false);

(statearr_25189_25244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (12))){
var inst_25153 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25155__$1,inst_25153);
} else {
if((state_val_25156 === (2))){
var inst_25061 = (state_25155[(8)]);
var inst_25066 = inst_25061.cljs$lang$protocol_mask$partition0$;
var inst_25067 = (inst_25066 & (64));
var inst_25068 = inst_25061.cljs$core$ISeq$;
var inst_25069 = (inst_25067) || (inst_25068);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25069)){
var statearr_25190_25245 = state_25155__$1;
(statearr_25190_25245[(1)] = (5));

} else {
var statearr_25191_25246 = state_25155__$1;
(statearr_25191_25246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (23))){
var inst_25114 = (state_25155[(14)]);
var inst_25120 = (inst_25114 == null);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25120)){
var statearr_25192_25247 = state_25155__$1;
(statearr_25192_25247[(1)] = (26));

} else {
var statearr_25193_25248 = state_25155__$1;
(statearr_25193_25248[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (35))){
var inst_25140 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
if(cljs.core.truth_(inst_25140)){
var statearr_25194_25249 = state_25155__$1;
(statearr_25194_25249[(1)] = (36));

} else {
var statearr_25195_25250 = state_25155__$1;
(statearr_25195_25250[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (19))){
var inst_25085 = (state_25155[(7)]);
var inst_25104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25085);
var state_25155__$1 = state_25155;
var statearr_25196_25251 = state_25155__$1;
(statearr_25196_25251[(2)] = inst_25104);

(statearr_25196_25251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (11))){
var inst_25085 = (state_25155[(7)]);
var inst_25089 = (inst_25085 == null);
var inst_25090 = cljs.core.not.call(null,inst_25089);
var state_25155__$1 = state_25155;
if(inst_25090){
var statearr_25197_25252 = state_25155__$1;
(statearr_25197_25252[(1)] = (13));

} else {
var statearr_25198_25253 = state_25155__$1;
(statearr_25198_25253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (9))){
var inst_25061 = (state_25155[(8)]);
var state_25155__$1 = state_25155;
var statearr_25199_25254 = state_25155__$1;
(statearr_25199_25254[(2)] = inst_25061);

(statearr_25199_25254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (5))){
var state_25155__$1 = state_25155;
var statearr_25200_25255 = state_25155__$1;
(statearr_25200_25255[(2)] = true);

(statearr_25200_25255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (14))){
var state_25155__$1 = state_25155;
var statearr_25201_25256 = state_25155__$1;
(statearr_25201_25256[(2)] = false);

(statearr_25201_25256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (26))){
var inst_25115 = (state_25155[(11)]);
var inst_25122 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25115);
var state_25155__$1 = state_25155;
var statearr_25202_25257 = state_25155__$1;
(statearr_25202_25257[(2)] = inst_25122);

(statearr_25202_25257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (16))){
var state_25155__$1 = state_25155;
var statearr_25203_25258 = state_25155__$1;
(statearr_25203_25258[(2)] = true);

(statearr_25203_25258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (38))){
var inst_25145 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25204_25259 = state_25155__$1;
(statearr_25204_25259[(2)] = inst_25145);

(statearr_25204_25259[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (30))){
var inst_25108 = (state_25155[(9)]);
var inst_25109 = (state_25155[(13)]);
var inst_25115 = (state_25155[(11)]);
var inst_25132 = cljs.core.empty_QMARK_.call(null,inst_25108);
var inst_25133 = inst_25109.call(null,inst_25115);
var inst_25134 = cljs.core.not.call(null,inst_25133);
var inst_25135 = (inst_25132) && (inst_25134);
var state_25155__$1 = state_25155;
var statearr_25205_25260 = state_25155__$1;
(statearr_25205_25260[(2)] = inst_25135);

(statearr_25205_25260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (10))){
var inst_25061 = (state_25155[(8)]);
var inst_25081 = (state_25155[(2)]);
var inst_25082 = cljs.core.get.call(null,inst_25081,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25083 = cljs.core.get.call(null,inst_25081,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25084 = cljs.core.get.call(null,inst_25081,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25085 = inst_25061;
var state_25155__$1 = (function (){var statearr_25206 = state_25155;
(statearr_25206[(16)] = inst_25084);

(statearr_25206[(7)] = inst_25085);

(statearr_25206[(17)] = inst_25083);

(statearr_25206[(18)] = inst_25082);

return statearr_25206;
})();
var statearr_25207_25261 = state_25155__$1;
(statearr_25207_25261[(2)] = null);

(statearr_25207_25261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (18))){
var inst_25099 = (state_25155[(2)]);
var state_25155__$1 = state_25155;
var statearr_25208_25262 = state_25155__$1;
(statearr_25208_25262[(2)] = inst_25099);

(statearr_25208_25262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (37))){
var state_25155__$1 = state_25155;
var statearr_25209_25263 = state_25155__$1;
(statearr_25209_25263[(2)] = null);

(statearr_25209_25263[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25156 === (8))){
var inst_25061 = (state_25155[(8)]);
var inst_25078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25061);
var state_25155__$1 = state_25155;
var statearr_25210_25264 = state_25155__$1;
(statearr_25210_25264[(2)] = inst_25078);

(statearr_25210_25264[(1)] = (10));


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
});})(c__23505__auto___25218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23393__auto__,c__23505__auto___25218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23394__auto__ = null;
var cljs$core$async$mix_$_state_machine__23394__auto____0 = (function (){
var statearr_25214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25214[(0)] = cljs$core$async$mix_$_state_machine__23394__auto__);

(statearr_25214[(1)] = (1));

return statearr_25214;
});
var cljs$core$async$mix_$_state_machine__23394__auto____1 = (function (state_25155){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_25155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e25215){if((e25215 instanceof Object)){
var ex__23397__auto__ = e25215;
var statearr_25216_25265 = state_25155;
(statearr_25216_25265[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25266 = state_25155;
state_25155 = G__25266;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23394__auto__ = function(state_25155){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23394__auto____1.call(this,state_25155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23394__auto____0;
cljs$core$async$mix_$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23394__auto____1;
return cljs$core$async$mix_$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___25218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23507__auto__ = (function (){var statearr_25217 = f__23506__auto__.call(null);
(statearr_25217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___25218);

return statearr_25217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___25218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19061__auto__ = (((p == null))?null:p);
var m__19062__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19062__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19061__auto__ = (((p == null))?null:p);
var m__19062__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,p,v,ch);
} else {
var m__19062__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25267 = [];
var len__19467__auto___25270 = arguments.length;
var i__19468__auto___25271 = (0);
while(true){
if((i__19468__auto___25271 < len__19467__auto___25270)){
args25267.push((arguments[i__19468__auto___25271]));

var G__25272 = (i__19468__auto___25271 + (1));
i__19468__auto___25271 = G__25272;
continue;
} else {
}
break;
}

var G__25269 = args25267.length;
switch (G__25269) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25267.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19061__auto__ = (((p == null))?null:p);
var m__19062__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,p);
} else {
var m__19062__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19061__auto__ = (((p == null))?null:p);
var m__19062__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19061__auto__)]);
if(!((m__19062__auto__ == null))){
return m__19062__auto__.call(null,p,v);
} else {
var m__19062__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19062__auto____$1 == null))){
return m__19062__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25275 = [];
var len__19467__auto___25400 = arguments.length;
var i__19468__auto___25401 = (0);
while(true){
if((i__19468__auto___25401 < len__19467__auto___25400)){
args25275.push((arguments[i__19468__auto___25401]));

var G__25402 = (i__19468__auto___25401 + (1));
i__19468__auto___25401 = G__25402;
continue;
} else {
}
break;
}

var G__25277 = args25275.length;
switch (G__25277) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25275.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18398__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18398__auto__)){
return or__18398__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18398__auto__,mults){
return (function (p1__25274_SHARP_){
if(cljs.core.truth_(p1__25274_SHARP_.call(null,topic))){
return p1__25274_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25274_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18398__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25278 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25279){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25279 = meta25279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25280,meta25279__$1){
var self__ = this;
var _25280__$1 = this;
return (new cljs.core.async.t_cljs$core$async25278(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25279__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25280){
var self__ = this;
var _25280__$1 = this;
return self__.meta25279;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25278.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25279","meta25279",-419311101,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25278";

cljs.core.async.t_cljs$core$async25278.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async25278");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25278 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25279){
return (new cljs.core.async.t_cljs$core$async25278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25279));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25278(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23505__auto___25404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___25404,mults,ensure_mult,p){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___25404,mults,ensure_mult,p){
return (function (state_25352){
var state_val_25353 = (state_25352[(1)]);
if((state_val_25353 === (7))){
var inst_25348 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25354_25405 = state_25352__$1;
(statearr_25354_25405[(2)] = inst_25348);

(statearr_25354_25405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (20))){
var state_25352__$1 = state_25352;
var statearr_25355_25406 = state_25352__$1;
(statearr_25355_25406[(2)] = null);

(statearr_25355_25406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (1))){
var state_25352__$1 = state_25352;
var statearr_25356_25407 = state_25352__$1;
(statearr_25356_25407[(2)] = null);

(statearr_25356_25407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (24))){
var inst_25331 = (state_25352[(7)]);
var inst_25340 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25331);
var state_25352__$1 = state_25352;
var statearr_25357_25408 = state_25352__$1;
(statearr_25357_25408[(2)] = inst_25340);

(statearr_25357_25408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (4))){
var inst_25283 = (state_25352[(8)]);
var inst_25283__$1 = (state_25352[(2)]);
var inst_25284 = (inst_25283__$1 == null);
var state_25352__$1 = (function (){var statearr_25358 = state_25352;
(statearr_25358[(8)] = inst_25283__$1);

return statearr_25358;
})();
if(cljs.core.truth_(inst_25284)){
var statearr_25359_25409 = state_25352__$1;
(statearr_25359_25409[(1)] = (5));

} else {
var statearr_25360_25410 = state_25352__$1;
(statearr_25360_25410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (15))){
var inst_25325 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25361_25411 = state_25352__$1;
(statearr_25361_25411[(2)] = inst_25325);

(statearr_25361_25411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (21))){
var inst_25345 = (state_25352[(2)]);
var state_25352__$1 = (function (){var statearr_25362 = state_25352;
(statearr_25362[(9)] = inst_25345);

return statearr_25362;
})();
var statearr_25363_25412 = state_25352__$1;
(statearr_25363_25412[(2)] = null);

(statearr_25363_25412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (13))){
var inst_25307 = (state_25352[(10)]);
var inst_25309 = cljs.core.chunked_seq_QMARK_.call(null,inst_25307);
var state_25352__$1 = state_25352;
if(inst_25309){
var statearr_25364_25413 = state_25352__$1;
(statearr_25364_25413[(1)] = (16));

} else {
var statearr_25365_25414 = state_25352__$1;
(statearr_25365_25414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (22))){
var inst_25337 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
if(cljs.core.truth_(inst_25337)){
var statearr_25366_25415 = state_25352__$1;
(statearr_25366_25415[(1)] = (23));

} else {
var statearr_25367_25416 = state_25352__$1;
(statearr_25367_25416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (6))){
var inst_25333 = (state_25352[(11)]);
var inst_25331 = (state_25352[(7)]);
var inst_25283 = (state_25352[(8)]);
var inst_25331__$1 = topic_fn.call(null,inst_25283);
var inst_25332 = cljs.core.deref.call(null,mults);
var inst_25333__$1 = cljs.core.get.call(null,inst_25332,inst_25331__$1);
var state_25352__$1 = (function (){var statearr_25368 = state_25352;
(statearr_25368[(11)] = inst_25333__$1);

(statearr_25368[(7)] = inst_25331__$1);

return statearr_25368;
})();
if(cljs.core.truth_(inst_25333__$1)){
var statearr_25369_25417 = state_25352__$1;
(statearr_25369_25417[(1)] = (19));

} else {
var statearr_25370_25418 = state_25352__$1;
(statearr_25370_25418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (25))){
var inst_25342 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25371_25419 = state_25352__$1;
(statearr_25371_25419[(2)] = inst_25342);

(statearr_25371_25419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (17))){
var inst_25307 = (state_25352[(10)]);
var inst_25316 = cljs.core.first.call(null,inst_25307);
var inst_25317 = cljs.core.async.muxch_STAR_.call(null,inst_25316);
var inst_25318 = cljs.core.async.close_BANG_.call(null,inst_25317);
var inst_25319 = cljs.core.next.call(null,inst_25307);
var inst_25293 = inst_25319;
var inst_25294 = null;
var inst_25295 = (0);
var inst_25296 = (0);
var state_25352__$1 = (function (){var statearr_25372 = state_25352;
(statearr_25372[(12)] = inst_25296);

(statearr_25372[(13)] = inst_25318);

(statearr_25372[(14)] = inst_25294);

(statearr_25372[(15)] = inst_25295);

(statearr_25372[(16)] = inst_25293);

return statearr_25372;
})();
var statearr_25373_25420 = state_25352__$1;
(statearr_25373_25420[(2)] = null);

(statearr_25373_25420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (3))){
var inst_25350 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25352__$1,inst_25350);
} else {
if((state_val_25353 === (12))){
var inst_25327 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25374_25421 = state_25352__$1;
(statearr_25374_25421[(2)] = inst_25327);

(statearr_25374_25421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (2))){
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25352__$1,(4),ch);
} else {
if((state_val_25353 === (23))){
var state_25352__$1 = state_25352;
var statearr_25375_25422 = state_25352__$1;
(statearr_25375_25422[(2)] = null);

(statearr_25375_25422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (19))){
var inst_25333 = (state_25352[(11)]);
var inst_25283 = (state_25352[(8)]);
var inst_25335 = cljs.core.async.muxch_STAR_.call(null,inst_25333);
var state_25352__$1 = state_25352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25352__$1,(22),inst_25335,inst_25283);
} else {
if((state_val_25353 === (11))){
var inst_25307 = (state_25352[(10)]);
var inst_25293 = (state_25352[(16)]);
var inst_25307__$1 = cljs.core.seq.call(null,inst_25293);
var state_25352__$1 = (function (){var statearr_25376 = state_25352;
(statearr_25376[(10)] = inst_25307__$1);

return statearr_25376;
})();
if(inst_25307__$1){
var statearr_25377_25423 = state_25352__$1;
(statearr_25377_25423[(1)] = (13));

} else {
var statearr_25378_25424 = state_25352__$1;
(statearr_25378_25424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (9))){
var inst_25329 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25379_25425 = state_25352__$1;
(statearr_25379_25425[(2)] = inst_25329);

(statearr_25379_25425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (5))){
var inst_25290 = cljs.core.deref.call(null,mults);
var inst_25291 = cljs.core.vals.call(null,inst_25290);
var inst_25292 = cljs.core.seq.call(null,inst_25291);
var inst_25293 = inst_25292;
var inst_25294 = null;
var inst_25295 = (0);
var inst_25296 = (0);
var state_25352__$1 = (function (){var statearr_25380 = state_25352;
(statearr_25380[(12)] = inst_25296);

(statearr_25380[(14)] = inst_25294);

(statearr_25380[(15)] = inst_25295);

(statearr_25380[(16)] = inst_25293);

return statearr_25380;
})();
var statearr_25381_25426 = state_25352__$1;
(statearr_25381_25426[(2)] = null);

(statearr_25381_25426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (14))){
var state_25352__$1 = state_25352;
var statearr_25385_25427 = state_25352__$1;
(statearr_25385_25427[(2)] = null);

(statearr_25385_25427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (16))){
var inst_25307 = (state_25352[(10)]);
var inst_25311 = cljs.core.chunk_first.call(null,inst_25307);
var inst_25312 = cljs.core.chunk_rest.call(null,inst_25307);
var inst_25313 = cljs.core.count.call(null,inst_25311);
var inst_25293 = inst_25312;
var inst_25294 = inst_25311;
var inst_25295 = inst_25313;
var inst_25296 = (0);
var state_25352__$1 = (function (){var statearr_25386 = state_25352;
(statearr_25386[(12)] = inst_25296);

(statearr_25386[(14)] = inst_25294);

(statearr_25386[(15)] = inst_25295);

(statearr_25386[(16)] = inst_25293);

return statearr_25386;
})();
var statearr_25387_25428 = state_25352__$1;
(statearr_25387_25428[(2)] = null);

(statearr_25387_25428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (10))){
var inst_25296 = (state_25352[(12)]);
var inst_25294 = (state_25352[(14)]);
var inst_25295 = (state_25352[(15)]);
var inst_25293 = (state_25352[(16)]);
var inst_25301 = cljs.core._nth.call(null,inst_25294,inst_25296);
var inst_25302 = cljs.core.async.muxch_STAR_.call(null,inst_25301);
var inst_25303 = cljs.core.async.close_BANG_.call(null,inst_25302);
var inst_25304 = (inst_25296 + (1));
var tmp25382 = inst_25294;
var tmp25383 = inst_25295;
var tmp25384 = inst_25293;
var inst_25293__$1 = tmp25384;
var inst_25294__$1 = tmp25382;
var inst_25295__$1 = tmp25383;
var inst_25296__$1 = inst_25304;
var state_25352__$1 = (function (){var statearr_25388 = state_25352;
(statearr_25388[(12)] = inst_25296__$1);

(statearr_25388[(14)] = inst_25294__$1);

(statearr_25388[(15)] = inst_25295__$1);

(statearr_25388[(17)] = inst_25303);

(statearr_25388[(16)] = inst_25293__$1);

return statearr_25388;
})();
var statearr_25389_25429 = state_25352__$1;
(statearr_25389_25429[(2)] = null);

(statearr_25389_25429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (18))){
var inst_25322 = (state_25352[(2)]);
var state_25352__$1 = state_25352;
var statearr_25390_25430 = state_25352__$1;
(statearr_25390_25430[(2)] = inst_25322);

(statearr_25390_25430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25353 === (8))){
var inst_25296 = (state_25352[(12)]);
var inst_25295 = (state_25352[(15)]);
var inst_25298 = (inst_25296 < inst_25295);
var inst_25299 = inst_25298;
var state_25352__$1 = state_25352;
if(cljs.core.truth_(inst_25299)){
var statearr_25391_25431 = state_25352__$1;
(statearr_25391_25431[(1)] = (10));

} else {
var statearr_25392_25432 = state_25352__$1;
(statearr_25392_25432[(1)] = (11));

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
});})(c__23505__auto___25404,mults,ensure_mult,p))
;
return ((function (switch__23393__auto__,c__23505__auto___25404,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_25396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25396[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_25396[(1)] = (1));

return statearr_25396;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_25352){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_25352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e25397){if((e25397 instanceof Object)){
var ex__23397__auto__ = e25397;
var statearr_25398_25433 = state_25352;
(statearr_25398_25433[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25434 = state_25352;
state_25352 = G__25434;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_25352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_25352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___25404,mults,ensure_mult,p))
})();
var state__23507__auto__ = (function (){var statearr_25399 = f__23506__auto__.call(null);
(statearr_25399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___25404);

return statearr_25399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___25404,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25435 = [];
var len__19467__auto___25438 = arguments.length;
var i__19468__auto___25439 = (0);
while(true){
if((i__19468__auto___25439 < len__19467__auto___25438)){
args25435.push((arguments[i__19468__auto___25439]));

var G__25440 = (i__19468__auto___25439 + (1));
i__19468__auto___25439 = G__25440;
continue;
} else {
}
break;
}

var G__25437 = args25435.length;
switch (G__25437) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25435.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25442 = [];
var len__19467__auto___25445 = arguments.length;
var i__19468__auto___25446 = (0);
while(true){
if((i__19468__auto___25446 < len__19467__auto___25445)){
args25442.push((arguments[i__19468__auto___25446]));

var G__25447 = (i__19468__auto___25446 + (1));
i__19468__auto___25446 = G__25447;
continue;
} else {
}
break;
}

var G__25444 = args25442.length;
switch (G__25444) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25442.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25449 = [];
var len__19467__auto___25520 = arguments.length;
var i__19468__auto___25521 = (0);
while(true){
if((i__19468__auto___25521 < len__19467__auto___25520)){
args25449.push((arguments[i__19468__auto___25521]));

var G__25522 = (i__19468__auto___25521 + (1));
i__19468__auto___25521 = G__25522;
continue;
} else {
}
break;
}

var G__25451 = args25449.length;
switch (G__25451) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25449.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23505__auto___25524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___25524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___25524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25490){
var state_val_25491 = (state_25490[(1)]);
if((state_val_25491 === (7))){
var state_25490__$1 = state_25490;
var statearr_25492_25525 = state_25490__$1;
(statearr_25492_25525[(2)] = null);

(statearr_25492_25525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (1))){
var state_25490__$1 = state_25490;
var statearr_25493_25526 = state_25490__$1;
(statearr_25493_25526[(2)] = null);

(statearr_25493_25526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (4))){
var inst_25454 = (state_25490[(7)]);
var inst_25456 = (inst_25454 < cnt);
var state_25490__$1 = state_25490;
if(cljs.core.truth_(inst_25456)){
var statearr_25494_25527 = state_25490__$1;
(statearr_25494_25527[(1)] = (6));

} else {
var statearr_25495_25528 = state_25490__$1;
(statearr_25495_25528[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (15))){
var inst_25486 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25496_25529 = state_25490__$1;
(statearr_25496_25529[(2)] = inst_25486);

(statearr_25496_25529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (13))){
var inst_25479 = cljs.core.async.close_BANG_.call(null,out);
var state_25490__$1 = state_25490;
var statearr_25497_25530 = state_25490__$1;
(statearr_25497_25530[(2)] = inst_25479);

(statearr_25497_25530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (6))){
var state_25490__$1 = state_25490;
var statearr_25498_25531 = state_25490__$1;
(statearr_25498_25531[(2)] = null);

(statearr_25498_25531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (3))){
var inst_25488 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25490__$1,inst_25488);
} else {
if((state_val_25491 === (12))){
var inst_25476 = (state_25490[(8)]);
var inst_25476__$1 = (state_25490[(2)]);
var inst_25477 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25476__$1);
var state_25490__$1 = (function (){var statearr_25499 = state_25490;
(statearr_25499[(8)] = inst_25476__$1);

return statearr_25499;
})();
if(cljs.core.truth_(inst_25477)){
var statearr_25500_25532 = state_25490__$1;
(statearr_25500_25532[(1)] = (13));

} else {
var statearr_25501_25533 = state_25490__$1;
(statearr_25501_25533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (2))){
var inst_25453 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25454 = (0);
var state_25490__$1 = (function (){var statearr_25502 = state_25490;
(statearr_25502[(7)] = inst_25454);

(statearr_25502[(9)] = inst_25453);

return statearr_25502;
})();
var statearr_25503_25534 = state_25490__$1;
(statearr_25503_25534[(2)] = null);

(statearr_25503_25534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (11))){
var inst_25454 = (state_25490[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25490,(10),Object,null,(9));
var inst_25463 = chs__$1.call(null,inst_25454);
var inst_25464 = done.call(null,inst_25454);
var inst_25465 = cljs.core.async.take_BANG_.call(null,inst_25463,inst_25464);
var state_25490__$1 = state_25490;
var statearr_25504_25535 = state_25490__$1;
(statearr_25504_25535[(2)] = inst_25465);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (9))){
var inst_25454 = (state_25490[(7)]);
var inst_25467 = (state_25490[(2)]);
var inst_25468 = (inst_25454 + (1));
var inst_25454__$1 = inst_25468;
var state_25490__$1 = (function (){var statearr_25505 = state_25490;
(statearr_25505[(7)] = inst_25454__$1);

(statearr_25505[(10)] = inst_25467);

return statearr_25505;
})();
var statearr_25506_25536 = state_25490__$1;
(statearr_25506_25536[(2)] = null);

(statearr_25506_25536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (5))){
var inst_25474 = (state_25490[(2)]);
var state_25490__$1 = (function (){var statearr_25507 = state_25490;
(statearr_25507[(11)] = inst_25474);

return statearr_25507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25490__$1,(12),dchan);
} else {
if((state_val_25491 === (14))){
var inst_25476 = (state_25490[(8)]);
var inst_25481 = cljs.core.apply.call(null,f,inst_25476);
var state_25490__$1 = state_25490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25490__$1,(16),out,inst_25481);
} else {
if((state_val_25491 === (16))){
var inst_25483 = (state_25490[(2)]);
var state_25490__$1 = (function (){var statearr_25508 = state_25490;
(statearr_25508[(12)] = inst_25483);

return statearr_25508;
})();
var statearr_25509_25537 = state_25490__$1;
(statearr_25509_25537[(2)] = null);

(statearr_25509_25537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (10))){
var inst_25458 = (state_25490[(2)]);
var inst_25459 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25490__$1 = (function (){var statearr_25510 = state_25490;
(statearr_25510[(13)] = inst_25458);

return statearr_25510;
})();
var statearr_25511_25538 = state_25490__$1;
(statearr_25511_25538[(2)] = inst_25459);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25491 === (8))){
var inst_25472 = (state_25490[(2)]);
var state_25490__$1 = state_25490;
var statearr_25512_25539 = state_25490__$1;
(statearr_25512_25539[(2)] = inst_25472);

(statearr_25512_25539[(1)] = (5));


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
});})(c__23505__auto___25524,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23393__auto__,c__23505__auto___25524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_25516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25516[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_25516[(1)] = (1));

return statearr_25516;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_25490){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_25490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e25517){if((e25517 instanceof Object)){
var ex__23397__auto__ = e25517;
var statearr_25518_25540 = state_25490;
(statearr_25518_25540[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25541 = state_25490;
state_25490 = G__25541;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_25490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_25490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___25524,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23507__auto__ = (function (){var statearr_25519 = f__23506__auto__.call(null);
(statearr_25519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___25524);

return statearr_25519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___25524,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25543 = [];
var len__19467__auto___25599 = arguments.length;
var i__19468__auto___25600 = (0);
while(true){
if((i__19468__auto___25600 < len__19467__auto___25599)){
args25543.push((arguments[i__19468__auto___25600]));

var G__25601 = (i__19468__auto___25600 + (1));
i__19468__auto___25600 = G__25601;
continue;
} else {
}
break;
}

var G__25545 = args25543.length;
switch (G__25545) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25543.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23505__auto___25603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___25603,out){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___25603,out){
return (function (state_25575){
var state_val_25576 = (state_25575[(1)]);
if((state_val_25576 === (7))){
var inst_25555 = (state_25575[(7)]);
var inst_25554 = (state_25575[(8)]);
var inst_25554__$1 = (state_25575[(2)]);
var inst_25555__$1 = cljs.core.nth.call(null,inst_25554__$1,(0),null);
var inst_25556 = cljs.core.nth.call(null,inst_25554__$1,(1),null);
var inst_25557 = (inst_25555__$1 == null);
var state_25575__$1 = (function (){var statearr_25577 = state_25575;
(statearr_25577[(7)] = inst_25555__$1);

(statearr_25577[(8)] = inst_25554__$1);

(statearr_25577[(9)] = inst_25556);

return statearr_25577;
})();
if(cljs.core.truth_(inst_25557)){
var statearr_25578_25604 = state_25575__$1;
(statearr_25578_25604[(1)] = (8));

} else {
var statearr_25579_25605 = state_25575__$1;
(statearr_25579_25605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (1))){
var inst_25546 = cljs.core.vec.call(null,chs);
var inst_25547 = inst_25546;
var state_25575__$1 = (function (){var statearr_25580 = state_25575;
(statearr_25580[(10)] = inst_25547);

return statearr_25580;
})();
var statearr_25581_25606 = state_25575__$1;
(statearr_25581_25606[(2)] = null);

(statearr_25581_25606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (4))){
var inst_25547 = (state_25575[(10)]);
var state_25575__$1 = state_25575;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25575__$1,(7),inst_25547);
} else {
if((state_val_25576 === (6))){
var inst_25571 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
var statearr_25582_25607 = state_25575__$1;
(statearr_25582_25607[(2)] = inst_25571);

(statearr_25582_25607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (3))){
var inst_25573 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25575__$1,inst_25573);
} else {
if((state_val_25576 === (2))){
var inst_25547 = (state_25575[(10)]);
var inst_25549 = cljs.core.count.call(null,inst_25547);
var inst_25550 = (inst_25549 > (0));
var state_25575__$1 = state_25575;
if(cljs.core.truth_(inst_25550)){
var statearr_25584_25608 = state_25575__$1;
(statearr_25584_25608[(1)] = (4));

} else {
var statearr_25585_25609 = state_25575__$1;
(statearr_25585_25609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (11))){
var inst_25547 = (state_25575[(10)]);
var inst_25564 = (state_25575[(2)]);
var tmp25583 = inst_25547;
var inst_25547__$1 = tmp25583;
var state_25575__$1 = (function (){var statearr_25586 = state_25575;
(statearr_25586[(11)] = inst_25564);

(statearr_25586[(10)] = inst_25547__$1);

return statearr_25586;
})();
var statearr_25587_25610 = state_25575__$1;
(statearr_25587_25610[(2)] = null);

(statearr_25587_25610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (9))){
var inst_25555 = (state_25575[(7)]);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25575__$1,(11),out,inst_25555);
} else {
if((state_val_25576 === (5))){
var inst_25569 = cljs.core.async.close_BANG_.call(null,out);
var state_25575__$1 = state_25575;
var statearr_25588_25611 = state_25575__$1;
(statearr_25588_25611[(2)] = inst_25569);

(statearr_25588_25611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (10))){
var inst_25567 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
var statearr_25589_25612 = state_25575__$1;
(statearr_25589_25612[(2)] = inst_25567);

(statearr_25589_25612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (8))){
var inst_25555 = (state_25575[(7)]);
var inst_25554 = (state_25575[(8)]);
var inst_25547 = (state_25575[(10)]);
var inst_25556 = (state_25575[(9)]);
var inst_25559 = (function (){var cs = inst_25547;
var vec__25552 = inst_25554;
var v = inst_25555;
var c = inst_25556;
return ((function (cs,vec__25552,v,c,inst_25555,inst_25554,inst_25547,inst_25556,state_val_25576,c__23505__auto___25603,out){
return (function (p1__25542_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25542_SHARP_);
});
;})(cs,vec__25552,v,c,inst_25555,inst_25554,inst_25547,inst_25556,state_val_25576,c__23505__auto___25603,out))
})();
var inst_25560 = cljs.core.filterv.call(null,inst_25559,inst_25547);
var inst_25547__$1 = inst_25560;
var state_25575__$1 = (function (){var statearr_25590 = state_25575;
(statearr_25590[(10)] = inst_25547__$1);

return statearr_25590;
})();
var statearr_25591_25613 = state_25575__$1;
(statearr_25591_25613[(2)] = null);

(statearr_25591_25613[(1)] = (2));


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
});})(c__23505__auto___25603,out))
;
return ((function (switch__23393__auto__,c__23505__auto___25603,out){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_25595 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25595[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_25595[(1)] = (1));

return statearr_25595;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_25575){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_25575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e25596){if((e25596 instanceof Object)){
var ex__23397__auto__ = e25596;
var statearr_25597_25614 = state_25575;
(statearr_25597_25614[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25615 = state_25575;
state_25575 = G__25615;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_25575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_25575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___25603,out))
})();
var state__23507__auto__ = (function (){var statearr_25598 = f__23506__auto__.call(null);
(statearr_25598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___25603);

return statearr_25598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___25603,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25616 = [];
var len__19467__auto___25665 = arguments.length;
var i__19468__auto___25666 = (0);
while(true){
if((i__19468__auto___25666 < len__19467__auto___25665)){
args25616.push((arguments[i__19468__auto___25666]));

var G__25667 = (i__19468__auto___25666 + (1));
i__19468__auto___25666 = G__25667;
continue;
} else {
}
break;
}

var G__25618 = args25616.length;
switch (G__25618) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25616.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23505__auto___25669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___25669,out){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___25669,out){
return (function (state_25642){
var state_val_25643 = (state_25642[(1)]);
if((state_val_25643 === (7))){
var inst_25624 = (state_25642[(7)]);
var inst_25624__$1 = (state_25642[(2)]);
var inst_25625 = (inst_25624__$1 == null);
var inst_25626 = cljs.core.not.call(null,inst_25625);
var state_25642__$1 = (function (){var statearr_25644 = state_25642;
(statearr_25644[(7)] = inst_25624__$1);

return statearr_25644;
})();
if(inst_25626){
var statearr_25645_25670 = state_25642__$1;
(statearr_25645_25670[(1)] = (8));

} else {
var statearr_25646_25671 = state_25642__$1;
(statearr_25646_25671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (1))){
var inst_25619 = (0);
var state_25642__$1 = (function (){var statearr_25647 = state_25642;
(statearr_25647[(8)] = inst_25619);

return statearr_25647;
})();
var statearr_25648_25672 = state_25642__$1;
(statearr_25648_25672[(2)] = null);

(statearr_25648_25672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (4))){
var state_25642__$1 = state_25642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25642__$1,(7),ch);
} else {
if((state_val_25643 === (6))){
var inst_25637 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
var statearr_25649_25673 = state_25642__$1;
(statearr_25649_25673[(2)] = inst_25637);

(statearr_25649_25673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (3))){
var inst_25639 = (state_25642[(2)]);
var inst_25640 = cljs.core.async.close_BANG_.call(null,out);
var state_25642__$1 = (function (){var statearr_25650 = state_25642;
(statearr_25650[(9)] = inst_25639);

return statearr_25650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25642__$1,inst_25640);
} else {
if((state_val_25643 === (2))){
var inst_25619 = (state_25642[(8)]);
var inst_25621 = (inst_25619 < n);
var state_25642__$1 = state_25642;
if(cljs.core.truth_(inst_25621)){
var statearr_25651_25674 = state_25642__$1;
(statearr_25651_25674[(1)] = (4));

} else {
var statearr_25652_25675 = state_25642__$1;
(statearr_25652_25675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (11))){
var inst_25619 = (state_25642[(8)]);
var inst_25629 = (state_25642[(2)]);
var inst_25630 = (inst_25619 + (1));
var inst_25619__$1 = inst_25630;
var state_25642__$1 = (function (){var statearr_25653 = state_25642;
(statearr_25653[(10)] = inst_25629);

(statearr_25653[(8)] = inst_25619__$1);

return statearr_25653;
})();
var statearr_25654_25676 = state_25642__$1;
(statearr_25654_25676[(2)] = null);

(statearr_25654_25676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (9))){
var state_25642__$1 = state_25642;
var statearr_25655_25677 = state_25642__$1;
(statearr_25655_25677[(2)] = null);

(statearr_25655_25677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (5))){
var state_25642__$1 = state_25642;
var statearr_25656_25678 = state_25642__$1;
(statearr_25656_25678[(2)] = null);

(statearr_25656_25678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (10))){
var inst_25634 = (state_25642[(2)]);
var state_25642__$1 = state_25642;
var statearr_25657_25679 = state_25642__$1;
(statearr_25657_25679[(2)] = inst_25634);

(statearr_25657_25679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25643 === (8))){
var inst_25624 = (state_25642[(7)]);
var state_25642__$1 = state_25642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25642__$1,(11),out,inst_25624);
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
});})(c__23505__auto___25669,out))
;
return ((function (switch__23393__auto__,c__23505__auto___25669,out){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_25661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25661[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_25661[(1)] = (1));

return statearr_25661;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_25642){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_25642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e25662){if((e25662 instanceof Object)){
var ex__23397__auto__ = e25662;
var statearr_25663_25680 = state_25642;
(statearr_25663_25680[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25681 = state_25642;
state_25642 = G__25681;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_25642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_25642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___25669,out))
})();
var state__23507__auto__ = (function (){var statearr_25664 = f__23506__auto__.call(null);
(statearr_25664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___25669);

return statearr_25664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___25669,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25689 = (function (map_LT_,f,ch,meta25690){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25690 = meta25690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25691,meta25690__$1){
var self__ = this;
var _25691__$1 = this;
return (new cljs.core.async.t_cljs$core$async25689(self__.map_LT_,self__.f,self__.ch,meta25690__$1));
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25691){
var self__ = this;
var _25691__$1 = this;
return self__.meta25690;
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25692 = (function (map_LT_,f,ch,meta25690,_,fn1,meta25693){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25690 = meta25690;
this._ = _;
this.fn1 = fn1;
this.meta25693 = meta25693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25694,meta25693__$1){
var self__ = this;
var _25694__$1 = this;
return (new cljs.core.async.t_cljs$core$async25692(self__.map_LT_,self__.f,self__.ch,self__.meta25690,self__._,self__.fn1,meta25693__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25694){
var self__ = this;
var _25694__$1 = this;
return self__.meta25693;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25692.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25682_SHARP_){
return f1.call(null,(((p1__25682_SHARP_ == null))?null:self__.f.call(null,p1__25682_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25692.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25690","meta25690",-1814847165,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25689","cljs.core.async/t_cljs$core$async25689",-2094838966,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25693","meta25693",910369153,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25692";

cljs.core.async.t_cljs$core$async25692.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async25692");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25692 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25692(map_LT___$1,f__$1,ch__$1,meta25690__$1,___$2,fn1__$1,meta25693){
return (new cljs.core.async.t_cljs$core$async25692(map_LT___$1,f__$1,ch__$1,meta25690__$1,___$2,fn1__$1,meta25693));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25692(self__.map_LT_,self__.f,self__.ch,self__.meta25690,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18386__auto__ = ret;
if(cljs.core.truth_(and__18386__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18386__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25689.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25690","meta25690",-1814847165,null)], null);
});

cljs.core.async.t_cljs$core$async25689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25689";

cljs.core.async.t_cljs$core$async25689.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async25689");
});

cljs.core.async.__GT_t_cljs$core$async25689 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25689(map_LT___$1,f__$1,ch__$1,meta25690){
return (new cljs.core.async.t_cljs$core$async25689(map_LT___$1,f__$1,ch__$1,meta25690));
});

}

return (new cljs.core.async.t_cljs$core$async25689(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25698 = (function (map_GT_,f,ch,meta25699){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25699 = meta25699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25700,meta25699__$1){
var self__ = this;
var _25700__$1 = this;
return (new cljs.core.async.t_cljs$core$async25698(self__.map_GT_,self__.f,self__.ch,meta25699__$1));
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25700){
var self__ = this;
var _25700__$1 = this;
return self__.meta25699;
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25699","meta25699",-354566145,null)], null);
});

cljs.core.async.t_cljs$core$async25698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25698";

cljs.core.async.t_cljs$core$async25698.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async25698");
});

cljs.core.async.__GT_t_cljs$core$async25698 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25698(map_GT___$1,f__$1,ch__$1,meta25699){
return (new cljs.core.async.t_cljs$core$async25698(map_GT___$1,f__$1,ch__$1,meta25699));
});

}

return (new cljs.core.async.t_cljs$core$async25698(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25704 = (function (filter_GT_,p,ch,meta25705){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25705 = meta25705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25706,meta25705__$1){
var self__ = this;
var _25706__$1 = this;
return (new cljs.core.async.t_cljs$core$async25704(self__.filter_GT_,self__.p,self__.ch,meta25705__$1));
});

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25706){
var self__ = this;
var _25706__$1 = this;
return self__.meta25705;
});

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25705","meta25705",-1992181940,null)], null);
});

cljs.core.async.t_cljs$core$async25704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25704";

cljs.core.async.t_cljs$core$async25704.cljs$lang$ctorPrWriter = (function (this__19004__auto__,writer__19005__auto__,opt__19006__auto__){
return cljs.core._write.call(null,writer__19005__auto__,"cljs.core.async/t_cljs$core$async25704");
});

cljs.core.async.__GT_t_cljs$core$async25704 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25704(filter_GT___$1,p__$1,ch__$1,meta25705){
return (new cljs.core.async.t_cljs$core$async25704(filter_GT___$1,p__$1,ch__$1,meta25705));
});

}

return (new cljs.core.async.t_cljs$core$async25704(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25707 = [];
var len__19467__auto___25751 = arguments.length;
var i__19468__auto___25752 = (0);
while(true){
if((i__19468__auto___25752 < len__19467__auto___25751)){
args25707.push((arguments[i__19468__auto___25752]));

var G__25753 = (i__19468__auto___25752 + (1));
i__19468__auto___25752 = G__25753;
continue;
} else {
}
break;
}

var G__25709 = args25707.length;
switch (G__25709) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25707.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23505__auto___25755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___25755,out){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___25755,out){
return (function (state_25730){
var state_val_25731 = (state_25730[(1)]);
if((state_val_25731 === (7))){
var inst_25726 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25732_25756 = state_25730__$1;
(statearr_25732_25756[(2)] = inst_25726);

(statearr_25732_25756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (1))){
var state_25730__$1 = state_25730;
var statearr_25733_25757 = state_25730__$1;
(statearr_25733_25757[(2)] = null);

(statearr_25733_25757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (4))){
var inst_25712 = (state_25730[(7)]);
var inst_25712__$1 = (state_25730[(2)]);
var inst_25713 = (inst_25712__$1 == null);
var state_25730__$1 = (function (){var statearr_25734 = state_25730;
(statearr_25734[(7)] = inst_25712__$1);

return statearr_25734;
})();
if(cljs.core.truth_(inst_25713)){
var statearr_25735_25758 = state_25730__$1;
(statearr_25735_25758[(1)] = (5));

} else {
var statearr_25736_25759 = state_25730__$1;
(statearr_25736_25759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (6))){
var inst_25712 = (state_25730[(7)]);
var inst_25717 = p.call(null,inst_25712);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25717)){
var statearr_25737_25760 = state_25730__$1;
(statearr_25737_25760[(1)] = (8));

} else {
var statearr_25738_25761 = state_25730__$1;
(statearr_25738_25761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (3))){
var inst_25728 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25730__$1,inst_25728);
} else {
if((state_val_25731 === (2))){
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(4),ch);
} else {
if((state_val_25731 === (11))){
var inst_25720 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25739_25762 = state_25730__$1;
(statearr_25739_25762[(2)] = inst_25720);

(statearr_25739_25762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (9))){
var state_25730__$1 = state_25730;
var statearr_25740_25763 = state_25730__$1;
(statearr_25740_25763[(2)] = null);

(statearr_25740_25763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (5))){
var inst_25715 = cljs.core.async.close_BANG_.call(null,out);
var state_25730__$1 = state_25730;
var statearr_25741_25764 = state_25730__$1;
(statearr_25741_25764[(2)] = inst_25715);

(statearr_25741_25764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (10))){
var inst_25723 = (state_25730[(2)]);
var state_25730__$1 = (function (){var statearr_25742 = state_25730;
(statearr_25742[(8)] = inst_25723);

return statearr_25742;
})();
var statearr_25743_25765 = state_25730__$1;
(statearr_25743_25765[(2)] = null);

(statearr_25743_25765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (8))){
var inst_25712 = (state_25730[(7)]);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25730__$1,(11),out,inst_25712);
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
});})(c__23505__auto___25755,out))
;
return ((function (switch__23393__auto__,c__23505__auto___25755,out){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_25747 = [null,null,null,null,null,null,null,null,null];
(statearr_25747[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_25747[(1)] = (1));

return statearr_25747;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_25730){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_25730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e25748){if((e25748 instanceof Object)){
var ex__23397__auto__ = e25748;
var statearr_25749_25766 = state_25730;
(statearr_25749_25766[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25767 = state_25730;
state_25730 = G__25767;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_25730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_25730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___25755,out))
})();
var state__23507__auto__ = (function (){var statearr_25750 = f__23506__auto__.call(null);
(statearr_25750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___25755);

return statearr_25750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___25755,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25768 = [];
var len__19467__auto___25771 = arguments.length;
var i__19468__auto___25772 = (0);
while(true){
if((i__19468__auto___25772 < len__19467__auto___25771)){
args25768.push((arguments[i__19468__auto___25772]));

var G__25773 = (i__19468__auto___25772 + (1));
i__19468__auto___25772 = G__25773;
continue;
} else {
}
break;
}

var G__25770 = args25768.length;
switch (G__25770) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25768.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23505__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto__){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto__){
return (function (state_25940){
var state_val_25941 = (state_25940[(1)]);
if((state_val_25941 === (7))){
var inst_25936 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
var statearr_25942_25983 = state_25940__$1;
(statearr_25942_25983[(2)] = inst_25936);

(statearr_25942_25983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (20))){
var inst_25906 = (state_25940[(7)]);
var inst_25917 = (state_25940[(2)]);
var inst_25918 = cljs.core.next.call(null,inst_25906);
var inst_25892 = inst_25918;
var inst_25893 = null;
var inst_25894 = (0);
var inst_25895 = (0);
var state_25940__$1 = (function (){var statearr_25943 = state_25940;
(statearr_25943[(8)] = inst_25917);

(statearr_25943[(9)] = inst_25892);

(statearr_25943[(10)] = inst_25894);

(statearr_25943[(11)] = inst_25893);

(statearr_25943[(12)] = inst_25895);

return statearr_25943;
})();
var statearr_25944_25984 = state_25940__$1;
(statearr_25944_25984[(2)] = null);

(statearr_25944_25984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (1))){
var state_25940__$1 = state_25940;
var statearr_25945_25985 = state_25940__$1;
(statearr_25945_25985[(2)] = null);

(statearr_25945_25985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (4))){
var inst_25881 = (state_25940[(13)]);
var inst_25881__$1 = (state_25940[(2)]);
var inst_25882 = (inst_25881__$1 == null);
var state_25940__$1 = (function (){var statearr_25946 = state_25940;
(statearr_25946[(13)] = inst_25881__$1);

return statearr_25946;
})();
if(cljs.core.truth_(inst_25882)){
var statearr_25947_25986 = state_25940__$1;
(statearr_25947_25986[(1)] = (5));

} else {
var statearr_25948_25987 = state_25940__$1;
(statearr_25948_25987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (15))){
var state_25940__$1 = state_25940;
var statearr_25952_25988 = state_25940__$1;
(statearr_25952_25988[(2)] = null);

(statearr_25952_25988[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (21))){
var state_25940__$1 = state_25940;
var statearr_25953_25989 = state_25940__$1;
(statearr_25953_25989[(2)] = null);

(statearr_25953_25989[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (13))){
var inst_25892 = (state_25940[(9)]);
var inst_25894 = (state_25940[(10)]);
var inst_25893 = (state_25940[(11)]);
var inst_25895 = (state_25940[(12)]);
var inst_25902 = (state_25940[(2)]);
var inst_25903 = (inst_25895 + (1));
var tmp25949 = inst_25892;
var tmp25950 = inst_25894;
var tmp25951 = inst_25893;
var inst_25892__$1 = tmp25949;
var inst_25893__$1 = tmp25951;
var inst_25894__$1 = tmp25950;
var inst_25895__$1 = inst_25903;
var state_25940__$1 = (function (){var statearr_25954 = state_25940;
(statearr_25954[(14)] = inst_25902);

(statearr_25954[(9)] = inst_25892__$1);

(statearr_25954[(10)] = inst_25894__$1);

(statearr_25954[(11)] = inst_25893__$1);

(statearr_25954[(12)] = inst_25895__$1);

return statearr_25954;
})();
var statearr_25955_25990 = state_25940__$1;
(statearr_25955_25990[(2)] = null);

(statearr_25955_25990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (22))){
var state_25940__$1 = state_25940;
var statearr_25956_25991 = state_25940__$1;
(statearr_25956_25991[(2)] = null);

(statearr_25956_25991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (6))){
var inst_25881 = (state_25940[(13)]);
var inst_25890 = f.call(null,inst_25881);
var inst_25891 = cljs.core.seq.call(null,inst_25890);
var inst_25892 = inst_25891;
var inst_25893 = null;
var inst_25894 = (0);
var inst_25895 = (0);
var state_25940__$1 = (function (){var statearr_25957 = state_25940;
(statearr_25957[(9)] = inst_25892);

(statearr_25957[(10)] = inst_25894);

(statearr_25957[(11)] = inst_25893);

(statearr_25957[(12)] = inst_25895);

return statearr_25957;
})();
var statearr_25958_25992 = state_25940__$1;
(statearr_25958_25992[(2)] = null);

(statearr_25958_25992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (17))){
var inst_25906 = (state_25940[(7)]);
var inst_25910 = cljs.core.chunk_first.call(null,inst_25906);
var inst_25911 = cljs.core.chunk_rest.call(null,inst_25906);
var inst_25912 = cljs.core.count.call(null,inst_25910);
var inst_25892 = inst_25911;
var inst_25893 = inst_25910;
var inst_25894 = inst_25912;
var inst_25895 = (0);
var state_25940__$1 = (function (){var statearr_25959 = state_25940;
(statearr_25959[(9)] = inst_25892);

(statearr_25959[(10)] = inst_25894);

(statearr_25959[(11)] = inst_25893);

(statearr_25959[(12)] = inst_25895);

return statearr_25959;
})();
var statearr_25960_25993 = state_25940__$1;
(statearr_25960_25993[(2)] = null);

(statearr_25960_25993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (3))){
var inst_25938 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25940__$1,inst_25938);
} else {
if((state_val_25941 === (12))){
var inst_25926 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
var statearr_25961_25994 = state_25940__$1;
(statearr_25961_25994[(2)] = inst_25926);

(statearr_25961_25994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (2))){
var state_25940__$1 = state_25940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25940__$1,(4),in$);
} else {
if((state_val_25941 === (23))){
var inst_25934 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
var statearr_25962_25995 = state_25940__$1;
(statearr_25962_25995[(2)] = inst_25934);

(statearr_25962_25995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (19))){
var inst_25921 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
var statearr_25963_25996 = state_25940__$1;
(statearr_25963_25996[(2)] = inst_25921);

(statearr_25963_25996[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (11))){
var inst_25892 = (state_25940[(9)]);
var inst_25906 = (state_25940[(7)]);
var inst_25906__$1 = cljs.core.seq.call(null,inst_25892);
var state_25940__$1 = (function (){var statearr_25964 = state_25940;
(statearr_25964[(7)] = inst_25906__$1);

return statearr_25964;
})();
if(inst_25906__$1){
var statearr_25965_25997 = state_25940__$1;
(statearr_25965_25997[(1)] = (14));

} else {
var statearr_25966_25998 = state_25940__$1;
(statearr_25966_25998[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (9))){
var inst_25928 = (state_25940[(2)]);
var inst_25929 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25940__$1 = (function (){var statearr_25967 = state_25940;
(statearr_25967[(15)] = inst_25928);

return statearr_25967;
})();
if(cljs.core.truth_(inst_25929)){
var statearr_25968_25999 = state_25940__$1;
(statearr_25968_25999[(1)] = (21));

} else {
var statearr_25969_26000 = state_25940__$1;
(statearr_25969_26000[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (5))){
var inst_25884 = cljs.core.async.close_BANG_.call(null,out);
var state_25940__$1 = state_25940;
var statearr_25970_26001 = state_25940__$1;
(statearr_25970_26001[(2)] = inst_25884);

(statearr_25970_26001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (14))){
var inst_25906 = (state_25940[(7)]);
var inst_25908 = cljs.core.chunked_seq_QMARK_.call(null,inst_25906);
var state_25940__$1 = state_25940;
if(inst_25908){
var statearr_25971_26002 = state_25940__$1;
(statearr_25971_26002[(1)] = (17));

} else {
var statearr_25972_26003 = state_25940__$1;
(statearr_25972_26003[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (16))){
var inst_25924 = (state_25940[(2)]);
var state_25940__$1 = state_25940;
var statearr_25973_26004 = state_25940__$1;
(statearr_25973_26004[(2)] = inst_25924);

(statearr_25973_26004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25941 === (10))){
var inst_25893 = (state_25940[(11)]);
var inst_25895 = (state_25940[(12)]);
var inst_25900 = cljs.core._nth.call(null,inst_25893,inst_25895);
var state_25940__$1 = state_25940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25940__$1,(13),out,inst_25900);
} else {
if((state_val_25941 === (18))){
var inst_25906 = (state_25940[(7)]);
var inst_25915 = cljs.core.first.call(null,inst_25906);
var state_25940__$1 = state_25940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25940__$1,(20),out,inst_25915);
} else {
if((state_val_25941 === (8))){
var inst_25894 = (state_25940[(10)]);
var inst_25895 = (state_25940[(12)]);
var inst_25897 = (inst_25895 < inst_25894);
var inst_25898 = inst_25897;
var state_25940__$1 = state_25940;
if(cljs.core.truth_(inst_25898)){
var statearr_25974_26005 = state_25940__$1;
(statearr_25974_26005[(1)] = (10));

} else {
var statearr_25975_26006 = state_25940__$1;
(statearr_25975_26006[(1)] = (11));

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
});})(c__23505__auto__))
;
return ((function (switch__23393__auto__,c__23505__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23394__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23394__auto____0 = (function (){
var statearr_25979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25979[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23394__auto__);

(statearr_25979[(1)] = (1));

return statearr_25979;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23394__auto____1 = (function (state_25940){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_25940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e25980){if((e25980 instanceof Object)){
var ex__23397__auto__ = e25980;
var statearr_25981_26007 = state_25940;
(statearr_25981_26007[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26008 = state_25940;
state_25940 = G__26008;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23394__auto__ = function(state_25940){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23394__auto____1.call(this,state_25940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23394__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23394__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto__))
})();
var state__23507__auto__ = (function (){var statearr_25982 = f__23506__auto__.call(null);
(statearr_25982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto__);

return statearr_25982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto__))
);

return c__23505__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26009 = [];
var len__19467__auto___26012 = arguments.length;
var i__19468__auto___26013 = (0);
while(true){
if((i__19468__auto___26013 < len__19467__auto___26012)){
args26009.push((arguments[i__19468__auto___26013]));

var G__26014 = (i__19468__auto___26013 + (1));
i__19468__auto___26013 = G__26014;
continue;
} else {
}
break;
}

var G__26011 = args26009.length;
switch (G__26011) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26009.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26016 = [];
var len__19467__auto___26019 = arguments.length;
var i__19468__auto___26020 = (0);
while(true){
if((i__19468__auto___26020 < len__19467__auto___26019)){
args26016.push((arguments[i__19468__auto___26020]));

var G__26021 = (i__19468__auto___26020 + (1));
i__19468__auto___26020 = G__26021;
continue;
} else {
}
break;
}

var G__26018 = args26016.length;
switch (G__26018) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26016.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26023 = [];
var len__19467__auto___26074 = arguments.length;
var i__19468__auto___26075 = (0);
while(true){
if((i__19468__auto___26075 < len__19467__auto___26074)){
args26023.push((arguments[i__19468__auto___26075]));

var G__26076 = (i__19468__auto___26075 + (1));
i__19468__auto___26075 = G__26076;
continue;
} else {
}
break;
}

var G__26025 = args26023.length;
switch (G__26025) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26023.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23505__auto___26078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___26078,out){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___26078,out){
return (function (state_26049){
var state_val_26050 = (state_26049[(1)]);
if((state_val_26050 === (7))){
var inst_26044 = (state_26049[(2)]);
var state_26049__$1 = state_26049;
var statearr_26051_26079 = state_26049__$1;
(statearr_26051_26079[(2)] = inst_26044);

(statearr_26051_26079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (1))){
var inst_26026 = null;
var state_26049__$1 = (function (){var statearr_26052 = state_26049;
(statearr_26052[(7)] = inst_26026);

return statearr_26052;
})();
var statearr_26053_26080 = state_26049__$1;
(statearr_26053_26080[(2)] = null);

(statearr_26053_26080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (4))){
var inst_26029 = (state_26049[(8)]);
var inst_26029__$1 = (state_26049[(2)]);
var inst_26030 = (inst_26029__$1 == null);
var inst_26031 = cljs.core.not.call(null,inst_26030);
var state_26049__$1 = (function (){var statearr_26054 = state_26049;
(statearr_26054[(8)] = inst_26029__$1);

return statearr_26054;
})();
if(inst_26031){
var statearr_26055_26081 = state_26049__$1;
(statearr_26055_26081[(1)] = (5));

} else {
var statearr_26056_26082 = state_26049__$1;
(statearr_26056_26082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (6))){
var state_26049__$1 = state_26049;
var statearr_26057_26083 = state_26049__$1;
(statearr_26057_26083[(2)] = null);

(statearr_26057_26083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (3))){
var inst_26046 = (state_26049[(2)]);
var inst_26047 = cljs.core.async.close_BANG_.call(null,out);
var state_26049__$1 = (function (){var statearr_26058 = state_26049;
(statearr_26058[(9)] = inst_26046);

return statearr_26058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26049__$1,inst_26047);
} else {
if((state_val_26050 === (2))){
var state_26049__$1 = state_26049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26049__$1,(4),ch);
} else {
if((state_val_26050 === (11))){
var inst_26029 = (state_26049[(8)]);
var inst_26038 = (state_26049[(2)]);
var inst_26026 = inst_26029;
var state_26049__$1 = (function (){var statearr_26059 = state_26049;
(statearr_26059[(10)] = inst_26038);

(statearr_26059[(7)] = inst_26026);

return statearr_26059;
})();
var statearr_26060_26084 = state_26049__$1;
(statearr_26060_26084[(2)] = null);

(statearr_26060_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (9))){
var inst_26029 = (state_26049[(8)]);
var state_26049__$1 = state_26049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26049__$1,(11),out,inst_26029);
} else {
if((state_val_26050 === (5))){
var inst_26026 = (state_26049[(7)]);
var inst_26029 = (state_26049[(8)]);
var inst_26033 = cljs.core._EQ_.call(null,inst_26029,inst_26026);
var state_26049__$1 = state_26049;
if(inst_26033){
var statearr_26062_26085 = state_26049__$1;
(statearr_26062_26085[(1)] = (8));

} else {
var statearr_26063_26086 = state_26049__$1;
(statearr_26063_26086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (10))){
var inst_26041 = (state_26049[(2)]);
var state_26049__$1 = state_26049;
var statearr_26064_26087 = state_26049__$1;
(statearr_26064_26087[(2)] = inst_26041);

(statearr_26064_26087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26050 === (8))){
var inst_26026 = (state_26049[(7)]);
var tmp26061 = inst_26026;
var inst_26026__$1 = tmp26061;
var state_26049__$1 = (function (){var statearr_26065 = state_26049;
(statearr_26065[(7)] = inst_26026__$1);

return statearr_26065;
})();
var statearr_26066_26088 = state_26049__$1;
(statearr_26066_26088[(2)] = null);

(statearr_26066_26088[(1)] = (2));


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
});})(c__23505__auto___26078,out))
;
return ((function (switch__23393__auto__,c__23505__auto___26078,out){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_26070 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26070[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_26070[(1)] = (1));

return statearr_26070;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_26049){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_26049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e26071){if((e26071 instanceof Object)){
var ex__23397__auto__ = e26071;
var statearr_26072_26089 = state_26049;
(statearr_26072_26089[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26090 = state_26049;
state_26049 = G__26090;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_26049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_26049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___26078,out))
})();
var state__23507__auto__ = (function (){var statearr_26073 = f__23506__auto__.call(null);
(statearr_26073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___26078);

return statearr_26073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___26078,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26091 = [];
var len__19467__auto___26161 = arguments.length;
var i__19468__auto___26162 = (0);
while(true){
if((i__19468__auto___26162 < len__19467__auto___26161)){
args26091.push((arguments[i__19468__auto___26162]));

var G__26163 = (i__19468__auto___26162 + (1));
i__19468__auto___26162 = G__26163;
continue;
} else {
}
break;
}

var G__26093 = args26091.length;
switch (G__26093) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26091.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23505__auto___26165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___26165,out){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___26165,out){
return (function (state_26131){
var state_val_26132 = (state_26131[(1)]);
if((state_val_26132 === (7))){
var inst_26127 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26133_26166 = state_26131__$1;
(statearr_26133_26166[(2)] = inst_26127);

(statearr_26133_26166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (1))){
var inst_26094 = (new Array(n));
var inst_26095 = inst_26094;
var inst_26096 = (0);
var state_26131__$1 = (function (){var statearr_26134 = state_26131;
(statearr_26134[(7)] = inst_26095);

(statearr_26134[(8)] = inst_26096);

return statearr_26134;
})();
var statearr_26135_26167 = state_26131__$1;
(statearr_26135_26167[(2)] = null);

(statearr_26135_26167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (4))){
var inst_26099 = (state_26131[(9)]);
var inst_26099__$1 = (state_26131[(2)]);
var inst_26100 = (inst_26099__$1 == null);
var inst_26101 = cljs.core.not.call(null,inst_26100);
var state_26131__$1 = (function (){var statearr_26136 = state_26131;
(statearr_26136[(9)] = inst_26099__$1);

return statearr_26136;
})();
if(inst_26101){
var statearr_26137_26168 = state_26131__$1;
(statearr_26137_26168[(1)] = (5));

} else {
var statearr_26138_26169 = state_26131__$1;
(statearr_26138_26169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (15))){
var inst_26121 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26139_26170 = state_26131__$1;
(statearr_26139_26170[(2)] = inst_26121);

(statearr_26139_26170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (13))){
var state_26131__$1 = state_26131;
var statearr_26140_26171 = state_26131__$1;
(statearr_26140_26171[(2)] = null);

(statearr_26140_26171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (6))){
var inst_26096 = (state_26131[(8)]);
var inst_26117 = (inst_26096 > (0));
var state_26131__$1 = state_26131;
if(cljs.core.truth_(inst_26117)){
var statearr_26141_26172 = state_26131__$1;
(statearr_26141_26172[(1)] = (12));

} else {
var statearr_26142_26173 = state_26131__$1;
(statearr_26142_26173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (3))){
var inst_26129 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26131__$1,inst_26129);
} else {
if((state_val_26132 === (12))){
var inst_26095 = (state_26131[(7)]);
var inst_26119 = cljs.core.vec.call(null,inst_26095);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26131__$1,(15),out,inst_26119);
} else {
if((state_val_26132 === (2))){
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26131__$1,(4),ch);
} else {
if((state_val_26132 === (11))){
var inst_26111 = (state_26131[(2)]);
var inst_26112 = (new Array(n));
var inst_26095 = inst_26112;
var inst_26096 = (0);
var state_26131__$1 = (function (){var statearr_26143 = state_26131;
(statearr_26143[(7)] = inst_26095);

(statearr_26143[(8)] = inst_26096);

(statearr_26143[(10)] = inst_26111);

return statearr_26143;
})();
var statearr_26144_26174 = state_26131__$1;
(statearr_26144_26174[(2)] = null);

(statearr_26144_26174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (9))){
var inst_26095 = (state_26131[(7)]);
var inst_26109 = cljs.core.vec.call(null,inst_26095);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26131__$1,(11),out,inst_26109);
} else {
if((state_val_26132 === (5))){
var inst_26095 = (state_26131[(7)]);
var inst_26096 = (state_26131[(8)]);
var inst_26099 = (state_26131[(9)]);
var inst_26104 = (state_26131[(11)]);
var inst_26103 = (inst_26095[inst_26096] = inst_26099);
var inst_26104__$1 = (inst_26096 + (1));
var inst_26105 = (inst_26104__$1 < n);
var state_26131__$1 = (function (){var statearr_26145 = state_26131;
(statearr_26145[(12)] = inst_26103);

(statearr_26145[(11)] = inst_26104__$1);

return statearr_26145;
})();
if(cljs.core.truth_(inst_26105)){
var statearr_26146_26175 = state_26131__$1;
(statearr_26146_26175[(1)] = (8));

} else {
var statearr_26147_26176 = state_26131__$1;
(statearr_26147_26176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (14))){
var inst_26124 = (state_26131[(2)]);
var inst_26125 = cljs.core.async.close_BANG_.call(null,out);
var state_26131__$1 = (function (){var statearr_26149 = state_26131;
(statearr_26149[(13)] = inst_26124);

return statearr_26149;
})();
var statearr_26150_26177 = state_26131__$1;
(statearr_26150_26177[(2)] = inst_26125);

(statearr_26150_26177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (10))){
var inst_26115 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26151_26178 = state_26131__$1;
(statearr_26151_26178[(2)] = inst_26115);

(statearr_26151_26178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (8))){
var inst_26095 = (state_26131[(7)]);
var inst_26104 = (state_26131[(11)]);
var tmp26148 = inst_26095;
var inst_26095__$1 = tmp26148;
var inst_26096 = inst_26104;
var state_26131__$1 = (function (){var statearr_26152 = state_26131;
(statearr_26152[(7)] = inst_26095__$1);

(statearr_26152[(8)] = inst_26096);

return statearr_26152;
})();
var statearr_26153_26179 = state_26131__$1;
(statearr_26153_26179[(2)] = null);

(statearr_26153_26179[(1)] = (2));


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
});})(c__23505__auto___26165,out))
;
return ((function (switch__23393__auto__,c__23505__auto___26165,out){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_26157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26157[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_26157[(1)] = (1));

return statearr_26157;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_26131){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_26131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e26158){if((e26158 instanceof Object)){
var ex__23397__auto__ = e26158;
var statearr_26159_26180 = state_26131;
(statearr_26159_26180[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26181 = state_26131;
state_26131 = G__26181;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_26131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_26131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___26165,out))
})();
var state__23507__auto__ = (function (){var statearr_26160 = f__23506__auto__.call(null);
(statearr_26160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___26165);

return statearr_26160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___26165,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26182 = [];
var len__19467__auto___26256 = arguments.length;
var i__19468__auto___26257 = (0);
while(true){
if((i__19468__auto___26257 < len__19467__auto___26256)){
args26182.push((arguments[i__19468__auto___26257]));

var G__26258 = (i__19468__auto___26257 + (1));
i__19468__auto___26257 = G__26258;
continue;
} else {
}
break;
}

var G__26184 = args26182.length;
switch (G__26184) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26182.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23505__auto___26260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23505__auto___26260,out){
return (function (){
var f__23506__auto__ = (function (){var switch__23393__auto__ = ((function (c__23505__auto___26260,out){
return (function (state_26226){
var state_val_26227 = (state_26226[(1)]);
if((state_val_26227 === (7))){
var inst_26222 = (state_26226[(2)]);
var state_26226__$1 = state_26226;
var statearr_26228_26261 = state_26226__$1;
(statearr_26228_26261[(2)] = inst_26222);

(statearr_26228_26261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (1))){
var inst_26185 = [];
var inst_26186 = inst_26185;
var inst_26187 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26226__$1 = (function (){var statearr_26229 = state_26226;
(statearr_26229[(7)] = inst_26187);

(statearr_26229[(8)] = inst_26186);

return statearr_26229;
})();
var statearr_26230_26262 = state_26226__$1;
(statearr_26230_26262[(2)] = null);

(statearr_26230_26262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (4))){
var inst_26190 = (state_26226[(9)]);
var inst_26190__$1 = (state_26226[(2)]);
var inst_26191 = (inst_26190__$1 == null);
var inst_26192 = cljs.core.not.call(null,inst_26191);
var state_26226__$1 = (function (){var statearr_26231 = state_26226;
(statearr_26231[(9)] = inst_26190__$1);

return statearr_26231;
})();
if(inst_26192){
var statearr_26232_26263 = state_26226__$1;
(statearr_26232_26263[(1)] = (5));

} else {
var statearr_26233_26264 = state_26226__$1;
(statearr_26233_26264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (15))){
var inst_26216 = (state_26226[(2)]);
var state_26226__$1 = state_26226;
var statearr_26234_26265 = state_26226__$1;
(statearr_26234_26265[(2)] = inst_26216);

(statearr_26234_26265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (13))){
var state_26226__$1 = state_26226;
var statearr_26235_26266 = state_26226__$1;
(statearr_26235_26266[(2)] = null);

(statearr_26235_26266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (6))){
var inst_26186 = (state_26226[(8)]);
var inst_26211 = inst_26186.length;
var inst_26212 = (inst_26211 > (0));
var state_26226__$1 = state_26226;
if(cljs.core.truth_(inst_26212)){
var statearr_26236_26267 = state_26226__$1;
(statearr_26236_26267[(1)] = (12));

} else {
var statearr_26237_26268 = state_26226__$1;
(statearr_26237_26268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (3))){
var inst_26224 = (state_26226[(2)]);
var state_26226__$1 = state_26226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26226__$1,inst_26224);
} else {
if((state_val_26227 === (12))){
var inst_26186 = (state_26226[(8)]);
var inst_26214 = cljs.core.vec.call(null,inst_26186);
var state_26226__$1 = state_26226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26226__$1,(15),out,inst_26214);
} else {
if((state_val_26227 === (2))){
var state_26226__$1 = state_26226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26226__$1,(4),ch);
} else {
if((state_val_26227 === (11))){
var inst_26190 = (state_26226[(9)]);
var inst_26194 = (state_26226[(10)]);
var inst_26204 = (state_26226[(2)]);
var inst_26205 = [];
var inst_26206 = inst_26205.push(inst_26190);
var inst_26186 = inst_26205;
var inst_26187 = inst_26194;
var state_26226__$1 = (function (){var statearr_26238 = state_26226;
(statearr_26238[(11)] = inst_26204);

(statearr_26238[(7)] = inst_26187);

(statearr_26238[(8)] = inst_26186);

(statearr_26238[(12)] = inst_26206);

return statearr_26238;
})();
var statearr_26239_26269 = state_26226__$1;
(statearr_26239_26269[(2)] = null);

(statearr_26239_26269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (9))){
var inst_26186 = (state_26226[(8)]);
var inst_26202 = cljs.core.vec.call(null,inst_26186);
var state_26226__$1 = state_26226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26226__$1,(11),out,inst_26202);
} else {
if((state_val_26227 === (5))){
var inst_26190 = (state_26226[(9)]);
var inst_26187 = (state_26226[(7)]);
var inst_26194 = (state_26226[(10)]);
var inst_26194__$1 = f.call(null,inst_26190);
var inst_26195 = cljs.core._EQ_.call(null,inst_26194__$1,inst_26187);
var inst_26196 = cljs.core.keyword_identical_QMARK_.call(null,inst_26187,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26197 = (inst_26195) || (inst_26196);
var state_26226__$1 = (function (){var statearr_26240 = state_26226;
(statearr_26240[(10)] = inst_26194__$1);

return statearr_26240;
})();
if(cljs.core.truth_(inst_26197)){
var statearr_26241_26270 = state_26226__$1;
(statearr_26241_26270[(1)] = (8));

} else {
var statearr_26242_26271 = state_26226__$1;
(statearr_26242_26271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (14))){
var inst_26219 = (state_26226[(2)]);
var inst_26220 = cljs.core.async.close_BANG_.call(null,out);
var state_26226__$1 = (function (){var statearr_26244 = state_26226;
(statearr_26244[(13)] = inst_26219);

return statearr_26244;
})();
var statearr_26245_26272 = state_26226__$1;
(statearr_26245_26272[(2)] = inst_26220);

(statearr_26245_26272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (10))){
var inst_26209 = (state_26226[(2)]);
var state_26226__$1 = state_26226;
var statearr_26246_26273 = state_26226__$1;
(statearr_26246_26273[(2)] = inst_26209);

(statearr_26246_26273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26227 === (8))){
var inst_26190 = (state_26226[(9)]);
var inst_26194 = (state_26226[(10)]);
var inst_26186 = (state_26226[(8)]);
var inst_26199 = inst_26186.push(inst_26190);
var tmp26243 = inst_26186;
var inst_26186__$1 = tmp26243;
var inst_26187 = inst_26194;
var state_26226__$1 = (function (){var statearr_26247 = state_26226;
(statearr_26247[(7)] = inst_26187);

(statearr_26247[(14)] = inst_26199);

(statearr_26247[(8)] = inst_26186__$1);

return statearr_26247;
})();
var statearr_26248_26274 = state_26226__$1;
(statearr_26248_26274[(2)] = null);

(statearr_26248_26274[(1)] = (2));


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
});})(c__23505__auto___26260,out))
;
return ((function (switch__23393__auto__,c__23505__auto___26260,out){
return (function() {
var cljs$core$async$state_machine__23394__auto__ = null;
var cljs$core$async$state_machine__23394__auto____0 = (function (){
var statearr_26252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26252[(0)] = cljs$core$async$state_machine__23394__auto__);

(statearr_26252[(1)] = (1));

return statearr_26252;
});
var cljs$core$async$state_machine__23394__auto____1 = (function (state_26226){
while(true){
var ret_value__23395__auto__ = (function (){try{while(true){
var result__23396__auto__ = switch__23393__auto__.call(null,state_26226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23396__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23396__auto__;
}
break;
}
}catch (e26253){if((e26253 instanceof Object)){
var ex__23397__auto__ = e26253;
var statearr_26254_26275 = state_26226;
(statearr_26254_26275[(5)] = ex__23397__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26276 = state_26226;
state_26226 = G__26276;
continue;
} else {
return ret_value__23395__auto__;
}
break;
}
});
cljs$core$async$state_machine__23394__auto__ = function(state_26226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23394__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23394__auto____1.call(this,state_26226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23394__auto____0;
cljs$core$async$state_machine__23394__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23394__auto____1;
return cljs$core$async$state_machine__23394__auto__;
})()
;})(switch__23393__auto__,c__23505__auto___26260,out))
})();
var state__23507__auto__ = (function (){var statearr_26255 = f__23506__auto__.call(null);
(statearr_26255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23505__auto___26260);

return statearr_26255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23507__auto__);
});})(c__23505__auto___26260,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map