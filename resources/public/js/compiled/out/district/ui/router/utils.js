// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.router.utils');
goog.require('cljs.core');
goog.require('district.ui.router.subs');
goog.require('re_frame.core');
district.ui.router.utils.resolve = (function district$ui$router$utils$resolve(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22900 = arguments.length;
var i__4500__auto___22901 = (0);
while(true){
if((i__4500__auto___22901 < len__4499__auto___22900)){
args__4502__auto__.push((arguments[i__4500__auto___22901]));

var G__22902 = (i__4500__auto___22901 + (1));
i__4500__auto___22901 = G__22902;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.ui.router.utils.resolve.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.ui.router.utils.resolve.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__22896){
var vec__22897 = p__22896;
var params = cljs.core.nth.call(null,vec__22897,(0),null);
var query = cljs.core.nth.call(null,vec__22897,(1),null);
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.subs","resolve","district.ui.router.subs/resolve",-222464164),name,params,query], null)));
});

district.ui.router.utils.resolve.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.ui.router.utils.resolve.cljs$lang$applyTo = (function (seq22894){
var G__22895 = cljs.core.first.call(null,seq22894);
var seq22894__$1 = cljs.core.next.call(null,seq22894);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22895,seq22894__$1);
});

district.ui.router.utils.match = (function district$ui$router$utils$match(path){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.subs","match","district.ui.router.subs/match",-1526026020),path], null)));
});

//# sourceMappingURL=utils.js.map?rel=1526715393952
