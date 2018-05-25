// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_sync_now.events');
goog.require('cljs.core');
goog.require('cljs_web3.eth');
goog.require('cljs_web3.evm');
goog.require('cljsjs.web3');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.now.events');
goog.require('district.ui.web3_sync_now.queries');
goog.require('district.ui.web3.events');
goog.require('district.ui.logging.events');
goog.require('district.ui.web3.queries');
goog.require('district.web3_utils');
goog.require('district0x.re_frame.web3_fx');
goog.require('re_frame.core');
district.ui.web3_sync_now.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-sync-now.events","increment-now","district.ui.web3-sync-now.events/increment-now",-522118437),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_sync_now.events.interceptors], null),(function (p__27513,p__27514){
var map__27515 = p__27513;
var map__27515__$1 = ((((!((map__27515 == null)))?(((((map__27515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27515):map__27515);
var db = cljs.core.get.call(null,map__27515__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27516 = p__27514;
var seconds = cljs.core.nth.call(null,vec__27516,(0),null);
var web3 = district.ui.web3.queries.web3.call(null,db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.now.events","increment-now","district.ui.now.events/increment-now",1423544215),(seconds * (1000))], null),new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs_web3.evm.increase_time_BANG_,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seconds], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.logging.events","success","district.ui.logging.events/success",-2145086252),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","increment-now","district.ui.web3-sync-now.events/increment-now",-522118437)], null)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.logging.events","error","district.ui.logging.events/error",-1492500618),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","increment-now","district.ui.web3-sync-now.events/increment-now",-522118437)], null)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-sync-now.events","block-number","district.ui.web3-sync-now.events/block-number",-720510878),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_sync_now.events.interceptors], null),(function (p__27520){
var map__27521 = p__27520;
var map__27521__$1 = ((((!((map__27521 == null)))?(((((map__27521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27521):map__27521);
var db = cljs.core.get.call(null,map__27521__$1,new cljs.core.Keyword(null,"db","db",993250759));
var web3 = district.ui.web3.queries.web3.call(null,db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs_web3.eth.block_number,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","get-block","district.ui.web3-sync-now.events/get-block",586229490)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.logging.events","error","district.ui.logging.events/error",-1492500618),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","block-number","district.ui.web3-sync-now.events/block-number",-720510878)], null)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-sync-now.events","get-block","district.ui.web3-sync-now.events/get-block",586229490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_sync_now.events.interceptors], null),(function (p__27523,p__27524){
var map__27525 = p__27523;
var map__27525__$1 = ((((!((map__27525 == null)))?(((((map__27525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27525):map__27525);
var db = cljs.core.get.call(null,map__27525__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27526 = p__27524;
var number = cljs.core.nth.call(null,vec__27526,(0),null);
var web3 = district.ui.web3.queries.web3.call(null,db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs_web3.eth.get_block,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [number], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","set-now","district.ui.web3-sync-now.events/set-now",-238005070)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.logging.events","error","district.ui.logging.events/error",-1492500618),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","get-block","district.ui.web3-sync-now.events/get-block",586229490)], null)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-sync-now.events","set-now","district.ui.web3-sync-now.events/set-now",-238005070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_sync_now.events.interceptors], null),(function (p__27530,p__27531){
var map__27532 = p__27530;
var map__27532__$1 = ((((!((map__27532 == null)))?(((((map__27532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27532):map__27532);
var db = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27533 = p__27531;
var block = cljs.core.nth.call(null,vec__27533,(0),null);
var web3 = district.ui.web3.queries.web3.call(null,db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.now.events","set-now","district.ui.now.events/set-now",-1105673418),district.web3_utils.web3_time__GT_date_time.call(null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(block))], null),new cljs.core.Keyword("log","success","log/success",1890753102),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","set-now","district.ui.web3-sync-now.events/set-now",-238005070)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-sync-now.events","start","district.ui.web3-sync-now.events/start",-568095524),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_sync_now.events.interceptors], null),(function (p__27537){
var map__27538 = p__27537;
var map__27538__$1 = ((((!((map__27538 == null)))?(((((map__27538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27538):map__27538);
var db = cljs.core.get.call(null,map__27538__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),district.ui.web3_sync_now.queries.db_key,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.web3.events","web3-created","district.ui.web3.events/web3-created",-602267634),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-sync-now.events","block-number","district.ui.web3-sync-now.events/block-number",-720510878)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-sync-now.events","stop","district.ui.web3-sync-now.events/stop",2075370753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_sync_now.events.interceptors], null),(function (p__27540){
var map__27541 = p__27540;
var map__27541__$1 = ((((!((map__27541 == null)))?(((((map__27541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27541):map__27541);
var db = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),district.ui.web3_sync_now.queries.db_key], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526794840739
