// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('district.ui.reagent_render');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('tcrfactory.ui.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__28385__delegate = function (x){
if(cljs.core.truth_(district.ui.reagent_render.rerender)){
return cljs.core.apply.call(null,district.ui.reagent_render.rerender,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'district.ui.reagent-render/rerender' is missing");
}
};
var G__28385 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__28386__i = 0, G__28386__a = new Array(arguments.length -  0);
while (G__28386__i < G__28386__a.length) {G__28386__a[G__28386__i] = arguments[G__28386__i + 0]; ++G__28386__i;}
  x = new cljs.core.IndexedSeq(G__28386__a,0,null);
} 
return G__28385__delegate.call(this,x);};
G__28385.cljs$lang$maxFixedArity = 0;
G__28385.cljs$lang$applyTo = (function (arglist__28387){
var x = cljs.core.seq(arglist__28387);
return G__28385__delegate(x);
});
G__28385.cljs$core$IFn$_invoke$arity$variadic = G__28385__delegate;
return G__28385;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:4787/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1526901180288
