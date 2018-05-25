// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.now');
goog.require('cljs.core');
goog.require('district.ui.now.events');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.now/now"))){
if(typeof district.ui.now.now !== 'undefined'){
} else {
district.ui.now.now = (new mount.core.DerefableState("#'district.ui.now/now"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.now.now;},new cljs.core.Symbol("district.ui.now","now","district.ui.now/now",-2050641472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.now","district.ui.now",-630846996,null),new cljs.core.Symbol(null,"now","now",-9994004,null),"resources/public/js/compiled/out/district/ui/now.cljs",14,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.now.now)?district.ui.now.now.cljs$lang$test:null)])),"#'district.ui.now/now",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(2),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.now.start.call(null,new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.now.stop.call(null);
})], null));
} else {
if(typeof district.ui.now.now !== 'undefined'){
} else {
district.ui.now.now = mount.core.current_state.call(null,"#'district.ui.now/now");
}
}

new cljs.core.Var(function(){return district.ui.now.now;},new cljs.core.Symbol("district.ui.now","now","district.ui.now/now",-2050641472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.now","district.ui.now",-630846996,null),new cljs.core.Symbol(null,"now","now",-9994004,null),"resources/public/js/compiled/out/district/ui/now.cljs",14,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.now.now)?district.ui.now.now.cljs$lang$test:null)]));
district.ui.now.start = (function district$ui$now$start(opts){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.now.events","start","district.ui.now.events/start",304949608),opts], null));

return opts;
});
district.ui.now.stop = (function district$ui$now$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.now.events","stop","district.ui.now.events/stop",1202918013)], null));
});

//# sourceMappingURL=now.js.map?rel=1526713904738
