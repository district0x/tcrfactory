// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.window_focus.events');
goog.require('cljs.core');
goog.require('district0x.re_frame.window_fx');
goog.require('district.ui.window_focus.queries');
goog.require('re_frame.core');
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.window-focus.events","start","district.ui.window-focus.events/start",-148933475),(function (p__33518){
var map__33519 = p__33518;
var map__33519__$1 = ((((!((map__33519 == null)))?(((((map__33519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33519):map__33519);
var db = cljs.core.get.call(null,map__33519__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.window_focus.queries.assoc_focused.call(null,db,true),new cljs.core.Keyword("window","on-focus","window/on-focus",1377402232),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.window-focus.events","focus-changed","district.ui.window-focus.events/focus-changed",362699037),true], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.window-focus.events","on-focus","district.ui.window-focus.events/on-focus",854844342)], null),new cljs.core.Keyword("window","on-blur","window/on-blur",2138921531),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.window-focus.events","focus-changed","district.ui.window-focus.events/focus-changed",362699037),false], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.window-focus.events","on-blur","district.ui.window-focus.events/on-blur",618066685)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.window-focus.events","focus-changed","district.ui.window-focus.events/focus-changed",362699037),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (p__33521,p__33522){
var map__33523 = p__33521;
var map__33523__$1 = ((((!((map__33523 == null)))?(((((map__33523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33523):map__33523);
var db = cljs.core.get.call(null,map__33523__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33524 = p__33522;
var focused_QMARK_ = cljs.core.nth.call(null,vec__33524,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.window_focus.queries.assoc_focused.call(null,db,focused_QMARK_)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.window-focus.events","stop","district.ui.window-focus.events/stop",-1801335100),(function (p__33528){
var map__33529 = p__33528;
var map__33529__$1 = ((((!((map__33529 == null)))?(((((map__33529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33529):map__33529);
var db = cljs.core.get.call(null,map__33529__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.window_focus.queries.dissoc_window_focus.call(null,db),new cljs.core.Keyword("window","stop-on-focus","window/stop-on-focus",-262759773),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.window-focus.events","on-focus","district.ui.window-focus.events/on-focus",854844342)], null),new cljs.core.Keyword("window","stop-on-blur","window/stop-on-blur",800171750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.window-focus.events","on-blur","district.ui.window-focus.events/on-blur",618066685)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526705067806
