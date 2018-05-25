// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.router.effects');
goog.require('cljs.core');
goog.require('bide.core');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.router.effects","navigate","district.ui.router.effects/navigate",841710880),(function (p__22812){
var vec__22813 = p__22812;
var seq__22814 = cljs.core.seq.call(null,vec__22813);
var args = seq__22814;
return cljs.core.apply.call(null,bide.core.navigate_BANG_,args);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.router.effects","replace","district.ui.router.effects/replace",-970230989),(function (p__22816){
var vec__22817 = p__22816;
var seq__22818 = cljs.core.seq.call(null,vec__22817);
var args = seq__22818;
return cljs.core.apply.call(null,bide.core.replace_BANG_,args);
}));
district.ui.router.effects.post_event_callback_fn = (function district$ui$router$effects$post_event_callback_fn(opts){
return (function (event_v){
var watched_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts);
var watched_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(opts);
var watched_query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(opts);
var vec__22820 = event_v;
var event_name = cljs.core.nth.call(null,vec__22820,(0),null);
var name = cljs.core.nth.call(null,vec__22820,(1),null);
var params = cljs.core.nth.call(null,vec__22820,(2),null);
var query = cljs.core.nth.call(null,vec__22820,(3),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword("district.ui.router.events","active-page-changed","district.ui.router.events/active-page-changed",1896224719),event_name);
if(and__3911__auto__){
var and__3911__auto____$1 = (function (){var or__3922__auto__ = (watched_name == null);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (((((watched_name instanceof cljs.core.Keyword)) || (typeof watched_name === 'string'))) && (cljs.core._EQ_.call(null,watched_name,name)));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = ((cljs.core.sequential_QMARK_.call(null,watched_name)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,watched_name),name)));
if(or__3922__auto____$2){
return or__3922__auto____$2;
} else {
var and__3911__auto____$1 = cljs.core.fn_QMARK_.call(null,watched_name);
if(and__3911__auto____$1){
return watched_name.call(null,name);
} else {
return and__3911__auto____$1;
}
}
}
}
})();
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = (function (){var or__3922__auto__ = (watched_params == null);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = ((cljs.core.map_QMARK_.call(null,watched_params)) && (cljs.core._EQ_.call(null,watched_params,params)));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var and__3911__auto____$2 = cljs.core.fn_QMARK_.call(null,watched_params);
if(and__3911__auto____$2){
return watched_params.call(null,params);
} else {
return and__3911__auto____$2;
}
}
}
})();
if(cljs.core.truth_(and__3911__auto____$2)){
var or__3922__auto__ = (watched_query == null);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = ((cljs.core.map_QMARK_.call(null,watched_query)) && (cljs.core._EQ_.call(null,watched_query,query)));
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var and__3911__auto____$3 = cljs.core.fn_QMARK_.call(null,watched_query);
if(and__3911__auto____$3){
return watched_query.call(null,query);
} else {
return and__3911__auto____$3;
}
}
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
re_frame.core.dispatch.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(opts)),name,params,query));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236).cljs$core$IFn$_invoke$arity$1(opts))){
var seq__22823 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236).cljs$core$IFn$_invoke$arity$1(opts)));
var chunk__22824 = null;
var count__22825 = (0);
var i__22826 = (0);
while(true){
if((i__22826 < count__22825)){
var dispatch_v = cljs.core._nth.call(null,chunk__22824,i__22826);
re_frame.core.dispatch.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,dispatch_v),name,params,query));


var G__22827 = seq__22823;
var G__22828 = chunk__22824;
var G__22829 = count__22825;
var G__22830 = (i__22826 + (1));
seq__22823 = G__22827;
chunk__22824 = G__22828;
count__22825 = G__22829;
i__22826 = G__22830;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22823);
if(temp__5457__auto__){
var seq__22823__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22823__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22823__$1);
var G__22831 = cljs.core.chunk_rest.call(null,seq__22823__$1);
var G__22832 = c__4319__auto__;
var G__22833 = cljs.core.count.call(null,c__4319__auto__);
var G__22834 = (0);
seq__22823 = G__22831;
chunk__22824 = G__22832;
count__22825 = G__22833;
i__22826 = G__22834;
continue;
} else {
var dispatch_v = cljs.core.first.call(null,seq__22823__$1);
re_frame.core.dispatch.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,dispatch_v),name,params,query));


var G__22835 = cljs.core.next.call(null,seq__22823__$1);
var G__22836 = null;
var G__22837 = (0);
var G__22838 = (0);
seq__22823 = G__22835;
chunk__22824 = G__22836;
count__22825 = G__22837;
i__22826 = G__22838;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.router.effects","id","district.ui.router.effects/id",-1203087715),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement.call(null,cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.router.effects","watcher","district.ui.router.effects/watcher",-1829825458),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.effects","id","district.ui.router.effects/id",-1203087715)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.effects","id","district.ui.router.effects/id",-1203087715)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__22839){
return cljs.core.map_QMARK_.call(null,G__22839);
}),(function (G__22839){
return cljs.core.contains_QMARK_.call(null,G__22839,new cljs.core.Keyword(null,"id","id",-1388402092));
})], null),(function (G__22839){
return ((cljs.core.map_QMARK_.call(null,G__22839)) && (cljs.core.contains_QMARK_.call(null,G__22839,new cljs.core.Keyword(null,"id","id",-1388402092))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.effects","id","district.ui.router.effects/id",-1203087715)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.router.effects","watchers","district.ui.router.effects/watchers",-1743921094),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district.ui.router.effects","watcher","district.ui.router.effects/watcher",-1829825458)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("district.ui.router.effects","watcher","district.ui.router.effects/watcher",-1829825458),new cljs.core.Keyword("district.ui.router.effects","watcher","district.ui.router.effects/watcher",-1829825458),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__22840){
return cljs.core.coll_QMARK_.call(null,G__22840);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district.ui.router.effects","watcher","district.ui.router.effects/watcher",-1829825458))], null),null));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.router.effects","watch-active-page","district.ui.router.effects/watch-active-page",2122612732),(function (watchers){
var watchers__$1 = ((cljs.core.sequential_QMARK_.call(null,watchers))?watchers:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [watchers], null));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.router.effects","watchers","district.ui.router.effects/watchers",-1743921094),watchers__$1);
} else {
}
} else {
}

var seq__22841 = cljs.core.seq.call(null,watchers__$1);
var chunk__22842 = null;
var count__22843 = (0);
var i__22844 = (0);
while(true){
if((i__22844 < count__22843)){
var map__22845 = cljs.core._nth.call(null,chunk__22842,i__22844);
var map__22845__$1 = ((((!((map__22845 == null)))?(((((map__22845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22845):map__22845);
var watch_opts = map__22845__$1;
var id = cljs.core.get.call(null,map__22845__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.add_post_event_callback.call(null,id,district.ui.router.effects.post_event_callback_fn.call(null,watch_opts));


var G__22849 = seq__22841;
var G__22850 = chunk__22842;
var G__22851 = count__22843;
var G__22852 = (i__22844 + (1));
seq__22841 = G__22849;
chunk__22842 = G__22850;
count__22843 = G__22851;
i__22844 = G__22852;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22841);
if(temp__5457__auto__){
var seq__22841__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22841__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22841__$1);
var G__22853 = cljs.core.chunk_rest.call(null,seq__22841__$1);
var G__22854 = c__4319__auto__;
var G__22855 = cljs.core.count.call(null,c__4319__auto__);
var G__22856 = (0);
seq__22841 = G__22853;
chunk__22842 = G__22854;
count__22843 = G__22855;
i__22844 = G__22856;
continue;
} else {
var map__22847 = cljs.core.first.call(null,seq__22841__$1);
var map__22847__$1 = ((((!((map__22847 == null)))?(((((map__22847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22847):map__22847);
var watch_opts = map__22847__$1;
var id = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.add_post_event_callback.call(null,id,district.ui.router.effects.post_event_callback_fn.call(null,watch_opts));


var G__22857 = cljs.core.next.call(null,seq__22841__$1);
var G__22858 = null;
var G__22859 = (0);
var G__22860 = (0);
seq__22841 = G__22857;
chunk__22842 = G__22858;
count__22843 = G__22859;
i__22844 = G__22860;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.router.effects","unwatch-active-page","district.ui.router.effects/unwatch-active-page",340395382),(function (watchers){
var watchers__$1 = ((cljs.core.sequential_QMARK_.call(null,watchers))?watchers:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [watchers], null));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district.ui.router.effects","watchers","district.ui.router.effects/watchers",-1743921094),watchers__$1);
} else {
}
} else {
}

var seq__22861 = cljs.core.seq.call(null,watchers__$1);
var chunk__22862 = null;
var count__22863 = (0);
var i__22864 = (0);
while(true){
if((i__22864 < count__22863)){
var map__22865 = cljs.core._nth.call(null,chunk__22862,i__22864);
var map__22865__$1 = ((((!((map__22865 == null)))?(((((map__22865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22865):map__22865);
var id = cljs.core.get.call(null,map__22865__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.remove_post_event_callback.call(null,id);


var G__22869 = seq__22861;
var G__22870 = chunk__22862;
var G__22871 = count__22863;
var G__22872 = (i__22864 + (1));
seq__22861 = G__22869;
chunk__22862 = G__22870;
count__22863 = G__22871;
i__22864 = G__22872;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22861);
if(temp__5457__auto__){
var seq__22861__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22861__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22861__$1);
var G__22873 = cljs.core.chunk_rest.call(null,seq__22861__$1);
var G__22874 = c__4319__auto__;
var G__22875 = cljs.core.count.call(null,c__4319__auto__);
var G__22876 = (0);
seq__22861 = G__22873;
chunk__22862 = G__22874;
count__22863 = G__22875;
i__22864 = G__22876;
continue;
} else {
var map__22867 = cljs.core.first.call(null,seq__22861__$1);
var map__22867__$1 = ((((!((map__22867 == null)))?(((((map__22867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22867):map__22867);
var id = cljs.core.get.call(null,map__22867__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.remove_post_event_callback.call(null,id);


var G__22877 = cljs.core.next.call(null,seq__22861__$1);
var G__22878 = null;
var G__22879 = (0);
var G__22880 = (0);
seq__22861 = G__22877;
chunk__22862 = G__22878;
count__22863 = G__22879;
i__22864 = G__22880;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=effects.js.map?rel=1526715393859
