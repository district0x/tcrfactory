// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.graphql.utils');
goog.require('cljs.core');
goog.require('camel_snake_kebab.extras');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
goog.require('cljsjs.dataloader');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('contextual.core');
goog.require('district.cljs_utils');
goog.require('district.graphql_utils');
goog.require('graphql_query.core');
goog.require('print.foo');
goog.require('re_frame.core');
district.ui.graphql.utils.global$module$cljsjs$dataloader = goog.global.DataLoader;
district.ui.graphql.utils.parse_graphql = (GraphQL["parse"]);
district.ui.graphql.utils.print_str_graphql = (GraphQL["print"]);
district.ui.graphql.utils.visit = (GraphQL["visit"]);
district.ui.graphql.utils.gql_build_schema = (GraphQL["buildSchema"]);
district.ui.graphql.utils.typename_field = new cljs.core.Keyword(null,"__typename","__typename",618075172);
district.ui.graphql.utils.create_field_node = (function district$ui$graphql$utils$create_field_node(name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),"Field",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),"Name",new cljs.core.Keyword(null,"value","value",305978217),name], null)], null);
});
district.ui.graphql.utils.create_name_node = (function district$ui$graphql$utils$create_name_node(name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),"Name",new cljs.core.Keyword(null,"value","value",305978217),name], null);
});
district.ui.graphql.utils.build_schema = (function district$ui$graphql$utils$build_schema(schema){
var G__28055 = schema;
var G__28055__$1 = ((typeof schema === 'string')?district.ui.graphql.utils.gql_build_schema.call(null,G__28055):G__28055);
var G__28055__$2 = district.graphql_utils.add_keyword_type.call(null,G__28055__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-serialize?","disable-serialize?",504422491),true], null))
;
return district.graphql_utils.add_date_type.call(null,G__28055__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-serialize?","disable-serialize?",504422491),true], null));

});
district.ui.graphql.utils.ancestors__GT_query_path = (function district$ui$graphql$utils$ancestors__GT_query_path(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28064 = arguments.length;
var i__4500__auto___28065 = (0);
while(true){
if((i__4500__auto___28065 < len__4499__auto___28064)){
args__4502__auto__.push((arguments[i__4500__auto___28065]));

var G__28066 = (i__4500__auto___28065 + (1));
i__4500__auto___28065 = G__28066;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.ui.graphql.utils.ancestors__GT_query_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.ui.graphql.utils.ancestors__GT_query_path.cljs$core$IFn$_invoke$arity$variadic = (function (ancestors,p__28058){
var vec__28059 = p__28058;
var map__28062 = cljs.core.nth.call(null,vec__28059,(0),null);
var map__28062__$1 = ((((!((map__28062 == null)))?(((((map__28062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28062):map__28062);
var use_aliases_QMARK_ = cljs.core.get.call(null,map__28062__$1,new cljs.core.Keyword(null,"use-aliases?","use-aliases?",1495454305));
var gql_name__GT_kw = cljs.core.get.call(null,map__28062__$1,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),cljs.core.identity);
return cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (vec__28059,map__28062,map__28062__$1,use_aliases_QMARK_,gql_name__GT_kw){
return (function (node){
if(cljs.core.truth_((function (){var and__3911__auto__ = use_aliases_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (node["alias"]);
} else {
return and__3911__auto__;
}
})())){
return gql_name__GT_kw.call(null,(node["alias"]["value"]));
} else {
if(cljs.core._EQ_.call(null,(node["kind"]),"FragmentDefinition")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typename","typename",-263408442),gql_name__GT_kw.call(null,(node["typeCondition"]["name"]["value"])),new cljs.core.Keyword(null,"fragment","fragment",826775688),cljs.core.keyword.call(null,gql_name__GT_kw.call(null,(node["name"]["value"])))], null);
} else {
if(cljs.core.truth_((node["name"]))){
return gql_name__GT_kw.call(null,(node["name"]["value"]));
} else {
return null;

}
}
}
});})(vec__28059,map__28062,map__28062__$1,use_aliases_QMARK_,gql_name__GT_kw))
,cljs.core.remove.call(null,((function (vec__28059,map__28062,map__28062__$1,use_aliases_QMARK_,gql_name__GT_kw){
return (function (node){
return ((cljs.core.not.call(null,node)) || (cljs.core._EQ_.call(null,(node["kind"]),"OperationDefinition")));
});})(vec__28059,map__28062,map__28062__$1,use_aliases_QMARK_,gql_name__GT_kw))
,ancestors))));
});

district.ui.graphql.utils.ancestors__GT_query_path.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.ui.graphql.utils.ancestors__GT_query_path.cljs$lang$applyTo = (function (seq28056){
var G__28057 = cljs.core.first.call(null,seq28056);
var seq28056__$1 = cljs.core.next.call(null,seq28056);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28057,seq28056__$1);
});

district.ui.graphql.utils.query_path__GT_graphql_type = (function district$ui$graphql$utils$query_path__GT_graphql_type(schema,query_path){
var type_map = cljs.core.js_invoke.call(null,schema,"getTypeMap");
var top_fields = cljs.core.js_invoke.call(null,cljs.core.js_invoke.call(null,schema,"getQueryType"),"getFields");
var fields = top_fields;
var query_path_rest = query_path;
while(true){
var field_name = cljs.core.first.call(null,query_path_rest);
var gql_type = (function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"typename","typename",-263408442).cljs$core$IFn$_invoke$arity$1(field_name);
if(cljs.core.truth_(temp__5455__auto__)){
var typename = temp__5455__auto__;
return (type_map[typename]);
} else {
return (fields[field_name]["type"]);
}
})();
var gql_type__$1 = (cljs.core.truth_((function (){var c__3954__auto__ = (GraphQL["GraphQLList"]);
var x__3955__auto__ = gql_type;
return (x__3955__auto__ instanceof c__3954__auto__);
})())?(gql_type["ofType"]):gql_type);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,query_path_rest))){
return gql_type__$1;
} else {
var G__28067 = cljs.core.js_invoke.call(null,gql_type__$1,"getFields");
var G__28068 = cljs.core.rest.call(null,query_path_rest);
fields = G__28067;
query_path_rest = G__28068;
continue;
}
break;
}
});
district.ui.graphql.utils.graphql_type__GT_id_field_names = (function district$ui$graphql$utils$graphql_type__GT_id_field_names(gql_type){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.name,cljs.core.first),cljs.core.filter.call(null,(function (p__28069){
var vec__28070 = p__28069;
var _ = cljs.core.nth.call(null,vec__28070,(0),null);
var v = cljs.core.nth.call(null,vec__28070,(1),null);
var gql_type__$1 = (v["type"]);
var name = (cljs.core.truth_((function (){var c__3954__auto__ = (GraphQL["GraphQLNonNull"]);
var x__3955__auto__ = gql_type__$1;
return (x__3955__auto__ instanceof c__3954__auto__);
})())?(gql_type__$1["ofType"]["name"]):(gql_type__$1["name"]));
return cljs.core._EQ_.call(null,name,"ID");
}),district.cljs_utils.js_obj__GT_clj.call(null,cljs.core.js_invoke.call(null,gql_type,"getFields")))));
});
district.ui.graphql.utils.get_id_fields_names = (function district$ui$graphql$utils$get_id_fields_names(schema,ancestors){
var temp__5457__auto__ = district.ui.graphql.utils.ancestors__GT_query_path.call(null,ancestors);
if(cljs.core.truth_(temp__5457__auto__)){
var query_path = temp__5457__auto__;
return district.ui.graphql.utils.graphql_type__GT_id_field_names.call(null,district.ui.graphql.utils.query_path__GT_graphql_type.call(null,schema,query_path));
} else {
return null;
}
});
district.ui.graphql.utils.contains_typename_QMARK_ = (function district$ui$graphql$utils$contains_typename_QMARK_(node){
var and__3911__auto__ = cljs.core.map_QMARK_.call(null,node);
if(and__3911__auto__){
return cljs.core.get.call(null,node,district.ui.graphql.utils.typename_field);
} else {
return and__3911__auto__;
}
});
district.ui.graphql.utils.entity_QMARK_ = (function district$ui$graphql$utils$entity_QMARK_(node,id_field_names){
return ((cljs.core.map_QMARK_.call(null,node)) && (cljs.core.seq.call(null,id_field_names)) && (cljs.core.every_QMARK_.call(null,(function (p1__28073_SHARP_){
return !((cljs.core.get.call(null,node,p1__28073_SHARP_) == null));
}),id_field_names)));
});
district.ui.graphql.utils.get_ref = (function district$ui$graphql$utils$get_ref(node,id_field_names){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,id_field_names)))?cljs.core.get.call(null,node,cljs.core.first.call(null,id_field_names)):cljs.core.select_keys.call(null,node,id_field_names)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.call(null,node,district.ui.graphql.utils.typename_field),new cljs.core.Keyword("graphql","entity-ref?","graphql/entity-ref?",624398924),true], null);
});
district.ui.graphql.utils.entity_ref_QMARK_ = (function district$ui$graphql$utils$entity_ref_QMARK_(x){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("graphql","entity-ref?","graphql/entity-ref?",624398924).cljs$core$IFn$_invoke$arity$1(x));
});
district.ui.graphql.utils.update_entity = (function district$ui$graphql$utils$update_entity(state,p__28074,item){
var map__28075 = p__28074;
var map__28075__$1 = ((((!((map__28075 == null)))?(((((map__28075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28075):map__28075);
var id = cljs.core.get.call(null,map__28075__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__28075__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null),district.cljs_utils.merge_in,item);
});
district.ui.graphql.utils.get_entity = (function district$ui$graphql$utils$get_entity(entities,p__28077){
var map__28078 = p__28077;
var map__28078__$1 = ((((!((map__28078 == null)))?(((((map__28078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28078):map__28078);
var id = cljs.core.get.call(null,map__28078__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.call(null,map__28078__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.get_in.call(null,entities,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,id], null));
});
district.ui.graphql.utils.ensure_count = (function district$ui$graphql$utils$ensure_count(map_seq,c){
return cljs.core.concat.call(null,map_seq,cljs.core.repeat.call(null,(function (){var x__4006__auto__ = (c - cljs.core.count.call(null,map_seq));
var y__4007__auto__ = (0);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"__typename","__typename",618075172).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,map_seq));
if(cljs.core.truth_(temp__5455__auto__)){
var typename = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__typename","__typename",618075172),typename], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
var merge_in_colls_STAR_ = (function district$ui$graphql$utils$merge_in_colls_STAR_(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge_with.call(null,district$ui$graphql$utils$merge_in_colls_STAR_,a,b);
} else {
if(((cljs.core.sequential_QMARK_.call(null,a)) && (cljs.core.sequential_QMARK_.call(null,b)) && (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,a))) || (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,b))))))){
var c = (function (){var x__4006__auto__ = cljs.core.count.call(null,a);
var y__4007__auto__ = cljs.core.count.call(null,b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.reduce,district$ui$graphql$utils$merge_in_colls_STAR_),cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,district.ui.graphql.utils.ensure_count.call(null,a,c),district.ui.graphql.utils.ensure_count.call(null,b,c))));
} else {
return b;

}
}
});
/**
 * Merge multiple nested maps. Merges maps in collections as well
 */
district.ui.graphql.utils.merge_in_colls = (function district$ui$graphql$utils$merge_in_colls(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28081 = arguments.length;
var i__4500__auto___28082 = (0);
while(true){
if((i__4500__auto___28082 < len__4499__auto___28081)){
args__4502__auto__.push((arguments[i__4500__auto___28082]));

var G__28083 = (i__4500__auto___28082 + (1));
i__4500__auto___28082 = G__28083;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return district.ui.graphql.utils.merge_in_colls.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

district.ui.graphql.utils.merge_in_colls.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,merge_in_colls_STAR_,null,args);
});

district.ui.graphql.utils.merge_in_colls.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
district.ui.graphql.utils.merge_in_colls.cljs$lang$applyTo = (function (seq28080){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28080));
});

district.ui.graphql.utils.remove_nil_vals = (function district$ui$graphql$utils$remove_nil_vals(form){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p1__28084_SHARP_){
return (cljs.core.second.call(null,p1__28084_SHARP_) == null);
}),x));
} else {
return x;
}
}),form);
});
district.ui.graphql.utils.response_replace_aliases = (function district$ui$graphql$utils$response_replace_aliases(data,p__28085){
var map__28086 = p__28085;
var map__28086__$1 = ((((!((map__28086 == null)))?(((((map__28086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28086):map__28086);
var query_clj = map__28086__$1;
var query = cljs.core.get.call(null,map__28086__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return clojure.walk.postwalk.call(null,((function (map__28086,map__28086__$1,query_clj,query){
return (function (node){
try{var dectx_node = contextual.core.decontextualize.call(null,node);
try{if(cljs.core.map_QMARK_.call(null,dectx_node)){
var path = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.number_QMARK_,contextual.core.context.call(null,node)));
return cljs.core.reduce.call(null,((function (path,dectx_node,map__28086,map__28086__$1,query_clj,query){
return (function (acc,p__28090){
var vec__28091 = p__28090;
var key = cljs.core.nth.call(null,vec__28091,(0),null);
var value = cljs.core.nth.call(null,vec__28091,(1),null);
var map__28094 = cljs.core.meta.call(null,cljs.core.get_in.call(null,query,cljs.core.concat.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))));
var map__28094__$1 = ((((!((map__28094 == null)))?(((((map__28094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28094):map__28094);
var name = cljs.core.get.call(null,map__28094__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var args = cljs.core.get.call(null,map__28094__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return cljs.core.update_in.call(null,acc,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return key;
}
})(),args], null)),district.ui.graphql.utils.merge_in_colls,value);
});})(path,dectx_node,map__28086,map__28086__$1,query_clj,query))
,cljs.core.PersistentArrayMap.EMPTY,dectx_node);
} else {
return dectx_node;
}
}catch (e28089){var _ = e28089;
return dectx_node;
}}catch (e28088){var _ = e28088;
return node;
}});})(map__28086,map__28086__$1,query_clj,query))
,contextual.core.contextualize.call(null,data));
});
district.ui.graphql.utils.query_clj_replace_aliases = (function district$ui$graphql$utils$query_clj_replace_aliases(query_clj){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.map_QMARK_.call(null,node);
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.seq.call(null,node);
if(and__3911__auto____$1){
return cljs.core.some.call(null,cljs.core.meta,cljs.core.vals.call(null,node));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return cljs.core.with_meta.call(null,cljs.core.reduce.call(null,(function (acc,p__28096){
var vec__28097 = p__28096;
var k = cljs.core.nth.call(null,vec__28097,(0),null);
var v = cljs.core.nth.call(null,vec__28097,(1),null);
var map__28100 = cljs.core.meta.call(null,v);
var map__28100__$1 = ((((!((map__28100 == null)))?(((((map__28100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28100):map__28100);
var args = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var name = cljs.core.get.call(null,map__28100__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return args;
}
})())){
return cljs.core.assoc_in.call(null,acc,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return k;
}
})(),args], null)),v);
} else {
return cljs.core.assoc.call(null,acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,node),cljs.core.meta.call(null,node));
} else {
return node;
}
}),cljs.core.select_keys.call(null,query_clj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null)));
});
district.ui.graphql.utils.replace_entities_with_refs = (function district$ui$graphql$utils$replace_entities_with_refs(data,p__28103,opts){
var map__28104 = p__28103;
var map__28104__$1 = ((((!((map__28104 == null)))?(((((map__28104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28104):map__28104);
var query_clj = map__28104__$1;
var query = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entities = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var graph = clojure.walk.postwalk.call(null,((function (entities,map__28104,map__28104__$1,query_clj,query){
return (function (node){
try{var dectx_node = contextual.core.decontextualize.call(null,node);
try{if(cljs.core.map_QMARK_.call(null,dectx_node)){
var path = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.number_QMARK_,contextual.core.context.call(null,node)));
var id_field_names = new cljs.core.Keyword(null,"id-field-names","id-field-names",1469809468).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.get_in.call(null,query,path)));
if(cljs.core.truth_(district.ui.graphql.utils.entity_QMARK_.call(null,dectx_node,id_field_names))){
var dectx_node__$1 = cljs.core.update.call(null,dectx_node,district.ui.graphql.utils.typename_field,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258).cljs$core$IFn$_invoke$arity$1(opts));
var ref = district.ui.graphql.utils.get_ref.call(null,dectx_node__$1,id_field_names);
cljs.core.swap_BANG_.call(null,entities,((function (dectx_node__$1,ref,path,id_field_names,dectx_node,entities,map__28104,map__28104__$1,query_clj,query){
return (function (p1__28102_SHARP_){
return district.ui.graphql.utils.update_entity.call(null,p1__28102_SHARP_,ref,dectx_node__$1);
});})(dectx_node__$1,ref,path,id_field_names,dectx_node,entities,map__28104,map__28104__$1,query_clj,query))
);

return ref;
} else {
if(cljs.core.truth_(district.ui.graphql.utils.contains_typename_QMARK_.call(null,dectx_node))){
var dectx_node__$1 = cljs.core.update.call(null,dectx_node,district.ui.graphql.utils.typename_field,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258).cljs$core$IFn$_invoke$arity$1(opts));
return dectx_node__$1;
} else {
return dectx_node;

}
}
} else {
return dectx_node;
}
}catch (e28107){var _ = e28107;
return dectx_node;
}}catch (e28106){var _ = e28106;
return node;
}});})(entities,map__28104,map__28104__$1,query_clj,query))
,contextual.core.contextualize.call(null,data));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.deref.call(null,entities),new cljs.core.Keyword(null,"graph","graph",1558099509),graph], null);
});
district.ui.graphql.utils.normalize_response = (function district$ui$graphql$utils$normalize_response(data,query_clj,opts){
return district.ui.graphql.utils.replace_entities_with_refs.call(null,clojure.walk.postwalk.call(null,cljs.core.identity,district.ui.graphql.utils.response_replace_aliases.call(null,data,query_clj)),district.ui.graphql.utils.query_clj_replace_aliases.call(null,query_clj),opts);
});
district.ui.graphql.utils.scalar_type_of_QMARK_ = (function district$ui$graphql$utils$scalar_type_of_QMARK_(x,scalar_type_name){
var and__3911__auto__ = (function (){var c__3954__auto__ = (GraphQL["GraphQLScalarType"]);
var x__3955__auto__ = x;
return (x__3955__auto__ instanceof c__3954__auto__);
})();
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,(x["name"]),scalar_type_name);
} else {
return and__3911__auto__;
}
});
district.ui.graphql.utils.scalar_arg_vals__GT_str = (function district$ui$graphql$utils$scalar_arg_vals__GT_str(v){
if((v instanceof cljs.core.Keyword)){
return district.cljs_utils.kw__GT_str.call(null,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.mapv.call(null,district.ui.graphql.utils.scalar_arg_vals__GT_str,v);
} else {
if(cljs.core.truth_(cljs_time.core.date_QMARK_.call(null,v))){
return cljs_time.coerce.to_long.call(null,v);
} else {
return v;

}
}
}
});
district.ui.graphql.utils.serialize_args = (function district$ui$graphql$utils$serialize_args(args,p__28108){
var map__28109 = p__28108;
var map__28109__$1 = ((((!((map__28109 == null)))?(((((map__28109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28109):map__28109);
var gql_name__GT_kw = cljs.core.get.call(null,map__28109__$1,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258));
var args__$1 = cljs.core.js__GT_clj.call(null,args);
var args__$2 = ((cljs.core.seq.call(null,args__$1))?district.cljs_utils.transform_vals.call(null,district.ui.graphql.utils.scalar_arg_vals__GT_str,camel_snake_kebab.extras.transform_keys.call(null,gql_name__GT_kw,args__$1)):null);
return args__$2;
});
district.ui.graphql.utils.spread_query_fragments = (function district$ui$graphql$utils$spread_query_fragments(query_clj){
return cljs.core.update.call(null,query_clj,new cljs.core.Keyword(null,"query","query",-1288509510),(function (query){
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
var frag_keys = cljs.core.filter.call(null,(function (p1__28111_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.namespace.call(null,p1__28111_SHARP_),"fragment");
}),cljs.core.keys.call(null,x));
return cljs.core.reduce.call(null,((function (frag_keys){
return (function (acc,frag_key){
return cljs.core.dissoc.call(null,district.cljs_utils.merge_in.call(null,acc,cljs.core.get.call(null,query_clj,frag_key)),frag_key);
});})(frag_keys))
,x,frag_keys);
} else {
return x;
}
}),query);
}));
});
district.ui.graphql.utils.query__GT_clj = (function district$ui$graphql$utils$query__GT_clj(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28125 = arguments.length;
var i__4500__auto___28126 = (0);
while(true){
if((i__4500__auto___28126 < len__4499__auto___28125)){
args__4502__auto__.push((arguments[i__4500__auto___28126]));

var G__28127 = (i__4500__auto___28126 + (1));
i__4500__auto___28126 = G__28127;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.graphql.utils.query__GT_clj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.graphql.utils.query__GT_clj.cljs$core$IFn$_invoke$arity$variadic = (function (query_ast,schema,p__28115){
var vec__28116 = p__28115;
var map__28119 = cljs.core.nth.call(null,vec__28116,(0),null);
var map__28119__$1 = ((((!((map__28119 == null)))?(((((map__28119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28119):map__28119);
var gql_name__GT_kw = cljs.core.get.call(null,map__28119__$1,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),cljs.core.identity);
var variables = cljs.core.get.call(null,map__28119__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var m = cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY);
var variables__$1 = district.ui.graphql.utils.serialize_args.call(null,variables,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),gql_name__GT_kw], null));
return district.ui.graphql.utils.spread_query_fragments.call(null,district.ui.graphql.utils.visit.call(null,query_ast,({"leave": ((function (m,variables__$1,vec__28116,map__28119,map__28119__$1,gql_name__GT_kw,variables){
return (function (node,key,parent,path,ancestors){
var pred__28121 = cljs.core._EQ_;
var expr__28122 = (node["kind"]);
if(cljs.core.truth_(pred__28121.call(null,"Document",expr__28122))){
return m.call(null,(node["definitions"]));
} else {
if(cljs.core.truth_(pred__28121.call(null,"Name",expr__28122))){
return gql_name__GT_kw.call(null,(node["value"]));
} else {
if(cljs.core.truth_(pred__28121.call(null,"Argument",expr__28122))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(node["name"]),(node["value"])]);
} else {
if(cljs.core.truth_(pred__28121.call(null,"OperationDefinition",expr__28122))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.with_meta.call(null,(node["selectionSet"]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.keyword.call(null,(node["operation"]))], null))], null);
} else {
if(cljs.core.truth_(pred__28121.call(null,"SelectionSet",expr__28122))){
var selections = m.call(null,(node["selections"]));
var id_field_names = district.ui.graphql.utils.get_id_fields_names.call(null,schema,cljs.core.concat.call(null,ancestors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent], null)));
if(cljs.core.seq.call(null,id_field_names)){
return cljs.core.with_meta.call(null,selections,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-field-names","id-field-names",1469809468),cljs.core.map.call(null,gql_name__GT_kw,id_field_names)], null));
} else {
return selections;
}
} else {
if(cljs.core.truth_(pred__28121.call(null,"Field",expr__28122))){
var selection = (node["selectionSet"]);
var metadata = (function (){var G__28124 = null;
var G__28124__$1 = ((cljs.core.seq.call(null,cljs.core.vec.call(null,(node["arguments"]))))?cljs.core.assoc.call(null,G__28124,new cljs.core.Keyword(null,"args","args",1315556576),m.call(null,(node["arguments"]))):G__28124);
if(cljs.core.boolean$.call(null,(node["alias"]))){
return cljs.core.assoc.call(null,G__28124__$1,new cljs.core.Keyword(null,"name","name",1843675177),(node["name"]));
} else {
return G__28124__$1;
}
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var or__3922__auto__ = (node["alias"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (node["name"]);
}
})(),cljs.core.with_meta.call(null,(function (){var or__3922__auto__ = selection;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.merge.call(null,cljs.core.meta.call(null,selection),metadata))]);
} else {
if(cljs.core.truth_(pred__28121.call(null,"IntValue",expr__28122))){
return parseInt((node["value"]));
} else {
if(cljs.core.truth_(pred__28121.call(null,"FloatValue",expr__28122))){
return parseFloat((node["value"]));
} else {
if(cljs.core.truth_(pred__28121.call(null,"NullValue",expr__28122))){
return (node["value"]);
} else {
if(cljs.core.truth_(pred__28121.call(null,"StringValue",expr__28122))){
return (node["value"]);
} else {
if(cljs.core.truth_(pred__28121.call(null,"BooleanValue",expr__28122))){
return cljs.core.boolean$.call(null,(node["value"]));
} else {
if(cljs.core.truth_(pred__28121.call(null,"ListValue",expr__28122))){
return cljs.core.vec.call(null,(node["values"]));
} else {
if(cljs.core.truth_(pred__28121.call(null,"ObjectValue",expr__28122))){
return (node["value"]);
} else {
if(cljs.core.truth_(pred__28121.call(null,"EnumValue",expr__28122))){
return (node["value"]);
} else {
if(cljs.core.truth_(pred__28121.call(null,"Variable",expr__28122))){
return cljs.core.get.call(null,variables__$1,(node["name"]));
} else {
if(cljs.core.truth_(pred__28121.call(null,"FragmentDefinition",expr__28122))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688),(node["name"])),(node["selectionSet"])]);
} else {
if(cljs.core.truth_(pred__28121.call(null,"FragmentSpread",expr__28122))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688),(node["name"])),cljs.core.PersistentArrayMap.EMPTY]);
} else {
return undefined;
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
});})(m,variables__$1,vec__28116,map__28119,map__28119__$1,gql_name__GT_kw,variables))
})));
});

district.ui.graphql.utils.query__GT_clj.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.graphql.utils.query__GT_clj.cljs$lang$applyTo = (function (seq28112){
var G__28113 = cljs.core.first.call(null,seq28112);
var seq28112__$1 = cljs.core.next.call(null,seq28112);
var G__28114 = cljs.core.first.call(null,seq28112__$1);
var seq28112__$2 = cljs.core.next.call(null,seq28112__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28113,G__28114,seq28112__$2);
});

district.ui.graphql.utils.create_field_resolver = (function district$ui$graphql$utils$create_field_resolver(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28142 = arguments.length;
var i__4500__auto___28143 = (0);
while(true){
if((i__4500__auto___28143 < len__4499__auto___28142)){
args__4502__auto__.push((arguments[i__4500__auto___28143]));

var G__28144 = (i__4500__auto___28143 + (1));
i__4500__auto___28143 = G__28144;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return district.ui.graphql.utils.create_field_resolver.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

district.ui.graphql.utils.create_field_resolver.cljs$core$IFn$_invoke$arity$variadic = (function (p__28129){
var vec__28130 = p__28129;
var map__28133 = cljs.core.nth.call(null,vec__28130,(0),null);
var map__28133__$1 = ((((!((map__28133 == null)))?(((((map__28133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28133):map__28133);
var gql_name__GT_kw = cljs.core.get.call(null,map__28133__$1,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258));
return ((function (vec__28130,map__28133,map__28133__$1,gql_name__GT_kw){
return (function (p__28135,args,_,info){
var map__28136 = p__28135;
var map__28136__$1 = ((((!((map__28136 == null)))?(((((map__28136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28136):map__28136);
var graph = cljs.core.get.call(null,map__28136__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var entities = cljs.core.get.call(null,map__28136__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
var name = (info["fieldName"]);
var args__$1 = district.ui.graphql.utils.serialize_args.call(null,args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),gql_name__GT_kw], null));
var value = cljs.core.get_in.call(null,graph,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gql_name__GT_kw.call(null,name),args__$1], null)));
if(cljs.core.map_QMARK_.call(null,value)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),(cljs.core.truth_(district.ui.graphql.utils.entity_ref_QMARK_.call(null,value))?district.ui.graphql.utils.get_entity.call(null,entities,value):value),new cljs.core.Keyword(null,"entities","entities",1940967403),entities], null);
} else {
if(((cljs.core.sequential_QMARK_.call(null,value)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,value))))){
var array = (new Array());
var seq__28138_28145 = cljs.core.seq.call(null,value);
var chunk__28139_28146 = null;
var count__28140_28147 = (0);
var i__28141_28148 = (0);
while(true){
if((i__28141_28148 < count__28140_28147)){
var item_28149 = cljs.core._nth.call(null,chunk__28139_28146,i__28141_28148);
var item_28150__$1 = (cljs.core.truth_(district.ui.graphql.utils.entity_ref_QMARK_.call(null,item_28149))?district.ui.graphql.utils.get_entity.call(null,entities,item_28149):item_28149);
array.push(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),item_28150__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),entities], null));


var G__28151 = seq__28138_28145;
var G__28152 = chunk__28139_28146;
var G__28153 = count__28140_28147;
var G__28154 = (i__28141_28148 + (1));
seq__28138_28145 = G__28151;
chunk__28139_28146 = G__28152;
count__28140_28147 = G__28153;
i__28141_28148 = G__28154;
continue;
} else {
var temp__5457__auto___28155 = cljs.core.seq.call(null,seq__28138_28145);
if(temp__5457__auto___28155){
var seq__28138_28156__$1 = temp__5457__auto___28155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28138_28156__$1)){
var c__4319__auto___28157 = cljs.core.chunk_first.call(null,seq__28138_28156__$1);
var G__28158 = cljs.core.chunk_rest.call(null,seq__28138_28156__$1);
var G__28159 = c__4319__auto___28157;
var G__28160 = cljs.core.count.call(null,c__4319__auto___28157);
var G__28161 = (0);
seq__28138_28145 = G__28158;
chunk__28139_28146 = G__28159;
count__28140_28147 = G__28160;
i__28141_28148 = G__28161;
continue;
} else {
var item_28162 = cljs.core.first.call(null,seq__28138_28156__$1);
var item_28163__$1 = (cljs.core.truth_(district.ui.graphql.utils.entity_ref_QMARK_.call(null,item_28162))?district.ui.graphql.utils.get_entity.call(null,entities,item_28162):item_28162);
array.push(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),item_28163__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),entities], null));


var G__28164 = cljs.core.next.call(null,seq__28138_28156__$1);
var G__28165 = null;
var G__28166 = (0);
var G__28167 = (0);
seq__28138_28145 = G__28164;
chunk__28139_28146 = G__28165;
count__28140_28147 = G__28166;
i__28141_28148 = G__28167;
continue;
}
} else {
}
}
break;
}

return array;
} else {
if(cljs.core.truth_(district.ui.graphql.utils.scalar_type_of_QMARK_.call(null,(info["returnType"]),"Keyword"))){
return cljs.core.keyword.call(null,((cljs.core.boolean_QMARK_.call(null,value))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''):value));
} else {
if(cljs.core.truth_(district.ui.graphql.utils.scalar_type_of_QMARK_.call(null,(info["returnType"]),"Date"))){
return cljs_time.coerce.from_long.call(null,value);
} else {
return value;

}
}
}
}
});
;})(vec__28130,map__28133,map__28133__$1,gql_name__GT_kw))
});

district.ui.graphql.utils.create_field_resolver.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
district.ui.graphql.utils.create_field_resolver.cljs$lang$applyTo = (function (seq28128){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28128));
});

district.ui.graphql.utils.distinct_name_fn = (function district$ui$graphql$utils$distinct_name_fn(id){
return (function (name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
});
});
district.ui.graphql.utils.rename_arg_variable = (function district$ui$graphql$utils$rename_arg_variable(arg,rename_fn){
if(cljs.core._EQ_.call(null,"Variable",new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(arg)))){
return cljs.core.update_in.call(null,arg,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),rename_fn);
} else {
return arg;
}
});
district.ui.graphql.utils.batch_queries = (function district$ui$graphql$utils$batch_queries(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28179 = arguments.length;
var i__4500__auto___28180 = (0);
while(true){
if((i__4500__auto___28180 < len__4499__auto___28179)){
args__4502__auto__.push((arguments[i__4500__auto___28180]));

var G__28181 = (i__4500__auto___28180 + (1));
i__4500__auto___28180 = G__28181;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return district.ui.graphql.utils.batch_queries.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

district.ui.graphql.utils.batch_queries.cljs$core$IFn$_invoke$arity$variadic = (function (query_configs){
var query_configs__$1 = cljs.core.map.call(null,(function (p1__28168_SHARP_){
return cljs.core.select_keys.call(null,p1__28168_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"variables","variables",1563680814)], null));
}),cljs.core.js__GT_clj.call(null,query_configs,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
return cljs.core.update.call(null,cljs.core.reduce.call(null,((function (query_configs__$1){
return (function (acc,p__28171){
var map__28172 = p__28171;
var map__28172__$1 = ((((!((map__28172 == null)))?(((((map__28172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28172):map__28172);
var query = cljs.core.get.call(null,map__28172__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables = cljs.core.get.call(null,map__28172__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var query_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,variables], null))))].join('');
var distinct_name = district.ui.graphql.utils.distinct_name_fn.call(null,query_id);
var variable_defs = cljs.core.map.call(null,((function (query_id,distinct_name,map__28172,map__28172__$1,query,variables,query_configs__$1){
return (function (var_def){
return cljs.core.update_in.call(null,var_def,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),distinct_name);
});})(query_id,distinct_name,map__28172,map__28172__$1,query,variables,query_configs__$1))
,cljs.core.get_in.call(null,query,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"definitions","definitions",167529986),(0),new cljs.core.Keyword(null,"variableDefinitions","variableDefinitions",1372130248)], null)));
var selections = cljs.core.map.call(null,((function (query_id,distinct_name,variable_defs,map__28172,map__28172__$1,query,variables,query_configs__$1){
return (function (sel){
var G__28174 = sel;
var G__28174__$1 = cljs.core.update.call(null,G__28174,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),cljs.core.partial.call(null,cljs.core.map,((function (G__28174,query_id,distinct_name,variable_defs,map__28172,map__28172__$1,query,variables,query_configs__$1){
return (function (p1__28169_SHARP_){
return district.ui.graphql.utils.rename_arg_variable.call(null,p1__28169_SHARP_,distinct_name);
});})(G__28174,query_id,distinct_name,variable_defs,map__28172,map__28172__$1,query,variables,query_configs__$1))
))
;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(sel))){
return cljs.core.assoc.call(null,G__28174__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),district.ui.graphql.utils.create_name_node.call(null,distinct_name.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(sel)))));
} else {
return G__28174__$1;
}
});})(query_id,distinct_name,variable_defs,map__28172,map__28172__$1,query,variables,query_configs__$1))
,cljs.core.get_in.call(null,query,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"definitions","definitions",167529986),(0),new cljs.core.Keyword(null,"selectionSet","selectionSet",1137273048),new cljs.core.Keyword(null,"selections","selections",-1277610233)], null)));
var variables__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (query_id,distinct_name,variable_defs,selections,map__28172,map__28172__$1,query,variables,query_configs__$1){
return (function (p__28175){
var vec__28176 = p__28175;
var k = cljs.core.nth.call(null,vec__28176,(0),null);
var v = cljs.core.nth.call(null,vec__28176,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [distinct_name.call(null,cljs.core.name.call(null,k)),v], null);
});})(query_id,distinct_name,variable_defs,selections,map__28172,map__28172__$1,query,variables,query_configs__$1))
,variables));
return cljs.core.update.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"definitions","definitions",167529986),(0),new cljs.core.Keyword(null,"selectionSet","selectionSet",1137273048),new cljs.core.Keyword(null,"selections","selections",-1277610233)], null),cljs.core.concat,selections),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"definitions","definitions",167529986),(0),new cljs.core.Keyword(null,"variableDefinitions","variableDefinitions",1372130248)], null),cljs.core.concat,variable_defs),new cljs.core.Keyword(null,"variables","variables",1563680814),cljs.core.merge,variables__$1);
});})(query_configs__$1))
,cljs.core.first.call(null,query_configs__$1),cljs.core.rest.call(null,query_configs__$1)),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.clj__GT_js);
});

district.ui.graphql.utils.batch_queries.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
district.ui.graphql.utils.batch_queries.cljs$lang$applyTo = (function (seq28170){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28170));
});

district.ui.graphql.utils.create_dataloader = (function district$ui$graphql$utils$create_dataloader(p__28182){
var map__28183 = p__28182;
var map__28183__$1 = ((((!((map__28183 == null)))?(((((map__28183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28183):map__28183);
var opts = map__28183__$1;
var on_success = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_request = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"on-request","on-request",972531605));
var on_response = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"on-response","on-response",-1635376834));
var fetch_event = cljs.core.get.call(null,map__28183__$1,new cljs.core.Keyword(null,"fetch-event","fetch-event",1316520469));
var dt = cljs.core.atom.call(null,null);
return cljs.core.reset_BANG_.call(null,dt,(new DataLoader(((function (dt,map__28183,map__28183__$1,opts,on_success,on_error,on_request,on_response,fetch_event){
return (function (query_configs){
var query_configs__$1 = cljs.core.vec.call(null,query_configs);
var map__28185 = cljs.core.apply.call(null,district.ui.graphql.utils.batch_queries,query_configs__$1);
var map__28185__$1 = ((((!((map__28185 == null)))?(((((map__28185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28185):map__28185);
var batched_query = cljs.core.get.call(null,map__28185__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var batched_variables = cljs.core.get.call(null,map__28185__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var req_opts = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),batched_query,new cljs.core.Keyword(null,"variables","variables",1563680814),batched_variables,new cljs.core.Keyword(null,"query-configs","query-configs",2064213539),query_configs__$1], null));
cljs.core.js_invoke.call(null,cljs.core.deref.call(null,dt),"clearAll");

var res_promise = (new Promise(((function (query_configs__$1,map__28185,map__28185__$1,batched_query,batched_variables,req_opts,dt,map__28183,map__28183__$1,opts,on_success,on_error,on_request,on_response,fetch_event){
return (function (resolve,reject){
re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,fetch_event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_opts], null))));

return resolve.call(null,(new Array(cljs.core.count.call(null,query_configs__$1))).fill());
});})(query_configs__$1,map__28185,map__28185__$1,batched_query,batched_variables,req_opts,dt,map__28183,map__28183__$1,opts,on_success,on_error,on_request,on_response,fetch_event))
));
return res_promise;
});})(dt,map__28183,map__28183__$1,opts,on_success,on_error,on_request,on_response,fetch_event))
)));
});
district.ui.graphql.utils.parse_query = (function district$ui$graphql$utils$parse_query(query,p__28187){
var map__28188 = p__28187;
var map__28188__$1 = ((((!((map__28188 == null)))?(((((map__28188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28188):map__28188);
var kw__GT_gql_name = cljs.core.get.call(null,map__28188__$1,new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150));
if(typeof query === 'string'){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-str","query-str",97062238),query,new cljs.core.Keyword(null,"query","query",-1288509510),district.ui.graphql.utils.parse_graphql.call(null,query)], null);
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var query_str = graphql_query.core.graphql_query.call(null,query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150),kw__GT_gql_name], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-str","query-str",97062238),query_str,new cljs.core.Keyword(null,"query","query",-1288509510),district.ui.graphql.utils.parse_graphql.call(null,query_str)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-str","query-str",97062238),district.ui.graphql.utils.print_str_graphql.call(null,query),new cljs.core.Keyword(null,"query","query",-1288509510),query], null);

}
}
});
district.ui.graphql.utils.create_middleware = (function district$ui$graphql$utils$create_middleware(id,middleware_fn){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"fn","fn",-1175266204),middleware_fn], null);
});
district.ui.graphql.utils.apply_query_middlewares = (function district$ui$graphql$utils$apply_query_middlewares(middlewares,p__28190){
var map__28191 = p__28190;
var map__28191__$1 = ((((!((map__28191 == null)))?(((((map__28191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28191):map__28191);
var opts = map__28191__$1;
var query = cljs.core.get.call(null,map__28191__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables = cljs.core.get.call(null,map__28191__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var results = cljs.core.doall.call(null,cljs.core.reduce.call(null,((function (map__28191,map__28191__$1,opts,query,variables){
return (function (acc,middleware){
var map__28193 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(middleware).call(null,cljs.core.merge.call(null,opts,acc));
var map__28193__$1 = ((((!((map__28193 == null)))?(((((map__28193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28193):map__28193);
var query__$1 = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables__$1 = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var response = cljs.core.get.call(null,map__28193__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),(function (){var or__3922__auto__ = query__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(acc);
}
})(),new cljs.core.Keyword(null,"queries","queries",1446291995),(cljs.core.truth_(query__$1)?cljs.core.conj.call(null,new cljs.core.Keyword(null,"queries","queries",1446291995).cljs$core$IFn$_invoke$arity$1(acc),query__$1):new cljs.core.Keyword(null,"queries","queries",1446291995).cljs$core$IFn$_invoke$arity$1(acc)),new cljs.core.Keyword(null,"variables","variables",1563680814),(function (){var or__3922__auto__ = variables__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"variables","variables",1563680814).cljs$core$IFn$_invoke$arity$1(acc);
}
})(),new cljs.core.Keyword(null,"responses","responses",1257546453),(cljs.core.truth_(response)?cljs.core.conj.call(null,new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(acc),response):new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(acc))], null);
});})(map__28191,map__28191__$1,opts,query,variables))
,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"variables","variables",1563680814),variables,new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query], null),new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.PersistentVector.EMPTY], null),middlewares));
return results;
});
district.ui.graphql.utils.remove_unused_variable_defs = (function district$ui$graphql$utils$remove_unused_variable_defs(query){
var used_variables = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
district.ui.graphql.utils.visit.call(null,query,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Variable","Variable",551951895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),((function (used_variables){
return (function (node,key,parent,path){
if(cljs.core._EQ_.call(null,"VariableDefinition",(parent["kind"]))){
} else {
cljs.core.swap_BANG_.call(null,used_variables,((function (used_variables){
return (function (p1__28195_SHARP_){
return cljs.core.conj.call(null,p1__28195_SHARP_,(node["name"]["value"]));
});})(used_variables))
);
}

return undefined;
});})(used_variables))
], null)], null)));

var new_query = district.ui.graphql.utils.visit.call(null,query,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"OperationDefinition","OperationDefinition",734235261),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),((function (used_variables){
return (function (node,key,parent,path){
if(((cljs.core._EQ_.call(null,(node["operation"]),"query")) && (cljs.core.seq.call(null,(node["variableDefinitions"]))))){
var node__$1 = cljs.core.clj__GT_js.call(null,cljs.core.js__GT_clj.call(null,node));
var new_defs = cljs.core.remove.call(null,((function (node__$1,used_variables){
return (function (def){
return ((cljs.core.not.call(null,(def["variable"]))) || (!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,used_variables),(def["variable"]["name"]["value"])))));
});})(node__$1,used_variables))
,(node__$1["variableDefinitions"]));
(node__$1["variableDefinitions"] = cljs.core.clj__GT_js.call(null,new_defs));

return node__$1;
} else {
return undefined;
}
});})(used_variables))
], null),new cljs.core.Keyword(null,"Variable","Variable",551951895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),((function (used_variables){
return (function (node,key,parent,path){
if(((cljs.core._EQ_.call(null,"VariableDefinition",(parent["kind"]))) && (!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,used_variables),(node["name"]["value"])))))){
return null;
} else {
return undefined;
}
});})(used_variables))
], null),new cljs.core.Keyword(null,"VariableDefinition","VariableDefinition",1495073630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),((function (used_variables){
return (function (node){
if(((cljs.core.not.call(null,(node["variable"]))) || (cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,used_variables),(node["variable"]["name"]["value"]))))){
return undefined;
} else {
return null;
}
});})(used_variables))
], null)], null)));
return new_query;
});

//# sourceMappingURL=utils.js.map?rel=1526705064545
