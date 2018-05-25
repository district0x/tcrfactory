// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3.events');
goog.require('cljs.core');
goog.require('cljs_web3.core');
goog.require('district.ui.web3.queries');
goog.require('re_frame.core');
district.ui.web3.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3.events","start","district.ui.web3.events/start",-1546732167),district.ui.web3.events.interceptors,(function (_,p__32361){
var vec__32362 = p__32361;
var map__32365 = cljs.core.nth.call(null,vec__32362,(0),null);
var map__32365__$1 = ((((!((map__32365 == null)))?(((((map__32365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32365):map__32365);
var opts = map__32365__$1;
var wait_for_inject_ms = cljs.core.get.call(null,map__32365__$1,new cljs.core.Keyword(null,"wait-for-inject-ms","wait-for-inject-ms",1834123065));
if(cljs.core.truth_((window["web3"]))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3.events","create-web3","district.ui.web3.events/create-web3",-1549574127),opts], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(function (){var or__3922__auto__ = wait_for_inject_ms;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1500);
}
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3.events","create-web3","district.ui.web3.events/create-web3",-1549574127),opts], null)], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3.events","create-web3","district.ui.web3.events/create-web3",-1549574127),district.ui.web3.events.interceptors,(function (p__32367,p__32368){
var map__32369 = p__32367;
var map__32369__$1 = ((((!((map__32369 == null)))?(((((map__32369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32369):map__32369);
var db = cljs.core.get.call(null,map__32369__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32370 = p__32368;
var map__32373 = cljs.core.nth.call(null,vec__32370,(0),null);
var map__32373__$1 = ((((!((map__32373 == null)))?(((((map__32373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32373):map__32373);
var url = cljs.core.get.call(null,map__32373__$1,new cljs.core.Keyword(null,"url","url",276297046));
var web3_injected_QMARK_ = cljs.core.boolean$.call(null,(window["web3"]));
var web3 = ((web3_injected_QMARK_)?(new (window["Web3"])(cljs_web3.core.current_provider.call(null,(window["web3"])))):cljs_web3.core.create_web3.call(null,url));
var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"web3-injected?","web3-injected?",1976369053),web3_injected_QMARK_], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3.queries.assoc_web3.call(null,db,result),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3.events","web3-created","district.ui.web3.events/web3-created",-602267634),result], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3.events","web3-created","district.ui.web3.events/web3-created",-602267634),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3.events","stop","district.ui.web3.events/stop",-636389728),district.ui.web3.events.interceptors,(function (p__32376){
var map__32377 = p__32376;
var map__32377__$1 = ((((!((map__32377 == null)))?(((((map__32377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32377):map__32377);
var db = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5457__auto___32379 = district.ui.web3.queries.web3.call(null,db);
if(cljs.core.truth_(temp__5457__auto___32379)){
var web3_32380 = temp__5457__auto___32379;
cljs_web3.core.reset.call(null,web3_32380);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3.queries.dissoc_web3.call(null,db)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526705066672
