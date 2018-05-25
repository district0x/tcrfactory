// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.reagent_render');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('cljs.spec.alpha');
goog.require('district.ui.reagent_render.events');
goog.require('district.ui.reagent_render.spec');
goog.require('district.ui.reagent_render.utils');
goog.require('mount.core');
goog.require('re_frame.core');
district.ui.reagent_render.start = (function district$ui$reagent_render$start(opts){
if(cljs.core.truth_(((cljs.spec.alpha._STAR_compile_asserts_STAR_)?((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.reagent-render.spec","opts","district.ui.reagent-render.spec/opts",1986931699),opts):opts):opts))){
} else {
throw (new Error("Assert failed: (s/assert :district.ui.reagent-render.spec/opts opts)"));
}

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.reagent-render.events","start","district.ui.reagent-render.events/start",-1610965993),opts], null));

return opts;
});
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.reagent-render/district-ui-reagent-render"))){
if(typeof district.ui.reagent_render.district_ui_reagent_render !== 'undefined'){
} else {
district.ui.reagent_render.district_ui_reagent_render = (new mount.core.DerefableState("#'district.ui.reagent-render/district-ui-reagent-render"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.reagent_render.district_ui_reagent_render;},new cljs.core.Symbol("district.ui.reagent-render","district-ui-reagent-render","district.ui.reagent-render/district-ui-reagent-render",-1038609977,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.reagent-render","district.ui.reagent-render",-944807583,null),new cljs.core.Symbol(null,"district-ui-reagent-render","district-ui-reagent-render",-1624952198,null),"resources/public/js/compiled/out/district/ui/reagent_render.cljs",37,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.reagent_render.district_ui_reagent_render)?district.ui.reagent_render.district_ui_reagent_render.cljs$lang$test:null)])),"#'district.ui.reagent-render/district-ui-reagent-render",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(1),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.reagent_render.start.call(null,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return new cljs.core.Keyword(null,"stopped","stopped",-1490414640);
})], null));
} else {
if(typeof district.ui.reagent_render.district_ui_reagent_render !== 'undefined'){
} else {
district.ui.reagent_render.district_ui_reagent_render = mount.core.current_state.call(null,"#'district.ui.reagent-render/district-ui-reagent-render");
}
}

new cljs.core.Var(function(){return district.ui.reagent_render.district_ui_reagent_render;},new cljs.core.Symbol("district.ui.reagent-render","district-ui-reagent-render","district.ui.reagent-render/district-ui-reagent-render",-1038609977,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.reagent-render","district.ui.reagent-render",-944807583,null),new cljs.core.Symbol(null,"district-ui-reagent-render","district-ui-reagent-render",-1624952198,null),"resources/public/js/compiled/out/district/ui/reagent_render.cljs",37,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.reagent_render.district_ui_reagent_render)?district.ui.reagent_render.district_ui_reagent_render.cljs$lang$test:null)]));
district.ui.reagent_render.rerender = (function district$ui$reagent_render$rerender(){
return district.ui.reagent_render.utils.re_render.call(null,cljs.core.deref.call(null,district.ui.reagent_render.district_ui_reagent_render));
});

//# sourceMappingURL=reagent_render.js.map?rel=1526705063250
