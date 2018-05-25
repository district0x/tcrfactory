// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx');
goog.require('cljs.core');
goog.require('akiroz.re_frame.storage');
goog.require('cljs.spec.alpha');
goog.require('district.ui.web3_tx.events');
goog.require('district.ui.web3');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.web3-tx/web3-tx"))){
if(typeof district.ui.web3_tx.web3_tx !== 'undefined'){
} else {
district.ui.web3_tx.web3_tx = (new mount.core.DerefableState("#'district.ui.web3-tx/web3-tx"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.web3_tx.web3_tx;},new cljs.core.Symbol("district.ui.web3-tx","web3-tx","district.ui.web3-tx/web3-tx",2016027813,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx","district.ui.web3-tx",736394948,null),new cljs.core.Symbol(null,"web3-tx","web3-tx",1838890477,null),"resources/public/js/compiled/out/district/ui/web3_tx.cljs",18,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx.web3_tx)?district.ui.web3_tx.web3_tx.cljs$lang$test:null)])),"#'district.ui.web3-tx/web3-tx",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(2),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.web3_tx.start.call(null,new cljs.core.Keyword(null,"web3-tx","web3-tx",198358950).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.web3_tx.stop.call(null);
})], null));
} else {
if(typeof district.ui.web3_tx.web3_tx !== 'undefined'){
} else {
district.ui.web3_tx.web3_tx = mount.core.current_state.call(null,"#'district.ui.web3-tx/web3-tx");
}
}

new cljs.core.Var(function(){return district.ui.web3_tx.web3_tx;},new cljs.core.Symbol("district.ui.web3-tx","web3-tx","district.ui.web3-tx/web3-tx",2016027813,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3-tx","district.ui.web3-tx",736394948,null),new cljs.core.Symbol(null,"web3-tx","web3-tx",1838890477,null),"resources/public/js/compiled/out/district/ui/web3_tx.cljs",18,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3_tx.web3_tx)?district.ui.web3_tx.web3_tx.cljs$lang$test:null)]));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx","disable-using-localstorage?","district.ui.web3-tx/disable-using-localstorage?",741102620),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx","opts","district.ui.web3-tx/opts",487540653),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx","disable-using-localstorage?","district.ui.web3-tx/disable-using-localstorage?",741102620)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx","disable-using-localstorage?","district.ui.web3-tx/disable-using-localstorage?",741102620)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx","disable-using-localstorage?","district.ui.web3-tx/disable-using-localstorage?",741102620)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__24918){
return cljs.core.map_QMARK_.call(null,G__24918);
})], null),(function (G__24918){
return cljs.core.map_QMARK_.call(null,G__24918);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disable-using-localstorage?","disable-using-localstorage?",375201508)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx","disable-using-localstorage?","district.ui.web3-tx/disable-using-localstorage?",741102620)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null));
district.ui.web3_tx.start = (function district$ui$web3_tx$start(opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.web3-tx","opts","district.ui.web3-tx/opts",487540653),opts);
} else {
}
} else {
}

akiroz.re_frame.storage.reg_co_fx_BANG_.call(null,new cljs.core.Keyword(null,"district.ui.web3-tx","district.ui.web3-tx",-904136579),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"web3-tx-localstorage","web3-tx-localstorage",902508782),new cljs.core.Keyword(null,"cofx","cofx",2013202907),new cljs.core.Keyword(null,"web3-tx-localstorage","web3-tx-localstorage",902508782)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","start","district.ui.web3-tx.events/start",-1189429764),opts], null));

return opts;
});
district.ui.web3_tx.stop = (function district$ui$web3_tx$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","stop","district.ui.web3-tx.events/stop",-828540895)], null));
});

//# sourceMappingURL=web3_tx.js.map?rel=1526741423293
