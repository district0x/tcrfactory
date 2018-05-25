// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_sync_now');
goog.require('cljs.core');
goog.require('district.ui.web3_sync_now.events');
goog.require('mount.core');
goog.require('re_frame.core');
district.ui.web3_sync_now.start = (function district$ui$web3_sync_now$start(opts){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","start","district.ui.web3-sync-now.events/start",-568095524),opts], null));

return opts;
});
district.ui.web3_sync_now.stop = (function district$ui$web3_sync_now$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","stop","district.ui.web3-sync-now.events/stop",2075370753)], null));
});
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.web3-sync-now/now"))){
if(typeof district.ui.web3_sync_now.now !== 'undefined'){
} else {
district.ui.web3_sync_now.now = (new mount.core.DerefableState("#'district.ui.web3-sync-now/now"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.web3_sync_now.now;},new cljs.core.Symbol("district.ui.web3-sync-now","now","district.ui.web3-sync-now/now",-2049607484,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-sync-now","district.ui.web3-sync-now",1596301182,null),new cljs.core.Symbol(null,"now","now",-9994004,null),"resources/public/js/compiled/out/district/ui/web3_sync_now.cljs",14,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_sync_now.now)?district.ui.web3_sync_now.now.cljs$lang$test:null)])),"#'district.ui.web3-sync-now/now",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(2),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.web3_sync_now.start.call(null,new cljs.core.Keyword(null,"web3-sync-now","web3-sync-now",1272145545).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.web3_sync_now.stop.call(null);
})], null));
} else {
if(typeof district.ui.web3_sync_now.now !== 'undefined'){
} else {
district.ui.web3_sync_now.now = mount.core.current_state.call(null,"#'district.ui.web3-sync-now/now");
}
}

new cljs.core.Var(function(){return district.ui.web3_sync_now.now;},new cljs.core.Symbol("district.ui.web3-sync-now","now","district.ui.web3-sync-now/now",-2049607484,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-sync-now","district.ui.web3-sync-now",1596301182,null),new cljs.core.Symbol(null,"now","now",-9994004,null),"resources/public/js/compiled/out/district/ui/web3_sync_now.cljs",14,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_sync_now.now)?district.ui.web3_sync_now.now.cljs$lang$test:null)]));

//# sourceMappingURL=web3_sync_now.js.map?rel=1526794841287
