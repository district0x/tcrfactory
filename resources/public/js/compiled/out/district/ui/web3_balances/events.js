// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_balances.events');
goog.require('cljs.core');
goog.require('cljs_web3.core');
goog.require('cljs_web3.eth');
goog.require('cljs.spec.alpha');
goog.require('day8.re_frame.async_flow_fx');
goog.require('district.ui.web3_balances.queries');
goog.require('district.ui.web3.events');
goog.require('district.ui.web3.queries');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('district0x.re_frame.web3_fx');
goog.require('re_frame.core');
district.ui.web3_balances.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
district.ui.web3_balances.events.abi_balance_of = JSON.parse("[{\"constant\":true,\"inputs\":[{\"name\":\"who\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}]");
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","contract","district.ui.web3-balances.events/contract",642819149),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","watch?","district.ui.web3-balances.events/watch?",543763940),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","address","district.ui.web3-balances.events/address",-1994713978),new cljs.core.Symbol("cljs-web3.core","address?","cljs-web3.core/address?",-1543623079,null),cljs_web3.core.address_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","item","district.ui.web3-balances.events/item",-400863090),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","address","district.ui.web3-balances.events/address",-1994713978)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","watch?","district.ui.web3-balances.events/watch?",543763940),new cljs.core.Keyword("district.ui.web3-balances.events","contract","district.ui.web3-balances.events/contract",642819149)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","address","district.ui.web3-balances.events/address",-1994713978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","watch?","district.ui.web3-balances.events/watch?",543763940),new cljs.core.Keyword("district.ui.web3-balances.events","contract","district.ui.web3-balances.events/contract",642819149)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34054){
return cljs.core.map_QMARK_.call(null,G__34054);
}),(function (G__34054){
return cljs.core.contains_QMARK_.call(null,G__34054,new cljs.core.Keyword(null,"address","address",559499426));
})], null),(function (G__34054){
return ((cljs.core.map_QMARK_.call(null,G__34054)) && (cljs.core.contains_QMARK_.call(null,G__34054,new cljs.core.Keyword(null,"address","address",559499426))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch?","watch?",-1976903168),new cljs.core.Keyword(null,"contract","contract",798152745)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","address","district.ui.web3-balances.events/address",-1994713978)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","watch?","district.ui.web3-balances.events/watch?",543763940),new cljs.core.Keyword("district.ui.web3-balances.events","contract","district.ui.web3-balances.events/contract",642819149)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"address","address",559499426)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","items","district.ui.web3-balances.events/items",1170232862),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district.ui.web3-balances.events","item","district.ui.web3-balances.events/item",-400863090)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","item","district.ui.web3-balances.events/item",-400863090),new cljs.core.Keyword("district.ui.web3-balances.events","item","district.ui.web3-balances.events/item",-400863090),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__34055){
return cljs.core.coll_QMARK_.call(null,G__34055);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district.ui.web3-balances.events","item","district.ui.web3-balances.events/item",-400863090))], null),null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","start","district.ui.web3-balances.events/start",-233718505),district.ui.web3_balances.events.interceptors,(function (p__34056,p__34057){
var map__34058 = p__34056;
var map__34058__$1 = ((((!((map__34058 == null)))?(((((map__34058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34058):map__34058);
var db = cljs.core.get.call(null,map__34058__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34059 = p__34057;
var map__34062 = cljs.core.nth.call(null,vec__34059,(0),null);
var map__34062__$1 = ((((!((map__34062 == null)))?(((((map__34062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34062):map__34062);
var contracts = cljs.core.get.call(null,map__34062__$1,new cljs.core.Keyword(null,"contracts","contracts",905357673));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_balances.queries.merge_web3_balances.call(null,db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"balances","balances",-1047003019),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"contracts","contracts",905357673),contracts,new cljs.core.Keyword(null,"watch-ids","watch-ids",1654940812),cljs.core.PersistentVector.EMPTY], null))], null);
}));
district.ui.web3_balances.events.contract__GT_instance = (function district$ui$web3_balances$events$contract__GT_instance(db,contract){
var balance_key = district.ui.web3_balances.queries.balance_key.call(null,db,contract);
if(cljs.core.truth_(cljs_web3.core.address_QMARK_.call(null,balance_key))){
return cljs_web3.eth.contract_at.call(null,district.ui.web3.queries.web3.call(null,db),district.ui.web3_balances.events.abi_balance_of,balance_key);
} else {
if(cljs.core.truth_((balance_key["address"]))){
return balance_key;
} else {
return null;

}
}
});
district.ui.web3_balances.events.item__GT_watch_id = (function district$ui$web3_balances$events$item__GT_watch_id(db,p__34065){
var map__34066 = p__34065;
var map__34066__$1 = ((((!((map__34066 == null)))?(((((map__34066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34066):map__34066);
var address = cljs.core.get.call(null,map__34066__$1,new cljs.core.Keyword(null,"address","address",559499426));
var contract = cljs.core.get.call(null,map__34066__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [address,district.ui.web3_balances.queries.balance_key.call(null,db,contract)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","load-balances","district.ui.web3-balances.events/load-balances",-867191028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_balances.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","items","district.ui.web3-balances.events/items",1170232862))], null),(function (p__34068,p__34069){
var map__34070 = p__34068;
var map__34070__$1 = ((((!((map__34070 == null)))?(((((map__34070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34070):map__34070);
var db = cljs.core.get.call(null,map__34070__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34071 = p__34069;
var items = cljs.core.nth.call(null,vec__34071,(0),null);
var watch_ids = cljs.core.map.call(null,district.ui.web3_balances.events.item__GT_watch_id,cljs.core.filter.call(null,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),items));
var temp__5455__auto__ = district.ui.web3.queries.web3.call(null,db);
if(cljs.core.truth_(temp__5455__auto__)){
var web3 = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_balances.queries.concat_watch_ids.call(null,db,watch_ids),new cljs.core.Keyword("web3","get-balances","web3/get-balances",-152059131),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"addresses","addresses",-559529694),(function (){var iter__4292__auto__ = ((function (web3,temp__5455__auto__,watch_ids,map__34070,map__34070__$1,db,vec__34071,items){
return (function district$ui$web3_balances$events$iter__34075(s__34076){
return (new cljs.core.LazySeq(null,((function (web3,temp__5455__auto__,watch_ids,map__34070,map__34070__$1,db,vec__34071,items){
return (function (){
var s__34076__$1 = s__34076;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34076__$1);
if(temp__5457__auto__){
var s__34076__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34076__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__34076__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__34078 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__34077 = (0);
while(true){
if((i__34077 < size__4291__auto__)){
var map__34079 = cljs.core._nth.call(null,c__4290__auto__,i__34077);
var map__34079__$1 = ((((!((map__34079 == null)))?(((((map__34079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34079):map__34079);
var item = map__34079__$1;
var address = cljs.core.get.call(null,map__34079__$1,new cljs.core.Keyword(null,"address","address",559499426));
var watch_QMARK_ = cljs.core.get.call(null,map__34079__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var contract = cljs.core.get.call(null,map__34079__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
cljs.core.chunk_append.call(null,b__34078,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var and__3911__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return district.ui.web3_balances.events.item__GT_watch_id.call(null,db,item);
} else {
return and__3911__auto__;
}
})(),new cljs.core.Keyword(null,"instance","instance",-2121349050),district.ui.web3_balances.events.contract__GT_instance.call(null,db,contract),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),watch_QMARK_,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","set-balance","district.ui.web3-balances.events/set-balance",1402327480),item], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","balance-load-failed","district.ui.web3-balances.events/balance-load-failed",1047307535)], null)], null));

var G__34083 = (i__34077 + (1));
i__34077 = G__34083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34078),district$ui$web3_balances$events$iter__34075.call(null,cljs.core.chunk_rest.call(null,s__34076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34078),null);
}
} else {
var map__34081 = cljs.core.first.call(null,s__34076__$2);
var map__34081__$1 = ((((!((map__34081 == null)))?(((((map__34081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34081):map__34081);
var item = map__34081__$1;
var address = cljs.core.get.call(null,map__34081__$1,new cljs.core.Keyword(null,"address","address",559499426));
var watch_QMARK_ = cljs.core.get.call(null,map__34081__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var contract = cljs.core.get.call(null,map__34081__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var and__3911__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return district.ui.web3_balances.events.item__GT_watch_id.call(null,db,item);
} else {
return and__3911__auto__;
}
})(),new cljs.core.Keyword(null,"instance","instance",-2121349050),district.ui.web3_balances.events.contract__GT_instance.call(null,db,contract),new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),watch_QMARK_,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","set-balance","district.ui.web3-balances.events/set-balance",1402327480),item], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","balance-load-failed","district.ui.web3-balances.events/balance-load-failed",1047307535)], null)], null),district$ui$web3_balances$events$iter__34075.call(null,cljs.core.rest.call(null,s__34076__$2)));
}
} else {
return null;
}
break;
}
});})(web3,temp__5455__auto__,watch_ids,map__34070,map__34070__$1,db,vec__34071,items))
,null,null));
});})(web3,temp__5455__auto__,watch_ids,map__34070,map__34070__$1,db,vec__34071,items))
;
return iter__4292__auto__.call(null,items);
})()], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","do-nothing*","district.ui.web3-balances.events/do-nothing*",-1865582089)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3.events","web3-created","district.ui.web3.events/web3-created",-602267634)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","load-balances","district.ui.web3-balances.events/load-balances",-867191028),items], null)], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","do-nothing*","district.ui.web3-balances.events/do-nothing*",-1865582089),(function (){
return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","set-balance","district.ui.web3-balances.events/set-balance",1402327480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_balances.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","item","district.ui.web3-balances.events/item",-400863090))], null),(function (p__34084,p__34085){
var map__34086 = p__34084;
var map__34086__$1 = ((((!((map__34086 == null)))?(((((map__34086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34086):map__34086);
var db = cljs.core.get.call(null,map__34086__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34087 = p__34085;
var map__34090 = cljs.core.nth.call(null,vec__34087,(0),null);
var map__34090__$1 = ((((!((map__34090 == null)))?(((((map__34090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34090):map__34090);
var address = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"address","address",559499426));
var contract = cljs.core.get.call(null,map__34090__$1,new cljs.core.Keyword(null,"contract","contract",798152745));
var balance = cljs.core.nth.call(null,vec__34087,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_balances.queries.assoc_balance.call(null,db,address,contract,balance)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","balance-load-failed","district.ui.web3-balances.events/balance-load-failed",1047307535),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","stop-watching","district.ui.web3-balances.events/stop-watching",-1262652529),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_balances.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","items","district.ui.web3-balances.events/items",1170232862))], null),(function (p__34093,p__34094){
var map__34095 = p__34093;
var map__34095__$1 = ((((!((map__34095 == null)))?(((((map__34095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34095):map__34095);
var db = cljs.core.get.call(null,map__34095__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34096 = p__34094;
var items = cljs.core.nth.call(null,vec__34096,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","stop-watching","web3/stop-watching",-1379727666),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.map.call(null,district.ui.web3_balances.events.item__GT_watch_id,items)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","stop-watching-all","district.ui.web3-balances.events/stop-watching-all",-1427522504),district.ui.web3_balances.events.interceptors,(function (p__34100){
var map__34101 = p__34100;
var map__34101__$1 = ((((!((map__34101 == null)))?(((((map__34101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34101):map__34101);
var db = cljs.core.get.call(null,map__34101__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","stop-watching","web3/stop-watching",-1379727666),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),district.ui.web3_balances.queries.watch_ids.call(null,db)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-balances.events","stop","district.ui.web3-balances.events/stop",665220398),district.ui.web3_balances.events.interceptors,(function (p__34103){
var map__34104 = p__34103;
var map__34104__$1 = ((((!((map__34104 == null)))?(((((map__34104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34104):map__34104);
var db = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_balances.queries.dissoc_web3_balances.call(null,db),new cljs.core.Keyword("web3","stop-watching","web3/stop-watching",-1379727666),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),district.ui.web3_balances.queries.watch_ids.call(null,db)], null)], null));
}));

//# sourceMappingURL=events.js.map?rel=1526705068806
