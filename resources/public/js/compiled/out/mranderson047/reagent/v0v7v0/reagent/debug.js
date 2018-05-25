// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson047.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson047.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson047.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__32585__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32586__i = 0, G__32586__a = new Array(arguments.length -  0);
while (G__32586__i < G__32586__a.length) {G__32586__a[G__32586__i] = arguments[G__32586__i + 0]; ++G__32586__i;}
  args = new cljs.core.IndexedSeq(G__32586__a,0,null);
} 
return G__32585__delegate.call(this,args);};
G__32585.cljs$lang$maxFixedArity = 0;
G__32585.cljs$lang$applyTo = (function (arglist__32587){
var args = cljs.core.seq(arglist__32587);
return G__32585__delegate(args);
});
G__32585.cljs$core$IFn$_invoke$arity$variadic = G__32585__delegate;
return G__32585;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32588__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32589__i = 0, G__32589__a = new Array(arguments.length -  0);
while (G__32589__i < G__32589__a.length) {G__32589__a[G__32589__i] = arguments[G__32589__i + 0]; ++G__32589__i;}
  args = new cljs.core.IndexedSeq(G__32589__a,0,null);
} 
return G__32588__delegate.call(this,args);};
G__32588.cljs$lang$maxFixedArity = 0;
G__32588.cljs$lang$applyTo = (function (arglist__32590){
var args = cljs.core.seq(arglist__32590);
return G__32588__delegate(args);
});
G__32588.cljs$core$IFn$_invoke$arity$variadic = G__32588__delegate;
return G__32588;
})()
;})(o))
;

return o;
})();
}
mranderson047.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson047$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson047.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1526705512821
