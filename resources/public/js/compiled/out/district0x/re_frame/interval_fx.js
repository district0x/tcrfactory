// Compiled by ClojureScript 1.10.238 {}
goog.provide('district0x.re_frame.interval_fx');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.interval-fx","dispatch","district0x.re-frame.interval-fx/dispatch",-1133514054),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.interval-fx","ms","district0x.re-frame.interval-fx/ms",1500487172),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.interval-fx","id","district0x.re-frame.interval-fx/id",329449181),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.interval-fx","dispatch-interval-args","district0x.re-frame.interval-fx/dispatch-interval-args",1223340971),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.interval-fx","dispatch","district0x.re-frame.interval-fx/dispatch",-1133514054),new cljs.core.Keyword("district0x.re-frame.interval-fx","ms","district0x.re-frame.interval-fx/ms",1500487172),new cljs.core.Keyword("district0x.re-frame.interval-fx","id","district0x.re-frame.interval-fx/id",329449181)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.interval-fx","dispatch","district0x.re-frame.interval-fx/dispatch",-1133514054),new cljs.core.Keyword("district0x.re-frame.interval-fx","ms","district0x.re-frame.interval-fx/ms",1500487172),new cljs.core.Keyword("district0x.re-frame.interval-fx","id","district0x.re-frame.interval-fx/id",329449181)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__33301){
return cljs.core.map_QMARK_.call(null,G__33301);
}),(function (G__33301){
return cljs.core.contains_QMARK_.call(null,G__33301,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
}),(function (G__33301){
return cljs.core.contains_QMARK_.call(null,G__33301,new cljs.core.Keyword(null,"ms","ms",-1152709733));
}),(function (G__33301){
return cljs.core.contains_QMARK_.call(null,G__33301,new cljs.core.Keyword(null,"id","id",-1388402092));
})], null),(function (G__33301){
return ((cljs.core.map_QMARK_.call(null,G__33301)) && (cljs.core.contains_QMARK_.call(null,G__33301,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009))) && (cljs.core.contains_QMARK_.call(null,G__33301,new cljs.core.Keyword(null,"ms","ms",-1152709733))) && (cljs.core.contains_QMARK_.call(null,G__33301,new cljs.core.Keyword(null,"id","id",-1388402092))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.interval-fx","dispatch","district0x.re-frame.interval-fx/dispatch",-1133514054),new cljs.core.Keyword("district0x.re-frame.interval-fx","ms","district0x.re-frame.interval-fx/ms",1500487172),new cljs.core.Keyword("district0x.re-frame.interval-fx","id","district0x.re-frame.interval-fx/id",329449181)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"ms","ms",-1152709733))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092)))], null),null])));
district0x.re_frame.interval_fx.registered_keys = cljs.core.atom.call(null,null);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-interval","dispatch-interval",-1358911768),(function (p__33302){
var map__33303 = p__33302;
var map__33303__$1 = ((((!((map__33303 == null)))?(((((map__33303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33303):map__33303);
var config = map__33303__$1;
var dispatch = cljs.core.get.call(null,map__33303__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var ms = cljs.core.get.call(null,map__33303__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var id = cljs.core.get.call(null,map__33303__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district0x.re-frame.interval-fx","dispatch-interval-args","district0x.re-frame.interval-fx/dispatch-interval-args",1223340971),config);
} else {
}
} else {
}

var interval_id = setInterval(((function (map__33303,map__33303__$1,config,dispatch,ms,id){
return (function (){
return re_frame.core.dispatch.call(null,dispatch);
});})(map__33303,map__33303__$1,config,dispatch,ms,id))
,ms);
return cljs.core.swap_BANG_.call(null,district0x.re_frame.interval_fx.registered_keys,cljs.core.assoc,id,interval_id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"clear-interval","clear-interval",-68384603),(function (p__33305){
var map__33306 = p__33305;
var map__33306__$1 = ((((!((map__33306 == null)))?(((((map__33306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33306):map__33306);
var id = cljs.core.get.call(null,map__33306__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,district0x.re_frame.interval_fx.registered_keys),id);
if(cljs.core.truth_(temp__5457__auto__)){
var interval_id = temp__5457__auto__;
clearInterval(interval_id);

return cljs.core.swap_BANG_.call(null,district0x.re_frame.interval_fx.registered_keys,cljs.core.dissoc,id);
} else {
return null;
}
}));

//# sourceMappingURL=interval_fx.js.map?rel=1526705067581
