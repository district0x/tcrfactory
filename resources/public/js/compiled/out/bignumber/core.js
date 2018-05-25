// Compiled by ClojureScript 1.10.238 {}
goog.provide('bignumber.core');
goog.require('cljs.core');
bignumber.core.bignumber_QMARK_ = (function bignumber$core$bignumber_QMARK_(x){
var and__3911__auto__ = x;
if(cljs.core.truth_(and__3911__auto__)){
return (x["toNumber"]);
} else {
return and__3911__auto__;
}
});
bignumber.core.apply_fn = (function bignumber$core$apply_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32420 = arguments.length;
var i__4500__auto___32421 = (0);
while(true){
if((i__4500__auto___32421 < len__4499__auto___32420)){
args__4502__auto__.push((arguments[i__4500__auto___32421]));

var G__32422 = (i__4500__auto___32421 + (1));
i__4500__auto___32421 = G__32422;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic = (function (bn_fn_name,native_fn,x,args){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_.call(null,x))){
return cljs.core.apply.call(null,cljs.core.js_invoke,x,bn_fn_name,args);
} else {
return cljs.core.apply.call(null,native_fn,x,args);
}
});

bignumber.core.apply_fn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
bignumber.core.apply_fn.cljs$lang$applyTo = (function (seq32416){
var G__32417 = cljs.core.first.call(null,seq32416);
var seq32416__$1 = cljs.core.next.call(null,seq32416);
var G__32418 = cljs.core.first.call(null,seq32416__$1);
var seq32416__$2 = cljs.core.next.call(null,seq32416__$1);
var G__32419 = cljs.core.first.call(null,seq32416__$2);
var seq32416__$3 = cljs.core.next.call(null,seq32416__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32417,G__32418,G__32419,seq32416__$3);
});

bignumber.core.apply_arithmentic_fn = (function bignumber$core$apply_arithmentic_fn(bn_fn_name,native_fn,x,y,base){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_.call(null,x))){
return cljs.core.js_invoke.call(null,x,bn_fn_name,y,base);
} else {
return native_fn.call(null,x,y);
}
});
bignumber.core.number = (function bignumber$core$number(x){
return bignumber.core.apply_fn.call(null,"toNumber",cljs.core.identity,x);
});
bignumber.core.abs = (function bignumber$core$abs(x){
return bignumber.core.apply_fn.call(null,"abs",Math.abs,x);
});
bignumber.core.ceil = (function bignumber$core$ceil(x){
return bignumber.core.apply_fn.call(null,"ceil",Math.ceil,x);
});
bignumber.core.cmp = (function bignumber$core$cmp(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32429 = arguments.length;
var i__4500__auto___32430 = (0);
while(true){
if((i__4500__auto___32430 < len__4499__auto___32429)){
args__4502__auto__.push((arguments[i__4500__auto___32430]));

var G__32431 = (i__4500__auto___32430 + (1));
i__4500__auto___32430 = G__32431;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.cmp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.cmp.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32425){
var vec__32426 = p__32425;
var base = cljs.core.nth.call(null,vec__32426,(0),null);
return bignumber.core.apply_fn.call(null,"cmp",cljs.core.compare,x,base);
});

bignumber.core.cmp.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.cmp.cljs$lang$applyTo = (function (seq32423){
var G__32424 = cljs.core.first.call(null,seq32423);
var seq32423__$1 = cljs.core.next.call(null,seq32423);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32424,seq32423__$1);
});

bignumber.core.dp = (function bignumber$core$dp(x){
return bignumber.core.apply_fn.call(null,"dp",cljs.core.identity,x);
});
bignumber.core._SLASH_ = (function bignumber$core$_SLASH_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32439 = arguments.length;
var i__4500__auto___32440 = (0);
while(true){
if((i__4500__auto___32440 < len__4499__auto___32439)){
args__4502__auto__.push((arguments[i__4500__auto___32440]));

var G__32441 = (i__4500__auto___32440 + (1));
i__4500__auto___32440 = G__32441;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32435){
var vec__32436 = p__32435;
var base = cljs.core.nth.call(null,vec__32436,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"div",cljs.core.divide,x,y,base);
});

bignumber.core._SLASH_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._SLASH_.cljs$lang$applyTo = (function (seq32432){
var G__32433 = cljs.core.first.call(null,seq32432);
var seq32432__$1 = cljs.core.next.call(null,seq32432);
var G__32434 = cljs.core.first.call(null,seq32432__$1);
var seq32432__$2 = cljs.core.next.call(null,seq32432__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32433,G__32434,seq32432__$2);
});

bignumber.core.div_to_int = (function bignumber$core$div_to_int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32449 = arguments.length;
var i__4500__auto___32450 = (0);
while(true){
if((i__4500__auto___32450 < len__4499__auto___32449)){
args__4502__auto__.push((arguments[i__4500__auto___32450]));

var G__32451 = (i__4500__auto___32450 + (1));
i__4500__auto___32450 = G__32451;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core.div_to_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core.div_to_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32445){
var vec__32446 = p__32445;
var base = cljs.core.nth.call(null,vec__32446,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"divToInt",cljs.core.divide,x,y,base);
});

bignumber.core.div_to_int.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core.div_to_int.cljs$lang$applyTo = (function (seq32442){
var G__32443 = cljs.core.first.call(null,seq32442);
var seq32442__$1 = cljs.core.next.call(null,seq32442);
var G__32444 = cljs.core.first.call(null,seq32442__$1);
var seq32442__$2 = cljs.core.next.call(null,seq32442__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32443,G__32444,seq32442__$2);
});

bignumber.core._EQ_ = (function bignumber$core$_EQ_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32459 = arguments.length;
var i__4500__auto___32460 = (0);
while(true){
if((i__4500__auto___32460 < len__4499__auto___32459)){
args__4502__auto__.push((arguments[i__4500__auto___32460]));

var G__32461 = (i__4500__auto___32460 + (1));
i__4500__auto___32460 = G__32461;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32455){
var vec__32456 = p__32455;
var base = cljs.core.nth.call(null,vec__32456,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"eq",cljs.core._EQ_,x,y,base);
});

bignumber.core._EQ_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._EQ_.cljs$lang$applyTo = (function (seq32452){
var G__32453 = cljs.core.first.call(null,seq32452);
var seq32452__$1 = cljs.core.next.call(null,seq32452);
var G__32454 = cljs.core.first.call(null,seq32452__$1);
var seq32452__$2 = cljs.core.next.call(null,seq32452__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32453,G__32454,seq32452__$2);
});

bignumber.core.floor = (function bignumber$core$floor(x){
return bignumber.core.apply_fn.call(null,"floor",Math.floor,x);
});
bignumber.core._GT_ = (function bignumber$core$_GT_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32469 = arguments.length;
var i__4500__auto___32470 = (0);
while(true){
if((i__4500__auto___32470 < len__4499__auto___32469)){
args__4502__auto__.push((arguments[i__4500__auto___32470]));

var G__32471 = (i__4500__auto___32470 + (1));
i__4500__auto___32470 = G__32471;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32465){
var vec__32466 = p__32465;
var base = cljs.core.nth.call(null,vec__32466,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"gt",cljs.core._GT_,x,y,base);
});

bignumber.core._GT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._GT_.cljs$lang$applyTo = (function (seq32462){
var G__32463 = cljs.core.first.call(null,seq32462);
var seq32462__$1 = cljs.core.next.call(null,seq32462);
var G__32464 = cljs.core.first.call(null,seq32462__$1);
var seq32462__$2 = cljs.core.next.call(null,seq32462__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32463,G__32464,seq32462__$2);
});

bignumber.core._GT__EQ_ = (function bignumber$core$_GT__EQ_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32479 = arguments.length;
var i__4500__auto___32480 = (0);
while(true){
if((i__4500__auto___32480 < len__4499__auto___32479)){
args__4502__auto__.push((arguments[i__4500__auto___32480]));

var G__32481 = (i__4500__auto___32480 + (1));
i__4500__auto___32480 = G__32481;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32475){
var vec__32476 = p__32475;
var base = cljs.core.nth.call(null,vec__32476,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"gte",cljs.core._GT__EQ_,x,y,base);
});

bignumber.core._GT__EQ_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._GT__EQ_.cljs$lang$applyTo = (function (seq32472){
var G__32473 = cljs.core.first.call(null,seq32472);
var seq32472__$1 = cljs.core.next.call(null,seq32472);
var G__32474 = cljs.core.first.call(null,seq32472__$1);
var seq32472__$2 = cljs.core.next.call(null,seq32472__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32473,G__32474,seq32472__$2);
});

bignumber.core.finite_QMARK_ = (function bignumber$core$finite_QMARK_(x){
return bignumber.core.apply_fn.call(null,"isFinite",cljs.core.complement.call(null,cljs.core.infinite_QMARK_),x);
});
bignumber.core.int_QMARK_ = (function bignumber$core$int_QMARK_(x){
return bignumber.core.apply_fn.call(null,"isInt",cljs.core.int_QMARK_,x);
});
bignumber.core.nan_QMARK_ = (function bignumber$core$nan_QMARK_(x){
return bignumber.core.apply_fn.call(null,"isNaN",isNaN,x);
});
bignumber.core.neg_QMARK_ = (function bignumber$core$neg_QMARK_(x){
return bignumber.core.apply_fn.call(null,"isNeg",cljs.core.neg_QMARK_,x);
});
bignumber.core.zero_QMARK_ = (function bignumber$core$zero_QMARK_(x){
return bignumber.core.apply_fn.call(null,"isZero",cljs.core.zero_QMARK_,x);
});
bignumber.core._LT_ = (function bignumber$core$_LT_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32489 = arguments.length;
var i__4500__auto___32490 = (0);
while(true){
if((i__4500__auto___32490 < len__4499__auto___32489)){
args__4502__auto__.push((arguments[i__4500__auto___32490]));

var G__32491 = (i__4500__auto___32490 + (1));
i__4500__auto___32490 = G__32491;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32485){
var vec__32486 = p__32485;
var base = cljs.core.nth.call(null,vec__32486,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"lt",cljs.core._LT_,x,y,base);
});

bignumber.core._LT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._LT_.cljs$lang$applyTo = (function (seq32482){
var G__32483 = cljs.core.first.call(null,seq32482);
var seq32482__$1 = cljs.core.next.call(null,seq32482);
var G__32484 = cljs.core.first.call(null,seq32482__$1);
var seq32482__$2 = cljs.core.next.call(null,seq32482__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32483,G__32484,seq32482__$2);
});

bignumber.core._LT__EQ_ = (function bignumber$core$_LT__EQ_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32499 = arguments.length;
var i__4500__auto___32500 = (0);
while(true){
if((i__4500__auto___32500 < len__4499__auto___32499)){
args__4502__auto__.push((arguments[i__4500__auto___32500]));

var G__32501 = (i__4500__auto___32500 + (1));
i__4500__auto___32500 = G__32501;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32495){
var vec__32496 = p__32495;
var base = cljs.core.nth.call(null,vec__32496,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"lte",cljs.core._LT__EQ_,x,y,base);
});

bignumber.core._LT__EQ_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._LT__EQ_.cljs$lang$applyTo = (function (seq32492){
var G__32493 = cljs.core.first.call(null,seq32492);
var seq32492__$1 = cljs.core.next.call(null,seq32492);
var G__32494 = cljs.core.first.call(null,seq32492__$1);
var seq32492__$2 = cljs.core.next.call(null,seq32492__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32493,G__32494,seq32492__$2);
});

bignumber.core._ = (function bignumber$core$_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32509 = arguments.length;
var i__4500__auto___32510 = (0);
while(true){
if((i__4500__auto___32510 < len__4499__auto___32509)){
args__4502__auto__.push((arguments[i__4500__auto___32510]));

var G__32511 = (i__4500__auto___32510 + (1));
i__4500__auto___32510 = G__32511;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32505){
var vec__32506 = p__32505;
var base = cljs.core.nth.call(null,vec__32506,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"minus",cljs.core._,x,y,base);
});

bignumber.core._.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._.cljs$lang$applyTo = (function (seq32502){
var G__32503 = cljs.core.first.call(null,seq32502);
var seq32502__$1 = cljs.core.next.call(null,seq32502);
var G__32504 = cljs.core.first.call(null,seq32502__$1);
var seq32502__$2 = cljs.core.next.call(null,seq32502__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32503,G__32504,seq32502__$2);
});

bignumber.core.mod = (function bignumber$core$mod(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32519 = arguments.length;
var i__4500__auto___32520 = (0);
while(true){
if((i__4500__auto___32520 < len__4499__auto___32519)){
args__4502__auto__.push((arguments[i__4500__auto___32520]));

var G__32521 = (i__4500__auto___32520 + (1));
i__4500__auto___32520 = G__32521;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core.mod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core.mod.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32515){
var vec__32516 = p__32515;
var base = cljs.core.nth.call(null,vec__32516,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"mod",cljs.core.mod,x,y,base);
});

bignumber.core.mod.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core.mod.cljs$lang$applyTo = (function (seq32512){
var G__32513 = cljs.core.first.call(null,seq32512);
var seq32512__$1 = cljs.core.next.call(null,seq32512);
var G__32514 = cljs.core.first.call(null,seq32512__$1);
var seq32512__$2 = cljs.core.next.call(null,seq32512__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32513,G__32514,seq32512__$2);
});

bignumber.core.neg = (function bignumber$core$neg(x){
return bignumber.core.apply_fn.call(null,"neg",cljs.core.unchecked_negate,x);
});
bignumber.core._PLUS_ = (function bignumber$core$_PLUS_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32529 = arguments.length;
var i__4500__auto___32530 = (0);
while(true){
if((i__4500__auto___32530 < len__4499__auto___32529)){
args__4502__auto__.push((arguments[i__4500__auto___32530]));

var G__32531 = (i__4500__auto___32530 + (1));
i__4500__auto___32530 = G__32531;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32525){
var vec__32526 = p__32525;
var base = cljs.core.nth.call(null,vec__32526,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"plus",cljs.core._PLUS_,x,y,base);
});

bignumber.core._PLUS_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._PLUS_.cljs$lang$applyTo = (function (seq32522){
var G__32523 = cljs.core.first.call(null,seq32522);
var seq32522__$1 = cljs.core.next.call(null,seq32522);
var G__32524 = cljs.core.first.call(null,seq32522__$1);
var seq32522__$2 = cljs.core.next.call(null,seq32522__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32523,G__32524,seq32522__$2);
});

bignumber.core.sd = (function bignumber$core$sd(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32538 = arguments.length;
var i__4500__auto___32539 = (0);
while(true){
if((i__4500__auto___32539 < len__4499__auto___32538)){
args__4502__auto__.push((arguments[i__4500__auto___32539]));

var G__32540 = (i__4500__auto___32539 + (1));
i__4500__auto___32539 = G__32540;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.sd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.sd.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32534){
var vec__32535 = p__32534;
var z = cljs.core.nth.call(null,vec__32535,(0),null);
return bignumber.core.apply_fn.call(null,"sd",cljs.core.constantly.call(null,null),x,z);
});

bignumber.core.sd.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.sd.cljs$lang$applyTo = (function (seq32532){
var G__32533 = cljs.core.first.call(null,seq32532);
var seq32532__$1 = cljs.core.next.call(null,seq32532);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32533,seq32532__$1);
});

bignumber.core.round = (function bignumber$core$round(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32547 = arguments.length;
var i__4500__auto___32548 = (0);
while(true){
if((i__4500__auto___32548 < len__4499__auto___32547)){
args__4502__auto__.push((arguments[i__4500__auto___32548]));

var G__32549 = (i__4500__auto___32548 + (1));
i__4500__auto___32548 = G__32549;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32543){
var vec__32544 = p__32543;
var dp = cljs.core.nth.call(null,vec__32544,(0),null);
var rm = cljs.core.nth.call(null,vec__32544,(1),null);
return bignumber.core.apply_fn.call(null,"round",Math.round,x,dp,rm);
});

bignumber.core.round.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.round.cljs$lang$applyTo = (function (seq32541){
var G__32542 = cljs.core.first.call(null,seq32541);
var seq32541__$1 = cljs.core.next.call(null,seq32541);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32542,seq32541__$1);
});

bignumber.core.shift = (function bignumber$core$shift(x,z){
return bignumber.core.apply_fn.call(null,"shift",cljs.core.constantly.call(null,null),x,bignumber.core.dp,z);
});
bignumber.core.sqrt = (function bignumber$core$sqrt(x){
return bignumber.core.apply_fn.call(null,"sqrt",Math.sqrt,x);
});
bignumber.core._STAR_ = (function bignumber$core$_STAR_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32557 = arguments.length;
var i__4500__auto___32558 = (0);
while(true){
if((i__4500__auto___32558 < len__4499__auto___32557)){
args__4502__auto__.push((arguments[i__4500__auto___32558]));

var G__32559 = (i__4500__auto___32558 + (1));
i__4500__auto___32558 = G__32559;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__32553){
var vec__32554 = p__32553;
var base = cljs.core.nth.call(null,vec__32554,(0),null);
return bignumber.core.apply_arithmentic_fn.call(null,"times",cljs.core._STAR_,x,y,base);
});

bignumber.core._STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core._STAR_.cljs$lang$applyTo = (function (seq32550){
var G__32551 = cljs.core.first.call(null,seq32550);
var seq32550__$1 = cljs.core.next.call(null,seq32550);
var G__32552 = cljs.core.first.call(null,seq32550__$1);
var seq32550__$2 = cljs.core.next.call(null,seq32550__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32551,G__32552,seq32550__$2);
});

bignumber.core.digits = (function bignumber$core$digits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32566 = arguments.length;
var i__4500__auto___32567 = (0);
while(true){
if((i__4500__auto___32567 < len__4499__auto___32566)){
args__4502__auto__.push((arguments[i__4500__auto___32567]));

var G__32568 = (i__4500__auto___32567 + (1));
i__4500__auto___32567 = G__32568;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.digits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.digits.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32562){
var vec__32563 = p__32562;
var sd = cljs.core.nth.call(null,vec__32563,(0),null);
var rm = cljs.core.nth.call(null,vec__32563,(1),null);
return bignumber.core.apply_fn.call(null,"toDigits",cljs.core.identity,x,sd,rm);
});

bignumber.core.digits.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.digits.cljs$lang$applyTo = (function (seq32560){
var G__32561 = cljs.core.first.call(null,seq32560);
var seq32560__$1 = cljs.core.next.call(null,seq32560);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32561,seq32560__$1);
});

bignumber.core.exponential = (function bignumber$core$exponential(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32575 = arguments.length;
var i__4500__auto___32576 = (0);
while(true){
if((i__4500__auto___32576 < len__4499__auto___32575)){
args__4502__auto__.push((arguments[i__4500__auto___32576]));

var G__32577 = (i__4500__auto___32576 + (1));
i__4500__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.exponential.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.exponential.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32571){
var vec__32572 = p__32571;
var dp = cljs.core.nth.call(null,vec__32572,(0),null);
var rm = cljs.core.nth.call(null,vec__32572,(1),null);
return cljs.core.js_invoke.call(null,x,"toExponential",dp,rm);
});

bignumber.core.exponential.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.exponential.cljs$lang$applyTo = (function (seq32569){
var G__32570 = cljs.core.first.call(null,seq32569);
var seq32569__$1 = cljs.core.next.call(null,seq32569);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32570,seq32569__$1);
});

bignumber.core.fixed = (function bignumber$core$fixed(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32584 = arguments.length;
var i__4500__auto___32585 = (0);
while(true){
if((i__4500__auto___32585 < len__4499__auto___32584)){
args__4502__auto__.push((arguments[i__4500__auto___32585]));

var G__32586 = (i__4500__auto___32585 + (1));
i__4500__auto___32585 = G__32586;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.fixed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.fixed.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32580){
var vec__32581 = p__32580;
var dp = cljs.core.nth.call(null,vec__32581,(0),null);
var rm = cljs.core.nth.call(null,vec__32581,(1),null);
return cljs.core.js_invoke.call(null,x,"toFixed",dp,rm);
});

bignumber.core.fixed.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.fixed.cljs$lang$applyTo = (function (seq32578){
var G__32579 = cljs.core.first.call(null,seq32578);
var seq32578__$1 = cljs.core.next.call(null,seq32578);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32579,seq32578__$1);
});

bignumber.core.format = (function bignumber$core$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32593 = arguments.length;
var i__4500__auto___32594 = (0);
while(true){
if((i__4500__auto___32594 < len__4499__auto___32593)){
args__4502__auto__.push((arguments[i__4500__auto___32594]));

var G__32595 = (i__4500__auto___32594 + (1));
i__4500__auto___32594 = G__32595;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32589){
var vec__32590 = p__32589;
var dp = cljs.core.nth.call(null,vec__32590,(0),null);
var rm = cljs.core.nth.call(null,vec__32590,(1),null);
return bignumber.core.apply_fn.call(null,"toFormat",cljs.core.identity,x,dp,rm);
});

bignumber.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.format.cljs$lang$applyTo = (function (seq32587){
var G__32588 = cljs.core.first.call(null,seq32587);
var seq32587__$1 = cljs.core.next.call(null,seq32587);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32588,seq32587__$1);
});

bignumber.core.fraction = (function bignumber$core$fraction(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32602 = arguments.length;
var i__4500__auto___32603 = (0);
while(true){
if((i__4500__auto___32603 < len__4499__auto___32602)){
args__4502__auto__.push((arguments[i__4500__auto___32603]));

var G__32604 = (i__4500__auto___32603 + (1));
i__4500__auto___32603 = G__32604;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.fraction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.fraction.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32598){
var vec__32599 = p__32598;
var max = cljs.core.nth.call(null,vec__32599,(0),null);
return bignumber.core.apply_fn.call(null,"toFraction",cljs.core.identity,x,cljs.core.map);
});

bignumber.core.fraction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.fraction.cljs$lang$applyTo = (function (seq32596){
var G__32597 = cljs.core.first.call(null,seq32596);
var seq32596__$1 = cljs.core.next.call(null,seq32596);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32597,seq32596__$1);
});

bignumber.core.json = (function bignumber$core$json(x){
return bignumber.core.apply_fn.call(null,"toJSON",JSON.stringify,x);
});
bignumber.core.pow = (function bignumber$core$pow(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32612 = arguments.length;
var i__4500__auto___32613 = (0);
while(true){
if((i__4500__auto___32613 < len__4499__auto___32612)){
args__4502__auto__.push((arguments[i__4500__auto___32613]));

var G__32614 = (i__4500__auto___32613 + (1));
i__4500__auto___32613 = G__32614;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return bignumber.core.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

bignumber.core.pow.cljs$core$IFn$_invoke$arity$variadic = (function (x,n,p__32608){
var vec__32609 = p__32608;
var m = cljs.core.nth.call(null,vec__32609,(0),null);
return bignumber.core.apply_fn.call(null,"pow",Math.pow,x,n,m);
});

bignumber.core.pow.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
bignumber.core.pow.cljs$lang$applyTo = (function (seq32605){
var G__32606 = cljs.core.first.call(null,seq32605);
var seq32605__$1 = cljs.core.next.call(null,seq32605);
var G__32607 = cljs.core.first.call(null,seq32605__$1);
var seq32605__$2 = cljs.core.next.call(null,seq32605__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32606,G__32607,seq32605__$2);
});

bignumber.core.precision = (function bignumber$core$precision(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32621 = arguments.length;
var i__4500__auto___32622 = (0);
while(true){
if((i__4500__auto___32622 < len__4499__auto___32621)){
args__4502__auto__.push((arguments[i__4500__auto___32622]));

var G__32623 = (i__4500__auto___32622 + (1));
i__4500__auto___32622 = G__32623;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return bignumber.core.precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

bignumber.core.precision.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__32617){
var vec__32618 = p__32617;
var sd = cljs.core.nth.call(null,vec__32618,(0),null);
var rm = cljs.core.nth.call(null,vec__32618,(1),null);
return cljs.core.js_invoke.call(null,x,"toPrecision",sd,rm);
});

bignumber.core.precision.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
bignumber.core.precision.cljs$lang$applyTo = (function (seq32615){
var G__32616 = cljs.core.first.call(null,seq32615);
var seq32615__$1 = cljs.core.next.call(null,seq32615);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32616,seq32615__$1);
});

bignumber.core.trunc = (function bignumber$core$trunc(x){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_.call(null,x))){
return cljs.core.js_invoke.call(null,x,"trunc",x);
} else {
if(typeof x === 'number'){
return (x | (0));
} else {
return x;

}
}
});
bignumber.core.value_of = (function bignumber$core$value_of(x){
return cljs.core.js_invoke.call(null,x,"valueOf");
});

//# sourceMappingURL=core.js.map?rel=1526705066797
