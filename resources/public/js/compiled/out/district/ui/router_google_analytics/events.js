// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.router_google_analytics.events');
goog.require('cljs.core');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.router.events');
goog.require('district.ui.router.queries');
goog.require('re_frame.core');
district.ui.router_google_analytics.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router-google-analytics.events","start","district.ui.router-google-analytics.events/start",-927430072),district.ui.router_google_analytics.events.interceptors,(function (p__23041,p__23042){
var map__23043 = p__23041;
var map__23043__$1 = ((((!((map__23043 == null)))?(((((map__23043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23043):map__23043);
var db = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23044 = p__23042;
var map__23047 = cljs.core.nth.call(null,vec__23044,(0),null);
var map__23047__$1 = ((((!((map__23047 == null)))?(((((map__23047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23047):map__23047);
var enabled_QMARK_ = cljs.core.get.call(null,map__23047__$1,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
if(cljs.core.truth_(enabled_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.router-google-analytics.events","active-page-changed","district.ui.router-google-analytics.events/active-page-changed",384568648),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.router.events","active-page-changed","district.ui.router.events/active-page-changed",1896224719),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router-google-analytics.events","active-page-changed","district.ui.router-google-analytics.events/active-page-changed",384568648)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router-google-analytics.events","active-page-changed","district.ui.router-google-analytics.events/active-page-changed",384568648),district.ui.router_google_analytics.events.interceptors,(function (p__23050,p__23051){
var map__23052 = p__23050;
var map__23052__$1 = ((((!((map__23052 == null)))?(((((map__23052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23052):map__23052);
var db = cljs.core.get.call(null,map__23052__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23053 = p__23051;
var vec__23056 = cljs.core.nth.call(null,vec__23053,(0),null);
var _ = cljs.core.nth.call(null,vec__23056,(0),null);
var name = cljs.core.nth.call(null,vec__23056,(1),null);
var params = cljs.core.nth.call(null,vec__23056,(2),null);
var query = cljs.core.nth.call(null,vec__23056,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ga","page-view","ga/page-view",-1684523984),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.router.queries.resolve.call(null,db,name,params,query)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router-google-analytics.events","stop","district.ui.router-google-analytics.events/stop",1593746781),district.ui.router_google_analytics.events.interceptors,(function (p__23060){
var map__23061 = p__23060;
var map__23061__$1 = ((((!((map__23061 == null)))?(((((map__23061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23061):map__23061);
var db = cljs.core.get.call(null,map__23061__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.router-google-analytics.events","active-page-changed","district.ui.router-google-analytics.events/active-page-changed",384568648)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526715394109
