// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.cljs_utils');
goog.require('cljs.core');
goog.require('clojure.walk');
var merge_in_STAR_ = (function district$cljs_utils$merge_in_STAR_(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge_with.call(null,district$cljs_utils$merge_in_STAR_,a,b);
} else {
return b;
}
});
/**
 * Merge multiple nested maps.
 */
district.cljs_utils.merge_in = (function district$cljs_utils$merge_in(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27355 = arguments.length;
var i__4500__auto___27356 = (0);
while(true){
if((i__4500__auto___27356 < len__4499__auto___27355)){
args__4502__auto__.push((arguments[i__4500__auto___27356]));

var G__27357 = (i__4500__auto___27356 + (1));
i__4500__auto___27356 = G__27357;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return district.cljs_utils.merge_in.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

district.cljs_utils.merge_in.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,merge_in_STAR_,null,args);
});

district.cljs_utils.merge_in.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
district.cljs_utils.merge_in.cljs$lang$applyTo = (function (seq27354){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27354));
});

district.cljs_utils.collify = (function district$cljs_utils$collify(x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
district.cljs_utils.sort_desc = (function district$cljs_utils$sort_desc(coll){
return cljs.core.sort.call(null,(function (p1__27359_SHARP_,p2__27358_SHARP_){
return cljs.core.compare.call(null,p2__27358_SHARP_,p1__27359_SHARP_);
}),coll);
});
district.cljs_utils.sort_by_desc = (function district$cljs_utils$sort_by_desc(key_fn,coll){
return cljs.core.sort_by.call(null,key_fn,(function (p1__27361_SHARP_,p2__27360_SHARP_){
return cljs.core.compare.call(null,p2__27360_SHARP_,p1__27361_SHARP_);
}),coll);
});
district.cljs_utils.map_kv_at_keys = (function district$cljs_utils$map_kv_at_keys(f,keyseq,m){
var keyseq__$1 = cljs.core.set.call(null,keyseq);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (keyseq__$1){
return (function (p__27362){
var vec__27363 = p__27362;
var k = cljs.core.nth.call(null,vec__27363,(0),null);
var v = cljs.core.nth.call(null,vec__27363,(1),null);
if(cljs.core.contains_QMARK_.call(null,keyseq__$1,k)){
return f.call(null,k,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});})(keyseq__$1))
,m));
});
district.cljs_utils.map_vals_at_keys = (function district$cljs_utils$map_vals_at_keys(f,keyseq,m){
return district.cljs_utils.map_kv_at_keys.call(null,(function (p1__27366_SHARP_,p2__27367_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27366_SHARP_,f.call(null,p2__27367_SHARP_)], null));
}),keyseq,m);
});
district.cljs_utils.rand_str = (function district$cljs_utils$rand_str(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27378 = arguments.length;
var i__4500__auto___27379 = (0);
while(true){
if((i__4500__auto___27379 < len__4499__auto___27378)){
args__4502__auto__.push((arguments[i__4500__auto___27379]));

var G__27380 = (i__4500__auto___27379 + (1));
i__4500__auto___27379 = G__27380;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.cljs_utils.rand_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.cljs_utils.rand_str.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__27372){
var vec__27373 = p__27372;
var map__27376 = cljs.core.nth.call(null,vec__27373,(0),null);
var map__27376__$1 = ((((!((map__27376 == null)))?(((((map__27376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376):map__27376);
var lowercase_only_QMARK_ = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"lowercase-only?","lowercase-only?",1258208556));
var exclude_numbers_QMARK_ = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"exclude-numbers?","exclude-numbers?",-1173788011));
var chars_between = ((function (vec__27373,map__27376,map__27376__$1,lowercase_only_QMARK_,exclude_numbers_QMARK_){
return (function (p1__27368_SHARP_,p2__27369_SHARP_){
return cljs.core.map.call(null,cljs.core.char$,cljs.core.range.call(null,p1__27368_SHARP_.charCodeAt(),(p2__27369_SHARP_.charCodeAt() + (1))));
});})(vec__27373,map__27376,map__27376__$1,lowercase_only_QMARK_,exclude_numbers_QMARK_))
;
var chars = cljs.core.concat.call(null,(cljs.core.truth_((function (){var or__3922__auto__ = lowercase_only_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return exclude_numbers_QMARK_;
}
})())?null:chars_between.call(null,"0","9")),chars_between.call(null,"a","z"),(cljs.core.truth_(lowercase_only_QMARK_)?null:chars_between.call(null,"A","Z")));
var password = cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,((function (chars_between,chars,vec__27373,map__27376,map__27376__$1,lowercase_only_QMARK_,exclude_numbers_QMARK_){
return (function (){
return cljs.core.rand_nth.call(null,chars);
});})(chars_between,chars,vec__27373,map__27376,map__27376__$1,lowercase_only_QMARK_,exclude_numbers_QMARK_))
));
return cljs.core.reduce.call(null,cljs.core.str,password);
});

district.cljs_utils.rand_str.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.cljs_utils.rand_str.cljs$lang$applyTo = (function (seq27370){
var G__27371 = cljs.core.first.call(null,seq27370);
var seq27370__$1 = cljs.core.next.call(null,seq27370);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27371,seq27370__$1);
});

/**
 * Invariant version of assoc-in.
 *   Returns unchanged map if `ks` path is empty
 */
district.cljs_utils.safe_assoc_in = (function district$cljs_utils$safe_assoc_in(m,ks,v){
if(cljs.core.truth_(cljs.core.get_in.call(null,m,cljs.core.vec.call(null,cljs.core.drop_last.call(null,ks))))){
return cljs.core.assoc_in.call(null,m,ks,v);
} else {
return m;
}
});
district.cljs_utils.js_obj__GT_clj = (function district$cljs_utils$js_obj__GT_clj(obj){
return cljs.core.reduce.call(null,(function (acc,key){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,key),(obj[key]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.call(null,cljs.core.js_keys.call(null,obj)));
});
district.cljs_utils.kw__GT_str = (function district$cljs_utils$kw__GT_str(kw){
if((kw instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)].join(''),(1));
} else {
return null;
}
});
district.cljs_utils.transform_keys = (function district$cljs_utils$transform_keys(t,coll){

var transform = (function district$cljs_utils$transform_keys_$_transform(p__27385){
var vec__27386 = p__27385;
var k = cljs.core.nth.call(null,vec__27386,(0),null);
var v = cljs.core.nth.call(null,vec__27386,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});
district.cljs_utils.transform_vals = (function district$cljs_utils$transform_vals(t,coll){

var transform = (function district$cljs_utils$transform_vals_$_transform(p__27393){
var vec__27394 = p__27393;
var k = cljs.core.nth.call(null,vec__27394,(0),null);
var v = cljs.core.nth.call(null,vec__27394,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,t.call(null,v)], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});

//# sourceMappingURL=cljs_utils.js.map?rel=1526705064030
