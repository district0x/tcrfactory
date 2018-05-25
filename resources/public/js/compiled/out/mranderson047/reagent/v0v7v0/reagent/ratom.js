// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('clojure.set');
if(typeof mranderson047.reagent.v0v7v0.reagent.ratom.debug !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.debug = false;
}
if(typeof mranderson047.reagent.v0v7v0.reagent.ratom.generation !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.generation = (0);
}
if(typeof mranderson047.reagent.v0v7v0.reagent.ratom._running !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom._running = cljs.core.atom.call(null,(0));
}
mranderson047.reagent.v0v7v0.reagent.ratom.reactive_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$reactive_QMARK_(){
return !((mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null));
});
mranderson047.reagent.v0v7v0.reagent.ratom.running = (function mranderson047$reagent$v0v7v0$reagent$ratom$running(){
return cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.ratom._running);
});
mranderson047.reagent.v0v7v0.reagent.ratom.arr_len = (function mranderson047$reagent$v0v7v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.arr_eq = (function mranderson047$reagent$v0v7v0$reagent$ratom$arr_eq(x,y){
var len = mranderson047.reagent.v0v7v0.reagent.ratom.arr_len.call(null,x);
var and__3911__auto__ = (len === mranderson047.reagent.v0v7v0.reagent.ratom.arr_len.call(null,y));
if(and__3911__auto__){
var i = (0);
while(true){
var or__3922__auto__ = (i === len);
if(or__3922__auto__){
return or__3922__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__32647 = (i + (1));
i = G__32647;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__3911__auto__;
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.in_context = (function mranderson047$reagent$v0v7v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR_32648 = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_32648;
}});
mranderson047.reagent.v0v7v0.reagent.ratom.deref_capture = (function mranderson047$reagent$v0v7v0$reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = mranderson047.reagent.v0v7v0.reagent.ratom.generation = (mranderson047.reagent.v0v7v0.reagent.ratom.generation + (1));


var res = mranderson047.reagent.v0v7v0.reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(mranderson047.reagent.v0v7v0.reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
mranderson047.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5461__auto__ = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto__ == null)){
return null;
} else {
var r = temp__5461__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.check_watches = (function mranderson047$reagent$v0v7v0$reagent$ratom$check_watches(old,new$){
if(mranderson047.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
});
mranderson047.reagent.v0v7v0.reagent.ratom.add_w = (function mranderson047$reagent$v0v7v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = mranderson047.reagent.v0v7v0.reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f));

return this$.watchesArr = null;
});
mranderson047.reagent.v0v7v0.reagent.ratom.remove_w = (function mranderson047$reagent$v0v7v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = mranderson047.reagent.v0v7v0.reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key));

return this$.watchesArr = null;
});
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w = (function mranderson047$reagent$v0v7v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv.call(null,((function (w){
return (function (p1__32649_SHARP_,p2__32650_SHARP_,p3__32651_SHARP_){
var G__32652 = p1__32649_SHARP_;
G__32652.push(p2__32650_SHARP_);

G__32652.push(p3__32651_SHARP_);

return G__32652;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_32653 = (a[i]);
var f_32654 = (a[(i + (1))]);
f_32654.call(null,k_32653,this$,old,new$);

var G__32655 = ((2) + i);
i = G__32655;
continue;
} else {
return null;
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom = (function mranderson047$reagent$v0v7v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write.call(null,writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR_32656 = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,a);
}finally {mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_32656;
}})(),writer,opts);

return cljs.core._write.call(null,writer,">");
});
if(typeof mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue = null;
}
mranderson047.reagent.v0v7v0.reagent.ratom.rea_enqueue = (function mranderson047$reagent$v0v7v0$reagent$ratom$rea_enqueue(r){
if((mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue == null)){
mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue = [];

mranderson047.reagent.v0v7v0.reagent.impl.batching.schedule.call(null);
} else {
}

return mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue.push(r);
});
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$flush_BANG_(){
while(true){
var q = mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue = null;

var n__4376__auto___32657 = q.length;
var i_32658 = (0);
while(true){
if((i_32658 < n__4376__auto___32657)){
(q[i_32658])._queued_run();

var G__32659 = (i_32658 + (1));
i_32658 = G__32659;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.ratom_flush = mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_;

/**
 * @interface
 */
mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Atom:");
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.remove_w.call(null,this$__$1,key);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/RAtom";

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/RAtom");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/RAtom.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RAtom = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.atom = (function mranderson047$reagent$v0v7v0$reagent$ratom$atom(var_args){
var G__32663 = arguments.length;
switch (G__32663) {
case 1:
return mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___32668 = arguments.length;
var i__4500__auto___32669 = (0);
while(true){
if((i__4500__auto___32669 < len__4499__auto___32668)){
args_arr__4514__auto__.push((arguments[i__4500__auto___32669]));

var G__32670 = (i__4500__auto___32669 + (1));
i__4500__auto___32669 = G__32670;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});

mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RAtom.call(null,x,null,null,null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32664){
var map__32665 = p__32664;
var map__32665__$1 = ((((!((map__32665 == null)))?(((((map__32665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32665):map__32665);
var meta = cljs.core.get.call(null,map__32665__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.call(null,map__32665__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RAtom.call(null,x,meta,validator,null);
});

/** @this {Function} */
mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq32661){
var G__32662 = cljs.core.first.call(null,seq32661);
var seq32661__$1 = cljs.core.next.call(null,seq32661);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32662,seq32661__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.ratom.cache_key = "reagReactionCache";
mranderson047.reagent.v0v7v0.reagent.ratom.cached_reaction = (function mranderson047$reagent$v0v7v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if(!((r == null))){
return cljs.core._deref.call(null,r);
} else {
if((mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (m,m__$1,r){
return (function (x){
if(mranderson047.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __32671 = (o["reagReactionCache"]);
var __32672__$1 = cljs.core.dissoc.call(null,__32671,k);
(o["reagReactionCache"] = __32672__$1);

if(!((obj == null))){
obj.reaction = null;
} else {
}

if(!((destroy == null))){
return destroy.call(null,x);
} else {
return null;
}
});})(m,m__$1,r))
);
var v = cljs.core._deref.call(null,r__$1);
(o["reagReactionCache"] = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(mranderson047.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if(!((obj == null))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v7v0.reagent.ratom.cached_reaction.call(null,((function (temp__5459__auto__,this$__$1){
return (function (){
return cljs.core.apply.call(null,self__.f,self__.args);
});})(temp__5459__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref.call(null,r);
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v7v0.reagent.ratom.Track)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track:");
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/Track";

mranderson047.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/Track");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/Track.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Track = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.Track(f,args,reaction));
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_track = (function mranderson047$reagent$v0v7v0$reagent$ratom$make_track(f,args){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.Track(f,args,null));
});
mranderson047.reagent.v0v7v0.reagent.ratom.make_track_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$make_track_BANG_(f,args){
var t = mranderson047.reagent.v0v7v0.reagent.ratom.make_track.call(null,f,args);
var r = mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,((function (t){
return (function (){
return cljs.core._deref.call(null,t);
});})(t))
,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,r);

return r;
});
mranderson047.reagent.v0v7v0.reagent.ratom.track = (function mranderson047$reagent$v0v7v0$reagent$ratom$track(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32675 = arguments.length;
var i__4500__auto___32676 = (0);
while(true){
if((i__4500__auto___32676 < len__4499__auto___32675)){
args__4502__auto__.push((arguments[i__4500__auto___32676]));

var G__32677 = (i__4500__auto___32676 + (1));
i__4500__auto___32676 = G__32677;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson047.reagent.v0v7v0.reagent.ratom.make_track.call(null,f,args);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq32673){
var G__32674 = cljs.core.first.call(null,seq32673);
var seq32673__$1 = cljs.core.next.call(null,seq32673);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32674,seq32673__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$track_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32680 = arguments.length;
var i__4500__auto___32681 = (0);
while(true){
if((i__4500__auto___32681 < len__4499__auto___32680)){
args__4502__auto__.push((arguments[i__4500__auto___32681]));

var G__32682 = (i__4500__auto___32681 + (1));
i__4500__auto___32681 = G__32682;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson047.reagent.v0v7v0.reagent.ratom.make_track_BANG_.call(null,f,args);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq32678){
var G__32679 = cljs.core.first.call(null,seq32678);
var seq32678__$1 = cljs.core.next.call(null,seq32678);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32679,seq32678__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.Object}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_32683 = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$);
}finally {mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_32683;
}});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if(!((self__.watches == null))){
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v7v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if(((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.remove_w.call(null,this$__$1,key);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
var f = ((((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
:((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return self__.ratom.call(null,self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
);
return mranderson047.reagent.v0v7v0.reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/RCursor";

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/RCursor");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/RCursor.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RCursor = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

mranderson047.reagent.v0v7v0.reagent.ratom.cursor = (function mranderson047$reagent$v0v7v0$reagent$ratom$cursor(src,path){
if((function (){var or__3922__auto__ = ((!((src == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom,src));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src))));
}
})()){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["src must be a reactive atom or a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,src))].join('')),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RCursor.call(null,src,path,null,null,null);
});
mranderson047.reagent.v0v7v0.reagent.ratom.with_let_destroy = (function mranderson047$reagent$v0v7v0$reagent$ratom$with_let_destroy(v){
var temp__5461__auto__ = v.destroy;
if((temp__5461__auto__ == null)){
return null;
} else {
var f = temp__5461__auto__;
return f.call(null);
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.with_let_values = (function mranderson047$reagent$v0v7v0$reagent$ratom$with_let_values(key){
var temp__5459__auto__ = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5459__auto__ == null)){
return [];
} else {
var c = temp__5459__auto__;
return mranderson047.reagent.v0v7v0.reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,mranderson047.reagent.v0v7v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
mranderson047.reagent.v0v7v0.reagent.ratom.IDisposable = function(){};

mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$dispose_BANG_(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null))))){
return this$.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null))))){
return this$.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,f);
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
mranderson047.reagent.v0v7v0.reagent.ratom.IRunnable = function(){};

mranderson047.reagent.v0v7v0.reagent.ratom.run = (function mranderson047$reagent$v0v7v0$reagent$ratom$run(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1 == null))))){
return this$.mranderson047$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v7v0.reagent.ratom.run[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v7v0.reagent.ratom.run["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.handle_reaction_change = (function mranderson047$reagent$v0v7v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IDisposable}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.Object}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IRunnable}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_32688 = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$);
}finally {mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_32688;
}});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return mranderson047.reagent.v0v7v0.reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
self__.watching = derefed;

var seq__32689_32705 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__32690_32706 = null;
var count__32691_32707 = (0);
var i__32692_32708 = (0);
while(true){
if((i__32692_32708 < count__32691_32707)){
var w_32709 = cljs.core._nth.call(null,chunk__32690_32706,i__32692_32708);
cljs.core._add_watch.call(null,w_32709,this$,mranderson047.reagent.v0v7v0.reagent.ratom.handle_reaction_change);


var G__32710 = seq__32689_32705;
var G__32711 = chunk__32690_32706;
var G__32712 = count__32691_32707;
var G__32713 = (i__32692_32708 + (1));
seq__32689_32705 = G__32710;
chunk__32690_32706 = G__32711;
count__32691_32707 = G__32712;
i__32692_32708 = G__32713;
continue;
} else {
var temp__5457__auto___32714 = cljs.core.seq.call(null,seq__32689_32705);
if(temp__5457__auto___32714){
var seq__32689_32715__$1 = temp__5457__auto___32714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32689_32715__$1)){
var c__4319__auto___32716 = cljs.core.chunk_first.call(null,seq__32689_32715__$1);
var G__32717 = cljs.core.chunk_rest.call(null,seq__32689_32715__$1);
var G__32718 = c__4319__auto___32716;
var G__32719 = cljs.core.count.call(null,c__4319__auto___32716);
var G__32720 = (0);
seq__32689_32705 = G__32717;
chunk__32690_32706 = G__32718;
count__32691_32707 = G__32719;
i__32692_32708 = G__32720;
continue;
} else {
var w_32721 = cljs.core.first.call(null,seq__32689_32715__$1);
cljs.core._add_watch.call(null,w_32721,this$,mranderson047.reagent.v0v7v0.reagent.ratom.handle_reaction_change);


var G__32722 = cljs.core.next.call(null,seq__32689_32715__$1);
var G__32723 = null;
var G__32724 = (0);
var G__32725 = (0);
seq__32689_32705 = G__32722;
chunk__32690_32706 = G__32723;
count__32691_32707 = G__32724;
i__32692_32708 = G__32725;
continue;
}
} else {
}
}
break;
}

var seq__32693 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__32694 = null;
var count__32695 = (0);
var i__32696 = (0);
while(true){
if((i__32696 < count__32695)){
var w = cljs.core._nth.call(null,chunk__32694,i__32696);
cljs.core._remove_watch.call(null,w,this$);


var G__32726 = seq__32693;
var G__32727 = chunk__32694;
var G__32728 = count__32695;
var G__32729 = (i__32696 + (1));
seq__32693 = G__32726;
chunk__32694 = G__32727;
count__32695 = G__32728;
i__32696 = G__32729;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32693);
if(temp__5457__auto__){
var seq__32693__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32693__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32693__$1);
var G__32730 = cljs.core.chunk_rest.call(null,seq__32693__$1);
var G__32731 = c__4319__auto__;
var G__32732 = cljs.core.count.call(null,c__4319__auto__);
var G__32733 = (0);
seq__32693 = G__32730;
chunk__32694 = G__32731;
count__32695 = G__32732;
i__32696 = G__32733;
continue;
} else {
var w = cljs.core.first.call(null,seq__32693__$1);
cljs.core._remove_watch.call(null,w,this$);


var G__32734 = cljs.core.next.call(null,seq__32693__$1);
var G__32735 = null;
var G__32736 = (0);
var G__32737 = (0);
seq__32693 = G__32734;
chunk__32694 = G__32735;
count__32695 = G__32736;
i__32696 = G__32737;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && (!((self__.watching == null))))){
return this$._run(true);
} else {
return null;
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return mranderson047.reagent.v0v7v0.reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e32697){var e = e32697;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):mranderson047.reagent.v0v7v0.reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res)))){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__32698){
var self__ = this;
var map__32699 = p__32698;
var map__32699__$1 = ((((!((map__32699 == null)))?(((((map__32699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32699):map__32699);
var auto_run__$1 = cljs.core.get.call(null,map__32699__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__32699__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__32699__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.call(null,map__32699__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if(!((auto_run__$1 == null))){
this$.auto_run = auto_run__$1;
} else {
}

if(!((on_set == null))){
this$.on_set = on_set;
} else {
}

if(!((on_dispose == null))){
this$.on_dispose = on_dispose;
} else {
}

if(!((no_cache == null))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,a__$1)),":"].join(''));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__32701_32738 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__32702_32739 = null;
var count__32703_32740 = (0);
var i__32704_32741 = (0);
while(true){
if((i__32704_32741 < count__32703_32740)){
var w_32742 = cljs.core._nth.call(null,chunk__32702_32739,i__32704_32741);
cljs.core._remove_watch.call(null,w_32742,this$__$1);


var G__32743 = seq__32701_32738;
var G__32744 = chunk__32702_32739;
var G__32745 = count__32703_32740;
var G__32746 = (i__32704_32741 + (1));
seq__32701_32738 = G__32743;
chunk__32702_32739 = G__32744;
count__32703_32740 = G__32745;
i__32704_32741 = G__32746;
continue;
} else {
var temp__5457__auto___32747 = cljs.core.seq.call(null,seq__32701_32738);
if(temp__5457__auto___32747){
var seq__32701_32748__$1 = temp__5457__auto___32747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32701_32748__$1)){
var c__4319__auto___32749 = cljs.core.chunk_first.call(null,seq__32701_32748__$1);
var G__32750 = cljs.core.chunk_rest.call(null,seq__32701_32748__$1);
var G__32751 = c__4319__auto___32749;
var G__32752 = cljs.core.count.call(null,c__4319__auto___32749);
var G__32753 = (0);
seq__32701_32738 = G__32750;
chunk__32702_32739 = G__32751;
count__32703_32740 = G__32752;
i__32704_32741 = G__32753;
continue;
} else {
var w_32754 = cljs.core.first.call(null,seq__32701_32748__$1);
cljs.core._remove_watch.call(null,w_32754,this$__$1);


var G__32755 = cljs.core.next.call(null,seq__32701_32748__$1);
var G__32756 = null;
var G__32757 = (0);
var G__32758 = (0);
seq__32701_32738 = G__32755;
chunk__32702_32739 = G__32756;
count__32703_32740 = G__32757;
i__32704_32741 = G__32758;
continue;
}
} else {
}
}
break;
}

if(!((this$__$1.on_dispose == null))){
this$__$1.on_dispose(s);
} else {
}

var temp__5461__auto__ = this$__$1.on_dispose_arr;
if((temp__5461__auto__ == null)){
return null;
} else {
var a = temp__5461__auto__;
var n__4376__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4376__auto__)){
(a[i]).call(null,this$__$1);

var G__32759 = (i + (1));
i = G__32759;
continue;
} else {
return null;
}
break;
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = this$__$1.on_dispose_arr;
if((temp__5459__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5459__auto__;
return a.push(f__$1);
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_.call(null,a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
mranderson047.reagent.v0v7v0.reagent.ratom.remove_w.call(null,this$__$1,key);

if(((!(was_empty)) && (cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null)))){
return mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5461__auto___32760 = self__.caught;
if((temp__5461__auto___32760 == null)){
} else {
var e_32761 = temp__5461__auto___32760;
throw e_32761;
}

var non_reactive_32762 = (mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_32762){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);
} else {
}

if(((non_reactive_32762) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_32763 = self__.state;
self__.state = self__.f.call(null);

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_32763,self__.state)))){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,oldstate_32763,self__.state);
}
} else {
}
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/Reaction";

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/Reaction");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/Reaction.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Reaction = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction = (function mranderson047$reagent$v0v7v0$reagent$ratom$make_reaction(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32769 = arguments.length;
var i__4500__auto___32770 = (0);
while(true){
if((i__4500__auto___32770 < len__4499__auto___32769)){
args__4502__auto__.push((arguments[i__4500__auto___32770]));

var G__32771 = (i__4500__auto___32770 + (1));
i__4500__auto___32770 = G__32771;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__32766){
var map__32767 = p__32766;
var map__32767__$1 = ((((!((map__32767 == null)))?(((((map__32767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32767):map__32767);
var auto_run = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Reaction.call(null,f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq32764){
var G__32765 = cljs.core.first.call(null,seq32764);
var seq32764__$1 = cljs.core.next.call(null,seq32764);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32765,seq32764__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.temp_reaction = mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,null);
mranderson047.reagent.v0v7v0.reagent.ratom.run_in_reaction = (function mranderson047$reagent$v0v7v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = mranderson047.reagent.v0v7v0.reagent.ratom.temp_reaction;
var res = mranderson047.reagent.v0v7v0.reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.temp_reaction = mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return run.call(null,obj);
});})(r,res))
;

(obj[key] = r);
}

return res;
});
mranderson047.reagent.v0v7v0.reagent.ratom.check_derefs = (function mranderson047$reagent$v0v7v0$reagent$ratom$check_derefs(f){
var ctx = {};
var res = mranderson047.reagent.v0v7v0.reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,!((ctx.captured == null))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && (!((mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null))))){
if(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.tracking)?mranderson047.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if(!((self__.watches == null))){
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w.call(null,this$__$1,old,new$);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.add_w.call(null,this$__$1,key,f);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.remove_w.call(null,this$__$1,key);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrap:");
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/Wrapper";

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/Wrapper");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/Wrapper.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Wrapper = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_wrapper = (function mranderson047$reagent$v0v7v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Wrapper.call(null,value,mranderson047.reagent.v0v7v0.reagent.impl.util.make_partial_fn.call(null,callback_fn,args),false,null);
});

//# sourceMappingURL=ratom.js.map?rel=1526705513184
