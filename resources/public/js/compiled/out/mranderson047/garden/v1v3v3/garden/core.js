// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson047.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson047.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson047.garden.v1v3v3.garden.core.css = (function mranderson047$garden$v1v3v3$garden$core$css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35544 = arguments.length;
var i__4500__auto___35545 = (0);
while(true){
if((i__4500__auto___35545 < len__4499__auto___35544)){
args__4502__auto__.push((arguments[i__4500__auto___35545]));

var G__35546 = (i__4500__auto___35545 + (1));
i__4500__auto___35545 = G__35546;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,mranderson047.garden.v1v3v3.garden.compiler.compile_css,rules);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq35543){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35543));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson047.garden.v1v3v3.garden.core.style = (function mranderson047$garden$v1v3v3$garden$core$style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35548 = arguments.length;
var i__4500__auto___35549 = (0);
while(true){
if((i__4500__auto___35549 < len__4499__auto___35548)){
args__4502__auto__.push((arguments[i__4500__auto___35549]));

var G__35550 = (i__4500__auto___35549 + (1));
i__4500__auto___35549 = G__35550;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson047.garden.v1v3v3.garden.compiler.compile_style.call(null,maps);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq35547){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35547));
});


//# sourceMappingURL=core.js.map?rel=1526705516574
