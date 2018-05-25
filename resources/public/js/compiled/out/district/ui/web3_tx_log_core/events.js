// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_log_core.events');
goog.require('cljs.core');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.web3_tx_log_core.queries');
goog.require('district.ui.web3_tx.events');
goog.require('district.ui.web3_tx.queries');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('district0x.re_frame.web3_fx');
goog.require('re_frame.core');
goog.require('cljs.spec.alpha');
district.ui.web3_tx_log_core.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","tx-hash","district.ui.web3-tx-log-core.events/tx-hash",133577278),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","start","district.ui.web3-tx-log-core.events/start",-235061467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log_core.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"web3-tx-log-core-localstorage","web3-tx-log-core-localstorage",-1016726041))], null),(function (p__24974){
var map__24975 = p__24974;
var map__24975__$1 = ((((!((map__24975 == null)))?(((((map__24975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24975):map__24975);
var db = cljs.core.get.call(null,map__24975__$1,new cljs.core.Keyword(null,"db","db",993250759));
var web3_tx_log_core_localstorage = cljs.core.get.call(null,map__24975__$1,new cljs.core.Keyword(null,"web3-tx-log-core-localstorage","web3-tx-log-core-localstorage",-1016726041));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx_log_core.queries.assoc_tx_hashes.call(null,db,(cljs.core.truth_(district.ui.web3_tx.queries.localstorage_disabled_QMARK_.call(null,db))?cljs.core.List.EMPTY:(function (){var or__3922__auto__ = district.ui.web3_tx_log_core.queries.tx_hashes.call(null,web3_tx_log_core_localstorage);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.List.EMPTY;
}
})())),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.web3-tx-log-core.events","add-remove-tx","district.ui.web3-tx-log-core.events/add-remove-tx",-417562358),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("district.ui.web3-tx.events","remove-tx","district.ui.web3-tx.events/remove-tx",106007566),null,new cljs.core.Keyword("district.ui.web3-tx.events","add-tx","district.ui.web3-tx.events/add-tx",-113800549),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log-core.events","add-remove-tx-fired","district.ui.web3-tx-log-core.events/add-remove-tx-fired",1766701962)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.web3-tx-log-core.events","clear-localstorage","district.ui.web3-tx-log-core.events/clear-localstorage",508739963),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.web3-tx.events","clear-localstorage","district.ui.web3-tx.events/clear-localstorage",1773224158),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log-core.events","clear-localstorage","district.ui.web3-tx-log-core.events/clear-localstorage",508739963)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.web3-tx-log-core.events","tx-hash","district.ui.web3-tx-log-core.events/tx-hash",133577278),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log-core.events","tx-hash-fired","district.ui.web3-tx-log-core.events/tx-hash-fired",827580783)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","add-remove-tx-fired","district.ui.web3-tx-log-core.events/add-remove-tx-fired",1766701962),district.ui.web3_tx_log_core.events.interceptors,(function (p__24977,p__24978){
var map__24979 = p__24977;
var map__24979__$1 = ((((!((map__24979 == null)))?(((((map__24979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24979):map__24979);
var db = cljs.core.get.call(null,map__24979__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24980 = p__24978;
var vec__24983 = cljs.core.nth.call(null,vec__24980,(0),null);
var event = cljs.core.nth.call(null,vec__24983,(0),null);
var tx_hash = cljs.core.nth.call(null,vec__24983,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((cljs.core._EQ_.call(null,event,new cljs.core.Keyword("district.ui.web3-tx.events","add-tx","district.ui.web3-tx.events/add-tx",-113800549)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log-core.events","add-tx-hash","district.ui.web3-tx-log-core.events/add-tx-hash",1229797287),tx_hash], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log-core.events","remove-tx-hash","district.ui.web3-tx-log-core.events/remove-tx-hash",70706164),tx_hash], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","tx-hash-fired","district.ui.web3-tx-log-core.events/tx-hash-fired",827580783),district.ui.web3_tx_log_core.events.interceptors,(function (p__24987,p__24988){
var map__24989 = p__24987;
var map__24989__$1 = ((((!((map__24989 == null)))?(((((map__24989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24989):map__24989);
var db = cljs.core.get.call(null,map__24989__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24990 = p__24988;
var vec__24993 = cljs.core.nth.call(null,vec__24990,(0),null);
var _ = cljs.core.nth.call(null,vec__24993,(0),null);
var map__24996 = cljs.core.nth.call(null,vec__24993,(1),null);
var map__24996__$1 = ((((!((map__24996 == null)))?(((((map__24996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24996):map__24996);
var tx_log = cljs.core.get.call(null,map__24996__$1,new cljs.core.Keyword(null,"tx-log","tx-log",1002405833));
var tx_hash = cljs.core.nth.call(null,vec__24993,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","set-tx","district.ui.web3-tx.events/set-tx",-2003211234),tx_hash,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-log","tx-log",1002405833),tx_log], null)], null)], null);
}));
district.ui.web3_tx_log_core.events.tx_event_fn = (function district$ui$web3_tx_log_core$events$tx_event_fn(action_fn){
return (function (p__24999,p__25000){
var map__25001 = p__24999;
var map__25001__$1 = ((((!((map__25001 == null)))?(((((map__25001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25001):map__25001);
var db = cljs.core.get.call(null,map__25001__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25002 = p__25000;
var tx_hash = cljs.core.nth.call(null,vec__25002,(0),null);
var new_db = action_fn.call(null,db,tx_hash);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),(cljs.core.truth_(district.ui.web3_tx.queries.localstorage_disabled_QMARK_.call(null,db))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"web3-tx-log-core-localstorage","web3-tx-log-core-localstorage",-1016726041),cljs.core.select_keys.call(null,new_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",1222964382)], null))], null)));
});
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","add-tx-hash","district.ui.web3-tx-log-core.events/add-tx-hash",1229797287),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log_core.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","tx-hash","district.ui.web3-tx-log-core.events/tx-hash",133577278))], null),district.ui.web3_tx_log_core.events.tx_event_fn.call(null,district.ui.web3_tx_log_core.queries.add_tx_hash));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","remove-tx-hash","district.ui.web3-tx-log-core.events/remove-tx-hash",70706164),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log_core.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","tx-hash","district.ui.web3-tx-log-core.events/tx-hash",133577278))], null),district.ui.web3_tx_log_core.events.tx_event_fn.call(null,district.ui.web3_tx_log_core.queries.remove_tx_hash));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","clear-localstorage","district.ui.web3-tx-log-core.events/clear-localstorage",508739963),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"web3-tx-log-core-localstorage","web3-tx-log-core-localstorage",-1016726041),null], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log-core.events","stop","district.ui.web3-tx-log-core.events/stop",658241596),district.ui.web3_tx_log_core.events.interceptors,(function (p__25006){
var map__25007 = p__25006;
var map__25007__$1 = ((((!((map__25007 == null)))?(((((map__25007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25007):map__25007);
var db = cljs.core.get.call(null,map__25007__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx_log_core.queries.dissoc_web3_tx_log_core.call(null,db),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.web3-tx-log-core.events","add-remove-tx","district.ui.web3-tx-log-core.events/add-remove-tx",-417562358)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.web3-tx-log-core.events","clear-localstorage","district.ui.web3-tx-log-core.events/clear-localstorage",508739963)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.web3-tx-log-core.events","tx-hash","district.ui.web3-tx-log-core.events/tx-hash",133577278)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526741423447
