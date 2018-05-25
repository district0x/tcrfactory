// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_web3.evm');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Creates an fn that sends synchronous function to the currentProvider.
 * 
 *   Parameter:
 *   web3 - web3 instance
 * 
 *   Example:
 *   user> `(send-async-fn web3)`
 *   #object...
 */
cljs_web3.evm.send_sync_fn = (function cljs_web3$evm$send_sync_fn(web3){
return (function() { 
var G__24024__delegate = function (args){
return cljs.core.apply.call(null,cljs.core.js_invoke,(web3["currentProvider"]),"send",args);
};
var G__24024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24025__i = 0, G__24025__a = new Array(arguments.length -  0);
while (G__24025__i < G__24025__a.length) {G__24025__a[G__24025__i] = arguments[G__24025__i + 0]; ++G__24025__i;}
  args = new cljs.core.IndexedSeq(G__24025__a,0,null);
} 
return G__24024__delegate.call(this,args);};
G__24024.cljs$lang$maxFixedArity = 0;
G__24024.cljs$lang$applyTo = (function (arglist__24026){
var args = cljs.core.seq(arglist__24026);
return G__24024__delegate(args);
});
G__24024.cljs$core$IFn$_invoke$arity$variadic = G__24024__delegate;
return G__24024;
})()
;
});
/**
 * Creates an fn that sends asynchronous function to the currentProvider.
 * 
 *   Parameter:
 *   web3 - web3 instance
 * 
 *   Example:
 *   user> `(send-async-fn web3)`
 *   #object...
 */
cljs_web3.evm.send_async_fn = (function cljs_web3$evm$send_async_fn(web3){
return (function() { 
var G__24027__delegate = function (args){
return cljs.core.apply.call(null,cljs.core.js_invoke,(web3["currentProvider"]),"sendAsync",args);
};
var G__24027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24028__i = 0, G__24028__a = new Array(arguments.length -  0);
while (G__24028__i < G__24028__a.length) {G__24028__a[G__24028__i] = arguments[G__24028__i + 0]; ++G__24028__i;}
  args = new cljs.core.IndexedSeq(G__24028__a,0,null);
} 
return G__24027__delegate.call(this,args);};
G__24027.cljs$lang$maxFixedArity = 0;
G__24027.cljs$lang$applyTo = (function (arglist__24029){
var args = cljs.core.seq(arglist__24029);
return G__24027__delegate(args);
});
G__24027.cljs$core$IFn$_invoke$arity$variadic = G__24027__delegate;
return G__24027;
})()
;
});
cljs_web3.evm.increase_time_jsonrpc = (function cljs_web3$evm$increase_time_jsonrpc(args){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_increaseTime",new cljs.core.Keyword(null,"params","params",710516235),args,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
});
/**
 * Jump forward in time in the EVM.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   args     - The amount of time to increase in seconds.
 *   callback - callback with two parameters, error and result.
 * 
 *   Returns the total time adjustment, in seconds.
 * 
 *   Example:
 *   user> `(web3-evm/increase-time! web3 [1000] callback)`
 */
cljs_web3.evm.increase_time_BANG_ = (function cljs_web3$evm$increase_time_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24037 = arguments.length;
var i__4500__auto___24038 = (0);
while(true){
if((i__4500__auto___24038 < len__4499__auto___24037)){
args__4502__auto__.push((arguments[i__4500__auto___24038]));

var G__24039 = (i__4500__auto___24038 + (1));
i__4500__auto___24038 = G__24039;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs_web3.evm.increase_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs_web3.evm.increase_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args,p__24033){
var vec__24034 = p__24033;
var callback = cljs.core.nth.call(null,vec__24034,(0),null);
if(cljs.core.fn_QMARK_.call(null,callback)){
return cljs_web3.evm.send_async_fn.call(null,web3).call(null,cljs_web3.evm.increase_time_jsonrpc.call(null,args),cljs_web3.utils.callback_js__GT_clj.call(null,callback));
} else {
return cljs_web3.utils.js__GT_cljkk.call(null,cljs_web3.evm.send_sync_fn.call(null,web3).call(null,cljs_web3.evm.increase_time_jsonrpc.call(null,args)));
}
});

cljs_web3.evm.increase_time_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_web3.evm.increase_time_BANG_.cljs$lang$applyTo = (function (seq24030){
var G__24031 = cljs.core.first.call(null,seq24030);
var seq24030__$1 = cljs.core.next.call(null,seq24030);
var G__24032 = cljs.core.first.call(null,seq24030__$1);
var seq24030__$2 = cljs.core.next.call(null,seq24030__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24031,G__24032,seq24030__$2);
});

cljs_web3.evm.mine_jsonrpc = (function cljs_web3$evm$mine_jsonrpc(){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_mine",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
});
/**
 * Force a block to be mined. Mines a block independent of
 *   whether or not mining is started or stopped.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   callback - callback with two parameters, error and result.
 * 
 *   Example:
 *   user> `(web3-evm/mine! web3 callback)`
 */
cljs_web3.evm.mine_BANG_ = (function cljs_web3$evm$mine_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24046 = arguments.length;
var i__4500__auto___24047 = (0);
while(true){
if((i__4500__auto___24047 < len__4499__auto___24046)){
args__4502__auto__.push((arguments[i__4500__auto___24047]));

var G__24048 = (i__4500__auto___24047 + (1));
i__4500__auto___24047 = G__24048;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.evm.mine_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.evm.mine_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24042){
var vec__24043 = p__24042;
var callback = cljs.core.nth.call(null,vec__24043,(0),null);
if(cljs.core.fn_QMARK_.call(null,callback)){
return cljs_web3.evm.send_async_fn.call(null,web3).call(null,cljs_web3.evm.mine_jsonrpc.call(null),cljs_web3.utils.callback_js__GT_clj.call(null,callback));
} else {
return cljs_web3.utils.js__GT_cljkk.call(null,cljs_web3.evm.send_sync_fn.call(null,web3).call(null,cljs_web3.evm.mine_jsonrpc.call(null)));
}
});

cljs_web3.evm.mine_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.evm.mine_BANG_.cljs$lang$applyTo = (function (seq24040){
var G__24041 = cljs.core.first.call(null,seq24040);
var seq24040__$1 = cljs.core.next.call(null,seq24040);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24041,seq24040__$1);
});

cljs_web3.evm.revert_jsonrpc = (function cljs_web3$evm$revert_jsonrpc(args){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_revert",new cljs.core.Keyword(null,"params","params",710516235),args,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
});
/**
 * Revert the state of the blockchain to a previous snapshot.
 * 
 *   Takes a single
 *   parameter, which is the snapshot id to revert to. If no snapshot id is passed
 *   it will revert to the latest snapshot. Returns true.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   args     - snapshot id to revert to, if no snapshot id is passed, it will
 *           revert to the latest snapshot
 *   callback - callback with two parameters, error and result.
 * 
 *   Returns true.
 * 
 *   Example:
 *   user> `(web3-evm/revert! web3 0 callback)`
 */
cljs_web3.evm.revert_BANG_ = (function cljs_web3$evm$revert_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24056 = arguments.length;
var i__4500__auto___24057 = (0);
while(true){
if((i__4500__auto___24057 < len__4499__auto___24056)){
args__4502__auto__.push((arguments[i__4500__auto___24057]));

var G__24058 = (i__4500__auto___24057 + (1));
i__4500__auto___24057 = G__24058;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs_web3.evm.revert_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs_web3.evm.revert_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args,p__24052){
var vec__24053 = p__24052;
var callback = cljs.core.nth.call(null,vec__24053,(0),null);
if(cljs.core.fn_QMARK_.call(null,callback)){
return cljs_web3.evm.send_async_fn.call(null,web3).call(null,cljs_web3.evm.revert_jsonrpc.call(null,args),cljs_web3.utils.callback_js__GT_clj.call(null,callback));
} else {
return cljs_web3.utils.js__GT_cljkk.call(null,cljs_web3.evm.send_sync_fn.call(null,web3).call(null,cljs_web3.evm.revert_jsonrpc.call(null,args)));
}
});

cljs_web3.evm.revert_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_web3.evm.revert_BANG_.cljs$lang$applyTo = (function (seq24049){
var G__24050 = cljs.core.first.call(null,seq24049);
var seq24049__$1 = cljs.core.next.call(null,seq24049);
var G__24051 = cljs.core.first.call(null,seq24049__$1);
var seq24049__$2 = cljs.core.next.call(null,seq24049__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24050,G__24051,seq24049__$2);
});

cljs_web3.evm.snapshot_jsonrpc = (function cljs_web3$evm$snapshot_jsonrpc(){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"jsonrpc","jsonrpc",1483657187),"2.0",new cljs.core.Keyword(null,"method","method",55703592),"evm_snapshot",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
});
/**
 * Snapshot the state of the blockchain at the current block.
 * 
 *   Parameters:
 *   web3     - web3 instance
 *   callback - callback with two parameters, error and result.
 * 
 *   Returns the integer id of the snapshot created.
 * 
 *   Example:
 *   user> `(web3-evm/snapshot! web3 callback)`
 *   0
 */
cljs_web3.evm.snapshot_BANG_ = (function cljs_web3$evm$snapshot_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24065 = arguments.length;
var i__4500__auto___24066 = (0);
while(true){
if((i__4500__auto___24066 < len__4499__auto___24065)){
args__4502__auto__.push((arguments[i__4500__auto___24066]));

var G__24067 = (i__4500__auto___24066 + (1));
i__4500__auto___24066 = G__24067;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.evm.snapshot_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.evm.snapshot_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__24061){
var vec__24062 = p__24061;
var callback = cljs.core.nth.call(null,vec__24062,(0),null);
if(cljs.core.fn_QMARK_.call(null,callback)){
return cljs_web3.evm.send_async_fn.call(null,web3).call(null,cljs_web3.evm.snapshot_jsonrpc.call(null),cljs_web3.utils.callback_js__GT_clj.call(null,callback));
} else {
return cljs_web3.utils.js__GT_cljkk.call(null,cljs_web3.evm.send_sync_fn.call(null,web3).call(null,cljs_web3.evm.snapshot_jsonrpc.call(null)));
}
});

cljs_web3.evm.snapshot_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.evm.snapshot_BANG_.cljs$lang$applyTo = (function (seq24059){
var G__24060 = cljs.core.first.call(null,seq24059);
var seq24059__$1 = cljs.core.next.call(null,seq24059);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24060,seq24059__$1);
});


//# sourceMappingURL=evm.js.map?rel=1526705385822
