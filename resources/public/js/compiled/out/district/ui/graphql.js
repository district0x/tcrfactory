// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.graphql');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('district.ui.graphql.events');
goog.require('mount.core');
goog.require('re_frame.core');
district.ui.graphql.start = (function district$ui$graphql$start(opts){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","start","district.ui.graphql.events/start",-1690163725),opts], null));

return opts;
});
district.ui.graphql.stop = (function district$ui$graphql$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","stop","district.ui.graphql.events/stop",-1315561462)], null));
});
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.graphql/district-ui-graphql"))){
if(typeof district.ui.graphql.district_ui_graphql !== 'undefined'){
} else {
district.ui.graphql.district_ui_graphql = (new mount.core.DerefableState("#'district.ui.graphql/district-ui-graphql"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.graphql.district_ui_graphql;},new cljs.core.Symbol("district.ui.graphql","district-ui-graphql","district.ui.graphql/district-ui-graphql",728654483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.graphql","district.ui.graphql",851603937,null),new cljs.core.Symbol(null,"district-ui-graphql","district-ui-graphql",1878501308,null),"resources/public/js/compiled/out/district/ui/graphql.cljs",30,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.graphql.district_ui_graphql)?district.ui.graphql.district_ui_graphql.cljs$lang$test:null)])),"#'district.ui.graphql/district-ui-graphql",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(2),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.graphql.start.call(null,new cljs.core.Keyword(null,"graphql","graphql",-218428840).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.graphql.stop.call(null);
})], null));
} else {
if(typeof district.ui.graphql.district_ui_graphql !== 'undefined'){
} else {
district.ui.graphql.district_ui_graphql = mount.core.current_state.call(null,"#'district.ui.graphql/district-ui-graphql");
}
}

new cljs.core.Var(function(){return district.ui.graphql.district_ui_graphql;},new cljs.core.Symbol("district.ui.graphql","district-ui-graphql","district.ui.graphql/district-ui-graphql",728654483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.graphql","district.ui.graphql",851603937,null),new cljs.core.Symbol(null,"district-ui-graphql","district-ui-graphql",1878501308,null),"resources/public/js/compiled/out/district/ui/graphql.cljs",30,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.graphql.district_ui_graphql)?district.ui.graphql.district_ui_graphql.cljs$lang$test:null)]));

//# sourceMappingURL=graphql.js.map?rel=1526705064801
