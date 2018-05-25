// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_log');
goog.require('cljs.core');
goog.require('akiroz.re_frame.storage');
goog.require('cljs.spec.alpha');
goog.require('district.ui.web3_tx_log.events');
goog.require('district.ui.web3_tx');
goog.require('district.ui.web3_tx_log_core');
goog.require('district.ui.web3_tx_costs');
goog.require('district.ui.web3_accounts');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.web3-tx-log/web3-tx-log"))){
if(typeof district.ui.web3_tx_log.web3_tx_log !== 'undefined'){
} else {
district.ui.web3_tx_log.web3_tx_log = (new mount.core.DerefableState("#'district.ui.web3-tx-log/web3-tx-log"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.web3_tx_log.web3_tx_log;},new cljs.core.Symbol("district.ui.web3-tx-log","web3-tx-log","district.ui.web3-tx-log/web3-tx-log",1118227662,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx-log","district.ui.web3-tx-log",-255437247,null),new cljs.core.Symbol(null,"web3-tx-log","web3-tx-log",1691146367,null),"resources/public/js/compiled/out/district/ui/web3_tx_log.cljs",22,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx_log.web3_tx_log)?district.ui.web3_tx_log.web3_tx_log.cljs$lang$test:null)])),"#'district.ui.web3-tx-log/web3-tx-log",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(8),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.web3_tx_log.start.call(null,new cljs.core.Keyword(null,"web3-tx-log","web3-tx-log",50614840).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.web3_tx_log.stop.call(null);
})], null));
} else {
if(typeof district.ui.web3_tx_log.web3_tx_log !== 'undefined'){
} else {
district.ui.web3_tx_log.web3_tx_log = mount.core.current_state.call(null,"#'district.ui.web3-tx-log/web3-tx-log");
}
}

new cljs.core.Var(function(){return district.ui.web3_tx_log.web3_tx_log;},new cljs.core.Symbol("district.ui.web3-tx-log","web3-tx-log","district.ui.web3-tx-log/web3-tx-log",1118227662,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx-log","district.ui.web3-tx-log",-255437247,null),new cljs.core.Symbol(null,"web3-tx-log","web3-tx-log",1691146367,null),"resources/public/js/compiled/out/district/ui/web3_tx_log.cljs",22,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx_log.web3_tx_log)?district.ui.web3_tx_log.web3_tx_log.cljs$lang$test:null)]));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx-log","disable-using-localstorage?","district.ui.web3-tx-log/disable-using-localstorage?",-164931565),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx-log","open-on-tx-hash?","district.ui.web3-tx-log/open-on-tx-hash?",-583643336),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx-log","tx-costs-currencies","district.ui.web3-tx-log/tx-costs-currencies",719406587),new cljs.core.Keyword("district.ui.web3-tx-costs","currencies","district.ui.web3-tx-costs/currencies",350744806),new cljs.core.Keyword("district.ui.web3-tx-costs","currencies","district.ui.web3-tx-costs/currencies",350744806));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx-log","opts","district.ui.web3-tx-log/opts",-1559741562),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log","disable-using-localstorage?","district.ui.web3-tx-log/disable-using-localstorage?",-164931565),new cljs.core.Keyword("district.ui.web3-tx-log","tx-costs-currencies","district.ui.web3-tx-log/tx-costs-currencies",719406587),new cljs.core.Keyword("district.ui.web3-tx-log","open-on-tx-hash?","district.ui.web3-tx-log/open-on-tx-hash?",-583643336)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log","disable-using-localstorage?","district.ui.web3-tx-log/disable-using-localstorage?",-164931565),new cljs.core.Keyword("district.ui.web3-tx-log","tx-costs-currencies","district.ui.web3-tx-log/tx-costs-currencies",719406587),new cljs.core.Keyword("district.ui.web3-tx-log","open-on-tx-hash?","district.ui.web3-tx-log/open-on-tx-hash?",-583643336)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log","disable-using-localstorage?","district.ui.web3-tx-log/disable-using-localstorage?",-164931565),new cljs.core.Keyword("district.ui.web3-tx-log","tx-costs-currencies","district.ui.web3-tx-log/tx-costs-currencies",719406587),new cljs.core.Keyword("district.ui.web3-tx-log","open-on-tx-hash?","district.ui.web3-tx-log/open-on-tx-hash?",-583643336)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__25313){
return cljs.core.map_QMARK_.call(null,G__25313);
})], null),(function (G__25313){
return cljs.core.map_QMARK_.call(null,G__25313);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disable-using-localstorage?","disable-using-localstorage?",375201508),new cljs.core.Keyword(null,"tx-costs-currencies","tx-costs-currencies",-2004931670),new cljs.core.Keyword(null,"open-on-tx-hash?","open-on-tx-hash?",-1349756795)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log","disable-using-localstorage?","district.ui.web3-tx-log/disable-using-localstorage?",-164931565),new cljs.core.Keyword("district.ui.web3-tx-log","tx-costs-currencies","district.ui.web3-tx-log/tx-costs-currencies",719406587),new cljs.core.Keyword("district.ui.web3-tx-log","open-on-tx-hash?","district.ui.web3-tx-log/open-on-tx-hash?",-583643336)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null));
district.ui.web3_tx_log.start = (function district$ui$web3_tx_log$start(opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.web3-tx-log","opts","district.ui.web3-tx-log/opts",-1559741562),opts);
} else {
}
} else {
}

akiroz.re_frame.storage.reg_co_fx_BANG_.call(null,new cljs.core.Keyword(null,"district.ui.web3-tx-log","district.ui.web3-tx-log",-1895968774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"web3-tx-log-localstorage","web3-tx-log-localstorage",1046983386),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"web3-tx-log-localstorage","web3-tx-log-localstorage",1046983386)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log.events","start","district.ui.web3-tx-log.events/start",589540915),opts], null));

return opts;
});
district.ui.web3_tx_log.stop = (function district$ui$web3_tx_log$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log.events","stop","district.ui.web3-tx-log.events/stop",1488161098)], null));
});

//# sourceMappingURL=web3_tx_log.js.map?rel=1526741424071
