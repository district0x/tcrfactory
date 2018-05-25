// Compiled by ClojureScript 1.10.238 {}
goog.provide('district0x.re_frame.window_fx');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.events');
goog.require('re_frame.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.window-fx","dispatch","district0x.re-frame.window-fx/dispatch",2082145197),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.window-fx","debounce-ms","district0x.re-frame.window-fx/debounce-ms",-1588731691),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.window-fx","id","district0x.re-frame.window-fx/id",-927453528),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.window-fx","on-resize-args","district0x.re-frame.window-fx/on-resize-args",-1632137083),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.window-fx","dispatch","district0x.re-frame.window-fx/dispatch",2082145197)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.window-fx","debounce-ms","district0x.re-frame.window-fx/debounce-ms",-1588731691),new cljs.core.Keyword("district0x.re-frame.window-fx","id","district0x.re-frame.window-fx/id",-927453528)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.window-fx","dispatch","district0x.re-frame.window-fx/dispatch",2082145197)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.window-fx","debounce-ms","district0x.re-frame.window-fx/debounce-ms",-1588731691),new cljs.core.Keyword("district0x.re-frame.window-fx","id","district0x.re-frame.window-fx/id",-927453528)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__33483){
return cljs.core.map_QMARK_.call(null,G__33483);
}),(function (G__33483){
return cljs.core.contains_QMARK_.call(null,G__33483,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
})], null),(function (G__33483){
return ((cljs.core.map_QMARK_.call(null,G__33483)) && (cljs.core.contains_QMARK_.call(null,G__33483,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.window-fx","dispatch","district0x.re-frame.window-fx/dispatch",2082145197)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.window-fx","debounce-ms","district0x.re-frame.window-fx/debounce-ms",-1588731691),new cljs.core.Keyword("district0x.re-frame.window-fx","id","district0x.re-frame.window-fx/id",-927453528)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)))], null),null])));
district0x.re_frame.window_fx._STAR_listeners_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
district0x.re_frame.window_fx.setup_listener_BANG_ = (function district0x$re_frame$window_fx$setup_listener_BANG_(event_type,callback,id){
var key = goog.events.listen(window,event_type,((cljs.core.fn_QMARK_.call(null,callback))?callback:(function (){
return re_frame.core.dispatch.call(null,callback);
})));
if(cljs.core.truth_(id)){
return cljs.core.swap_BANG_.call(null,district0x.re_frame.window_fx._STAR_listeners_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,id], null),key);
} else {
return null;
}
});
district0x.re_frame.window_fx.stop_listener_BANG_ = (function district0x$re_frame$window_fx$stop_listener_BANG_(event_type,id){
var temp__5457__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,district0x.re_frame.window_fx._STAR_listeners_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,id], null));
if(cljs.core.truth_(temp__5457__auto__)){
var key = temp__5457__auto__;
goog.events.unlistenByKey(key);

return cljs.core.swap_BANG_.call(null,district0x.re_frame.window_fx._STAR_listeners_STAR_,cljs.core.update,event_type,((function (key,temp__5457__auto__){
return (function (p1__33484_SHARP_){
return cljs.core.dissoc.call(null,p1__33484_SHARP_,id);
});})(key,temp__5457__auto__))
);
} else {
return null;
}
});
district0x.re_frame.window_fx.on_resize = (function district0x$re_frame$window_fx$on_resize(p__33485,timer){
var map__33486 = p__33485;
var map__33486__$1 = ((((!((map__33486 == null)))?(((((map__33486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33486):map__33486);
var dispatch = cljs.core.get.call(null,map__33486__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var debounce_ms = cljs.core.get.call(null,map__33486__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
clearTimeout(cljs.core.deref.call(null,timer));

return cljs.core.reset_BANG_.call(null,timer,setTimeout(((function (map__33486,map__33486__$1,dispatch,debounce_ms){
return (function (){
return re_frame.core.dispatch.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null))));
});})(map__33486,map__33486__$1,dispatch,debounce_ms))
,(function (){var or__3922__auto__ = debounce_ms;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (166);
}
})()));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","on-resize","window/on-resize",2002922991),(function (p__33488){
var map__33489 = p__33488;
var map__33489__$1 = ((((!((map__33489 == null)))?(((((map__33489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33489):map__33489);
var config = map__33489__$1;
var id = cljs.core.get.call(null,map__33489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district0x.re-frame.window-fx","on-resize-args","district0x.re-frame.window-fx/on-resize-args",-1632137083),config);
} else {
}
} else {
}

var timer = cljs.core.atom.call(null,null);
return district0x.re_frame.window_fx.setup_listener_BANG_.call(null,goog.events.EventType.RESIZE,cljs.core.partial.call(null,district0x.re_frame.window_fx.on_resize,config,timer),id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","stop-on-resize","window/stop-on-resize",-1443337563),(function (p__33491){
var map__33492 = p__33491;
var map__33492__$1 = ((((!((map__33492 == null)))?(((((map__33492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33492):map__33492);
var id = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return district0x.re_frame.window_fx.stop_listener_BANG_.call(null,goog.events.EventType.RESIZE,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","on-focus","window/on-focus",1377402232),(function (p__33494){
var map__33495 = p__33494;
var map__33495__$1 = ((((!((map__33495 == null)))?(((((map__33495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33495):map__33495);
var dispatch = cljs.core.get.call(null,map__33495__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var id = cljs.core.get.call(null,map__33495__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return district0x.re_frame.window_fx.setup_listener_BANG_.call(null,goog.events.EventType.FOCUS,dispatch,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","stop-on-focus","window/stop-on-focus",-262759773),(function (p__33497){
var map__33498 = p__33497;
var map__33498__$1 = ((((!((map__33498 == null)))?(((((map__33498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33498):map__33498);
var id = cljs.core.get.call(null,map__33498__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return district0x.re_frame.window_fx.stop_listener_BANG_.call(null,goog.events.EventType.FOCUS,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","on-blur","window/on-blur",2138921531),(function (p__33500){
var map__33501 = p__33500;
var map__33501__$1 = ((((!((map__33501 == null)))?(((((map__33501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33501):map__33501);
var dispatch = cljs.core.get.call(null,map__33501__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var id = cljs.core.get.call(null,map__33501__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return district0x.re_frame.window_fx.setup_listener_BANG_.call(null,goog.events.EventType.BLUR,dispatch,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","stop-on-blur","window/stop-on-blur",800171750),(function (p__33503){
var map__33504 = p__33503;
var map__33504__$1 = ((((!((map__33504 == null)))?(((((map__33504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33504):map__33504);
var id = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return district0x.re_frame.window_fx.stop_listener_BANG_.call(null,goog.events.EventType.BLUR,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","on-hashchange","window/on-hashchange",199573848),(function (p__33506){
var map__33507 = p__33506;
var map__33507__$1 = ((((!((map__33507 == null)))?(((((map__33507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33507):map__33507);
var dispatch = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var id = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return district0x.re_frame.window_fx.setup_listener_BANG_.call(null,goog.events.EventType.HASHCHANGE,dispatch,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","stop-on-hashchange","window/stop-on-hashchange",709518707),(function (p__33509){
var map__33510 = p__33509;
var map__33510__$1 = ((((!((map__33510 == null)))?(((((map__33510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33510):map__33510);
var id = cljs.core.get.call(null,map__33510__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return district0x.re_frame.window_fx.stop_listener_BANG_.call(null,goog.events.EventType.HASHCHANGE,id);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("window","scroll-to","window/scroll-to",752794254),(function (p__33512){
var vec__33513 = p__33512;
var x = cljs.core.nth.call(null,vec__33513,(0),null);
var y = cljs.core.nth.call(null,vec__33513,(1),null);
return window.scrollTo(x,y);
}));

//# sourceMappingURL=window_fx.js.map?rel=1526705067790
