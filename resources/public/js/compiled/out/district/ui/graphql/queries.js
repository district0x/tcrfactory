// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.graphql.queries');
goog.require('cljs.core');
goog.require('district.cljs_utils');
goog.require('district.ui.graphql.utils');
goog.require('district.graphql_utils');
district.ui.graphql.queries.gql_sync = (GraphQL["graphqlSync"]);
district.ui.graphql.queries.db_key = new cljs.core.Keyword(null,"district.ui.graphql","district.ui.graphql",-788927590);
district.ui.graphql.queries.config = (function district$ui$graphql$queries$config(var_args){
var G__28276 = arguments.length;
switch (G__28276) {
case 1:
return district.ui.graphql.queries.config.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.ui.graphql.queries.config.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

district.ui.graphql.queries.config.cljs$core$IFn$_invoke$arity$1 = (function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"config","config",994861415)], null));
});

district.ui.graphql.queries.config.cljs$core$IFn$_invoke$arity$2 = (function (db,key){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"config","config",994861415),key], null));
});

district.ui.graphql.queries.config.cljs$lang$maxFixedArity = 2;

district.ui.graphql.queries.merge_config = (function district$ui$graphql$queries$merge_config(db,config){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"config","config",994861415)], null),cljs.core.merge,config);
});
district.ui.graphql.queries.results = (function district$ui$graphql$queries$results(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"results","results",-1134170113)], null));
});
district.ui.graphql.queries.merge_results = (function district$ui$graphql$queries$merge_results(db,results){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"results","results",-1134170113)], null),district.cljs_utils.merge_in,results);
});
district.ui.graphql.queries.query__GT_batched_query = (function district$ui$graphql$queries$query__GT_batched_query(db,query_str,variables){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"query->batched-query","query->batched-query",-1075535425),query_str,variables], null));
});
district.ui.graphql.queries.query_info = (function district$ui$graphql$queries$query_info(db,query_str){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"query-info","query-info",244940749),query_str], null));
});
district.ui.graphql.queries.query__GT_batched_query_info = (function district$ui$graphql$queries$query__GT_batched_query_info(db,query,variables){
return district.ui.graphql.queries.query_info.call(null,db,district.ui.graphql.queries.query__GT_batched_query.call(null,db,query,variables));
});
district.ui.graphql.queries.assoc_queries_with_batched_query = (function district$ui$graphql$queries$assoc_queries_with_batched_query(db,query_configs,batched_query_str){
return cljs.core.reduce.call(null,(function (db__$1,p__28278){
var map__28279 = p__28278;
var map__28279__$1 = ((((!((map__28279 == null)))?(((((map__28279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28279):map__28279);
var query_str = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
var variables = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return cljs.core.assoc_in.call(null,db__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"query->batched-query","query->batched-query",-1075535425),query_str,variables], null),batched_query_str);
}),db,query_configs);
});
district.ui.graphql.queries.assoc_query_loading = (function district$ui$graphql$queries$assoc_query_loading(db,query_str,loading_QMARK_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"query-info","query-info",244940749),query_str,new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),loading_QMARK_);
});
district.ui.graphql.queries.assoc_query_errors = (function district$ui$graphql$queries$assoc_query_errors(db,query_str,errors){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"query-info","query-info",244940749),query_str,new cljs.core.Keyword(null,"errors","errors",-908790718)], null),errors);
});
district.ui.graphql.queries.query = (function district$ui$graphql$queries$query(db,query_str,variables){
var gql_name__GT_kw = district.ui.graphql.queries.config.call(null,db,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258));
var map__28282 = district.graphql_utils.js__GT_clj_response.call(null,district.ui.graphql.queries.gql_sync.call(null,district.ui.graphql.queries.config.call(null,db,new cljs.core.Keyword(null,"schema","schema",-1582001791)),query_str,district.ui.graphql.queries.results.call(null,db),cljs.core.PersistentArrayMap.EMPTY,cljs.core.clj__GT_js.call(null,variables),null,district.ui.graphql.utils.create_field_resolver.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),gql_name__GT_kw], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),gql_name__GT_kw], null));
var map__28282__$1 = ((((!((map__28282 == null)))?(((((map__28282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28282):map__28282);
var data = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.call(null,map__28282__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var query_info = district.ui.graphql.queries.query__GT_batched_query_info.call(null,db,query_str,variables);
return cljs.core.merge.call(null,data,(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("graphql","errors","graphql/errors",1997219913),cljs.core.map.call(null,((function (gql_name__GT_kw,map__28282,map__28282__$1,data,errors,query_info){
return (function (p1__28281_SHARP_){
return (p1__28281_SHARP_["message"]);
});})(gql_name__GT_kw,map__28282,map__28282__$1,data,errors,query_info))
,cljs.core.vec.call(null,errors))], null):null),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(query_info);
if(cljs.core.truth_(temp__5457__auto__)){
var errors__$1 = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("graphql","errors","graphql/errors",1997219913),errors__$1], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(query_info);
if(cljs.core.truth_(temp__5457__auto__)){
var loading_QMARK_ = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("graphql","loading?","graphql/loading?",2117612498),loading_QMARK_], null);
} else {
return null;
}
})());
});
district.ui.graphql.queries.entities = (function district$ui$graphql$queries$entities(var_args){
var G__28285 = arguments.length;
switch (G__28285) {
case 1:
return district.ui.graphql.queries.entities.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.ui.graphql.queries.entities.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

district.ui.graphql.queries.entities.cljs$core$IFn$_invoke$arity$1 = (function (db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"entities","entities",1940967403)], null));
});

district.ui.graphql.queries.entities.cljs$core$IFn$_invoke$arity$2 = (function (db,type){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"entities","entities",1940967403),type], null));
});

district.ui.graphql.queries.entities.cljs$lang$maxFixedArity = 2;

district.ui.graphql.queries.entity_id = (function district$ui$graphql$queries$entity_id(id){
if(cljs.core.map_QMARK_.call(null,id)){
return district.cljs_utils.transform_vals.call(null,cljs.core.str,id);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
}
});
district.ui.graphql.queries.entity = (function district$ui$graphql$queries$entity(db,type,id){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"entities","entities",1940967403),type,district.ui.graphql.queries.entity_id.call(null,id)], null));
});
district.ui.graphql.queries.graph = (function district$ui$graphql$queries$graph(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"graph","graph",1558099509)], null));
});
district.ui.graphql.queries.update_entity = (function district$ui$graphql$queries$update_entity(db,type,id,new_entity){
return cljs.core.update.call(null,db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.queries.db_key,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"entities","entities",1940967403),type,district.ui.graphql.queries.entity_id.call(null,id)], null),district.cljs_utils.merge_in,new_entity);
});

//# sourceMappingURL=queries.js.map?rel=1526705064706
