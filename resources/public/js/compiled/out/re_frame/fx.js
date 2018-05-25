// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_23604 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__23605 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23606 = null;
var count__23607 = (0);
var i__23608 = (0);
while(true){
if((i__23608 < count__23607)){
var vec__23609 = cljs.core._nth.call(null,chunk__23606,i__23608);
var effect_key = cljs.core.nth.call(null,vec__23609,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23609,(1),null);
var temp__5455__auto___23625 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23625)){
var effect_fn_23626 = temp__5455__auto___23625;
effect_fn_23626.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23627 = seq__23605;
var G__23628 = chunk__23606;
var G__23629 = count__23607;
var G__23630 = (i__23608 + (1));
seq__23605 = G__23627;
chunk__23606 = G__23628;
count__23607 = G__23629;
i__23608 = G__23630;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23605);
if(temp__5457__auto__){
var seq__23605__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23605__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23605__$1);
var G__23631 = cljs.core.chunk_rest.call(null,seq__23605__$1);
var G__23632 = c__4319__auto__;
var G__23633 = cljs.core.count.call(null,c__4319__auto__);
var G__23634 = (0);
seq__23605 = G__23631;
chunk__23606 = G__23632;
count__23607 = G__23633;
i__23608 = G__23634;
continue;
} else {
var vec__23612 = cljs.core.first.call(null,seq__23605__$1);
var effect_key = cljs.core.nth.call(null,vec__23612,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23612,(1),null);
var temp__5455__auto___23635 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23635)){
var effect_fn_23636 = temp__5455__auto___23635;
effect_fn_23636.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23637 = cljs.core.next.call(null,seq__23605__$1);
var G__23638 = null;
var G__23639 = (0);
var G__23640 = (0);
seq__23605 = G__23637;
chunk__23606 = G__23638;
count__23607 = G__23639;
i__23608 = G__23640;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__23444__auto___23641 = re_frame.interop.now.call(null);
var duration__23445__auto___23642 = (end__23444__auto___23641 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23445__auto___23642,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__23444__auto___23641);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_23604;
}} else {
var seq__23615 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__23616 = null;
var count__23617 = (0);
var i__23618 = (0);
while(true){
if((i__23618 < count__23617)){
var vec__23619 = cljs.core._nth.call(null,chunk__23616,i__23618);
var effect_key = cljs.core.nth.call(null,vec__23619,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23619,(1),null);
var temp__5455__auto___23643 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23643)){
var effect_fn_23644 = temp__5455__auto___23643;
effect_fn_23644.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23645 = seq__23615;
var G__23646 = chunk__23616;
var G__23647 = count__23617;
var G__23648 = (i__23618 + (1));
seq__23615 = G__23645;
chunk__23616 = G__23646;
count__23617 = G__23647;
i__23618 = G__23648;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23615);
if(temp__5457__auto__){
var seq__23615__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23615__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23615__$1);
var G__23649 = cljs.core.chunk_rest.call(null,seq__23615__$1);
var G__23650 = c__4319__auto__;
var G__23651 = cljs.core.count.call(null,c__4319__auto__);
var G__23652 = (0);
seq__23615 = G__23649;
chunk__23616 = G__23650;
count__23617 = G__23651;
i__23618 = G__23652;
continue;
} else {
var vec__23622 = cljs.core.first.call(null,seq__23615__$1);
var effect_key = cljs.core.nth.call(null,vec__23622,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23622,(1),null);
var temp__5455__auto___23653 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___23653)){
var effect_fn_23654 = temp__5455__auto___23653;
effect_fn_23654.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23655 = cljs.core.next.call(null,seq__23615__$1);
var G__23656 = null;
var G__23657 = (0);
var G__23658 = (0);
seq__23615 = G__23655;
chunk__23616 = G__23656;
count__23617 = G__23657;
i__23618 = G__23658;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__23659 = cljs.core.seq.call(null,value);
var chunk__23660 = null;
var count__23661 = (0);
var i__23662 = (0);
while(true){
if((i__23662 < count__23661)){
var map__23663 = cljs.core._nth.call(null,chunk__23660,i__23662);
var map__23663__$1 = ((((!((map__23663 == null)))?(((((map__23663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23663):map__23663);
var effect = map__23663__$1;
var ms = cljs.core.get.call(null,map__23663__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23663__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23659,chunk__23660,count__23661,i__23662,map__23663,map__23663__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23659,chunk__23660,count__23661,i__23662,map__23663,map__23663__$1,effect,ms,dispatch))
,ms);
}


var G__23667 = seq__23659;
var G__23668 = chunk__23660;
var G__23669 = count__23661;
var G__23670 = (i__23662 + (1));
seq__23659 = G__23667;
chunk__23660 = G__23668;
count__23661 = G__23669;
i__23662 = G__23670;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23659);
if(temp__5457__auto__){
var seq__23659__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23659__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23659__$1);
var G__23671 = cljs.core.chunk_rest.call(null,seq__23659__$1);
var G__23672 = c__4319__auto__;
var G__23673 = cljs.core.count.call(null,c__4319__auto__);
var G__23674 = (0);
seq__23659 = G__23671;
chunk__23660 = G__23672;
count__23661 = G__23673;
i__23662 = G__23674;
continue;
} else {
var map__23665 = cljs.core.first.call(null,seq__23659__$1);
var map__23665__$1 = ((((!((map__23665 == null)))?(((((map__23665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23665):map__23665);
var effect = map__23665__$1;
var ms = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__23659,chunk__23660,count__23661,i__23662,map__23665,map__23665__$1,effect,ms,dispatch,seq__23659__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__23659,chunk__23660,count__23661,i__23662,map__23665,map__23665__$1,effect,ms,dispatch,seq__23659__$1,temp__5457__auto__))
,ms);
}


var G__23675 = cljs.core.next.call(null,seq__23659__$1);
var G__23676 = null;
var G__23677 = (0);
var G__23678 = (0);
seq__23659 = G__23675;
chunk__23660 = G__23676;
count__23661 = G__23677;
i__23662 = G__23678;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__23679 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__23680 = null;
var count__23681 = (0);
var i__23682 = (0);
while(true){
if((i__23682 < count__23681)){
var event = cljs.core._nth.call(null,chunk__23680,i__23682);
re_frame.router.dispatch.call(null,event);


var G__23683 = seq__23679;
var G__23684 = chunk__23680;
var G__23685 = count__23681;
var G__23686 = (i__23682 + (1));
seq__23679 = G__23683;
chunk__23680 = G__23684;
count__23681 = G__23685;
i__23682 = G__23686;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23679);
if(temp__5457__auto__){
var seq__23679__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23679__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23679__$1);
var G__23687 = cljs.core.chunk_rest.call(null,seq__23679__$1);
var G__23688 = c__4319__auto__;
var G__23689 = cljs.core.count.call(null,c__4319__auto__);
var G__23690 = (0);
seq__23679 = G__23687;
chunk__23680 = G__23688;
count__23681 = G__23689;
i__23682 = G__23690;
continue;
} else {
var event = cljs.core.first.call(null,seq__23679__$1);
re_frame.router.dispatch.call(null,event);


var G__23691 = cljs.core.next.call(null,seq__23679__$1);
var G__23692 = null;
var G__23693 = (0);
var G__23694 = (0);
seq__23679 = G__23691;
chunk__23680 = G__23692;
count__23681 = G__23693;
i__23682 = G__23694;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__23695 = cljs.core.seq.call(null,value);
var chunk__23696 = null;
var count__23697 = (0);
var i__23698 = (0);
while(true){
if((i__23698 < count__23697)){
var event = cljs.core._nth.call(null,chunk__23696,i__23698);
clear_event.call(null,event);


var G__23699 = seq__23695;
var G__23700 = chunk__23696;
var G__23701 = count__23697;
var G__23702 = (i__23698 + (1));
seq__23695 = G__23699;
chunk__23696 = G__23700;
count__23697 = G__23701;
i__23698 = G__23702;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23695);
if(temp__5457__auto__){
var seq__23695__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23695__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__23695__$1);
var G__23703 = cljs.core.chunk_rest.call(null,seq__23695__$1);
var G__23704 = c__4319__auto__;
var G__23705 = cljs.core.count.call(null,c__4319__auto__);
var G__23706 = (0);
seq__23695 = G__23703;
chunk__23696 = G__23704;
count__23697 = G__23705;
i__23698 = G__23706;
continue;
} else {
var event = cljs.core.first.call(null,seq__23695__$1);
clear_event.call(null,event);


var G__23707 = cljs.core.next.call(null,seq__23695__$1);
var G__23708 = null;
var G__23709 = (0);
var G__23710 = (0);
seq__23695 = G__23707;
chunk__23696 = G__23708;
count__23697 = G__23709;
i__23698 = G__23710;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1526705059787
