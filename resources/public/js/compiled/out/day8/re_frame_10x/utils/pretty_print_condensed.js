// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.utils.pretty_print_condensed');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Truncate a string to length `n`.
 * 
 *   Removal occurs at `cut-from`, which may be :start, :end, or :middle.
 * 
 *   Truncation is indicated by `…` at start/end, or `...` at middle, for readability. 
 */
day8.re_frame_10x.utils.pretty_print_condensed.truncate_string = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_string(var_args){
var G__35579 = arguments.length;
switch (G__35579) {
case 2:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2 = (function (n,string){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,n,new cljs.core.Keyword(null,"end","end",-268185958),string);
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3 = (function (n,cut_from,string){
var c = cljs.core.count.call(null,string);
if((c > n)){
var G__35580 = cut_from;
var G__35580__$1 = (((G__35580 instanceof cljs.core.Keyword))?G__35580.fqn:null);
switch (G__35580__$1) {
case "start":
return ["\u2026",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(c - (n - (1))),c))].join('');

break;
case "end":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(0),(n - (1)))),"\u2026"].join('');

break;
case "middle":
var G__35581 = n;
switch (G__35581) {
case (1):
return "\u2026";

break;
case (2):
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,n,new cljs.core.Keyword(null,"start","start",-355208981),string);

break;
case (3):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(0),(1))),"\u2026",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(c - (1)),c))].join('');

break;
default:
var content_budget = (n - (2));
var per_side_budget = Math.floor((content_budget / (2)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(0),(function (){var G__35582 = per_side_budget;
if(cljs.core.even_QMARK_.call(null,content_budget)){
return (G__35582 - (1));
} else {
return G__35582;
}
})())),"...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(c - per_side_budget),c))].join('');

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35580__$1)].join('')));

}
} else {
return string;
}
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_segments(var_args){
var G__35587 = arguments.length;
switch (G__35587) {
case 2:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2 = (function (s,limit){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.call(null,s,limit,/^[^.]+\./,"\u2026");
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4 = (function (s,limit,match,trunc_prefix){
while(true){
if((cljs.core.count.call(null,s) <= limit)){
return s;
} else {
var rep = clojure.string.replace.call(null,s,match,trunc_prefix);
if(cljs.core._EQ_.call(null,rep,s)){
return trunc_prefix;
} else {
var G__35589 = clojure.string.replace.call(null,s,match,trunc_prefix);
var G__35590 = limit;
var G__35591 = match;
var G__35592 = trunc_prefix;
s = G__35589;
limit = G__35590;
match = G__35591;
trunc_prefix = G__35592;
continue;
}
}
break;
}
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$lang$maxFixedArity = 4;

/**
 * Truncates `named`, which must satisfy INamed protocol, to within `n`
 * characters, cutting from beginning. Adds a `…` prefix to indicate where
 * cutting has occurred.
 */
day8.re_frame_10x.utils.pretty_print_condensed.truncate_named = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_named(n,named){
var the_ns = cljs.core.namespace.call(null,named);
var the_name = cljs.core.name.call(null,named);
var kw_QMARK_ = (named instanceof cljs.core.Keyword);
var ns_prefix_size = ((kw_QMARK_)?(3):(2));
if((((cljs.core.count.call(null,the_name) > (cljs.core.truth_(the_ns)?(n - ns_prefix_size):n))) || ((the_ns == null)))){
var prefix = (function (){var G__35593 = ((kw_QMARK_)?":":"");
if(cljs.core.truth_(the_ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35593),"\u2026/"].join('');
} else {
return G__35593;
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,(n - cljs.core.count.call(null,prefix)),new cljs.core.Keyword(null,"start","start",-355208981),the_name))].join('');
} else {
var end = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_name)].join('');
var prefix = ((kw_QMARK_)?":":"");
var ns_budget = ((n - cljs.core.count.call(null,end)) - cljs.core.count.call(null,prefix));
var ns_string = day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.call(null,the_ns,ns_budget);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('');
}
});
if(cljs.core._EQ_.call(null,day8.re_frame_10x.utils.pretty_print_condensed.truncate_named.call(null,(12),new cljs.core.Keyword("city","saskatoon","city/saskatoon",2120611420)),":\u2026/saskatoon")){
} else {
throw (new Error("Assert failed: (= (truncate-named 12 :city/saskatoon) \":\u2026/saskatoon\")"));
}
day8.re_frame_10x.utils.pretty_print_condensed.truncate = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate(n,location,param){
if(((!((param == null)))?(((((param.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === param.cljs$core$INamed$))))?true:(((!param.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INamed,param):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INamed,param))){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_named.call(null,n,param);
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,n,location,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join(''));
}
});
day8.re_frame_10x.utils.pretty_print_condensed.str__GT_namespaced_sym = (function day8$re_frame_10x$utils$pretty_print_condensed$str__GT_namespaced_sym(s){
if(typeof s === 'string'){
var name = cljs.core.second.call(null,cljs.core.re_find.call(null,/\.([^.]+)$/,s));
if(cljs.core.truth_(name)){
return cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(0),((cljs.core.count.call(null,s) - cljs.core.count.call(null,name)) - (1))),name);
} else {
return cljs.core.symbol.call(null,s);
}
} else {
return s;
}
});
/**
 * Return left and right edges of a collection (eg. brackets plus prefixes), defaults to [< >].
 */
day8.re_frame_10x.utils.pretty_print_condensed.edges = (function day8$re_frame_10x$utils$pretty_print_condensed$edges(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null);
} else {
if(cljs.core.vector_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null);
} else {
if(((cljs.core.list_QMARK_.call(null,coll)) || (cljs.core.seq_QMARK_.call(null,coll)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",">"], null);

}
}
}
}
});
/**
 * Wrap `value` with edges of `coll`
 */
day8.re_frame_10x.utils.pretty_print_condensed.with_edges = (function day8$re_frame_10x$utils$pretty_print_condensed$with_edges(coll,value){
var vec__35595 = day8.re_frame_10x.utils.pretty_print_condensed.edges.call(null,coll);
var left = cljs.core.nth.call(null,vec__35595,(0),null);
var right = cljs.core.nth.call(null,vec__35595,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(right)].join('');
});
/**
 * Render form in abbreviated form, showing content only for keywords/strings/symbols and entering collections to a depth of 1.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed = (function day8$re_frame_10x$utils$pretty_print_condensed$pretty_condensed(var_args){
var G__35599 = arguments.length;
switch (G__35599) {
case 1:
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$1 = (function (form){
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.call(null,(0),cljs.core.coll_QMARK_,(1),form);
});

day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4 = (function (depth,enter_pred,max_depth,form){
if(((!((form == null)))?(((((form.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$INamed$))))?true:(((!form.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INamed,form):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INamed,form))){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_named.call(null,(16),form);
} else {
if(typeof form === 'string'){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,(16),new cljs.core.Keyword(null,"middle","middle",-701029031),form);
} else {
if(cljs.core.fn_QMARK_.call(null,form)){
var or__3922__auto__ = (function (){var G__35602 = form.name;
if((G__35602 == null)){
return null;
} else {
return clojure.string.replace.call(null,G__35602,/(^.*\$)(.*)/,"$2");
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "\u0192";
}
} else {
if(typeof form === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = enter_pred.call(null,form);
if(cljs.core.truth_(and__3911__auto__)){
return (depth < max_depth);
} else {
return and__3911__auto__;
}
})())){
return day8.re_frame_10x.utils.pretty_print_condensed.with_edges.call(null,form,clojure.string.join.call(null,", ",cljs.core.mapv.call(null,cljs.core.partial.call(null,day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed,(depth + (1)),enter_pred,max_depth),form)));
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.with_edges.call(null,form,"\u2026");

}
}
}
}
}
});

day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=pretty_print_condensed.js.map?rel=1526705516678
