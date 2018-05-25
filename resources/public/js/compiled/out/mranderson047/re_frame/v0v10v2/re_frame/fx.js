// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__33261 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33262 = null;
var count__33263 = (0);
var i__33264 = (0);
while(true){
if((i__33264 < count__33263)){
var vec__33265 = cljs.core._nth.call(null,chunk__33262,i__33264);
var effect_key = cljs.core.nth.call(null,vec__33265,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33265,(1),null);
var temp__5455__auto___33271 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___33271)){
var effect_fn_33272 = temp__5455__auto___33271;
effect_fn_33272.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__33273 = seq__33261;
var G__33274 = chunk__33262;
var G__33275 = count__33263;
var G__33276 = (i__33264 + (1));
seq__33261 = G__33273;
chunk__33262 = G__33274;
count__33263 = G__33275;
i__33264 = G__33276;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33261);
if(temp__5457__auto__){
var seq__33261__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33261__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33261__$1);
var G__33277 = cljs.core.chunk_rest.call(null,seq__33261__$1);
var G__33278 = c__4319__auto__;
var G__33279 = cljs.core.count.call(null,c__4319__auto__);
var G__33280 = (0);
seq__33261 = G__33277;
chunk__33262 = G__33278;
count__33263 = G__33279;
i__33264 = G__33280;
continue;
} else {
var vec__33268 = cljs.core.first.call(null,seq__33261__$1);
var effect_key = cljs.core.nth.call(null,vec__33268,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33268,(1),null);
var temp__5455__auto___33281 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___33281)){
var effect_fn_33282 = temp__5455__auto___33281;
effect_fn_33282.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__33283 = cljs.core.next.call(null,seq__33261__$1);
var G__33284 = null;
var G__33285 = (0);
var G__33286 = (0);
seq__33261 = G__33283;
chunk__33262 = G__33284;
count__33263 = G__33285;
i__33264 = G__33286;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__33287 = cljs.core.seq.call(null,value);
var chunk__33288 = null;
var count__33289 = (0);
var i__33290 = (0);
while(true){
if((i__33290 < count__33289)){
var map__33291 = cljs.core._nth.call(null,chunk__33288,i__33290);
var map__33291__$1 = ((((!((map__33291 == null)))?(((((map__33291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33291):map__33291);
var effect = map__33291__$1;
var ms = cljs.core.get.call(null,map__33291__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33291__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33287,chunk__33288,count__33289,i__33290,map__33291,map__33291__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__33287,chunk__33288,count__33289,i__33290,map__33291,map__33291__$1,effect,ms,dispatch))
,ms);
}


var G__33295 = seq__33287;
var G__33296 = chunk__33288;
var G__33297 = count__33289;
var G__33298 = (i__33290 + (1));
seq__33287 = G__33295;
chunk__33288 = G__33296;
count__33289 = G__33297;
i__33290 = G__33298;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33287);
if(temp__5457__auto__){
var seq__33287__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33287__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33287__$1);
var G__33299 = cljs.core.chunk_rest.call(null,seq__33287__$1);
var G__33300 = c__4319__auto__;
var G__33301 = cljs.core.count.call(null,c__4319__auto__);
var G__33302 = (0);
seq__33287 = G__33299;
chunk__33288 = G__33300;
count__33289 = G__33301;
i__33290 = G__33302;
continue;
} else {
var map__33293 = cljs.core.first.call(null,seq__33287__$1);
var map__33293__$1 = ((((!((map__33293 == null)))?(((((map__33293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33293):map__33293);
var effect = map__33293__$1;
var ms = cljs.core.get.call(null,map__33293__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33293__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33287,chunk__33288,count__33289,i__33290,map__33293,map__33293__$1,effect,ms,dispatch,seq__33287__$1,temp__5457__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__33287,chunk__33288,count__33289,i__33290,map__33293,map__33293__$1,effect,ms,dispatch,seq__33287__$1,temp__5457__auto__))
,ms);
}


var G__33303 = cljs.core.next.call(null,seq__33287__$1);
var G__33304 = null;
var G__33305 = (0);
var G__33306 = (0);
seq__33287 = G__33303;
chunk__33288 = G__33304;
count__33289 = G__33305;
i__33290 = G__33306;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__33307 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33308 = null;
var count__33309 = (0);
var i__33310 = (0);
while(true){
if((i__33310 < count__33309)){
var event = cljs.core._nth.call(null,chunk__33308,i__33310);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__33311 = seq__33307;
var G__33312 = chunk__33308;
var G__33313 = count__33309;
var G__33314 = (i__33310 + (1));
seq__33307 = G__33311;
chunk__33308 = G__33312;
count__33309 = G__33313;
i__33310 = G__33314;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33307);
if(temp__5457__auto__){
var seq__33307__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33307__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33307__$1);
var G__33315 = cljs.core.chunk_rest.call(null,seq__33307__$1);
var G__33316 = c__4319__auto__;
var G__33317 = cljs.core.count.call(null,c__4319__auto__);
var G__33318 = (0);
seq__33307 = G__33315;
chunk__33308 = G__33316;
count__33309 = G__33317;
i__33310 = G__33318;
continue;
} else {
var event = cljs.core.first.call(null,seq__33307__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__33319 = cljs.core.next.call(null,seq__33307__$1);
var G__33320 = null;
var G__33321 = (0);
var G__33322 = (0);
seq__33307 = G__33319;
chunk__33308 = G__33320;
count__33309 = G__33321;
i__33310 = G__33322;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__33323 = cljs.core.seq.call(null,value);
var chunk__33324 = null;
var count__33325 = (0);
var i__33326 = (0);
while(true){
if((i__33326 < count__33325)){
var event = cljs.core._nth.call(null,chunk__33324,i__33326);
clear_event.call(null,event);


var G__33327 = seq__33323;
var G__33328 = chunk__33324;
var G__33329 = count__33325;
var G__33330 = (i__33326 + (1));
seq__33323 = G__33327;
chunk__33324 = G__33328;
count__33325 = G__33329;
i__33326 = G__33330;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33323);
if(temp__5457__auto__){
var seq__33323__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33323__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33323__$1);
var G__33331 = cljs.core.chunk_rest.call(null,seq__33323__$1);
var G__33332 = c__4319__auto__;
var G__33333 = cljs.core.count.call(null,c__4319__auto__);
var G__33334 = (0);
seq__33323 = G__33331;
chunk__33324 = G__33332;
count__33325 = G__33333;
i__33326 = G__33334;
continue;
} else {
var event = cljs.core.first.call(null,seq__33323__$1);
clear_event.call(null,event);


var G__33335 = cljs.core.next.call(null,seq__33323__$1);
var G__33336 = null;
var G__33337 = (0);
var G__33338 = (0);
seq__33323 = G__33335;
chunk__33324 = G__33336;
count__33325 = G__33337;
i__33326 = G__33338;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1526705514007
