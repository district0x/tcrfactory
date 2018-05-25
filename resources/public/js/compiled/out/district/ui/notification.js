// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.notification');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('cljs.spec.alpha');
goog.require('district.ui.notification.events');
goog.require('district.ui.notification.spec');
goog.require('mount.core');
goog.require('re_frame.core');
district.ui.notification.start = (function district$ui$notification$start(opts){
var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-show-duration","default-show-duration",-1858404648),(5000),new cljs.core.Keyword(null,"default-hide-duration","default-hide-duration",659917260),(2000)], null),opts);
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.notification.spec","opts","district.ui.notification.spec/opts",-179777607),opts__$1);
} else {
}
} else {
}

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.notification.events","start","district.ui.notification.events/start",-1965496723),opts__$1], null));

return opts__$1;
});
district.ui.notification.stop = (function district$ui$notification$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.notification.events","stop","district.ui.notification.events/stop",-1604361836)], null));
});
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.notification/district-ui-notification"))){
if(typeof district.ui.notification.district_ui_notification !== 'undefined'){
} else {
district.ui.notification.district_ui_notification = (new mount.core.DerefableState("#'district.ui.notification/district-ui-notification"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.notification.district_ui_notification;},new cljs.core.Symbol("district.ui.notification","district-ui-notification","district.ui.notification/district-ui-notification",-1367513855,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.notification","district.ui.notification",1188210661,null),new cljs.core.Symbol(null,"district-ui-notification","district-ui-notification",1369575844,null),"resources/public/js/compiled/out/district/ui/notification.cljs",35,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.notification.district_ui_notification)?district.ui.notification.district_ui_notification.cljs$lang$test:null)])),"#'district.ui.notification/district-ui-notification",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(12),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.notification.start.call(null,new cljs.core.Keyword(null,"notification","notification",-222338233).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.notification.stop.call(null);
})], null));
} else {
if(typeof district.ui.notification.district_ui_notification !== 'undefined'){
} else {
district.ui.notification.district_ui_notification = mount.core.current_state.call(null,"#'district.ui.notification/district-ui-notification");
}
}

new cljs.core.Var(function(){return district.ui.notification.district_ui_notification;},new cljs.core.Symbol("district.ui.notification","district-ui-notification","district.ui.notification/district-ui-notification",-1367513855,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.notification","district.ui.notification",1188210661,null),new cljs.core.Symbol(null,"district-ui-notification","district-ui-notification",1369575844,null),"resources/public/js/compiled/out/district/ui/notification.cljs",35,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.notification.district_ui_notification)?district.ui.notification.district_ui_notification.cljs$lang$test:null)]));

//# sourceMappingURL=notification.js.map?rel=1526705068945
