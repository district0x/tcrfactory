// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.router');
goog.require('cljs.core');
goog.require('bide.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('district.ui.router.events');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.router/router"))){
if(typeof district.ui.router.router !== 'undefined'){
} else {
district.ui.router.router = (new mount.core.DerefableState("#'district.ui.router/router"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.router.router;},new cljs.core.Symbol("district.ui.router","router","district.ui.router/router",1952212878,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.router","district.ui.router",540361048,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),"resources/public/js/compiled/out/district/ui/router.cljs",17,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.router.router)?district.ui.router.router.cljs$lang$test:null)])),"#'district.ui.router/router",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(2),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.router.start.call(null,new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.router.stop.call(null);
})], null));
} else {
if(typeof district.ui.router.router !== 'undefined'){
} else {
district.ui.router.router = mount.core.current_state.call(null,"#'district.ui.router/router");
}
}

new cljs.core.Var(function(){return district.ui.router.router;},new cljs.core.Symbol("district.ui.router","router","district.ui.router/router",1952212878,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.router","district.ui.router",540361048,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),"resources/public/js/compiled/out/district/ui/router.cljs",17,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.router.router)?district.ui.router.router.cljs$lang$test:null)]));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.router","default-route","district.ui.router/default-route",1973487348),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.router","routes","district.ui.router/routes",-1378595069),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.router","html5-hosts","district.ui.router/html5-hosts",252883466),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__23381_SHARP_){
return ((cljs.core.sequential_QMARK_.call(null,p1__23381_SHARP_)) || (typeof p1__23381_SHARP_ === 'string'));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.router","opts","district.ui.router/opts",2008978138),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router","default-route","district.ui.router/default-route",1973487348),new cljs.core.Keyword("district.ui.router","routes","district.ui.router/routes",-1378595069)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router","html5-hosts","district.ui.router/html5-hosts",252883466)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router","default-route","district.ui.router/default-route",1973487348),new cljs.core.Keyword("district.ui.router","routes","district.ui.router/routes",-1378595069)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router","html5-hosts","district.ui.router/html5-hosts",252883466)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router","default-route","district.ui.router/default-route",1973487348),new cljs.core.Keyword("district.ui.router","routes","district.ui.router/routes",-1378595069)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router","html5-hosts","district.ui.router/html5-hosts",252883466)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__23382){
return cljs.core.map_QMARK_.call(null,G__23382);
}),(function (G__23382){
return cljs.core.contains_QMARK_.call(null,G__23382,new cljs.core.Keyword(null,"default-route","default-route",-1491022475));
}),(function (G__23382){
return cljs.core.contains_QMARK_.call(null,G__23382,new cljs.core.Keyword(null,"routes","routes",457900162));
})], null),(function (G__23382){
return ((cljs.core.map_QMARK_.call(null,G__23382)) && (cljs.core.contains_QMARK_.call(null,G__23382,new cljs.core.Keyword(null,"default-route","default-route",-1491022475))) && (cljs.core.contains_QMARK_.call(null,G__23382,new cljs.core.Keyword(null,"routes","routes",457900162))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html5-hosts","html5-hosts",-862756763)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router","default-route","district.ui.router/default-route",1973487348),new cljs.core.Keyword("district.ui.router","routes","district.ui.router/routes",-1378595069)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-route","default-route",-1491022475),new cljs.core.Keyword(null,"routes","routes",457900162)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router","html5-hosts","district.ui.router/html5-hosts",252883466)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"default-route","default-route",-1491022475))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"routes","routes",457900162)))], null),null])),null));
district.ui.router.hostname_html5_host_QMARK_ = (function district$ui$router$hostname_html5_host_QMARK_(html5_hosts){
if(cljs.core.truth_(html5_hosts)){
return cljs.core.contains_QMARK_.call(null,(function (){var G__23383 = html5_hosts;
var G__23383__$1 = ((typeof html5_hosts === 'string')?clojure.string.split.call(null,G__23383,","):G__23383);
return cljs.core.set.call(null,G__23383__$1);

})(),(window["location"]["hostname"]));
} else {
return null;
}
});
district.ui.router.start = (function district$ui$router$start(p__23387){
var map__23388 = p__23387;
var map__23388__$1 = ((((!((map__23388 == null)))?(((((map__23388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23388):map__23388);
var opts = map__23388__$1;
var routes = cljs.core.get.call(null,map__23388__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var html5_QMARK_ = cljs.core.get.call(null,map__23388__$1,new cljs.core.Keyword(null,"html5?","html5?",-1008298421));
var default_route = cljs.core.get.call(null,map__23388__$1,new cljs.core.Keyword(null,"default-route","default-route",-1491022475));
var html5_hosts = cljs.core.get.call(null,map__23388__$1,new cljs.core.Keyword(null,"html5-hosts","html5-hosts",-862756763));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.router","opts","district.ui.router/opts",2008978138),opts);
} else {
}
} else {
}

var router = bide.core.router.call(null,routes);
var html5_QMARK___$1 = (function (){var or__3922__auto__ = html5_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return district.ui.router.hostname_html5_host_QMARK_.call(null,html5_hosts);
}
})();
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bide-router","bide-router",1278159734),router,new cljs.core.Keyword(null,"html5?","html5?",-1008298421),html5_QMARK___$1], null));
bide.core.start_BANG_.call(null,router,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"html5?","html5?",-1008298421),html5_QMARK___$1,new cljs.core.Keyword(null,"default","default",-1987822328),default_route,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),((function (router,html5_QMARK___$1,opts__$1,map__23388,map__23388__$1,opts,routes,html5_QMARK_,default_route,html5_hosts){
return (function (p1__23384_SHARP_,p2__23385_SHARP_,p3__23386_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.events","active-page-changed*","district.ui.router.events/active-page-changed*",-621979359),p1__23384_SHARP_,p2__23385_SHARP_,p3__23386_SHARP_], null));
});})(router,html5_QMARK___$1,opts__$1,map__23388,map__23388__$1,opts,routes,html5_QMARK_,default_route,html5_hosts))
], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.events","start","district.ui.router.events/start",294813903),opts__$1], null));

return opts__$1;
});
district.ui.router.stop = (function district$ui$router$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.events","stop","district.ui.router.events/stop",1227143414)], null));
});

//# sourceMappingURL=router.js.map?rel=1526715394340
