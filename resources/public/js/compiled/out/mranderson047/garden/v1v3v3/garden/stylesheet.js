// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson047.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('mranderson047.garden.v1v3v3.garden.util');
goog.require('mranderson047.garden.v1v3v3.garden.color');
goog.require('mranderson047.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
mranderson047.garden.v1v3v3.garden.stylesheet.rule = (function mranderson047$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35675 = arguments.length;
var i__4500__auto___35676 = (0);
while(true){
if((i__4500__auto___35676 < len__4499__auto___35675)){
args__4502__auto__.push((arguments[i__4500__auto___35676]));

var G__35677 = (i__4500__auto___35676 + (1));
i__4500__auto___35676 = G__35677;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__35678__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__35678 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__35679__i = 0, G__35679__a = new Array(arguments.length -  0);
while (G__35679__i < G__35679__a.length) {G__35679__a[G__35679__i] = arguments[G__35679__i + 0]; ++G__35679__i;}
  children = new cljs.core.IndexedSeq(G__35679__a,0,null);
} 
return G__35678__delegate.call(this,children);};
G__35678.cljs$lang$maxFixedArity = 0;
G__35678.cljs$lang$applyTo = (function (arglist__35680){
var children = cljs.core.seq(arglist__35680);
return G__35678__delegate(children);
});
G__35678.cljs$core$IFn$_invoke$arity$variadic = G__35678__delegate;
return G__35678;
})()
;
}
});

mranderson047.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq35673){
var G__35674 = cljs.core.first.call(null,seq35673);
var seq35673__$1 = cljs.core.next.call(null,seq35673);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35674,seq35673__$1);
});

mranderson047.garden.v1v3v3.garden.stylesheet.cssfn = (function mranderson047$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__35681__delegate = function (args){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__35681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35682__i = 0, G__35682__a = new Array(arguments.length -  0);
while (G__35682__i < G__35682__a.length) {G__35682__a[G__35682__i] = arguments[G__35682__i + 0]; ++G__35682__i;}
  args = new cljs.core.IndexedSeq(G__35682__a,0,null);
} 
return G__35681__delegate.call(this,args);};
G__35681.cljs$lang$maxFixedArity = 0;
G__35681.cljs$lang$applyTo = (function (arglist__35683){
var args = cljs.core.seq(arglist__35683);
return G__35681__delegate(args);
});
G__35681.cljs$core$IFn$_invoke$arity$variadic = G__35681__delegate;
return G__35681;
})()
;
});
mranderson047.garden.v1v3v3.garden.stylesheet.at_rule = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35685 = arguments.length;
var i__4500__auto___35686 = (0);
while(true){
if((i__4500__auto___35686 < len__4499__auto___35685)){
args__4502__auto__.push((arguments[i__4500__auto___35686]));

var G__35687 = (i__4500__auto___35686 + (1));
i__4500__auto___35686 = G__35687;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq35684){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35684));
});

/**
 * Create a CSS @import rule.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.at_import = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__35691 = arguments.length;
switch (G__35691) {
case 1:
return mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___35693 = arguments.length;
var i__4500__auto___35694 = (0);
while(true){
if((i__4500__auto___35694 < len__4499__auto___35693)){
args_arr__4514__auto__.push((arguments[i__4500__auto___35694]));

var G__35695 = (i__4500__auto___35694 + (1));
i__4500__auto___35694 = G__35695;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return mranderson047.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return mranderson047.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq35689){
var G__35690 = cljs.core.first.call(null,seq35689);
var seq35689__$1 = cljs.core.next.call(null,seq35689);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35690,seq35689__$1);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.at_media = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35698 = arguments.length;
var i__4500__auto___35699 = (0);
while(true){
if((i__4500__auto___35699 < len__4499__auto___35698)){
args__4502__auto__.push((arguments[i__4500__auto___35699]));

var G__35700 = (i__4500__auto___35699 + (1));
i__4500__auto___35699 = G__35700;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return mranderson047.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq35696){
var G__35697 = cljs.core.first.call(null,seq35696);
var seq35696__$1 = cljs.core.next.call(null,seq35696);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35697,seq35696__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35703 = arguments.length;
var i__4500__auto___35704 = (0);
while(true){
if((i__4500__auto___35704 < len__4499__auto___35703)){
args__4502__auto__.push((arguments[i__4500__auto___35704]));

var G__35705 = (i__4500__auto___35704 + (1));
i__4500__auto___35704 = G__35705;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return mranderson047.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq35701){
var G__35702 = cljs.core.first.call(null,seq35701);
var seq35701__$1 = cljs.core.next.call(null,seq35701);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35702,seq35701__$1);
});

/**
 * Create a color from RGB values.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.rgb = (function mranderson047$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return mranderson047.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.hsl = (function mranderson047$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return mranderson047.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1526705517038
