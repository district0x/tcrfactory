// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29964 = arguments.length;
switch (G__29964) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29965 = (function (f,blockable,meta29966){
this.f = f;
this.blockable = blockable;
this.meta29966 = meta29966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29967,meta29966__$1){
var self__ = this;
var _29967__$1 = this;
return (new cljs.core.async.t_cljs$core$async29965(self__.f,self__.blockable,meta29966__$1));
});

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29967){
var self__ = this;
var _29967__$1 = this;
return self__.meta29966;
});

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29966","meta29966",804721358,null)], null);
});

cljs.core.async.t_cljs$core$async29965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29965";

cljs.core.async.t_cljs$core$async29965.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29965");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29965.
 */
cljs.core.async.__GT_t_cljs$core$async29965 = (function cljs$core$async$__GT_t_cljs$core$async29965(f__$1,blockable__$1,meta29966){
return (new cljs.core.async.t_cljs$core$async29965(f__$1,blockable__$1,meta29966));
});

}

return (new cljs.core.async.t_cljs$core$async29965(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__29971 = arguments.length;
switch (G__29971) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__29974 = arguments.length;
switch (G__29974) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__29977 = arguments.length;
switch (G__29977) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29979 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29979);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29979,ret){
return (function (){
return fn1.call(null,val_29979);
});})(val_29979,ret))
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
var G__29981 = arguments.length;
switch (G__29981) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4376__auto___29983 = n;
var x_29984 = (0);
while(true){
if((x_29984 < n__4376__auto___29983)){
(a[x_29984] = (0));

var G__29985 = (x_29984 + (1));
x_29984 = G__29985;
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

var G__29986 = (i + (1));
i = G__29986;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29987 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29987 = (function (flag,meta29988){
this.flag = flag;
this.meta29988 = meta29988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29989,meta29988__$1){
var self__ = this;
var _29989__$1 = this;
return (new cljs.core.async.t_cljs$core$async29987(self__.flag,meta29988__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29989){
var self__ = this;
var _29989__$1 = this;
return self__.meta29988;
});})(flag))
;

cljs.core.async.t_cljs$core$async29987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29987.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29988","meta29988",1265803272,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29987";

cljs.core.async.t_cljs$core$async29987.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29987");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29987.
 */
cljs.core.async.__GT_t_cljs$core$async29987 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29987(flag__$1,meta29988){
return (new cljs.core.async.t_cljs$core$async29987(flag__$1,meta29988));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29987(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29990 = (function (flag,cb,meta29991){
this.flag = flag;
this.cb = cb;
this.meta29991 = meta29991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29992,meta29991__$1){
var self__ = this;
var _29992__$1 = this;
return (new cljs.core.async.t_cljs$core$async29990(self__.flag,self__.cb,meta29991__$1));
});

cljs.core.async.t_cljs$core$async29990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29992){
var self__ = this;
var _29992__$1 = this;
return self__.meta29991;
});

cljs.core.async.t_cljs$core$async29990.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29990.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29991","meta29991",-2032389791,null)], null);
});

cljs.core.async.t_cljs$core$async29990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29990";

cljs.core.async.t_cljs$core$async29990.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29990");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29990.
 */
cljs.core.async.__GT_t_cljs$core$async29990 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29990(flag__$1,cb__$1,meta29991){
return (new cljs.core.async.t_cljs$core$async29990(flag__$1,cb__$1,meta29991));
});

}

return (new cljs.core.async.t_cljs$core$async29990(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29993_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29993_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29994_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29994_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29995 = (i + (1));
i = G__29995;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___30001 = arguments.length;
var i__4500__auto___30002 = (0);
while(true){
if((i__4500__auto___30002 < len__4499__auto___30001)){
args__4502__auto__.push((arguments[i__4500__auto___30002]));

var G__30003 = (i__4500__auto___30002 + (1));
i__4500__auto___30002 = G__30003;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29998){
var map__29999 = p__29998;
var map__29999__$1 = ((((!((map__29999 == null)))?(((((map__29999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29999):map__29999);
var opts = map__29999__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29996){
var G__29997 = cljs.core.first.call(null,seq29996);
var seq29996__$1 = cljs.core.next.call(null,seq29996);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29997,seq29996__$1);
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
var G__30005 = arguments.length;
switch (G__30005) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29904__auto___30051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___30051){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___30051){
return (function (state_30029){
var state_val_30030 = (state_30029[(1)]);
if((state_val_30030 === (7))){
var inst_30025 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
var statearr_30031_30052 = state_30029__$1;
(statearr_30031_30052[(2)] = inst_30025);

(statearr_30031_30052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (1))){
var state_30029__$1 = state_30029;
var statearr_30032_30053 = state_30029__$1;
(statearr_30032_30053[(2)] = null);

(statearr_30032_30053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (4))){
var inst_30008 = (state_30029[(7)]);
var inst_30008__$1 = (state_30029[(2)]);
var inst_30009 = (inst_30008__$1 == null);
var state_30029__$1 = (function (){var statearr_30033 = state_30029;
(statearr_30033[(7)] = inst_30008__$1);

return statearr_30033;
})();
if(cljs.core.truth_(inst_30009)){
var statearr_30034_30054 = state_30029__$1;
(statearr_30034_30054[(1)] = (5));

} else {
var statearr_30035_30055 = state_30029__$1;
(statearr_30035_30055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (13))){
var state_30029__$1 = state_30029;
var statearr_30036_30056 = state_30029__$1;
(statearr_30036_30056[(2)] = null);

(statearr_30036_30056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (6))){
var inst_30008 = (state_30029[(7)]);
var state_30029__$1 = state_30029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30029__$1,(11),to,inst_30008);
} else {
if((state_val_30030 === (3))){
var inst_30027 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30029__$1,inst_30027);
} else {
if((state_val_30030 === (12))){
var state_30029__$1 = state_30029;
var statearr_30037_30057 = state_30029__$1;
(statearr_30037_30057[(2)] = null);

(statearr_30037_30057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (2))){
var state_30029__$1 = state_30029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30029__$1,(4),from);
} else {
if((state_val_30030 === (11))){
var inst_30018 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
if(cljs.core.truth_(inst_30018)){
var statearr_30038_30058 = state_30029__$1;
(statearr_30038_30058[(1)] = (12));

} else {
var statearr_30039_30059 = state_30029__$1;
(statearr_30039_30059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (9))){
var state_30029__$1 = state_30029;
var statearr_30040_30060 = state_30029__$1;
(statearr_30040_30060[(2)] = null);

(statearr_30040_30060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (5))){
var state_30029__$1 = state_30029;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30041_30061 = state_30029__$1;
(statearr_30041_30061[(1)] = (8));

} else {
var statearr_30042_30062 = state_30029__$1;
(statearr_30042_30062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (14))){
var inst_30023 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
var statearr_30043_30063 = state_30029__$1;
(statearr_30043_30063[(2)] = inst_30023);

(statearr_30043_30063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (10))){
var inst_30015 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
var statearr_30044_30064 = state_30029__$1;
(statearr_30044_30064[(2)] = inst_30015);

(statearr_30044_30064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (8))){
var inst_30012 = cljs.core.async.close_BANG_.call(null,to);
var state_30029__$1 = state_30029;
var statearr_30045_30065 = state_30029__$1;
(statearr_30045_30065[(2)] = inst_30012);

(statearr_30045_30065[(1)] = (10));


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
});})(c__29904__auto___30051))
;
return ((function (switch__29814__auto__,c__29904__auto___30051){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_30046 = [null,null,null,null,null,null,null,null];
(statearr_30046[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_30046[(1)] = (1));

return statearr_30046;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_30029){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30047){if((e30047 instanceof Object)){
var ex__29818__auto__ = e30047;
var statearr_30048_30066 = state_30029;
(statearr_30048_30066[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30067 = state_30029;
state_30029 = G__30067;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_30029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_30029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___30051))
})();
var state__29906__auto__ = (function (){var statearr_30049 = f__29905__auto__.call(null);
(statearr_30049[(6)] = c__29904__auto___30051);

return statearr_30049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___30051))
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
return (function (p__30068){
var vec__30069 = p__30068;
var v = cljs.core.nth.call(null,vec__30069,(0),null);
var p = cljs.core.nth.call(null,vec__30069,(1),null);
var job = vec__30069;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29904__auto___30240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___30240,res,vec__30069,v,p,job,jobs,results){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___30240,res,vec__30069,v,p,job,jobs,results){
return (function (state_30076){
var state_val_30077 = (state_30076[(1)]);
if((state_val_30077 === (1))){
var state_30076__$1 = state_30076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30076__$1,(2),res,v);
} else {
if((state_val_30077 === (2))){
var inst_30073 = (state_30076[(2)]);
var inst_30074 = cljs.core.async.close_BANG_.call(null,res);
var state_30076__$1 = (function (){var statearr_30078 = state_30076;
(statearr_30078[(7)] = inst_30073);

return statearr_30078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30076__$1,inst_30074);
} else {
return null;
}
}
});})(c__29904__auto___30240,res,vec__30069,v,p,job,jobs,results))
;
return ((function (switch__29814__auto__,c__29904__auto___30240,res,vec__30069,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0 = (function (){
var statearr_30079 = [null,null,null,null,null,null,null,null];
(statearr_30079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__);

(statearr_30079[(1)] = (1));

return statearr_30079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1 = (function (state_30076){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30080){if((e30080 instanceof Object)){
var ex__29818__auto__ = e30080;
var statearr_30081_30241 = state_30076;
(statearr_30081_30241[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30242 = state_30076;
state_30076 = G__30242;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = function(state_30076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1.call(this,state_30076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___30240,res,vec__30069,v,p,job,jobs,results))
})();
var state__29906__auto__ = (function (){var statearr_30082 = f__29905__auto__.call(null);
(statearr_30082[(6)] = c__29904__auto___30240);

return statearr_30082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___30240,res,vec__30069,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30083){
var vec__30084 = p__30083;
var v = cljs.core.nth.call(null,vec__30084,(0),null);
var p = cljs.core.nth.call(null,vec__30084,(1),null);
var job = vec__30084;
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
var n__4376__auto___30243 = n;
var __30244 = (0);
while(true){
if((__30244 < n__4376__auto___30243)){
var G__30087_30245 = type;
var G__30087_30246__$1 = (((G__30087_30245 instanceof cljs.core.Keyword))?G__30087_30245.fqn:null);
switch (G__30087_30246__$1) {
case "compute":
var c__29904__auto___30248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30244,c__29904__auto___30248,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (__30244,c__29904__auto___30248,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async){
return (function (state_30100){
var state_val_30101 = (state_30100[(1)]);
if((state_val_30101 === (1))){
var state_30100__$1 = state_30100;
var statearr_30102_30249 = state_30100__$1;
(statearr_30102_30249[(2)] = null);

(statearr_30102_30249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (2))){
var state_30100__$1 = state_30100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30100__$1,(4),jobs);
} else {
if((state_val_30101 === (3))){
var inst_30098 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30100__$1,inst_30098);
} else {
if((state_val_30101 === (4))){
var inst_30090 = (state_30100[(2)]);
var inst_30091 = process.call(null,inst_30090);
var state_30100__$1 = state_30100;
if(cljs.core.truth_(inst_30091)){
var statearr_30103_30250 = state_30100__$1;
(statearr_30103_30250[(1)] = (5));

} else {
var statearr_30104_30251 = state_30100__$1;
(statearr_30104_30251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (5))){
var state_30100__$1 = state_30100;
var statearr_30105_30252 = state_30100__$1;
(statearr_30105_30252[(2)] = null);

(statearr_30105_30252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (6))){
var state_30100__$1 = state_30100;
var statearr_30106_30253 = state_30100__$1;
(statearr_30106_30253[(2)] = null);

(statearr_30106_30253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30101 === (7))){
var inst_30096 = (state_30100[(2)]);
var state_30100__$1 = state_30100;
var statearr_30107_30254 = state_30100__$1;
(statearr_30107_30254[(2)] = inst_30096);

(statearr_30107_30254[(1)] = (3));


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
});})(__30244,c__29904__auto___30248,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async))
;
return ((function (__30244,switch__29814__auto__,c__29904__auto___30248,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0 = (function (){
var statearr_30108 = [null,null,null,null,null,null,null];
(statearr_30108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__);

(statearr_30108[(1)] = (1));

return statearr_30108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1 = (function (state_30100){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30109){if((e30109 instanceof Object)){
var ex__29818__auto__ = e30109;
var statearr_30110_30255 = state_30100;
(statearr_30110_30255[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30256 = state_30100;
state_30100 = G__30256;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = function(state_30100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1.call(this,state_30100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__;
})()
;})(__30244,switch__29814__auto__,c__29904__auto___30248,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async))
})();
var state__29906__auto__ = (function (){var statearr_30111 = f__29905__auto__.call(null);
(statearr_30111[(6)] = c__29904__auto___30248);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(__30244,c__29904__auto___30248,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async))
);


break;
case "async":
var c__29904__auto___30257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30244,c__29904__auto___30257,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (__30244,c__29904__auto___30257,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async){
return (function (state_30124){
var state_val_30125 = (state_30124[(1)]);
if((state_val_30125 === (1))){
var state_30124__$1 = state_30124;
var statearr_30126_30258 = state_30124__$1;
(statearr_30126_30258[(2)] = null);

(statearr_30126_30258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (2))){
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30124__$1,(4),jobs);
} else {
if((state_val_30125 === (3))){
var inst_30122 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30124__$1,inst_30122);
} else {
if((state_val_30125 === (4))){
var inst_30114 = (state_30124[(2)]);
var inst_30115 = async.call(null,inst_30114);
var state_30124__$1 = state_30124;
if(cljs.core.truth_(inst_30115)){
var statearr_30127_30259 = state_30124__$1;
(statearr_30127_30259[(1)] = (5));

} else {
var statearr_30128_30260 = state_30124__$1;
(statearr_30128_30260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (5))){
var state_30124__$1 = state_30124;
var statearr_30129_30261 = state_30124__$1;
(statearr_30129_30261[(2)] = null);

(statearr_30129_30261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (6))){
var state_30124__$1 = state_30124;
var statearr_30130_30262 = state_30124__$1;
(statearr_30130_30262[(2)] = null);

(statearr_30130_30262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (7))){
var inst_30120 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30131_30263 = state_30124__$1;
(statearr_30131_30263[(2)] = inst_30120);

(statearr_30131_30263[(1)] = (3));


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
});})(__30244,c__29904__auto___30257,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async))
;
return ((function (__30244,switch__29814__auto__,c__29904__auto___30257,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0 = (function (){
var statearr_30132 = [null,null,null,null,null,null,null];
(statearr_30132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__);

(statearr_30132[(1)] = (1));

return statearr_30132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1 = (function (state_30124){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30133){if((e30133 instanceof Object)){
var ex__29818__auto__ = e30133;
var statearr_30134_30264 = state_30124;
(statearr_30134_30264[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30265 = state_30124;
state_30124 = G__30265;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = function(state_30124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1.call(this,state_30124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__;
})()
;})(__30244,switch__29814__auto__,c__29904__auto___30257,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async))
})();
var state__29906__auto__ = (function (){var statearr_30135 = f__29905__auto__.call(null);
(statearr_30135[(6)] = c__29904__auto___30257);

return statearr_30135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(__30244,c__29904__auto___30257,G__30087_30245,G__30087_30246__$1,n__4376__auto___30243,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30087_30246__$1)].join('')));

}

var G__30266 = (__30244 + (1));
__30244 = G__30266;
continue;
} else {
}
break;
}

var c__29904__auto___30267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___30267,jobs,results,process,async){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___30267,jobs,results,process,async){
return (function (state_30157){
var state_val_30158 = (state_30157[(1)]);
if((state_val_30158 === (1))){
var state_30157__$1 = state_30157;
var statearr_30159_30268 = state_30157__$1;
(statearr_30159_30268[(2)] = null);

(statearr_30159_30268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (2))){
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30157__$1,(4),from);
} else {
if((state_val_30158 === (3))){
var inst_30155 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30157__$1,inst_30155);
} else {
if((state_val_30158 === (4))){
var inst_30138 = (state_30157[(7)]);
var inst_30138__$1 = (state_30157[(2)]);
var inst_30139 = (inst_30138__$1 == null);
var state_30157__$1 = (function (){var statearr_30160 = state_30157;
(statearr_30160[(7)] = inst_30138__$1);

return statearr_30160;
})();
if(cljs.core.truth_(inst_30139)){
var statearr_30161_30269 = state_30157__$1;
(statearr_30161_30269[(1)] = (5));

} else {
var statearr_30162_30270 = state_30157__$1;
(statearr_30162_30270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (5))){
var inst_30141 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30157__$1 = state_30157;
var statearr_30163_30271 = state_30157__$1;
(statearr_30163_30271[(2)] = inst_30141);

(statearr_30163_30271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (6))){
var inst_30138 = (state_30157[(7)]);
var inst_30143 = (state_30157[(8)]);
var inst_30143__$1 = cljs.core.async.chan.call(null,(1));
var inst_30144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30145 = [inst_30138,inst_30143__$1];
var inst_30146 = (new cljs.core.PersistentVector(null,2,(5),inst_30144,inst_30145,null));
var state_30157__$1 = (function (){var statearr_30164 = state_30157;
(statearr_30164[(8)] = inst_30143__$1);

return statearr_30164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30157__$1,(8),jobs,inst_30146);
} else {
if((state_val_30158 === (7))){
var inst_30153 = (state_30157[(2)]);
var state_30157__$1 = state_30157;
var statearr_30165_30272 = state_30157__$1;
(statearr_30165_30272[(2)] = inst_30153);

(statearr_30165_30272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30158 === (8))){
var inst_30143 = (state_30157[(8)]);
var inst_30148 = (state_30157[(2)]);
var state_30157__$1 = (function (){var statearr_30166 = state_30157;
(statearr_30166[(9)] = inst_30148);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30157__$1,(9),results,inst_30143);
} else {
if((state_val_30158 === (9))){
var inst_30150 = (state_30157[(2)]);
var state_30157__$1 = (function (){var statearr_30167 = state_30157;
(statearr_30167[(10)] = inst_30150);

return statearr_30167;
})();
var statearr_30168_30273 = state_30157__$1;
(statearr_30168_30273[(2)] = null);

(statearr_30168_30273[(1)] = (2));


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
});})(c__29904__auto___30267,jobs,results,process,async))
;
return ((function (switch__29814__auto__,c__29904__auto___30267,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0 = (function (){
var statearr_30169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__);

(statearr_30169[(1)] = (1));

return statearr_30169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1 = (function (state_30157){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30170){if((e30170 instanceof Object)){
var ex__29818__auto__ = e30170;
var statearr_30171_30274 = state_30157;
(statearr_30171_30274[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30275 = state_30157;
state_30157 = G__30275;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = function(state_30157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1.call(this,state_30157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___30267,jobs,results,process,async))
})();
var state__29906__auto__ = (function (){var statearr_30172 = f__29905__auto__.call(null);
(statearr_30172[(6)] = c__29904__auto___30267);

return statearr_30172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___30267,jobs,results,process,async))
);


var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__,jobs,results,process,async){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__,jobs,results,process,async){
return (function (state_30210){
var state_val_30211 = (state_30210[(1)]);
if((state_val_30211 === (7))){
var inst_30206 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30212_30276 = state_30210__$1;
(statearr_30212_30276[(2)] = inst_30206);

(statearr_30212_30276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (20))){
var state_30210__$1 = state_30210;
var statearr_30213_30277 = state_30210__$1;
(statearr_30213_30277[(2)] = null);

(statearr_30213_30277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (1))){
var state_30210__$1 = state_30210;
var statearr_30214_30278 = state_30210__$1;
(statearr_30214_30278[(2)] = null);

(statearr_30214_30278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (4))){
var inst_30175 = (state_30210[(7)]);
var inst_30175__$1 = (state_30210[(2)]);
var inst_30176 = (inst_30175__$1 == null);
var state_30210__$1 = (function (){var statearr_30215 = state_30210;
(statearr_30215[(7)] = inst_30175__$1);

return statearr_30215;
})();
if(cljs.core.truth_(inst_30176)){
var statearr_30216_30279 = state_30210__$1;
(statearr_30216_30279[(1)] = (5));

} else {
var statearr_30217_30280 = state_30210__$1;
(statearr_30217_30280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (15))){
var inst_30188 = (state_30210[(8)]);
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30210__$1,(18),to,inst_30188);
} else {
if((state_val_30211 === (21))){
var inst_30201 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30218_30281 = state_30210__$1;
(statearr_30218_30281[(2)] = inst_30201);

(statearr_30218_30281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (13))){
var inst_30203 = (state_30210[(2)]);
var state_30210__$1 = (function (){var statearr_30219 = state_30210;
(statearr_30219[(9)] = inst_30203);

return statearr_30219;
})();
var statearr_30220_30282 = state_30210__$1;
(statearr_30220_30282[(2)] = null);

(statearr_30220_30282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (6))){
var inst_30175 = (state_30210[(7)]);
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30210__$1,(11),inst_30175);
} else {
if((state_val_30211 === (17))){
var inst_30196 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
if(cljs.core.truth_(inst_30196)){
var statearr_30221_30283 = state_30210__$1;
(statearr_30221_30283[(1)] = (19));

} else {
var statearr_30222_30284 = state_30210__$1;
(statearr_30222_30284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (3))){
var inst_30208 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30210__$1,inst_30208);
} else {
if((state_val_30211 === (12))){
var inst_30185 = (state_30210[(10)]);
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30210__$1,(14),inst_30185);
} else {
if((state_val_30211 === (2))){
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30210__$1,(4),results);
} else {
if((state_val_30211 === (19))){
var state_30210__$1 = state_30210;
var statearr_30223_30285 = state_30210__$1;
(statearr_30223_30285[(2)] = null);

(statearr_30223_30285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (11))){
var inst_30185 = (state_30210[(2)]);
var state_30210__$1 = (function (){var statearr_30224 = state_30210;
(statearr_30224[(10)] = inst_30185);

return statearr_30224;
})();
var statearr_30225_30286 = state_30210__$1;
(statearr_30225_30286[(2)] = null);

(statearr_30225_30286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (9))){
var state_30210__$1 = state_30210;
var statearr_30226_30287 = state_30210__$1;
(statearr_30226_30287[(2)] = null);

(statearr_30226_30287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (5))){
var state_30210__$1 = state_30210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30227_30288 = state_30210__$1;
(statearr_30227_30288[(1)] = (8));

} else {
var statearr_30228_30289 = state_30210__$1;
(statearr_30228_30289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (14))){
var inst_30190 = (state_30210[(11)]);
var inst_30188 = (state_30210[(8)]);
var inst_30188__$1 = (state_30210[(2)]);
var inst_30189 = (inst_30188__$1 == null);
var inst_30190__$1 = cljs.core.not.call(null,inst_30189);
var state_30210__$1 = (function (){var statearr_30229 = state_30210;
(statearr_30229[(11)] = inst_30190__$1);

(statearr_30229[(8)] = inst_30188__$1);

return statearr_30229;
})();
if(inst_30190__$1){
var statearr_30230_30290 = state_30210__$1;
(statearr_30230_30290[(1)] = (15));

} else {
var statearr_30231_30291 = state_30210__$1;
(statearr_30231_30291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (16))){
var inst_30190 = (state_30210[(11)]);
var state_30210__$1 = state_30210;
var statearr_30232_30292 = state_30210__$1;
(statearr_30232_30292[(2)] = inst_30190);

(statearr_30232_30292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (10))){
var inst_30182 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30233_30293 = state_30210__$1;
(statearr_30233_30293[(2)] = inst_30182);

(statearr_30233_30293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (18))){
var inst_30193 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30234_30294 = state_30210__$1;
(statearr_30234_30294[(2)] = inst_30193);

(statearr_30234_30294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (8))){
var inst_30179 = cljs.core.async.close_BANG_.call(null,to);
var state_30210__$1 = state_30210;
var statearr_30235_30295 = state_30210__$1;
(statearr_30235_30295[(2)] = inst_30179);

(statearr_30235_30295[(1)] = (10));


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
});})(c__29904__auto__,jobs,results,process,async))
;
return ((function (switch__29814__auto__,c__29904__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0 = (function (){
var statearr_30236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__);

(statearr_30236[(1)] = (1));

return statearr_30236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1 = (function (state_30210){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30237){if((e30237 instanceof Object)){
var ex__29818__auto__ = e30237;
var statearr_30238_30296 = state_30210;
(statearr_30238_30296[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30297 = state_30210;
state_30210 = G__30297;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__ = function(state_30210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1.call(this,state_30210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29815__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__,jobs,results,process,async))
})();
var state__29906__auto__ = (function (){var statearr_30239 = f__29905__auto__.call(null);
(statearr_30239[(6)] = c__29904__auto__);

return statearr_30239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__,jobs,results,process,async))
);

return c__29904__auto__;
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
var G__30299 = arguments.length;
switch (G__30299) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__30302 = arguments.length;
switch (G__30302) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__30305 = arguments.length;
switch (G__30305) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29904__auto___30354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___30354,tc,fc){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___30354,tc,fc){
return (function (state_30331){
var state_val_30332 = (state_30331[(1)]);
if((state_val_30332 === (7))){
var inst_30327 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
var statearr_30333_30355 = state_30331__$1;
(statearr_30333_30355[(2)] = inst_30327);

(statearr_30333_30355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (1))){
var state_30331__$1 = state_30331;
var statearr_30334_30356 = state_30331__$1;
(statearr_30334_30356[(2)] = null);

(statearr_30334_30356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (4))){
var inst_30308 = (state_30331[(7)]);
var inst_30308__$1 = (state_30331[(2)]);
var inst_30309 = (inst_30308__$1 == null);
var state_30331__$1 = (function (){var statearr_30335 = state_30331;
(statearr_30335[(7)] = inst_30308__$1);

return statearr_30335;
})();
if(cljs.core.truth_(inst_30309)){
var statearr_30336_30357 = state_30331__$1;
(statearr_30336_30357[(1)] = (5));

} else {
var statearr_30337_30358 = state_30331__$1;
(statearr_30337_30358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (13))){
var state_30331__$1 = state_30331;
var statearr_30338_30359 = state_30331__$1;
(statearr_30338_30359[(2)] = null);

(statearr_30338_30359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (6))){
var inst_30308 = (state_30331[(7)]);
var inst_30314 = p.call(null,inst_30308);
var state_30331__$1 = state_30331;
if(cljs.core.truth_(inst_30314)){
var statearr_30339_30360 = state_30331__$1;
(statearr_30339_30360[(1)] = (9));

} else {
var statearr_30340_30361 = state_30331__$1;
(statearr_30340_30361[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (3))){
var inst_30329 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30331__$1,inst_30329);
} else {
if((state_val_30332 === (12))){
var state_30331__$1 = state_30331;
var statearr_30341_30362 = state_30331__$1;
(statearr_30341_30362[(2)] = null);

(statearr_30341_30362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (2))){
var state_30331__$1 = state_30331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30331__$1,(4),ch);
} else {
if((state_val_30332 === (11))){
var inst_30308 = (state_30331[(7)]);
var inst_30318 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30331__$1,(8),inst_30318,inst_30308);
} else {
if((state_val_30332 === (9))){
var state_30331__$1 = state_30331;
var statearr_30342_30363 = state_30331__$1;
(statearr_30342_30363[(2)] = tc);

(statearr_30342_30363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (5))){
var inst_30311 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30312 = cljs.core.async.close_BANG_.call(null,fc);
var state_30331__$1 = (function (){var statearr_30343 = state_30331;
(statearr_30343[(8)] = inst_30311);

return statearr_30343;
})();
var statearr_30344_30364 = state_30331__$1;
(statearr_30344_30364[(2)] = inst_30312);

(statearr_30344_30364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (14))){
var inst_30325 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
var statearr_30345_30365 = state_30331__$1;
(statearr_30345_30365[(2)] = inst_30325);

(statearr_30345_30365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (10))){
var state_30331__$1 = state_30331;
var statearr_30346_30366 = state_30331__$1;
(statearr_30346_30366[(2)] = fc);

(statearr_30346_30366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30332 === (8))){
var inst_30320 = (state_30331[(2)]);
var state_30331__$1 = state_30331;
if(cljs.core.truth_(inst_30320)){
var statearr_30347_30367 = state_30331__$1;
(statearr_30347_30367[(1)] = (12));

} else {
var statearr_30348_30368 = state_30331__$1;
(statearr_30348_30368[(1)] = (13));

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
});})(c__29904__auto___30354,tc,fc))
;
return ((function (switch__29814__auto__,c__29904__auto___30354,tc,fc){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_30349 = [null,null,null,null,null,null,null,null,null];
(statearr_30349[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_30349[(1)] = (1));

return statearr_30349;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_30331){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30350){if((e30350 instanceof Object)){
var ex__29818__auto__ = e30350;
var statearr_30351_30369 = state_30331;
(statearr_30351_30369[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30370 = state_30331;
state_30331 = G__30370;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_30331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_30331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___30354,tc,fc))
})();
var state__29906__auto__ = (function (){var statearr_30352 = f__29905__auto__.call(null);
(statearr_30352[(6)] = c__29904__auto___30354);

return statearr_30352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___30354,tc,fc))
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
var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__){
return (function (state_30391){
var state_val_30392 = (state_30391[(1)]);
if((state_val_30392 === (7))){
var inst_30387 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
var statearr_30393_30411 = state_30391__$1;
(statearr_30393_30411[(2)] = inst_30387);

(statearr_30393_30411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (1))){
var inst_30371 = init;
var state_30391__$1 = (function (){var statearr_30394 = state_30391;
(statearr_30394[(7)] = inst_30371);

return statearr_30394;
})();
var statearr_30395_30412 = state_30391__$1;
(statearr_30395_30412[(2)] = null);

(statearr_30395_30412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (4))){
var inst_30374 = (state_30391[(8)]);
var inst_30374__$1 = (state_30391[(2)]);
var inst_30375 = (inst_30374__$1 == null);
var state_30391__$1 = (function (){var statearr_30396 = state_30391;
(statearr_30396[(8)] = inst_30374__$1);

return statearr_30396;
})();
if(cljs.core.truth_(inst_30375)){
var statearr_30397_30413 = state_30391__$1;
(statearr_30397_30413[(1)] = (5));

} else {
var statearr_30398_30414 = state_30391__$1;
(statearr_30398_30414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (6))){
var inst_30378 = (state_30391[(9)]);
var inst_30374 = (state_30391[(8)]);
var inst_30371 = (state_30391[(7)]);
var inst_30378__$1 = f.call(null,inst_30371,inst_30374);
var inst_30379 = cljs.core.reduced_QMARK_.call(null,inst_30378__$1);
var state_30391__$1 = (function (){var statearr_30399 = state_30391;
(statearr_30399[(9)] = inst_30378__$1);

return statearr_30399;
})();
if(inst_30379){
var statearr_30400_30415 = state_30391__$1;
(statearr_30400_30415[(1)] = (8));

} else {
var statearr_30401_30416 = state_30391__$1;
(statearr_30401_30416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (3))){
var inst_30389 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30391__$1,inst_30389);
} else {
if((state_val_30392 === (2))){
var state_30391__$1 = state_30391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30391__$1,(4),ch);
} else {
if((state_val_30392 === (9))){
var inst_30378 = (state_30391[(9)]);
var inst_30371 = inst_30378;
var state_30391__$1 = (function (){var statearr_30402 = state_30391;
(statearr_30402[(7)] = inst_30371);

return statearr_30402;
})();
var statearr_30403_30417 = state_30391__$1;
(statearr_30403_30417[(2)] = null);

(statearr_30403_30417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (5))){
var inst_30371 = (state_30391[(7)]);
var state_30391__$1 = state_30391;
var statearr_30404_30418 = state_30391__$1;
(statearr_30404_30418[(2)] = inst_30371);

(statearr_30404_30418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (10))){
var inst_30385 = (state_30391[(2)]);
var state_30391__$1 = state_30391;
var statearr_30405_30419 = state_30391__$1;
(statearr_30405_30419[(2)] = inst_30385);

(statearr_30405_30419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30392 === (8))){
var inst_30378 = (state_30391[(9)]);
var inst_30381 = cljs.core.deref.call(null,inst_30378);
var state_30391__$1 = state_30391;
var statearr_30406_30420 = state_30391__$1;
(statearr_30406_30420[(2)] = inst_30381);

(statearr_30406_30420[(1)] = (10));


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
});})(c__29904__auto__))
;
return ((function (switch__29814__auto__,c__29904__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29815__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29815__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = cljs$core$async$reduce_$_state_machine__29815__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var cljs$core$async$reduce_$_state_machine__29815__auto____1 = (function (state_30391){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__29818__auto__ = e30408;
var statearr_30409_30421 = state_30391;
(statearr_30409_30421[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30422 = state_30391;
state_30391 = G__30422;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29815__auto__ = function(state_30391){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29815__auto____1.call(this,state_30391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29815__auto____0;
cljs$core$async$reduce_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29815__auto____1;
return cljs$core$async$reduce_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__))
})();
var state__29906__auto__ = (function (){var statearr_30410 = f__29905__auto__.call(null);
(statearr_30410[(6)] = c__29904__auto__);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__))
);

return c__29904__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__,f__$1){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__,f__$1){
return (function (state_30428){
var state_val_30429 = (state_30428[(1)]);
if((state_val_30429 === (1))){
var inst_30423 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30428__$1,(2),inst_30423);
} else {
if((state_val_30429 === (2))){
var inst_30425 = (state_30428[(2)]);
var inst_30426 = f__$1.call(null,inst_30425);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30428__$1,inst_30426);
} else {
return null;
}
}
});})(c__29904__auto__,f__$1))
;
return ((function (switch__29814__auto__,c__29904__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29815__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29815__auto____0 = (function (){
var statearr_30430 = [null,null,null,null,null,null,null];
(statearr_30430[(0)] = cljs$core$async$transduce_$_state_machine__29815__auto__);

(statearr_30430[(1)] = (1));

return statearr_30430;
});
var cljs$core$async$transduce_$_state_machine__29815__auto____1 = (function (state_30428){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30431){if((e30431 instanceof Object)){
var ex__29818__auto__ = e30431;
var statearr_30432_30434 = state_30428;
(statearr_30432_30434[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30435 = state_30428;
state_30428 = G__30435;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29815__auto__ = function(state_30428){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29815__auto____1.call(this,state_30428);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29815__auto____0;
cljs$core$async$transduce_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29815__auto____1;
return cljs$core$async$transduce_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__,f__$1))
})();
var state__29906__auto__ = (function (){var statearr_30433 = f__29905__auto__.call(null);
(statearr_30433[(6)] = c__29904__auto__);

return statearr_30433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__,f__$1))
);

return c__29904__auto__;
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
var G__30437 = arguments.length;
switch (G__30437) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__){
return (function (state_30462){
var state_val_30463 = (state_30462[(1)]);
if((state_val_30463 === (7))){
var inst_30444 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30464_30485 = state_30462__$1;
(statearr_30464_30485[(2)] = inst_30444);

(statearr_30464_30485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (1))){
var inst_30438 = cljs.core.seq.call(null,coll);
var inst_30439 = inst_30438;
var state_30462__$1 = (function (){var statearr_30465 = state_30462;
(statearr_30465[(7)] = inst_30439);

return statearr_30465;
})();
var statearr_30466_30486 = state_30462__$1;
(statearr_30466_30486[(2)] = null);

(statearr_30466_30486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (4))){
var inst_30439 = (state_30462[(7)]);
var inst_30442 = cljs.core.first.call(null,inst_30439);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30462__$1,(7),ch,inst_30442);
} else {
if((state_val_30463 === (13))){
var inst_30456 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30467_30487 = state_30462__$1;
(statearr_30467_30487[(2)] = inst_30456);

(statearr_30467_30487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (6))){
var inst_30447 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30447)){
var statearr_30468_30488 = state_30462__$1;
(statearr_30468_30488[(1)] = (8));

} else {
var statearr_30469_30489 = state_30462__$1;
(statearr_30469_30489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (3))){
var inst_30460 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30462__$1,inst_30460);
} else {
if((state_val_30463 === (12))){
var state_30462__$1 = state_30462;
var statearr_30470_30490 = state_30462__$1;
(statearr_30470_30490[(2)] = null);

(statearr_30470_30490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (2))){
var inst_30439 = (state_30462[(7)]);
var state_30462__$1 = state_30462;
if(cljs.core.truth_(inst_30439)){
var statearr_30471_30491 = state_30462__$1;
(statearr_30471_30491[(1)] = (4));

} else {
var statearr_30472_30492 = state_30462__$1;
(statearr_30472_30492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (11))){
var inst_30453 = cljs.core.async.close_BANG_.call(null,ch);
var state_30462__$1 = state_30462;
var statearr_30473_30493 = state_30462__$1;
(statearr_30473_30493[(2)] = inst_30453);

(statearr_30473_30493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (9))){
var state_30462__$1 = state_30462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30474_30494 = state_30462__$1;
(statearr_30474_30494[(1)] = (11));

} else {
var statearr_30475_30495 = state_30462__$1;
(statearr_30475_30495[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (5))){
var inst_30439 = (state_30462[(7)]);
var state_30462__$1 = state_30462;
var statearr_30476_30496 = state_30462__$1;
(statearr_30476_30496[(2)] = inst_30439);

(statearr_30476_30496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (10))){
var inst_30458 = (state_30462[(2)]);
var state_30462__$1 = state_30462;
var statearr_30477_30497 = state_30462__$1;
(statearr_30477_30497[(2)] = inst_30458);

(statearr_30477_30497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30463 === (8))){
var inst_30439 = (state_30462[(7)]);
var inst_30449 = cljs.core.next.call(null,inst_30439);
var inst_30439__$1 = inst_30449;
var state_30462__$1 = (function (){var statearr_30478 = state_30462;
(statearr_30478[(7)] = inst_30439__$1);

return statearr_30478;
})();
var statearr_30479_30498 = state_30462__$1;
(statearr_30479_30498[(2)] = null);

(statearr_30479_30498[(1)] = (2));


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
});})(c__29904__auto__))
;
return ((function (switch__29814__auto__,c__29904__auto__){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_30480 = [null,null,null,null,null,null,null,null];
(statearr_30480[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_30480[(1)] = (1));

return statearr_30480;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_30462){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30481){if((e30481 instanceof Object)){
var ex__29818__auto__ = e30481;
var statearr_30482_30499 = state_30462;
(statearr_30482_30499[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30500 = state_30462;
state_30462 = G__30500;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_30462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_30462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__))
})();
var state__29906__auto__ = (function (){var statearr_30483 = f__29905__auto__.call(null);
(statearr_30483[(6)] = c__29904__auto__);

return statearr_30483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__))
);

return c__29904__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30501 = (function (ch,cs,meta30502){
this.ch = ch;
this.cs = cs;
this.meta30502 = meta30502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30503,meta30502__$1){
var self__ = this;
var _30503__$1 = this;
return (new cljs.core.async.t_cljs$core$async30501(self__.ch,self__.cs,meta30502__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30503){
var self__ = this;
var _30503__$1 = this;
return self__.meta30502;
});})(cs))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30501.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30501.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30502","meta30502",-152967218,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30501";

cljs.core.async.t_cljs$core$async30501.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30501");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30501.
 */
cljs.core.async.__GT_t_cljs$core$async30501 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30501(ch__$1,cs__$1,meta30502){
return (new cljs.core.async.t_cljs$core$async30501(ch__$1,cs__$1,meta30502));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30501(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29904__auto___30723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___30723,cs,m,dchan,dctr,done){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___30723,cs,m,dchan,dctr,done){
return (function (state_30638){
var state_val_30639 = (state_30638[(1)]);
if((state_val_30639 === (7))){
var inst_30634 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30640_30724 = state_30638__$1;
(statearr_30640_30724[(2)] = inst_30634);

(statearr_30640_30724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (20))){
var inst_30537 = (state_30638[(7)]);
var inst_30549 = cljs.core.first.call(null,inst_30537);
var inst_30550 = cljs.core.nth.call(null,inst_30549,(0),null);
var inst_30551 = cljs.core.nth.call(null,inst_30549,(1),null);
var state_30638__$1 = (function (){var statearr_30641 = state_30638;
(statearr_30641[(8)] = inst_30550);

return statearr_30641;
})();
if(cljs.core.truth_(inst_30551)){
var statearr_30642_30725 = state_30638__$1;
(statearr_30642_30725[(1)] = (22));

} else {
var statearr_30643_30726 = state_30638__$1;
(statearr_30643_30726[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (27))){
var inst_30586 = (state_30638[(9)]);
var inst_30579 = (state_30638[(10)]);
var inst_30581 = (state_30638[(11)]);
var inst_30506 = (state_30638[(12)]);
var inst_30586__$1 = cljs.core._nth.call(null,inst_30579,inst_30581);
var inst_30587 = cljs.core.async.put_BANG_.call(null,inst_30586__$1,inst_30506,done);
var state_30638__$1 = (function (){var statearr_30644 = state_30638;
(statearr_30644[(9)] = inst_30586__$1);

return statearr_30644;
})();
if(cljs.core.truth_(inst_30587)){
var statearr_30645_30727 = state_30638__$1;
(statearr_30645_30727[(1)] = (30));

} else {
var statearr_30646_30728 = state_30638__$1;
(statearr_30646_30728[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (1))){
var state_30638__$1 = state_30638;
var statearr_30647_30729 = state_30638__$1;
(statearr_30647_30729[(2)] = null);

(statearr_30647_30729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (24))){
var inst_30537 = (state_30638[(7)]);
var inst_30556 = (state_30638[(2)]);
var inst_30557 = cljs.core.next.call(null,inst_30537);
var inst_30515 = inst_30557;
var inst_30516 = null;
var inst_30517 = (0);
var inst_30518 = (0);
var state_30638__$1 = (function (){var statearr_30648 = state_30638;
(statearr_30648[(13)] = inst_30517);

(statearr_30648[(14)] = inst_30518);

(statearr_30648[(15)] = inst_30516);

(statearr_30648[(16)] = inst_30515);

(statearr_30648[(17)] = inst_30556);

return statearr_30648;
})();
var statearr_30649_30730 = state_30638__$1;
(statearr_30649_30730[(2)] = null);

(statearr_30649_30730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (39))){
var state_30638__$1 = state_30638;
var statearr_30653_30731 = state_30638__$1;
(statearr_30653_30731[(2)] = null);

(statearr_30653_30731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (4))){
var inst_30506 = (state_30638[(12)]);
var inst_30506__$1 = (state_30638[(2)]);
var inst_30507 = (inst_30506__$1 == null);
var state_30638__$1 = (function (){var statearr_30654 = state_30638;
(statearr_30654[(12)] = inst_30506__$1);

return statearr_30654;
})();
if(cljs.core.truth_(inst_30507)){
var statearr_30655_30732 = state_30638__$1;
(statearr_30655_30732[(1)] = (5));

} else {
var statearr_30656_30733 = state_30638__$1;
(statearr_30656_30733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (15))){
var inst_30517 = (state_30638[(13)]);
var inst_30518 = (state_30638[(14)]);
var inst_30516 = (state_30638[(15)]);
var inst_30515 = (state_30638[(16)]);
var inst_30533 = (state_30638[(2)]);
var inst_30534 = (inst_30518 + (1));
var tmp30650 = inst_30517;
var tmp30651 = inst_30516;
var tmp30652 = inst_30515;
var inst_30515__$1 = tmp30652;
var inst_30516__$1 = tmp30651;
var inst_30517__$1 = tmp30650;
var inst_30518__$1 = inst_30534;
var state_30638__$1 = (function (){var statearr_30657 = state_30638;
(statearr_30657[(13)] = inst_30517__$1);

(statearr_30657[(14)] = inst_30518__$1);

(statearr_30657[(15)] = inst_30516__$1);

(statearr_30657[(16)] = inst_30515__$1);

(statearr_30657[(18)] = inst_30533);

return statearr_30657;
})();
var statearr_30658_30734 = state_30638__$1;
(statearr_30658_30734[(2)] = null);

(statearr_30658_30734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (21))){
var inst_30560 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30662_30735 = state_30638__$1;
(statearr_30662_30735[(2)] = inst_30560);

(statearr_30662_30735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (31))){
var inst_30586 = (state_30638[(9)]);
var inst_30590 = done.call(null,null);
var inst_30591 = cljs.core.async.untap_STAR_.call(null,m,inst_30586);
var state_30638__$1 = (function (){var statearr_30663 = state_30638;
(statearr_30663[(19)] = inst_30590);

return statearr_30663;
})();
var statearr_30664_30736 = state_30638__$1;
(statearr_30664_30736[(2)] = inst_30591);

(statearr_30664_30736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (32))){
var inst_30580 = (state_30638[(20)]);
var inst_30578 = (state_30638[(21)]);
var inst_30579 = (state_30638[(10)]);
var inst_30581 = (state_30638[(11)]);
var inst_30593 = (state_30638[(2)]);
var inst_30594 = (inst_30581 + (1));
var tmp30659 = inst_30580;
var tmp30660 = inst_30578;
var tmp30661 = inst_30579;
var inst_30578__$1 = tmp30660;
var inst_30579__$1 = tmp30661;
var inst_30580__$1 = tmp30659;
var inst_30581__$1 = inst_30594;
var state_30638__$1 = (function (){var statearr_30665 = state_30638;
(statearr_30665[(20)] = inst_30580__$1);

(statearr_30665[(22)] = inst_30593);

(statearr_30665[(21)] = inst_30578__$1);

(statearr_30665[(10)] = inst_30579__$1);

(statearr_30665[(11)] = inst_30581__$1);

return statearr_30665;
})();
var statearr_30666_30737 = state_30638__$1;
(statearr_30666_30737[(2)] = null);

(statearr_30666_30737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (40))){
var inst_30606 = (state_30638[(23)]);
var inst_30610 = done.call(null,null);
var inst_30611 = cljs.core.async.untap_STAR_.call(null,m,inst_30606);
var state_30638__$1 = (function (){var statearr_30667 = state_30638;
(statearr_30667[(24)] = inst_30610);

return statearr_30667;
})();
var statearr_30668_30738 = state_30638__$1;
(statearr_30668_30738[(2)] = inst_30611);

(statearr_30668_30738[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (33))){
var inst_30597 = (state_30638[(25)]);
var inst_30599 = cljs.core.chunked_seq_QMARK_.call(null,inst_30597);
var state_30638__$1 = state_30638;
if(inst_30599){
var statearr_30669_30739 = state_30638__$1;
(statearr_30669_30739[(1)] = (36));

} else {
var statearr_30670_30740 = state_30638__$1;
(statearr_30670_30740[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (13))){
var inst_30527 = (state_30638[(26)]);
var inst_30530 = cljs.core.async.close_BANG_.call(null,inst_30527);
var state_30638__$1 = state_30638;
var statearr_30671_30741 = state_30638__$1;
(statearr_30671_30741[(2)] = inst_30530);

(statearr_30671_30741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (22))){
var inst_30550 = (state_30638[(8)]);
var inst_30553 = cljs.core.async.close_BANG_.call(null,inst_30550);
var state_30638__$1 = state_30638;
var statearr_30672_30742 = state_30638__$1;
(statearr_30672_30742[(2)] = inst_30553);

(statearr_30672_30742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (36))){
var inst_30597 = (state_30638[(25)]);
var inst_30601 = cljs.core.chunk_first.call(null,inst_30597);
var inst_30602 = cljs.core.chunk_rest.call(null,inst_30597);
var inst_30603 = cljs.core.count.call(null,inst_30601);
var inst_30578 = inst_30602;
var inst_30579 = inst_30601;
var inst_30580 = inst_30603;
var inst_30581 = (0);
var state_30638__$1 = (function (){var statearr_30673 = state_30638;
(statearr_30673[(20)] = inst_30580);

(statearr_30673[(21)] = inst_30578);

(statearr_30673[(10)] = inst_30579);

(statearr_30673[(11)] = inst_30581);

return statearr_30673;
})();
var statearr_30674_30743 = state_30638__$1;
(statearr_30674_30743[(2)] = null);

(statearr_30674_30743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (41))){
var inst_30597 = (state_30638[(25)]);
var inst_30613 = (state_30638[(2)]);
var inst_30614 = cljs.core.next.call(null,inst_30597);
var inst_30578 = inst_30614;
var inst_30579 = null;
var inst_30580 = (0);
var inst_30581 = (0);
var state_30638__$1 = (function (){var statearr_30675 = state_30638;
(statearr_30675[(20)] = inst_30580);

(statearr_30675[(27)] = inst_30613);

(statearr_30675[(21)] = inst_30578);

(statearr_30675[(10)] = inst_30579);

(statearr_30675[(11)] = inst_30581);

return statearr_30675;
})();
var statearr_30676_30744 = state_30638__$1;
(statearr_30676_30744[(2)] = null);

(statearr_30676_30744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (43))){
var state_30638__$1 = state_30638;
var statearr_30677_30745 = state_30638__$1;
(statearr_30677_30745[(2)] = null);

(statearr_30677_30745[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (29))){
var inst_30622 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30678_30746 = state_30638__$1;
(statearr_30678_30746[(2)] = inst_30622);

(statearr_30678_30746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (44))){
var inst_30631 = (state_30638[(2)]);
var state_30638__$1 = (function (){var statearr_30679 = state_30638;
(statearr_30679[(28)] = inst_30631);

return statearr_30679;
})();
var statearr_30680_30747 = state_30638__$1;
(statearr_30680_30747[(2)] = null);

(statearr_30680_30747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (6))){
var inst_30570 = (state_30638[(29)]);
var inst_30569 = cljs.core.deref.call(null,cs);
var inst_30570__$1 = cljs.core.keys.call(null,inst_30569);
var inst_30571 = cljs.core.count.call(null,inst_30570__$1);
var inst_30572 = cljs.core.reset_BANG_.call(null,dctr,inst_30571);
var inst_30577 = cljs.core.seq.call(null,inst_30570__$1);
var inst_30578 = inst_30577;
var inst_30579 = null;
var inst_30580 = (0);
var inst_30581 = (0);
var state_30638__$1 = (function (){var statearr_30681 = state_30638;
(statearr_30681[(20)] = inst_30580);

(statearr_30681[(29)] = inst_30570__$1);

(statearr_30681[(21)] = inst_30578);

(statearr_30681[(10)] = inst_30579);

(statearr_30681[(30)] = inst_30572);

(statearr_30681[(11)] = inst_30581);

return statearr_30681;
})();
var statearr_30682_30748 = state_30638__$1;
(statearr_30682_30748[(2)] = null);

(statearr_30682_30748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (28))){
var inst_30597 = (state_30638[(25)]);
var inst_30578 = (state_30638[(21)]);
var inst_30597__$1 = cljs.core.seq.call(null,inst_30578);
var state_30638__$1 = (function (){var statearr_30683 = state_30638;
(statearr_30683[(25)] = inst_30597__$1);

return statearr_30683;
})();
if(inst_30597__$1){
var statearr_30684_30749 = state_30638__$1;
(statearr_30684_30749[(1)] = (33));

} else {
var statearr_30685_30750 = state_30638__$1;
(statearr_30685_30750[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (25))){
var inst_30580 = (state_30638[(20)]);
var inst_30581 = (state_30638[(11)]);
var inst_30583 = (inst_30581 < inst_30580);
var inst_30584 = inst_30583;
var state_30638__$1 = state_30638;
if(cljs.core.truth_(inst_30584)){
var statearr_30686_30751 = state_30638__$1;
(statearr_30686_30751[(1)] = (27));

} else {
var statearr_30687_30752 = state_30638__$1;
(statearr_30687_30752[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (34))){
var state_30638__$1 = state_30638;
var statearr_30688_30753 = state_30638__$1;
(statearr_30688_30753[(2)] = null);

(statearr_30688_30753[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (17))){
var state_30638__$1 = state_30638;
var statearr_30689_30754 = state_30638__$1;
(statearr_30689_30754[(2)] = null);

(statearr_30689_30754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (3))){
var inst_30636 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30638__$1,inst_30636);
} else {
if((state_val_30639 === (12))){
var inst_30565 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30690_30755 = state_30638__$1;
(statearr_30690_30755[(2)] = inst_30565);

(statearr_30690_30755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (2))){
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30638__$1,(4),ch);
} else {
if((state_val_30639 === (23))){
var state_30638__$1 = state_30638;
var statearr_30691_30756 = state_30638__$1;
(statearr_30691_30756[(2)] = null);

(statearr_30691_30756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (35))){
var inst_30620 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30692_30757 = state_30638__$1;
(statearr_30692_30757[(2)] = inst_30620);

(statearr_30692_30757[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (19))){
var inst_30537 = (state_30638[(7)]);
var inst_30541 = cljs.core.chunk_first.call(null,inst_30537);
var inst_30542 = cljs.core.chunk_rest.call(null,inst_30537);
var inst_30543 = cljs.core.count.call(null,inst_30541);
var inst_30515 = inst_30542;
var inst_30516 = inst_30541;
var inst_30517 = inst_30543;
var inst_30518 = (0);
var state_30638__$1 = (function (){var statearr_30693 = state_30638;
(statearr_30693[(13)] = inst_30517);

(statearr_30693[(14)] = inst_30518);

(statearr_30693[(15)] = inst_30516);

(statearr_30693[(16)] = inst_30515);

return statearr_30693;
})();
var statearr_30694_30758 = state_30638__$1;
(statearr_30694_30758[(2)] = null);

(statearr_30694_30758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (11))){
var inst_30537 = (state_30638[(7)]);
var inst_30515 = (state_30638[(16)]);
var inst_30537__$1 = cljs.core.seq.call(null,inst_30515);
var state_30638__$1 = (function (){var statearr_30695 = state_30638;
(statearr_30695[(7)] = inst_30537__$1);

return statearr_30695;
})();
if(inst_30537__$1){
var statearr_30696_30759 = state_30638__$1;
(statearr_30696_30759[(1)] = (16));

} else {
var statearr_30697_30760 = state_30638__$1;
(statearr_30697_30760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (9))){
var inst_30567 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30698_30761 = state_30638__$1;
(statearr_30698_30761[(2)] = inst_30567);

(statearr_30698_30761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (5))){
var inst_30513 = cljs.core.deref.call(null,cs);
var inst_30514 = cljs.core.seq.call(null,inst_30513);
var inst_30515 = inst_30514;
var inst_30516 = null;
var inst_30517 = (0);
var inst_30518 = (0);
var state_30638__$1 = (function (){var statearr_30699 = state_30638;
(statearr_30699[(13)] = inst_30517);

(statearr_30699[(14)] = inst_30518);

(statearr_30699[(15)] = inst_30516);

(statearr_30699[(16)] = inst_30515);

return statearr_30699;
})();
var statearr_30700_30762 = state_30638__$1;
(statearr_30700_30762[(2)] = null);

(statearr_30700_30762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (14))){
var state_30638__$1 = state_30638;
var statearr_30701_30763 = state_30638__$1;
(statearr_30701_30763[(2)] = null);

(statearr_30701_30763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (45))){
var inst_30628 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30702_30764 = state_30638__$1;
(statearr_30702_30764[(2)] = inst_30628);

(statearr_30702_30764[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (26))){
var inst_30570 = (state_30638[(29)]);
var inst_30624 = (state_30638[(2)]);
var inst_30625 = cljs.core.seq.call(null,inst_30570);
var state_30638__$1 = (function (){var statearr_30703 = state_30638;
(statearr_30703[(31)] = inst_30624);

return statearr_30703;
})();
if(inst_30625){
var statearr_30704_30765 = state_30638__$1;
(statearr_30704_30765[(1)] = (42));

} else {
var statearr_30705_30766 = state_30638__$1;
(statearr_30705_30766[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (16))){
var inst_30537 = (state_30638[(7)]);
var inst_30539 = cljs.core.chunked_seq_QMARK_.call(null,inst_30537);
var state_30638__$1 = state_30638;
if(inst_30539){
var statearr_30706_30767 = state_30638__$1;
(statearr_30706_30767[(1)] = (19));

} else {
var statearr_30707_30768 = state_30638__$1;
(statearr_30707_30768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (38))){
var inst_30617 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30708_30769 = state_30638__$1;
(statearr_30708_30769[(2)] = inst_30617);

(statearr_30708_30769[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (30))){
var state_30638__$1 = state_30638;
var statearr_30709_30770 = state_30638__$1;
(statearr_30709_30770[(2)] = null);

(statearr_30709_30770[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (10))){
var inst_30518 = (state_30638[(14)]);
var inst_30516 = (state_30638[(15)]);
var inst_30526 = cljs.core._nth.call(null,inst_30516,inst_30518);
var inst_30527 = cljs.core.nth.call(null,inst_30526,(0),null);
var inst_30528 = cljs.core.nth.call(null,inst_30526,(1),null);
var state_30638__$1 = (function (){var statearr_30710 = state_30638;
(statearr_30710[(26)] = inst_30527);

return statearr_30710;
})();
if(cljs.core.truth_(inst_30528)){
var statearr_30711_30771 = state_30638__$1;
(statearr_30711_30771[(1)] = (13));

} else {
var statearr_30712_30772 = state_30638__$1;
(statearr_30712_30772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (18))){
var inst_30563 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30713_30773 = state_30638__$1;
(statearr_30713_30773[(2)] = inst_30563);

(statearr_30713_30773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (42))){
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30638__$1,(45),dchan);
} else {
if((state_val_30639 === (37))){
var inst_30597 = (state_30638[(25)]);
var inst_30606 = (state_30638[(23)]);
var inst_30506 = (state_30638[(12)]);
var inst_30606__$1 = cljs.core.first.call(null,inst_30597);
var inst_30607 = cljs.core.async.put_BANG_.call(null,inst_30606__$1,inst_30506,done);
var state_30638__$1 = (function (){var statearr_30714 = state_30638;
(statearr_30714[(23)] = inst_30606__$1);

return statearr_30714;
})();
if(cljs.core.truth_(inst_30607)){
var statearr_30715_30774 = state_30638__$1;
(statearr_30715_30774[(1)] = (39));

} else {
var statearr_30716_30775 = state_30638__$1;
(statearr_30716_30775[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (8))){
var inst_30517 = (state_30638[(13)]);
var inst_30518 = (state_30638[(14)]);
var inst_30520 = (inst_30518 < inst_30517);
var inst_30521 = inst_30520;
var state_30638__$1 = state_30638;
if(cljs.core.truth_(inst_30521)){
var statearr_30717_30776 = state_30638__$1;
(statearr_30717_30776[(1)] = (10));

} else {
var statearr_30718_30777 = state_30638__$1;
(statearr_30718_30777[(1)] = (11));

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
});})(c__29904__auto___30723,cs,m,dchan,dctr,done))
;
return ((function (switch__29814__auto__,c__29904__auto___30723,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29815__auto__ = null;
var cljs$core$async$mult_$_state_machine__29815__auto____0 = (function (){
var statearr_30719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30719[(0)] = cljs$core$async$mult_$_state_machine__29815__auto__);

(statearr_30719[(1)] = (1));

return statearr_30719;
});
var cljs$core$async$mult_$_state_machine__29815__auto____1 = (function (state_30638){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30720){if((e30720 instanceof Object)){
var ex__29818__auto__ = e30720;
var statearr_30721_30778 = state_30638;
(statearr_30721_30778[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30779 = state_30638;
state_30638 = G__30779;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29815__auto__ = function(state_30638){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29815__auto____1.call(this,state_30638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29815__auto____0;
cljs$core$async$mult_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29815__auto____1;
return cljs$core$async$mult_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___30723,cs,m,dchan,dctr,done))
})();
var state__29906__auto__ = (function (){var statearr_30722 = f__29905__auto__.call(null);
(statearr_30722[(6)] = c__29904__auto___30723);

return statearr_30722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___30723,cs,m,dchan,dctr,done))
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
var G__30781 = arguments.length;
switch (G__30781) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30793 = arguments.length;
var i__4500__auto___30794 = (0);
while(true){
if((i__4500__auto___30794 < len__4499__auto___30793)){
args__4502__auto__.push((arguments[i__4500__auto___30794]));

var G__30795 = (i__4500__auto___30794 + (1));
i__4500__auto___30794 = G__30795;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30787){
var map__30788 = p__30787;
var map__30788__$1 = ((((!((map__30788 == null)))?(((((map__30788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30788):map__30788);
var opts = map__30788__$1;
var statearr_30790_30796 = state;
(statearr_30790_30796[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__30788,map__30788__$1,opts){
return (function (val){
var statearr_30791_30797 = state;
(statearr_30791_30797[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30788,map__30788__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_30792_30798 = state;
(statearr_30792_30798[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30783){
var G__30784 = cljs.core.first.call(null,seq30783);
var seq30783__$1 = cljs.core.next.call(null,seq30783);
var G__30785 = cljs.core.first.call(null,seq30783__$1);
var seq30783__$2 = cljs.core.next.call(null,seq30783__$1);
var G__30786 = cljs.core.first.call(null,seq30783__$2);
var seq30783__$3 = cljs.core.next.call(null,seq30783__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30784,G__30785,G__30786,seq30783__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30799 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30800){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30800 = meta30800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30801,meta30800__$1){
var self__ = this;
var _30801__$1 = this;
return (new cljs.core.async.t_cljs$core$async30799(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30800__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30801){
var self__ = this;
var _30801__$1 = this;
return self__.meta30800;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30800","meta30800",1897670116,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30799";

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30799");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30799.
 */
cljs.core.async.__GT_t_cljs$core$async30799 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30799(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30800){
return (new cljs.core.async.t_cljs$core$async30799(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30800));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30799(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29904__auto___30963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___30963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___30963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30903){
var state_val_30904 = (state_30903[(1)]);
if((state_val_30904 === (7))){
var inst_30818 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30905_30964 = state_30903__$1;
(statearr_30905_30964[(2)] = inst_30818);

(statearr_30905_30964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (20))){
var inst_30830 = (state_30903[(7)]);
var state_30903__$1 = state_30903;
var statearr_30906_30965 = state_30903__$1;
(statearr_30906_30965[(2)] = inst_30830);

(statearr_30906_30965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (27))){
var state_30903__$1 = state_30903;
var statearr_30907_30966 = state_30903__$1;
(statearr_30907_30966[(2)] = null);

(statearr_30907_30966[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (1))){
var inst_30805 = (state_30903[(8)]);
var inst_30805__$1 = calc_state.call(null);
var inst_30807 = (inst_30805__$1 == null);
var inst_30808 = cljs.core.not.call(null,inst_30807);
var state_30903__$1 = (function (){var statearr_30908 = state_30903;
(statearr_30908[(8)] = inst_30805__$1);

return statearr_30908;
})();
if(inst_30808){
var statearr_30909_30967 = state_30903__$1;
(statearr_30909_30967[(1)] = (2));

} else {
var statearr_30910_30968 = state_30903__$1;
(statearr_30910_30968[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (24))){
var inst_30863 = (state_30903[(9)]);
var inst_30877 = (state_30903[(10)]);
var inst_30854 = (state_30903[(11)]);
var inst_30877__$1 = inst_30854.call(null,inst_30863);
var state_30903__$1 = (function (){var statearr_30911 = state_30903;
(statearr_30911[(10)] = inst_30877__$1);

return statearr_30911;
})();
if(cljs.core.truth_(inst_30877__$1)){
var statearr_30912_30969 = state_30903__$1;
(statearr_30912_30969[(1)] = (29));

} else {
var statearr_30913_30970 = state_30903__$1;
(statearr_30913_30970[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (4))){
var inst_30821 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30821)){
var statearr_30914_30971 = state_30903__$1;
(statearr_30914_30971[(1)] = (8));

} else {
var statearr_30915_30972 = state_30903__$1;
(statearr_30915_30972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (15))){
var inst_30848 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30848)){
var statearr_30916_30973 = state_30903__$1;
(statearr_30916_30973[(1)] = (19));

} else {
var statearr_30917_30974 = state_30903__$1;
(statearr_30917_30974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (21))){
var inst_30853 = (state_30903[(12)]);
var inst_30853__$1 = (state_30903[(2)]);
var inst_30854 = cljs.core.get.call(null,inst_30853__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30855 = cljs.core.get.call(null,inst_30853__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30856 = cljs.core.get.call(null,inst_30853__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30903__$1 = (function (){var statearr_30918 = state_30903;
(statearr_30918[(13)] = inst_30855);

(statearr_30918[(12)] = inst_30853__$1);

(statearr_30918[(11)] = inst_30854);

return statearr_30918;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30903__$1,(22),inst_30856);
} else {
if((state_val_30904 === (31))){
var inst_30885 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30885)){
var statearr_30919_30975 = state_30903__$1;
(statearr_30919_30975[(1)] = (32));

} else {
var statearr_30920_30976 = state_30903__$1;
(statearr_30920_30976[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (32))){
var inst_30862 = (state_30903[(14)]);
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30903__$1,(35),out,inst_30862);
} else {
if((state_val_30904 === (33))){
var inst_30853 = (state_30903[(12)]);
var inst_30830 = inst_30853;
var state_30903__$1 = (function (){var statearr_30921 = state_30903;
(statearr_30921[(7)] = inst_30830);

return statearr_30921;
})();
var statearr_30922_30977 = state_30903__$1;
(statearr_30922_30977[(2)] = null);

(statearr_30922_30977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (13))){
var inst_30830 = (state_30903[(7)]);
var inst_30837 = inst_30830.cljs$lang$protocol_mask$partition0$;
var inst_30838 = (inst_30837 & (64));
var inst_30839 = inst_30830.cljs$core$ISeq$;
var inst_30840 = (cljs.core.PROTOCOL_SENTINEL === inst_30839);
var inst_30841 = ((inst_30838) || (inst_30840));
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30841)){
var statearr_30923_30978 = state_30903__$1;
(statearr_30923_30978[(1)] = (16));

} else {
var statearr_30924_30979 = state_30903__$1;
(statearr_30924_30979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (22))){
var inst_30862 = (state_30903[(14)]);
var inst_30863 = (state_30903[(9)]);
var inst_30861 = (state_30903[(2)]);
var inst_30862__$1 = cljs.core.nth.call(null,inst_30861,(0),null);
var inst_30863__$1 = cljs.core.nth.call(null,inst_30861,(1),null);
var inst_30864 = (inst_30862__$1 == null);
var inst_30865 = cljs.core._EQ_.call(null,inst_30863__$1,change);
var inst_30866 = ((inst_30864) || (inst_30865));
var state_30903__$1 = (function (){var statearr_30925 = state_30903;
(statearr_30925[(14)] = inst_30862__$1);

(statearr_30925[(9)] = inst_30863__$1);

return statearr_30925;
})();
if(cljs.core.truth_(inst_30866)){
var statearr_30926_30980 = state_30903__$1;
(statearr_30926_30980[(1)] = (23));

} else {
var statearr_30927_30981 = state_30903__$1;
(statearr_30927_30981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (36))){
var inst_30853 = (state_30903[(12)]);
var inst_30830 = inst_30853;
var state_30903__$1 = (function (){var statearr_30928 = state_30903;
(statearr_30928[(7)] = inst_30830);

return statearr_30928;
})();
var statearr_30929_30982 = state_30903__$1;
(statearr_30929_30982[(2)] = null);

(statearr_30929_30982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (29))){
var inst_30877 = (state_30903[(10)]);
var state_30903__$1 = state_30903;
var statearr_30930_30983 = state_30903__$1;
(statearr_30930_30983[(2)] = inst_30877);

(statearr_30930_30983[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (6))){
var state_30903__$1 = state_30903;
var statearr_30931_30984 = state_30903__$1;
(statearr_30931_30984[(2)] = false);

(statearr_30931_30984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (28))){
var inst_30873 = (state_30903[(2)]);
var inst_30874 = calc_state.call(null);
var inst_30830 = inst_30874;
var state_30903__$1 = (function (){var statearr_30932 = state_30903;
(statearr_30932[(7)] = inst_30830);

(statearr_30932[(15)] = inst_30873);

return statearr_30932;
})();
var statearr_30933_30985 = state_30903__$1;
(statearr_30933_30985[(2)] = null);

(statearr_30933_30985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (25))){
var inst_30899 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30934_30986 = state_30903__$1;
(statearr_30934_30986[(2)] = inst_30899);

(statearr_30934_30986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (34))){
var inst_30897 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30935_30987 = state_30903__$1;
(statearr_30935_30987[(2)] = inst_30897);

(statearr_30935_30987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (17))){
var state_30903__$1 = state_30903;
var statearr_30936_30988 = state_30903__$1;
(statearr_30936_30988[(2)] = false);

(statearr_30936_30988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (3))){
var state_30903__$1 = state_30903;
var statearr_30937_30989 = state_30903__$1;
(statearr_30937_30989[(2)] = false);

(statearr_30937_30989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (12))){
var inst_30901 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30903__$1,inst_30901);
} else {
if((state_val_30904 === (2))){
var inst_30805 = (state_30903[(8)]);
var inst_30810 = inst_30805.cljs$lang$protocol_mask$partition0$;
var inst_30811 = (inst_30810 & (64));
var inst_30812 = inst_30805.cljs$core$ISeq$;
var inst_30813 = (cljs.core.PROTOCOL_SENTINEL === inst_30812);
var inst_30814 = ((inst_30811) || (inst_30813));
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30814)){
var statearr_30938_30990 = state_30903__$1;
(statearr_30938_30990[(1)] = (5));

} else {
var statearr_30939_30991 = state_30903__$1;
(statearr_30939_30991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (23))){
var inst_30862 = (state_30903[(14)]);
var inst_30868 = (inst_30862 == null);
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30868)){
var statearr_30940_30992 = state_30903__$1;
(statearr_30940_30992[(1)] = (26));

} else {
var statearr_30941_30993 = state_30903__$1;
(statearr_30941_30993[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (35))){
var inst_30888 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30888)){
var statearr_30942_30994 = state_30903__$1;
(statearr_30942_30994[(1)] = (36));

} else {
var statearr_30943_30995 = state_30903__$1;
(statearr_30943_30995[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (19))){
var inst_30830 = (state_30903[(7)]);
var inst_30850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30830);
var state_30903__$1 = state_30903;
var statearr_30944_30996 = state_30903__$1;
(statearr_30944_30996[(2)] = inst_30850);

(statearr_30944_30996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (11))){
var inst_30830 = (state_30903[(7)]);
var inst_30834 = (inst_30830 == null);
var inst_30835 = cljs.core.not.call(null,inst_30834);
var state_30903__$1 = state_30903;
if(inst_30835){
var statearr_30945_30997 = state_30903__$1;
(statearr_30945_30997[(1)] = (13));

} else {
var statearr_30946_30998 = state_30903__$1;
(statearr_30946_30998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (9))){
var inst_30805 = (state_30903[(8)]);
var state_30903__$1 = state_30903;
var statearr_30947_30999 = state_30903__$1;
(statearr_30947_30999[(2)] = inst_30805);

(statearr_30947_30999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (5))){
var state_30903__$1 = state_30903;
var statearr_30948_31000 = state_30903__$1;
(statearr_30948_31000[(2)] = true);

(statearr_30948_31000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (14))){
var state_30903__$1 = state_30903;
var statearr_30949_31001 = state_30903__$1;
(statearr_30949_31001[(2)] = false);

(statearr_30949_31001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (26))){
var inst_30863 = (state_30903[(9)]);
var inst_30870 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30863);
var state_30903__$1 = state_30903;
var statearr_30950_31002 = state_30903__$1;
(statearr_30950_31002[(2)] = inst_30870);

(statearr_30950_31002[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (16))){
var state_30903__$1 = state_30903;
var statearr_30951_31003 = state_30903__$1;
(statearr_30951_31003[(2)] = true);

(statearr_30951_31003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (38))){
var inst_30893 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30952_31004 = state_30903__$1;
(statearr_30952_31004[(2)] = inst_30893);

(statearr_30952_31004[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (30))){
var inst_30855 = (state_30903[(13)]);
var inst_30863 = (state_30903[(9)]);
var inst_30854 = (state_30903[(11)]);
var inst_30880 = cljs.core.empty_QMARK_.call(null,inst_30854);
var inst_30881 = inst_30855.call(null,inst_30863);
var inst_30882 = cljs.core.not.call(null,inst_30881);
var inst_30883 = ((inst_30880) && (inst_30882));
var state_30903__$1 = state_30903;
var statearr_30953_31005 = state_30903__$1;
(statearr_30953_31005[(2)] = inst_30883);

(statearr_30953_31005[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (10))){
var inst_30805 = (state_30903[(8)]);
var inst_30826 = (state_30903[(2)]);
var inst_30827 = cljs.core.get.call(null,inst_30826,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30828 = cljs.core.get.call(null,inst_30826,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30829 = cljs.core.get.call(null,inst_30826,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30830 = inst_30805;
var state_30903__$1 = (function (){var statearr_30954 = state_30903;
(statearr_30954[(7)] = inst_30830);

(statearr_30954[(16)] = inst_30827);

(statearr_30954[(17)] = inst_30829);

(statearr_30954[(18)] = inst_30828);

return statearr_30954;
})();
var statearr_30955_31006 = state_30903__$1;
(statearr_30955_31006[(2)] = null);

(statearr_30955_31006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (18))){
var inst_30845 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30956_31007 = state_30903__$1;
(statearr_30956_31007[(2)] = inst_30845);

(statearr_30956_31007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (37))){
var state_30903__$1 = state_30903;
var statearr_30957_31008 = state_30903__$1;
(statearr_30957_31008[(2)] = null);

(statearr_30957_31008[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (8))){
var inst_30805 = (state_30903[(8)]);
var inst_30823 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30805);
var state_30903__$1 = state_30903;
var statearr_30958_31009 = state_30903__$1;
(statearr_30958_31009[(2)] = inst_30823);

(statearr_30958_31009[(1)] = (10));


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
});})(c__29904__auto___30963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29814__auto__,c__29904__auto___30963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29815__auto__ = null;
var cljs$core$async$mix_$_state_machine__29815__auto____0 = (function (){
var statearr_30959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30959[(0)] = cljs$core$async$mix_$_state_machine__29815__auto__);

(statearr_30959[(1)] = (1));

return statearr_30959;
});
var cljs$core$async$mix_$_state_machine__29815__auto____1 = (function (state_30903){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_30903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e30960){if((e30960 instanceof Object)){
var ex__29818__auto__ = e30960;
var statearr_30961_31010 = state_30903;
(statearr_30961_31010[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31011 = state_30903;
state_30903 = G__31011;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29815__auto__ = function(state_30903){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29815__auto____1.call(this,state_30903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29815__auto____0;
cljs$core$async$mix_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29815__auto____1;
return cljs$core$async$mix_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___30963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29906__auto__ = (function (){var statearr_30962 = f__29905__auto__.call(null);
(statearr_30962[(6)] = c__29904__auto___30963);

return statearr_30962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___30963,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31013 = arguments.length;
switch (G__31013) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
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
var G__31017 = arguments.length;
switch (G__31017) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__31015_SHARP_){
if(cljs.core.truth_(p1__31015_SHARP_.call(null,topic))){
return p1__31015_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31015_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31018 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31019){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31019 = meta31019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31020,meta31019__$1){
var self__ = this;
var _31020__$1 = this;
return (new cljs.core.async.t_cljs$core$async31018(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31019__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31020){
var self__ = this;
var _31020__$1 = this;
return self__.meta31019;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31018.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31019","meta31019",-1541130720,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31018";

cljs.core.async.t_cljs$core$async31018.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31018");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31018.
 */
cljs.core.async.__GT_t_cljs$core$async31018 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31019){
return (new cljs.core.async.t_cljs$core$async31018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31019));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31018(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29904__auto___31138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___31138,mults,ensure_mult,p){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___31138,mults,ensure_mult,p){
return (function (state_31092){
var state_val_31093 = (state_31092[(1)]);
if((state_val_31093 === (7))){
var inst_31088 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31094_31139 = state_31092__$1;
(statearr_31094_31139[(2)] = inst_31088);

(statearr_31094_31139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (20))){
var state_31092__$1 = state_31092;
var statearr_31095_31140 = state_31092__$1;
(statearr_31095_31140[(2)] = null);

(statearr_31095_31140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (1))){
var state_31092__$1 = state_31092;
var statearr_31096_31141 = state_31092__$1;
(statearr_31096_31141[(2)] = null);

(statearr_31096_31141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (24))){
var inst_31071 = (state_31092[(7)]);
var inst_31080 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31071);
var state_31092__$1 = state_31092;
var statearr_31097_31142 = state_31092__$1;
(statearr_31097_31142[(2)] = inst_31080);

(statearr_31097_31142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (4))){
var inst_31023 = (state_31092[(8)]);
var inst_31023__$1 = (state_31092[(2)]);
var inst_31024 = (inst_31023__$1 == null);
var state_31092__$1 = (function (){var statearr_31098 = state_31092;
(statearr_31098[(8)] = inst_31023__$1);

return statearr_31098;
})();
if(cljs.core.truth_(inst_31024)){
var statearr_31099_31143 = state_31092__$1;
(statearr_31099_31143[(1)] = (5));

} else {
var statearr_31100_31144 = state_31092__$1;
(statearr_31100_31144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (15))){
var inst_31065 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31101_31145 = state_31092__$1;
(statearr_31101_31145[(2)] = inst_31065);

(statearr_31101_31145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (21))){
var inst_31085 = (state_31092[(2)]);
var state_31092__$1 = (function (){var statearr_31102 = state_31092;
(statearr_31102[(9)] = inst_31085);

return statearr_31102;
})();
var statearr_31103_31146 = state_31092__$1;
(statearr_31103_31146[(2)] = null);

(statearr_31103_31146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (13))){
var inst_31047 = (state_31092[(10)]);
var inst_31049 = cljs.core.chunked_seq_QMARK_.call(null,inst_31047);
var state_31092__$1 = state_31092;
if(inst_31049){
var statearr_31104_31147 = state_31092__$1;
(statearr_31104_31147[(1)] = (16));

} else {
var statearr_31105_31148 = state_31092__$1;
(statearr_31105_31148[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (22))){
var inst_31077 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
if(cljs.core.truth_(inst_31077)){
var statearr_31106_31149 = state_31092__$1;
(statearr_31106_31149[(1)] = (23));

} else {
var statearr_31107_31150 = state_31092__$1;
(statearr_31107_31150[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (6))){
var inst_31071 = (state_31092[(7)]);
var inst_31023 = (state_31092[(8)]);
var inst_31073 = (state_31092[(11)]);
var inst_31071__$1 = topic_fn.call(null,inst_31023);
var inst_31072 = cljs.core.deref.call(null,mults);
var inst_31073__$1 = cljs.core.get.call(null,inst_31072,inst_31071__$1);
var state_31092__$1 = (function (){var statearr_31108 = state_31092;
(statearr_31108[(7)] = inst_31071__$1);

(statearr_31108[(11)] = inst_31073__$1);

return statearr_31108;
})();
if(cljs.core.truth_(inst_31073__$1)){
var statearr_31109_31151 = state_31092__$1;
(statearr_31109_31151[(1)] = (19));

} else {
var statearr_31110_31152 = state_31092__$1;
(statearr_31110_31152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (25))){
var inst_31082 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31111_31153 = state_31092__$1;
(statearr_31111_31153[(2)] = inst_31082);

(statearr_31111_31153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (17))){
var inst_31047 = (state_31092[(10)]);
var inst_31056 = cljs.core.first.call(null,inst_31047);
var inst_31057 = cljs.core.async.muxch_STAR_.call(null,inst_31056);
var inst_31058 = cljs.core.async.close_BANG_.call(null,inst_31057);
var inst_31059 = cljs.core.next.call(null,inst_31047);
var inst_31033 = inst_31059;
var inst_31034 = null;
var inst_31035 = (0);
var inst_31036 = (0);
var state_31092__$1 = (function (){var statearr_31112 = state_31092;
(statearr_31112[(12)] = inst_31033);

(statearr_31112[(13)] = inst_31058);

(statearr_31112[(14)] = inst_31034);

(statearr_31112[(15)] = inst_31036);

(statearr_31112[(16)] = inst_31035);

return statearr_31112;
})();
var statearr_31113_31154 = state_31092__$1;
(statearr_31113_31154[(2)] = null);

(statearr_31113_31154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (3))){
var inst_31090 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31092__$1,inst_31090);
} else {
if((state_val_31093 === (12))){
var inst_31067 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31114_31155 = state_31092__$1;
(statearr_31114_31155[(2)] = inst_31067);

(statearr_31114_31155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (2))){
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31092__$1,(4),ch);
} else {
if((state_val_31093 === (23))){
var state_31092__$1 = state_31092;
var statearr_31115_31156 = state_31092__$1;
(statearr_31115_31156[(2)] = null);

(statearr_31115_31156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (19))){
var inst_31023 = (state_31092[(8)]);
var inst_31073 = (state_31092[(11)]);
var inst_31075 = cljs.core.async.muxch_STAR_.call(null,inst_31073);
var state_31092__$1 = state_31092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31092__$1,(22),inst_31075,inst_31023);
} else {
if((state_val_31093 === (11))){
var inst_31033 = (state_31092[(12)]);
var inst_31047 = (state_31092[(10)]);
var inst_31047__$1 = cljs.core.seq.call(null,inst_31033);
var state_31092__$1 = (function (){var statearr_31116 = state_31092;
(statearr_31116[(10)] = inst_31047__$1);

return statearr_31116;
})();
if(inst_31047__$1){
var statearr_31117_31157 = state_31092__$1;
(statearr_31117_31157[(1)] = (13));

} else {
var statearr_31118_31158 = state_31092__$1;
(statearr_31118_31158[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (9))){
var inst_31069 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31119_31159 = state_31092__$1;
(statearr_31119_31159[(2)] = inst_31069);

(statearr_31119_31159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (5))){
var inst_31030 = cljs.core.deref.call(null,mults);
var inst_31031 = cljs.core.vals.call(null,inst_31030);
var inst_31032 = cljs.core.seq.call(null,inst_31031);
var inst_31033 = inst_31032;
var inst_31034 = null;
var inst_31035 = (0);
var inst_31036 = (0);
var state_31092__$1 = (function (){var statearr_31120 = state_31092;
(statearr_31120[(12)] = inst_31033);

(statearr_31120[(14)] = inst_31034);

(statearr_31120[(15)] = inst_31036);

(statearr_31120[(16)] = inst_31035);

return statearr_31120;
})();
var statearr_31121_31160 = state_31092__$1;
(statearr_31121_31160[(2)] = null);

(statearr_31121_31160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (14))){
var state_31092__$1 = state_31092;
var statearr_31125_31161 = state_31092__$1;
(statearr_31125_31161[(2)] = null);

(statearr_31125_31161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (16))){
var inst_31047 = (state_31092[(10)]);
var inst_31051 = cljs.core.chunk_first.call(null,inst_31047);
var inst_31052 = cljs.core.chunk_rest.call(null,inst_31047);
var inst_31053 = cljs.core.count.call(null,inst_31051);
var inst_31033 = inst_31052;
var inst_31034 = inst_31051;
var inst_31035 = inst_31053;
var inst_31036 = (0);
var state_31092__$1 = (function (){var statearr_31126 = state_31092;
(statearr_31126[(12)] = inst_31033);

(statearr_31126[(14)] = inst_31034);

(statearr_31126[(15)] = inst_31036);

(statearr_31126[(16)] = inst_31035);

return statearr_31126;
})();
var statearr_31127_31162 = state_31092__$1;
(statearr_31127_31162[(2)] = null);

(statearr_31127_31162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (10))){
var inst_31033 = (state_31092[(12)]);
var inst_31034 = (state_31092[(14)]);
var inst_31036 = (state_31092[(15)]);
var inst_31035 = (state_31092[(16)]);
var inst_31041 = cljs.core._nth.call(null,inst_31034,inst_31036);
var inst_31042 = cljs.core.async.muxch_STAR_.call(null,inst_31041);
var inst_31043 = cljs.core.async.close_BANG_.call(null,inst_31042);
var inst_31044 = (inst_31036 + (1));
var tmp31122 = inst_31033;
var tmp31123 = inst_31034;
var tmp31124 = inst_31035;
var inst_31033__$1 = tmp31122;
var inst_31034__$1 = tmp31123;
var inst_31035__$1 = tmp31124;
var inst_31036__$1 = inst_31044;
var state_31092__$1 = (function (){var statearr_31128 = state_31092;
(statearr_31128[(12)] = inst_31033__$1);

(statearr_31128[(17)] = inst_31043);

(statearr_31128[(14)] = inst_31034__$1);

(statearr_31128[(15)] = inst_31036__$1);

(statearr_31128[(16)] = inst_31035__$1);

return statearr_31128;
})();
var statearr_31129_31163 = state_31092__$1;
(statearr_31129_31163[(2)] = null);

(statearr_31129_31163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (18))){
var inst_31062 = (state_31092[(2)]);
var state_31092__$1 = state_31092;
var statearr_31130_31164 = state_31092__$1;
(statearr_31130_31164[(2)] = inst_31062);

(statearr_31130_31164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31093 === (8))){
var inst_31036 = (state_31092[(15)]);
var inst_31035 = (state_31092[(16)]);
var inst_31038 = (inst_31036 < inst_31035);
var inst_31039 = inst_31038;
var state_31092__$1 = state_31092;
if(cljs.core.truth_(inst_31039)){
var statearr_31131_31165 = state_31092__$1;
(statearr_31131_31165[(1)] = (10));

} else {
var statearr_31132_31166 = state_31092__$1;
(statearr_31132_31166[(1)] = (11));

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
});})(c__29904__auto___31138,mults,ensure_mult,p))
;
return ((function (switch__29814__auto__,c__29904__auto___31138,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_31133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31133[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_31133[(1)] = (1));

return statearr_31133;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_31092){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31134){if((e31134 instanceof Object)){
var ex__29818__auto__ = e31134;
var statearr_31135_31167 = state_31092;
(statearr_31135_31167[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31168 = state_31092;
state_31092 = G__31168;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_31092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_31092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___31138,mults,ensure_mult,p))
})();
var state__29906__auto__ = (function (){var statearr_31136 = f__29905__auto__.call(null);
(statearr_31136[(6)] = c__29904__auto___31138);

return statearr_31136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___31138,mults,ensure_mult,p))
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
var G__31170 = arguments.length;
switch (G__31170) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31173 = arguments.length;
switch (G__31173) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31176 = arguments.length;
switch (G__31176) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__29904__auto___31243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___31243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___31243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var state_31215__$1 = state_31215;
var statearr_31217_31244 = state_31215__$1;
(statearr_31217_31244[(2)] = null);

(statearr_31217_31244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var state_31215__$1 = state_31215;
var statearr_31218_31245 = state_31215__$1;
(statearr_31218_31245[(2)] = null);

(statearr_31218_31245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31179 = (state_31215[(7)]);
var inst_31181 = (inst_31179 < cnt);
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31181)){
var statearr_31219_31246 = state_31215__$1;
(statearr_31219_31246[(1)] = (6));

} else {
var statearr_31220_31247 = state_31215__$1;
(statearr_31220_31247[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (15))){
var inst_31211 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31221_31248 = state_31215__$1;
(statearr_31221_31248[(2)] = inst_31211);

(statearr_31221_31248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (13))){
var inst_31204 = cljs.core.async.close_BANG_.call(null,out);
var state_31215__$1 = state_31215;
var statearr_31222_31249 = state_31215__$1;
(statearr_31222_31249[(2)] = inst_31204);

(statearr_31222_31249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var state_31215__$1 = state_31215;
var statearr_31223_31250 = state_31215__$1;
(statearr_31223_31250[(2)] = null);

(statearr_31223_31250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (3))){
var inst_31213 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31215__$1,inst_31213);
} else {
if((state_val_31216 === (12))){
var inst_31201 = (state_31215[(8)]);
var inst_31201__$1 = (state_31215[(2)]);
var inst_31202 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31201__$1);
var state_31215__$1 = (function (){var statearr_31224 = state_31215;
(statearr_31224[(8)] = inst_31201__$1);

return statearr_31224;
})();
if(cljs.core.truth_(inst_31202)){
var statearr_31225_31251 = state_31215__$1;
(statearr_31225_31251[(1)] = (13));

} else {
var statearr_31226_31252 = state_31215__$1;
(statearr_31226_31252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (2))){
var inst_31178 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31179 = (0);
var state_31215__$1 = (function (){var statearr_31227 = state_31215;
(statearr_31227[(7)] = inst_31179);

(statearr_31227[(9)] = inst_31178);

return statearr_31227;
})();
var statearr_31228_31253 = state_31215__$1;
(statearr_31228_31253[(2)] = null);

(statearr_31228_31253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (11))){
var inst_31179 = (state_31215[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31215,(10),Object,null,(9));
var inst_31188 = chs__$1.call(null,inst_31179);
var inst_31189 = done.call(null,inst_31179);
var inst_31190 = cljs.core.async.take_BANG_.call(null,inst_31188,inst_31189);
var state_31215__$1 = state_31215;
var statearr_31229_31254 = state_31215__$1;
(statearr_31229_31254[(2)] = inst_31190);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var inst_31179 = (state_31215[(7)]);
var inst_31192 = (state_31215[(2)]);
var inst_31193 = (inst_31179 + (1));
var inst_31179__$1 = inst_31193;
var state_31215__$1 = (function (){var statearr_31230 = state_31215;
(statearr_31230[(7)] = inst_31179__$1);

(statearr_31230[(10)] = inst_31192);

return statearr_31230;
})();
var statearr_31231_31255 = state_31215__$1;
(statearr_31231_31255[(2)] = null);

(statearr_31231_31255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (5))){
var inst_31199 = (state_31215[(2)]);
var state_31215__$1 = (function (){var statearr_31232 = state_31215;
(statearr_31232[(11)] = inst_31199);

return statearr_31232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31215__$1,(12),dchan);
} else {
if((state_val_31216 === (14))){
var inst_31201 = (state_31215[(8)]);
var inst_31206 = cljs.core.apply.call(null,f,inst_31201);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31215__$1,(16),out,inst_31206);
} else {
if((state_val_31216 === (16))){
var inst_31208 = (state_31215[(2)]);
var state_31215__$1 = (function (){var statearr_31233 = state_31215;
(statearr_31233[(12)] = inst_31208);

return statearr_31233;
})();
var statearr_31234_31256 = state_31215__$1;
(statearr_31234_31256[(2)] = null);

(statearr_31234_31256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31183 = (state_31215[(2)]);
var inst_31184 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31215__$1 = (function (){var statearr_31235 = state_31215;
(statearr_31235[(13)] = inst_31183);

return statearr_31235;
})();
var statearr_31236_31257 = state_31215__$1;
(statearr_31236_31257[(2)] = inst_31184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (8))){
var inst_31197 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31237_31258 = state_31215__$1;
(statearr_31237_31258[(2)] = inst_31197);

(statearr_31237_31258[(1)] = (5));


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
});})(c__29904__auto___31243,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29814__auto__,c__29904__auto___31243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_31238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31238[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_31238[(1)] = (1));

return statearr_31238;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_31215){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31239){if((e31239 instanceof Object)){
var ex__29818__auto__ = e31239;
var statearr_31240_31259 = state_31215;
(statearr_31240_31259[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31260 = state_31215;
state_31215 = G__31260;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___31243,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29906__auto__ = (function (){var statearr_31241 = f__29905__auto__.call(null);
(statearr_31241[(6)] = c__29904__auto___31243);

return statearr_31241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___31243,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__31263 = arguments.length;
switch (G__31263) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29904__auto___31317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___31317,out){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___31317,out){
return (function (state_31295){
var state_val_31296 = (state_31295[(1)]);
if((state_val_31296 === (7))){
var inst_31274 = (state_31295[(7)]);
var inst_31275 = (state_31295[(8)]);
var inst_31274__$1 = (state_31295[(2)]);
var inst_31275__$1 = cljs.core.nth.call(null,inst_31274__$1,(0),null);
var inst_31276 = cljs.core.nth.call(null,inst_31274__$1,(1),null);
var inst_31277 = (inst_31275__$1 == null);
var state_31295__$1 = (function (){var statearr_31297 = state_31295;
(statearr_31297[(7)] = inst_31274__$1);

(statearr_31297[(9)] = inst_31276);

(statearr_31297[(8)] = inst_31275__$1);

return statearr_31297;
})();
if(cljs.core.truth_(inst_31277)){
var statearr_31298_31318 = state_31295__$1;
(statearr_31298_31318[(1)] = (8));

} else {
var statearr_31299_31319 = state_31295__$1;
(statearr_31299_31319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (1))){
var inst_31264 = cljs.core.vec.call(null,chs);
var inst_31265 = inst_31264;
var state_31295__$1 = (function (){var statearr_31300 = state_31295;
(statearr_31300[(10)] = inst_31265);

return statearr_31300;
})();
var statearr_31301_31320 = state_31295__$1;
(statearr_31301_31320[(2)] = null);

(statearr_31301_31320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (4))){
var inst_31265 = (state_31295[(10)]);
var state_31295__$1 = state_31295;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31295__$1,(7),inst_31265);
} else {
if((state_val_31296 === (6))){
var inst_31291 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
var statearr_31302_31321 = state_31295__$1;
(statearr_31302_31321[(2)] = inst_31291);

(statearr_31302_31321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (3))){
var inst_31293 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31295__$1,inst_31293);
} else {
if((state_val_31296 === (2))){
var inst_31265 = (state_31295[(10)]);
var inst_31267 = cljs.core.count.call(null,inst_31265);
var inst_31268 = (inst_31267 > (0));
var state_31295__$1 = state_31295;
if(cljs.core.truth_(inst_31268)){
var statearr_31304_31322 = state_31295__$1;
(statearr_31304_31322[(1)] = (4));

} else {
var statearr_31305_31323 = state_31295__$1;
(statearr_31305_31323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (11))){
var inst_31265 = (state_31295[(10)]);
var inst_31284 = (state_31295[(2)]);
var tmp31303 = inst_31265;
var inst_31265__$1 = tmp31303;
var state_31295__$1 = (function (){var statearr_31306 = state_31295;
(statearr_31306[(10)] = inst_31265__$1);

(statearr_31306[(11)] = inst_31284);

return statearr_31306;
})();
var statearr_31307_31324 = state_31295__$1;
(statearr_31307_31324[(2)] = null);

(statearr_31307_31324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (9))){
var inst_31275 = (state_31295[(8)]);
var state_31295__$1 = state_31295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31295__$1,(11),out,inst_31275);
} else {
if((state_val_31296 === (5))){
var inst_31289 = cljs.core.async.close_BANG_.call(null,out);
var state_31295__$1 = state_31295;
var statearr_31308_31325 = state_31295__$1;
(statearr_31308_31325[(2)] = inst_31289);

(statearr_31308_31325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (10))){
var inst_31287 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
var statearr_31309_31326 = state_31295__$1;
(statearr_31309_31326[(2)] = inst_31287);

(statearr_31309_31326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (8))){
var inst_31265 = (state_31295[(10)]);
var inst_31274 = (state_31295[(7)]);
var inst_31276 = (state_31295[(9)]);
var inst_31275 = (state_31295[(8)]);
var inst_31279 = (function (){var cs = inst_31265;
var vec__31270 = inst_31274;
var v = inst_31275;
var c = inst_31276;
return ((function (cs,vec__31270,v,c,inst_31265,inst_31274,inst_31276,inst_31275,state_val_31296,c__29904__auto___31317,out){
return (function (p1__31261_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31261_SHARP_);
});
;})(cs,vec__31270,v,c,inst_31265,inst_31274,inst_31276,inst_31275,state_val_31296,c__29904__auto___31317,out))
})();
var inst_31280 = cljs.core.filterv.call(null,inst_31279,inst_31265);
var inst_31265__$1 = inst_31280;
var state_31295__$1 = (function (){var statearr_31310 = state_31295;
(statearr_31310[(10)] = inst_31265__$1);

return statearr_31310;
})();
var statearr_31311_31327 = state_31295__$1;
(statearr_31311_31327[(2)] = null);

(statearr_31311_31327[(1)] = (2));


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
});})(c__29904__auto___31317,out))
;
return ((function (switch__29814__auto__,c__29904__auto___31317,out){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_31312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31312[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_31312[(1)] = (1));

return statearr_31312;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_31295){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31313){if((e31313 instanceof Object)){
var ex__29818__auto__ = e31313;
var statearr_31314_31328 = state_31295;
(statearr_31314_31328[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31329 = state_31295;
state_31295 = G__31329;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_31295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_31295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___31317,out))
})();
var state__29906__auto__ = (function (){var statearr_31315 = f__29905__auto__.call(null);
(statearr_31315[(6)] = c__29904__auto___31317);

return statearr_31315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___31317,out))
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
var G__31331 = arguments.length;
switch (G__31331) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29904__auto___31376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___31376,out){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___31376,out){
return (function (state_31355){
var state_val_31356 = (state_31355[(1)]);
if((state_val_31356 === (7))){
var inst_31337 = (state_31355[(7)]);
var inst_31337__$1 = (state_31355[(2)]);
var inst_31338 = (inst_31337__$1 == null);
var inst_31339 = cljs.core.not.call(null,inst_31338);
var state_31355__$1 = (function (){var statearr_31357 = state_31355;
(statearr_31357[(7)] = inst_31337__$1);

return statearr_31357;
})();
if(inst_31339){
var statearr_31358_31377 = state_31355__$1;
(statearr_31358_31377[(1)] = (8));

} else {
var statearr_31359_31378 = state_31355__$1;
(statearr_31359_31378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (1))){
var inst_31332 = (0);
var state_31355__$1 = (function (){var statearr_31360 = state_31355;
(statearr_31360[(8)] = inst_31332);

return statearr_31360;
})();
var statearr_31361_31379 = state_31355__$1;
(statearr_31361_31379[(2)] = null);

(statearr_31361_31379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (4))){
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31355__$1,(7),ch);
} else {
if((state_val_31356 === (6))){
var inst_31350 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
var statearr_31362_31380 = state_31355__$1;
(statearr_31362_31380[(2)] = inst_31350);

(statearr_31362_31380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (3))){
var inst_31352 = (state_31355[(2)]);
var inst_31353 = cljs.core.async.close_BANG_.call(null,out);
var state_31355__$1 = (function (){var statearr_31363 = state_31355;
(statearr_31363[(9)] = inst_31352);

return statearr_31363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31355__$1,inst_31353);
} else {
if((state_val_31356 === (2))){
var inst_31332 = (state_31355[(8)]);
var inst_31334 = (inst_31332 < n);
var state_31355__$1 = state_31355;
if(cljs.core.truth_(inst_31334)){
var statearr_31364_31381 = state_31355__$1;
(statearr_31364_31381[(1)] = (4));

} else {
var statearr_31365_31382 = state_31355__$1;
(statearr_31365_31382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (11))){
var inst_31332 = (state_31355[(8)]);
var inst_31342 = (state_31355[(2)]);
var inst_31343 = (inst_31332 + (1));
var inst_31332__$1 = inst_31343;
var state_31355__$1 = (function (){var statearr_31366 = state_31355;
(statearr_31366[(10)] = inst_31342);

(statearr_31366[(8)] = inst_31332__$1);

return statearr_31366;
})();
var statearr_31367_31383 = state_31355__$1;
(statearr_31367_31383[(2)] = null);

(statearr_31367_31383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (9))){
var state_31355__$1 = state_31355;
var statearr_31368_31384 = state_31355__$1;
(statearr_31368_31384[(2)] = null);

(statearr_31368_31384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (5))){
var state_31355__$1 = state_31355;
var statearr_31369_31385 = state_31355__$1;
(statearr_31369_31385[(2)] = null);

(statearr_31369_31385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (10))){
var inst_31347 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
var statearr_31370_31386 = state_31355__$1;
(statearr_31370_31386[(2)] = inst_31347);

(statearr_31370_31386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31356 === (8))){
var inst_31337 = (state_31355[(7)]);
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31355__$1,(11),out,inst_31337);
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
});})(c__29904__auto___31376,out))
;
return ((function (switch__29814__auto__,c__29904__auto___31376,out){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_31371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31371[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_31371[(1)] = (1));

return statearr_31371;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_31355){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31372){if((e31372 instanceof Object)){
var ex__29818__auto__ = e31372;
var statearr_31373_31387 = state_31355;
(statearr_31373_31387[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31388 = state_31355;
state_31355 = G__31388;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_31355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_31355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___31376,out))
})();
var state__29906__auto__ = (function (){var statearr_31374 = f__29905__auto__.call(null);
(statearr_31374[(6)] = c__29904__auto___31376);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___31376,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31390 = (function (f,ch,meta31391){
this.f = f;
this.ch = ch;
this.meta31391 = meta31391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31392,meta31391__$1){
var self__ = this;
var _31392__$1 = this;
return (new cljs.core.async.t_cljs$core$async31390(self__.f,self__.ch,meta31391__$1));
});

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31392){
var self__ = this;
var _31392__$1 = this;
return self__.meta31391;
});

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31393 = (function (f,ch,meta31391,_,fn1,meta31394){
this.f = f;
this.ch = ch;
this.meta31391 = meta31391;
this._ = _;
this.fn1 = fn1;
this.meta31394 = meta31394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31395,meta31394__$1){
var self__ = this;
var _31395__$1 = this;
return (new cljs.core.async.t_cljs$core$async31393(self__.f,self__.ch,self__.meta31391,self__._,self__.fn1,meta31394__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31395){
var self__ = this;
var _31395__$1 = this;
return self__.meta31394;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31389_SHARP_){
return f1.call(null,(((p1__31389_SHARP_ == null))?null:self__.f.call(null,p1__31389_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31393.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31391","meta31391",-2059744173,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31390","cljs.core.async/t_cljs$core$async31390",1718112534,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31394","meta31394",-534219550,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31393";

cljs.core.async.t_cljs$core$async31393.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31393");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31393.
 */
cljs.core.async.__GT_t_cljs$core$async31393 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31393(f__$1,ch__$1,meta31391__$1,___$2,fn1__$1,meta31394){
return (new cljs.core.async.t_cljs$core$async31393(f__$1,ch__$1,meta31391__$1,___$2,fn1__$1,meta31394));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31393(self__.f,self__.ch,self__.meta31391,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31391","meta31391",-2059744173,null)], null);
});

cljs.core.async.t_cljs$core$async31390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31390";

cljs.core.async.t_cljs$core$async31390.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31390");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31390.
 */
cljs.core.async.__GT_t_cljs$core$async31390 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31390(f__$1,ch__$1,meta31391){
return (new cljs.core.async.t_cljs$core$async31390(f__$1,ch__$1,meta31391));
});

}

return (new cljs.core.async.t_cljs$core$async31390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31396 = (function (f,ch,meta31397){
this.f = f;
this.ch = ch;
this.meta31397 = meta31397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31398,meta31397__$1){
var self__ = this;
var _31398__$1 = this;
return (new cljs.core.async.t_cljs$core$async31396(self__.f,self__.ch,meta31397__$1));
});

cljs.core.async.t_cljs$core$async31396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31398){
var self__ = this;
var _31398__$1 = this;
return self__.meta31397;
});

cljs.core.async.t_cljs$core$async31396.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31396.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31396.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31397","meta31397",-1616030064,null)], null);
});

cljs.core.async.t_cljs$core$async31396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31396";

cljs.core.async.t_cljs$core$async31396.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31396");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31396.
 */
cljs.core.async.__GT_t_cljs$core$async31396 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31396(f__$1,ch__$1,meta31397){
return (new cljs.core.async.t_cljs$core$async31396(f__$1,ch__$1,meta31397));
});

}

return (new cljs.core.async.t_cljs$core$async31396(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31399 = (function (p,ch,meta31400){
this.p = p;
this.ch = ch;
this.meta31400 = meta31400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31401,meta31400__$1){
var self__ = this;
var _31401__$1 = this;
return (new cljs.core.async.t_cljs$core$async31399(self__.p,self__.ch,meta31400__$1));
});

cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31401){
var self__ = this;
var _31401__$1 = this;
return self__.meta31400;
});

cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31399.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31400","meta31400",-383728775,null)], null);
});

cljs.core.async.t_cljs$core$async31399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31399";

cljs.core.async.t_cljs$core$async31399.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31399");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31399.
 */
cljs.core.async.__GT_t_cljs$core$async31399 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31399(p__$1,ch__$1,meta31400){
return (new cljs.core.async.t_cljs$core$async31399(p__$1,ch__$1,meta31400));
});

}

return (new cljs.core.async.t_cljs$core$async31399(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31403 = arguments.length;
switch (G__31403) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29904__auto___31443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___31443,out){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___31443,out){
return (function (state_31424){
var state_val_31425 = (state_31424[(1)]);
if((state_val_31425 === (7))){
var inst_31420 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31426_31444 = state_31424__$1;
(statearr_31426_31444[(2)] = inst_31420);

(statearr_31426_31444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (1))){
var state_31424__$1 = state_31424;
var statearr_31427_31445 = state_31424__$1;
(statearr_31427_31445[(2)] = null);

(statearr_31427_31445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (4))){
var inst_31406 = (state_31424[(7)]);
var inst_31406__$1 = (state_31424[(2)]);
var inst_31407 = (inst_31406__$1 == null);
var state_31424__$1 = (function (){var statearr_31428 = state_31424;
(statearr_31428[(7)] = inst_31406__$1);

return statearr_31428;
})();
if(cljs.core.truth_(inst_31407)){
var statearr_31429_31446 = state_31424__$1;
(statearr_31429_31446[(1)] = (5));

} else {
var statearr_31430_31447 = state_31424__$1;
(statearr_31430_31447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (6))){
var inst_31406 = (state_31424[(7)]);
var inst_31411 = p.call(null,inst_31406);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31411)){
var statearr_31431_31448 = state_31424__$1;
(statearr_31431_31448[(1)] = (8));

} else {
var statearr_31432_31449 = state_31424__$1;
(statearr_31432_31449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (3))){
var inst_31422 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31424__$1,inst_31422);
} else {
if((state_val_31425 === (2))){
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31424__$1,(4),ch);
} else {
if((state_val_31425 === (11))){
var inst_31414 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31433_31450 = state_31424__$1;
(statearr_31433_31450[(2)] = inst_31414);

(statearr_31433_31450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (9))){
var state_31424__$1 = state_31424;
var statearr_31434_31451 = state_31424__$1;
(statearr_31434_31451[(2)] = null);

(statearr_31434_31451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (5))){
var inst_31409 = cljs.core.async.close_BANG_.call(null,out);
var state_31424__$1 = state_31424;
var statearr_31435_31452 = state_31424__$1;
(statearr_31435_31452[(2)] = inst_31409);

(statearr_31435_31452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (10))){
var inst_31417 = (state_31424[(2)]);
var state_31424__$1 = (function (){var statearr_31436 = state_31424;
(statearr_31436[(8)] = inst_31417);

return statearr_31436;
})();
var statearr_31437_31453 = state_31424__$1;
(statearr_31437_31453[(2)] = null);

(statearr_31437_31453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (8))){
var inst_31406 = (state_31424[(7)]);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31424__$1,(11),out,inst_31406);
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
});})(c__29904__auto___31443,out))
;
return ((function (switch__29814__auto__,c__29904__auto___31443,out){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_31438 = [null,null,null,null,null,null,null,null,null];
(statearr_31438[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_31438[(1)] = (1));

return statearr_31438;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_31424){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31439){if((e31439 instanceof Object)){
var ex__29818__auto__ = e31439;
var statearr_31440_31454 = state_31424;
(statearr_31440_31454[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31455 = state_31424;
state_31424 = G__31455;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_31424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_31424);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___31443,out))
})();
var state__29906__auto__ = (function (){var statearr_31441 = f__29905__auto__.call(null);
(statearr_31441[(6)] = c__29904__auto___31443);

return statearr_31441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___31443,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31457 = arguments.length;
switch (G__31457) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__){
return (function (state_31520){
var state_val_31521 = (state_31520[(1)]);
if((state_val_31521 === (7))){
var inst_31516 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31522_31560 = state_31520__$1;
(statearr_31522_31560[(2)] = inst_31516);

(statearr_31522_31560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (20))){
var inst_31486 = (state_31520[(7)]);
var inst_31497 = (state_31520[(2)]);
var inst_31498 = cljs.core.next.call(null,inst_31486);
var inst_31472 = inst_31498;
var inst_31473 = null;
var inst_31474 = (0);
var inst_31475 = (0);
var state_31520__$1 = (function (){var statearr_31523 = state_31520;
(statearr_31523[(8)] = inst_31474);

(statearr_31523[(9)] = inst_31475);

(statearr_31523[(10)] = inst_31473);

(statearr_31523[(11)] = inst_31497);

(statearr_31523[(12)] = inst_31472);

return statearr_31523;
})();
var statearr_31524_31561 = state_31520__$1;
(statearr_31524_31561[(2)] = null);

(statearr_31524_31561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (1))){
var state_31520__$1 = state_31520;
var statearr_31525_31562 = state_31520__$1;
(statearr_31525_31562[(2)] = null);

(statearr_31525_31562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (4))){
var inst_31461 = (state_31520[(13)]);
var inst_31461__$1 = (state_31520[(2)]);
var inst_31462 = (inst_31461__$1 == null);
var state_31520__$1 = (function (){var statearr_31526 = state_31520;
(statearr_31526[(13)] = inst_31461__$1);

return statearr_31526;
})();
if(cljs.core.truth_(inst_31462)){
var statearr_31527_31563 = state_31520__$1;
(statearr_31527_31563[(1)] = (5));

} else {
var statearr_31528_31564 = state_31520__$1;
(statearr_31528_31564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (15))){
var state_31520__$1 = state_31520;
var statearr_31532_31565 = state_31520__$1;
(statearr_31532_31565[(2)] = null);

(statearr_31532_31565[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (21))){
var state_31520__$1 = state_31520;
var statearr_31533_31566 = state_31520__$1;
(statearr_31533_31566[(2)] = null);

(statearr_31533_31566[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (13))){
var inst_31474 = (state_31520[(8)]);
var inst_31475 = (state_31520[(9)]);
var inst_31473 = (state_31520[(10)]);
var inst_31472 = (state_31520[(12)]);
var inst_31482 = (state_31520[(2)]);
var inst_31483 = (inst_31475 + (1));
var tmp31529 = inst_31474;
var tmp31530 = inst_31473;
var tmp31531 = inst_31472;
var inst_31472__$1 = tmp31531;
var inst_31473__$1 = tmp31530;
var inst_31474__$1 = tmp31529;
var inst_31475__$1 = inst_31483;
var state_31520__$1 = (function (){var statearr_31534 = state_31520;
(statearr_31534[(8)] = inst_31474__$1);

(statearr_31534[(9)] = inst_31475__$1);

(statearr_31534[(10)] = inst_31473__$1);

(statearr_31534[(12)] = inst_31472__$1);

(statearr_31534[(14)] = inst_31482);

return statearr_31534;
})();
var statearr_31535_31567 = state_31520__$1;
(statearr_31535_31567[(2)] = null);

(statearr_31535_31567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (22))){
var state_31520__$1 = state_31520;
var statearr_31536_31568 = state_31520__$1;
(statearr_31536_31568[(2)] = null);

(statearr_31536_31568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (6))){
var inst_31461 = (state_31520[(13)]);
var inst_31470 = f.call(null,inst_31461);
var inst_31471 = cljs.core.seq.call(null,inst_31470);
var inst_31472 = inst_31471;
var inst_31473 = null;
var inst_31474 = (0);
var inst_31475 = (0);
var state_31520__$1 = (function (){var statearr_31537 = state_31520;
(statearr_31537[(8)] = inst_31474);

(statearr_31537[(9)] = inst_31475);

(statearr_31537[(10)] = inst_31473);

(statearr_31537[(12)] = inst_31472);

return statearr_31537;
})();
var statearr_31538_31569 = state_31520__$1;
(statearr_31538_31569[(2)] = null);

(statearr_31538_31569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (17))){
var inst_31486 = (state_31520[(7)]);
var inst_31490 = cljs.core.chunk_first.call(null,inst_31486);
var inst_31491 = cljs.core.chunk_rest.call(null,inst_31486);
var inst_31492 = cljs.core.count.call(null,inst_31490);
var inst_31472 = inst_31491;
var inst_31473 = inst_31490;
var inst_31474 = inst_31492;
var inst_31475 = (0);
var state_31520__$1 = (function (){var statearr_31539 = state_31520;
(statearr_31539[(8)] = inst_31474);

(statearr_31539[(9)] = inst_31475);

(statearr_31539[(10)] = inst_31473);

(statearr_31539[(12)] = inst_31472);

return statearr_31539;
})();
var statearr_31540_31570 = state_31520__$1;
(statearr_31540_31570[(2)] = null);

(statearr_31540_31570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (3))){
var inst_31518 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31520__$1,inst_31518);
} else {
if((state_val_31521 === (12))){
var inst_31506 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31541_31571 = state_31520__$1;
(statearr_31541_31571[(2)] = inst_31506);

(statearr_31541_31571[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (2))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31520__$1,(4),in$);
} else {
if((state_val_31521 === (23))){
var inst_31514 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31542_31572 = state_31520__$1;
(statearr_31542_31572[(2)] = inst_31514);

(statearr_31542_31572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (19))){
var inst_31501 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31543_31573 = state_31520__$1;
(statearr_31543_31573[(2)] = inst_31501);

(statearr_31543_31573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (11))){
var inst_31486 = (state_31520[(7)]);
var inst_31472 = (state_31520[(12)]);
var inst_31486__$1 = cljs.core.seq.call(null,inst_31472);
var state_31520__$1 = (function (){var statearr_31544 = state_31520;
(statearr_31544[(7)] = inst_31486__$1);

return statearr_31544;
})();
if(inst_31486__$1){
var statearr_31545_31574 = state_31520__$1;
(statearr_31545_31574[(1)] = (14));

} else {
var statearr_31546_31575 = state_31520__$1;
(statearr_31546_31575[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (9))){
var inst_31508 = (state_31520[(2)]);
var inst_31509 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31520__$1 = (function (){var statearr_31547 = state_31520;
(statearr_31547[(15)] = inst_31508);

return statearr_31547;
})();
if(cljs.core.truth_(inst_31509)){
var statearr_31548_31576 = state_31520__$1;
(statearr_31548_31576[(1)] = (21));

} else {
var statearr_31549_31577 = state_31520__$1;
(statearr_31549_31577[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (5))){
var inst_31464 = cljs.core.async.close_BANG_.call(null,out);
var state_31520__$1 = state_31520;
var statearr_31550_31578 = state_31520__$1;
(statearr_31550_31578[(2)] = inst_31464);

(statearr_31550_31578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (14))){
var inst_31486 = (state_31520[(7)]);
var inst_31488 = cljs.core.chunked_seq_QMARK_.call(null,inst_31486);
var state_31520__$1 = state_31520;
if(inst_31488){
var statearr_31551_31579 = state_31520__$1;
(statearr_31551_31579[(1)] = (17));

} else {
var statearr_31552_31580 = state_31520__$1;
(statearr_31552_31580[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (16))){
var inst_31504 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31553_31581 = state_31520__$1;
(statearr_31553_31581[(2)] = inst_31504);

(statearr_31553_31581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (10))){
var inst_31475 = (state_31520[(9)]);
var inst_31473 = (state_31520[(10)]);
var inst_31480 = cljs.core._nth.call(null,inst_31473,inst_31475);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31520__$1,(13),out,inst_31480);
} else {
if((state_val_31521 === (18))){
var inst_31486 = (state_31520[(7)]);
var inst_31495 = cljs.core.first.call(null,inst_31486);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31520__$1,(20),out,inst_31495);
} else {
if((state_val_31521 === (8))){
var inst_31474 = (state_31520[(8)]);
var inst_31475 = (state_31520[(9)]);
var inst_31477 = (inst_31475 < inst_31474);
var inst_31478 = inst_31477;
var state_31520__$1 = state_31520;
if(cljs.core.truth_(inst_31478)){
var statearr_31554_31582 = state_31520__$1;
(statearr_31554_31582[(1)] = (10));

} else {
var statearr_31555_31583 = state_31520__$1;
(statearr_31555_31583[(1)] = (11));

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
});})(c__29904__auto__))
;
return ((function (switch__29814__auto__,c__29904__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29815__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29815__auto____0 = (function (){
var statearr_31556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31556[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29815__auto__);

(statearr_31556[(1)] = (1));

return statearr_31556;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29815__auto____1 = (function (state_31520){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31557){if((e31557 instanceof Object)){
var ex__29818__auto__ = e31557;
var statearr_31558_31584 = state_31520;
(statearr_31558_31584[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31585 = state_31520;
state_31520 = G__31585;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29815__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29815__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29815__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29815__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__))
})();
var state__29906__auto__ = (function (){var statearr_31559 = f__29905__auto__.call(null);
(statearr_31559[(6)] = c__29904__auto__);

return statearr_31559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__))
);

return c__29904__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31587 = arguments.length;
switch (G__31587) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31590 = arguments.length;
switch (G__31590) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__31593 = arguments.length;
switch (G__31593) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29904__auto___31640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___31640,out){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___31640,out){
return (function (state_31617){
var state_val_31618 = (state_31617[(1)]);
if((state_val_31618 === (7))){
var inst_31612 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31619_31641 = state_31617__$1;
(statearr_31619_31641[(2)] = inst_31612);

(statearr_31619_31641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (1))){
var inst_31594 = null;
var state_31617__$1 = (function (){var statearr_31620 = state_31617;
(statearr_31620[(7)] = inst_31594);

return statearr_31620;
})();
var statearr_31621_31642 = state_31617__$1;
(statearr_31621_31642[(2)] = null);

(statearr_31621_31642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (4))){
var inst_31597 = (state_31617[(8)]);
var inst_31597__$1 = (state_31617[(2)]);
var inst_31598 = (inst_31597__$1 == null);
var inst_31599 = cljs.core.not.call(null,inst_31598);
var state_31617__$1 = (function (){var statearr_31622 = state_31617;
(statearr_31622[(8)] = inst_31597__$1);

return statearr_31622;
})();
if(inst_31599){
var statearr_31623_31643 = state_31617__$1;
(statearr_31623_31643[(1)] = (5));

} else {
var statearr_31624_31644 = state_31617__$1;
(statearr_31624_31644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (6))){
var state_31617__$1 = state_31617;
var statearr_31625_31645 = state_31617__$1;
(statearr_31625_31645[(2)] = null);

(statearr_31625_31645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (3))){
var inst_31614 = (state_31617[(2)]);
var inst_31615 = cljs.core.async.close_BANG_.call(null,out);
var state_31617__$1 = (function (){var statearr_31626 = state_31617;
(statearr_31626[(9)] = inst_31614);

return statearr_31626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31617__$1,inst_31615);
} else {
if((state_val_31618 === (2))){
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31617__$1,(4),ch);
} else {
if((state_val_31618 === (11))){
var inst_31597 = (state_31617[(8)]);
var inst_31606 = (state_31617[(2)]);
var inst_31594 = inst_31597;
var state_31617__$1 = (function (){var statearr_31627 = state_31617;
(statearr_31627[(10)] = inst_31606);

(statearr_31627[(7)] = inst_31594);

return statearr_31627;
})();
var statearr_31628_31646 = state_31617__$1;
(statearr_31628_31646[(2)] = null);

(statearr_31628_31646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (9))){
var inst_31597 = (state_31617[(8)]);
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31617__$1,(11),out,inst_31597);
} else {
if((state_val_31618 === (5))){
var inst_31597 = (state_31617[(8)]);
var inst_31594 = (state_31617[(7)]);
var inst_31601 = cljs.core._EQ_.call(null,inst_31597,inst_31594);
var state_31617__$1 = state_31617;
if(inst_31601){
var statearr_31630_31647 = state_31617__$1;
(statearr_31630_31647[(1)] = (8));

} else {
var statearr_31631_31648 = state_31617__$1;
(statearr_31631_31648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (10))){
var inst_31609 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31632_31649 = state_31617__$1;
(statearr_31632_31649[(2)] = inst_31609);

(statearr_31632_31649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (8))){
var inst_31594 = (state_31617[(7)]);
var tmp31629 = inst_31594;
var inst_31594__$1 = tmp31629;
var state_31617__$1 = (function (){var statearr_31633 = state_31617;
(statearr_31633[(7)] = inst_31594__$1);

return statearr_31633;
})();
var statearr_31634_31650 = state_31617__$1;
(statearr_31634_31650[(2)] = null);

(statearr_31634_31650[(1)] = (2));


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
});})(c__29904__auto___31640,out))
;
return ((function (switch__29814__auto__,c__29904__auto___31640,out){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_31635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31635[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_31635[(1)] = (1));

return statearr_31635;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_31617){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31636){if((e31636 instanceof Object)){
var ex__29818__auto__ = e31636;
var statearr_31637_31651 = state_31617;
(statearr_31637_31651[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31652 = state_31617;
state_31617 = G__31652;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_31617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_31617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___31640,out))
})();
var state__29906__auto__ = (function (){var statearr_31638 = f__29905__auto__.call(null);
(statearr_31638[(6)] = c__29904__auto___31640);

return statearr_31638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___31640,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31654 = arguments.length;
switch (G__31654) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29904__auto___31720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___31720,out){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___31720,out){
return (function (state_31692){
var state_val_31693 = (state_31692[(1)]);
if((state_val_31693 === (7))){
var inst_31688 = (state_31692[(2)]);
var state_31692__$1 = state_31692;
var statearr_31694_31721 = state_31692__$1;
(statearr_31694_31721[(2)] = inst_31688);

(statearr_31694_31721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (1))){
var inst_31655 = (new Array(n));
var inst_31656 = inst_31655;
var inst_31657 = (0);
var state_31692__$1 = (function (){var statearr_31695 = state_31692;
(statearr_31695[(7)] = inst_31657);

(statearr_31695[(8)] = inst_31656);

return statearr_31695;
})();
var statearr_31696_31722 = state_31692__$1;
(statearr_31696_31722[(2)] = null);

(statearr_31696_31722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (4))){
var inst_31660 = (state_31692[(9)]);
var inst_31660__$1 = (state_31692[(2)]);
var inst_31661 = (inst_31660__$1 == null);
var inst_31662 = cljs.core.not.call(null,inst_31661);
var state_31692__$1 = (function (){var statearr_31697 = state_31692;
(statearr_31697[(9)] = inst_31660__$1);

return statearr_31697;
})();
if(inst_31662){
var statearr_31698_31723 = state_31692__$1;
(statearr_31698_31723[(1)] = (5));

} else {
var statearr_31699_31724 = state_31692__$1;
(statearr_31699_31724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (15))){
var inst_31682 = (state_31692[(2)]);
var state_31692__$1 = state_31692;
var statearr_31700_31725 = state_31692__$1;
(statearr_31700_31725[(2)] = inst_31682);

(statearr_31700_31725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (13))){
var state_31692__$1 = state_31692;
var statearr_31701_31726 = state_31692__$1;
(statearr_31701_31726[(2)] = null);

(statearr_31701_31726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (6))){
var inst_31657 = (state_31692[(7)]);
var inst_31678 = (inst_31657 > (0));
var state_31692__$1 = state_31692;
if(cljs.core.truth_(inst_31678)){
var statearr_31702_31727 = state_31692__$1;
(statearr_31702_31727[(1)] = (12));

} else {
var statearr_31703_31728 = state_31692__$1;
(statearr_31703_31728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (3))){
var inst_31690 = (state_31692[(2)]);
var state_31692__$1 = state_31692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31692__$1,inst_31690);
} else {
if((state_val_31693 === (12))){
var inst_31656 = (state_31692[(8)]);
var inst_31680 = cljs.core.vec.call(null,inst_31656);
var state_31692__$1 = state_31692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31692__$1,(15),out,inst_31680);
} else {
if((state_val_31693 === (2))){
var state_31692__$1 = state_31692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31692__$1,(4),ch);
} else {
if((state_val_31693 === (11))){
var inst_31672 = (state_31692[(2)]);
var inst_31673 = (new Array(n));
var inst_31656 = inst_31673;
var inst_31657 = (0);
var state_31692__$1 = (function (){var statearr_31704 = state_31692;
(statearr_31704[(7)] = inst_31657);

(statearr_31704[(10)] = inst_31672);

(statearr_31704[(8)] = inst_31656);

return statearr_31704;
})();
var statearr_31705_31729 = state_31692__$1;
(statearr_31705_31729[(2)] = null);

(statearr_31705_31729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (9))){
var inst_31656 = (state_31692[(8)]);
var inst_31670 = cljs.core.vec.call(null,inst_31656);
var state_31692__$1 = state_31692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31692__$1,(11),out,inst_31670);
} else {
if((state_val_31693 === (5))){
var inst_31657 = (state_31692[(7)]);
var inst_31665 = (state_31692[(11)]);
var inst_31656 = (state_31692[(8)]);
var inst_31660 = (state_31692[(9)]);
var inst_31664 = (inst_31656[inst_31657] = inst_31660);
var inst_31665__$1 = (inst_31657 + (1));
var inst_31666 = (inst_31665__$1 < n);
var state_31692__$1 = (function (){var statearr_31706 = state_31692;
(statearr_31706[(12)] = inst_31664);

(statearr_31706[(11)] = inst_31665__$1);

return statearr_31706;
})();
if(cljs.core.truth_(inst_31666)){
var statearr_31707_31730 = state_31692__$1;
(statearr_31707_31730[(1)] = (8));

} else {
var statearr_31708_31731 = state_31692__$1;
(statearr_31708_31731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (14))){
var inst_31685 = (state_31692[(2)]);
var inst_31686 = cljs.core.async.close_BANG_.call(null,out);
var state_31692__$1 = (function (){var statearr_31710 = state_31692;
(statearr_31710[(13)] = inst_31685);

return statearr_31710;
})();
var statearr_31711_31732 = state_31692__$1;
(statearr_31711_31732[(2)] = inst_31686);

(statearr_31711_31732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (10))){
var inst_31676 = (state_31692[(2)]);
var state_31692__$1 = state_31692;
var statearr_31712_31733 = state_31692__$1;
(statearr_31712_31733[(2)] = inst_31676);

(statearr_31712_31733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31693 === (8))){
var inst_31665 = (state_31692[(11)]);
var inst_31656 = (state_31692[(8)]);
var tmp31709 = inst_31656;
var inst_31656__$1 = tmp31709;
var inst_31657 = inst_31665;
var state_31692__$1 = (function (){var statearr_31713 = state_31692;
(statearr_31713[(7)] = inst_31657);

(statearr_31713[(8)] = inst_31656__$1);

return statearr_31713;
})();
var statearr_31714_31734 = state_31692__$1;
(statearr_31714_31734[(2)] = null);

(statearr_31714_31734[(1)] = (2));


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
});})(c__29904__auto___31720,out))
;
return ((function (switch__29814__auto__,c__29904__auto___31720,out){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_31715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31715[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_31715[(1)] = (1));

return statearr_31715;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_31692){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31716){if((e31716 instanceof Object)){
var ex__29818__auto__ = e31716;
var statearr_31717_31735 = state_31692;
(statearr_31717_31735[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31736 = state_31692;
state_31692 = G__31736;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_31692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_31692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___31720,out))
})();
var state__29906__auto__ = (function (){var statearr_31718 = f__29905__auto__.call(null);
(statearr_31718[(6)] = c__29904__auto___31720);

return statearr_31718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___31720,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31738 = arguments.length;
switch (G__31738) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29904__auto___31808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___31808,out){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___31808,out){
return (function (state_31780){
var state_val_31781 = (state_31780[(1)]);
if((state_val_31781 === (7))){
var inst_31776 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31782_31809 = state_31780__$1;
(statearr_31782_31809[(2)] = inst_31776);

(statearr_31782_31809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (1))){
var inst_31739 = [];
var inst_31740 = inst_31739;
var inst_31741 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31780__$1 = (function (){var statearr_31783 = state_31780;
(statearr_31783[(7)] = inst_31741);

(statearr_31783[(8)] = inst_31740);

return statearr_31783;
})();
var statearr_31784_31810 = state_31780__$1;
(statearr_31784_31810[(2)] = null);

(statearr_31784_31810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (4))){
var inst_31744 = (state_31780[(9)]);
var inst_31744__$1 = (state_31780[(2)]);
var inst_31745 = (inst_31744__$1 == null);
var inst_31746 = cljs.core.not.call(null,inst_31745);
var state_31780__$1 = (function (){var statearr_31785 = state_31780;
(statearr_31785[(9)] = inst_31744__$1);

return statearr_31785;
})();
if(inst_31746){
var statearr_31786_31811 = state_31780__$1;
(statearr_31786_31811[(1)] = (5));

} else {
var statearr_31787_31812 = state_31780__$1;
(statearr_31787_31812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (15))){
var inst_31770 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31788_31813 = state_31780__$1;
(statearr_31788_31813[(2)] = inst_31770);

(statearr_31788_31813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (13))){
var state_31780__$1 = state_31780;
var statearr_31789_31814 = state_31780__$1;
(statearr_31789_31814[(2)] = null);

(statearr_31789_31814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (6))){
var inst_31740 = (state_31780[(8)]);
var inst_31765 = inst_31740.length;
var inst_31766 = (inst_31765 > (0));
var state_31780__$1 = state_31780;
if(cljs.core.truth_(inst_31766)){
var statearr_31790_31815 = state_31780__$1;
(statearr_31790_31815[(1)] = (12));

} else {
var statearr_31791_31816 = state_31780__$1;
(statearr_31791_31816[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (3))){
var inst_31778 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31780__$1,inst_31778);
} else {
if((state_val_31781 === (12))){
var inst_31740 = (state_31780[(8)]);
var inst_31768 = cljs.core.vec.call(null,inst_31740);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31780__$1,(15),out,inst_31768);
} else {
if((state_val_31781 === (2))){
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31780__$1,(4),ch);
} else {
if((state_val_31781 === (11))){
var inst_31748 = (state_31780[(10)]);
var inst_31744 = (state_31780[(9)]);
var inst_31758 = (state_31780[(2)]);
var inst_31759 = [];
var inst_31760 = inst_31759.push(inst_31744);
var inst_31740 = inst_31759;
var inst_31741 = inst_31748;
var state_31780__$1 = (function (){var statearr_31792 = state_31780;
(statearr_31792[(11)] = inst_31760);

(statearr_31792[(12)] = inst_31758);

(statearr_31792[(7)] = inst_31741);

(statearr_31792[(8)] = inst_31740);

return statearr_31792;
})();
var statearr_31793_31817 = state_31780__$1;
(statearr_31793_31817[(2)] = null);

(statearr_31793_31817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (9))){
var inst_31740 = (state_31780[(8)]);
var inst_31756 = cljs.core.vec.call(null,inst_31740);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31780__$1,(11),out,inst_31756);
} else {
if((state_val_31781 === (5))){
var inst_31741 = (state_31780[(7)]);
var inst_31748 = (state_31780[(10)]);
var inst_31744 = (state_31780[(9)]);
var inst_31748__$1 = f.call(null,inst_31744);
var inst_31749 = cljs.core._EQ_.call(null,inst_31748__$1,inst_31741);
var inst_31750 = cljs.core.keyword_identical_QMARK_.call(null,inst_31741,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31751 = ((inst_31749) || (inst_31750));
var state_31780__$1 = (function (){var statearr_31794 = state_31780;
(statearr_31794[(10)] = inst_31748__$1);

return statearr_31794;
})();
if(cljs.core.truth_(inst_31751)){
var statearr_31795_31818 = state_31780__$1;
(statearr_31795_31818[(1)] = (8));

} else {
var statearr_31796_31819 = state_31780__$1;
(statearr_31796_31819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (14))){
var inst_31773 = (state_31780[(2)]);
var inst_31774 = cljs.core.async.close_BANG_.call(null,out);
var state_31780__$1 = (function (){var statearr_31798 = state_31780;
(statearr_31798[(13)] = inst_31773);

return statearr_31798;
})();
var statearr_31799_31820 = state_31780__$1;
(statearr_31799_31820[(2)] = inst_31774);

(statearr_31799_31820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (10))){
var inst_31763 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31800_31821 = state_31780__$1;
(statearr_31800_31821[(2)] = inst_31763);

(statearr_31800_31821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (8))){
var inst_31748 = (state_31780[(10)]);
var inst_31744 = (state_31780[(9)]);
var inst_31740 = (state_31780[(8)]);
var inst_31753 = inst_31740.push(inst_31744);
var tmp31797 = inst_31740;
var inst_31740__$1 = tmp31797;
var inst_31741 = inst_31748;
var state_31780__$1 = (function (){var statearr_31801 = state_31780;
(statearr_31801[(7)] = inst_31741);

(statearr_31801[(14)] = inst_31753);

(statearr_31801[(8)] = inst_31740__$1);

return statearr_31801;
})();
var statearr_31802_31822 = state_31780__$1;
(statearr_31802_31822[(2)] = null);

(statearr_31802_31822[(1)] = (2));


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
});})(c__29904__auto___31808,out))
;
return ((function (switch__29814__auto__,c__29904__auto___31808,out){
return (function() {
var cljs$core$async$state_machine__29815__auto__ = null;
var cljs$core$async$state_machine__29815__auto____0 = (function (){
var statearr_31803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31803[(0)] = cljs$core$async$state_machine__29815__auto__);

(statearr_31803[(1)] = (1));

return statearr_31803;
});
var cljs$core$async$state_machine__29815__auto____1 = (function (state_31780){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31804){if((e31804 instanceof Object)){
var ex__29818__auto__ = e31804;
var statearr_31805_31823 = state_31780;
(statearr_31805_31823[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31824 = state_31780;
state_31780 = G__31824;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs$core$async$state_machine__29815__auto__ = function(state_31780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29815__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29815__auto____1.call(this,state_31780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29815__auto____0;
cljs$core$async$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29815__auto____1;
return cljs$core$async$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___31808,out))
})();
var state__29906__auto__ = (function (){var statearr_31806 = f__29905__auto__.call(null);
(statearr_31806[(6)] = c__29904__auto___31808);

return statearr_31806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___31808,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1526705066171
