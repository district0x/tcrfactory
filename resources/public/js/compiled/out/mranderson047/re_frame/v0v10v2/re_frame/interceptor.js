// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('clojure.set');
mranderson047.re_frame.v0v10v2.re_frame.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"before","before",-1633692388),null], null), null);
mranderson047.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_ = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$interceptor_QMARK_(m){
return ((cljs.core.map_QMARK_.call(null,m)) && (cljs.core._EQ_.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.mandatory_interceptor_keys,cljs.core.set.call(null,cljs.core.keys.call(null,m)))));
});
/**
 * Create an interceptor from named arguments
 */
mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$__GT_interceptor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32963 = arguments.length;
var i__4500__auto___32964 = (0);
while(true){
if((i__4500__auto___32964 < len__4499__auto___32963)){
args__4502__auto__.push((arguments[i__4500__auto___32964]));

var G__32965 = (i__4500__auto___32964 + (1));
i__4500__auto___32964 = G__32965;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__32960){
var map__32961 = p__32960;
var map__32961__$1 = ((((!((map__32961 == null)))?(((((map__32961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32961):map__32961);
var m = map__32961__$1;
var id = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5455__auto___32966 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),mranderson047.re_frame.v0v10v2.re_frame.interceptor.mandatory_interceptor_keys));
if(temp__5455__auto___32966){
var unknown_keys_32967 = temp__5455__auto___32966;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ->interceptor ",m," has unknown keys:",unknown_keys_32967);
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__3922__auto__ = id;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})(),new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq32959){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32959));
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$get_effect(var_args){
var G__32969 = arguments.length;
switch (G__32969) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null));
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),not_found);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_effect.cljs$lang$maxFixedArity = 3;

mranderson047.re_frame.v0v10v2.re_frame.interceptor.assoc_effect = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),value);
});
mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$get_coeffect(var_args){
var G__32972 = arguments.length;
switch (G__32972) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null));
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),not_found);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3;

mranderson047.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),value);
});
mranderson047.re_frame.v0v10v2.re_frame.interceptor.update_coeffect = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$update_coeffect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32978 = arguments.length;
var i__4500__auto___32979 = (0);
while(true){
if((i__4500__auto___32979 < len__4499__auto___32978)){
args__4502__auto__.push((arguments[i__4500__auto___32979]));

var G__32980 = (i__4500__auto___32979 + (1));
i__4500__auto___32979 = G__32980;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),f,args);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mranderson047.re_frame.v0v10v2.re_frame.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq32974){
var G__32975 = cljs.core.first.call(null,seq32974);
var seq32974__$1 = cljs.core.next.call(null,seq32974);
var G__32976 = cljs.core.first.call(null,seq32974__$1);
var seq32974__$2 = cljs.core.next.call(null,seq32974__$1);
var G__32977 = cljs.core.first.call(null,seq32974__$2);
var seq32974__$3 = cljs.core.next.call(null,seq32974__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32975,G__32976,G__32977,seq32974__$3);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptor_fn = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$invoke_interceptor_fn(context,interceptor,direction){
var temp__5455__auto__ = cljs.core.get.call(null,interceptor,direction);
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,context);
} else {
return context;
}
});
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` function will (if present)
 *   add to a `context's` `:coeffects`, while it's `:after` function
 *   will modify the `context`'s `:effects`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
mranderson047.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptors = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_.call(null,queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek.call(null,queue);
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context__$1);
var G__32981 = mranderson047.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptor_fn.call(null,cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop.call(null,queue),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,stack,interceptor)),interceptor,direction);
context__$1 = G__32981;
continue;
}
break;
}
});
/**
 * Add a collection of `interceptors` to the end of `context's` execution `:queue`.
 *   Returns the updated `context`.
 * 
 *   In an advanced case, this function could allow an interceptor to add new
 *   interceptors to the `:queue` of a context.
 */
mranderson047.re_frame.v0v10v2.re_frame.interceptor.enqueue = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$enqueue(context,interceptors){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.fnil.call(null,cljs.core.into,mranderson047.re_frame.v0v10v2.re_frame.interop.empty_queue),interceptors);
});
/**
 * Create a fresh context
 */
mranderson047.re_frame.v0v10v2.re_frame.interceptor.context = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$context(var_args){
var G__32983 = arguments.length;
switch (G__32983) {
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$2 = (function (event,interceptors){
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.enqueue.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event","event",301435442),event),interceptors);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.context.cljs$core$IFn$_invoke$arity$3 = (function (event,interceptors,db){
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.context.call(null,event,interceptors),new cljs.core.Keyword(null,"db","db",993250759),db);
});

mranderson047.re_frame.v0v10v2.re_frame.interceptor.context.cljs$lang$maxFixedArity = 3;

/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 *   At this point in processing, the `:queue` is empty and `:stack` holds all
 *   the previously run interceptors. So this function enables the backwards walk
 *   by priming `:queue` with what's currently in `:stack`
 */
mranderson047.re_frame.v0v10v2.re_frame.interceptor.change_direction = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$change_direction(context){
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.enqueue.call(null,cljs.core.dissoc.call(null,context,new cljs.core.Keyword(null,"queue","queue",1455835879)),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context));
});
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of iterceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :dispatch  [:an-event-id :param1]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat anologous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffects` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute = (function mranderson047$re_frame$v0v10v2$re_frame$interceptor$execute(event_v,interceptors){
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptors.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.change_direction.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.invoke_interceptors.call(null,mranderson047.re_frame.v0v10v2.re_frame.interceptor.context.call(null,event_v,interceptors),new cljs.core.Keyword(null,"before","before",-1633692388))),new cljs.core.Keyword(null,"after","after",594996914));
});

//# sourceMappingURL=interceptor.js.map?rel=1526705513610
