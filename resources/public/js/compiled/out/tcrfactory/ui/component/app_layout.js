// Compiled by ClojureScript 1.10.238 {}
goog.provide('tcrfactory.ui.component.app_layout');
goog.require('cljs.core');
goog.require('re_frame.core');
tcrfactory.ui.component.app_layout.app_bar = (function tcrfactory$ui$component$app_layout$app_bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"App Bar"], null);
});
tcrfactory.ui.component.app_layout.app_layout = (function tcrfactory$ui$component$app_layout$app_layout(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28789 = arguments.length;
var i__4500__auto___28790 = (0);
while(true){
if((i__4500__auto___28790 < len__4499__auto___28789)){
args__4502__auto__.push((arguments[i__4500__auto___28790]));

var G__28791 = (i__4500__auto___28790 + (1));
i__4500__auto___28790 = G__28791;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return tcrfactory.ui.component.app_layout.app_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

tcrfactory.ui.component.app_layout.app_layout.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tcrfactory.ui.component.app_layout.app_bar], null),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),children))], null);
});

tcrfactory.ui.component.app_layout.app_layout.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tcrfactory.ui.component.app_layout.app_layout.cljs$lang$applyTo = (function (seq28788){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28788));
});


//# sourceMappingURL=app_layout.js.map?rel=1526736697052
