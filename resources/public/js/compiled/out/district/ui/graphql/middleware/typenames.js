// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.graphql.middleware.typenames');
goog.require('cljs.core');
goog.require('district.ui.graphql.utils');
district.ui.graphql.middleware.typenames.visit = (GraphQL["visit"]);
district.ui.graphql.middleware.typenames.gql_sync = (GraphQL["graphqlSync"]);
district.ui.graphql.middleware.typenames.print_str_graphql = (GraphQL["print"]);
district.ui.graphql.middleware.typenames.field_resolver = (function district$ui$graphql$middleware$typenames$field_resolver(root_value,args,context,info){
var return_type = (info["returnType"]);
if(cljs.core.truth_((function (){var c__3954__auto__ = (GraphQL["GraphQLObjectType"]);
var x__3955__auto__ = return_type;
return (x__3955__auto__ instanceof c__3954__auto__);
})())){
return (new Object());
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var c__3954__auto__ = (GraphQL["GraphQLList"]);
var x__3955__auto__ = return_type;
return (x__3955__auto__ instanceof c__3954__auto__);
})();
if(cljs.core.truth_(and__3911__auto__)){
var c__3954__auto__ = (GraphQL["GraphQLObjectType"]);
var x__3955__auto__ = (return_type["ofType"]);
return (x__3955__auto__ instanceof c__3954__auto__);
} else {
return and__3911__auto__;
}
})())){
return (new Array((new Object())));
} else {
return null;

}
}
});
district.ui.graphql.middleware.typenames.typenames_middleware = (function district$ui$graphql$middleware$typenames$typenames_middleware(p__28262){
var map__28263 = p__28262;
var map__28263__$1 = ((((!((map__28263 == null)))?(((((map__28263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28263):map__28263);
var query = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var schema = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var variables = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var kw__GT_gql_name = cljs.core.get.call(null,map__28263__$1,new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150));
var typename_field = cljs.core.clj__GT_js.call(null,district.ui.graphql.utils.create_field_node.call(null,"__typename"));
var typenames_query = district.ui.graphql.middleware.typenames.visit.call(null,query,({"leave": ((function (typename_field,map__28263,map__28263__$1,query,schema,variables,kw__GT_gql_name){
return (function (node,key,parent,path,ancestors){
var pred__28265 = cljs.core._EQ_;
var expr__28266 = (node["kind"]);
if(cljs.core.truth_(pred__28265.call(null,"Field",expr__28266))){
if(cljs.core.truth_((function (){var and__3911__auto__ = !(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["FragmentDefinition",null,"OperationDefinition",null], null), null),(parent["kind"])));
if(and__3911__auto__){
var and__3911__auto____$1 = (node["selectionSet"]);
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.seq.call(null,(node["selectionSet"]["selections"]));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
var node__$1 = cljs.core.clj__GT_js.call(null,cljs.core.js__GT_clj.call(null,node));
(node__$1["selectionSet"]["selections"]).push(typename_field);

return node__$1;
} else {
return undefined;
}
} else {
return undefined;
}
});})(typename_field,map__28263,map__28263__$1,query,schema,variables,kw__GT_gql_name))
}));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response","response",-1068424192),district.ui.graphql.middleware.typenames.gql_sync.call(null,schema,district.ui.graphql.middleware.typenames.print_str_graphql.call(null,typenames_query),null,null,cljs.core.clj__GT_js.call(null,variables),null,district.ui.graphql.middleware.typenames.field_resolver)], null);
});

//# sourceMappingURL=typenames.js.map?rel=1526705064663
