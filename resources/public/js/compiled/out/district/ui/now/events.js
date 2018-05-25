// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.now.events');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('district.ui.now.queries');
goog.require('district0x.re_frame.interval_fx');
goog.require('re_frame.core');
district.ui.now.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.now.events","start","district.ui.now.events/start",304949608),district.ui.now.events.interceptors,(function (p__22820,p__22821){
var map__22822 = p__22820;
var map__22822__$1 = ((((!((map__22822 == null)))?(((((map__22822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22822):map__22822);
var db = cljs.core.get.call(null,map__22822__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22823 = p__22821;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.now.queries.assoc_now.call(null,db,cljs_time.core.now.call(null)),new cljs.core.Keyword(null,"dispatch-interval","dispatch-interval",-1358911768),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.now.events","update-now","district.ui.now.events/update-now",-1143689945)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.now.events","update-now","district.ui.now.events/update-now",-1143689945),new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000)], null)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.now.events","update-now","district.ui.now.events/update-now",-1143689945),district.ui.now.events.interceptors,(function (p__22827){
var map__22828 = p__22827;
var map__22828__$1 = ((((!((map__22828 == null)))?(((((map__22828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22828):map__22828);
var db = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22830 = district.ui.now.queries.delta_now.call(null,db);
var delta = cljs.core.nth.call(null,vec__22830,(0),null);
var qualifier = cljs.core.nth.call(null,vec__22830,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.now.queries.assoc_now.call(null,db,(((delta == null))?cljs_time.core.now.call(null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"after","after",594996914),qualifier))?cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.millis.call(null,delta)):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"before","before",-1633692388),qualifier))?cljs_time.core.minus.call(null,cljs_time.core.now.call(null),cljs_time.core.millis.call(null,delta)):null))))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.now.events","set-now","district.ui.now.events/set-now",-1105673418),district.ui.now.events.interceptors,(function (p__22833,p__22834){
var map__22835 = p__22833;
var map__22835__$1 = ((((!((map__22835 == null)))?(((((map__22835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22835):map__22835);
var db = cljs.core.get.call(null,map__22835__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22836 = p__22834;
var date_time = cljs.core.nth.call(null,vec__22836,(0),null);
var now = cljs_time.core.now.call(null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.now.queries.assoc_delta_now.call(null,db,(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,date_time,now))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.in_millis.call(null,cljs_time.core.interval.call(null,now,date_time)),new cljs.core.Keyword(null,"after","after",594996914)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.in_millis.call(null,cljs_time.core.interval.call(null,date_time,now)),new cljs.core.Keyword(null,"before","before",-1633692388)], null)))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.now.events","increment-now","district.ui.now.events/increment-now",1423544215),district.ui.now.events.interceptors,(function (p__22840,p__22841){
var map__22842 = p__22840;
var map__22842__$1 = ((((!((map__22842 == null)))?(((((map__22842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22842):map__22842);
var db = cljs.core.get.call(null,map__22842__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22843 = p__22841;
var millis = cljs.core.nth.call(null,vec__22843,(0),null);
var vec__22847 = district.ui.now.queries.delta_now.call(null,db);
var delta = cljs.core.nth.call(null,vec__22847,(0),null);
var qualifier = cljs.core.nth.call(null,vec__22847,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.now.queries.assoc_delta_now.call(null,db,(((delta == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [millis,new cljs.core.Keyword(null,"after","after",594996914)], null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"after","after",594996914),qualifier))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(delta + millis),new cljs.core.Keyword(null,"after","after",594996914)], null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"before","before",-1633692388),qualifier))?(function (){var diff = (delta - millis);
if((diff > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diff,new cljs.core.Keyword(null,"before","before",-1633692388)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.abs(diff),new cljs.core.Keyword(null,"after","after",594996914)], null);
}
})():null))))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.now.events","stop","district.ui.now.events/stop",1202918013),district.ui.now.events.interceptors,(function (p__22850){
var map__22851 = p__22850;
var map__22851__$1 = ((((!((map__22851 == null)))?(((((map__22851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22851):map__22851);
var db = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.now.queries.dissoc_now.call(null,db),new cljs.core.Keyword(null,"clear-interval","clear-interval",-68384603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.now.events","update-now","district.ui.now.events/update-now",-1143689945)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526713902299
