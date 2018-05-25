// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_id');
goog.require('cljs.core');
goog.require('akiroz.re_frame.storage');
goog.require('district.ui.web3_tx_id.events');
goog.require('district.ui.web3_tx');
goog.require('district.ui.web3_accounts');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.web3-tx-id/web3-tx-id"))){
if(typeof district.ui.web3_tx_id.web3_tx_id !== 'undefined'){
} else {
district.ui.web3_tx_id.web3_tx_id = (new mount.core.DerefableState("#'district.ui.web3-tx-id/web3-tx-id"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.web3_tx_id.web3_tx_id;},new cljs.core.Symbol("district.ui.web3-tx-id","web3-tx-id","district.ui.web3-tx-id/web3-tx-id",-1774560982,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx-id","district.ui.web3-tx-id",1825832857,null),new cljs.core.Symbol(null,"web3-tx-id","web3-tx-id",702086106,null),"resources/public/js/compiled/out/district/ui/web3_tx_id.cljs",21,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx_id.web3_tx_id)?district.ui.web3_tx_id.web3_tx_id.cljs$lang$test:null)])),"#'district.ui.web3-tx-id/web3-tx-id",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(10),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.web3_tx_id.start.call(null,new cljs.core.Keyword(null,"web3-tx-id","web3-tx-id",-938445421).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.web3_tx_id.stop.call(null);
})], null));
} else {
if(typeof district.ui.web3_tx_id.web3_tx_id !== 'undefined'){
} else {
district.ui.web3_tx_id.web3_tx_id = mount.core.current_state.call(null,"#'district.ui.web3-tx-id/web3-tx-id");
}
}

new cljs.core.Var(function(){return district.ui.web3_tx_id.web3_tx_id;},new cljs.core.Symbol("district.ui.web3-tx-id","web3-tx-id","district.ui.web3-tx-id/web3-tx-id",-1774560982,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx-id","district.ui.web3-tx-id",1825832857,null),new cljs.core.Symbol(null,"web3-tx-id","web3-tx-id",702086106,null),"resources/public/js/compiled/out/district/ui/web3_tx_id.cljs",21,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx_id.web3_tx_id)?district.ui.web3_tx_id.web3_tx_id.cljs$lang$test:null)]));
district.ui.web3_tx_id.start = (function district$ui$web3_tx_id$start(opts){
akiroz.re_frame.storage.reg_co_fx_BANG_.call(null,new cljs.core.Keyword(null,"district.ui.web3-tx-id","district.ui.web3-tx-id",185301330),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"web3-tx-id-localstorage","web3-tx-id-localstorage",604243072),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"web3-tx-id-localstorage","web3-tx-id-localstorage",604243072)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-id.events","start","district.ui.web3-tx-id.events/start",400808820),opts], null));

return opts;
});
district.ui.web3_tx_id.stop = (function district$ui$web3_tx_id$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-id.events","stop","district.ui.web3-tx-id.events/stop",896816265)], null));
});

//# sourceMappingURL=web3_tx_id.js.map?rel=1526741424570
