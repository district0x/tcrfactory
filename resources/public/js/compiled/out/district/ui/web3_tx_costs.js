// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_costs');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('district.ui.conversion_rates');
goog.require('district.ui.web3_tx_costs.events');
goog.require('district.ui.web3_tx');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.web3-tx-costs/web3-tx-costs"))){
if(typeof district.ui.web3_tx_costs.web3_tx_costs !== 'undefined'){
} else {
district.ui.web3_tx_costs.web3_tx_costs = (new mount.core.DerefableState("#'district.ui.web3-tx-costs/web3-tx-costs"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.web3_tx_costs.web3_tx_costs;},new cljs.core.Symbol("district.ui.web3-tx-costs","web3-tx-costs","district.ui.web3-tx-costs/web3-tx-costs",571762038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx-costs","district.ui.web3-tx-costs",-1627056526,null),new cljs.core.Symbol(null,"web3-tx-costs","web3-tx-costs",-1885907355,null),"resources/public/js/compiled/out/district/ui/web3_tx_costs.cljs",24,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx_costs.web3_tx_costs)?district.ui.web3_tx_costs.web3_tx_costs.cljs$lang$test:null)])),"#'district.ui.web3-tx-costs/web3-tx-costs",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(6),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.web3_tx_costs.start.call(null,new cljs.core.Keyword(null,"web3-tx-costs","web3-tx-costs",768528414).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.web3_tx_costs.stop.call(null);
})], null));
} else {
if(typeof district.ui.web3_tx_costs.web3_tx_costs !== 'undefined'){
} else {
district.ui.web3_tx_costs.web3_tx_costs = mount.core.current_state.call(null,"#'district.ui.web3-tx-costs/web3-tx-costs");
}
}

new cljs.core.Var(function(){return district.ui.web3_tx_costs.web3_tx_costs;},new cljs.core.Symbol("district.ui.web3-tx-costs","web3-tx-costs","district.ui.web3-tx-costs/web3-tx-costs",571762038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx-costs","district.ui.web3-tx-costs",-1627056526,null),new cljs.core.Symbol(null,"web3-tx-costs","web3-tx-costs",-1885907355,null),"resources/public/js/compiled/out/district/ui/web3_tx_costs.cljs",24,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx_costs.web3_tx_costs)?district.ui.web3_tx_costs.web3_tx_costs.cljs$lang$test:null)]));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx-costs","currencies","district.ui.web3-tx-costs/currencies",350744806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__25306){
return cljs.core.coll_QMARK_.call(null,G__25306);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))], null),null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx-costs","opts","district.ui.web3-tx-costs/opts",1609642824),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs","currencies","district.ui.web3-tx-costs/currencies",350744806)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs","currencies","district.ui.web3-tx-costs/currencies",350744806)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs","currencies","district.ui.web3-tx-costs/currencies",350744806)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__25307){
return cljs.core.map_QMARK_.call(null,G__25307);
})], null),(function (G__25307){
return cljs.core.map_QMARK_.call(null,G__25307);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"currencies","currencies",2003336181)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs","currencies","district.ui.web3-tx-costs/currencies",350744806)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null));
district.ui.web3_tx_costs.start = (function district$ui$web3_tx_costs$start(opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.web3-tx-costs","opts","district.ui.web3-tx-costs/opts",1609642824),opts);
} else {
}
} else {
}

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs.events","start","district.ui.web3-tx-costs.events/start",1964333489),opts], null));

return opts;
});
district.ui.web3_tx_costs.stop = (function district$ui$web3_tx_costs$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs.events","stop","district.ui.web3-tx-costs.events/stop",312730056)], null));
});

//# sourceMappingURL=web3_tx_costs.js.map?rel=1526741423977
