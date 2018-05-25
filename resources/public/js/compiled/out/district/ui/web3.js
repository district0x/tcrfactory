// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljsjs.web3');
goog.require('district.ui.web3.events');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.web3/web3"))){
if(typeof district.ui.web3.web3 !== 'undefined'){
} else {
district.ui.web3.web3 = (new mount.core.DerefableState("#'district.ui.web3/web3"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.web3.web3;},new cljs.core.Symbol("district.ui.web3","web3","district.ui.web3/web3",-612987864,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3","district.ui.web3",-756605735,null),new cljs.core.Symbol(null,"web3","web3",761079887,null),"resources/public/js/compiled/out/district/ui/web3.cljs",15,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3.web3)?district.ui.web3.web3.cljs$lang$test:null)])),"#'district.ui.web3/web3",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(3),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.web3.start.call(null,new cljs.core.Keyword(null,"web3","web3",-879451640).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.web3.stop.call(null);
})], null));
} else {
if(typeof district.ui.web3.web3 !== 'undefined'){
} else {
district.ui.web3.web3 = mount.core.current_state.call(null,"#'district.ui.web3/web3");
}
}

new cljs.core.Var(function(){return district.ui.web3.web3;},new cljs.core.Symbol("district.ui.web3","web3","district.ui.web3/web3",-612987864,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.web3","district.ui.web3",-756605735,null),new cljs.core.Symbol(null,"web3","web3",761079887,null),"resources/public/js/compiled/out/district/ui/web3.cljs",15,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.web3.web3)?district.ui.web3.web3.cljs$lang$test:null)]));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3","url","district.ui.web3/url",-899456657),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3","wait-for-inject-ms","district.ui.web3/wait-for-inject-ms",-1218825374),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3","opts","district.ui.web3/opts",-615061488),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3","url","district.ui.web3/url",-899456657)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3","wait-for-inject-ms","district.ui.web3/wait-for-inject-ms",-1218825374)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3","url","district.ui.web3/url",-899456657)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3","wait-for-inject-ms","district.ui.web3/wait-for-inject-ms",-1218825374)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32740){
return cljs.core.map_QMARK_.call(null,G__32740);
}),(function (G__32740){
return cljs.core.contains_QMARK_.call(null,G__32740,new cljs.core.Keyword(null,"url","url",276297046));
})], null),(function (G__32740){
return ((cljs.core.map_QMARK_.call(null,G__32740)) && (cljs.core.contains_QMARK_.call(null,G__32740,new cljs.core.Keyword(null,"url","url",276297046))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wait-for-inject-ms","wait-for-inject-ms",1834123065)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3","url","district.ui.web3/url",-899456657)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3","wait-for-inject-ms","district.ui.web3/wait-for-inject-ms",-1218825374)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"url","url",276297046)))], null),null])));
district.ui.web3.start = (function district$ui$web3$start(opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.web3","opts","district.ui.web3/opts",-615061488),opts);
} else {
}
} else {
}

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3.events","start","district.ui.web3.events/start",-1546732167),opts], null));

return opts;
});
district.ui.web3.stop = (function district$ui$web3$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3.events","stop","district.ui.web3.events/stop",-636389728)], null));
});

//# sourceMappingURL=web3.js.map?rel=1526705066900
