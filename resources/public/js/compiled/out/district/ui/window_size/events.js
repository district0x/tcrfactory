// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.window_size.events');
goog.require('cljs.core');
goog.require('district0x.re_frame.window_fx');
goog.require('district.ui.window_size.queries');
goog.require('re_frame.core');
district.ui.window_size.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.window-size.events","start","district.ui.window-size.events/start",-98596496),district.ui.window_size.events.interceptors,(function (p__35520,p__35521){
var map__35522 = p__35520;
var map__35522__$1 = ((((!((map__35522 == null)))?(((((map__35522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35522):map__35522);
var db = cljs.core.get.call(null,map__35522__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35523 = p__35521;
var map__35526 = cljs.core.nth.call(null,vec__35523,(0),null);
var map__35526__$1 = ((((!((map__35526 == null)))?(((((map__35526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35526):map__35526);
var breakpoints = cljs.core.get.call(null,map__35526__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.call(null,map__35526__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.window_size.queries.assoc_window_size.call(null,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),breakpoints,new cljs.core.Keyword(null,"size","size",1098693007),district.ui.window_size.queries.calculate_size.call(null,db,window.innerWidth,breakpoints)], null)),new cljs.core.Keyword("window","on-resize","window/on-resize",2002922991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.window-size.events","window-resized","district.ui.window-size.events/window-resized",-1527420278)], null),new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167),(function (){var or__3922__auto__ = debounce_ms;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (166);
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.window-size.events","on-resize","district.ui.window-size.events/on-resize",-1727372998)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.window-size.events","window-resized","district.ui.window-size.events/window-resized",-1527420278),district.ui.window_size.events.interceptors,(function (p__35529,p__35530){
var map__35531 = p__35529;
var map__35531__$1 = ((((!((map__35531 == null)))?(((((map__35531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35531):map__35531);
var db = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35532 = p__35530;
var width = cljs.core.nth.call(null,vec__35532,(0),null);
var height = cljs.core.nth.call(null,vec__35532,(1),null);
var new_size = district.ui.window_size.queries.calculate_size.call(null,db,width);
var old_size = district.ui.window_size.queries.size.call(null,db);
if(cljs.core._EQ_.call(null,new_size,old_size)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.window_size.queries.assoc_size.call(null,db,new_size),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.window-size.events","size-changed","district.ui.window-size.events/size-changed",-1073095632),new_size,old_size], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.window-size.events","size-changed","district.ui.window-size.events/size-changed",-1073095632),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.window-size.events","stop","district.ui.window-size.events/stop",-1884310891),district.ui.window_size.events.interceptors,(function (p__35536){
var map__35537 = p__35536;
var map__35537__$1 = ((((!((map__35537 == null)))?(((((map__35537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35537):map__35537);
var db = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.window_size.queries.dissoc_window_size.call(null,db),new cljs.core.Keyword("window","stop-on-resize","window/stop-on-resize",-1443337563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.window-size.events","on-resize","district.ui.window-size.events/on-resize",-1727372998)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526705069884
