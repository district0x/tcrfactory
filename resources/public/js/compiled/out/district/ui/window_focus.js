// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.window_focus');
goog.require('cljs.core');
goog.require('district.ui.window_focus.events');
goog.require('mount.core');
goog.require('re_frame.core');
if(cljs.core.not.call(null,mount.core.running_noop_QMARK_.call(null,"#'district.ui.window-focus/window-focus"))){
if(typeof district.ui.window_focus.window_focus !== 'undefined'){
} else {
district.ui.window_focus.window_focus = (new mount.core.DerefableState("#'district.ui.window-focus/window-focus"));
}

mount.core.mount_it.call(null,new cljs.core.Var(function(){return district.ui.window_focus.window_focus;},new cljs.core.Symbol("district.ui.window-focus","window-focus","district.ui.window-focus/window-focus",198103850,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.window-focus","district.ui.window-focus",-91522335,null),new cljs.core.Symbol(null,"window-focus","window-focus",-1302132801,null),"resources/public/js/compiled/out/district/ui/window_focus.cljs",23,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.window_focus.window_focus)?district.ui.window_focus.window_focus.cljs$lang$test:null)])),"#'district.ui.window-focus/window-focus",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"order","order",-1254677256),(8),new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return district.ui.window_focus.start.call(null,new cljs.core.Keyword(null,"window-focus","window-focus",1352302968).cljs$core$IFn$_invoke$arity$1(mount.core.args.call(null)));
}),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
return district.ui.window_focus.stop.call(null);
})], null));
} else {
if(typeof district.ui.window_focus.window_focus !== 'undefined'){
} else {
district.ui.window_focus.window_focus = mount.core.current_state.call(null,"#'district.ui.window-focus/window-focus");
}
}

new cljs.core.Var(function(){return district.ui.window_focus.window_focus;},new cljs.core.Symbol("district.ui.window-focus","window-focus","district.ui.window-focus/window-focus",198103850,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.window-focus","district.ui.window-focus",-91522335,null),new cljs.core.Symbol(null,"window-focus","window-focus",-1302132801,null),"resources/public/js/compiled/out/district/ui/window_focus.cljs",23,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(district.ui.window_focus.window_focus)?district.ui.window_focus.window_focus.cljs$lang$test:null)]));
district.ui.window_focus.start = (function district$ui$window_focus$start(opts){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.window-focus.events","start","district.ui.window-focus.events/start",-148933475),opts], null));

return opts;
});
district.ui.window_focus.stop = (function district$ui$window_focus$stop(){
return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.window-focus.events","stop","district.ui.window-focus.events/stop",-1801335100)], null));
});

//# sourceMappingURL=window_focus.js.map?rel=1526705067816
