// Compiled by ClojureScript 1.10.238 {}
goog.provide('district0x.re_frame.spec_interceptors');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
district0x.re_frame.spec_interceptors.throw_event_error = (function district0x$re_frame$spec_interceptors$throw_event_error(event,untrimmed_event,spec){
throw (new Error(["Invalid input into event",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = untrimmed_event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return event;
}
})()),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.explain_str.call(null,spec,event))].join('')));
});
district0x.re_frame.spec_interceptors.validate_db = (function district0x$re_frame$spec_interceptors$validate_db(spec){
return re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"validate-db","validate-db",860614219),new cljs.core.Keyword(null,"after","after",594996914),(function (p__32392){
var map__32393 = p__32392;
var map__32393__$1 = ((((!((map__32393 == null)))?(((((map__32393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32393):map__32393);
var context = map__32393__$1;
var map__32394 = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
var map__32394__$1 = ((((!((map__32394 == null)))?(((((map__32394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32394):map__32394);
var event = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword(null,"event","event",301435442));
var untrimmed_event = cljs.core.get.call(null,map__32394__$1,new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075));
var map__32395 = cljs.core.get.call(null,map__32393__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var map__32395__$1 = ((((!((map__32395 == null)))?(((((map__32395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32395):map__32395);
var db = cljs.core.get.call(null,map__32395__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.spec.alpha.check_asserts_QMARK_.call(null);
if(and__3911__auto__){
var and__3911__auto____$1 = db;
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,spec,db));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),db);

throw (new Error(["DB is invalid after event",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = untrimmed_event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return event;
}
})()),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.spec.alpha.explain_str.call(null,spec,db),(0),(1000)))].join('')));
} else {
}

return context;
}));
});
district0x.re_frame.spec_interceptors.validate_args = (function district0x$re_frame$spec_interceptors$validate_args(spec){
return re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"validate-args","validate-args",-1163552269),new cljs.core.Keyword(null,"before","before",-1633692388),(function (p__32399){
var map__32400 = p__32399;
var map__32400__$1 = ((((!((map__32400 == null)))?(((((map__32400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32400):map__32400);
var context = map__32400__$1;
var map__32401 = cljs.core.get.call(null,map__32400__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
var map__32401__$1 = ((((!((map__32401 == null)))?(((((map__32401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32401):map__32401);
var event = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword(null,"event","event",301435442));
var untrimmed_event = cljs.core.get.call(null,map__32401__$1,new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075));
if(((cljs.spec.alpha.check_asserts_QMARK_.call(null)) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,spec,event))))){
return district0x.re_frame.spec_interceptors.throw_event_error.call(null,event,untrimmed_event,spec);
} else {
return context;
}
}));
});
district0x.re_frame.spec_interceptors.validate_first_arg = (function district0x$re_frame$spec_interceptors$validate_first_arg(spec){
return re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"validate-args","validate-args",-1163552269),new cljs.core.Keyword(null,"before","before",-1633692388),(function (p__32404){
var map__32405 = p__32404;
var map__32405__$1 = ((((!((map__32405 == null)))?(((((map__32405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32405):map__32405);
var context = map__32405__$1;
var map__32406 = cljs.core.get.call(null,map__32405__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
var map__32406__$1 = ((((!((map__32406 == null)))?(((((map__32406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32406):map__32406);
var event = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword(null,"event","event",301435442));
var untrimmed_event = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075));
if(((cljs.spec.alpha.check_asserts_QMARK_.call(null)) && (cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,spec,cljs.core.first.call(null,event)))))){
return district0x.re_frame.spec_interceptors.throw_event_error.call(null,cljs.core.first.call(null,event),untrimmed_event,spec);
} else {
return context;
}
}));
});
district0x.re_frame.spec_interceptors.conform_args = (function district0x$re_frame$spec_interceptors$conform_args(spec){
return re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"conform-args","conform-args",-1912951843),new cljs.core.Keyword(null,"before","before",-1633692388),(function (p__32409){
var map__32410 = p__32409;
var map__32410__$1 = ((((!((map__32410 == null)))?(((((map__32410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32410):map__32410);
var context = map__32410__$1;
var map__32411 = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
var map__32411__$1 = ((((!((map__32411 == null)))?(((((map__32411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32411):map__32411);
var event = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword(null,"event","event",301435442));
var untrimmed_event = cljs.core.get.call(null,map__32411__$1,new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075));
var conformed = cljs.spec.alpha.conform.call(null,spec,event);
if(cljs.core._EQ_.call(null,conformed,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119))){
return district0x.re_frame.spec_interceptors.throw_event_error.call(null,event,untrimmed_event,spec);
} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),cljs.core.merge,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conformed], null),new cljs.core.Keyword("district0x.re-frame.spec-interceptors","unconformed-event","district0x.re-frame.spec-interceptors/unconformed-event",-1190216501),event], null)));
}
}));
});

//# sourceMappingURL=spec_interceptors.js.map?rel=1526705066706
