// Compiled by ClojureScript 1.10.238 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27209 = arguments.length;
var i__4500__auto___27210 = (0);
while(true){
if((i__4500__auto___27210 < len__4499__auto___27209)){
args__4502__auto__.push((arguments[i__4500__auto___27210]));

var G__27211 = (i__4500__auto___27210 + (1));
i__4500__auto___27210 = G__27211;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq27204){
var G__27205 = cljs.core.first.call(null,seq27204);
var seq27204__$1 = cljs.core.next.call(null,seq27204);
var G__27206 = cljs.core.first.call(null,seq27204__$1);
var seq27204__$2 = cljs.core.next.call(null,seq27204__$1);
var G__27207 = cljs.core.first.call(null,seq27204__$2);
var seq27204__$3 = cljs.core.next.call(null,seq27204__$2);
var G__27208 = cljs.core.first.call(null,seq27204__$3);
var seq27204__$4 = cljs.core.next.call(null,seq27204__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27205,G__27206,G__27207,G__27208,seq27204__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27220 = arguments.length;
var i__4500__auto___27221 = (0);
while(true){
if((i__4500__auto___27221 < len__4499__auto___27220)){
args__4502__auto__.push((arguments[i__4500__auto___27221]));

var G__27222 = (i__4500__auto___27221 + (1));
i__4500__auto___27221 = G__27222;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__27167__auto__,rest__27168__auto__){
var convert_case__27169__auto__ = (function (p1__27166__27170__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__27166__27170__auto__,rest__27168__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__27167__auto__,convert_case__27169__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq27212){
var G__27213 = cljs.core.first.call(null,seq27212);
var seq27212__$1 = cljs.core.next.call(null,seq27212);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27213,seq27212__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27223 = arguments.length;
var i__4500__auto___27224 = (0);
while(true){
if((i__4500__auto___27224 < len__4499__auto___27223)){
args__4502__auto__.push((arguments[i__4500__auto___27224]));

var G__27225 = (i__4500__auto___27224 + (1));
i__4500__auto___27224 = G__27225;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq27214){
var G__27215 = cljs.core.first.call(null,seq27214);
var seq27214__$1 = cljs.core.next.call(null,seq27214);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27215,seq27214__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27226 = arguments.length;
var i__4500__auto___27227 = (0);
while(true){
if((i__4500__auto___27227 < len__4499__auto___27226)){
args__4502__auto__.push((arguments[i__4500__auto___27227]));

var G__27228 = (i__4500__auto___27227 + (1));
i__4500__auto___27227 = G__27228;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq27216){
var G__27217 = cljs.core.first.call(null,seq27216);
var seq27216__$1 = cljs.core.next.call(null,seq27216);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27217,seq27216__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27229 = arguments.length;
var i__4500__auto___27230 = (0);
while(true){
if((i__4500__auto___27230 < len__4499__auto___27229)){
args__4502__auto__.push((arguments[i__4500__auto___27230]));

var G__27231 = (i__4500__auto___27230 + (1));
i__4500__auto___27230 = G__27231;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq27218){
var G__27219 = cljs.core.first.call(null,seq27218);
var seq27218__$1 = cljs.core.next.call(null,seq27218);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27219,seq27218__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27240 = arguments.length;
var i__4500__auto___27241 = (0);
while(true){
if((i__4500__auto___27241 < len__4499__auto___27240)){
args__4502__auto__.push((arguments[i__4500__auto___27241]));

var G__27242 = (i__4500__auto___27241 + (1));
i__4500__auto___27241 = G__27242;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__27167__auto__,rest__27168__auto__){
var convert_case__27169__auto__ = (function (p1__27166__27170__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__27166__27170__auto__,rest__27168__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__27167__auto__,convert_case__27169__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq27232){
var G__27233 = cljs.core.first.call(null,seq27232);
var seq27232__$1 = cljs.core.next.call(null,seq27232);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27233,seq27232__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27243 = arguments.length;
var i__4500__auto___27244 = (0);
while(true){
if((i__4500__auto___27244 < len__4499__auto___27243)){
args__4502__auto__.push((arguments[i__4500__auto___27244]));

var G__27245 = (i__4500__auto___27244 + (1));
i__4500__auto___27244 = G__27245;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq27234){
var G__27235 = cljs.core.first.call(null,seq27234);
var seq27234__$1 = cljs.core.next.call(null,seq27234);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27235,seq27234__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27246 = arguments.length;
var i__4500__auto___27247 = (0);
while(true){
if((i__4500__auto___27247 < len__4499__auto___27246)){
args__4502__auto__.push((arguments[i__4500__auto___27247]));

var G__27248 = (i__4500__auto___27247 + (1));
i__4500__auto___27247 = G__27248;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq27236){
var G__27237 = cljs.core.first.call(null,seq27236);
var seq27236__$1 = cljs.core.next.call(null,seq27236);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27237,seq27236__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27249 = arguments.length;
var i__4500__auto___27250 = (0);
while(true){
if((i__4500__auto___27250 < len__4499__auto___27249)){
args__4502__auto__.push((arguments[i__4500__auto___27250]));

var G__27251 = (i__4500__auto___27250 + (1));
i__4500__auto___27250 = G__27251;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq27238){
var G__27239 = cljs.core.first.call(null,seq27238);
var seq27238__$1 = cljs.core.next.call(null,seq27238);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27239,seq27238__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27260 = arguments.length;
var i__4500__auto___27261 = (0);
while(true){
if((i__4500__auto___27261 < len__4499__auto___27260)){
args__4502__auto__.push((arguments[i__4500__auto___27261]));

var G__27262 = (i__4500__auto___27261 + (1));
i__4500__auto___27261 = G__27262;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__27167__auto__,rest__27168__auto__){
var convert_case__27169__auto__ = (function (p1__27166__27170__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__27166__27170__auto__,rest__27168__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__27167__auto__,convert_case__27169__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq27252){
var G__27253 = cljs.core.first.call(null,seq27252);
var seq27252__$1 = cljs.core.next.call(null,seq27252);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27253,seq27252__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27263 = arguments.length;
var i__4500__auto___27264 = (0);
while(true){
if((i__4500__auto___27264 < len__4499__auto___27263)){
args__4502__auto__.push((arguments[i__4500__auto___27264]));

var G__27265 = (i__4500__auto___27264 + (1));
i__4500__auto___27264 = G__27265;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq27254){
var G__27255 = cljs.core.first.call(null,seq27254);
var seq27254__$1 = cljs.core.next.call(null,seq27254);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27255,seq27254__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27266 = arguments.length;
var i__4500__auto___27267 = (0);
while(true){
if((i__4500__auto___27267 < len__4499__auto___27266)){
args__4502__auto__.push((arguments[i__4500__auto___27267]));

var G__27268 = (i__4500__auto___27267 + (1));
i__4500__auto___27267 = G__27268;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq27256){
var G__27257 = cljs.core.first.call(null,seq27256);
var seq27256__$1 = cljs.core.next.call(null,seq27256);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27257,seq27256__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27269 = arguments.length;
var i__4500__auto___27270 = (0);
while(true){
if((i__4500__auto___27270 < len__4499__auto___27269)){
args__4502__auto__.push((arguments[i__4500__auto___27270]));

var G__27271 = (i__4500__auto___27270 + (1));
i__4500__auto___27270 = G__27271;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq27258){
var G__27259 = cljs.core.first.call(null,seq27258);
var seq27258__$1 = cljs.core.next.call(null,seq27258);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27259,seq27258__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27280 = arguments.length;
var i__4500__auto___27281 = (0);
while(true){
if((i__4500__auto___27281 < len__4499__auto___27280)){
args__4502__auto__.push((arguments[i__4500__auto___27281]));

var G__27282 = (i__4500__auto___27281 + (1));
i__4500__auto___27281 = G__27282;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__27167__auto__,rest__27168__auto__){
var convert_case__27169__auto__ = (function (p1__27166__27170__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__27166__27170__auto__,rest__27168__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__27167__auto__,convert_case__27169__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq27272){
var G__27273 = cljs.core.first.call(null,seq27272);
var seq27272__$1 = cljs.core.next.call(null,seq27272);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27273,seq27272__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27283 = arguments.length;
var i__4500__auto___27284 = (0);
while(true){
if((i__4500__auto___27284 < len__4499__auto___27283)){
args__4502__auto__.push((arguments[i__4500__auto___27284]));

var G__27285 = (i__4500__auto___27284 + (1));
i__4500__auto___27284 = G__27285;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq27274){
var G__27275 = cljs.core.first.call(null,seq27274);
var seq27274__$1 = cljs.core.next.call(null,seq27274);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27275,seq27274__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27286 = arguments.length;
var i__4500__auto___27287 = (0);
while(true){
if((i__4500__auto___27287 < len__4499__auto___27286)){
args__4502__auto__.push((arguments[i__4500__auto___27287]));

var G__27288 = (i__4500__auto___27287 + (1));
i__4500__auto___27287 = G__27288;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq27276){
var G__27277 = cljs.core.first.call(null,seq27276);
var seq27276__$1 = cljs.core.next.call(null,seq27276);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27277,seq27276__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27289 = arguments.length;
var i__4500__auto___27290 = (0);
while(true){
if((i__4500__auto___27290 < len__4499__auto___27289)){
args__4502__auto__.push((arguments[i__4500__auto___27290]));

var G__27291 = (i__4500__auto___27290 + (1));
i__4500__auto___27290 = G__27291;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq27278){
var G__27279 = cljs.core.first.call(null,seq27278);
var seq27278__$1 = cljs.core.next.call(null,seq27278);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27279,seq27278__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27300 = arguments.length;
var i__4500__auto___27301 = (0);
while(true){
if((i__4500__auto___27301 < len__4499__auto___27300)){
args__4502__auto__.push((arguments[i__4500__auto___27301]));

var G__27302 = (i__4500__auto___27301 + (1));
i__4500__auto___27301 = G__27302;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__27167__auto__,rest__27168__auto__){
var convert_case__27169__auto__ = (function (p1__27166__27170__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__27166__27170__auto__,rest__27168__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__27167__auto__,convert_case__27169__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq27292){
var G__27293 = cljs.core.first.call(null,seq27292);
var seq27292__$1 = cljs.core.next.call(null,seq27292);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27293,seq27292__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27303 = arguments.length;
var i__4500__auto___27304 = (0);
while(true){
if((i__4500__auto___27304 < len__4499__auto___27303)){
args__4502__auto__.push((arguments[i__4500__auto___27304]));

var G__27305 = (i__4500__auto___27304 + (1));
i__4500__auto___27304 = G__27305;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq27294){
var G__27295 = cljs.core.first.call(null,seq27294);
var seq27294__$1 = cljs.core.next.call(null,seq27294);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27295,seq27294__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27306 = arguments.length;
var i__4500__auto___27307 = (0);
while(true){
if((i__4500__auto___27307 < len__4499__auto___27306)){
args__4502__auto__.push((arguments[i__4500__auto___27307]));

var G__27308 = (i__4500__auto___27307 + (1));
i__4500__auto___27307 = G__27308;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq27296){
var G__27297 = cljs.core.first.call(null,seq27296);
var seq27296__$1 = cljs.core.next.call(null,seq27296);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27297,seq27296__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27309 = arguments.length;
var i__4500__auto___27310 = (0);
while(true){
if((i__4500__auto___27310 < len__4499__auto___27309)){
args__4502__auto__.push((arguments[i__4500__auto___27310]));

var G__27311 = (i__4500__auto___27310 + (1));
i__4500__auto___27310 = G__27311;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq27298){
var G__27299 = cljs.core.first.call(null,seq27298);
var seq27298__$1 = cljs.core.next.call(null,seq27298);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27299,seq27298__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27320 = arguments.length;
var i__4500__auto___27321 = (0);
while(true){
if((i__4500__auto___27321 < len__4499__auto___27320)){
args__4502__auto__.push((arguments[i__4500__auto___27321]));

var G__27322 = (i__4500__auto___27321 + (1));
i__4500__auto___27321 = G__27322;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__27167__auto__,rest__27168__auto__){
var convert_case__27169__auto__ = (function (p1__27166__27170__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__27166__27170__auto__,rest__27168__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__27167__auto__,convert_case__27169__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq27312){
var G__27313 = cljs.core.first.call(null,seq27312);
var seq27312__$1 = cljs.core.next.call(null,seq27312);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27313,seq27312__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27323 = arguments.length;
var i__4500__auto___27324 = (0);
while(true){
if((i__4500__auto___27324 < len__4499__auto___27323)){
args__4502__auto__.push((arguments[i__4500__auto___27324]));

var G__27325 = (i__4500__auto___27324 + (1));
i__4500__auto___27324 = G__27325;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq27314){
var G__27315 = cljs.core.first.call(null,seq27314);
var seq27314__$1 = cljs.core.next.call(null,seq27314);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27315,seq27314__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27326 = arguments.length;
var i__4500__auto___27327 = (0);
while(true){
if((i__4500__auto___27327 < len__4499__auto___27326)){
args__4502__auto__.push((arguments[i__4500__auto___27327]));

var G__27328 = (i__4500__auto___27327 + (1));
i__4500__auto___27327 = G__27328;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq27316){
var G__27317 = cljs.core.first.call(null,seq27316);
var seq27316__$1 = cljs.core.next.call(null,seq27316);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27317,seq27316__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27329 = arguments.length;
var i__4500__auto___27330 = (0);
while(true){
if((i__4500__auto___27330 < len__4499__auto___27329)){
args__4502__auto__.push((arguments[i__4500__auto___27330]));

var G__27331 = (i__4500__auto___27330 + (1));
i__4500__auto___27330 = G__27331;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq27318){
var G__27319 = cljs.core.first.call(null,seq27318);
var seq27318__$1 = cljs.core.next.call(null,seq27318);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27319,seq27318__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27340 = arguments.length;
var i__4500__auto___27341 = (0);
while(true){
if((i__4500__auto___27341 < len__4499__auto___27340)){
args__4502__auto__.push((arguments[i__4500__auto___27341]));

var G__27342 = (i__4500__auto___27341 + (1));
i__4500__auto___27341 = G__27342;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__27167__auto__,rest__27168__auto__){
var convert_case__27169__auto__ = (function (p1__27166__27170__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__27166__27170__auto__,rest__27168__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__27167__auto__,convert_case__27169__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq27332){
var G__27333 = cljs.core.first.call(null,seq27332);
var seq27332__$1 = cljs.core.next.call(null,seq27332);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27333,seq27332__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27343 = arguments.length;
var i__4500__auto___27344 = (0);
while(true){
if((i__4500__auto___27344 < len__4499__auto___27343)){
args__4502__auto__.push((arguments[i__4500__auto___27344]));

var G__27345 = (i__4500__auto___27344 + (1));
i__4500__auto___27344 = G__27345;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq27334){
var G__27335 = cljs.core.first.call(null,seq27334);
var seq27334__$1 = cljs.core.next.call(null,seq27334);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27335,seq27334__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27346 = arguments.length;
var i__4500__auto___27347 = (0);
while(true){
if((i__4500__auto___27347 < len__4499__auto___27346)){
args__4502__auto__.push((arguments[i__4500__auto___27347]));

var G__27348 = (i__4500__auto___27347 + (1));
i__4500__auto___27347 = G__27348;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq27336){
var G__27337 = cljs.core.first.call(null,seq27336);
var seq27336__$1 = cljs.core.next.call(null,seq27336);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27337,seq27336__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27349 = arguments.length;
var i__4500__auto___27350 = (0);
while(true){
if((i__4500__auto___27350 < len__4499__auto___27349)){
args__4502__auto__.push((arguments[i__4500__auto___27350]));

var G__27351 = (i__4500__auto___27350 + (1));
i__4500__auto___27350 = G__27351;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__27172__auto__,rest__27173__auto__){
if(!((s__27172__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__27172__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__27172__auto__),rest__27173__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq27338){
var G__27339 = cljs.core.first.call(null,seq27338);
var seq27338__$1 = cljs.core.next.call(null,seq27338);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27339,seq27338__$1);
});


//# sourceMappingURL=core.js.map?rel=1526705063982
