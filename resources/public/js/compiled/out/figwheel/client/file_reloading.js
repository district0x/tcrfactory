// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34604_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34604_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34605 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34606 = null;
var count__34607 = (0);
var i__34608 = (0);
while(true){
if((i__34608 < count__34607)){
var n = cljs.core._nth.call(null,chunk__34606,i__34608);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34609 = seq__34605;
var G__34610 = chunk__34606;
var G__34611 = count__34607;
var G__34612 = (i__34608 + (1));
seq__34605 = G__34609;
chunk__34606 = G__34610;
count__34607 = G__34611;
i__34608 = G__34612;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34605);
if(temp__5457__auto__){
var seq__34605__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34605__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34605__$1);
var G__34613 = cljs.core.chunk_rest.call(null,seq__34605__$1);
var G__34614 = c__4319__auto__;
var G__34615 = cljs.core.count.call(null,c__4319__auto__);
var G__34616 = (0);
seq__34605 = G__34613;
chunk__34606 = G__34614;
count__34607 = G__34615;
i__34608 = G__34616;
continue;
} else {
var n = cljs.core.first.call(null,seq__34605__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34617 = cljs.core.next.call(null,seq__34605__$1);
var G__34618 = null;
var G__34619 = (0);
var G__34620 = (0);
seq__34605 = G__34617;
chunk__34606 = G__34618;
count__34607 = G__34619;
i__34608 = G__34620;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34621){
var vec__34622 = p__34621;
var _ = cljs.core.nth.call(null,vec__34622,(0),null);
var v = cljs.core.nth.call(null,vec__34622,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__34625){
var vec__34626 = p__34625;
var k = cljs.core.nth.call(null,vec__34626,(0),null);
var v = cljs.core.nth.call(null,vec__34626,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34638_34646 = cljs.core.seq.call(null,deps);
var chunk__34639_34647 = null;
var count__34640_34648 = (0);
var i__34641_34649 = (0);
while(true){
if((i__34641_34649 < count__34640_34648)){
var dep_34650 = cljs.core._nth.call(null,chunk__34639_34647,i__34641_34649);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_34650;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34650));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34650,(depth + (1)),state);
} else {
}


var G__34651 = seq__34638_34646;
var G__34652 = chunk__34639_34647;
var G__34653 = count__34640_34648;
var G__34654 = (i__34641_34649 + (1));
seq__34638_34646 = G__34651;
chunk__34639_34647 = G__34652;
count__34640_34648 = G__34653;
i__34641_34649 = G__34654;
continue;
} else {
var temp__5457__auto___34655 = cljs.core.seq.call(null,seq__34638_34646);
if(temp__5457__auto___34655){
var seq__34638_34656__$1 = temp__5457__auto___34655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34638_34656__$1)){
var c__4319__auto___34657 = cljs.core.chunk_first.call(null,seq__34638_34656__$1);
var G__34658 = cljs.core.chunk_rest.call(null,seq__34638_34656__$1);
var G__34659 = c__4319__auto___34657;
var G__34660 = cljs.core.count.call(null,c__4319__auto___34657);
var G__34661 = (0);
seq__34638_34646 = G__34658;
chunk__34639_34647 = G__34659;
count__34640_34648 = G__34660;
i__34641_34649 = G__34661;
continue;
} else {
var dep_34662 = cljs.core.first.call(null,seq__34638_34656__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_34662;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34662));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34662,(depth + (1)),state);
} else {
}


var G__34663 = cljs.core.next.call(null,seq__34638_34656__$1);
var G__34664 = null;
var G__34665 = (0);
var G__34666 = (0);
seq__34638_34646 = G__34663;
chunk__34639_34647 = G__34664;
count__34640_34648 = G__34665;
i__34641_34649 = G__34666;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34642){
var vec__34643 = p__34642;
var seq__34644 = cljs.core.seq.call(null,vec__34643);
var first__34645 = cljs.core.first.call(null,seq__34644);
var seq__34644__$1 = cljs.core.next.call(null,seq__34644);
var x = first__34645;
var xs = seq__34644__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34643,seq__34644,first__34645,seq__34644__$1,x,xs,get_deps__$1){
return (function (p1__34629_SHARP_){
return clojure.set.difference.call(null,p1__34629_SHARP_,x);
});})(vec__34643,seq__34644,first__34645,seq__34644__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34667 = cljs.core.seq.call(null,provides);
var chunk__34668 = null;
var count__34669 = (0);
var i__34670 = (0);
while(true){
if((i__34670 < count__34669)){
var prov = cljs.core._nth.call(null,chunk__34668,i__34670);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34671_34679 = cljs.core.seq.call(null,requires);
var chunk__34672_34680 = null;
var count__34673_34681 = (0);
var i__34674_34682 = (0);
while(true){
if((i__34674_34682 < count__34673_34681)){
var req_34683 = cljs.core._nth.call(null,chunk__34672_34680,i__34674_34682);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34683,prov);


var G__34684 = seq__34671_34679;
var G__34685 = chunk__34672_34680;
var G__34686 = count__34673_34681;
var G__34687 = (i__34674_34682 + (1));
seq__34671_34679 = G__34684;
chunk__34672_34680 = G__34685;
count__34673_34681 = G__34686;
i__34674_34682 = G__34687;
continue;
} else {
var temp__5457__auto___34688 = cljs.core.seq.call(null,seq__34671_34679);
if(temp__5457__auto___34688){
var seq__34671_34689__$1 = temp__5457__auto___34688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34671_34689__$1)){
var c__4319__auto___34690 = cljs.core.chunk_first.call(null,seq__34671_34689__$1);
var G__34691 = cljs.core.chunk_rest.call(null,seq__34671_34689__$1);
var G__34692 = c__4319__auto___34690;
var G__34693 = cljs.core.count.call(null,c__4319__auto___34690);
var G__34694 = (0);
seq__34671_34679 = G__34691;
chunk__34672_34680 = G__34692;
count__34673_34681 = G__34693;
i__34674_34682 = G__34694;
continue;
} else {
var req_34695 = cljs.core.first.call(null,seq__34671_34689__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34695,prov);


var G__34696 = cljs.core.next.call(null,seq__34671_34689__$1);
var G__34697 = null;
var G__34698 = (0);
var G__34699 = (0);
seq__34671_34679 = G__34696;
chunk__34672_34680 = G__34697;
count__34673_34681 = G__34698;
i__34674_34682 = G__34699;
continue;
}
} else {
}
}
break;
}


var G__34700 = seq__34667;
var G__34701 = chunk__34668;
var G__34702 = count__34669;
var G__34703 = (i__34670 + (1));
seq__34667 = G__34700;
chunk__34668 = G__34701;
count__34669 = G__34702;
i__34670 = G__34703;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34667);
if(temp__5457__auto__){
var seq__34667__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34667__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34667__$1);
var G__34704 = cljs.core.chunk_rest.call(null,seq__34667__$1);
var G__34705 = c__4319__auto__;
var G__34706 = cljs.core.count.call(null,c__4319__auto__);
var G__34707 = (0);
seq__34667 = G__34704;
chunk__34668 = G__34705;
count__34669 = G__34706;
i__34670 = G__34707;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34667__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34675_34708 = cljs.core.seq.call(null,requires);
var chunk__34676_34709 = null;
var count__34677_34710 = (0);
var i__34678_34711 = (0);
while(true){
if((i__34678_34711 < count__34677_34710)){
var req_34712 = cljs.core._nth.call(null,chunk__34676_34709,i__34678_34711);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34712,prov);


var G__34713 = seq__34675_34708;
var G__34714 = chunk__34676_34709;
var G__34715 = count__34677_34710;
var G__34716 = (i__34678_34711 + (1));
seq__34675_34708 = G__34713;
chunk__34676_34709 = G__34714;
count__34677_34710 = G__34715;
i__34678_34711 = G__34716;
continue;
} else {
var temp__5457__auto___34717__$1 = cljs.core.seq.call(null,seq__34675_34708);
if(temp__5457__auto___34717__$1){
var seq__34675_34718__$1 = temp__5457__auto___34717__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34675_34718__$1)){
var c__4319__auto___34719 = cljs.core.chunk_first.call(null,seq__34675_34718__$1);
var G__34720 = cljs.core.chunk_rest.call(null,seq__34675_34718__$1);
var G__34721 = c__4319__auto___34719;
var G__34722 = cljs.core.count.call(null,c__4319__auto___34719);
var G__34723 = (0);
seq__34675_34708 = G__34720;
chunk__34676_34709 = G__34721;
count__34677_34710 = G__34722;
i__34678_34711 = G__34723;
continue;
} else {
var req_34724 = cljs.core.first.call(null,seq__34675_34718__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34724,prov);


var G__34725 = cljs.core.next.call(null,seq__34675_34718__$1);
var G__34726 = null;
var G__34727 = (0);
var G__34728 = (0);
seq__34675_34708 = G__34725;
chunk__34676_34709 = G__34726;
count__34677_34710 = G__34727;
i__34678_34711 = G__34728;
continue;
}
} else {
}
}
break;
}


var G__34729 = cljs.core.next.call(null,seq__34667__$1);
var G__34730 = null;
var G__34731 = (0);
var G__34732 = (0);
seq__34667 = G__34729;
chunk__34668 = G__34730;
count__34669 = G__34731;
i__34670 = G__34732;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34733_34737 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34734_34738 = null;
var count__34735_34739 = (0);
var i__34736_34740 = (0);
while(true){
if((i__34736_34740 < count__34735_34739)){
var ns_34741 = cljs.core._nth.call(null,chunk__34734_34738,i__34736_34740);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34741);


var G__34742 = seq__34733_34737;
var G__34743 = chunk__34734_34738;
var G__34744 = count__34735_34739;
var G__34745 = (i__34736_34740 + (1));
seq__34733_34737 = G__34742;
chunk__34734_34738 = G__34743;
count__34735_34739 = G__34744;
i__34736_34740 = G__34745;
continue;
} else {
var temp__5457__auto___34746 = cljs.core.seq.call(null,seq__34733_34737);
if(temp__5457__auto___34746){
var seq__34733_34747__$1 = temp__5457__auto___34746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34733_34747__$1)){
var c__4319__auto___34748 = cljs.core.chunk_first.call(null,seq__34733_34747__$1);
var G__34749 = cljs.core.chunk_rest.call(null,seq__34733_34747__$1);
var G__34750 = c__4319__auto___34748;
var G__34751 = cljs.core.count.call(null,c__4319__auto___34748);
var G__34752 = (0);
seq__34733_34737 = G__34749;
chunk__34734_34738 = G__34750;
count__34735_34739 = G__34751;
i__34736_34740 = G__34752;
continue;
} else {
var ns_34753 = cljs.core.first.call(null,seq__34733_34747__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34753);


var G__34754 = cljs.core.next.call(null,seq__34733_34747__$1);
var G__34755 = null;
var G__34756 = (0);
var G__34757 = (0);
seq__34733_34737 = G__34754;
chunk__34734_34738 = G__34755;
count__34735_34739 = G__34756;
i__34736_34740 = G__34757;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34758__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34759__i = 0, G__34759__a = new Array(arguments.length -  0);
while (G__34759__i < G__34759__a.length) {G__34759__a[G__34759__i] = arguments[G__34759__i + 0]; ++G__34759__i;}
  args = new cljs.core.IndexedSeq(G__34759__a,0,null);
} 
return G__34758__delegate.call(this,args);};
G__34758.cljs$lang$maxFixedArity = 0;
G__34758.cljs$lang$applyTo = (function (arglist__34760){
var args = cljs.core.seq(arglist__34760);
return G__34758__delegate(args);
});
G__34758.cljs$core$IFn$_invoke$arity$variadic = G__34758__delegate;
return G__34758;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34761_SHARP_,p2__34762_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34761_SHARP_)].join('')),p2__34762_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34763_SHARP_,p2__34764_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34763_SHARP_)].join(''),p2__34764_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34765 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34765.addCallback(((function (G__34765){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34765))
);

G__34765.addErrback(((function (G__34765){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34765))
);

return G__34765;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34766){if((e34766 instanceof Error)){
var e = e34766;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34766;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34767){if((e34767 instanceof Error)){
var e = e34767;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34767;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34768 = cljs.core._EQ_;
var expr__34769 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34768.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34769))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34768.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34769))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34768.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34769))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34768,expr__34769){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34768,expr__34769))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34771,callback){
var map__34772 = p__34771;
var map__34772__$1 = ((((!((map__34772 == null)))?(((((map__34772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34772):map__34772);
var file_msg = map__34772__$1;
var request_url = cljs.core.get.call(null,map__34772__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34772,map__34772__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34772,map__34772__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__){
return (function (state_34812){
var state_val_34813 = (state_34812[(1)]);
if((state_val_34813 === (7))){
var inst_34808 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34814_34841 = state_34812__$1;
(statearr_34814_34841[(2)] = inst_34808);

(statearr_34814_34841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (1))){
var state_34812__$1 = state_34812;
var statearr_34815_34842 = state_34812__$1;
(statearr_34815_34842[(2)] = null);

(statearr_34815_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (4))){
var inst_34776 = (state_34812[(7)]);
var inst_34776__$1 = (state_34812[(2)]);
var state_34812__$1 = (function (){var statearr_34816 = state_34812;
(statearr_34816[(7)] = inst_34776__$1);

return statearr_34816;
})();
if(cljs.core.truth_(inst_34776__$1)){
var statearr_34817_34843 = state_34812__$1;
(statearr_34817_34843[(1)] = (5));

} else {
var statearr_34818_34844 = state_34812__$1;
(statearr_34818_34844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (15))){
var inst_34793 = (state_34812[(8)]);
var inst_34790 = (state_34812[(9)]);
var inst_34795 = inst_34793.call(null,inst_34790);
var state_34812__$1 = state_34812;
var statearr_34819_34845 = state_34812__$1;
(statearr_34819_34845[(2)] = inst_34795);

(statearr_34819_34845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (13))){
var inst_34802 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34820_34846 = state_34812__$1;
(statearr_34820_34846[(2)] = inst_34802);

(statearr_34820_34846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (6))){
var state_34812__$1 = state_34812;
var statearr_34821_34847 = state_34812__$1;
(statearr_34821_34847[(2)] = null);

(statearr_34821_34847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (17))){
var inst_34799 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
var statearr_34822_34848 = state_34812__$1;
(statearr_34822_34848[(2)] = inst_34799);

(statearr_34822_34848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (3))){
var inst_34810 = (state_34812[(2)]);
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34812__$1,inst_34810);
} else {
if((state_val_34813 === (12))){
var state_34812__$1 = state_34812;
var statearr_34823_34849 = state_34812__$1;
(statearr_34823_34849[(2)] = null);

(statearr_34823_34849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (2))){
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34812__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34813 === (11))){
var inst_34781 = (state_34812[(10)]);
var inst_34788 = figwheel.client.file_reloading.blocking_load.call(null,inst_34781);
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34812__$1,(14),inst_34788);
} else {
if((state_val_34813 === (9))){
var inst_34781 = (state_34812[(10)]);
var state_34812__$1 = state_34812;
if(cljs.core.truth_(inst_34781)){
var statearr_34824_34850 = state_34812__$1;
(statearr_34824_34850[(1)] = (11));

} else {
var statearr_34825_34851 = state_34812__$1;
(statearr_34825_34851[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (5))){
var inst_34782 = (state_34812[(11)]);
var inst_34776 = (state_34812[(7)]);
var inst_34781 = cljs.core.nth.call(null,inst_34776,(0),null);
var inst_34782__$1 = cljs.core.nth.call(null,inst_34776,(1),null);
var state_34812__$1 = (function (){var statearr_34826 = state_34812;
(statearr_34826[(11)] = inst_34782__$1);

(statearr_34826[(10)] = inst_34781);

return statearr_34826;
})();
if(cljs.core.truth_(inst_34782__$1)){
var statearr_34827_34852 = state_34812__$1;
(statearr_34827_34852[(1)] = (8));

} else {
var statearr_34828_34853 = state_34812__$1;
(statearr_34828_34853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (14))){
var inst_34793 = (state_34812[(8)]);
var inst_34781 = (state_34812[(10)]);
var inst_34790 = (state_34812[(2)]);
var inst_34791 = console.log("Loading!",inst_34781);
var inst_34792 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34793__$1 = cljs.core.get.call(null,inst_34792,inst_34781);
var state_34812__$1 = (function (){var statearr_34829 = state_34812;
(statearr_34829[(8)] = inst_34793__$1);

(statearr_34829[(9)] = inst_34790);

(statearr_34829[(12)] = inst_34791);

return statearr_34829;
})();
if(cljs.core.truth_(inst_34793__$1)){
var statearr_34830_34854 = state_34812__$1;
(statearr_34830_34854[(1)] = (15));

} else {
var statearr_34831_34855 = state_34812__$1;
(statearr_34831_34855[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (16))){
var inst_34790 = (state_34812[(9)]);
var inst_34797 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34790);
var state_34812__$1 = state_34812;
var statearr_34832_34856 = state_34812__$1;
(statearr_34832_34856[(2)] = inst_34797);

(statearr_34832_34856[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (10))){
var inst_34804 = (state_34812[(2)]);
var state_34812__$1 = (function (){var statearr_34833 = state_34812;
(statearr_34833[(13)] = inst_34804);

return statearr_34833;
})();
var statearr_34834_34857 = state_34812__$1;
(statearr_34834_34857[(2)] = null);

(statearr_34834_34857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34813 === (8))){
var inst_34782 = (state_34812[(11)]);
var inst_34784 = console.log("Evaling!",inst_34782);
var inst_34785 = eval(inst_34782);
var state_34812__$1 = (function (){var statearr_34835 = state_34812;
(statearr_34835[(14)] = inst_34784);

return statearr_34835;
})();
var statearr_34836_34858 = state_34812__$1;
(statearr_34836_34858[(2)] = inst_34785);

(statearr_34836_34858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29904__auto__))
;
return ((function (switch__29814__auto__,c__29904__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29815__auto__ = null;
var figwheel$client$file_reloading$state_machine__29815__auto____0 = (function (){
var statearr_34837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34837[(0)] = figwheel$client$file_reloading$state_machine__29815__auto__);

(statearr_34837[(1)] = (1));

return statearr_34837;
});
var figwheel$client$file_reloading$state_machine__29815__auto____1 = (function (state_34812){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_34812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__29818__auto__ = e34838;
var statearr_34839_34859 = state_34812;
(statearr_34839_34859[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34860 = state_34812;
state_34812 = G__34860;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29815__auto__ = function(state_34812){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29815__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29815__auto____1.call(this,state_34812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29815__auto____0;
figwheel$client$file_reloading$state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29815__auto____1;
return figwheel$client$file_reloading$state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__))
})();
var state__29906__auto__ = (function (){var statearr_34840 = f__29905__auto__.call(null);
(statearr_34840[(6)] = c__29904__auto__);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__))
);

return c__29904__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34862 = arguments.length;
switch (G__34862) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34864,callback){
var map__34865 = p__34864;
var map__34865__$1 = ((((!((map__34865 == null)))?(((((map__34865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34865):map__34865);
var file_msg = map__34865__$1;
var namespace = cljs.core.get.call(null,map__34865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34865,map__34865__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34865,map__34865__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34867){
var map__34868 = p__34867;
var map__34868__$1 = ((((!((map__34868 == null)))?(((((map__34868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34868):map__34868);
var file_msg = map__34868__$1;
var namespace = cljs.core.get.call(null,map__34868__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34870){
var map__34871 = p__34870;
var map__34871__$1 = ((((!((map__34871 == null)))?(((((map__34871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34871):map__34871);
var file_msg = map__34871__$1;
var namespace = cljs.core.get.call(null,map__34871__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34873,callback){
var map__34874 = p__34873;
var map__34874__$1 = ((((!((map__34874 == null)))?(((((map__34874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34874):map__34874);
var file_msg = map__34874__$1;
var request_url = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29904__auto___34924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___34924,out){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___34924,out){
return (function (state_34909){
var state_val_34910 = (state_34909[(1)]);
if((state_val_34910 === (1))){
var inst_34883 = cljs.core.seq.call(null,files);
var inst_34884 = cljs.core.first.call(null,inst_34883);
var inst_34885 = cljs.core.next.call(null,inst_34883);
var inst_34886 = files;
var state_34909__$1 = (function (){var statearr_34911 = state_34909;
(statearr_34911[(7)] = inst_34885);

(statearr_34911[(8)] = inst_34886);

(statearr_34911[(9)] = inst_34884);

return statearr_34911;
})();
var statearr_34912_34925 = state_34909__$1;
(statearr_34912_34925[(2)] = null);

(statearr_34912_34925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (2))){
var inst_34886 = (state_34909[(8)]);
var inst_34892 = (state_34909[(10)]);
var inst_34891 = cljs.core.seq.call(null,inst_34886);
var inst_34892__$1 = cljs.core.first.call(null,inst_34891);
var inst_34893 = cljs.core.next.call(null,inst_34891);
var inst_34894 = (inst_34892__$1 == null);
var inst_34895 = cljs.core.not.call(null,inst_34894);
var state_34909__$1 = (function (){var statearr_34913 = state_34909;
(statearr_34913[(10)] = inst_34892__$1);

(statearr_34913[(11)] = inst_34893);

return statearr_34913;
})();
if(inst_34895){
var statearr_34914_34926 = state_34909__$1;
(statearr_34914_34926[(1)] = (4));

} else {
var statearr_34915_34927 = state_34909__$1;
(statearr_34915_34927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (3))){
var inst_34907 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34909__$1,inst_34907);
} else {
if((state_val_34910 === (4))){
var inst_34892 = (state_34909[(10)]);
var inst_34897 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34892);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34909__$1,(7),inst_34897);
} else {
if((state_val_34910 === (5))){
var inst_34903 = cljs.core.async.close_BANG_.call(null,out);
var state_34909__$1 = state_34909;
var statearr_34916_34928 = state_34909__$1;
(statearr_34916_34928[(2)] = inst_34903);

(statearr_34916_34928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (6))){
var inst_34905 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34917_34929 = state_34909__$1;
(statearr_34917_34929[(2)] = inst_34905);

(statearr_34917_34929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (7))){
var inst_34893 = (state_34909[(11)]);
var inst_34899 = (state_34909[(2)]);
var inst_34900 = cljs.core.async.put_BANG_.call(null,out,inst_34899);
var inst_34886 = inst_34893;
var state_34909__$1 = (function (){var statearr_34918 = state_34909;
(statearr_34918[(8)] = inst_34886);

(statearr_34918[(12)] = inst_34900);

return statearr_34918;
})();
var statearr_34919_34930 = state_34909__$1;
(statearr_34919_34930[(2)] = null);

(statearr_34919_34930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29904__auto___34924,out))
;
return ((function (switch__29814__auto__,c__29904__auto___34924,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto____0 = (function (){
var statearr_34920 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34920[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto__);

(statearr_34920[(1)] = (1));

return statearr_34920;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto____1 = (function (state_34909){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_34909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e34921){if((e34921 instanceof Object)){
var ex__29818__auto__ = e34921;
var statearr_34922_34931 = state_34909;
(statearr_34922_34931[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34932 = state_34909;
state_34909 = G__34932;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto__ = function(state_34909){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto____1.call(this,state_34909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___34924,out))
})();
var state__29906__auto__ = (function (){var statearr_34923 = f__29905__auto__.call(null);
(statearr_34923[(6)] = c__29904__auto___34924);

return statearr_34923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___34924,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34933,opts){
var map__34934 = p__34933;
var map__34934__$1 = ((((!((map__34934 == null)))?(((((map__34934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34934):map__34934);
var eval_body = cljs.core.get.call(null,map__34934__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34936){var e = e34936;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34937_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34937_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34938){
var vec__34939 = p__34938;
var k = cljs.core.nth.call(null,vec__34939,(0),null);
var v = cljs.core.nth.call(null,vec__34939,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34942){
var vec__34943 = p__34942;
var k = cljs.core.nth.call(null,vec__34943,(0),null);
var v = cljs.core.nth.call(null,vec__34943,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34949,p__34950){
var map__34951 = p__34949;
var map__34951__$1 = ((((!((map__34951 == null)))?(((((map__34951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34951):map__34951);
var opts = map__34951__$1;
var before_jsload = cljs.core.get.call(null,map__34951__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34951__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34951__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34952 = p__34950;
var map__34952__$1 = ((((!((map__34952 == null)))?(((((map__34952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34952):map__34952);
var msg = map__34952__$1;
var files = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34952__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35106){
var state_val_35107 = (state_35106[(1)]);
if((state_val_35107 === (7))){
var inst_34969 = (state_35106[(7)]);
var inst_34968 = (state_35106[(8)]);
var inst_34967 = (state_35106[(9)]);
var inst_34966 = (state_35106[(10)]);
var inst_34974 = cljs.core._nth.call(null,inst_34967,inst_34969);
var inst_34975 = figwheel.client.file_reloading.eval_body.call(null,inst_34974,opts);
var inst_34976 = (inst_34969 + (1));
var tmp35108 = inst_34968;
var tmp35109 = inst_34967;
var tmp35110 = inst_34966;
var inst_34966__$1 = tmp35110;
var inst_34967__$1 = tmp35109;
var inst_34968__$1 = tmp35108;
var inst_34969__$1 = inst_34976;
var state_35106__$1 = (function (){var statearr_35111 = state_35106;
(statearr_35111[(11)] = inst_34975);

(statearr_35111[(7)] = inst_34969__$1);

(statearr_35111[(8)] = inst_34968__$1);

(statearr_35111[(9)] = inst_34967__$1);

(statearr_35111[(10)] = inst_34966__$1);

return statearr_35111;
})();
var statearr_35112_35195 = state_35106__$1;
(statearr_35112_35195[(2)] = null);

(statearr_35112_35195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (20))){
var inst_35009 = (state_35106[(12)]);
var inst_35017 = figwheel.client.file_reloading.sort_files.call(null,inst_35009);
var state_35106__$1 = state_35106;
var statearr_35113_35196 = state_35106__$1;
(statearr_35113_35196[(2)] = inst_35017);

(statearr_35113_35196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (27))){
var state_35106__$1 = state_35106;
var statearr_35114_35197 = state_35106__$1;
(statearr_35114_35197[(2)] = null);

(statearr_35114_35197[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (1))){
var inst_34958 = (state_35106[(13)]);
var inst_34955 = before_jsload.call(null,files);
var inst_34956 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34957 = (function (){return ((function (inst_34958,inst_34955,inst_34956,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34946_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34946_SHARP_);
});
;})(inst_34958,inst_34955,inst_34956,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34958__$1 = cljs.core.filter.call(null,inst_34957,files);
var inst_34959 = cljs.core.not_empty.call(null,inst_34958__$1);
var state_35106__$1 = (function (){var statearr_35115 = state_35106;
(statearr_35115[(13)] = inst_34958__$1);

(statearr_35115[(14)] = inst_34956);

(statearr_35115[(15)] = inst_34955);

return statearr_35115;
})();
if(cljs.core.truth_(inst_34959)){
var statearr_35116_35198 = state_35106__$1;
(statearr_35116_35198[(1)] = (2));

} else {
var statearr_35117_35199 = state_35106__$1;
(statearr_35117_35199[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (24))){
var state_35106__$1 = state_35106;
var statearr_35118_35200 = state_35106__$1;
(statearr_35118_35200[(2)] = null);

(statearr_35118_35200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (39))){
var inst_35059 = (state_35106[(16)]);
var state_35106__$1 = state_35106;
var statearr_35119_35201 = state_35106__$1;
(statearr_35119_35201[(2)] = inst_35059);

(statearr_35119_35201[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (46))){
var inst_35101 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35120_35202 = state_35106__$1;
(statearr_35120_35202[(2)] = inst_35101);

(statearr_35120_35202[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (4))){
var inst_35003 = (state_35106[(2)]);
var inst_35004 = cljs.core.List.EMPTY;
var inst_35005 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35004);
var inst_35006 = (function (){return ((function (inst_35003,inst_35004,inst_35005,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34947_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34947_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34947_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34947_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_35003,inst_35004,inst_35005,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35007 = cljs.core.filter.call(null,inst_35006,files);
var inst_35008 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35009 = cljs.core.concat.call(null,inst_35007,inst_35008);
var state_35106__$1 = (function (){var statearr_35121 = state_35106;
(statearr_35121[(17)] = inst_35005);

(statearr_35121[(18)] = inst_35003);

(statearr_35121[(12)] = inst_35009);

return statearr_35121;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35122_35203 = state_35106__$1;
(statearr_35122_35203[(1)] = (16));

} else {
var statearr_35123_35204 = state_35106__$1;
(statearr_35123_35204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (15))){
var inst_34993 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35124_35205 = state_35106__$1;
(statearr_35124_35205[(2)] = inst_34993);

(statearr_35124_35205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (21))){
var inst_35019 = (state_35106[(19)]);
var inst_35019__$1 = (state_35106[(2)]);
var inst_35020 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35019__$1);
var state_35106__$1 = (function (){var statearr_35125 = state_35106;
(statearr_35125[(19)] = inst_35019__$1);

return statearr_35125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35106__$1,(22),inst_35020);
} else {
if((state_val_35107 === (31))){
var inst_35104 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35106__$1,inst_35104);
} else {
if((state_val_35107 === (32))){
var inst_35059 = (state_35106[(16)]);
var inst_35064 = inst_35059.cljs$lang$protocol_mask$partition0$;
var inst_35065 = (inst_35064 & (64));
var inst_35066 = inst_35059.cljs$core$ISeq$;
var inst_35067 = (cljs.core.PROTOCOL_SENTINEL === inst_35066);
var inst_35068 = ((inst_35065) || (inst_35067));
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35068)){
var statearr_35126_35206 = state_35106__$1;
(statearr_35126_35206[(1)] = (35));

} else {
var statearr_35127_35207 = state_35106__$1;
(statearr_35127_35207[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (40))){
var inst_35081 = (state_35106[(20)]);
var inst_35080 = (state_35106[(2)]);
var inst_35081__$1 = cljs.core.get.call(null,inst_35080,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35082 = cljs.core.get.call(null,inst_35080,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35083 = cljs.core.not_empty.call(null,inst_35081__$1);
var state_35106__$1 = (function (){var statearr_35128 = state_35106;
(statearr_35128[(20)] = inst_35081__$1);

(statearr_35128[(21)] = inst_35082);

return statearr_35128;
})();
if(cljs.core.truth_(inst_35083)){
var statearr_35129_35208 = state_35106__$1;
(statearr_35129_35208[(1)] = (41));

} else {
var statearr_35130_35209 = state_35106__$1;
(statearr_35130_35209[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (33))){
var state_35106__$1 = state_35106;
var statearr_35131_35210 = state_35106__$1;
(statearr_35131_35210[(2)] = false);

(statearr_35131_35210[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (13))){
var inst_34979 = (state_35106[(22)]);
var inst_34983 = cljs.core.chunk_first.call(null,inst_34979);
var inst_34984 = cljs.core.chunk_rest.call(null,inst_34979);
var inst_34985 = cljs.core.count.call(null,inst_34983);
var inst_34966 = inst_34984;
var inst_34967 = inst_34983;
var inst_34968 = inst_34985;
var inst_34969 = (0);
var state_35106__$1 = (function (){var statearr_35132 = state_35106;
(statearr_35132[(7)] = inst_34969);

(statearr_35132[(8)] = inst_34968);

(statearr_35132[(9)] = inst_34967);

(statearr_35132[(10)] = inst_34966);

return statearr_35132;
})();
var statearr_35133_35211 = state_35106__$1;
(statearr_35133_35211[(2)] = null);

(statearr_35133_35211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (22))){
var inst_35027 = (state_35106[(23)]);
var inst_35023 = (state_35106[(24)]);
var inst_35022 = (state_35106[(25)]);
var inst_35019 = (state_35106[(19)]);
var inst_35022__$1 = (state_35106[(2)]);
var inst_35023__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35022__$1);
var inst_35024 = (function (){var all_files = inst_35019;
var res_SINGLEQUOTE_ = inst_35022__$1;
var res = inst_35023__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35027,inst_35023,inst_35022,inst_35019,inst_35022__$1,inst_35023__$1,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34948_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34948_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35027,inst_35023,inst_35022,inst_35019,inst_35022__$1,inst_35023__$1,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35025 = cljs.core.filter.call(null,inst_35024,inst_35022__$1);
var inst_35026 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35027__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35026);
var inst_35028 = cljs.core.not_empty.call(null,inst_35027__$1);
var state_35106__$1 = (function (){var statearr_35134 = state_35106;
(statearr_35134[(23)] = inst_35027__$1);

(statearr_35134[(24)] = inst_35023__$1);

(statearr_35134[(25)] = inst_35022__$1);

(statearr_35134[(26)] = inst_35025);

return statearr_35134;
})();
if(cljs.core.truth_(inst_35028)){
var statearr_35135_35212 = state_35106__$1;
(statearr_35135_35212[(1)] = (23));

} else {
var statearr_35136_35213 = state_35106__$1;
(statearr_35136_35213[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (36))){
var state_35106__$1 = state_35106;
var statearr_35137_35214 = state_35106__$1;
(statearr_35137_35214[(2)] = false);

(statearr_35137_35214[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (41))){
var inst_35081 = (state_35106[(20)]);
var inst_35085 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35086 = cljs.core.map.call(null,inst_35085,inst_35081);
var inst_35087 = cljs.core.pr_str.call(null,inst_35086);
var inst_35088 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35087)].join('');
var inst_35089 = figwheel.client.utils.log.call(null,inst_35088);
var state_35106__$1 = state_35106;
var statearr_35138_35215 = state_35106__$1;
(statearr_35138_35215[(2)] = inst_35089);

(statearr_35138_35215[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (43))){
var inst_35082 = (state_35106[(21)]);
var inst_35092 = (state_35106[(2)]);
var inst_35093 = cljs.core.not_empty.call(null,inst_35082);
var state_35106__$1 = (function (){var statearr_35139 = state_35106;
(statearr_35139[(27)] = inst_35092);

return statearr_35139;
})();
if(cljs.core.truth_(inst_35093)){
var statearr_35140_35216 = state_35106__$1;
(statearr_35140_35216[(1)] = (44));

} else {
var statearr_35141_35217 = state_35106__$1;
(statearr_35141_35217[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (29))){
var inst_35027 = (state_35106[(23)]);
var inst_35023 = (state_35106[(24)]);
var inst_35022 = (state_35106[(25)]);
var inst_35019 = (state_35106[(19)]);
var inst_35059 = (state_35106[(16)]);
var inst_35025 = (state_35106[(26)]);
var inst_35055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35058 = (function (){var all_files = inst_35019;
var res_SINGLEQUOTE_ = inst_35022;
var res = inst_35023;
var files_not_loaded = inst_35025;
var dependencies_that_loaded = inst_35027;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35027,inst_35023,inst_35022,inst_35019,inst_35059,inst_35025,inst_35055,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35057){
var map__35142 = p__35057;
var map__35142__$1 = ((((!((map__35142 == null)))?(((((map__35142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35142):map__35142);
var namespace = cljs.core.get.call(null,map__35142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35027,inst_35023,inst_35022,inst_35019,inst_35059,inst_35025,inst_35055,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35059__$1 = cljs.core.group_by.call(null,inst_35058,inst_35025);
var inst_35061 = (inst_35059__$1 == null);
var inst_35062 = cljs.core.not.call(null,inst_35061);
var state_35106__$1 = (function (){var statearr_35144 = state_35106;
(statearr_35144[(28)] = inst_35055);

(statearr_35144[(16)] = inst_35059__$1);

return statearr_35144;
})();
if(inst_35062){
var statearr_35145_35218 = state_35106__$1;
(statearr_35145_35218[(1)] = (32));

} else {
var statearr_35146_35219 = state_35106__$1;
(statearr_35146_35219[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (44))){
var inst_35082 = (state_35106[(21)]);
var inst_35095 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35082);
var inst_35096 = cljs.core.pr_str.call(null,inst_35095);
var inst_35097 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35096)].join('');
var inst_35098 = figwheel.client.utils.log.call(null,inst_35097);
var state_35106__$1 = state_35106;
var statearr_35147_35220 = state_35106__$1;
(statearr_35147_35220[(2)] = inst_35098);

(statearr_35147_35220[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (6))){
var inst_35000 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35148_35221 = state_35106__$1;
(statearr_35148_35221[(2)] = inst_35000);

(statearr_35148_35221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (28))){
var inst_35025 = (state_35106[(26)]);
var inst_35052 = (state_35106[(2)]);
var inst_35053 = cljs.core.not_empty.call(null,inst_35025);
var state_35106__$1 = (function (){var statearr_35149 = state_35106;
(statearr_35149[(29)] = inst_35052);

return statearr_35149;
})();
if(cljs.core.truth_(inst_35053)){
var statearr_35150_35222 = state_35106__$1;
(statearr_35150_35222[(1)] = (29));

} else {
var statearr_35151_35223 = state_35106__$1;
(statearr_35151_35223[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (25))){
var inst_35023 = (state_35106[(24)]);
var inst_35039 = (state_35106[(2)]);
var inst_35040 = cljs.core.not_empty.call(null,inst_35023);
var state_35106__$1 = (function (){var statearr_35152 = state_35106;
(statearr_35152[(30)] = inst_35039);

return statearr_35152;
})();
if(cljs.core.truth_(inst_35040)){
var statearr_35153_35224 = state_35106__$1;
(statearr_35153_35224[(1)] = (26));

} else {
var statearr_35154_35225 = state_35106__$1;
(statearr_35154_35225[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (34))){
var inst_35075 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35075)){
var statearr_35155_35226 = state_35106__$1;
(statearr_35155_35226[(1)] = (38));

} else {
var statearr_35156_35227 = state_35106__$1;
(statearr_35156_35227[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (17))){
var state_35106__$1 = state_35106;
var statearr_35157_35228 = state_35106__$1;
(statearr_35157_35228[(2)] = recompile_dependents);

(statearr_35157_35228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (3))){
var state_35106__$1 = state_35106;
var statearr_35158_35229 = state_35106__$1;
(statearr_35158_35229[(2)] = null);

(statearr_35158_35229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (12))){
var inst_34996 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35159_35230 = state_35106__$1;
(statearr_35159_35230[(2)] = inst_34996);

(statearr_35159_35230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (2))){
var inst_34958 = (state_35106[(13)]);
var inst_34965 = cljs.core.seq.call(null,inst_34958);
var inst_34966 = inst_34965;
var inst_34967 = null;
var inst_34968 = (0);
var inst_34969 = (0);
var state_35106__$1 = (function (){var statearr_35160 = state_35106;
(statearr_35160[(7)] = inst_34969);

(statearr_35160[(8)] = inst_34968);

(statearr_35160[(9)] = inst_34967);

(statearr_35160[(10)] = inst_34966);

return statearr_35160;
})();
var statearr_35161_35231 = state_35106__$1;
(statearr_35161_35231[(2)] = null);

(statearr_35161_35231[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (23))){
var inst_35027 = (state_35106[(23)]);
var inst_35023 = (state_35106[(24)]);
var inst_35022 = (state_35106[(25)]);
var inst_35019 = (state_35106[(19)]);
var inst_35025 = (state_35106[(26)]);
var inst_35030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35032 = (function (){var all_files = inst_35019;
var res_SINGLEQUOTE_ = inst_35022;
var res = inst_35023;
var files_not_loaded = inst_35025;
var dependencies_that_loaded = inst_35027;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35027,inst_35023,inst_35022,inst_35019,inst_35025,inst_35030,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35031){
var map__35162 = p__35031;
var map__35162__$1 = ((((!((map__35162 == null)))?(((((map__35162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35162):map__35162);
var request_url = cljs.core.get.call(null,map__35162__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35027,inst_35023,inst_35022,inst_35019,inst_35025,inst_35030,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35033 = cljs.core.reverse.call(null,inst_35027);
var inst_35034 = cljs.core.map.call(null,inst_35032,inst_35033);
var inst_35035 = cljs.core.pr_str.call(null,inst_35034);
var inst_35036 = figwheel.client.utils.log.call(null,inst_35035);
var state_35106__$1 = (function (){var statearr_35164 = state_35106;
(statearr_35164[(31)] = inst_35030);

return statearr_35164;
})();
var statearr_35165_35232 = state_35106__$1;
(statearr_35165_35232[(2)] = inst_35036);

(statearr_35165_35232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (35))){
var state_35106__$1 = state_35106;
var statearr_35166_35233 = state_35106__$1;
(statearr_35166_35233[(2)] = true);

(statearr_35166_35233[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (19))){
var inst_35009 = (state_35106[(12)]);
var inst_35015 = figwheel.client.file_reloading.expand_files.call(null,inst_35009);
var state_35106__$1 = state_35106;
var statearr_35167_35234 = state_35106__$1;
(statearr_35167_35234[(2)] = inst_35015);

(statearr_35167_35234[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (11))){
var state_35106__$1 = state_35106;
var statearr_35168_35235 = state_35106__$1;
(statearr_35168_35235[(2)] = null);

(statearr_35168_35235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (9))){
var inst_34998 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35169_35236 = state_35106__$1;
(statearr_35169_35236[(2)] = inst_34998);

(statearr_35169_35236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (5))){
var inst_34969 = (state_35106[(7)]);
var inst_34968 = (state_35106[(8)]);
var inst_34971 = (inst_34969 < inst_34968);
var inst_34972 = inst_34971;
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_34972)){
var statearr_35170_35237 = state_35106__$1;
(statearr_35170_35237[(1)] = (7));

} else {
var statearr_35171_35238 = state_35106__$1;
(statearr_35171_35238[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (14))){
var inst_34979 = (state_35106[(22)]);
var inst_34988 = cljs.core.first.call(null,inst_34979);
var inst_34989 = figwheel.client.file_reloading.eval_body.call(null,inst_34988,opts);
var inst_34990 = cljs.core.next.call(null,inst_34979);
var inst_34966 = inst_34990;
var inst_34967 = null;
var inst_34968 = (0);
var inst_34969 = (0);
var state_35106__$1 = (function (){var statearr_35172 = state_35106;
(statearr_35172[(7)] = inst_34969);

(statearr_35172[(32)] = inst_34989);

(statearr_35172[(8)] = inst_34968);

(statearr_35172[(9)] = inst_34967);

(statearr_35172[(10)] = inst_34966);

return statearr_35172;
})();
var statearr_35173_35239 = state_35106__$1;
(statearr_35173_35239[(2)] = null);

(statearr_35173_35239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (45))){
var state_35106__$1 = state_35106;
var statearr_35174_35240 = state_35106__$1;
(statearr_35174_35240[(2)] = null);

(statearr_35174_35240[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (26))){
var inst_35027 = (state_35106[(23)]);
var inst_35023 = (state_35106[(24)]);
var inst_35022 = (state_35106[(25)]);
var inst_35019 = (state_35106[(19)]);
var inst_35025 = (state_35106[(26)]);
var inst_35042 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35044 = (function (){var all_files = inst_35019;
var res_SINGLEQUOTE_ = inst_35022;
var res = inst_35023;
var files_not_loaded = inst_35025;
var dependencies_that_loaded = inst_35027;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35027,inst_35023,inst_35022,inst_35019,inst_35025,inst_35042,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35043){
var map__35175 = p__35043;
var map__35175__$1 = ((((!((map__35175 == null)))?(((((map__35175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35175):map__35175);
var namespace = cljs.core.get.call(null,map__35175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35027,inst_35023,inst_35022,inst_35019,inst_35025,inst_35042,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35045 = cljs.core.map.call(null,inst_35044,inst_35023);
var inst_35046 = cljs.core.pr_str.call(null,inst_35045);
var inst_35047 = figwheel.client.utils.log.call(null,inst_35046);
var inst_35048 = (function (){var all_files = inst_35019;
var res_SINGLEQUOTE_ = inst_35022;
var res = inst_35023;
var files_not_loaded = inst_35025;
var dependencies_that_loaded = inst_35027;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35027,inst_35023,inst_35022,inst_35019,inst_35025,inst_35042,inst_35044,inst_35045,inst_35046,inst_35047,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35027,inst_35023,inst_35022,inst_35019,inst_35025,inst_35042,inst_35044,inst_35045,inst_35046,inst_35047,state_val_35107,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35049 = setTimeout(inst_35048,(10));
var state_35106__$1 = (function (){var statearr_35177 = state_35106;
(statearr_35177[(33)] = inst_35047);

(statearr_35177[(34)] = inst_35042);

return statearr_35177;
})();
var statearr_35178_35241 = state_35106__$1;
(statearr_35178_35241[(2)] = inst_35049);

(statearr_35178_35241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (16))){
var state_35106__$1 = state_35106;
var statearr_35179_35242 = state_35106__$1;
(statearr_35179_35242[(2)] = reload_dependents);

(statearr_35179_35242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (38))){
var inst_35059 = (state_35106[(16)]);
var inst_35077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35059);
var state_35106__$1 = state_35106;
var statearr_35180_35243 = state_35106__$1;
(statearr_35180_35243[(2)] = inst_35077);

(statearr_35180_35243[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (30))){
var state_35106__$1 = state_35106;
var statearr_35181_35244 = state_35106__$1;
(statearr_35181_35244[(2)] = null);

(statearr_35181_35244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (10))){
var inst_34979 = (state_35106[(22)]);
var inst_34981 = cljs.core.chunked_seq_QMARK_.call(null,inst_34979);
var state_35106__$1 = state_35106;
if(inst_34981){
var statearr_35182_35245 = state_35106__$1;
(statearr_35182_35245[(1)] = (13));

} else {
var statearr_35183_35246 = state_35106__$1;
(statearr_35183_35246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (18))){
var inst_35013 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
if(cljs.core.truth_(inst_35013)){
var statearr_35184_35247 = state_35106__$1;
(statearr_35184_35247[(1)] = (19));

} else {
var statearr_35185_35248 = state_35106__$1;
(statearr_35185_35248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (42))){
var state_35106__$1 = state_35106;
var statearr_35186_35249 = state_35106__$1;
(statearr_35186_35249[(2)] = null);

(statearr_35186_35249[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (37))){
var inst_35072 = (state_35106[(2)]);
var state_35106__$1 = state_35106;
var statearr_35187_35250 = state_35106__$1;
(statearr_35187_35250[(2)] = inst_35072);

(statearr_35187_35250[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35107 === (8))){
var inst_34979 = (state_35106[(22)]);
var inst_34966 = (state_35106[(10)]);
var inst_34979__$1 = cljs.core.seq.call(null,inst_34966);
var state_35106__$1 = (function (){var statearr_35188 = state_35106;
(statearr_35188[(22)] = inst_34979__$1);

return statearr_35188;
})();
if(inst_34979__$1){
var statearr_35189_35251 = state_35106__$1;
(statearr_35189_35251[(1)] = (10));

} else {
var statearr_35190_35252 = state_35106__$1;
(statearr_35190_35252[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29814__auto__,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto____0 = (function (){
var statearr_35191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35191[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto__);

(statearr_35191[(1)] = (1));

return statearr_35191;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto____1 = (function (state_35106){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_35106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e35192){if((e35192 instanceof Object)){
var ex__29818__auto__ = e35192;
var statearr_35193_35253 = state_35106;
(statearr_35193_35253[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35254 = state_35106;
state_35106 = G__35254;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto__ = function(state_35106){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto____1.call(this,state_35106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29906__auto__ = (function (){var statearr_35194 = f__29905__auto__.call(null);
(statearr_35194[(6)] = c__29904__auto__);

return statearr_35194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__,map__34951,map__34951__$1,opts,before_jsload,on_jsload,reload_dependents,map__34952,map__34952__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29904__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35257,link){
var map__35258 = p__35257;
var map__35258__$1 = ((((!((map__35258 == null)))?(((((map__35258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35258):map__35258);
var file = cljs.core.get.call(null,map__35258__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__35258,map__35258__$1,file){
return (function (p1__35255_SHARP_,p2__35256_SHARP_){
if(cljs.core._EQ_.call(null,p1__35255_SHARP_,p2__35256_SHARP_)){
return p1__35255_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__35258,map__35258__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35261){
var map__35262 = p__35261;
var map__35262__$1 = ((((!((map__35262 == null)))?(((((map__35262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35262):map__35262);
var match_length = cljs.core.get.call(null,map__35262__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35262__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35260_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35260_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35264_SHARP_,p2__35265_SHARP_){
return cljs.core.assoc.call(null,p1__35264_SHARP_,cljs.core.get.call(null,p2__35265_SHARP_,key),p2__35265_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35266 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35266);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35266);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35267,p__35268){
var map__35269 = p__35267;
var map__35269__$1 = ((((!((map__35269 == null)))?(((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35269):map__35269);
var on_cssload = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35270 = p__35268;
var map__35270__$1 = ((((!((map__35270 == null)))?(((((map__35270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35270):map__35270);
var files_msg = map__35270__$1;
var files = cljs.core.get.call(null,map__35270__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1526705069551
