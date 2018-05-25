// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23466){
var map__23467 = p__23466;
var map__23467__$1 = ((((!((map__23467 == null)))?(((((map__23467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23467):map__23467);
var operation = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__23467__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__23469_23481 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__23470_23482 = null;
var count__23471_23483 = (0);
var i__23472_23484 = (0);
while(true){
if((i__23472_23484 < count__23471_23483)){
var vec__23473_23485 = cljs.core._nth.call(null,chunk__23470_23482,i__23472_23484);
var k_23486 = cljs.core.nth.call(null,vec__23473_23485,(0),null);
var cb_23487 = cljs.core.nth.call(null,vec__23473_23485,(1),null);
try{cb_23487.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e23476){var e_23488 = e23476;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_23486,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_23488);
}

var G__23489 = seq__23469_23481;
var G__23490 = chunk__23470_23482;
var G__23491 = count__23471_23483;
var G__23492 = (i__23472_23484 + (1));
seq__23469_23481 = G__23489;
chunk__23470_23482 = G__23490;
count__23471_23483 = G__23491;
i__23472_23484 = G__23492;
continue;
} else {
var temp__5457__auto___23493 = cljs.core.seq.call(null,seq__23469_23481);
if(temp__5457__auto___23493){
var seq__23469_23494__$1 = temp__5457__auto___23493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23469_23494__$1)){
var c__4319__auto___23495 = cljs.core.chunk_first.call(null,seq__23469_23494__$1);
var G__23496 = cljs.core.chunk_rest.call(null,seq__23469_23494__$1);
var G__23497 = c__4319__auto___23495;
var G__23498 = cljs.core.count.call(null,c__4319__auto___23495);
var G__23499 = (0);
seq__23469_23481 = G__23496;
chunk__23470_23482 = G__23497;
count__23471_23483 = G__23498;
i__23472_23484 = G__23499;
continue;
} else {
var vec__23477_23500 = cljs.core.first.call(null,seq__23469_23494__$1);
var k_23501 = cljs.core.nth.call(null,vec__23477_23500,(0),null);
var cb_23502 = cljs.core.nth.call(null,vec__23477_23500,(1),null);
try{cb_23502.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e23480){var e_23503 = e23480;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_23501,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_23503);
}

var G__23504 = cljs.core.next.call(null,seq__23469_23494__$1);
var G__23505 = null;
var G__23506 = (0);
var G__23507 = (0);
seq__23469_23481 = G__23504;
chunk__23470_23482 = G__23505;
count__23471_23483 = G__23506;
i__23472_23484 = G__23507;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1526705059515
