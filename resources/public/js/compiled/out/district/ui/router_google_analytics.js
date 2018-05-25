// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.router_google_analytics');
goog.require('cljs.core');
goog.require('district.ui.router_google_analytics.events');
goog.require('district.ui.router');
goog.require('mount.core');
goog.require('re_frame.core');
district.ui.router_google_analytics.debug_QMARK_ = goog.DEBUG;
district.ui.router_google_analytics.start = (function district$ui$router_google_analytics$start(opts){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router-google-analytics.events","start","district.ui.router-google-analytics.events/start",-927430072),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(district.ui.router_google_analytics.debug_QMARK_)], null),opts)], null));

return opts;
});
district.ui.router_google_analytics.stop = (function district$ui$router_google_analytics$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router-google-analytics.events","stop","district.ui.router-google-analytics.events/stop",1593746781)], null));
});
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.router-google-analytics/router-google-analytics"))){
if(typeof district.ui.router_google_analytics.router_google_analytics !== 'undefined'){
} else {
district.ui.router_google_analytics.router_google_analytics = (new mount.core.DerefableState("#'district.ui.router-google-analytics/router-google-analytics"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.router_google_analytics.router_google_analytics;},new cljs.core.Symbol("district.ui.router-google-analytics","router-google-analytics","district.ui.router-google-analytics/router-google-analytics",-1439153388,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.router-google-analytics","district.ui.router-google-analytics",1972475660,null),new cljs.core.Symbol(null,"router-google-analytics","router-google-analytics",-1845478640,null),"resources/public/js/compiled/out/district/ui/router_google_analytics.cljs",34,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.router_google_analytics.router_google_analytics)?district.ui.router_google_analytics.router_google_analytics.cljs$lang$test:null)])),"#'district.ui.router-google-analytics/router-google-analytics",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(4),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.router_google_analytics.start.call(null,new cljs.core.Keyword(null,"router-google-analytics","router-google-analytics",808957129).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.router_google_analytics.stop.call(null);
})], null));
} else {
if(typeof district.ui.router_google_analytics.router_google_analytics !== 'undefined'){
} else {
district.ui.router_google_analytics.router_google_analytics = mount.core.current_state.call(null,"#'district.ui.router-google-analytics/router-google-analytics");
}
}

new cljs.core.Var(function(){return district.ui.router_google_analytics.router_google_analytics;},new cljs.core.Symbol("district.ui.router-google-analytics","router-google-analytics","district.ui.router-google-analytics/router-google-analytics",-1439153388,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.router-google-analytics","district.ui.router-google-analytics",1972475660,null),new cljs.core.Symbol(null,"router-google-analytics","router-google-analytics",-1845478640,null),"resources/public/js/compiled/out/district/ui/router_google_analytics.cljs",34,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.router_google_analytics.router_google_analytics)?district.ui.router_google_analytics.router_google_analytics.cljs$lang$test:null)]));

//# sourceMappingURL=router_google_analytics.js.map?rel=1526715394377
