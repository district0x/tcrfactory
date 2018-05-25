// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.router.events');
goog.require('cljs.core');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.router.effects');
goog.require('district.ui.router.queries');
goog.require('re_frame.core');
district.ui.router.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","start","district.ui.router.events/start",294813903),district.ui.router.events.interceptors,(function (p__22961,p__22962){
var map__22963 = p__22961;
var map__22963__$1 = ((((!((map__22963 == null)))?(((((map__22963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22963):map__22963);
var db = cljs.core.get.call(null,map__22963__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22964 = p__22962;
var map__22967 = cljs.core.nth.call(null,vec__22964,(0),null);
var map__22967__$1 = ((((!((map__22967 == null)))?(((((map__22967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22967):map__22967);
var bide_router = cljs.core.get.call(null,map__22967__$1,new cljs.core.Keyword(null,"bide-router","bide-router",1278159734));
var html5_QMARK_ = cljs.core.get.call(null,map__22967__$1,new cljs.core.Keyword(null,"html5?","html5?",-1008298421));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.router.queries.assoc_html5.call(null,district.ui.router.queries.assoc_bide_router.call(null,db,bide_router),html5_QMARK_)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","active-page-changed*","district.ui.router.events/active-page-changed*",-621979359),district.ui.router.events.interceptors,(function (p__22970,p__22971){
var map__22972 = p__22970;
var map__22972__$1 = ((((!((map__22972 == null)))?(((((map__22972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22972):map__22972);
var db = cljs.core.get.call(null,map__22972__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22973 = p__22971;
var name = cljs.core.nth.call(null,vec__22973,(0),null);
var params = cljs.core.nth.call(null,vec__22973,(1),null);
var query = cljs.core.nth.call(null,vec__22973,(2),null);
if(cljs.core.truth_(district.ui.router.queries.bide_router.call(null,db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.events","active-page-changed","district.ui.router.events/active-page-changed",1896224719),name,params,query], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.events","do-nothing*","district.ui.router.events/do-nothing*",793329327)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.events","start","district.ui.router.events/start",294813903)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.events","active-page-changed","district.ui.router.events/active-page-changed",1896224719),name,params,query], null)], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","active-page-changed","district.ui.router.events/active-page-changed",1896224719),district.ui.router.events.interceptors,(function (p__22977,p__22978){
var map__22979 = p__22977;
var map__22979__$1 = ((((!((map__22979 == null)))?(((((map__22979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22979):map__22979);
var db = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22980 = p__22978;
var name = cljs.core.nth.call(null,vec__22980,(0),null);
var params = cljs.core.nth.call(null,vec__22980,(1),null);
var query = cljs.core.nth.call(null,vec__22980,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.router.queries.assoc_active_page.call(null,db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"query","query",-1288509510),query], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","do-nothing*","district.ui.router.events/do-nothing*",793329327),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","watch-active-page","district.ui.router.events/watch-active-page",1370983383),district.ui.router.events.interceptors,(function (p__22984,p__22985){
var map__22986 = p__22984;
var map__22986__$1 = ((((!((map__22986 == null)))?(((((map__22986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22986):map__22986);
var db = cljs.core.get.call(null,map__22986__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22987 = p__22985;
var watchers = cljs.core.nth.call(null,vec__22987,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.router.effects","watch-active-page","district.ui.router.effects/watch-active-page",2122612732),watchers], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","unwatch-active-page","district.ui.router.events/unwatch-active-page",-1025566521),district.ui.router.events.interceptors,(function (p__22991,p__22992){
var map__22993 = p__22991;
var map__22993__$1 = ((((!((map__22993 == null)))?(((((map__22993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22993):map__22993);
var db = cljs.core.get.call(null,map__22993__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22994 = p__22992;
var watchers = cljs.core.nth.call(null,vec__22994,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.router.effects","unwatch-active-page","district.ui.router.effects/unwatch-active-page",340395382),watchers], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","navigate","district.ui.router.events/navigate",1592824033),district.ui.router.events.interceptors,(function (p__22998,p__22999){
var map__23000 = p__22998;
var map__23000__$1 = ((((!((map__23000 == null)))?(((((map__23000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23000):map__23000);
var db = cljs.core.get.call(null,map__23000__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23001 = p__22999;
var name = cljs.core.nth.call(null,vec__23001,(0),null);
var params = cljs.core.nth.call(null,vec__23001,(1),null);
var query = cljs.core.nth.call(null,vec__23001,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.router.effects","navigate","district.ui.router.effects/navigate",841710880),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.router.queries.bide_router.call(null,db),name,params,query], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","replace","district.ui.router.events/replace",-1730277662),district.ui.router.events.interceptors,(function (p__23005,p__23006){
var map__23007 = p__23005;
var map__23007__$1 = ((((!((map__23007 == null)))?(((((map__23007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23007):map__23007);
var db = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23008 = p__23006;
var name = cljs.core.nth.call(null,vec__23008,(0),null);
var params = cljs.core.nth.call(null,vec__23008,(1),null);
var query = cljs.core.nth.call(null,vec__23008,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.router.effects","replace","district.ui.router.effects/replace",-970230989),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.router.queries.bide_router.call(null,db),name,params,query], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.router.events","stop","district.ui.router.events/stop",1227143414),district.ui.router.events.interceptors,(function (p__23012){
var map__23013 = p__23012;
var map__23013__$1 = ((((!((map__23013 == null)))?(((((map__23013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23013):map__23013);
var db = cljs.core.get.call(null,map__23013__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.router.queries.dissoc_router.call(null,db)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526715394054
