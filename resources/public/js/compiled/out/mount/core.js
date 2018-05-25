// Compiled by ClojureScript 1.10.238 {}
goog.provide('mount.core');
goog.require('cljs.core');
goog.require('mount.tools.macro');
goog.require('clojure.set');
goog.require('mount.tools.logger');
if(typeof mount.core._args !== 'undefined'){
} else {
mount.core._args = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof mount.core.state_seq !== 'undefined'){
} else {
mount.core.state_seq = cljs.core.atom.call(null,(0));
}
if(typeof mount.core.mode !== 'undefined'){
} else {
mount.core.mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428));
}
if(typeof mount.core.meta_state !== 'undefined'){
} else {
mount.core.meta_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof mount.core.running !== 'undefined'){
} else {
mount.core.running = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mount.core.make_state_seq = (function mount$core$make_state_seq(state){
var or__3922__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.swap_BANG_.call(null,mount.core.state_seq,cljs.core.inc);
}
});

/**
* @constructor
 * @implements {mount.core.Object}
*/
mount.core.NotStartedState = (function (state){
this.state = state;
});
mount.core.NotStartedState.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.state),"' is not started (to start all the states call mount/start)"].join('');
});

mount.core.NotStartedState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

mount.core.NotStartedState.cljs$lang$type = true;

mount.core.NotStartedState.cljs$lang$ctorStr = "mount.core/NotStartedState";

mount.core.NotStartedState.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mount.core/NotStartedState");
});

/**
 * Positional factory function for mount.core/NotStartedState.
 */
mount.core.__GT_NotStartedState = (function mount$core$__GT_NotStartedState(state){
return (new mount.core.NotStartedState(state));
});

mount.core.validate = (function mount$core$validate(p__25299){
var map__25300 = p__25299;
var map__25300__$1 = ((((!((map__25300 == null)))?(((((map__25300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25300):map__25300);
var lifecycle = map__25300__$1;
var start = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var suspend = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword(null,"suspend","suspend",849690959));
var resume = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
if(cljs.core.not.call(null,start)){
throw ["can't start a stateful thing without a start function. (i.e. missing :start fn)"].join('');
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = suspend;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return resume;
}
})())){
throw ["suspend / resume lifecycle support was removed in \"0.1.10\" in favor of (mount/stop-except)"].join('');
} else {
return null;
}
}
});
mount.core.with_ns = (function mount$core$with_ns(ns,name){
return ["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
});
mount.core.pounded_QMARK_ = (function mount$core$pounded_QMARK_(f){
var pound = "(fn* [] ";
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('').startsWith(pound);
});
mount.core.unpound = (function mount$core$unpound(f){
if(cljs.core.truth_(mount.core.pounded_QMARK_.call(null,f))){
return cljs.core.nth.call(null,f,(2));
} else {
return f;
}
});
/**
 * in case a namespace is recompiled without calling (mount/stop),
 * a running state instance will still be running.
 * this function stops this 'lost' state instance.
 * it is meant to be called by defstate before defining a new state
 */
mount.core.cleanup_if_dirty = (function mount$core$cleanup_if_dirty(state,reason){
var temp__5457__auto__ = cljs.core.deref.call(null,mount.core.running).call(null,state);
if(cljs.core.truth_(temp__5457__auto__)){
var map__25302 = temp__5457__auto__;
var map__25302__$1 = ((((!((map__25302 == null)))?(((((map__25302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25302):map__25302);
var up = map__25302__$1;
var stop = cljs.core.get.call(null,map__25302__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(stop)){
mount.tools.logger.log.call(null,["<< stopping.. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reason)].join(''));

stop.call(null);
} else {
}

return cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.dissoc,state);
} else {
return null;
}
});
mount.core.current_state = (function mount$core$current_state(state){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"inst","inst",645962501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state)));
});
mount.core.alter_state_BANG_ = (function mount$core$alter_state_BANG_(p__25304,value){
var map__25305 = p__25304;
var map__25305__$1 = ((((!((map__25305 == null)))?(((((map__25305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25305):map__25305);
var inst = cljs.core.get.call(null,map__25305__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
return cljs.core.reset_BANG_.call(null,inst,value);
});
mount.core.update_meta_BANG_ = (function mount$core$update_meta_BANG_(path,v){
return cljs.core.swap_BANG_.call(null,mount.core.meta_state,cljs.core.assoc_in,path,v);
});
mount.core.record_BANG_ = (function mount$core$record_BANG_(state_name,f,done){
var state = f.call(null);
cljs.core.swap_BANG_.call(null,done,cljs.core.conj,state_name);

return state;
});
mount.core.up = (function mount$core$up(state,p__25307,done){
var map__25308 = p__25307;
var map__25308__$1 = ((((!((map__25308 == null)))?(((((map__25308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25308):map__25308);
var current = map__25308__$1;
var start = cljs.core.get.call(null,map__25308__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__25308__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__25308__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
return null;
} else {
var s = (function (){try{return mount.core.record_BANG_.call(null,state,start,done);
}catch (e25310){var t__24998__auto__ = e25310;
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(["could not start [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"] due to"].join(''))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__24998__auto__)].join('');

}})();
mount.core.alter_state_BANG_.call(null,current,s);

cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.assoc,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),stop], null));

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null));
}
});
/**
 * brings a state down by
 *  * calling its 'stop' function if it is defined
 *    * if not defined, state will still become a 'NotStartedState'
 *    * in case of a failure on 'stop', state is still marked as :stopped, and the error is logged / printed
 *  * dissoc'ing it from the running states
 *  * marking it as :stopped
 */
mount.core.down = (function mount$core$down(state,p__25311,done){
var map__25312 = p__25311;
var map__25312__$1 = ((((!((map__25312 == null)))?(((((map__25312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25312):map__25312);
var current = map__25312__$1;
var stop = cljs.core.get.call(null,map__25312__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__25312__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(cljs.core.some.call(null,status,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null)))){
if(cljs.core.truth_(stop)){
var temp__5455__auto___25315 = new cljs.core.Keyword(null,"f-failed","f-failed",463707059).cljs$core$IFn$_invoke$arity$1((function (){try{return mount.core.record_BANG_.call(null,state,stop,done);
}catch (e25314){var t__24998__auto__ = e25314;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f-failed","f-failed",463707059),cljs.core.ex_info.call(null,["could not stop [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"] due to"].join(''),cljs.core.PersistentArrayMap.EMPTY,t__24998__auto__)], null);

}})());
if(cljs.core.truth_(temp__5455__auto___25315)){
var cause_25316 = temp__5455__auto___25315;
mount.tools.logger.log.call(null,cause_25316,new cljs.core.Keyword(null,"error","error",-978969032));
} else {
mount.core.alter_state_BANG_.call(null,current,(new mount.core.NotStartedState(state)));
}
} else {
mount.core.alter_state_BANG_.call(null,current,(new mount.core.NotStartedState(state)));
}

cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.dissoc,state);

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null));
} else {
return null;
}
});
mount.core.running_states = (function mount$core$running_states(){
return cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,mount.core.running)));
});

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
mount.core.DerefableState = (function (name){
this.name = name;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
mount.core.DerefableState.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__25317 = cljs.core.deref.call(null,mount.core.meta_state).call(null,self__.name);
var map__25317__$1 = ((((!((map__25317 == null)))?(((((map__25317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25317):map__25317);
var state = map__25317__$1;
var status = cljs.core.get.call(null,map__25317__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst = cljs.core.get.call(null,map__25317__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
} else {
mount.core.up.call(null,self__.name,state,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));
}

return cljs.core.deref.call(null,inst);
});

mount.core.DerefableState.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.boolean$.call(null,mount.core.running_states.call(null).call(null,self__.name));
});

mount.core.DerefableState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

mount.core.DerefableState.cljs$lang$type = true;

mount.core.DerefableState.cljs$lang$ctorStr = "mount.core/DerefableState";

mount.core.DerefableState.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mount.core/DerefableState");
});

/**
 * Positional factory function for mount.core/DerefableState.
 */
mount.core.__GT_DerefableState = (function mount$core$__GT_DerefableState(name){
return (new mount.core.DerefableState(name));
});

mount.core.on_reload_meta = (function mount$core$on_reload_meta(s_var){
var or__3922__auto__ = new cljs.core.Keyword(null,"on-reload","on-reload",869927793).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s_var));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"restart","restart",-1779883612);
}
});
mount.core.running_noop_QMARK_ = (function mount$core$running_noop_QMARK_(s_name){
var map__25319 = cljs.core.deref.call(null,mount.core.meta_state).call(null,s_name);
var map__25319__$1 = ((((!((map__25319 == null)))?(((((map__25319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25319):map__25319);
var var$ = cljs.core.get.call(null,map__25319__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var status = cljs.core.get.call(null,map__25319__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var on_reload = new cljs.core.Keyword(null,"on-reload","on-reload",869927793).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,var$));
if(cljs.core.truth_(status)){
var and__3911__auto__ = status.call(null,new cljs.core.Keyword(null,"started","started",585705024));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noop","noop",-673731258),on_reload);
} else {
return and__3911__auto__;
}
} else {
return null;
}
});
mount.core.mount_it = (function mount$core$mount_it(s_var,s_name,s_meta){
var with_inst = cljs.core.assoc.call(null,s_meta,new cljs.core.Keyword(null,"inst","inst",645962501),cljs.core.atom.call(null,(new mount.core.NotStartedState(s_name))),new cljs.core.Keyword(null,"var","var",-769682797),s_var);
var on_reload = mount.core.on_reload_meta.call(null,s_var);
var existing_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"noop","noop",-673731258),on_reload))?null:mount.core.cleanup_if_dirty.call(null,s_name,"(namespace was recompiled)"));
mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_name], null),with_inst);

if(cljs.core.truth_((function (){var and__3911__auto__ = existing_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"restart","restart",-1779883612),on_reload);
} else {
return and__3911__auto__;
}
})())){
mount.tools.logger.log.call(null,[">> starting.. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_name)," (namespace was recompiled)"].join(''));

return mount.core.up.call(null,s_name,with_inst,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));
} else {
return null;
}
});
mount.core.in_cljc_mode = (function mount$core$in_cljc_mode(){
return cljs.core.reset_BANG_.call(null,mount.core.mode,new cljs.core.Keyword(null,"cljc","cljc",-1728400583));
});
mount.core.in_clj_mode = (function mount$core$in_clj_mode(){
return cljs.core.reset_BANG_.call(null,mount.core.mode,new cljs.core.Keyword(null,"clj","clj",-660495428));
});
mount.core.args = (function mount$core$args(){
return cljs.core.deref.call(null,mount.core._args);
});
mount.core.find_all_states = (function mount$core$find_all_states(){
return cljs.core.keys.call(null,cljs.core.deref.call(null,mount.core.meta_state));
});
mount.core.var_to_str = (function mount$core$var_to_str(v){
if((v instanceof cljs.core.Var)){
var map__25321 = cljs.core.meta.call(null,v);
var map__25321__$1 = ((((!((map__25321 == null)))?(((((map__25321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25321):map__25321);
var ns = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return mount.core.with_ns.call(null,ns,name);
} else {
return v;
}
});
mount.core.unvar_state = (function mount$core$unvar_state(s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(2),s));
});
mount.core.bring = (function mount$core$bring(states,fun,order){
var done = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var $_25333 = states;
var $_25334__$1 = cljs.core.map.call(null,mount.core.var_to_str,$_25333);
var $_25335__$2 = cljs.core.select_keys.call(null,cljs.core.deref.call(null,mount.core.meta_state),$_25334__$1);
var $_25336__$3 = cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.val),order,$_25335__$2);
var seq__25323_25337 = cljs.core.seq.call(null,$_25336__$3);
var chunk__25324_25338 = null;
var count__25325_25339 = (0);
var i__25326_25340 = (0);
while(true){
if((i__25326_25340 < count__25325_25339)){
var vec__25327_25341 = cljs.core._nth.call(null,chunk__25324_25338,i__25326_25340);
var k_25342 = cljs.core.nth.call(null,vec__25327_25341,(0),null);
var v_25343 = cljs.core.nth.call(null,vec__25327_25341,(1),null);
fun.call(null,k_25342,v_25343,done);


var G__25344 = seq__25323_25337;
var G__25345 = chunk__25324_25338;
var G__25346 = count__25325_25339;
var G__25347 = (i__25326_25340 + (1));
seq__25323_25337 = G__25344;
chunk__25324_25338 = G__25345;
count__25325_25339 = G__25346;
i__25326_25340 = G__25347;
continue;
} else {
var temp__5457__auto___25348 = cljs.core.seq.call(null,seq__25323_25337);
if(temp__5457__auto___25348){
var seq__25323_25349__$1 = temp__5457__auto___25348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25323_25349__$1)){
var c__4319__auto___25350 = cljs.core.chunk_first.call(null,seq__25323_25349__$1);
var G__25351 = cljs.core.chunk_rest.call(null,seq__25323_25349__$1);
var G__25352 = c__4319__auto___25350;
var G__25353 = cljs.core.count.call(null,c__4319__auto___25350);
var G__25354 = (0);
seq__25323_25337 = G__25351;
chunk__25324_25338 = G__25352;
count__25325_25339 = G__25353;
i__25326_25340 = G__25354;
continue;
} else {
var vec__25330_25355 = cljs.core.first.call(null,seq__25323_25349__$1);
var k_25356 = cljs.core.nth.call(null,vec__25330_25355,(0),null);
var v_25357 = cljs.core.nth.call(null,vec__25330_25355,(1),null);
fun.call(null,k_25356,v_25357,done);


var G__25358 = cljs.core.next.call(null,seq__25323_25349__$1);
var G__25359 = null;
var G__25360 = (0);
var G__25361 = (0);
seq__25323_25337 = G__25358;
chunk__25324_25338 = G__25359;
count__25325_25339 = G__25360;
i__25326_25340 = G__25361;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,done);
});
/**
 * merges with overriding _certain_ non existing keys.
 * i.e. :stop is in a 'state', but not in a 'substitute': it should be overriden with nil
 *      however other keys of 'state' (such as :ns,:name,:order) should not be overriden
 */
mount.core.merge_lifecycles = (function mount$core$merge_lifecycles(var_args){
var G__25363 = arguments.length;
switch (G__25363) {
case 2:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2 = (function (state,sub){
return mount.core.merge_lifecycles.call(null,state,null,sub);
});

mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3 = (function (state,origin,p__25364){
var map__25365 = p__25364;
var map__25365__$1 = ((((!((map__25365 == null)))?(((((map__25365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25365):map__25365);
var start = cljs.core.get.call(null,map__25365__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__25365__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__25365__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop);
});

mount.core.merge_lifecycles.cljs$lang$maxFixedArity = 3;

mount.core.rollback_BANG_ = (function mount$core$rollback_BANG_(state){
var map__25368 = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var map__25368__$1 = ((((!((map__25368 == null)))?(((((map__25368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25368):map__25368);
var sub = map__25368__$1;
var origin = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core.truth_(origin)){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,sub,origin));
} else {
return null;
}
});
mount.core.substitute_BANG_ = (function mount$core$substitute_BANG_(state,with$,mode){
var lifecycle_fns = (function (p1__25370_SHARP_){
return cljs.core.select_keys.call(null,p1__25370_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"status","status",-1997798413)], null));
});
var origin = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var sub = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217),mode))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),((function (lifecycle_fns,origin){
return (function (){
return with$;
});})(lifecycle_fns,origin))
,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null):cljs.core.assoc.call(null,with$,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)));
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,origin,lifecycle_fns.call(null,origin),sub));
});
mount.core.unsub = (function mount$core$unsub(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sub?","sub?",768712042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state)))){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"sub?","sub?",768712042)], null),null);
} else {
return null;
}
});
mount.core.all_without_subs = (function mount$core$all_without_subs(){
return cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"sub?","sub?",768712042),cljs.core.deref.call(null,mount.core.meta_state)),mount.core.find_all_states.call(null));
});
mount.core.start = (function mount$core$start(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25372 = arguments.length;
var i__4500__auto___25373 = (0);
while(true){
if((i__4500__auto___25373 < len__4499__auto___25372)){
args__4502__auto__.push((arguments[i__4500__auto___25373]));

var G__25374 = (i__4500__auto___25373 + (1));
i__4500__auto___25373 = G__25374;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mount.core.start.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mount.core.start.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var fs = cljs.core.first.call(null,states);
if(cljs.core.coll_QMARK_.call(null,fs)){
if(!(cljs.core.empty_QMARK_.call(null,fs))){
return cljs.core.apply.call(null,mount.core.start,fs);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
var states__$1 = (function (){var or__3922__auto__ = cljs.core.seq.call(null,states);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return mount.core.all_without_subs.call(null);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),mount.core.bring.call(null,states__$1,mount.core.up,cljs.core._LT_)], null);
}
});

mount.core.start.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mount.core.start.cljs$lang$applyTo = (function (seq25371){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25371));
});

mount.core.stop = (function mount$core$stop(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25376 = arguments.length;
var i__4500__auto___25377 = (0);
while(true){
if((i__4500__auto___25377 < len__4499__auto___25376)){
args__4502__auto__.push((arguments[i__4500__auto___25377]));

var G__25378 = (i__4500__auto___25377 + (1));
i__4500__auto___25377 = G__25378;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mount.core.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mount.core.stop.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var fs = cljs.core.first.call(null,states);
if(cljs.core.coll_QMARK_.call(null,fs)){
if(!(cljs.core.empty_QMARK_.call(null,fs))){
return cljs.core.apply.call(null,mount.core.stop,fs);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
var states__$1 = (function (){var or__3922__auto__ = cljs.core.seq.call(null,states);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return mount.core.find_all_states.call(null);
}
})();
var _ = cljs.core.dorun.call(null,cljs.core.map.call(null,mount.core.unsub,states__$1));
var stopped = mount.core.bring.call(null,states__$1,mount.core.down,cljs.core._GT_);
cljs.core.dorun.call(null,cljs.core.map.call(null,mount.core.rollback_BANG_,states__$1));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),stopped], null);
}
});

mount.core.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mount.core.stop.cljs$lang$applyTo = (function (seq25375){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25375));
});

mount.core.mapset = (function mount$core$mapset(f,xs){
return cljs.core.set.call(null,cljs.core.map.call(null,f,xs));
});
mount.core.only = (function mount$core$only(var_args){
var G__25380 = arguments.length;
switch (G__25380) {
case 1:
return mount.core.only.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.only.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.only.cljs$core$IFn$_invoke$arity$1 = (function (states){
return mount.core.only.call(null,mount.core.find_all_states.call(null),states);
});

mount.core.only.cljs$core$IFn$_invoke$arity$2 = (function (states,these){
return clojure.set.intersection.call(null,mount.core.mapset.call(null,mount.core.var_to_str,these),mount.core.mapset.call(null,mount.core.var_to_str,states));
});

mount.core.only.cljs$lang$maxFixedArity = 2;

mount.core.with_args = (function mount$core$with_args(var_args){
var G__25383 = arguments.length;
switch (G__25383) {
case 1:
return mount.core.with_args.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.with_args.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.with_args.cljs$core$IFn$_invoke$arity$1 = (function (args){
return mount.core.with_args.call(null,mount.core.find_all_states.call(null),args);
});

mount.core.with_args.cljs$core$IFn$_invoke$arity$2 = (function (states,args){
cljs.core.reset_BANG_.call(null,mount.core._args,args);

return states;
});

mount.core.with_args.cljs$lang$maxFixedArity = 2;

mount.core.except = (function mount$core$except(var_args){
var G__25386 = arguments.length;
switch (G__25386) {
case 1:
return mount.core.except.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.except.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.except.cljs$core$IFn$_invoke$arity$1 = (function (states){
return mount.core.except.call(null,mount.core.find_all_states.call(null),states);
});

mount.core.except.cljs$core$IFn$_invoke$arity$2 = (function (states,these){
return cljs.core.remove.call(null,mount.core.mapset.call(null,mount.core.var_to_str,these),mount.core.mapset.call(null,mount.core.var_to_str,states));
});

mount.core.except.cljs$lang$maxFixedArity = 2;

mount.core.swap = (function mount$core$swap(var_args){
var G__25389 = arguments.length;
switch (G__25389) {
case 1:
return mount.core.swap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.swap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.swap.cljs$core$IFn$_invoke$arity$1 = (function (with$){
return mount.core.swap.call(null,mount.core.find_all_states.call(null),with$);
});

mount.core.swap.cljs$core$IFn$_invoke$arity$2 = (function (states,with$){
var seq__25390_25401 = cljs.core.seq.call(null,with$);
var chunk__25391_25402 = null;
var count__25392_25403 = (0);
var i__25393_25404 = (0);
while(true){
if((i__25393_25404 < count__25392_25403)){
var vec__25394_25405 = cljs.core._nth.call(null,chunk__25391_25402,i__25393_25404);
var from_25406 = cljs.core.nth.call(null,vec__25394_25405,(0),null);
var to_25407 = cljs.core.nth.call(null,vec__25394_25405,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_25406),to_25407,new cljs.core.Keyword(null,"value","value",305978217));


var G__25408 = seq__25390_25401;
var G__25409 = chunk__25391_25402;
var G__25410 = count__25392_25403;
var G__25411 = (i__25393_25404 + (1));
seq__25390_25401 = G__25408;
chunk__25391_25402 = G__25409;
count__25392_25403 = G__25410;
i__25393_25404 = G__25411;
continue;
} else {
var temp__5457__auto___25412 = cljs.core.seq.call(null,seq__25390_25401);
if(temp__5457__auto___25412){
var seq__25390_25413__$1 = temp__5457__auto___25412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25390_25413__$1)){
var c__4319__auto___25414 = cljs.core.chunk_first.call(null,seq__25390_25413__$1);
var G__25415 = cljs.core.chunk_rest.call(null,seq__25390_25413__$1);
var G__25416 = c__4319__auto___25414;
var G__25417 = cljs.core.count.call(null,c__4319__auto___25414);
var G__25418 = (0);
seq__25390_25401 = G__25415;
chunk__25391_25402 = G__25416;
count__25392_25403 = G__25417;
i__25393_25404 = G__25418;
continue;
} else {
var vec__25397_25419 = cljs.core.first.call(null,seq__25390_25413__$1);
var from_25420 = cljs.core.nth.call(null,vec__25397_25419,(0),null);
var to_25421 = cljs.core.nth.call(null,vec__25397_25419,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_25420),to_25421,new cljs.core.Keyword(null,"value","value",305978217));


var G__25422 = cljs.core.next.call(null,seq__25390_25413__$1);
var G__25423 = null;
var G__25424 = (0);
var G__25425 = (0);
seq__25390_25401 = G__25422;
chunk__25391_25402 = G__25423;
count__25392_25403 = G__25424;
i__25393_25404 = G__25425;
continue;
}
} else {
}
}
break;
}

return states;
});

mount.core.swap.cljs$lang$maxFixedArity = 2;

mount.core.swap_states = (function mount$core$swap_states(var_args){
var G__25427 = arguments.length;
switch (G__25427) {
case 1:
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mount.core.swap_states.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.swap_states.cljs$core$IFn$_invoke$arity$1 = (function (with$){
return mount.core.swap_states.call(null,mount.core.find_all_states.call(null),with$);
});

mount.core.swap_states.cljs$core$IFn$_invoke$arity$2 = (function (states,with$){
var seq__25428_25439 = cljs.core.seq.call(null,with$);
var chunk__25429_25440 = null;
var count__25430_25441 = (0);
var i__25431_25442 = (0);
while(true){
if((i__25431_25442 < count__25430_25441)){
var vec__25432_25443 = cljs.core._nth.call(null,chunk__25429_25440,i__25431_25442);
var from_25444 = cljs.core.nth.call(null,vec__25432_25443,(0),null);
var to_25445 = cljs.core.nth.call(null,vec__25432_25443,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_25444),to_25445,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__25446 = seq__25428_25439;
var G__25447 = chunk__25429_25440;
var G__25448 = count__25430_25441;
var G__25449 = (i__25431_25442 + (1));
seq__25428_25439 = G__25446;
chunk__25429_25440 = G__25447;
count__25430_25441 = G__25448;
i__25431_25442 = G__25449;
continue;
} else {
var temp__5457__auto___25450 = cljs.core.seq.call(null,seq__25428_25439);
if(temp__5457__auto___25450){
var seq__25428_25451__$1 = temp__5457__auto___25450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25428_25451__$1)){
var c__4319__auto___25452 = cljs.core.chunk_first.call(null,seq__25428_25451__$1);
var G__25453 = cljs.core.chunk_rest.call(null,seq__25428_25451__$1);
var G__25454 = c__4319__auto___25452;
var G__25455 = cljs.core.count.call(null,c__4319__auto___25452);
var G__25456 = (0);
seq__25428_25439 = G__25453;
chunk__25429_25440 = G__25454;
count__25430_25441 = G__25455;
i__25431_25442 = G__25456;
continue;
} else {
var vec__25435_25457 = cljs.core.first.call(null,seq__25428_25451__$1);
var from_25458 = cljs.core.nth.call(null,vec__25435_25457,(0),null);
var to_25459 = cljs.core.nth.call(null,vec__25435_25457,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_25458),to_25459,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__25460 = cljs.core.next.call(null,seq__25428_25451__$1);
var G__25461 = null;
var G__25462 = (0);
var G__25463 = (0);
seq__25428_25439 = G__25460;
chunk__25429_25440 = G__25461;
count__25430_25441 = G__25462;
i__25431_25442 = G__25463;
continue;
}
} else {
}
}
break;
}

return states;
});

mount.core.swap_states.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
mount.core.ChangeListener = function(){};

mount.core.add_watcher = (function mount$core$add_watcher(this$,ks,watcher){
if(((!((this$ == null))) && (!((this$.mount$core$ChangeListener$add_watcher$arity$3 == null))))){
return this$.mount$core$ChangeListener$add_watcher$arity$3(this$,ks,watcher);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mount.core.add_watcher[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,ks,watcher);
} else {
var m__4212__auto____$1 = (mount.core.add_watcher["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,ks,watcher);
} else {
throw cljs.core.missing_protocol.call(null,"ChangeListener.add-watcher",this$);
}
}
}
});

mount.core.on_change = (function mount$core$on_change(this$,k){
if(((!((this$ == null))) && (!((this$.mount$core$ChangeListener$on_change$arity$2 == null))))){
return this$.mount$core$ChangeListener$on_change$arity$2(this$,k);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mount.core.on_change[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,k);
} else {
var m__4212__auto____$1 = (mount.core.on_change["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,k);
} else {
throw cljs.core.missing_protocol.call(null,"ChangeListener.on-change",this$);
}
}
}
});


/**
* @constructor
 * @implements {mount.core.ChangeListener}
*/
mount.core.RestartListener = (function (watchers){
this.watchers = watchers;
});
mount.core.RestartListener.prototype.mount$core$ChangeListener$ = cljs.core.PROTOCOL_SENTINEL;

mount.core.RestartListener.prototype.mount$core$ChangeListener$add_watcher$arity$3 = (function (_,ks,state){
var self__ = this;
var ___$1 = this;
var seq__25464 = cljs.core.seq.call(null,ks);
var chunk__25465 = null;
var count__25466 = (0);
var i__25467 = (0);
while(true){
if((i__25467 < count__25466)){
var k = cljs.core._nth.call(null,chunk__25465,i__25467);
cljs.core.swap_BANG_.call(null,self__.watchers,cljs.core.update,k,((function (seq__25464,chunk__25465,count__25466,i__25467,k,___$1){
return (function (v){
return cljs.core.vec.call(null,cljs.core.conj.call(null,v,state));
});})(seq__25464,chunk__25465,count__25466,i__25467,k,___$1))
);


var G__25472 = seq__25464;
var G__25473 = chunk__25465;
var G__25474 = count__25466;
var G__25475 = (i__25467 + (1));
seq__25464 = G__25472;
chunk__25465 = G__25473;
count__25466 = G__25474;
i__25467 = G__25475;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25464);
if(temp__5457__auto__){
var seq__25464__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25464__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25464__$1);
var G__25476 = cljs.core.chunk_rest.call(null,seq__25464__$1);
var G__25477 = c__4319__auto__;
var G__25478 = cljs.core.count.call(null,c__4319__auto__);
var G__25479 = (0);
seq__25464 = G__25476;
chunk__25465 = G__25477;
count__25466 = G__25478;
i__25467 = G__25479;
continue;
} else {
var k = cljs.core.first.call(null,seq__25464__$1);
cljs.core.swap_BANG_.call(null,self__.watchers,cljs.core.update,k,((function (seq__25464,chunk__25465,count__25466,i__25467,k,seq__25464__$1,temp__5457__auto__,___$1){
return (function (v){
return cljs.core.vec.call(null,cljs.core.conj.call(null,v,state));
});})(seq__25464,chunk__25465,count__25466,i__25467,k,seq__25464__$1,temp__5457__auto__,___$1))
);


var G__25480 = cljs.core.next.call(null,seq__25464__$1);
var G__25481 = null;
var G__25482 = (0);
var G__25483 = (0);
seq__25464 = G__25480;
chunk__25465 = G__25481;
count__25466 = G__25482;
i__25467 = G__25483;
continue;
}
} else {
return null;
}
}
break;
}
});

mount.core.RestartListener.prototype.mount$core$ChangeListener$on_change$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
var seq__25468 = cljs.core.seq.call(null,ks);
var chunk__25469 = null;
var count__25470 = (0);
var i__25471 = (0);
while(true){
if((i__25471 < count__25470)){
var k = cljs.core._nth.call(null,chunk__25469,i__25471);
var temp__5457__auto___25484 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watchers).call(null,k));
if(temp__5457__auto___25484){
var states_25485 = temp__5457__auto___25484;
cljs.core.apply.call(null,mount.core.stop,states_25485);

cljs.core.apply.call(null,mount.core.start,states_25485);
} else {
}


var G__25486 = seq__25468;
var G__25487 = chunk__25469;
var G__25488 = count__25470;
var G__25489 = (i__25471 + (1));
seq__25468 = G__25486;
chunk__25469 = G__25487;
count__25470 = G__25488;
i__25471 = G__25489;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25468);
if(temp__5457__auto__){
var seq__25468__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25468__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25468__$1);
var G__25490 = cljs.core.chunk_rest.call(null,seq__25468__$1);
var G__25491 = c__4319__auto__;
var G__25492 = cljs.core.count.call(null,c__4319__auto__);
var G__25493 = (0);
seq__25468 = G__25490;
chunk__25469 = G__25491;
count__25470 = G__25492;
i__25471 = G__25493;
continue;
} else {
var k = cljs.core.first.call(null,seq__25468__$1);
var temp__5457__auto___25494__$1 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.watchers).call(null,k));
if(temp__5457__auto___25494__$1){
var states_25495 = temp__5457__auto___25494__$1;
cljs.core.apply.call(null,mount.core.stop,states_25495);

cljs.core.apply.call(null,mount.core.start,states_25495);
} else {
}


var G__25496 = cljs.core.next.call(null,seq__25468__$1);
var G__25497 = null;
var G__25498 = (0);
var G__25499 = (0);
seq__25468 = G__25496;
chunk__25469 = G__25497;
count__25470 = G__25498;
i__25471 = G__25499;
continue;
}
} else {
return null;
}
}
break;
}
});

mount.core.RestartListener.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"watchers","watchers",-1799060888,null)], null);
});

mount.core.RestartListener.cljs$lang$type = true;

mount.core.RestartListener.cljs$lang$ctorStr = "mount.core/RestartListener";

mount.core.RestartListener.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mount.core/RestartListener");
});

/**
 * Positional factory function for mount.core/RestartListener.
 */
mount.core.__GT_RestartListener = (function mount$core$__GT_RestartListener(watchers){
return (new mount.core.RestartListener(watchers));
});

mount.core.restart_listener = (function mount$core$restart_listener(var_args){
var G__25501 = arguments.length;
switch (G__25501) {
case 0:
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mount.core.restart_listener.cljs$core$IFn$_invoke$arity$0 = (function (){
return mount.core.restart_listener.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

mount.core.restart_listener.cljs$core$IFn$_invoke$arity$1 = (function (watchers){
return (new mount.core.RestartListener(cljs.core.atom.call(null,watchers)));
});

mount.core.restart_listener.cljs$lang$maxFixedArity = 1;

mount.core.stop_except = (function mount$core$stop_except(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25504 = arguments.length;
var i__4500__auto___25505 = (0);
while(true){
if((i__4500__auto___25505 < len__4499__auto___25504)){
args__4502__auto__.push((arguments[i__4500__auto___25505]));

var G__25506 = (i__4500__auto___25505 + (1));
i__4500__auto___25505 = G__25506;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var all = cljs.core.set.call(null,mount.core.find_all_states.call(null));
var states__$1 = cljs.core.map.call(null,mount.core.var_to_str,states);
var states__$2 = cljs.core.remove.call(null,cljs.core.set.call(null,states__$1),all);
if(!(cljs.core.empty_QMARK_.call(null,states__$2))){
return cljs.core.apply.call(null,mount.core.stop,states__$2);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),cljs.core.PersistentHashSet.EMPTY], null);
}
});

mount.core.stop_except.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mount.core.stop_except.cljs$lang$applyTo = (function (seq25503){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25503));
});

mount.core.start_with_args = (function mount$core$start_with_args(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25509 = arguments.length;
var i__4500__auto___25510 = (0);
while(true){
if((i__4500__auto___25510 < len__4499__auto___25509)){
args__4502__auto__.push((arguments[i__4500__auto___25510]));

var G__25511 = (i__4500__auto___25510 + (1));
i__4500__auto___25510 = G__25511;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic = (function (xs,states){
cljs.core.reset_BANG_.call(null,mount.core._args,xs);

if(cljs.core.truth_(cljs.core.first.call(null,states))){
return cljs.core.apply.call(null,mount.core.start,states);
} else {
return mount.core.start.call(null);
}
});

mount.core.start_with_args.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mount.core.start_with_args.cljs$lang$applyTo = (function (seq25507){
var G__25508 = cljs.core.first.call(null,seq25507);
var seq25507__$1 = cljs.core.next.call(null,seq25507);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25508,seq25507__$1);
});

mount.core.start_with = (function mount$core$start_with(with$){
var seq__25512_25522 = cljs.core.seq.call(null,with$);
var chunk__25513_25523 = null;
var count__25514_25524 = (0);
var i__25515_25525 = (0);
while(true){
if((i__25515_25525 < count__25514_25524)){
var vec__25516_25526 = cljs.core._nth.call(null,chunk__25513_25523,i__25515_25525);
var from_25527 = cljs.core.nth.call(null,vec__25516_25526,(0),null);
var to_25528 = cljs.core.nth.call(null,vec__25516_25526,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_25527),to_25528,new cljs.core.Keyword(null,"value","value",305978217));


var G__25529 = seq__25512_25522;
var G__25530 = chunk__25513_25523;
var G__25531 = count__25514_25524;
var G__25532 = (i__25515_25525 + (1));
seq__25512_25522 = G__25529;
chunk__25513_25523 = G__25530;
count__25514_25524 = G__25531;
i__25515_25525 = G__25532;
continue;
} else {
var temp__5457__auto___25533 = cljs.core.seq.call(null,seq__25512_25522);
if(temp__5457__auto___25533){
var seq__25512_25534__$1 = temp__5457__auto___25533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25512_25534__$1)){
var c__4319__auto___25535 = cljs.core.chunk_first.call(null,seq__25512_25534__$1);
var G__25536 = cljs.core.chunk_rest.call(null,seq__25512_25534__$1);
var G__25537 = c__4319__auto___25535;
var G__25538 = cljs.core.count.call(null,c__4319__auto___25535);
var G__25539 = (0);
seq__25512_25522 = G__25536;
chunk__25513_25523 = G__25537;
count__25514_25524 = G__25538;
i__25515_25525 = G__25539;
continue;
} else {
var vec__25519_25540 = cljs.core.first.call(null,seq__25512_25534__$1);
var from_25541 = cljs.core.nth.call(null,vec__25519_25540,(0),null);
var to_25542 = cljs.core.nth.call(null,vec__25519_25540,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_25541),to_25542,new cljs.core.Keyword(null,"value","value",305978217));


var G__25543 = cljs.core.next.call(null,seq__25512_25534__$1);
var G__25544 = null;
var G__25545 = (0);
var G__25546 = (0);
seq__25512_25522 = G__25543;
chunk__25513_25523 = G__25544;
count__25514_25524 = G__25545;
i__25515_25525 = G__25546;
continue;
}
} else {
}
}
break;
}

return mount.core.start.call(null);
});
mount.core.start_with_states = (function mount$core$start_with_states(with$){
var seq__25547_25557 = cljs.core.seq.call(null,with$);
var chunk__25548_25558 = null;
var count__25549_25559 = (0);
var i__25550_25560 = (0);
while(true){
if((i__25550_25560 < count__25549_25559)){
var vec__25551_25561 = cljs.core._nth.call(null,chunk__25548_25558,i__25550_25560);
var from_25562 = cljs.core.nth.call(null,vec__25551_25561,(0),null);
var to_25563 = cljs.core.nth.call(null,vec__25551_25561,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_25562),to_25563,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__25564 = seq__25547_25557;
var G__25565 = chunk__25548_25558;
var G__25566 = count__25549_25559;
var G__25567 = (i__25550_25560 + (1));
seq__25547_25557 = G__25564;
chunk__25548_25558 = G__25565;
count__25549_25559 = G__25566;
i__25550_25560 = G__25567;
continue;
} else {
var temp__5457__auto___25568 = cljs.core.seq.call(null,seq__25547_25557);
if(temp__5457__auto___25568){
var seq__25547_25569__$1 = temp__5457__auto___25568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25547_25569__$1)){
var c__4319__auto___25570 = cljs.core.chunk_first.call(null,seq__25547_25569__$1);
var G__25571 = cljs.core.chunk_rest.call(null,seq__25547_25569__$1);
var G__25572 = c__4319__auto___25570;
var G__25573 = cljs.core.count.call(null,c__4319__auto___25570);
var G__25574 = (0);
seq__25547_25557 = G__25571;
chunk__25548_25558 = G__25572;
count__25549_25559 = G__25573;
i__25550_25560 = G__25574;
continue;
} else {
var vec__25554_25575 = cljs.core.first.call(null,seq__25547_25569__$1);
var from_25576 = cljs.core.nth.call(null,vec__25554_25575,(0),null);
var to_25577 = cljs.core.nth.call(null,vec__25554_25575,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_25576),to_25577,new cljs.core.Keyword(null,"state","state",-1988618099));


var G__25578 = cljs.core.next.call(null,seq__25547_25569__$1);
var G__25579 = null;
var G__25580 = (0);
var G__25581 = (0);
seq__25547_25557 = G__25578;
chunk__25548_25558 = G__25579;
count__25549_25559 = G__25580;
i__25550_25560 = G__25581;
continue;
}
} else {
}
}
break;
}

return mount.core.start.call(null);
});
mount.core.start_without = (function mount$core$start_without(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25583 = arguments.length;
var i__4500__auto___25584 = (0);
while(true){
if((i__4500__auto___25584 < len__4499__auto___25583)){
args__4502__auto__.push((arguments[i__4500__auto___25584]));

var G__25585 = (i__4500__auto___25584 + (1));
i__4500__auto___25584 = G__25585;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic = (function (states){
if(cljs.core.truth_(cljs.core.first.call(null,states))){
var app = cljs.core.set.call(null,mount.core.all_without_subs.call(null));
var states__$1 = cljs.core.map.call(null,mount.core.var_to_str,states);
var without = cljs.core.remove.call(null,cljs.core.set.call(null,states__$1),app);
if(!(cljs.core.empty_QMARK_.call(null,without))){
return cljs.core.apply.call(null,mount.core.start,without);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),cljs.core.PersistentHashSet.EMPTY], null);
}
} else {
return mount.core.start.call(null);
}
});

mount.core.start_without.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mount.core.start_without.cljs$lang$applyTo = (function (seq25582){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25582));
});


//# sourceMappingURL=core.js.map?rel=1526705062010
