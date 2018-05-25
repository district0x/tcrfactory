// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.graphql.subs');
goog.require('cljs.core');
goog.require('district.ui.graphql.events');
goog.require('district.ui.graphql.queries');
goog.require('district.ui.graphql.utils');
goog.require('graphql_query.core');
goog.require('re_frame.core');
goog.require('reagent.ratom');
district.ui.graphql.subs.sub_fn = (function district$ui$graphql$subs$sub_fn(query_fn){
return (function (db,p__36226){
var vec__36227 = p__36226;
var seq__36228 = cljs.core.seq.call(null,vec__36227);
var first__36229 = cljs.core.first.call(null,seq__36228);
var seq__36228__$1 = cljs.core.next.call(null,seq__36228);
var _ = first__36229;
var args = seq__36228__$1;
return cljs.core.apply.call(null,query_fn,db,args);
});
});
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword("district.ui.graphql.subs","query","district.ui.graphql.subs/query",-317938676),(function (db,p__36230){
var vec__36231 = p__36230;
var _ = cljs.core.nth.call(null,vec__36231,(0),null);
var query = cljs.core.nth.call(null,vec__36231,(1),null);
var map__36234 = cljs.core.nth.call(null,vec__36231,(2),null);
var map__36234__$1 = ((((!((map__36234 == null)))?(((((map__36234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36234):map__36234);
var variables = cljs.core.get.call(null,map__36234__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var refetch_on = cljs.core.get.call(null,map__36234__$1,new cljs.core.Keyword(null,"refetch-on","refetch-on",899071755));
var refetch_id = cljs.core.get.call(null,map__36234__$1,new cljs.core.Keyword(null,"refetch-id","refetch-id",-1385897546));
var disable_fetch_QMARK_ = cljs.core.get.call(null,map__36234__$1,new cljs.core.Keyword(null,"disable-fetch?","disable-fetch?",-419354007));
var map__36236 = district.ui.graphql.utils.parse_query.call(null,query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150),district.ui.graphql.queries.config.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150))], null));
var map__36236__$1 = ((((!((map__36236 == null)))?(((((map__36236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36236):map__36236);
var query__$1 = cljs.core.get.call(null,map__36236__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_str = cljs.core.get.call(null,map__36236__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
var refetch_id__$1 = (cljs.core.truth_(refetch_on)?(function (){var or__3922__auto__ = refetch_id;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_str,variables,refetch_on], null));
}
})():null);
if(cljs.core.truth_(disable_fetch_QMARK_)){
} else {
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","query","district.ui.graphql.events/query",-459226942),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238),query_str,new cljs.core.Keyword(null,"variables","variables",1563680814),variables,new cljs.core.Keyword(null,"refetch-on","refetch-on",899071755),refetch_on,new cljs.core.Keyword(null,"refetch-id","refetch-id",-1385897546),refetch_id__$1], null)], null));
}

return reagent.ratom.make_reaction.call(null,((function (map__36236,map__36236__$1,query__$1,query_str,refetch_id__$1,vec__36231,_,query,map__36234,map__36234__$1,variables,refetch_on,refetch_id,disable_fetch_QMARK_){
return (function (){
return district.ui.graphql.queries.query.call(null,cljs.core.deref.call(null,db),query_str,variables);
});})(map__36236,map__36236__$1,query__$1,query_str,refetch_id__$1,vec__36231,_,query,map__36234,map__36234__$1,variables,refetch_on,refetch_id,disable_fetch_QMARK_))
,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (map__36236,map__36236__$1,query__$1,query_str,refetch_id__$1,vec__36231,_,query,map__36234,map__36234__$1,variables,refetch_on,refetch_id,disable_fetch_QMARK_){
return (function (){
if(cljs.core.truth_(refetch_id__$1)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","unregister-refetch","district.ui.graphql.events/unregister-refetch",-1969429843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refetch-id","refetch-id",-1385897546),refetch_id__$1], null)], null));
} else {
return null;
}
});})(map__36236,map__36236__$1,query__$1,query_str,refetch_id__$1,vec__36231,_,query,map__36234,map__36234__$1,variables,refetch_on,refetch_id,disable_fetch_QMARK_))
);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.graphql.subs","entities","district.ui.graphql.subs/entities",1094192121),district.ui.graphql.subs.sub_fn.call(null,district.ui.graphql.queries.entities));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.graphql.subs","entity","district.ui.graphql.subs/entity",-1224441426),district.ui.graphql.subs.sub_fn.call(null,district.ui.graphql.queries.entity));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.graphql.subs","graph","district.ui.graphql.subs/graph",1660252775),district.ui.graphql.queries.graph);

//# sourceMappingURL=subs.js.map?rel=1526713742094
