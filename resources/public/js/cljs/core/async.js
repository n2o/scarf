// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23613 = [];
var len__19514__auto___23619 = arguments.length;
var i__19515__auto___23620 = (0);
while(true){
if((i__19515__auto___23620 < len__19514__auto___23619)){
args23613.push((arguments[i__19515__auto___23620]));

var G__23621 = (i__19515__auto___23620 + (1));
i__19515__auto___23620 = G__23621;
continue;
} else {
}
break;
}

var G__23615 = args23613.length;
switch (G__23615) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23613.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23616 = (function (f,blockable,meta23617){
this.f = f;
this.blockable = blockable;
this.meta23617 = meta23617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23618,meta23617__$1){
var self__ = this;
var _23618__$1 = this;
return (new cljs.core.async.t_cljs$core$async23616(self__.f,self__.blockable,meta23617__$1));
});

cljs.core.async.t_cljs$core$async23616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23618){
var self__ = this;
var _23618__$1 = this;
return self__.meta23617;
});

cljs.core.async.t_cljs$core$async23616.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23617","meta23617",-1041903395,null)], null);
});

cljs.core.async.t_cljs$core$async23616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23616";

cljs.core.async.t_cljs$core$async23616.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async23616");
});

cljs.core.async.__GT_t_cljs$core$async23616 = (function cljs$core$async$__GT_t_cljs$core$async23616(f__$1,blockable__$1,meta23617){
return (new cljs.core.async.t_cljs$core$async23616(f__$1,blockable__$1,meta23617));
});

}

return (new cljs.core.async.t_cljs$core$async23616(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args23625 = [];
var len__19514__auto___23628 = arguments.length;
var i__19515__auto___23629 = (0);
while(true){
if((i__19515__auto___23629 < len__19514__auto___23628)){
args23625.push((arguments[i__19515__auto___23629]));

var G__23630 = (i__19515__auto___23629 + (1));
i__19515__auto___23629 = G__23630;
continue;
} else {
}
break;
}

var G__23627 = args23625.length;
switch (G__23627) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23625.length)].join('')));

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
var args23632 = [];
var len__19514__auto___23635 = arguments.length;
var i__19515__auto___23636 = (0);
while(true){
if((i__19515__auto___23636 < len__19514__auto___23635)){
args23632.push((arguments[i__19515__auto___23636]));

var G__23637 = (i__19515__auto___23636 + (1));
i__19515__auto___23636 = G__23637;
continue;
} else {
}
break;
}

var G__23634 = args23632.length;
switch (G__23634) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23632.length)].join('')));

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
var args23639 = [];
var len__19514__auto___23642 = arguments.length;
var i__19515__auto___23643 = (0);
while(true){
if((i__19515__auto___23643 < len__19514__auto___23642)){
args23639.push((arguments[i__19515__auto___23643]));

var G__23644 = (i__19515__auto___23643 + (1));
i__19515__auto___23643 = G__23644;
continue;
} else {
}
break;
}

var G__23641 = args23639.length;
switch (G__23641) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23639.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23646 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23646);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23646,ret){
return (function (){
return fn1.call(null,val_23646);
});})(val_23646,ret))
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
var args23647 = [];
var len__19514__auto___23650 = arguments.length;
var i__19515__auto___23651 = (0);
while(true){
if((i__19515__auto___23651 < len__19514__auto___23650)){
args23647.push((arguments[i__19515__auto___23651]));

var G__23652 = (i__19515__auto___23651 + (1));
i__19515__auto___23651 = G__23652;
continue;
} else {
}
break;
}

var G__23649 = args23647.length;
switch (G__23649) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23647.length)].join('')));

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
var n__19359__auto___23654 = n;
var x_23655 = (0);
while(true){
if((x_23655 < n__19359__auto___23654)){
(a[x_23655] = (0));

var G__23656 = (x_23655 + (1));
x_23655 = G__23656;
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

var G__23657 = (i + (1));
i = G__23657;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23661 = (function (alt_flag,flag,meta23662){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23662 = meta23662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23663,meta23662__$1){
var self__ = this;
var _23663__$1 = this;
return (new cljs.core.async.t_cljs$core$async23661(self__.alt_flag,self__.flag,meta23662__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23663){
var self__ = this;
var _23663__$1 = this;
return self__.meta23662;
});})(flag))
;

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23661.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23662","meta23662",-778779029,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23661";

cljs.core.async.t_cljs$core$async23661.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async23661");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23661 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23661(alt_flag__$1,flag__$1,meta23662){
return (new cljs.core.async.t_cljs$core$async23661(alt_flag__$1,flag__$1,meta23662));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23661(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23667 = (function (alt_handler,flag,cb,meta23668){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23668 = meta23668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23669,meta23668__$1){
var self__ = this;
var _23669__$1 = this;
return (new cljs.core.async.t_cljs$core$async23667(self__.alt_handler,self__.flag,self__.cb,meta23668__$1));
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23669){
var self__ = this;
var _23669__$1 = this;
return self__.meta23668;
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23668","meta23668",-875167484,null)], null);
});

cljs.core.async.t_cljs$core$async23667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23667";

cljs.core.async.t_cljs$core$async23667.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async23667");
});

cljs.core.async.__GT_t_cljs$core$async23667 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23667(alt_handler__$1,flag__$1,cb__$1,meta23668){
return (new cljs.core.async.t_cljs$core$async23667(alt_handler__$1,flag__$1,cb__$1,meta23668));
});

}

return (new cljs.core.async.t_cljs$core$async23667(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23670_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23670_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23671_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23671_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18445__auto__ = wport;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23672 = (i + (1));
i = G__23672;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18445__auto__ = ret;
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18433__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18433__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18433__auto__;
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
var args__19521__auto__ = [];
var len__19514__auto___23678 = arguments.length;
var i__19515__auto___23679 = (0);
while(true){
if((i__19515__auto___23679 < len__19514__auto___23678)){
args__19521__auto__.push((arguments[i__19515__auto___23679]));

var G__23680 = (i__19515__auto___23679 + (1));
i__19515__auto___23679 = G__23680;
continue;
} else {
}
break;
}

var argseq__19522__auto__ = ((((1) < args__19521__auto__.length))?(new cljs.core.IndexedSeq(args__19521__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19522__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23675){
var map__23676 = p__23675;
var map__23676__$1 = ((((!((map__23676 == null)))?((((map__23676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23676):map__23676);
var opts = map__23676__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23673){
var G__23674 = cljs.core.first.call(null,seq23673);
var seq23673__$1 = cljs.core.next.call(null,seq23673);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23674,seq23673__$1);
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
var args23681 = [];
var len__19514__auto___23731 = arguments.length;
var i__19515__auto___23732 = (0);
while(true){
if((i__19515__auto___23732 < len__19514__auto___23731)){
args23681.push((arguments[i__19515__auto___23732]));

var G__23733 = (i__19515__auto___23732 + (1));
i__19515__auto___23732 = G__23733;
continue;
} else {
}
break;
}

var G__23683 = args23681.length;
switch (G__23683) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23681.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23568__auto___23735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___23735){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___23735){
return (function (state_23707){
var state_val_23708 = (state_23707[(1)]);
if((state_val_23708 === (7))){
var inst_23703 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
var statearr_23709_23736 = state_23707__$1;
(statearr_23709_23736[(2)] = inst_23703);

(statearr_23709_23736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (1))){
var state_23707__$1 = state_23707;
var statearr_23710_23737 = state_23707__$1;
(statearr_23710_23737[(2)] = null);

(statearr_23710_23737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (4))){
var inst_23686 = (state_23707[(7)]);
var inst_23686__$1 = (state_23707[(2)]);
var inst_23687 = (inst_23686__$1 == null);
var state_23707__$1 = (function (){var statearr_23711 = state_23707;
(statearr_23711[(7)] = inst_23686__$1);

return statearr_23711;
})();
if(cljs.core.truth_(inst_23687)){
var statearr_23712_23738 = state_23707__$1;
(statearr_23712_23738[(1)] = (5));

} else {
var statearr_23713_23739 = state_23707__$1;
(statearr_23713_23739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (13))){
var state_23707__$1 = state_23707;
var statearr_23714_23740 = state_23707__$1;
(statearr_23714_23740[(2)] = null);

(statearr_23714_23740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (6))){
var inst_23686 = (state_23707[(7)]);
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23707__$1,(11),to,inst_23686);
} else {
if((state_val_23708 === (3))){
var inst_23705 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23707__$1,inst_23705);
} else {
if((state_val_23708 === (12))){
var state_23707__$1 = state_23707;
var statearr_23715_23741 = state_23707__$1;
(statearr_23715_23741[(2)] = null);

(statearr_23715_23741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (2))){
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23707__$1,(4),from);
} else {
if((state_val_23708 === (11))){
var inst_23696 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
if(cljs.core.truth_(inst_23696)){
var statearr_23716_23742 = state_23707__$1;
(statearr_23716_23742[(1)] = (12));

} else {
var statearr_23717_23743 = state_23707__$1;
(statearr_23717_23743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (9))){
var state_23707__$1 = state_23707;
var statearr_23718_23744 = state_23707__$1;
(statearr_23718_23744[(2)] = null);

(statearr_23718_23744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (5))){
var state_23707__$1 = state_23707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23719_23745 = state_23707__$1;
(statearr_23719_23745[(1)] = (8));

} else {
var statearr_23720_23746 = state_23707__$1;
(statearr_23720_23746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (14))){
var inst_23701 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
var statearr_23721_23747 = state_23707__$1;
(statearr_23721_23747[(2)] = inst_23701);

(statearr_23721_23747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (10))){
var inst_23693 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
var statearr_23722_23748 = state_23707__$1;
(statearr_23722_23748[(2)] = inst_23693);

(statearr_23722_23748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (8))){
var inst_23690 = cljs.core.async.close_BANG_.call(null,to);
var state_23707__$1 = state_23707;
var statearr_23723_23749 = state_23707__$1;
(statearr_23723_23749[(2)] = inst_23690);

(statearr_23723_23749[(1)] = (10));


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
});})(c__23568__auto___23735))
;
return ((function (switch__23456__auto__,c__23568__auto___23735){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_23727 = [null,null,null,null,null,null,null,null];
(statearr_23727[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_23727[(1)] = (1));

return statearr_23727;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_23707){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_23707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e23728){if((e23728 instanceof Object)){
var ex__23460__auto__ = e23728;
var statearr_23729_23750 = state_23707;
(statearr_23729_23750[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23751 = state_23707;
state_23707 = G__23751;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_23707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_23707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___23735))
})();
var state__23570__auto__ = (function (){var statearr_23730 = f__23569__auto__.call(null);
(statearr_23730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___23735);

return statearr_23730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___23735))
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
return (function (p__23935){
var vec__23936 = p__23935;
var v = cljs.core.nth.call(null,vec__23936,(0),null);
var p = cljs.core.nth.call(null,vec__23936,(1),null);
var job = vec__23936;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23568__auto___24118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___24118,res,vec__23936,v,p,job,jobs,results){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___24118,res,vec__23936,v,p,job,jobs,results){
return (function (state_23941){
var state_val_23942 = (state_23941[(1)]);
if((state_val_23942 === (1))){
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23941__$1,(2),res,v);
} else {
if((state_val_23942 === (2))){
var inst_23938 = (state_23941[(2)]);
var inst_23939 = cljs.core.async.close_BANG_.call(null,res);
var state_23941__$1 = (function (){var statearr_23943 = state_23941;
(statearr_23943[(7)] = inst_23938);

return statearr_23943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23941__$1,inst_23939);
} else {
return null;
}
}
});})(c__23568__auto___24118,res,vec__23936,v,p,job,jobs,results))
;
return ((function (switch__23456__auto__,c__23568__auto___24118,res,vec__23936,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0 = (function (){
var statearr_23947 = [null,null,null,null,null,null,null,null];
(statearr_23947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__);

(statearr_23947[(1)] = (1));

return statearr_23947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1 = (function (state_23941){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_23941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e23948){if((e23948 instanceof Object)){
var ex__23460__auto__ = e23948;
var statearr_23949_24119 = state_23941;
(statearr_23949_24119[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24120 = state_23941;
state_23941 = G__24120;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = function(state_23941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1.call(this,state_23941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___24118,res,vec__23936,v,p,job,jobs,results))
})();
var state__23570__auto__ = (function (){var statearr_23950 = f__23569__auto__.call(null);
(statearr_23950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___24118);

return statearr_23950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___24118,res,vec__23936,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23951){
var vec__23952 = p__23951;
var v = cljs.core.nth.call(null,vec__23952,(0),null);
var p = cljs.core.nth.call(null,vec__23952,(1),null);
var job = vec__23952;
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
var n__19359__auto___24121 = n;
var __24122 = (0);
while(true){
if((__24122 < n__19359__auto___24121)){
var G__23953_24123 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23953_24123) {
case "compute":
var c__23568__auto___24125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24122,c__23568__auto___24125,G__23953_24123,n__19359__auto___24121,jobs,results,process,async){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (__24122,c__23568__auto___24125,G__23953_24123,n__19359__auto___24121,jobs,results,process,async){
return (function (state_23966){
var state_val_23967 = (state_23966[(1)]);
if((state_val_23967 === (1))){
var state_23966__$1 = state_23966;
var statearr_23968_24126 = state_23966__$1;
(statearr_23968_24126[(2)] = null);

(statearr_23968_24126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (2))){
var state_23966__$1 = state_23966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23966__$1,(4),jobs);
} else {
if((state_val_23967 === (3))){
var inst_23964 = (state_23966[(2)]);
var state_23966__$1 = state_23966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23966__$1,inst_23964);
} else {
if((state_val_23967 === (4))){
var inst_23956 = (state_23966[(2)]);
var inst_23957 = process.call(null,inst_23956);
var state_23966__$1 = state_23966;
if(cljs.core.truth_(inst_23957)){
var statearr_23969_24127 = state_23966__$1;
(statearr_23969_24127[(1)] = (5));

} else {
var statearr_23970_24128 = state_23966__$1;
(statearr_23970_24128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (5))){
var state_23966__$1 = state_23966;
var statearr_23971_24129 = state_23966__$1;
(statearr_23971_24129[(2)] = null);

(statearr_23971_24129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (6))){
var state_23966__$1 = state_23966;
var statearr_23972_24130 = state_23966__$1;
(statearr_23972_24130[(2)] = null);

(statearr_23972_24130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23967 === (7))){
var inst_23962 = (state_23966[(2)]);
var state_23966__$1 = state_23966;
var statearr_23973_24131 = state_23966__$1;
(statearr_23973_24131[(2)] = inst_23962);

(statearr_23973_24131[(1)] = (3));


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
});})(__24122,c__23568__auto___24125,G__23953_24123,n__19359__auto___24121,jobs,results,process,async))
;
return ((function (__24122,switch__23456__auto__,c__23568__auto___24125,G__23953_24123,n__19359__auto___24121,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0 = (function (){
var statearr_23977 = [null,null,null,null,null,null,null];
(statearr_23977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__);

(statearr_23977[(1)] = (1));

return statearr_23977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1 = (function (state_23966){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_23966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e23978){if((e23978 instanceof Object)){
var ex__23460__auto__ = e23978;
var statearr_23979_24132 = state_23966;
(statearr_23979_24132[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24133 = state_23966;
state_23966 = G__24133;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = function(state_23966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1.call(this,state_23966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__;
})()
;})(__24122,switch__23456__auto__,c__23568__auto___24125,G__23953_24123,n__19359__auto___24121,jobs,results,process,async))
})();
var state__23570__auto__ = (function (){var statearr_23980 = f__23569__auto__.call(null);
(statearr_23980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___24125);

return statearr_23980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(__24122,c__23568__auto___24125,G__23953_24123,n__19359__auto___24121,jobs,results,process,async))
);


break;
case "async":
var c__23568__auto___24134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24122,c__23568__auto___24134,G__23953_24123,n__19359__auto___24121,jobs,results,process,async){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (__24122,c__23568__auto___24134,G__23953_24123,n__19359__auto___24121,jobs,results,process,async){
return (function (state_23993){
var state_val_23994 = (state_23993[(1)]);
if((state_val_23994 === (1))){
var state_23993__$1 = state_23993;
var statearr_23995_24135 = state_23993__$1;
(statearr_23995_24135[(2)] = null);

(statearr_23995_24135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (2))){
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23993__$1,(4),jobs);
} else {
if((state_val_23994 === (3))){
var inst_23991 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23993__$1,inst_23991);
} else {
if((state_val_23994 === (4))){
var inst_23983 = (state_23993[(2)]);
var inst_23984 = async.call(null,inst_23983);
var state_23993__$1 = state_23993;
if(cljs.core.truth_(inst_23984)){
var statearr_23996_24136 = state_23993__$1;
(statearr_23996_24136[(1)] = (5));

} else {
var statearr_23997_24137 = state_23993__$1;
(statearr_23997_24137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (5))){
var state_23993__$1 = state_23993;
var statearr_23998_24138 = state_23993__$1;
(statearr_23998_24138[(2)] = null);

(statearr_23998_24138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (6))){
var state_23993__$1 = state_23993;
var statearr_23999_24139 = state_23993__$1;
(statearr_23999_24139[(2)] = null);

(statearr_23999_24139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23994 === (7))){
var inst_23989 = (state_23993[(2)]);
var state_23993__$1 = state_23993;
var statearr_24000_24140 = state_23993__$1;
(statearr_24000_24140[(2)] = inst_23989);

(statearr_24000_24140[(1)] = (3));


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
});})(__24122,c__23568__auto___24134,G__23953_24123,n__19359__auto___24121,jobs,results,process,async))
;
return ((function (__24122,switch__23456__auto__,c__23568__auto___24134,G__23953_24123,n__19359__auto___24121,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0 = (function (){
var statearr_24004 = [null,null,null,null,null,null,null];
(statearr_24004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__);

(statearr_24004[(1)] = (1));

return statearr_24004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1 = (function (state_23993){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_23993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e24005){if((e24005 instanceof Object)){
var ex__23460__auto__ = e24005;
var statearr_24006_24141 = state_23993;
(statearr_24006_24141[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24142 = state_23993;
state_23993 = G__24142;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = function(state_23993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1.call(this,state_23993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__;
})()
;})(__24122,switch__23456__auto__,c__23568__auto___24134,G__23953_24123,n__19359__auto___24121,jobs,results,process,async))
})();
var state__23570__auto__ = (function (){var statearr_24007 = f__23569__auto__.call(null);
(statearr_24007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___24134);

return statearr_24007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(__24122,c__23568__auto___24134,G__23953_24123,n__19359__auto___24121,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24143 = (__24122 + (1));
__24122 = G__24143;
continue;
} else {
}
break;
}

var c__23568__auto___24144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___24144,jobs,results,process,async){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___24144,jobs,results,process,async){
return (function (state_24029){
var state_val_24030 = (state_24029[(1)]);
if((state_val_24030 === (1))){
var state_24029__$1 = state_24029;
var statearr_24031_24145 = state_24029__$1;
(statearr_24031_24145[(2)] = null);

(statearr_24031_24145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24030 === (2))){
var state_24029__$1 = state_24029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24029__$1,(4),from);
} else {
if((state_val_24030 === (3))){
var inst_24027 = (state_24029[(2)]);
var state_24029__$1 = state_24029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24029__$1,inst_24027);
} else {
if((state_val_24030 === (4))){
var inst_24010 = (state_24029[(7)]);
var inst_24010__$1 = (state_24029[(2)]);
var inst_24011 = (inst_24010__$1 == null);
var state_24029__$1 = (function (){var statearr_24032 = state_24029;
(statearr_24032[(7)] = inst_24010__$1);

return statearr_24032;
})();
if(cljs.core.truth_(inst_24011)){
var statearr_24033_24146 = state_24029__$1;
(statearr_24033_24146[(1)] = (5));

} else {
var statearr_24034_24147 = state_24029__$1;
(statearr_24034_24147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24030 === (5))){
var inst_24013 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24029__$1 = state_24029;
var statearr_24035_24148 = state_24029__$1;
(statearr_24035_24148[(2)] = inst_24013);

(statearr_24035_24148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24030 === (6))){
var inst_24010 = (state_24029[(7)]);
var inst_24015 = (state_24029[(8)]);
var inst_24015__$1 = cljs.core.async.chan.call(null,(1));
var inst_24016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24017 = [inst_24010,inst_24015__$1];
var inst_24018 = (new cljs.core.PersistentVector(null,2,(5),inst_24016,inst_24017,null));
var state_24029__$1 = (function (){var statearr_24036 = state_24029;
(statearr_24036[(8)] = inst_24015__$1);

return statearr_24036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24029__$1,(8),jobs,inst_24018);
} else {
if((state_val_24030 === (7))){
var inst_24025 = (state_24029[(2)]);
var state_24029__$1 = state_24029;
var statearr_24037_24149 = state_24029__$1;
(statearr_24037_24149[(2)] = inst_24025);

(statearr_24037_24149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24030 === (8))){
var inst_24015 = (state_24029[(8)]);
var inst_24020 = (state_24029[(2)]);
var state_24029__$1 = (function (){var statearr_24038 = state_24029;
(statearr_24038[(9)] = inst_24020);

return statearr_24038;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24029__$1,(9),results,inst_24015);
} else {
if((state_val_24030 === (9))){
var inst_24022 = (state_24029[(2)]);
var state_24029__$1 = (function (){var statearr_24039 = state_24029;
(statearr_24039[(10)] = inst_24022);

return statearr_24039;
})();
var statearr_24040_24150 = state_24029__$1;
(statearr_24040_24150[(2)] = null);

(statearr_24040_24150[(1)] = (2));


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
});})(c__23568__auto___24144,jobs,results,process,async))
;
return ((function (switch__23456__auto__,c__23568__auto___24144,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0 = (function (){
var statearr_24044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__);

(statearr_24044[(1)] = (1));

return statearr_24044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1 = (function (state_24029){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_24029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e24045){if((e24045 instanceof Object)){
var ex__23460__auto__ = e24045;
var statearr_24046_24151 = state_24029;
(statearr_24046_24151[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24152 = state_24029;
state_24029 = G__24152;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = function(state_24029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1.call(this,state_24029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___24144,jobs,results,process,async))
})();
var state__23570__auto__ = (function (){var statearr_24047 = f__23569__auto__.call(null);
(statearr_24047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___24144);

return statearr_24047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___24144,jobs,results,process,async))
);


var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__,jobs,results,process,async){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__,jobs,results,process,async){
return (function (state_24085){
var state_val_24086 = (state_24085[(1)]);
if((state_val_24086 === (7))){
var inst_24081 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
var statearr_24087_24153 = state_24085__$1;
(statearr_24087_24153[(2)] = inst_24081);

(statearr_24087_24153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (20))){
var state_24085__$1 = state_24085;
var statearr_24088_24154 = state_24085__$1;
(statearr_24088_24154[(2)] = null);

(statearr_24088_24154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (1))){
var state_24085__$1 = state_24085;
var statearr_24089_24155 = state_24085__$1;
(statearr_24089_24155[(2)] = null);

(statearr_24089_24155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (4))){
var inst_24050 = (state_24085[(7)]);
var inst_24050__$1 = (state_24085[(2)]);
var inst_24051 = (inst_24050__$1 == null);
var state_24085__$1 = (function (){var statearr_24090 = state_24085;
(statearr_24090[(7)] = inst_24050__$1);

return statearr_24090;
})();
if(cljs.core.truth_(inst_24051)){
var statearr_24091_24156 = state_24085__$1;
(statearr_24091_24156[(1)] = (5));

} else {
var statearr_24092_24157 = state_24085__$1;
(statearr_24092_24157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (15))){
var inst_24063 = (state_24085[(8)]);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24085__$1,(18),to,inst_24063);
} else {
if((state_val_24086 === (21))){
var inst_24076 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
var statearr_24093_24158 = state_24085__$1;
(statearr_24093_24158[(2)] = inst_24076);

(statearr_24093_24158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (13))){
var inst_24078 = (state_24085[(2)]);
var state_24085__$1 = (function (){var statearr_24094 = state_24085;
(statearr_24094[(9)] = inst_24078);

return statearr_24094;
})();
var statearr_24095_24159 = state_24085__$1;
(statearr_24095_24159[(2)] = null);

(statearr_24095_24159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (6))){
var inst_24050 = (state_24085[(7)]);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24085__$1,(11),inst_24050);
} else {
if((state_val_24086 === (17))){
var inst_24071 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
if(cljs.core.truth_(inst_24071)){
var statearr_24096_24160 = state_24085__$1;
(statearr_24096_24160[(1)] = (19));

} else {
var statearr_24097_24161 = state_24085__$1;
(statearr_24097_24161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (3))){
var inst_24083 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24085__$1,inst_24083);
} else {
if((state_val_24086 === (12))){
var inst_24060 = (state_24085[(10)]);
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24085__$1,(14),inst_24060);
} else {
if((state_val_24086 === (2))){
var state_24085__$1 = state_24085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24085__$1,(4),results);
} else {
if((state_val_24086 === (19))){
var state_24085__$1 = state_24085;
var statearr_24098_24162 = state_24085__$1;
(statearr_24098_24162[(2)] = null);

(statearr_24098_24162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (11))){
var inst_24060 = (state_24085[(2)]);
var state_24085__$1 = (function (){var statearr_24099 = state_24085;
(statearr_24099[(10)] = inst_24060);

return statearr_24099;
})();
var statearr_24100_24163 = state_24085__$1;
(statearr_24100_24163[(2)] = null);

(statearr_24100_24163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (9))){
var state_24085__$1 = state_24085;
var statearr_24101_24164 = state_24085__$1;
(statearr_24101_24164[(2)] = null);

(statearr_24101_24164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (5))){
var state_24085__$1 = state_24085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24102_24165 = state_24085__$1;
(statearr_24102_24165[(1)] = (8));

} else {
var statearr_24103_24166 = state_24085__$1;
(statearr_24103_24166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (14))){
var inst_24065 = (state_24085[(11)]);
var inst_24063 = (state_24085[(8)]);
var inst_24063__$1 = (state_24085[(2)]);
var inst_24064 = (inst_24063__$1 == null);
var inst_24065__$1 = cljs.core.not.call(null,inst_24064);
var state_24085__$1 = (function (){var statearr_24104 = state_24085;
(statearr_24104[(11)] = inst_24065__$1);

(statearr_24104[(8)] = inst_24063__$1);

return statearr_24104;
})();
if(inst_24065__$1){
var statearr_24105_24167 = state_24085__$1;
(statearr_24105_24167[(1)] = (15));

} else {
var statearr_24106_24168 = state_24085__$1;
(statearr_24106_24168[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (16))){
var inst_24065 = (state_24085[(11)]);
var state_24085__$1 = state_24085;
var statearr_24107_24169 = state_24085__$1;
(statearr_24107_24169[(2)] = inst_24065);

(statearr_24107_24169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (10))){
var inst_24057 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
var statearr_24108_24170 = state_24085__$1;
(statearr_24108_24170[(2)] = inst_24057);

(statearr_24108_24170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (18))){
var inst_24068 = (state_24085[(2)]);
var state_24085__$1 = state_24085;
var statearr_24109_24171 = state_24085__$1;
(statearr_24109_24171[(2)] = inst_24068);

(statearr_24109_24171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24086 === (8))){
var inst_24054 = cljs.core.async.close_BANG_.call(null,to);
var state_24085__$1 = state_24085;
var statearr_24110_24172 = state_24085__$1;
(statearr_24110_24172[(2)] = inst_24054);

(statearr_24110_24172[(1)] = (10));


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
});})(c__23568__auto__,jobs,results,process,async))
;
return ((function (switch__23456__auto__,c__23568__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0 = (function (){
var statearr_24114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__);

(statearr_24114[(1)] = (1));

return statearr_24114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1 = (function (state_24085){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_24085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e24115){if((e24115 instanceof Object)){
var ex__23460__auto__ = e24115;
var statearr_24116_24173 = state_24085;
(statearr_24116_24173[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24174 = state_24085;
state_24085 = G__24174;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__ = function(state_24085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1.call(this,state_24085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23457__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__,jobs,results,process,async))
})();
var state__23570__auto__ = (function (){var statearr_24117 = f__23569__auto__.call(null);
(statearr_24117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_24117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__,jobs,results,process,async))
);

return c__23568__auto__;
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
var args24175 = [];
var len__19514__auto___24178 = arguments.length;
var i__19515__auto___24179 = (0);
while(true){
if((i__19515__auto___24179 < len__19514__auto___24178)){
args24175.push((arguments[i__19515__auto___24179]));

var G__24180 = (i__19515__auto___24179 + (1));
i__19515__auto___24179 = G__24180;
continue;
} else {
}
break;
}

var G__24177 = args24175.length;
switch (G__24177) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24175.length)].join('')));

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
var args24182 = [];
var len__19514__auto___24185 = arguments.length;
var i__19515__auto___24186 = (0);
while(true){
if((i__19515__auto___24186 < len__19514__auto___24185)){
args24182.push((arguments[i__19515__auto___24186]));

var G__24187 = (i__19515__auto___24186 + (1));
i__19515__auto___24186 = G__24187;
continue;
} else {
}
break;
}

var G__24184 = args24182.length;
switch (G__24184) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24182.length)].join('')));

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
var args24189 = [];
var len__19514__auto___24242 = arguments.length;
var i__19515__auto___24243 = (0);
while(true){
if((i__19515__auto___24243 < len__19514__auto___24242)){
args24189.push((arguments[i__19515__auto___24243]));

var G__24244 = (i__19515__auto___24243 + (1));
i__19515__auto___24243 = G__24244;
continue;
} else {
}
break;
}

var G__24191 = args24189.length;
switch (G__24191) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24189.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23568__auto___24246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___24246,tc,fc){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___24246,tc,fc){
return (function (state_24217){
var state_val_24218 = (state_24217[(1)]);
if((state_val_24218 === (7))){
var inst_24213 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24219_24247 = state_24217__$1;
(statearr_24219_24247[(2)] = inst_24213);

(statearr_24219_24247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (1))){
var state_24217__$1 = state_24217;
var statearr_24220_24248 = state_24217__$1;
(statearr_24220_24248[(2)] = null);

(statearr_24220_24248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (4))){
var inst_24194 = (state_24217[(7)]);
var inst_24194__$1 = (state_24217[(2)]);
var inst_24195 = (inst_24194__$1 == null);
var state_24217__$1 = (function (){var statearr_24221 = state_24217;
(statearr_24221[(7)] = inst_24194__$1);

return statearr_24221;
})();
if(cljs.core.truth_(inst_24195)){
var statearr_24222_24249 = state_24217__$1;
(statearr_24222_24249[(1)] = (5));

} else {
var statearr_24223_24250 = state_24217__$1;
(statearr_24223_24250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (13))){
var state_24217__$1 = state_24217;
var statearr_24224_24251 = state_24217__$1;
(statearr_24224_24251[(2)] = null);

(statearr_24224_24251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (6))){
var inst_24194 = (state_24217[(7)]);
var inst_24200 = p.call(null,inst_24194);
var state_24217__$1 = state_24217;
if(cljs.core.truth_(inst_24200)){
var statearr_24225_24252 = state_24217__$1;
(statearr_24225_24252[(1)] = (9));

} else {
var statearr_24226_24253 = state_24217__$1;
(statearr_24226_24253[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (3))){
var inst_24215 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24217__$1,inst_24215);
} else {
if((state_val_24218 === (12))){
var state_24217__$1 = state_24217;
var statearr_24227_24254 = state_24217__$1;
(statearr_24227_24254[(2)] = null);

(statearr_24227_24254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (2))){
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24217__$1,(4),ch);
} else {
if((state_val_24218 === (11))){
var inst_24194 = (state_24217[(7)]);
var inst_24204 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24217__$1,(8),inst_24204,inst_24194);
} else {
if((state_val_24218 === (9))){
var state_24217__$1 = state_24217;
var statearr_24228_24255 = state_24217__$1;
(statearr_24228_24255[(2)] = tc);

(statearr_24228_24255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (5))){
var inst_24197 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24198 = cljs.core.async.close_BANG_.call(null,fc);
var state_24217__$1 = (function (){var statearr_24229 = state_24217;
(statearr_24229[(8)] = inst_24197);

return statearr_24229;
})();
var statearr_24230_24256 = state_24217__$1;
(statearr_24230_24256[(2)] = inst_24198);

(statearr_24230_24256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (14))){
var inst_24211 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
var statearr_24231_24257 = state_24217__$1;
(statearr_24231_24257[(2)] = inst_24211);

(statearr_24231_24257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (10))){
var state_24217__$1 = state_24217;
var statearr_24232_24258 = state_24217__$1;
(statearr_24232_24258[(2)] = fc);

(statearr_24232_24258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24218 === (8))){
var inst_24206 = (state_24217[(2)]);
var state_24217__$1 = state_24217;
if(cljs.core.truth_(inst_24206)){
var statearr_24233_24259 = state_24217__$1;
(statearr_24233_24259[(1)] = (12));

} else {
var statearr_24234_24260 = state_24217__$1;
(statearr_24234_24260[(1)] = (13));

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
});})(c__23568__auto___24246,tc,fc))
;
return ((function (switch__23456__auto__,c__23568__auto___24246,tc,fc){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_24238 = [null,null,null,null,null,null,null,null,null];
(statearr_24238[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_24238[(1)] = (1));

return statearr_24238;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_24217){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_24217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e24239){if((e24239 instanceof Object)){
var ex__23460__auto__ = e24239;
var statearr_24240_24261 = state_24217;
(statearr_24240_24261[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24262 = state_24217;
state_24217 = G__24262;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_24217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_24217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___24246,tc,fc))
})();
var state__23570__auto__ = (function (){var statearr_24241 = f__23569__auto__.call(null);
(statearr_24241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___24246);

return statearr_24241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___24246,tc,fc))
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
var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__){
return (function (state_24326){
var state_val_24327 = (state_24326[(1)]);
if((state_val_24327 === (7))){
var inst_24322 = (state_24326[(2)]);
var state_24326__$1 = state_24326;
var statearr_24328_24349 = state_24326__$1;
(statearr_24328_24349[(2)] = inst_24322);

(statearr_24328_24349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (1))){
var inst_24306 = init;
var state_24326__$1 = (function (){var statearr_24329 = state_24326;
(statearr_24329[(7)] = inst_24306);

return statearr_24329;
})();
var statearr_24330_24350 = state_24326__$1;
(statearr_24330_24350[(2)] = null);

(statearr_24330_24350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (4))){
var inst_24309 = (state_24326[(8)]);
var inst_24309__$1 = (state_24326[(2)]);
var inst_24310 = (inst_24309__$1 == null);
var state_24326__$1 = (function (){var statearr_24331 = state_24326;
(statearr_24331[(8)] = inst_24309__$1);

return statearr_24331;
})();
if(cljs.core.truth_(inst_24310)){
var statearr_24332_24351 = state_24326__$1;
(statearr_24332_24351[(1)] = (5));

} else {
var statearr_24333_24352 = state_24326__$1;
(statearr_24333_24352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (6))){
var inst_24306 = (state_24326[(7)]);
var inst_24313 = (state_24326[(9)]);
var inst_24309 = (state_24326[(8)]);
var inst_24313__$1 = f.call(null,inst_24306,inst_24309);
var inst_24314 = cljs.core.reduced_QMARK_.call(null,inst_24313__$1);
var state_24326__$1 = (function (){var statearr_24334 = state_24326;
(statearr_24334[(9)] = inst_24313__$1);

return statearr_24334;
})();
if(inst_24314){
var statearr_24335_24353 = state_24326__$1;
(statearr_24335_24353[(1)] = (8));

} else {
var statearr_24336_24354 = state_24326__$1;
(statearr_24336_24354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (3))){
var inst_24324 = (state_24326[(2)]);
var state_24326__$1 = state_24326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24326__$1,inst_24324);
} else {
if((state_val_24327 === (2))){
var state_24326__$1 = state_24326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24326__$1,(4),ch);
} else {
if((state_val_24327 === (9))){
var inst_24313 = (state_24326[(9)]);
var inst_24306 = inst_24313;
var state_24326__$1 = (function (){var statearr_24337 = state_24326;
(statearr_24337[(7)] = inst_24306);

return statearr_24337;
})();
var statearr_24338_24355 = state_24326__$1;
(statearr_24338_24355[(2)] = null);

(statearr_24338_24355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (5))){
var inst_24306 = (state_24326[(7)]);
var state_24326__$1 = state_24326;
var statearr_24339_24356 = state_24326__$1;
(statearr_24339_24356[(2)] = inst_24306);

(statearr_24339_24356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (10))){
var inst_24320 = (state_24326[(2)]);
var state_24326__$1 = state_24326;
var statearr_24340_24357 = state_24326__$1;
(statearr_24340_24357[(2)] = inst_24320);

(statearr_24340_24357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24327 === (8))){
var inst_24313 = (state_24326[(9)]);
var inst_24316 = cljs.core.deref.call(null,inst_24313);
var state_24326__$1 = state_24326;
var statearr_24341_24358 = state_24326__$1;
(statearr_24341_24358[(2)] = inst_24316);

(statearr_24341_24358[(1)] = (10));


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
});})(c__23568__auto__))
;
return ((function (switch__23456__auto__,c__23568__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23457__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23457__auto____0 = (function (){
var statearr_24345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24345[(0)] = cljs$core$async$reduce_$_state_machine__23457__auto__);

(statearr_24345[(1)] = (1));

return statearr_24345;
});
var cljs$core$async$reduce_$_state_machine__23457__auto____1 = (function (state_24326){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_24326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e24346){if((e24346 instanceof Object)){
var ex__23460__auto__ = e24346;
var statearr_24347_24359 = state_24326;
(statearr_24347_24359[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24360 = state_24326;
state_24326 = G__24360;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23457__auto__ = function(state_24326){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23457__auto____1.call(this,state_24326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23457__auto____0;
cljs$core$async$reduce_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23457__auto____1;
return cljs$core$async$reduce_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__))
})();
var state__23570__auto__ = (function (){var statearr_24348 = f__23569__auto__.call(null);
(statearr_24348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_24348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__))
);

return c__23568__auto__;
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
var args24361 = [];
var len__19514__auto___24413 = arguments.length;
var i__19515__auto___24414 = (0);
while(true){
if((i__19515__auto___24414 < len__19514__auto___24413)){
args24361.push((arguments[i__19515__auto___24414]));

var G__24415 = (i__19515__auto___24414 + (1));
i__19515__auto___24414 = G__24415;
continue;
} else {
}
break;
}

var G__24363 = args24361.length;
switch (G__24363) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24361.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__){
return (function (state_24388){
var state_val_24389 = (state_24388[(1)]);
if((state_val_24389 === (7))){
var inst_24370 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24390_24417 = state_24388__$1;
(statearr_24390_24417[(2)] = inst_24370);

(statearr_24390_24417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (1))){
var inst_24364 = cljs.core.seq.call(null,coll);
var inst_24365 = inst_24364;
var state_24388__$1 = (function (){var statearr_24391 = state_24388;
(statearr_24391[(7)] = inst_24365);

return statearr_24391;
})();
var statearr_24392_24418 = state_24388__$1;
(statearr_24392_24418[(2)] = null);

(statearr_24392_24418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (4))){
var inst_24365 = (state_24388[(7)]);
var inst_24368 = cljs.core.first.call(null,inst_24365);
var state_24388__$1 = state_24388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24388__$1,(7),ch,inst_24368);
} else {
if((state_val_24389 === (13))){
var inst_24382 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24393_24419 = state_24388__$1;
(statearr_24393_24419[(2)] = inst_24382);

(statearr_24393_24419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (6))){
var inst_24373 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
if(cljs.core.truth_(inst_24373)){
var statearr_24394_24420 = state_24388__$1;
(statearr_24394_24420[(1)] = (8));

} else {
var statearr_24395_24421 = state_24388__$1;
(statearr_24395_24421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (3))){
var inst_24386 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24388__$1,inst_24386);
} else {
if((state_val_24389 === (12))){
var state_24388__$1 = state_24388;
var statearr_24396_24422 = state_24388__$1;
(statearr_24396_24422[(2)] = null);

(statearr_24396_24422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (2))){
var inst_24365 = (state_24388[(7)]);
var state_24388__$1 = state_24388;
if(cljs.core.truth_(inst_24365)){
var statearr_24397_24423 = state_24388__$1;
(statearr_24397_24423[(1)] = (4));

} else {
var statearr_24398_24424 = state_24388__$1;
(statearr_24398_24424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (11))){
var inst_24379 = cljs.core.async.close_BANG_.call(null,ch);
var state_24388__$1 = state_24388;
var statearr_24399_24425 = state_24388__$1;
(statearr_24399_24425[(2)] = inst_24379);

(statearr_24399_24425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (9))){
var state_24388__$1 = state_24388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24400_24426 = state_24388__$1;
(statearr_24400_24426[(1)] = (11));

} else {
var statearr_24401_24427 = state_24388__$1;
(statearr_24401_24427[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (5))){
var inst_24365 = (state_24388[(7)]);
var state_24388__$1 = state_24388;
var statearr_24402_24428 = state_24388__$1;
(statearr_24402_24428[(2)] = inst_24365);

(statearr_24402_24428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (10))){
var inst_24384 = (state_24388[(2)]);
var state_24388__$1 = state_24388;
var statearr_24403_24429 = state_24388__$1;
(statearr_24403_24429[(2)] = inst_24384);

(statearr_24403_24429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24389 === (8))){
var inst_24365 = (state_24388[(7)]);
var inst_24375 = cljs.core.next.call(null,inst_24365);
var inst_24365__$1 = inst_24375;
var state_24388__$1 = (function (){var statearr_24404 = state_24388;
(statearr_24404[(7)] = inst_24365__$1);

return statearr_24404;
})();
var statearr_24405_24430 = state_24388__$1;
(statearr_24405_24430[(2)] = null);

(statearr_24405_24430[(1)] = (2));


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
});})(c__23568__auto__))
;
return ((function (switch__23456__auto__,c__23568__auto__){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_24409 = [null,null,null,null,null,null,null,null];
(statearr_24409[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_24409[(1)] = (1));

return statearr_24409;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_24388){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_24388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e24410){if((e24410 instanceof Object)){
var ex__23460__auto__ = e24410;
var statearr_24411_24431 = state_24388;
(statearr_24411_24431[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24432 = state_24388;
state_24388 = G__24432;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_24388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_24388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__))
})();
var state__23570__auto__ = (function (){var statearr_24412 = f__23569__auto__.call(null);
(statearr_24412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_24412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__))
);

return c__23568__auto__;
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
var x__19108__auto__ = (((_ == null))?null:_);
var m__19109__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,_);
} else {
var m__19109__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,_);
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
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19109__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,ch);
} else {
var m__19109__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,ch);
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
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m);
} else {
var m__19109__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async24654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24654 = (function (mult,ch,cs,meta24655){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24655 = meta24655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24656,meta24655__$1){
var self__ = this;
var _24656__$1 = this;
return (new cljs.core.async.t_cljs$core$async24654(self__.mult,self__.ch,self__.cs,meta24655__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24656){
var self__ = this;
var _24656__$1 = this;
return self__.meta24655;
});})(cs))
;

cljs.core.async.t_cljs$core$async24654.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24654.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24654.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24654.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24654.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24654.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24655","meta24655",-12267796,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24654";

cljs.core.async.t_cljs$core$async24654.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async24654");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24654 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24654(mult__$1,ch__$1,cs__$1,meta24655){
return (new cljs.core.async.t_cljs$core$async24654(mult__$1,ch__$1,cs__$1,meta24655));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24654(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23568__auto___24875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___24875,cs,m,dchan,dctr,done){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___24875,cs,m,dchan,dctr,done){
return (function (state_24787){
var state_val_24788 = (state_24787[(1)]);
if((state_val_24788 === (7))){
var inst_24783 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24789_24876 = state_24787__$1;
(statearr_24789_24876[(2)] = inst_24783);

(statearr_24789_24876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (20))){
var inst_24688 = (state_24787[(7)]);
var inst_24698 = cljs.core.first.call(null,inst_24688);
var inst_24699 = cljs.core.nth.call(null,inst_24698,(0),null);
var inst_24700 = cljs.core.nth.call(null,inst_24698,(1),null);
var state_24787__$1 = (function (){var statearr_24790 = state_24787;
(statearr_24790[(8)] = inst_24699);

return statearr_24790;
})();
if(cljs.core.truth_(inst_24700)){
var statearr_24791_24877 = state_24787__$1;
(statearr_24791_24877[(1)] = (22));

} else {
var statearr_24792_24878 = state_24787__$1;
(statearr_24792_24878[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (27))){
var inst_24659 = (state_24787[(9)]);
var inst_24735 = (state_24787[(10)]);
var inst_24728 = (state_24787[(11)]);
var inst_24730 = (state_24787[(12)]);
var inst_24735__$1 = cljs.core._nth.call(null,inst_24728,inst_24730);
var inst_24736 = cljs.core.async.put_BANG_.call(null,inst_24735__$1,inst_24659,done);
var state_24787__$1 = (function (){var statearr_24793 = state_24787;
(statearr_24793[(10)] = inst_24735__$1);

return statearr_24793;
})();
if(cljs.core.truth_(inst_24736)){
var statearr_24794_24879 = state_24787__$1;
(statearr_24794_24879[(1)] = (30));

} else {
var statearr_24795_24880 = state_24787__$1;
(statearr_24795_24880[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (1))){
var state_24787__$1 = state_24787;
var statearr_24796_24881 = state_24787__$1;
(statearr_24796_24881[(2)] = null);

(statearr_24796_24881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (24))){
var inst_24688 = (state_24787[(7)]);
var inst_24705 = (state_24787[(2)]);
var inst_24706 = cljs.core.next.call(null,inst_24688);
var inst_24668 = inst_24706;
var inst_24669 = null;
var inst_24670 = (0);
var inst_24671 = (0);
var state_24787__$1 = (function (){var statearr_24797 = state_24787;
(statearr_24797[(13)] = inst_24671);

(statearr_24797[(14)] = inst_24705);

(statearr_24797[(15)] = inst_24670);

(statearr_24797[(16)] = inst_24668);

(statearr_24797[(17)] = inst_24669);

return statearr_24797;
})();
var statearr_24798_24882 = state_24787__$1;
(statearr_24798_24882[(2)] = null);

(statearr_24798_24882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (39))){
var state_24787__$1 = state_24787;
var statearr_24802_24883 = state_24787__$1;
(statearr_24802_24883[(2)] = null);

(statearr_24802_24883[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (4))){
var inst_24659 = (state_24787[(9)]);
var inst_24659__$1 = (state_24787[(2)]);
var inst_24660 = (inst_24659__$1 == null);
var state_24787__$1 = (function (){var statearr_24803 = state_24787;
(statearr_24803[(9)] = inst_24659__$1);

return statearr_24803;
})();
if(cljs.core.truth_(inst_24660)){
var statearr_24804_24884 = state_24787__$1;
(statearr_24804_24884[(1)] = (5));

} else {
var statearr_24805_24885 = state_24787__$1;
(statearr_24805_24885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (15))){
var inst_24671 = (state_24787[(13)]);
var inst_24670 = (state_24787[(15)]);
var inst_24668 = (state_24787[(16)]);
var inst_24669 = (state_24787[(17)]);
var inst_24684 = (state_24787[(2)]);
var inst_24685 = (inst_24671 + (1));
var tmp24799 = inst_24670;
var tmp24800 = inst_24668;
var tmp24801 = inst_24669;
var inst_24668__$1 = tmp24800;
var inst_24669__$1 = tmp24801;
var inst_24670__$1 = tmp24799;
var inst_24671__$1 = inst_24685;
var state_24787__$1 = (function (){var statearr_24806 = state_24787;
(statearr_24806[(13)] = inst_24671__$1);

(statearr_24806[(15)] = inst_24670__$1);

(statearr_24806[(16)] = inst_24668__$1);

(statearr_24806[(18)] = inst_24684);

(statearr_24806[(17)] = inst_24669__$1);

return statearr_24806;
})();
var statearr_24807_24886 = state_24787__$1;
(statearr_24807_24886[(2)] = null);

(statearr_24807_24886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (21))){
var inst_24709 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24811_24887 = state_24787__$1;
(statearr_24811_24887[(2)] = inst_24709);

(statearr_24811_24887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (31))){
var inst_24735 = (state_24787[(10)]);
var inst_24739 = done.call(null,null);
var inst_24740 = cljs.core.async.untap_STAR_.call(null,m,inst_24735);
var state_24787__$1 = (function (){var statearr_24812 = state_24787;
(statearr_24812[(19)] = inst_24739);

return statearr_24812;
})();
var statearr_24813_24888 = state_24787__$1;
(statearr_24813_24888[(2)] = inst_24740);

(statearr_24813_24888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (32))){
var inst_24728 = (state_24787[(11)]);
var inst_24727 = (state_24787[(20)]);
var inst_24730 = (state_24787[(12)]);
var inst_24729 = (state_24787[(21)]);
var inst_24742 = (state_24787[(2)]);
var inst_24743 = (inst_24730 + (1));
var tmp24808 = inst_24728;
var tmp24809 = inst_24727;
var tmp24810 = inst_24729;
var inst_24727__$1 = tmp24809;
var inst_24728__$1 = tmp24808;
var inst_24729__$1 = tmp24810;
var inst_24730__$1 = inst_24743;
var state_24787__$1 = (function (){var statearr_24814 = state_24787;
(statearr_24814[(22)] = inst_24742);

(statearr_24814[(11)] = inst_24728__$1);

(statearr_24814[(20)] = inst_24727__$1);

(statearr_24814[(12)] = inst_24730__$1);

(statearr_24814[(21)] = inst_24729__$1);

return statearr_24814;
})();
var statearr_24815_24889 = state_24787__$1;
(statearr_24815_24889[(2)] = null);

(statearr_24815_24889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (40))){
var inst_24755 = (state_24787[(23)]);
var inst_24759 = done.call(null,null);
var inst_24760 = cljs.core.async.untap_STAR_.call(null,m,inst_24755);
var state_24787__$1 = (function (){var statearr_24816 = state_24787;
(statearr_24816[(24)] = inst_24759);

return statearr_24816;
})();
var statearr_24817_24890 = state_24787__$1;
(statearr_24817_24890[(2)] = inst_24760);

(statearr_24817_24890[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (33))){
var inst_24746 = (state_24787[(25)]);
var inst_24748 = cljs.core.chunked_seq_QMARK_.call(null,inst_24746);
var state_24787__$1 = state_24787;
if(inst_24748){
var statearr_24818_24891 = state_24787__$1;
(statearr_24818_24891[(1)] = (36));

} else {
var statearr_24819_24892 = state_24787__$1;
(statearr_24819_24892[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (13))){
var inst_24678 = (state_24787[(26)]);
var inst_24681 = cljs.core.async.close_BANG_.call(null,inst_24678);
var state_24787__$1 = state_24787;
var statearr_24820_24893 = state_24787__$1;
(statearr_24820_24893[(2)] = inst_24681);

(statearr_24820_24893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (22))){
var inst_24699 = (state_24787[(8)]);
var inst_24702 = cljs.core.async.close_BANG_.call(null,inst_24699);
var state_24787__$1 = state_24787;
var statearr_24821_24894 = state_24787__$1;
(statearr_24821_24894[(2)] = inst_24702);

(statearr_24821_24894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (36))){
var inst_24746 = (state_24787[(25)]);
var inst_24750 = cljs.core.chunk_first.call(null,inst_24746);
var inst_24751 = cljs.core.chunk_rest.call(null,inst_24746);
var inst_24752 = cljs.core.count.call(null,inst_24750);
var inst_24727 = inst_24751;
var inst_24728 = inst_24750;
var inst_24729 = inst_24752;
var inst_24730 = (0);
var state_24787__$1 = (function (){var statearr_24822 = state_24787;
(statearr_24822[(11)] = inst_24728);

(statearr_24822[(20)] = inst_24727);

(statearr_24822[(12)] = inst_24730);

(statearr_24822[(21)] = inst_24729);

return statearr_24822;
})();
var statearr_24823_24895 = state_24787__$1;
(statearr_24823_24895[(2)] = null);

(statearr_24823_24895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (41))){
var inst_24746 = (state_24787[(25)]);
var inst_24762 = (state_24787[(2)]);
var inst_24763 = cljs.core.next.call(null,inst_24746);
var inst_24727 = inst_24763;
var inst_24728 = null;
var inst_24729 = (0);
var inst_24730 = (0);
var state_24787__$1 = (function (){var statearr_24824 = state_24787;
(statearr_24824[(27)] = inst_24762);

(statearr_24824[(11)] = inst_24728);

(statearr_24824[(20)] = inst_24727);

(statearr_24824[(12)] = inst_24730);

(statearr_24824[(21)] = inst_24729);

return statearr_24824;
})();
var statearr_24825_24896 = state_24787__$1;
(statearr_24825_24896[(2)] = null);

(statearr_24825_24896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (43))){
var state_24787__$1 = state_24787;
var statearr_24826_24897 = state_24787__$1;
(statearr_24826_24897[(2)] = null);

(statearr_24826_24897[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (29))){
var inst_24771 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24827_24898 = state_24787__$1;
(statearr_24827_24898[(2)] = inst_24771);

(statearr_24827_24898[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (44))){
var inst_24780 = (state_24787[(2)]);
var state_24787__$1 = (function (){var statearr_24828 = state_24787;
(statearr_24828[(28)] = inst_24780);

return statearr_24828;
})();
var statearr_24829_24899 = state_24787__$1;
(statearr_24829_24899[(2)] = null);

(statearr_24829_24899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (6))){
var inst_24719 = (state_24787[(29)]);
var inst_24718 = cljs.core.deref.call(null,cs);
var inst_24719__$1 = cljs.core.keys.call(null,inst_24718);
var inst_24720 = cljs.core.count.call(null,inst_24719__$1);
var inst_24721 = cljs.core.reset_BANG_.call(null,dctr,inst_24720);
var inst_24726 = cljs.core.seq.call(null,inst_24719__$1);
var inst_24727 = inst_24726;
var inst_24728 = null;
var inst_24729 = (0);
var inst_24730 = (0);
var state_24787__$1 = (function (){var statearr_24830 = state_24787;
(statearr_24830[(30)] = inst_24721);

(statearr_24830[(11)] = inst_24728);

(statearr_24830[(20)] = inst_24727);

(statearr_24830[(12)] = inst_24730);

(statearr_24830[(21)] = inst_24729);

(statearr_24830[(29)] = inst_24719__$1);

return statearr_24830;
})();
var statearr_24831_24900 = state_24787__$1;
(statearr_24831_24900[(2)] = null);

(statearr_24831_24900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (28))){
var inst_24746 = (state_24787[(25)]);
var inst_24727 = (state_24787[(20)]);
var inst_24746__$1 = cljs.core.seq.call(null,inst_24727);
var state_24787__$1 = (function (){var statearr_24832 = state_24787;
(statearr_24832[(25)] = inst_24746__$1);

return statearr_24832;
})();
if(inst_24746__$1){
var statearr_24833_24901 = state_24787__$1;
(statearr_24833_24901[(1)] = (33));

} else {
var statearr_24834_24902 = state_24787__$1;
(statearr_24834_24902[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (25))){
var inst_24730 = (state_24787[(12)]);
var inst_24729 = (state_24787[(21)]);
var inst_24732 = (inst_24730 < inst_24729);
var inst_24733 = inst_24732;
var state_24787__$1 = state_24787;
if(cljs.core.truth_(inst_24733)){
var statearr_24835_24903 = state_24787__$1;
(statearr_24835_24903[(1)] = (27));

} else {
var statearr_24836_24904 = state_24787__$1;
(statearr_24836_24904[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (34))){
var state_24787__$1 = state_24787;
var statearr_24837_24905 = state_24787__$1;
(statearr_24837_24905[(2)] = null);

(statearr_24837_24905[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (17))){
var state_24787__$1 = state_24787;
var statearr_24838_24906 = state_24787__$1;
(statearr_24838_24906[(2)] = null);

(statearr_24838_24906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (3))){
var inst_24785 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24787__$1,inst_24785);
} else {
if((state_val_24788 === (12))){
var inst_24714 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24839_24907 = state_24787__$1;
(statearr_24839_24907[(2)] = inst_24714);

(statearr_24839_24907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (2))){
var state_24787__$1 = state_24787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24787__$1,(4),ch);
} else {
if((state_val_24788 === (23))){
var state_24787__$1 = state_24787;
var statearr_24840_24908 = state_24787__$1;
(statearr_24840_24908[(2)] = null);

(statearr_24840_24908[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (35))){
var inst_24769 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24841_24909 = state_24787__$1;
(statearr_24841_24909[(2)] = inst_24769);

(statearr_24841_24909[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (19))){
var inst_24688 = (state_24787[(7)]);
var inst_24692 = cljs.core.chunk_first.call(null,inst_24688);
var inst_24693 = cljs.core.chunk_rest.call(null,inst_24688);
var inst_24694 = cljs.core.count.call(null,inst_24692);
var inst_24668 = inst_24693;
var inst_24669 = inst_24692;
var inst_24670 = inst_24694;
var inst_24671 = (0);
var state_24787__$1 = (function (){var statearr_24842 = state_24787;
(statearr_24842[(13)] = inst_24671);

(statearr_24842[(15)] = inst_24670);

(statearr_24842[(16)] = inst_24668);

(statearr_24842[(17)] = inst_24669);

return statearr_24842;
})();
var statearr_24843_24910 = state_24787__$1;
(statearr_24843_24910[(2)] = null);

(statearr_24843_24910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (11))){
var inst_24688 = (state_24787[(7)]);
var inst_24668 = (state_24787[(16)]);
var inst_24688__$1 = cljs.core.seq.call(null,inst_24668);
var state_24787__$1 = (function (){var statearr_24844 = state_24787;
(statearr_24844[(7)] = inst_24688__$1);

return statearr_24844;
})();
if(inst_24688__$1){
var statearr_24845_24911 = state_24787__$1;
(statearr_24845_24911[(1)] = (16));

} else {
var statearr_24846_24912 = state_24787__$1;
(statearr_24846_24912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (9))){
var inst_24716 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24847_24913 = state_24787__$1;
(statearr_24847_24913[(2)] = inst_24716);

(statearr_24847_24913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (5))){
var inst_24666 = cljs.core.deref.call(null,cs);
var inst_24667 = cljs.core.seq.call(null,inst_24666);
var inst_24668 = inst_24667;
var inst_24669 = null;
var inst_24670 = (0);
var inst_24671 = (0);
var state_24787__$1 = (function (){var statearr_24848 = state_24787;
(statearr_24848[(13)] = inst_24671);

(statearr_24848[(15)] = inst_24670);

(statearr_24848[(16)] = inst_24668);

(statearr_24848[(17)] = inst_24669);

return statearr_24848;
})();
var statearr_24849_24914 = state_24787__$1;
(statearr_24849_24914[(2)] = null);

(statearr_24849_24914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (14))){
var state_24787__$1 = state_24787;
var statearr_24850_24915 = state_24787__$1;
(statearr_24850_24915[(2)] = null);

(statearr_24850_24915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (45))){
var inst_24777 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24851_24916 = state_24787__$1;
(statearr_24851_24916[(2)] = inst_24777);

(statearr_24851_24916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (26))){
var inst_24719 = (state_24787[(29)]);
var inst_24773 = (state_24787[(2)]);
var inst_24774 = cljs.core.seq.call(null,inst_24719);
var state_24787__$1 = (function (){var statearr_24852 = state_24787;
(statearr_24852[(31)] = inst_24773);

return statearr_24852;
})();
if(inst_24774){
var statearr_24853_24917 = state_24787__$1;
(statearr_24853_24917[(1)] = (42));

} else {
var statearr_24854_24918 = state_24787__$1;
(statearr_24854_24918[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (16))){
var inst_24688 = (state_24787[(7)]);
var inst_24690 = cljs.core.chunked_seq_QMARK_.call(null,inst_24688);
var state_24787__$1 = state_24787;
if(inst_24690){
var statearr_24855_24919 = state_24787__$1;
(statearr_24855_24919[(1)] = (19));

} else {
var statearr_24856_24920 = state_24787__$1;
(statearr_24856_24920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (38))){
var inst_24766 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24857_24921 = state_24787__$1;
(statearr_24857_24921[(2)] = inst_24766);

(statearr_24857_24921[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (30))){
var state_24787__$1 = state_24787;
var statearr_24858_24922 = state_24787__$1;
(statearr_24858_24922[(2)] = null);

(statearr_24858_24922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (10))){
var inst_24671 = (state_24787[(13)]);
var inst_24669 = (state_24787[(17)]);
var inst_24677 = cljs.core._nth.call(null,inst_24669,inst_24671);
var inst_24678 = cljs.core.nth.call(null,inst_24677,(0),null);
var inst_24679 = cljs.core.nth.call(null,inst_24677,(1),null);
var state_24787__$1 = (function (){var statearr_24859 = state_24787;
(statearr_24859[(26)] = inst_24678);

return statearr_24859;
})();
if(cljs.core.truth_(inst_24679)){
var statearr_24860_24923 = state_24787__$1;
(statearr_24860_24923[(1)] = (13));

} else {
var statearr_24861_24924 = state_24787__$1;
(statearr_24861_24924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (18))){
var inst_24712 = (state_24787[(2)]);
var state_24787__$1 = state_24787;
var statearr_24862_24925 = state_24787__$1;
(statearr_24862_24925[(2)] = inst_24712);

(statearr_24862_24925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (42))){
var state_24787__$1 = state_24787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24787__$1,(45),dchan);
} else {
if((state_val_24788 === (37))){
var inst_24659 = (state_24787[(9)]);
var inst_24746 = (state_24787[(25)]);
var inst_24755 = (state_24787[(23)]);
var inst_24755__$1 = cljs.core.first.call(null,inst_24746);
var inst_24756 = cljs.core.async.put_BANG_.call(null,inst_24755__$1,inst_24659,done);
var state_24787__$1 = (function (){var statearr_24863 = state_24787;
(statearr_24863[(23)] = inst_24755__$1);

return statearr_24863;
})();
if(cljs.core.truth_(inst_24756)){
var statearr_24864_24926 = state_24787__$1;
(statearr_24864_24926[(1)] = (39));

} else {
var statearr_24865_24927 = state_24787__$1;
(statearr_24865_24927[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24788 === (8))){
var inst_24671 = (state_24787[(13)]);
var inst_24670 = (state_24787[(15)]);
var inst_24673 = (inst_24671 < inst_24670);
var inst_24674 = inst_24673;
var state_24787__$1 = state_24787;
if(cljs.core.truth_(inst_24674)){
var statearr_24866_24928 = state_24787__$1;
(statearr_24866_24928[(1)] = (10));

} else {
var statearr_24867_24929 = state_24787__$1;
(statearr_24867_24929[(1)] = (11));

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
});})(c__23568__auto___24875,cs,m,dchan,dctr,done))
;
return ((function (switch__23456__auto__,c__23568__auto___24875,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23457__auto__ = null;
var cljs$core$async$mult_$_state_machine__23457__auto____0 = (function (){
var statearr_24871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24871[(0)] = cljs$core$async$mult_$_state_machine__23457__auto__);

(statearr_24871[(1)] = (1));

return statearr_24871;
});
var cljs$core$async$mult_$_state_machine__23457__auto____1 = (function (state_24787){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_24787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e24872){if((e24872 instanceof Object)){
var ex__23460__auto__ = e24872;
var statearr_24873_24930 = state_24787;
(statearr_24873_24930[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24931 = state_24787;
state_24787 = G__24931;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23457__auto__ = function(state_24787){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23457__auto____1.call(this,state_24787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23457__auto____0;
cljs$core$async$mult_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23457__auto____1;
return cljs$core$async$mult_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___24875,cs,m,dchan,dctr,done))
})();
var state__23570__auto__ = (function (){var statearr_24874 = f__23569__auto__.call(null);
(statearr_24874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___24875);

return statearr_24874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___24875,cs,m,dchan,dctr,done))
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
var args24932 = [];
var len__19514__auto___24935 = arguments.length;
var i__19515__auto___24936 = (0);
while(true){
if((i__19515__auto___24936 < len__19514__auto___24935)){
args24932.push((arguments[i__19515__auto___24936]));

var G__24937 = (i__19515__auto___24936 + (1));
i__19515__auto___24936 = G__24937;
continue;
} else {
}
break;
}

var G__24934 = args24932.length;
switch (G__24934) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24932.length)].join('')));

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
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,ch);
} else {
var m__19109__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,ch);
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
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,ch);
} else {
var m__19109__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,ch);
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
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m);
} else {
var m__19109__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m);
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
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,state_map);
} else {
var m__19109__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,state_map);
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
var x__19108__auto__ = (((m == null))?null:m);
var m__19109__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,m,mode);
} else {
var m__19109__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19521__auto__ = [];
var len__19514__auto___24949 = arguments.length;
var i__19515__auto___24950 = (0);
while(true){
if((i__19515__auto___24950 < len__19514__auto___24949)){
args__19521__auto__.push((arguments[i__19515__auto___24950]));

var G__24951 = (i__19515__auto___24950 + (1));
i__19515__auto___24950 = G__24951;
continue;
} else {
}
break;
}

var argseq__19522__auto__ = ((((3) < args__19521__auto__.length))?(new cljs.core.IndexedSeq(args__19521__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19522__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24943){
var map__24944 = p__24943;
var map__24944__$1 = ((((!((map__24944 == null)))?((((map__24944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24944):map__24944);
var opts = map__24944__$1;
var statearr_24946_24952 = state;
(statearr_24946_24952[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24944,map__24944__$1,opts){
return (function (val){
var statearr_24947_24953 = state;
(statearr_24947_24953[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24944,map__24944__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24948_24954 = state;
(statearr_24948_24954[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24939){
var G__24940 = cljs.core.first.call(null,seq24939);
var seq24939__$1 = cljs.core.next.call(null,seq24939);
var G__24941 = cljs.core.first.call(null,seq24939__$1);
var seq24939__$2 = cljs.core.next.call(null,seq24939__$1);
var G__24942 = cljs.core.first.call(null,seq24939__$2);
var seq24939__$3 = cljs.core.next.call(null,seq24939__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24940,G__24941,G__24942,seq24939__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25118 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25119){
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
this.meta25119 = meta25119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25120,meta25119__$1){
var self__ = this;
var _25120__$1 = this;
return (new cljs.core.async.t_cljs$core$async25118(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25119__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25120){
var self__ = this;
var _25120__$1 = this;
return self__.meta25119;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25118.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25118.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25119","meta25119",1234265872,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25118";

cljs.core.async.t_cljs$core$async25118.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async25118");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25118 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25118(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25119){
return (new cljs.core.async.t_cljs$core$async25118(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25119));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25118(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23568__auto___25281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___25281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___25281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25218){
var state_val_25219 = (state_25218[(1)]);
if((state_val_25219 === (7))){
var inst_25136 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25220_25282 = state_25218__$1;
(statearr_25220_25282[(2)] = inst_25136);

(statearr_25220_25282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (20))){
var inst_25148 = (state_25218[(7)]);
var state_25218__$1 = state_25218;
var statearr_25221_25283 = state_25218__$1;
(statearr_25221_25283[(2)] = inst_25148);

(statearr_25221_25283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (27))){
var state_25218__$1 = state_25218;
var statearr_25222_25284 = state_25218__$1;
(statearr_25222_25284[(2)] = null);

(statearr_25222_25284[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (1))){
var inst_25124 = (state_25218[(8)]);
var inst_25124__$1 = calc_state.call(null);
var inst_25126 = (inst_25124__$1 == null);
var inst_25127 = cljs.core.not.call(null,inst_25126);
var state_25218__$1 = (function (){var statearr_25223 = state_25218;
(statearr_25223[(8)] = inst_25124__$1);

return statearr_25223;
})();
if(inst_25127){
var statearr_25224_25285 = state_25218__$1;
(statearr_25224_25285[(1)] = (2));

} else {
var statearr_25225_25286 = state_25218__$1;
(statearr_25225_25286[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (24))){
var inst_25171 = (state_25218[(9)]);
var inst_25192 = (state_25218[(10)]);
var inst_25178 = (state_25218[(11)]);
var inst_25192__$1 = inst_25171.call(null,inst_25178);
var state_25218__$1 = (function (){var statearr_25226 = state_25218;
(statearr_25226[(10)] = inst_25192__$1);

return statearr_25226;
})();
if(cljs.core.truth_(inst_25192__$1)){
var statearr_25227_25287 = state_25218__$1;
(statearr_25227_25287[(1)] = (29));

} else {
var statearr_25228_25288 = state_25218__$1;
(statearr_25228_25288[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (4))){
var inst_25139 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25139)){
var statearr_25229_25289 = state_25218__$1;
(statearr_25229_25289[(1)] = (8));

} else {
var statearr_25230_25290 = state_25218__$1;
(statearr_25230_25290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (15))){
var inst_25165 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25165)){
var statearr_25231_25291 = state_25218__$1;
(statearr_25231_25291[(1)] = (19));

} else {
var statearr_25232_25292 = state_25218__$1;
(statearr_25232_25292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (21))){
var inst_25170 = (state_25218[(12)]);
var inst_25170__$1 = (state_25218[(2)]);
var inst_25171 = cljs.core.get.call(null,inst_25170__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25172 = cljs.core.get.call(null,inst_25170__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25173 = cljs.core.get.call(null,inst_25170__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25218__$1 = (function (){var statearr_25233 = state_25218;
(statearr_25233[(9)] = inst_25171);

(statearr_25233[(13)] = inst_25172);

(statearr_25233[(12)] = inst_25170__$1);

return statearr_25233;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25218__$1,(22),inst_25173);
} else {
if((state_val_25219 === (31))){
var inst_25200 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25200)){
var statearr_25234_25293 = state_25218__$1;
(statearr_25234_25293[(1)] = (32));

} else {
var statearr_25235_25294 = state_25218__$1;
(statearr_25235_25294[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (32))){
var inst_25177 = (state_25218[(14)]);
var state_25218__$1 = state_25218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25218__$1,(35),out,inst_25177);
} else {
if((state_val_25219 === (33))){
var inst_25170 = (state_25218[(12)]);
var inst_25148 = inst_25170;
var state_25218__$1 = (function (){var statearr_25236 = state_25218;
(statearr_25236[(7)] = inst_25148);

return statearr_25236;
})();
var statearr_25237_25295 = state_25218__$1;
(statearr_25237_25295[(2)] = null);

(statearr_25237_25295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (13))){
var inst_25148 = (state_25218[(7)]);
var inst_25155 = inst_25148.cljs$lang$protocol_mask$partition0$;
var inst_25156 = (inst_25155 & (64));
var inst_25157 = inst_25148.cljs$core$ISeq$;
var inst_25158 = (inst_25156) || (inst_25157);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25158)){
var statearr_25238_25296 = state_25218__$1;
(statearr_25238_25296[(1)] = (16));

} else {
var statearr_25239_25297 = state_25218__$1;
(statearr_25239_25297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (22))){
var inst_25178 = (state_25218[(11)]);
var inst_25177 = (state_25218[(14)]);
var inst_25176 = (state_25218[(2)]);
var inst_25177__$1 = cljs.core.nth.call(null,inst_25176,(0),null);
var inst_25178__$1 = cljs.core.nth.call(null,inst_25176,(1),null);
var inst_25179 = (inst_25177__$1 == null);
var inst_25180 = cljs.core._EQ_.call(null,inst_25178__$1,change);
var inst_25181 = (inst_25179) || (inst_25180);
var state_25218__$1 = (function (){var statearr_25240 = state_25218;
(statearr_25240[(11)] = inst_25178__$1);

(statearr_25240[(14)] = inst_25177__$1);

return statearr_25240;
})();
if(cljs.core.truth_(inst_25181)){
var statearr_25241_25298 = state_25218__$1;
(statearr_25241_25298[(1)] = (23));

} else {
var statearr_25242_25299 = state_25218__$1;
(statearr_25242_25299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (36))){
var inst_25170 = (state_25218[(12)]);
var inst_25148 = inst_25170;
var state_25218__$1 = (function (){var statearr_25243 = state_25218;
(statearr_25243[(7)] = inst_25148);

return statearr_25243;
})();
var statearr_25244_25300 = state_25218__$1;
(statearr_25244_25300[(2)] = null);

(statearr_25244_25300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (29))){
var inst_25192 = (state_25218[(10)]);
var state_25218__$1 = state_25218;
var statearr_25245_25301 = state_25218__$1;
(statearr_25245_25301[(2)] = inst_25192);

(statearr_25245_25301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (6))){
var state_25218__$1 = state_25218;
var statearr_25246_25302 = state_25218__$1;
(statearr_25246_25302[(2)] = false);

(statearr_25246_25302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (28))){
var inst_25188 = (state_25218[(2)]);
var inst_25189 = calc_state.call(null);
var inst_25148 = inst_25189;
var state_25218__$1 = (function (){var statearr_25247 = state_25218;
(statearr_25247[(15)] = inst_25188);

(statearr_25247[(7)] = inst_25148);

return statearr_25247;
})();
var statearr_25248_25303 = state_25218__$1;
(statearr_25248_25303[(2)] = null);

(statearr_25248_25303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (25))){
var inst_25214 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25249_25304 = state_25218__$1;
(statearr_25249_25304[(2)] = inst_25214);

(statearr_25249_25304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (34))){
var inst_25212 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25250_25305 = state_25218__$1;
(statearr_25250_25305[(2)] = inst_25212);

(statearr_25250_25305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (17))){
var state_25218__$1 = state_25218;
var statearr_25251_25306 = state_25218__$1;
(statearr_25251_25306[(2)] = false);

(statearr_25251_25306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (3))){
var state_25218__$1 = state_25218;
var statearr_25252_25307 = state_25218__$1;
(statearr_25252_25307[(2)] = false);

(statearr_25252_25307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (12))){
var inst_25216 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25218__$1,inst_25216);
} else {
if((state_val_25219 === (2))){
var inst_25124 = (state_25218[(8)]);
var inst_25129 = inst_25124.cljs$lang$protocol_mask$partition0$;
var inst_25130 = (inst_25129 & (64));
var inst_25131 = inst_25124.cljs$core$ISeq$;
var inst_25132 = (inst_25130) || (inst_25131);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25132)){
var statearr_25253_25308 = state_25218__$1;
(statearr_25253_25308[(1)] = (5));

} else {
var statearr_25254_25309 = state_25218__$1;
(statearr_25254_25309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (23))){
var inst_25177 = (state_25218[(14)]);
var inst_25183 = (inst_25177 == null);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25183)){
var statearr_25255_25310 = state_25218__$1;
(statearr_25255_25310[(1)] = (26));

} else {
var statearr_25256_25311 = state_25218__$1;
(statearr_25256_25311[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (35))){
var inst_25203 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
if(cljs.core.truth_(inst_25203)){
var statearr_25257_25312 = state_25218__$1;
(statearr_25257_25312[(1)] = (36));

} else {
var statearr_25258_25313 = state_25218__$1;
(statearr_25258_25313[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (19))){
var inst_25148 = (state_25218[(7)]);
var inst_25167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25148);
var state_25218__$1 = state_25218;
var statearr_25259_25314 = state_25218__$1;
(statearr_25259_25314[(2)] = inst_25167);

(statearr_25259_25314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (11))){
var inst_25148 = (state_25218[(7)]);
var inst_25152 = (inst_25148 == null);
var inst_25153 = cljs.core.not.call(null,inst_25152);
var state_25218__$1 = state_25218;
if(inst_25153){
var statearr_25260_25315 = state_25218__$1;
(statearr_25260_25315[(1)] = (13));

} else {
var statearr_25261_25316 = state_25218__$1;
(statearr_25261_25316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (9))){
var inst_25124 = (state_25218[(8)]);
var state_25218__$1 = state_25218;
var statearr_25262_25317 = state_25218__$1;
(statearr_25262_25317[(2)] = inst_25124);

(statearr_25262_25317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (5))){
var state_25218__$1 = state_25218;
var statearr_25263_25318 = state_25218__$1;
(statearr_25263_25318[(2)] = true);

(statearr_25263_25318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (14))){
var state_25218__$1 = state_25218;
var statearr_25264_25319 = state_25218__$1;
(statearr_25264_25319[(2)] = false);

(statearr_25264_25319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (26))){
var inst_25178 = (state_25218[(11)]);
var inst_25185 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25178);
var state_25218__$1 = state_25218;
var statearr_25265_25320 = state_25218__$1;
(statearr_25265_25320[(2)] = inst_25185);

(statearr_25265_25320[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (16))){
var state_25218__$1 = state_25218;
var statearr_25266_25321 = state_25218__$1;
(statearr_25266_25321[(2)] = true);

(statearr_25266_25321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (38))){
var inst_25208 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25267_25322 = state_25218__$1;
(statearr_25267_25322[(2)] = inst_25208);

(statearr_25267_25322[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (30))){
var inst_25171 = (state_25218[(9)]);
var inst_25178 = (state_25218[(11)]);
var inst_25172 = (state_25218[(13)]);
var inst_25195 = cljs.core.empty_QMARK_.call(null,inst_25171);
var inst_25196 = inst_25172.call(null,inst_25178);
var inst_25197 = cljs.core.not.call(null,inst_25196);
var inst_25198 = (inst_25195) && (inst_25197);
var state_25218__$1 = state_25218;
var statearr_25268_25323 = state_25218__$1;
(statearr_25268_25323[(2)] = inst_25198);

(statearr_25268_25323[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (10))){
var inst_25124 = (state_25218[(8)]);
var inst_25144 = (state_25218[(2)]);
var inst_25145 = cljs.core.get.call(null,inst_25144,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25146 = cljs.core.get.call(null,inst_25144,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25147 = cljs.core.get.call(null,inst_25144,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25148 = inst_25124;
var state_25218__$1 = (function (){var statearr_25269 = state_25218;
(statearr_25269[(16)] = inst_25147);

(statearr_25269[(17)] = inst_25146);

(statearr_25269[(7)] = inst_25148);

(statearr_25269[(18)] = inst_25145);

return statearr_25269;
})();
var statearr_25270_25324 = state_25218__$1;
(statearr_25270_25324[(2)] = null);

(statearr_25270_25324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (18))){
var inst_25162 = (state_25218[(2)]);
var state_25218__$1 = state_25218;
var statearr_25271_25325 = state_25218__$1;
(statearr_25271_25325[(2)] = inst_25162);

(statearr_25271_25325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (37))){
var state_25218__$1 = state_25218;
var statearr_25272_25326 = state_25218__$1;
(statearr_25272_25326[(2)] = null);

(statearr_25272_25326[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25219 === (8))){
var inst_25124 = (state_25218[(8)]);
var inst_25141 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25124);
var state_25218__$1 = state_25218;
var statearr_25273_25327 = state_25218__$1;
(statearr_25273_25327[(2)] = inst_25141);

(statearr_25273_25327[(1)] = (10));


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
});})(c__23568__auto___25281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23456__auto__,c__23568__auto___25281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23457__auto__ = null;
var cljs$core$async$mix_$_state_machine__23457__auto____0 = (function (){
var statearr_25277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25277[(0)] = cljs$core$async$mix_$_state_machine__23457__auto__);

(statearr_25277[(1)] = (1));

return statearr_25277;
});
var cljs$core$async$mix_$_state_machine__23457__auto____1 = (function (state_25218){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_25218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e25278){if((e25278 instanceof Object)){
var ex__23460__auto__ = e25278;
var statearr_25279_25328 = state_25218;
(statearr_25279_25328[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25329 = state_25218;
state_25218 = G__25329;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23457__auto__ = function(state_25218){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23457__auto____1.call(this,state_25218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23457__auto____0;
cljs$core$async$mix_$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23457__auto____1;
return cljs$core$async$mix_$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___25281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23570__auto__ = (function (){var statearr_25280 = f__23569__auto__.call(null);
(statearr_25280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___25281);

return statearr_25280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___25281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19108__auto__ = (((p == null))?null:p);
var m__19109__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19109__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19108__auto__ = (((p == null))?null:p);
var m__19109__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,p,v,ch);
} else {
var m__19109__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25330 = [];
var len__19514__auto___25333 = arguments.length;
var i__19515__auto___25334 = (0);
while(true){
if((i__19515__auto___25334 < len__19514__auto___25333)){
args25330.push((arguments[i__19515__auto___25334]));

var G__25335 = (i__19515__auto___25334 + (1));
i__19515__auto___25334 = G__25335;
continue;
} else {
}
break;
}

var G__25332 = args25330.length;
switch (G__25332) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25330.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19108__auto__ = (((p == null))?null:p);
var m__19109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,p);
} else {
var m__19109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,p);
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
var x__19108__auto__ = (((p == null))?null:p);
var m__19109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19108__auto__)]);
if(!((m__19109__auto__ == null))){
return m__19109__auto__.call(null,p,v);
} else {
var m__19109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19109__auto____$1 == null))){
return m__19109__auto____$1.call(null,p,v);
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
var args25338 = [];
var len__19514__auto___25463 = arguments.length;
var i__19515__auto___25464 = (0);
while(true){
if((i__19515__auto___25464 < len__19514__auto___25463)){
args25338.push((arguments[i__19515__auto___25464]));

var G__25465 = (i__19515__auto___25464 + (1));
i__19515__auto___25464 = G__25465;
continue;
} else {
}
break;
}

var G__25340 = args25338.length;
switch (G__25340) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25338.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18445__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18445__auto__)){
return or__18445__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18445__auto__,mults){
return (function (p1__25337_SHARP_){
if(cljs.core.truth_(p1__25337_SHARP_.call(null,topic))){
return p1__25337_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25337_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18445__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25341 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25342){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25342 = meta25342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25343,meta25342__$1){
var self__ = this;
var _25343__$1 = this;
return (new cljs.core.async.t_cljs$core$async25341(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25342__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25343){
var self__ = this;
var _25343__$1 = this;
return self__.meta25342;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25341.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25341.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25342","meta25342",2095768921,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25341";

cljs.core.async.t_cljs$core$async25341.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async25341");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25341 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25341(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25342){
return (new cljs.core.async.t_cljs$core$async25341(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25342));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25341(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23568__auto___25467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___25467,mults,ensure_mult,p){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___25467,mults,ensure_mult,p){
return (function (state_25415){
var state_val_25416 = (state_25415[(1)]);
if((state_val_25416 === (7))){
var inst_25411 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25417_25468 = state_25415__$1;
(statearr_25417_25468[(2)] = inst_25411);

(statearr_25417_25468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (20))){
var state_25415__$1 = state_25415;
var statearr_25418_25469 = state_25415__$1;
(statearr_25418_25469[(2)] = null);

(statearr_25418_25469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (1))){
var state_25415__$1 = state_25415;
var statearr_25419_25470 = state_25415__$1;
(statearr_25419_25470[(2)] = null);

(statearr_25419_25470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (24))){
var inst_25394 = (state_25415[(7)]);
var inst_25403 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25394);
var state_25415__$1 = state_25415;
var statearr_25420_25471 = state_25415__$1;
(statearr_25420_25471[(2)] = inst_25403);

(statearr_25420_25471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (4))){
var inst_25346 = (state_25415[(8)]);
var inst_25346__$1 = (state_25415[(2)]);
var inst_25347 = (inst_25346__$1 == null);
var state_25415__$1 = (function (){var statearr_25421 = state_25415;
(statearr_25421[(8)] = inst_25346__$1);

return statearr_25421;
})();
if(cljs.core.truth_(inst_25347)){
var statearr_25422_25472 = state_25415__$1;
(statearr_25422_25472[(1)] = (5));

} else {
var statearr_25423_25473 = state_25415__$1;
(statearr_25423_25473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (15))){
var inst_25388 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25424_25474 = state_25415__$1;
(statearr_25424_25474[(2)] = inst_25388);

(statearr_25424_25474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (21))){
var inst_25408 = (state_25415[(2)]);
var state_25415__$1 = (function (){var statearr_25425 = state_25415;
(statearr_25425[(9)] = inst_25408);

return statearr_25425;
})();
var statearr_25426_25475 = state_25415__$1;
(statearr_25426_25475[(2)] = null);

(statearr_25426_25475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (13))){
var inst_25370 = (state_25415[(10)]);
var inst_25372 = cljs.core.chunked_seq_QMARK_.call(null,inst_25370);
var state_25415__$1 = state_25415;
if(inst_25372){
var statearr_25427_25476 = state_25415__$1;
(statearr_25427_25476[(1)] = (16));

} else {
var statearr_25428_25477 = state_25415__$1;
(statearr_25428_25477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (22))){
var inst_25400 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
if(cljs.core.truth_(inst_25400)){
var statearr_25429_25478 = state_25415__$1;
(statearr_25429_25478[(1)] = (23));

} else {
var statearr_25430_25479 = state_25415__$1;
(statearr_25430_25479[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (6))){
var inst_25396 = (state_25415[(11)]);
var inst_25394 = (state_25415[(7)]);
var inst_25346 = (state_25415[(8)]);
var inst_25394__$1 = topic_fn.call(null,inst_25346);
var inst_25395 = cljs.core.deref.call(null,mults);
var inst_25396__$1 = cljs.core.get.call(null,inst_25395,inst_25394__$1);
var state_25415__$1 = (function (){var statearr_25431 = state_25415;
(statearr_25431[(11)] = inst_25396__$1);

(statearr_25431[(7)] = inst_25394__$1);

return statearr_25431;
})();
if(cljs.core.truth_(inst_25396__$1)){
var statearr_25432_25480 = state_25415__$1;
(statearr_25432_25480[(1)] = (19));

} else {
var statearr_25433_25481 = state_25415__$1;
(statearr_25433_25481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (25))){
var inst_25405 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25434_25482 = state_25415__$1;
(statearr_25434_25482[(2)] = inst_25405);

(statearr_25434_25482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (17))){
var inst_25370 = (state_25415[(10)]);
var inst_25379 = cljs.core.first.call(null,inst_25370);
var inst_25380 = cljs.core.async.muxch_STAR_.call(null,inst_25379);
var inst_25381 = cljs.core.async.close_BANG_.call(null,inst_25380);
var inst_25382 = cljs.core.next.call(null,inst_25370);
var inst_25356 = inst_25382;
var inst_25357 = null;
var inst_25358 = (0);
var inst_25359 = (0);
var state_25415__$1 = (function (){var statearr_25435 = state_25415;
(statearr_25435[(12)] = inst_25356);

(statearr_25435[(13)] = inst_25357);

(statearr_25435[(14)] = inst_25358);

(statearr_25435[(15)] = inst_25381);

(statearr_25435[(16)] = inst_25359);

return statearr_25435;
})();
var statearr_25436_25483 = state_25415__$1;
(statearr_25436_25483[(2)] = null);

(statearr_25436_25483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (3))){
var inst_25413 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25415__$1,inst_25413);
} else {
if((state_val_25416 === (12))){
var inst_25390 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25437_25484 = state_25415__$1;
(statearr_25437_25484[(2)] = inst_25390);

(statearr_25437_25484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (2))){
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25415__$1,(4),ch);
} else {
if((state_val_25416 === (23))){
var state_25415__$1 = state_25415;
var statearr_25438_25485 = state_25415__$1;
(statearr_25438_25485[(2)] = null);

(statearr_25438_25485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (19))){
var inst_25396 = (state_25415[(11)]);
var inst_25346 = (state_25415[(8)]);
var inst_25398 = cljs.core.async.muxch_STAR_.call(null,inst_25396);
var state_25415__$1 = state_25415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25415__$1,(22),inst_25398,inst_25346);
} else {
if((state_val_25416 === (11))){
var inst_25356 = (state_25415[(12)]);
var inst_25370 = (state_25415[(10)]);
var inst_25370__$1 = cljs.core.seq.call(null,inst_25356);
var state_25415__$1 = (function (){var statearr_25439 = state_25415;
(statearr_25439[(10)] = inst_25370__$1);

return statearr_25439;
})();
if(inst_25370__$1){
var statearr_25440_25486 = state_25415__$1;
(statearr_25440_25486[(1)] = (13));

} else {
var statearr_25441_25487 = state_25415__$1;
(statearr_25441_25487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (9))){
var inst_25392 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25442_25488 = state_25415__$1;
(statearr_25442_25488[(2)] = inst_25392);

(statearr_25442_25488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (5))){
var inst_25353 = cljs.core.deref.call(null,mults);
var inst_25354 = cljs.core.vals.call(null,inst_25353);
var inst_25355 = cljs.core.seq.call(null,inst_25354);
var inst_25356 = inst_25355;
var inst_25357 = null;
var inst_25358 = (0);
var inst_25359 = (0);
var state_25415__$1 = (function (){var statearr_25443 = state_25415;
(statearr_25443[(12)] = inst_25356);

(statearr_25443[(13)] = inst_25357);

(statearr_25443[(14)] = inst_25358);

(statearr_25443[(16)] = inst_25359);

return statearr_25443;
})();
var statearr_25444_25489 = state_25415__$1;
(statearr_25444_25489[(2)] = null);

(statearr_25444_25489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (14))){
var state_25415__$1 = state_25415;
var statearr_25448_25490 = state_25415__$1;
(statearr_25448_25490[(2)] = null);

(statearr_25448_25490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (16))){
var inst_25370 = (state_25415[(10)]);
var inst_25374 = cljs.core.chunk_first.call(null,inst_25370);
var inst_25375 = cljs.core.chunk_rest.call(null,inst_25370);
var inst_25376 = cljs.core.count.call(null,inst_25374);
var inst_25356 = inst_25375;
var inst_25357 = inst_25374;
var inst_25358 = inst_25376;
var inst_25359 = (0);
var state_25415__$1 = (function (){var statearr_25449 = state_25415;
(statearr_25449[(12)] = inst_25356);

(statearr_25449[(13)] = inst_25357);

(statearr_25449[(14)] = inst_25358);

(statearr_25449[(16)] = inst_25359);

return statearr_25449;
})();
var statearr_25450_25491 = state_25415__$1;
(statearr_25450_25491[(2)] = null);

(statearr_25450_25491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (10))){
var inst_25356 = (state_25415[(12)]);
var inst_25357 = (state_25415[(13)]);
var inst_25358 = (state_25415[(14)]);
var inst_25359 = (state_25415[(16)]);
var inst_25364 = cljs.core._nth.call(null,inst_25357,inst_25359);
var inst_25365 = cljs.core.async.muxch_STAR_.call(null,inst_25364);
var inst_25366 = cljs.core.async.close_BANG_.call(null,inst_25365);
var inst_25367 = (inst_25359 + (1));
var tmp25445 = inst_25356;
var tmp25446 = inst_25357;
var tmp25447 = inst_25358;
var inst_25356__$1 = tmp25445;
var inst_25357__$1 = tmp25446;
var inst_25358__$1 = tmp25447;
var inst_25359__$1 = inst_25367;
var state_25415__$1 = (function (){var statearr_25451 = state_25415;
(statearr_25451[(12)] = inst_25356__$1);

(statearr_25451[(13)] = inst_25357__$1);

(statearr_25451[(14)] = inst_25358__$1);

(statearr_25451[(17)] = inst_25366);

(statearr_25451[(16)] = inst_25359__$1);

return statearr_25451;
})();
var statearr_25452_25492 = state_25415__$1;
(statearr_25452_25492[(2)] = null);

(statearr_25452_25492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (18))){
var inst_25385 = (state_25415[(2)]);
var state_25415__$1 = state_25415;
var statearr_25453_25493 = state_25415__$1;
(statearr_25453_25493[(2)] = inst_25385);

(statearr_25453_25493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25416 === (8))){
var inst_25358 = (state_25415[(14)]);
var inst_25359 = (state_25415[(16)]);
var inst_25361 = (inst_25359 < inst_25358);
var inst_25362 = inst_25361;
var state_25415__$1 = state_25415;
if(cljs.core.truth_(inst_25362)){
var statearr_25454_25494 = state_25415__$1;
(statearr_25454_25494[(1)] = (10));

} else {
var statearr_25455_25495 = state_25415__$1;
(statearr_25455_25495[(1)] = (11));

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
});})(c__23568__auto___25467,mults,ensure_mult,p))
;
return ((function (switch__23456__auto__,c__23568__auto___25467,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_25459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25459[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_25459[(1)] = (1));

return statearr_25459;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_25415){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_25415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e25460){if((e25460 instanceof Object)){
var ex__23460__auto__ = e25460;
var statearr_25461_25496 = state_25415;
(statearr_25461_25496[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25497 = state_25415;
state_25415 = G__25497;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_25415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_25415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___25467,mults,ensure_mult,p))
})();
var state__23570__auto__ = (function (){var statearr_25462 = f__23569__auto__.call(null);
(statearr_25462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___25467);

return statearr_25462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___25467,mults,ensure_mult,p))
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
var args25498 = [];
var len__19514__auto___25501 = arguments.length;
var i__19515__auto___25502 = (0);
while(true){
if((i__19515__auto___25502 < len__19514__auto___25501)){
args25498.push((arguments[i__19515__auto___25502]));

var G__25503 = (i__19515__auto___25502 + (1));
i__19515__auto___25502 = G__25503;
continue;
} else {
}
break;
}

var G__25500 = args25498.length;
switch (G__25500) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25498.length)].join('')));

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
var args25505 = [];
var len__19514__auto___25508 = arguments.length;
var i__19515__auto___25509 = (0);
while(true){
if((i__19515__auto___25509 < len__19514__auto___25508)){
args25505.push((arguments[i__19515__auto___25509]));

var G__25510 = (i__19515__auto___25509 + (1));
i__19515__auto___25509 = G__25510;
continue;
} else {
}
break;
}

var G__25507 = args25505.length;
switch (G__25507) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25505.length)].join('')));

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
var args25512 = [];
var len__19514__auto___25583 = arguments.length;
var i__19515__auto___25584 = (0);
while(true){
if((i__19515__auto___25584 < len__19514__auto___25583)){
args25512.push((arguments[i__19515__auto___25584]));

var G__25585 = (i__19515__auto___25584 + (1));
i__19515__auto___25584 = G__25585;
continue;
} else {
}
break;
}

var G__25514 = args25512.length;
switch (G__25514) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25512.length)].join('')));

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
var c__23568__auto___25587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___25587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___25587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25553){
var state_val_25554 = (state_25553[(1)]);
if((state_val_25554 === (7))){
var state_25553__$1 = state_25553;
var statearr_25555_25588 = state_25553__$1;
(statearr_25555_25588[(2)] = null);

(statearr_25555_25588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (1))){
var state_25553__$1 = state_25553;
var statearr_25556_25589 = state_25553__$1;
(statearr_25556_25589[(2)] = null);

(statearr_25556_25589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (4))){
var inst_25517 = (state_25553[(7)]);
var inst_25519 = (inst_25517 < cnt);
var state_25553__$1 = state_25553;
if(cljs.core.truth_(inst_25519)){
var statearr_25557_25590 = state_25553__$1;
(statearr_25557_25590[(1)] = (6));

} else {
var statearr_25558_25591 = state_25553__$1;
(statearr_25558_25591[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (15))){
var inst_25549 = (state_25553[(2)]);
var state_25553__$1 = state_25553;
var statearr_25559_25592 = state_25553__$1;
(statearr_25559_25592[(2)] = inst_25549);

(statearr_25559_25592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (13))){
var inst_25542 = cljs.core.async.close_BANG_.call(null,out);
var state_25553__$1 = state_25553;
var statearr_25560_25593 = state_25553__$1;
(statearr_25560_25593[(2)] = inst_25542);

(statearr_25560_25593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (6))){
var state_25553__$1 = state_25553;
var statearr_25561_25594 = state_25553__$1;
(statearr_25561_25594[(2)] = null);

(statearr_25561_25594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (3))){
var inst_25551 = (state_25553[(2)]);
var state_25553__$1 = state_25553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25553__$1,inst_25551);
} else {
if((state_val_25554 === (12))){
var inst_25539 = (state_25553[(8)]);
var inst_25539__$1 = (state_25553[(2)]);
var inst_25540 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25539__$1);
var state_25553__$1 = (function (){var statearr_25562 = state_25553;
(statearr_25562[(8)] = inst_25539__$1);

return statearr_25562;
})();
if(cljs.core.truth_(inst_25540)){
var statearr_25563_25595 = state_25553__$1;
(statearr_25563_25595[(1)] = (13));

} else {
var statearr_25564_25596 = state_25553__$1;
(statearr_25564_25596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (2))){
var inst_25516 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25517 = (0);
var state_25553__$1 = (function (){var statearr_25565 = state_25553;
(statearr_25565[(9)] = inst_25516);

(statearr_25565[(7)] = inst_25517);

return statearr_25565;
})();
var statearr_25566_25597 = state_25553__$1;
(statearr_25566_25597[(2)] = null);

(statearr_25566_25597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (11))){
var inst_25517 = (state_25553[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25553,(10),Object,null,(9));
var inst_25526 = chs__$1.call(null,inst_25517);
var inst_25527 = done.call(null,inst_25517);
var inst_25528 = cljs.core.async.take_BANG_.call(null,inst_25526,inst_25527);
var state_25553__$1 = state_25553;
var statearr_25567_25598 = state_25553__$1;
(statearr_25567_25598[(2)] = inst_25528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (9))){
var inst_25517 = (state_25553[(7)]);
var inst_25530 = (state_25553[(2)]);
var inst_25531 = (inst_25517 + (1));
var inst_25517__$1 = inst_25531;
var state_25553__$1 = (function (){var statearr_25568 = state_25553;
(statearr_25568[(10)] = inst_25530);

(statearr_25568[(7)] = inst_25517__$1);

return statearr_25568;
})();
var statearr_25569_25599 = state_25553__$1;
(statearr_25569_25599[(2)] = null);

(statearr_25569_25599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (5))){
var inst_25537 = (state_25553[(2)]);
var state_25553__$1 = (function (){var statearr_25570 = state_25553;
(statearr_25570[(11)] = inst_25537);

return statearr_25570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25553__$1,(12),dchan);
} else {
if((state_val_25554 === (14))){
var inst_25539 = (state_25553[(8)]);
var inst_25544 = cljs.core.apply.call(null,f,inst_25539);
var state_25553__$1 = state_25553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25553__$1,(16),out,inst_25544);
} else {
if((state_val_25554 === (16))){
var inst_25546 = (state_25553[(2)]);
var state_25553__$1 = (function (){var statearr_25571 = state_25553;
(statearr_25571[(12)] = inst_25546);

return statearr_25571;
})();
var statearr_25572_25600 = state_25553__$1;
(statearr_25572_25600[(2)] = null);

(statearr_25572_25600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (10))){
var inst_25521 = (state_25553[(2)]);
var inst_25522 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25553__$1 = (function (){var statearr_25573 = state_25553;
(statearr_25573[(13)] = inst_25521);

return statearr_25573;
})();
var statearr_25574_25601 = state_25553__$1;
(statearr_25574_25601[(2)] = inst_25522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25554 === (8))){
var inst_25535 = (state_25553[(2)]);
var state_25553__$1 = state_25553;
var statearr_25575_25602 = state_25553__$1;
(statearr_25575_25602[(2)] = inst_25535);

(statearr_25575_25602[(1)] = (5));


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
});})(c__23568__auto___25587,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23456__auto__,c__23568__auto___25587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_25553){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_25553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object)){
var ex__23460__auto__ = e25580;
var statearr_25581_25603 = state_25553;
(statearr_25581_25603[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25604 = state_25553;
state_25553 = G__25604;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_25553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_25553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___25587,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23570__auto__ = (function (){var statearr_25582 = f__23569__auto__.call(null);
(statearr_25582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___25587);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___25587,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25606 = [];
var len__19514__auto___25662 = arguments.length;
var i__19515__auto___25663 = (0);
while(true){
if((i__19515__auto___25663 < len__19514__auto___25662)){
args25606.push((arguments[i__19515__auto___25663]));

var G__25664 = (i__19515__auto___25663 + (1));
i__19515__auto___25663 = G__25664;
continue;
} else {
}
break;
}

var G__25608 = args25606.length;
switch (G__25608) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25606.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23568__auto___25666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___25666,out){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___25666,out){
return (function (state_25638){
var state_val_25639 = (state_25638[(1)]);
if((state_val_25639 === (7))){
var inst_25618 = (state_25638[(7)]);
var inst_25617 = (state_25638[(8)]);
var inst_25617__$1 = (state_25638[(2)]);
var inst_25618__$1 = cljs.core.nth.call(null,inst_25617__$1,(0),null);
var inst_25619 = cljs.core.nth.call(null,inst_25617__$1,(1),null);
var inst_25620 = (inst_25618__$1 == null);
var state_25638__$1 = (function (){var statearr_25640 = state_25638;
(statearr_25640[(9)] = inst_25619);

(statearr_25640[(7)] = inst_25618__$1);

(statearr_25640[(8)] = inst_25617__$1);

return statearr_25640;
})();
if(cljs.core.truth_(inst_25620)){
var statearr_25641_25667 = state_25638__$1;
(statearr_25641_25667[(1)] = (8));

} else {
var statearr_25642_25668 = state_25638__$1;
(statearr_25642_25668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (1))){
var inst_25609 = cljs.core.vec.call(null,chs);
var inst_25610 = inst_25609;
var state_25638__$1 = (function (){var statearr_25643 = state_25638;
(statearr_25643[(10)] = inst_25610);

return statearr_25643;
})();
var statearr_25644_25669 = state_25638__$1;
(statearr_25644_25669[(2)] = null);

(statearr_25644_25669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (4))){
var inst_25610 = (state_25638[(10)]);
var state_25638__$1 = state_25638;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25638__$1,(7),inst_25610);
} else {
if((state_val_25639 === (6))){
var inst_25634 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25645_25670 = state_25638__$1;
(statearr_25645_25670[(2)] = inst_25634);

(statearr_25645_25670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (3))){
var inst_25636 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25638__$1,inst_25636);
} else {
if((state_val_25639 === (2))){
var inst_25610 = (state_25638[(10)]);
var inst_25612 = cljs.core.count.call(null,inst_25610);
var inst_25613 = (inst_25612 > (0));
var state_25638__$1 = state_25638;
if(cljs.core.truth_(inst_25613)){
var statearr_25647_25671 = state_25638__$1;
(statearr_25647_25671[(1)] = (4));

} else {
var statearr_25648_25672 = state_25638__$1;
(statearr_25648_25672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (11))){
var inst_25610 = (state_25638[(10)]);
var inst_25627 = (state_25638[(2)]);
var tmp25646 = inst_25610;
var inst_25610__$1 = tmp25646;
var state_25638__$1 = (function (){var statearr_25649 = state_25638;
(statearr_25649[(10)] = inst_25610__$1);

(statearr_25649[(11)] = inst_25627);

return statearr_25649;
})();
var statearr_25650_25673 = state_25638__$1;
(statearr_25650_25673[(2)] = null);

(statearr_25650_25673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (9))){
var inst_25618 = (state_25638[(7)]);
var state_25638__$1 = state_25638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25638__$1,(11),out,inst_25618);
} else {
if((state_val_25639 === (5))){
var inst_25632 = cljs.core.async.close_BANG_.call(null,out);
var state_25638__$1 = state_25638;
var statearr_25651_25674 = state_25638__$1;
(statearr_25651_25674[(2)] = inst_25632);

(statearr_25651_25674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (10))){
var inst_25630 = (state_25638[(2)]);
var state_25638__$1 = state_25638;
var statearr_25652_25675 = state_25638__$1;
(statearr_25652_25675[(2)] = inst_25630);

(statearr_25652_25675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25639 === (8))){
var inst_25619 = (state_25638[(9)]);
var inst_25618 = (state_25638[(7)]);
var inst_25610 = (state_25638[(10)]);
var inst_25617 = (state_25638[(8)]);
var inst_25622 = (function (){var cs = inst_25610;
var vec__25615 = inst_25617;
var v = inst_25618;
var c = inst_25619;
return ((function (cs,vec__25615,v,c,inst_25619,inst_25618,inst_25610,inst_25617,state_val_25639,c__23568__auto___25666,out){
return (function (p1__25605_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25605_SHARP_);
});
;})(cs,vec__25615,v,c,inst_25619,inst_25618,inst_25610,inst_25617,state_val_25639,c__23568__auto___25666,out))
})();
var inst_25623 = cljs.core.filterv.call(null,inst_25622,inst_25610);
var inst_25610__$1 = inst_25623;
var state_25638__$1 = (function (){var statearr_25653 = state_25638;
(statearr_25653[(10)] = inst_25610__$1);

return statearr_25653;
})();
var statearr_25654_25676 = state_25638__$1;
(statearr_25654_25676[(2)] = null);

(statearr_25654_25676[(1)] = (2));


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
});})(c__23568__auto___25666,out))
;
return ((function (switch__23456__auto__,c__23568__auto___25666,out){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_25658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25658[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_25658[(1)] = (1));

return statearr_25658;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_25638){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_25638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e25659){if((e25659 instanceof Object)){
var ex__23460__auto__ = e25659;
var statearr_25660_25677 = state_25638;
(statearr_25660_25677[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25678 = state_25638;
state_25638 = G__25678;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_25638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_25638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___25666,out))
})();
var state__23570__auto__ = (function (){var statearr_25661 = f__23569__auto__.call(null);
(statearr_25661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___25666);

return statearr_25661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___25666,out))
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
var args25679 = [];
var len__19514__auto___25728 = arguments.length;
var i__19515__auto___25729 = (0);
while(true){
if((i__19515__auto___25729 < len__19514__auto___25728)){
args25679.push((arguments[i__19515__auto___25729]));

var G__25730 = (i__19515__auto___25729 + (1));
i__19515__auto___25729 = G__25730;
continue;
} else {
}
break;
}

var G__25681 = args25679.length;
switch (G__25681) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25679.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23568__auto___25732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___25732,out){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___25732,out){
return (function (state_25705){
var state_val_25706 = (state_25705[(1)]);
if((state_val_25706 === (7))){
var inst_25687 = (state_25705[(7)]);
var inst_25687__$1 = (state_25705[(2)]);
var inst_25688 = (inst_25687__$1 == null);
var inst_25689 = cljs.core.not.call(null,inst_25688);
var state_25705__$1 = (function (){var statearr_25707 = state_25705;
(statearr_25707[(7)] = inst_25687__$1);

return statearr_25707;
})();
if(inst_25689){
var statearr_25708_25733 = state_25705__$1;
(statearr_25708_25733[(1)] = (8));

} else {
var statearr_25709_25734 = state_25705__$1;
(statearr_25709_25734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (1))){
var inst_25682 = (0);
var state_25705__$1 = (function (){var statearr_25710 = state_25705;
(statearr_25710[(8)] = inst_25682);

return statearr_25710;
})();
var statearr_25711_25735 = state_25705__$1;
(statearr_25711_25735[(2)] = null);

(statearr_25711_25735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (4))){
var state_25705__$1 = state_25705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25705__$1,(7),ch);
} else {
if((state_val_25706 === (6))){
var inst_25700 = (state_25705[(2)]);
var state_25705__$1 = state_25705;
var statearr_25712_25736 = state_25705__$1;
(statearr_25712_25736[(2)] = inst_25700);

(statearr_25712_25736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (3))){
var inst_25702 = (state_25705[(2)]);
var inst_25703 = cljs.core.async.close_BANG_.call(null,out);
var state_25705__$1 = (function (){var statearr_25713 = state_25705;
(statearr_25713[(9)] = inst_25702);

return statearr_25713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25705__$1,inst_25703);
} else {
if((state_val_25706 === (2))){
var inst_25682 = (state_25705[(8)]);
var inst_25684 = (inst_25682 < n);
var state_25705__$1 = state_25705;
if(cljs.core.truth_(inst_25684)){
var statearr_25714_25737 = state_25705__$1;
(statearr_25714_25737[(1)] = (4));

} else {
var statearr_25715_25738 = state_25705__$1;
(statearr_25715_25738[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (11))){
var inst_25682 = (state_25705[(8)]);
var inst_25692 = (state_25705[(2)]);
var inst_25693 = (inst_25682 + (1));
var inst_25682__$1 = inst_25693;
var state_25705__$1 = (function (){var statearr_25716 = state_25705;
(statearr_25716[(10)] = inst_25692);

(statearr_25716[(8)] = inst_25682__$1);

return statearr_25716;
})();
var statearr_25717_25739 = state_25705__$1;
(statearr_25717_25739[(2)] = null);

(statearr_25717_25739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (9))){
var state_25705__$1 = state_25705;
var statearr_25718_25740 = state_25705__$1;
(statearr_25718_25740[(2)] = null);

(statearr_25718_25740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (5))){
var state_25705__$1 = state_25705;
var statearr_25719_25741 = state_25705__$1;
(statearr_25719_25741[(2)] = null);

(statearr_25719_25741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (10))){
var inst_25697 = (state_25705[(2)]);
var state_25705__$1 = state_25705;
var statearr_25720_25742 = state_25705__$1;
(statearr_25720_25742[(2)] = inst_25697);

(statearr_25720_25742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25706 === (8))){
var inst_25687 = (state_25705[(7)]);
var state_25705__$1 = state_25705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25705__$1,(11),out,inst_25687);
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
});})(c__23568__auto___25732,out))
;
return ((function (switch__23456__auto__,c__23568__auto___25732,out){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_25724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25724[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_25724[(1)] = (1));

return statearr_25724;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_25705){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_25705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e25725){if((e25725 instanceof Object)){
var ex__23460__auto__ = e25725;
var statearr_25726_25743 = state_25705;
(statearr_25726_25743[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25744 = state_25705;
state_25705 = G__25744;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_25705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_25705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___25732,out))
})();
var state__23570__auto__ = (function (){var statearr_25727 = f__23569__auto__.call(null);
(statearr_25727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___25732);

return statearr_25727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___25732,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25752 = (function (map_LT_,f,ch,meta25753){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25753 = meta25753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25754,meta25753__$1){
var self__ = this;
var _25754__$1 = this;
return (new cljs.core.async.t_cljs$core$async25752(self__.map_LT_,self__.f,self__.ch,meta25753__$1));
});

cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25754){
var self__ = this;
var _25754__$1 = this;
return self__.meta25753;
});

cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25755 = (function (map_LT_,f,ch,meta25753,_,fn1,meta25756){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25753 = meta25753;
this._ = _;
this.fn1 = fn1;
this.meta25756 = meta25756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25757,meta25756__$1){
var self__ = this;
var _25757__$1 = this;
return (new cljs.core.async.t_cljs$core$async25755(self__.map_LT_,self__.f,self__.ch,self__.meta25753,self__._,self__.fn1,meta25756__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25757){
var self__ = this;
var _25757__$1 = this;
return self__.meta25756;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25745_SHARP_){
return f1.call(null,(((p1__25745_SHARP_ == null))?null:self__.f.call(null,p1__25745_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25755.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25753","meta25753",1442840375,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25752","cljs.core.async/t_cljs$core$async25752",172398811,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25756","meta25756",-272708842,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25755";

cljs.core.async.t_cljs$core$async25755.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async25755");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25755 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25755(map_LT___$1,f__$1,ch__$1,meta25753__$1,___$2,fn1__$1,meta25756){
return (new cljs.core.async.t_cljs$core$async25755(map_LT___$1,f__$1,ch__$1,meta25753__$1,___$2,fn1__$1,meta25756));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25755(self__.map_LT_,self__.f,self__.ch,self__.meta25753,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18433__auto__ = ret;
if(cljs.core.truth_(and__18433__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18433__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25753","meta25753",1442840375,null)], null);
});

cljs.core.async.t_cljs$core$async25752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25752";

cljs.core.async.t_cljs$core$async25752.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async25752");
});

cljs.core.async.__GT_t_cljs$core$async25752 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25752(map_LT___$1,f__$1,ch__$1,meta25753){
return (new cljs.core.async.t_cljs$core$async25752(map_LT___$1,f__$1,ch__$1,meta25753));
});

}

return (new cljs.core.async.t_cljs$core$async25752(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25761 = (function (map_GT_,f,ch,meta25762){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25762 = meta25762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25763,meta25762__$1){
var self__ = this;
var _25763__$1 = this;
return (new cljs.core.async.t_cljs$core$async25761(self__.map_GT_,self__.f,self__.ch,meta25762__$1));
});

cljs.core.async.t_cljs$core$async25761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25763){
var self__ = this;
var _25763__$1 = this;
return self__.meta25762;
});

cljs.core.async.t_cljs$core$async25761.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25762","meta25762",259348191,null)], null);
});

cljs.core.async.t_cljs$core$async25761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25761";

cljs.core.async.t_cljs$core$async25761.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async25761");
});

cljs.core.async.__GT_t_cljs$core$async25761 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25761(map_GT___$1,f__$1,ch__$1,meta25762){
return (new cljs.core.async.t_cljs$core$async25761(map_GT___$1,f__$1,ch__$1,meta25762));
});

}

return (new cljs.core.async.t_cljs$core$async25761(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25767 = (function (filter_GT_,p,ch,meta25768){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25768 = meta25768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25769,meta25768__$1){
var self__ = this;
var _25769__$1 = this;
return (new cljs.core.async.t_cljs$core$async25767(self__.filter_GT_,self__.p,self__.ch,meta25768__$1));
});

cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25769){
var self__ = this;
var _25769__$1 = this;
return self__.meta25768;
});

cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25768","meta25768",-708570745,null)], null);
});

cljs.core.async.t_cljs$core$async25767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25767";

cljs.core.async.t_cljs$core$async25767.cljs$lang$ctorPrWriter = (function (this__19051__auto__,writer__19052__auto__,opt__19053__auto__){
return cljs.core._write.call(null,writer__19052__auto__,"cljs.core.async/t_cljs$core$async25767");
});

cljs.core.async.__GT_t_cljs$core$async25767 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25767(filter_GT___$1,p__$1,ch__$1,meta25768){
return (new cljs.core.async.t_cljs$core$async25767(filter_GT___$1,p__$1,ch__$1,meta25768));
});

}

return (new cljs.core.async.t_cljs$core$async25767(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25770 = [];
var len__19514__auto___25814 = arguments.length;
var i__19515__auto___25815 = (0);
while(true){
if((i__19515__auto___25815 < len__19514__auto___25814)){
args25770.push((arguments[i__19515__auto___25815]));

var G__25816 = (i__19515__auto___25815 + (1));
i__19515__auto___25815 = G__25816;
continue;
} else {
}
break;
}

var G__25772 = args25770.length;
switch (G__25772) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25770.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23568__auto___25818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___25818,out){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___25818,out){
return (function (state_25793){
var state_val_25794 = (state_25793[(1)]);
if((state_val_25794 === (7))){
var inst_25789 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25795_25819 = state_25793__$1;
(statearr_25795_25819[(2)] = inst_25789);

(statearr_25795_25819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (1))){
var state_25793__$1 = state_25793;
var statearr_25796_25820 = state_25793__$1;
(statearr_25796_25820[(2)] = null);

(statearr_25796_25820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (4))){
var inst_25775 = (state_25793[(7)]);
var inst_25775__$1 = (state_25793[(2)]);
var inst_25776 = (inst_25775__$1 == null);
var state_25793__$1 = (function (){var statearr_25797 = state_25793;
(statearr_25797[(7)] = inst_25775__$1);

return statearr_25797;
})();
if(cljs.core.truth_(inst_25776)){
var statearr_25798_25821 = state_25793__$1;
(statearr_25798_25821[(1)] = (5));

} else {
var statearr_25799_25822 = state_25793__$1;
(statearr_25799_25822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (6))){
var inst_25775 = (state_25793[(7)]);
var inst_25780 = p.call(null,inst_25775);
var state_25793__$1 = state_25793;
if(cljs.core.truth_(inst_25780)){
var statearr_25800_25823 = state_25793__$1;
(statearr_25800_25823[(1)] = (8));

} else {
var statearr_25801_25824 = state_25793__$1;
(statearr_25801_25824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (3))){
var inst_25791 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25793__$1,inst_25791);
} else {
if((state_val_25794 === (2))){
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25793__$1,(4),ch);
} else {
if((state_val_25794 === (11))){
var inst_25783 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25802_25825 = state_25793__$1;
(statearr_25802_25825[(2)] = inst_25783);

(statearr_25802_25825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (9))){
var state_25793__$1 = state_25793;
var statearr_25803_25826 = state_25793__$1;
(statearr_25803_25826[(2)] = null);

(statearr_25803_25826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (5))){
var inst_25778 = cljs.core.async.close_BANG_.call(null,out);
var state_25793__$1 = state_25793;
var statearr_25804_25827 = state_25793__$1;
(statearr_25804_25827[(2)] = inst_25778);

(statearr_25804_25827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (10))){
var inst_25786 = (state_25793[(2)]);
var state_25793__$1 = (function (){var statearr_25805 = state_25793;
(statearr_25805[(8)] = inst_25786);

return statearr_25805;
})();
var statearr_25806_25828 = state_25793__$1;
(statearr_25806_25828[(2)] = null);

(statearr_25806_25828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (8))){
var inst_25775 = (state_25793[(7)]);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25793__$1,(11),out,inst_25775);
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
});})(c__23568__auto___25818,out))
;
return ((function (switch__23456__auto__,c__23568__auto___25818,out){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_25810 = [null,null,null,null,null,null,null,null,null];
(statearr_25810[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_25810[(1)] = (1));

return statearr_25810;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_25793){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_25793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e25811){if((e25811 instanceof Object)){
var ex__23460__auto__ = e25811;
var statearr_25812_25829 = state_25793;
(statearr_25812_25829[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25830 = state_25793;
state_25793 = G__25830;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_25793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_25793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___25818,out))
})();
var state__23570__auto__ = (function (){var statearr_25813 = f__23569__auto__.call(null);
(statearr_25813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___25818);

return statearr_25813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___25818,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25831 = [];
var len__19514__auto___25834 = arguments.length;
var i__19515__auto___25835 = (0);
while(true){
if((i__19515__auto___25835 < len__19514__auto___25834)){
args25831.push((arguments[i__19515__auto___25835]));

var G__25836 = (i__19515__auto___25835 + (1));
i__19515__auto___25835 = G__25836;
continue;
} else {
}
break;
}

var G__25833 = args25831.length;
switch (G__25833) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25831.length)].join('')));

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
var c__23568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto__){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto__){
return (function (state_26003){
var state_val_26004 = (state_26003[(1)]);
if((state_val_26004 === (7))){
var inst_25999 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26005_26046 = state_26003__$1;
(statearr_26005_26046[(2)] = inst_25999);

(statearr_26005_26046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (20))){
var inst_25969 = (state_26003[(7)]);
var inst_25980 = (state_26003[(2)]);
var inst_25981 = cljs.core.next.call(null,inst_25969);
var inst_25955 = inst_25981;
var inst_25956 = null;
var inst_25957 = (0);
var inst_25958 = (0);
var state_26003__$1 = (function (){var statearr_26006 = state_26003;
(statearr_26006[(8)] = inst_25958);

(statearr_26006[(9)] = inst_25980);

(statearr_26006[(10)] = inst_25956);

(statearr_26006[(11)] = inst_25957);

(statearr_26006[(12)] = inst_25955);

return statearr_26006;
})();
var statearr_26007_26047 = state_26003__$1;
(statearr_26007_26047[(2)] = null);

(statearr_26007_26047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (1))){
var state_26003__$1 = state_26003;
var statearr_26008_26048 = state_26003__$1;
(statearr_26008_26048[(2)] = null);

(statearr_26008_26048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (4))){
var inst_25944 = (state_26003[(13)]);
var inst_25944__$1 = (state_26003[(2)]);
var inst_25945 = (inst_25944__$1 == null);
var state_26003__$1 = (function (){var statearr_26009 = state_26003;
(statearr_26009[(13)] = inst_25944__$1);

return statearr_26009;
})();
if(cljs.core.truth_(inst_25945)){
var statearr_26010_26049 = state_26003__$1;
(statearr_26010_26049[(1)] = (5));

} else {
var statearr_26011_26050 = state_26003__$1;
(statearr_26011_26050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (15))){
var state_26003__$1 = state_26003;
var statearr_26015_26051 = state_26003__$1;
(statearr_26015_26051[(2)] = null);

(statearr_26015_26051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (21))){
var state_26003__$1 = state_26003;
var statearr_26016_26052 = state_26003__$1;
(statearr_26016_26052[(2)] = null);

(statearr_26016_26052[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (13))){
var inst_25958 = (state_26003[(8)]);
var inst_25956 = (state_26003[(10)]);
var inst_25957 = (state_26003[(11)]);
var inst_25955 = (state_26003[(12)]);
var inst_25965 = (state_26003[(2)]);
var inst_25966 = (inst_25958 + (1));
var tmp26012 = inst_25956;
var tmp26013 = inst_25957;
var tmp26014 = inst_25955;
var inst_25955__$1 = tmp26014;
var inst_25956__$1 = tmp26012;
var inst_25957__$1 = tmp26013;
var inst_25958__$1 = inst_25966;
var state_26003__$1 = (function (){var statearr_26017 = state_26003;
(statearr_26017[(8)] = inst_25958__$1);

(statearr_26017[(10)] = inst_25956__$1);

(statearr_26017[(14)] = inst_25965);

(statearr_26017[(11)] = inst_25957__$1);

(statearr_26017[(12)] = inst_25955__$1);

return statearr_26017;
})();
var statearr_26018_26053 = state_26003__$1;
(statearr_26018_26053[(2)] = null);

(statearr_26018_26053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (22))){
var state_26003__$1 = state_26003;
var statearr_26019_26054 = state_26003__$1;
(statearr_26019_26054[(2)] = null);

(statearr_26019_26054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (6))){
var inst_25944 = (state_26003[(13)]);
var inst_25953 = f.call(null,inst_25944);
var inst_25954 = cljs.core.seq.call(null,inst_25953);
var inst_25955 = inst_25954;
var inst_25956 = null;
var inst_25957 = (0);
var inst_25958 = (0);
var state_26003__$1 = (function (){var statearr_26020 = state_26003;
(statearr_26020[(8)] = inst_25958);

(statearr_26020[(10)] = inst_25956);

(statearr_26020[(11)] = inst_25957);

(statearr_26020[(12)] = inst_25955);

return statearr_26020;
})();
var statearr_26021_26055 = state_26003__$1;
(statearr_26021_26055[(2)] = null);

(statearr_26021_26055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (17))){
var inst_25969 = (state_26003[(7)]);
var inst_25973 = cljs.core.chunk_first.call(null,inst_25969);
var inst_25974 = cljs.core.chunk_rest.call(null,inst_25969);
var inst_25975 = cljs.core.count.call(null,inst_25973);
var inst_25955 = inst_25974;
var inst_25956 = inst_25973;
var inst_25957 = inst_25975;
var inst_25958 = (0);
var state_26003__$1 = (function (){var statearr_26022 = state_26003;
(statearr_26022[(8)] = inst_25958);

(statearr_26022[(10)] = inst_25956);

(statearr_26022[(11)] = inst_25957);

(statearr_26022[(12)] = inst_25955);

return statearr_26022;
})();
var statearr_26023_26056 = state_26003__$1;
(statearr_26023_26056[(2)] = null);

(statearr_26023_26056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (3))){
var inst_26001 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26003__$1,inst_26001);
} else {
if((state_val_26004 === (12))){
var inst_25989 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26024_26057 = state_26003__$1;
(statearr_26024_26057[(2)] = inst_25989);

(statearr_26024_26057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (2))){
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26003__$1,(4),in$);
} else {
if((state_val_26004 === (23))){
var inst_25997 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26025_26058 = state_26003__$1;
(statearr_26025_26058[(2)] = inst_25997);

(statearr_26025_26058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (19))){
var inst_25984 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26026_26059 = state_26003__$1;
(statearr_26026_26059[(2)] = inst_25984);

(statearr_26026_26059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (11))){
var inst_25969 = (state_26003[(7)]);
var inst_25955 = (state_26003[(12)]);
var inst_25969__$1 = cljs.core.seq.call(null,inst_25955);
var state_26003__$1 = (function (){var statearr_26027 = state_26003;
(statearr_26027[(7)] = inst_25969__$1);

return statearr_26027;
})();
if(inst_25969__$1){
var statearr_26028_26060 = state_26003__$1;
(statearr_26028_26060[(1)] = (14));

} else {
var statearr_26029_26061 = state_26003__$1;
(statearr_26029_26061[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (9))){
var inst_25991 = (state_26003[(2)]);
var inst_25992 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26003__$1 = (function (){var statearr_26030 = state_26003;
(statearr_26030[(15)] = inst_25991);

return statearr_26030;
})();
if(cljs.core.truth_(inst_25992)){
var statearr_26031_26062 = state_26003__$1;
(statearr_26031_26062[(1)] = (21));

} else {
var statearr_26032_26063 = state_26003__$1;
(statearr_26032_26063[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (5))){
var inst_25947 = cljs.core.async.close_BANG_.call(null,out);
var state_26003__$1 = state_26003;
var statearr_26033_26064 = state_26003__$1;
(statearr_26033_26064[(2)] = inst_25947);

(statearr_26033_26064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (14))){
var inst_25969 = (state_26003[(7)]);
var inst_25971 = cljs.core.chunked_seq_QMARK_.call(null,inst_25969);
var state_26003__$1 = state_26003;
if(inst_25971){
var statearr_26034_26065 = state_26003__$1;
(statearr_26034_26065[(1)] = (17));

} else {
var statearr_26035_26066 = state_26003__$1;
(statearr_26035_26066[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (16))){
var inst_25987 = (state_26003[(2)]);
var state_26003__$1 = state_26003;
var statearr_26036_26067 = state_26003__$1;
(statearr_26036_26067[(2)] = inst_25987);

(statearr_26036_26067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26004 === (10))){
var inst_25958 = (state_26003[(8)]);
var inst_25956 = (state_26003[(10)]);
var inst_25963 = cljs.core._nth.call(null,inst_25956,inst_25958);
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26003__$1,(13),out,inst_25963);
} else {
if((state_val_26004 === (18))){
var inst_25969 = (state_26003[(7)]);
var inst_25978 = cljs.core.first.call(null,inst_25969);
var state_26003__$1 = state_26003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26003__$1,(20),out,inst_25978);
} else {
if((state_val_26004 === (8))){
var inst_25958 = (state_26003[(8)]);
var inst_25957 = (state_26003[(11)]);
var inst_25960 = (inst_25958 < inst_25957);
var inst_25961 = inst_25960;
var state_26003__$1 = state_26003;
if(cljs.core.truth_(inst_25961)){
var statearr_26037_26068 = state_26003__$1;
(statearr_26037_26068[(1)] = (10));

} else {
var statearr_26038_26069 = state_26003__$1;
(statearr_26038_26069[(1)] = (11));

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
});})(c__23568__auto__))
;
return ((function (switch__23456__auto__,c__23568__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23457__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23457__auto____0 = (function (){
var statearr_26042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26042[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23457__auto__);

(statearr_26042[(1)] = (1));

return statearr_26042;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23457__auto____1 = (function (state_26003){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_26003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e26043){if((e26043 instanceof Object)){
var ex__23460__auto__ = e26043;
var statearr_26044_26070 = state_26003;
(statearr_26044_26070[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26071 = state_26003;
state_26003 = G__26071;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23457__auto__ = function(state_26003){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23457__auto____1.call(this,state_26003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23457__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23457__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto__))
})();
var state__23570__auto__ = (function (){var statearr_26045 = f__23569__auto__.call(null);
(statearr_26045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto__);

return statearr_26045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto__))
);

return c__23568__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26072 = [];
var len__19514__auto___26075 = arguments.length;
var i__19515__auto___26076 = (0);
while(true){
if((i__19515__auto___26076 < len__19514__auto___26075)){
args26072.push((arguments[i__19515__auto___26076]));

var G__26077 = (i__19515__auto___26076 + (1));
i__19515__auto___26076 = G__26077;
continue;
} else {
}
break;
}

var G__26074 = args26072.length;
switch (G__26074) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26072.length)].join('')));

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
var args26079 = [];
var len__19514__auto___26082 = arguments.length;
var i__19515__auto___26083 = (0);
while(true){
if((i__19515__auto___26083 < len__19514__auto___26082)){
args26079.push((arguments[i__19515__auto___26083]));

var G__26084 = (i__19515__auto___26083 + (1));
i__19515__auto___26083 = G__26084;
continue;
} else {
}
break;
}

var G__26081 = args26079.length;
switch (G__26081) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26079.length)].join('')));

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
var args26086 = [];
var len__19514__auto___26137 = arguments.length;
var i__19515__auto___26138 = (0);
while(true){
if((i__19515__auto___26138 < len__19514__auto___26137)){
args26086.push((arguments[i__19515__auto___26138]));

var G__26139 = (i__19515__auto___26138 + (1));
i__19515__auto___26138 = G__26139;
continue;
} else {
}
break;
}

var G__26088 = args26086.length;
switch (G__26088) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26086.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23568__auto___26141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___26141,out){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___26141,out){
return (function (state_26112){
var state_val_26113 = (state_26112[(1)]);
if((state_val_26113 === (7))){
var inst_26107 = (state_26112[(2)]);
var state_26112__$1 = state_26112;
var statearr_26114_26142 = state_26112__$1;
(statearr_26114_26142[(2)] = inst_26107);

(statearr_26114_26142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (1))){
var inst_26089 = null;
var state_26112__$1 = (function (){var statearr_26115 = state_26112;
(statearr_26115[(7)] = inst_26089);

return statearr_26115;
})();
var statearr_26116_26143 = state_26112__$1;
(statearr_26116_26143[(2)] = null);

(statearr_26116_26143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (4))){
var inst_26092 = (state_26112[(8)]);
var inst_26092__$1 = (state_26112[(2)]);
var inst_26093 = (inst_26092__$1 == null);
var inst_26094 = cljs.core.not.call(null,inst_26093);
var state_26112__$1 = (function (){var statearr_26117 = state_26112;
(statearr_26117[(8)] = inst_26092__$1);

return statearr_26117;
})();
if(inst_26094){
var statearr_26118_26144 = state_26112__$1;
(statearr_26118_26144[(1)] = (5));

} else {
var statearr_26119_26145 = state_26112__$1;
(statearr_26119_26145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (6))){
var state_26112__$1 = state_26112;
var statearr_26120_26146 = state_26112__$1;
(statearr_26120_26146[(2)] = null);

(statearr_26120_26146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (3))){
var inst_26109 = (state_26112[(2)]);
var inst_26110 = cljs.core.async.close_BANG_.call(null,out);
var state_26112__$1 = (function (){var statearr_26121 = state_26112;
(statearr_26121[(9)] = inst_26109);

return statearr_26121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26112__$1,inst_26110);
} else {
if((state_val_26113 === (2))){
var state_26112__$1 = state_26112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26112__$1,(4),ch);
} else {
if((state_val_26113 === (11))){
var inst_26092 = (state_26112[(8)]);
var inst_26101 = (state_26112[(2)]);
var inst_26089 = inst_26092;
var state_26112__$1 = (function (){var statearr_26122 = state_26112;
(statearr_26122[(7)] = inst_26089);

(statearr_26122[(10)] = inst_26101);

return statearr_26122;
})();
var statearr_26123_26147 = state_26112__$1;
(statearr_26123_26147[(2)] = null);

(statearr_26123_26147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (9))){
var inst_26092 = (state_26112[(8)]);
var state_26112__$1 = state_26112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26112__$1,(11),out,inst_26092);
} else {
if((state_val_26113 === (5))){
var inst_26089 = (state_26112[(7)]);
var inst_26092 = (state_26112[(8)]);
var inst_26096 = cljs.core._EQ_.call(null,inst_26092,inst_26089);
var state_26112__$1 = state_26112;
if(inst_26096){
var statearr_26125_26148 = state_26112__$1;
(statearr_26125_26148[(1)] = (8));

} else {
var statearr_26126_26149 = state_26112__$1;
(statearr_26126_26149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (10))){
var inst_26104 = (state_26112[(2)]);
var state_26112__$1 = state_26112;
var statearr_26127_26150 = state_26112__$1;
(statearr_26127_26150[(2)] = inst_26104);

(statearr_26127_26150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26113 === (8))){
var inst_26089 = (state_26112[(7)]);
var tmp26124 = inst_26089;
var inst_26089__$1 = tmp26124;
var state_26112__$1 = (function (){var statearr_26128 = state_26112;
(statearr_26128[(7)] = inst_26089__$1);

return statearr_26128;
})();
var statearr_26129_26151 = state_26112__$1;
(statearr_26129_26151[(2)] = null);

(statearr_26129_26151[(1)] = (2));


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
});})(c__23568__auto___26141,out))
;
return ((function (switch__23456__auto__,c__23568__auto___26141,out){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_26133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26133[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_26133[(1)] = (1));

return statearr_26133;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_26112){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_26112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e26134){if((e26134 instanceof Object)){
var ex__23460__auto__ = e26134;
var statearr_26135_26152 = state_26112;
(statearr_26135_26152[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26153 = state_26112;
state_26112 = G__26153;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_26112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_26112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___26141,out))
})();
var state__23570__auto__ = (function (){var statearr_26136 = f__23569__auto__.call(null);
(statearr_26136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___26141);

return statearr_26136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___26141,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26154 = [];
var len__19514__auto___26224 = arguments.length;
var i__19515__auto___26225 = (0);
while(true){
if((i__19515__auto___26225 < len__19514__auto___26224)){
args26154.push((arguments[i__19515__auto___26225]));

var G__26226 = (i__19515__auto___26225 + (1));
i__19515__auto___26225 = G__26226;
continue;
} else {
}
break;
}

var G__26156 = args26154.length;
switch (G__26156) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26154.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23568__auto___26228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___26228,out){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___26228,out){
return (function (state_26194){
var state_val_26195 = (state_26194[(1)]);
if((state_val_26195 === (7))){
var inst_26190 = (state_26194[(2)]);
var state_26194__$1 = state_26194;
var statearr_26196_26229 = state_26194__$1;
(statearr_26196_26229[(2)] = inst_26190);

(statearr_26196_26229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (1))){
var inst_26157 = (new Array(n));
var inst_26158 = inst_26157;
var inst_26159 = (0);
var state_26194__$1 = (function (){var statearr_26197 = state_26194;
(statearr_26197[(7)] = inst_26158);

(statearr_26197[(8)] = inst_26159);

return statearr_26197;
})();
var statearr_26198_26230 = state_26194__$1;
(statearr_26198_26230[(2)] = null);

(statearr_26198_26230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (4))){
var inst_26162 = (state_26194[(9)]);
var inst_26162__$1 = (state_26194[(2)]);
var inst_26163 = (inst_26162__$1 == null);
var inst_26164 = cljs.core.not.call(null,inst_26163);
var state_26194__$1 = (function (){var statearr_26199 = state_26194;
(statearr_26199[(9)] = inst_26162__$1);

return statearr_26199;
})();
if(inst_26164){
var statearr_26200_26231 = state_26194__$1;
(statearr_26200_26231[(1)] = (5));

} else {
var statearr_26201_26232 = state_26194__$1;
(statearr_26201_26232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (15))){
var inst_26184 = (state_26194[(2)]);
var state_26194__$1 = state_26194;
var statearr_26202_26233 = state_26194__$1;
(statearr_26202_26233[(2)] = inst_26184);

(statearr_26202_26233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (13))){
var state_26194__$1 = state_26194;
var statearr_26203_26234 = state_26194__$1;
(statearr_26203_26234[(2)] = null);

(statearr_26203_26234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (6))){
var inst_26159 = (state_26194[(8)]);
var inst_26180 = (inst_26159 > (0));
var state_26194__$1 = state_26194;
if(cljs.core.truth_(inst_26180)){
var statearr_26204_26235 = state_26194__$1;
(statearr_26204_26235[(1)] = (12));

} else {
var statearr_26205_26236 = state_26194__$1;
(statearr_26205_26236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (3))){
var inst_26192 = (state_26194[(2)]);
var state_26194__$1 = state_26194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26194__$1,inst_26192);
} else {
if((state_val_26195 === (12))){
var inst_26158 = (state_26194[(7)]);
var inst_26182 = cljs.core.vec.call(null,inst_26158);
var state_26194__$1 = state_26194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26194__$1,(15),out,inst_26182);
} else {
if((state_val_26195 === (2))){
var state_26194__$1 = state_26194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26194__$1,(4),ch);
} else {
if((state_val_26195 === (11))){
var inst_26174 = (state_26194[(2)]);
var inst_26175 = (new Array(n));
var inst_26158 = inst_26175;
var inst_26159 = (0);
var state_26194__$1 = (function (){var statearr_26206 = state_26194;
(statearr_26206[(10)] = inst_26174);

(statearr_26206[(7)] = inst_26158);

(statearr_26206[(8)] = inst_26159);

return statearr_26206;
})();
var statearr_26207_26237 = state_26194__$1;
(statearr_26207_26237[(2)] = null);

(statearr_26207_26237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (9))){
var inst_26158 = (state_26194[(7)]);
var inst_26172 = cljs.core.vec.call(null,inst_26158);
var state_26194__$1 = state_26194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26194__$1,(11),out,inst_26172);
} else {
if((state_val_26195 === (5))){
var inst_26162 = (state_26194[(9)]);
var inst_26158 = (state_26194[(7)]);
var inst_26159 = (state_26194[(8)]);
var inst_26167 = (state_26194[(11)]);
var inst_26166 = (inst_26158[inst_26159] = inst_26162);
var inst_26167__$1 = (inst_26159 + (1));
var inst_26168 = (inst_26167__$1 < n);
var state_26194__$1 = (function (){var statearr_26208 = state_26194;
(statearr_26208[(12)] = inst_26166);

(statearr_26208[(11)] = inst_26167__$1);

return statearr_26208;
})();
if(cljs.core.truth_(inst_26168)){
var statearr_26209_26238 = state_26194__$1;
(statearr_26209_26238[(1)] = (8));

} else {
var statearr_26210_26239 = state_26194__$1;
(statearr_26210_26239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (14))){
var inst_26187 = (state_26194[(2)]);
var inst_26188 = cljs.core.async.close_BANG_.call(null,out);
var state_26194__$1 = (function (){var statearr_26212 = state_26194;
(statearr_26212[(13)] = inst_26187);

return statearr_26212;
})();
var statearr_26213_26240 = state_26194__$1;
(statearr_26213_26240[(2)] = inst_26188);

(statearr_26213_26240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (10))){
var inst_26178 = (state_26194[(2)]);
var state_26194__$1 = state_26194;
var statearr_26214_26241 = state_26194__$1;
(statearr_26214_26241[(2)] = inst_26178);

(statearr_26214_26241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (8))){
var inst_26158 = (state_26194[(7)]);
var inst_26167 = (state_26194[(11)]);
var tmp26211 = inst_26158;
var inst_26158__$1 = tmp26211;
var inst_26159 = inst_26167;
var state_26194__$1 = (function (){var statearr_26215 = state_26194;
(statearr_26215[(7)] = inst_26158__$1);

(statearr_26215[(8)] = inst_26159);

return statearr_26215;
})();
var statearr_26216_26242 = state_26194__$1;
(statearr_26216_26242[(2)] = null);

(statearr_26216_26242[(1)] = (2));


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
});})(c__23568__auto___26228,out))
;
return ((function (switch__23456__auto__,c__23568__auto___26228,out){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_26220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26220[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_26220[(1)] = (1));

return statearr_26220;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_26194){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_26194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e26221){if((e26221 instanceof Object)){
var ex__23460__auto__ = e26221;
var statearr_26222_26243 = state_26194;
(statearr_26222_26243[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26244 = state_26194;
state_26194 = G__26244;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_26194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_26194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___26228,out))
})();
var state__23570__auto__ = (function (){var statearr_26223 = f__23569__auto__.call(null);
(statearr_26223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___26228);

return statearr_26223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___26228,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26245 = [];
var len__19514__auto___26319 = arguments.length;
var i__19515__auto___26320 = (0);
while(true){
if((i__19515__auto___26320 < len__19514__auto___26319)){
args26245.push((arguments[i__19515__auto___26320]));

var G__26321 = (i__19515__auto___26320 + (1));
i__19515__auto___26320 = G__26321;
continue;
} else {
}
break;
}

var G__26247 = args26245.length;
switch (G__26247) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26245.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23568__auto___26323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23568__auto___26323,out){
return (function (){
var f__23569__auto__ = (function (){var switch__23456__auto__ = ((function (c__23568__auto___26323,out){
return (function (state_26289){
var state_val_26290 = (state_26289[(1)]);
if((state_val_26290 === (7))){
var inst_26285 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26291_26324 = state_26289__$1;
(statearr_26291_26324[(2)] = inst_26285);

(statearr_26291_26324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (1))){
var inst_26248 = [];
var inst_26249 = inst_26248;
var inst_26250 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26289__$1 = (function (){var statearr_26292 = state_26289;
(statearr_26292[(7)] = inst_26250);

(statearr_26292[(8)] = inst_26249);

return statearr_26292;
})();
var statearr_26293_26325 = state_26289__$1;
(statearr_26293_26325[(2)] = null);

(statearr_26293_26325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (4))){
var inst_26253 = (state_26289[(9)]);
var inst_26253__$1 = (state_26289[(2)]);
var inst_26254 = (inst_26253__$1 == null);
var inst_26255 = cljs.core.not.call(null,inst_26254);
var state_26289__$1 = (function (){var statearr_26294 = state_26289;
(statearr_26294[(9)] = inst_26253__$1);

return statearr_26294;
})();
if(inst_26255){
var statearr_26295_26326 = state_26289__$1;
(statearr_26295_26326[(1)] = (5));

} else {
var statearr_26296_26327 = state_26289__$1;
(statearr_26296_26327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (15))){
var inst_26279 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26297_26328 = state_26289__$1;
(statearr_26297_26328[(2)] = inst_26279);

(statearr_26297_26328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (13))){
var state_26289__$1 = state_26289;
var statearr_26298_26329 = state_26289__$1;
(statearr_26298_26329[(2)] = null);

(statearr_26298_26329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (6))){
var inst_26249 = (state_26289[(8)]);
var inst_26274 = inst_26249.length;
var inst_26275 = (inst_26274 > (0));
var state_26289__$1 = state_26289;
if(cljs.core.truth_(inst_26275)){
var statearr_26299_26330 = state_26289__$1;
(statearr_26299_26330[(1)] = (12));

} else {
var statearr_26300_26331 = state_26289__$1;
(statearr_26300_26331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (3))){
var inst_26287 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26289__$1,inst_26287);
} else {
if((state_val_26290 === (12))){
var inst_26249 = (state_26289[(8)]);
var inst_26277 = cljs.core.vec.call(null,inst_26249);
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26289__$1,(15),out,inst_26277);
} else {
if((state_val_26290 === (2))){
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26289__$1,(4),ch);
} else {
if((state_val_26290 === (11))){
var inst_26257 = (state_26289[(10)]);
var inst_26253 = (state_26289[(9)]);
var inst_26267 = (state_26289[(2)]);
var inst_26268 = [];
var inst_26269 = inst_26268.push(inst_26253);
var inst_26249 = inst_26268;
var inst_26250 = inst_26257;
var state_26289__$1 = (function (){var statearr_26301 = state_26289;
(statearr_26301[(7)] = inst_26250);

(statearr_26301[(8)] = inst_26249);

(statearr_26301[(11)] = inst_26269);

(statearr_26301[(12)] = inst_26267);

return statearr_26301;
})();
var statearr_26302_26332 = state_26289__$1;
(statearr_26302_26332[(2)] = null);

(statearr_26302_26332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (9))){
var inst_26249 = (state_26289[(8)]);
var inst_26265 = cljs.core.vec.call(null,inst_26249);
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26289__$1,(11),out,inst_26265);
} else {
if((state_val_26290 === (5))){
var inst_26250 = (state_26289[(7)]);
var inst_26257 = (state_26289[(10)]);
var inst_26253 = (state_26289[(9)]);
var inst_26257__$1 = f.call(null,inst_26253);
var inst_26258 = cljs.core._EQ_.call(null,inst_26257__$1,inst_26250);
var inst_26259 = cljs.core.keyword_identical_QMARK_.call(null,inst_26250,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26260 = (inst_26258) || (inst_26259);
var state_26289__$1 = (function (){var statearr_26303 = state_26289;
(statearr_26303[(10)] = inst_26257__$1);

return statearr_26303;
})();
if(cljs.core.truth_(inst_26260)){
var statearr_26304_26333 = state_26289__$1;
(statearr_26304_26333[(1)] = (8));

} else {
var statearr_26305_26334 = state_26289__$1;
(statearr_26305_26334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (14))){
var inst_26282 = (state_26289[(2)]);
var inst_26283 = cljs.core.async.close_BANG_.call(null,out);
var state_26289__$1 = (function (){var statearr_26307 = state_26289;
(statearr_26307[(13)] = inst_26282);

return statearr_26307;
})();
var statearr_26308_26335 = state_26289__$1;
(statearr_26308_26335[(2)] = inst_26283);

(statearr_26308_26335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (10))){
var inst_26272 = (state_26289[(2)]);
var state_26289__$1 = state_26289;
var statearr_26309_26336 = state_26289__$1;
(statearr_26309_26336[(2)] = inst_26272);

(statearr_26309_26336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26290 === (8))){
var inst_26249 = (state_26289[(8)]);
var inst_26257 = (state_26289[(10)]);
var inst_26253 = (state_26289[(9)]);
var inst_26262 = inst_26249.push(inst_26253);
var tmp26306 = inst_26249;
var inst_26249__$1 = tmp26306;
var inst_26250 = inst_26257;
var state_26289__$1 = (function (){var statearr_26310 = state_26289;
(statearr_26310[(7)] = inst_26250);

(statearr_26310[(8)] = inst_26249__$1);

(statearr_26310[(14)] = inst_26262);

return statearr_26310;
})();
var statearr_26311_26337 = state_26289__$1;
(statearr_26311_26337[(2)] = null);

(statearr_26311_26337[(1)] = (2));


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
});})(c__23568__auto___26323,out))
;
return ((function (switch__23456__auto__,c__23568__auto___26323,out){
return (function() {
var cljs$core$async$state_machine__23457__auto__ = null;
var cljs$core$async$state_machine__23457__auto____0 = (function (){
var statearr_26315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26315[(0)] = cljs$core$async$state_machine__23457__auto__);

(statearr_26315[(1)] = (1));

return statearr_26315;
});
var cljs$core$async$state_machine__23457__auto____1 = (function (state_26289){
while(true){
var ret_value__23458__auto__ = (function (){try{while(true){
var result__23459__auto__ = switch__23456__auto__.call(null,state_26289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23459__auto__;
}
break;
}
}catch (e26316){if((e26316 instanceof Object)){
var ex__23460__auto__ = e26316;
var statearr_26317_26338 = state_26289;
(statearr_26317_26338[(5)] = ex__23460__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26339 = state_26289;
state_26289 = G__26339;
continue;
} else {
return ret_value__23458__auto__;
}
break;
}
});
cljs$core$async$state_machine__23457__auto__ = function(state_26289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23457__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23457__auto____1.call(this,state_26289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23457__auto____0;
cljs$core$async$state_machine__23457__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23457__auto____1;
return cljs$core$async$state_machine__23457__auto__;
})()
;})(switch__23456__auto__,c__23568__auto___26323,out))
})();
var state__23570__auto__ = (function (){var statearr_26318 = f__23569__auto__.call(null);
(statearr_26318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23568__auto___26323);

return statearr_26318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23570__auto__);
});})(c__23568__auto___26323,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map