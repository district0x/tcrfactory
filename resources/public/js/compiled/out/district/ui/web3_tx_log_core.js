// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_log_core');
goog.require('cljs.core');
goog.require('akiroz.re_frame.storage');
goog.require('district.ui.web3_tx_log_core.events');
goog.require('district.ui.web3_tx');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.web3-tx-log-core/web3-tx-log-core"))){
if(typeof district.ui.web3_tx_log_core.web3_tx_log_core !== 'undefined'){
} else {
district.ui.web3_tx_log_core.web3_tx_log_core = (new mount.core.DerefableState("#'district.ui.web3-tx-log-core/web3-tx-log-core"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.web3_tx_log_core.web3_tx_log_core;},new cljs.core.Symbol("district.ui.web3-tx-log-core","web3-tx-log-core","district.ui.web3-tx-log-core/web3-tx-log-core",825432415,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",-1431471387,null),new cljs.core.Symbol(null,"web3-tx-log-core","web3-tx-log-core",-1585729702,null),"resources/public/js/compiled/out/district/ui/web3_tx_log_core.cljs",27,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx_log_core.web3_tx_log_core)?district.ui.web3_tx_log_core.web3_tx_log_core.cljs$lang$test:null)])),"#'district.ui.web3-tx-log-core/web3-tx-log-core",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(4),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.web3_tx_log_core.start.call(null,new cljs.core.Keyword(null,"web3-tx-log-core","web3-tx-log-core",1068706067).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.web3_tx_log_core.stop.call(null);
})], null));
} else {
if(typeof district.ui.web3_tx_log_core.web3_tx_log_core !== 'undefined'){
} else {
district.ui.web3_tx_log_core.web3_tx_log_core = mount.core.current_state.call(null,"#'district.ui.web3-tx-log-core/web3-tx-log-core");
}
}

new cljs.core.Var(function(){return district.ui.web3_tx_log_core.web3_tx_log_core;},new cljs.core.Symbol("district.ui.web3-tx-log-core","web3-tx-log-core","district.ui.web3-tx-log-core/web3-tx-log-core",825432415,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",-1431471387,null),new cljs.core.Symbol(null,"web3-tx-log-core","web3-tx-log-core",-1585729702,null),"resources/public/js/compiled/out/district/ui/web3_tx_log_core.cljs",27,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx_log_core.web3_tx_log_core)?district.ui.web3_tx_log_core.web3_tx_log_core.cljs$lang$test:null)]));
district.ui.web3_tx_log_core.start = (function district$ui$web3_tx_log_core$start(opts){
akiroz.re_frame.storage.reg_co_fx_BANG_.call(null,new cljs.core.Keyword(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",1222964382),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"web3-tx-log-core-localstorage","web3-tx-log-core-localstorage",-1016726041),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"web3-tx-log-core-localstorage","web3-tx-log-core-localstorage",-1016726041)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log-core.events","start","district.ui.web3-tx-log-core.events/start",-235061467),opts], null));

return opts;
});
district.ui.web3_tx_log_core.stop = (function district$ui$web3_tx_log_core$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log-core.events","stop","district.ui.web3-tx-log-core.events/stop",658241596)], null));
});

//# sourceMappingURL=web3_tx_log_core.js.map?rel=1526741423497
