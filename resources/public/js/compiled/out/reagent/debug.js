// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__22843__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22844__i = 0, G__22844__a = new Array(arguments.length -  0);
while (G__22844__i < G__22844__a.length) {G__22844__a[G__22844__i] = arguments[G__22844__i + 0]; ++G__22844__i;}
  args = new cljs.core.IndexedSeq(G__22844__a,0,null);
} 
return G__22843__delegate.call(this,args);};
G__22843.cljs$lang$maxFixedArity = 0;
G__22843.cljs$lang$applyTo = (function (arglist__22845){
var args = cljs.core.seq(arglist__22845);
return G__22843__delegate(args);
});
G__22843.cljs$core$IFn$_invoke$arity$variadic = G__22843__delegate;
return G__22843;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22846__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22847__i = 0, G__22847__a = new Array(arguments.length -  0);
while (G__22847__i < G__22847__a.length) {G__22847__a[G__22847__i] = arguments[G__22847__i + 0]; ++G__22847__i;}
  args = new cljs.core.IndexedSeq(G__22847__a,0,null);
} 
return G__22846__delegate.call(this,args);};
G__22846.cljs$lang$maxFixedArity = 0;
G__22846.cljs$lang$applyTo = (function (arglist__22848){
var args = cljs.core.seq(arglist__22848);
return G__22846__delegate(args);
});
G__22846.cljs$core$IFn$_invoke$arity$variadic = G__22846__delegate;
return G__22846;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1526705058267
