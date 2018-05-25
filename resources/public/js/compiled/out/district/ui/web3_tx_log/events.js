// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_log.events');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.web3_tx_costs.events');
goog.require('district.ui.web3_tx_log.queries');
goog.require('district.ui.web3_tx.events');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('re_frame.core');
district.ui.web3_tx_log.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx-log.events","settings","district.ui.web3-tx-log.events/settings",353445827),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log.events","start","district.ui.web3-tx-log.events/start",589540915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"web3-tx-log-localstorage","web3-tx-log-localstorage",1046983386))], null),(function (p__25274,p__25275){
var map__25276 = p__25274;
var map__25276__$1 = ((((!((map__25276 == null)))?(((((map__25276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25276):map__25276);
var db = cljs.core.get.call(null,map__25276__$1,new cljs.core.Keyword(null,"db","db",993250759));
var web3_tx_log_localstorage = cljs.core.get.call(null,map__25276__$1,new cljs.core.Keyword(null,"web3-tx-log-localstorage","web3-tx-log-localstorage",1046983386));
var vec__25277 = p__25275;
var map__25280 = cljs.core.nth.call(null,vec__25277,(0),null);
var map__25280__$1 = ((((!((map__25280 == null)))?(((((map__25280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25280):map__25280);
var disable_using_localstorage_QMARK_ = cljs.core.get.call(null,map__25280__$1,new cljs.core.Keyword(null,"disable-using-localstorage?","disable-using-localstorage?",375201508));
var tx_costs_currencies = cljs.core.get.call(null,map__25280__$1,new cljs.core.Keyword(null,"tx-costs-currencies","tx-costs-currencies",-2004931670));
var open_on_tx_hash_QMARK_ = cljs.core.get.call(null,map__25280__$1,new cljs.core.Keyword(null,"open-on-tx-hash?","open-on-tx-hash?",-1349756795));
var settings = (cljs.core.truth_(disable_using_localstorage_QMARK_)?cljs.core.PersistentArrayMap.EMPTY:district.ui.web3_tx_log.queries.settings.call(null,web3_tx_log_localstorage));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx_log.queries.assoc_opt.call(null,district.ui.web3_tx_log.queries.merge_settings.call(null,db,settings),new cljs.core.Keyword(null,"disable-using-localstorage?","disable-using-localstorage?",375201508),disable_using_localstorage_QMARK_),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs.events","add-currencies","district.ui.web3-tx-costs.events/add-currencies",1258387391),tx_costs_currencies], null)], null),(cljs.core.truth_(open_on_tx_hash_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.web3-tx-log.events","open-on-tx-hash","district.ui.web3-tx-log.events/open-on-tx-hash",-1608626057),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log.events","set-open","district.ui.web3-tx-log.events/set-open",-1528386719),true], null)], null)], null)], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log.events","set-open","district.ui.web3-tx-log.events/set-open",-1528386719),district.ui.web3_tx_log.events.interceptors,(function (p__25283,p__25284){
var map__25285 = p__25283;
var map__25285__$1 = ((((!((map__25285 == null)))?(((((map__25285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25285):map__25285);
var db = cljs.core.get.call(null,map__25285__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25286 = p__25284;
var open_QMARK_ = cljs.core.nth.call(null,vec__25286,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-log.events","set-settings","district.ui.web3-tx-log.events/set-settings",676824154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK_], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log.events","set-settings","district.ui.web3-tx-log.events/set-settings",676824154),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-tx-log.events","settings","district.ui.web3-tx-log.events/settings",353445827))], null),(function (p__25290,p__25291){
var map__25292 = p__25290;
var map__25292__$1 = ((((!((map__25292 == null)))?(((((map__25292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25292):map__25292);
var db = cljs.core.get.call(null,map__25292__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25293 = p__25291;
var settings = cljs.core.nth.call(null,vec__25293,(0),null);
var new_db = district.ui.web3_tx_log.queries.merge_settings.call(null,db,settings);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),(cljs.core.truth_(district.ui.web3_tx_log.queries.localstorage_disabled_QMARK_.call(null,db))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"web3-tx-log-localstorage","web3-tx-log-localstorage",1046983386),cljs.core.select_keys.call(null,new_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log.queries.db_key], null))], null)));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log.events","clear-localstorage","district.ui.web3-tx-log.events/clear-localstorage",262697141),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"web3-tx-log-localstorage","web3-tx-log-localstorage",1046983386),null], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-log.events","stop","district.ui.web3-tx-log.events/stop",1488161098),district.ui.web3_tx_log.events.interceptors,(function (p__25297){
var map__25298 = p__25297;
var map__25298__$1 = ((((!((map__25298 == null)))?(((((map__25298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25298):map__25298);
var db = cljs.core.get.call(null,map__25298__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx_log.queries.dissoc_web3_tx_log.call(null,db),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.web3-tx-log.events","open-on-tx-hash","district.ui.web3-tx-log.events/open-on-tx-hash",-1608626057)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526741423924
