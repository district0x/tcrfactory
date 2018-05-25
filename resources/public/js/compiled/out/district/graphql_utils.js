// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.graphql_utils');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('district.cljs_utils');
district.graphql_utils.GraphQL = ((typeof GraphQL !== 'undefined')?GraphQL:require("graphql"));
district.graphql_utils.kw__GT_gql_name = (function district$graphql_utils$kw__GT_gql_name(kw){
var nm = cljs.core.name.call(null,kw);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.starts_with_QMARK_.call(null,nm,"__"))?"__":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = (kw instanceof cljs.core.Keyword);
if(and__3911__auto__){
return cljs.core.namespace.call(null,kw);
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,camel_snake_kebab.core.__GT_camelCase.call(null,cljs.core.namespace.call(null,kw)),".","_")),"_"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var first_letter = cljs.core.first.call(null,nm);
var last_letter = cljs.core.last.call(null,nm);
var s = ((((cljs.core.not_EQ_.call(null,first_letter,"_")) && (cljs.core._EQ_.call(null,first_letter,clojure.string.upper_case.call(null,first_letter)))))?camel_snake_kebab.core.__GT_PascalCase.call(null,nm):camel_snake_kebab.core.__GT_camelCase.call(null,nm));
if(cljs.core._EQ_.call(null,last_letter,"?")){
return s.slice((0),(-1));
} else {
return s;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.ends_with_QMARK_.call(null,nm,"?"))?"_":null))].join('');
});
district.graphql_utils.gql_name__GT_kw = (function district$graphql_utils$gql_name__GT_kw(gql_name){
var k = cljs.core.name.call(null,gql_name);
if(clojure.string.starts_with_QMARK_.call(null,k,"__")){
return cljs.core.keyword.call(null,k);
} else {
var k__$1 = ((clojure.string.ends_with_QMARK_.call(null,k,"_"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k.slice((0),(-1))),"?"].join(''):k);
var parts = clojure.string.split.call(null,k__$1,"_");
var parts__$1 = ((((2) < cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,".",cljs.core.butlast.call(null,parts)),cljs.core.last.call(null,parts)], null):parts);
return cljs.core.apply.call(null,cljs.core.keyword,cljs.core.map.call(null,camel_snake_kebab.core.__GT_kebab_case,parts__$1));
}
});
district.graphql_utils.clj__GT_js_root_value = (function district$graphql_utils$clj__GT_js_root_value(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27479 = arguments.length;
var i__4500__auto___27480 = (0);
while(true){
if((i__4500__auto___27480 < len__4499__auto___27479)){
args__4502__auto__.push((arguments[i__4500__auto___27480]));

var G__27481 = (i__4500__auto___27480 + (1));
i__4500__auto___27480 = G__27481;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.graphql_utils.clj__GT_js_root_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.graphql_utils.clj__GT_js_root_value.cljs$core$IFn$_invoke$arity$variadic = (function (root_value,p__27471){
var vec__27472 = p__27471;
var opts = cljs.core.nth.call(null,vec__27472,(0),null);
var gql_name__GT_kw = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return district.graphql_utils.gql_name__GT_kw;
}
})();
var kw__GT_gql_name = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return district.graphql_utils.kw__GT_gql_name;
}
})();
if(cljs.core.map_QMARK_.call(null,root_value)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (gql_name__GT_kw,kw__GT_gql_name,vec__27472,opts){
return (function (p__27475){
var vec__27476 = p__27475;
var k = cljs.core.nth.call(null,vec__27476,(0),null);
var v = cljs.core.nth.call(null,vec__27476,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw__GT_gql_name.call(null,k),((cljs.core.fn_QMARK_.call(null,v))?((function (vec__27476,k,v,gql_name__GT_kw,kw__GT_gql_name,vec__27472,opts){
return (function (params,context,schema){
var parsed_params = camel_snake_kebab.extras.transform_keys.call(null,gql_name__GT_kw,cljs.core.js__GT_clj.call(null,params));
var result = district.graphql_utils.clj__GT_js_root_value.call(null,v.call(null,parsed_params,context,schema));
return result;
});})(vec__27476,k,v,gql_name__GT_kw,kw__GT_gql_name,vec__27472,opts))
:v
)], null);
});})(gql_name__GT_kw,kw__GT_gql_name,vec__27472,opts))
,root_value)),new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs.core.identity);
} else {
if(cljs.core.sequential_QMARK_.call(null,root_value)){
return cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,district.graphql_utils.clj__GT_js_root_value,root_value),new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs.core.identity);
} else {
if((root_value instanceof Promise)){
return root_value.then(district.graphql_utils.clj__GT_js_root_value);
} else {
return root_value;

}
}
}
});

district.graphql_utils.clj__GT_js_root_value.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.graphql_utils.clj__GT_js_root_value.cljs$lang$applyTo = (function (seq27469){
var G__27470 = cljs.core.first.call(null,seq27469);
var seq27469__$1 = cljs.core.next.call(null,seq27469);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27470,seq27469__$1);
});

district.graphql_utils.js__GT_clj_result_objects = (function district$graphql_utils$js__GT_clj_result_objects(res){
return clojure.walk.prewalk.call(null,(function (x){
if((((cljs.core.type.call(null,x) == null)) && (cljs.core.seq.call(null,cljs.core.js_keys.call(null,x))))){
return district.cljs_utils.js_obj__GT_clj.call(null,x);
} else {
return cljs.core.js__GT_clj.call(null,x);
}
}),cljs.core.js__GT_clj.call(null,res,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
district.graphql_utils.js__GT_clj_response = (function district$graphql_utils$js__GT_clj_response(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27489 = arguments.length;
var i__4500__auto___27490 = (0);
while(true){
if((i__4500__auto___27490 < len__4499__auto___27489)){
args__4502__auto__.push((arguments[i__4500__auto___27490]));

var G__27491 = (i__4500__auto___27490 + (1));
i__4500__auto___27490 = G__27491;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.graphql_utils.js__GT_clj_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.graphql_utils.js__GT_clj_response.cljs$core$IFn$_invoke$arity$variadic = (function (res,p__27485){
var vec__27486 = p__27485;
var opts = cljs.core.nth.call(null,vec__27486,(0),null);
var gql_name__GT_kw = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return district.graphql_utils.gql_name__GT_kw;
}
})();
var resp = district.graphql_utils.js__GT_clj_result_objects.call(null,res);
return cljs.core.update.call(null,resp,new cljs.core.Keyword(null,"data","data",-232669377),((function (gql_name__GT_kw,resp,vec__27486,opts){
return (function (p1__27482_SHARP_){
return camel_snake_kebab.extras.transform_keys.call(null,gql_name__GT_kw,p1__27482_SHARP_);
});})(gql_name__GT_kw,resp,vec__27486,opts))
);
});

district.graphql_utils.js__GT_clj_response.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.graphql_utils.js__GT_clj_response.cljs$lang$applyTo = (function (seq27483){
var G__27484 = cljs.core.first.call(null,seq27483);
var seq27483__$1 = cljs.core.next.call(null,seq27483);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27484,seq27483__$1);
});

district.graphql_utils.add_fields_to_schema_types = (function district$graphql_utils$add_fields_to_schema_types(schema_ast,fields){
var query_type_27504 = cljs.core.js_invoke.call(null,schema_ast,"getQueryType");
var type_map_27505 = cljs.core.js_invoke.call(null,schema_ast,"getTypeMap");
var seq__27492_27506 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,type_map_27505));
var chunk__27493_27507 = null;
var count__27494_27508 = (0);
var i__27495_27509 = (0);
while(true){
if((i__27495_27509 < count__27494_27508)){
var type_key_27510 = cljs.core._nth.call(null,chunk__27493_27507,i__27495_27509);
var gql_type_27511 = (type_map_27505[type_key_27510]);
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var c__3954__auto__ = (district.graphql_utils.GraphQL["GraphQLObjectType"]);
var x__3955__auto__ = gql_type_27511;
return (x__3955__auto__ instanceof c__3954__auto__);
})();
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not_EQ_.call(null,query_type_27504,gql_type_27511)) && (((gql_type_27511["_typeConfig"]["isIntrospection"]) == null)) && (((gql_type_27511["_fields"]["id"]) == null)));
} else {
return and__3911__auto__;
}
})())){
var seq__27496_27512 = cljs.core.seq.call(null,fields);
var chunk__27497_27513 = null;
var count__27498_27514 = (0);
var i__27499_27515 = (0);
while(true){
if((i__27499_27515 < count__27498_27514)){
var field_27516 = cljs.core._nth.call(null,chunk__27497_27513,i__27499_27515);
(gql_type_27511["_fields"][new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_27516)] = cljs.core.clj__GT_js.call(null,field_27516));


var G__27517 = seq__27496_27512;
var G__27518 = chunk__27497_27513;
var G__27519 = count__27498_27514;
var G__27520 = (i__27499_27515 + (1));
seq__27496_27512 = G__27517;
chunk__27497_27513 = G__27518;
count__27498_27514 = G__27519;
i__27499_27515 = G__27520;
continue;
} else {
var temp__5457__auto___27521 = cljs.core.seq.call(null,seq__27496_27512);
if(temp__5457__auto___27521){
var seq__27496_27522__$1 = temp__5457__auto___27521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27496_27522__$1)){
var c__4319__auto___27523 = cljs.core.chunk_first.call(null,seq__27496_27522__$1);
var G__27524 = cljs.core.chunk_rest.call(null,seq__27496_27522__$1);
var G__27525 = c__4319__auto___27523;
var G__27526 = cljs.core.count.call(null,c__4319__auto___27523);
var G__27527 = (0);
seq__27496_27512 = G__27524;
chunk__27497_27513 = G__27525;
count__27498_27514 = G__27526;
i__27499_27515 = G__27527;
continue;
} else {
var field_27528 = cljs.core.first.call(null,seq__27496_27522__$1);
(gql_type_27511["_fields"][new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_27528)] = cljs.core.clj__GT_js.call(null,field_27528));


var G__27529 = cljs.core.next.call(null,seq__27496_27522__$1);
var G__27530 = null;
var G__27531 = (0);
var G__27532 = (0);
seq__27496_27512 = G__27529;
chunk__27497_27513 = G__27530;
count__27498_27514 = G__27531;
i__27499_27515 = G__27532;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__27533 = seq__27492_27506;
var G__27534 = chunk__27493_27507;
var G__27535 = count__27494_27508;
var G__27536 = (i__27495_27509 + (1));
seq__27492_27506 = G__27533;
chunk__27493_27507 = G__27534;
count__27494_27508 = G__27535;
i__27495_27509 = G__27536;
continue;
} else {
var temp__5457__auto___27537 = cljs.core.seq.call(null,seq__27492_27506);
if(temp__5457__auto___27537){
var seq__27492_27538__$1 = temp__5457__auto___27537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27492_27538__$1)){
var c__4319__auto___27539 = cljs.core.chunk_first.call(null,seq__27492_27538__$1);
var G__27540 = cljs.core.chunk_rest.call(null,seq__27492_27538__$1);
var G__27541 = c__4319__auto___27539;
var G__27542 = cljs.core.count.call(null,c__4319__auto___27539);
var G__27543 = (0);
seq__27492_27506 = G__27540;
chunk__27493_27507 = G__27541;
count__27494_27508 = G__27542;
i__27495_27509 = G__27543;
continue;
} else {
var type_key_27544 = cljs.core.first.call(null,seq__27492_27538__$1);
var gql_type_27545 = (type_map_27505[type_key_27544]);
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var c__3954__auto__ = (district.graphql_utils.GraphQL["GraphQLObjectType"]);
var x__3955__auto__ = gql_type_27545;
return (x__3955__auto__ instanceof c__3954__auto__);
})();
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not_EQ_.call(null,query_type_27504,gql_type_27545)) && (((gql_type_27545["_typeConfig"]["isIntrospection"]) == null)) && (((gql_type_27545["_fields"]["id"]) == null)));
} else {
return and__3911__auto__;
}
})())){
var seq__27500_27546 = cljs.core.seq.call(null,fields);
var chunk__27501_27547 = null;
var count__27502_27548 = (0);
var i__27503_27549 = (0);
while(true){
if((i__27503_27549 < count__27502_27548)){
var field_27550 = cljs.core._nth.call(null,chunk__27501_27547,i__27503_27549);
(gql_type_27545["_fields"][new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_27550)] = cljs.core.clj__GT_js.call(null,field_27550));


var G__27551 = seq__27500_27546;
var G__27552 = chunk__27501_27547;
var G__27553 = count__27502_27548;
var G__27554 = (i__27503_27549 + (1));
seq__27500_27546 = G__27551;
chunk__27501_27547 = G__27552;
count__27502_27548 = G__27553;
i__27503_27549 = G__27554;
continue;
} else {
var temp__5457__auto___27555__$1 = cljs.core.seq.call(null,seq__27500_27546);
if(temp__5457__auto___27555__$1){
var seq__27500_27556__$1 = temp__5457__auto___27555__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27500_27556__$1)){
var c__4319__auto___27557 = cljs.core.chunk_first.call(null,seq__27500_27556__$1);
var G__27558 = cljs.core.chunk_rest.call(null,seq__27500_27556__$1);
var G__27559 = c__4319__auto___27557;
var G__27560 = cljs.core.count.call(null,c__4319__auto___27557);
var G__27561 = (0);
seq__27500_27546 = G__27558;
chunk__27501_27547 = G__27559;
count__27502_27548 = G__27560;
i__27503_27549 = G__27561;
continue;
} else {
var field_27562 = cljs.core.first.call(null,seq__27500_27556__$1);
(gql_type_27545["_fields"][new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_27562)] = cljs.core.clj__GT_js.call(null,field_27562));


var G__27563 = cljs.core.next.call(null,seq__27500_27556__$1);
var G__27564 = null;
var G__27565 = (0);
var G__27566 = (0);
seq__27500_27546 = G__27563;
chunk__27501_27547 = G__27564;
count__27502_27548 = G__27565;
i__27503_27549 = G__27566;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__27567 = cljs.core.next.call(null,seq__27492_27538__$1);
var G__27568 = null;
var G__27569 = (0);
var G__27570 = (0);
seq__27492_27506 = G__27567;
chunk__27493_27507 = G__27568;
count__27494_27508 = G__27569;
i__27495_27509 = G__27570;
continue;
}
} else {
}
}
break;
}

return schema_ast;
});
district.graphql_utils.keyword_scalar_type_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Keyword",new cljs.core.Keyword(null,"description","description",-1428560544),"Clojure Keyword",new cljs.core.Keyword(null,"serialize","serialize",-69216574),(function (value){
if((value instanceof cljs.core.Keyword)){
return district.cljs_utils.kw__GT_str.call(null,value);
} else {
return value;
}
}),new cljs.core.Keyword(null,"parseValue","parseValue",1223406001),(function (value){
return cljs.core.keyword.call(null,value);
}),new cljs.core.Keyword(null,"parseLiteral","parseLiteral",1797849274),(function (ast){
return cljs.core.keyword.call(null,(ast["value"]));
})], null);
district.graphql_utils.date_scalar_type_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Date",new cljs.core.Keyword(null,"description","description",-1428560544),"goog.closure Date",new cljs.core.Keyword(null,"serialize","serialize",-69216574),(function (value){
if(cljs.core.truth_(cljs_time.core.date_QMARK_.call(null,value))){
return cljs_time.coerce.to_long.call(null,value);
} else {
return value;
}
}),new cljs.core.Keyword(null,"parseValue","parseValue",1223406001),(function (value){
return cljs_time.coerce.from_long.call(null,value);
}),new cljs.core.Keyword(null,"parseLiteral","parseLiteral",1797849274),(function (ast){
return cljs_time.coerce.from_long.call(null,(ast["value"]));
})], null);
district.graphql_utils.add_scalar_type = (function district$graphql_utils$add_scalar_type(schema_ast,p__27571){
var map__27572 = p__27571;
var map__27572__$1 = ((((!((map__27572 == null)))?(((((map__27572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27572):map__27572);
var scalar_type_config = map__27572__$1;
var name = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var serialize = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"serialize","serialize",-69216574),cljs.core.identity);
var parseValue = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"parseValue","parseValue",1223406001),cljs.core.identity);
var parseLiteral = cljs.core.get.call(null,map__27572__$1,new cljs.core.Keyword(null,"parseLiteral","parseLiteral",1797849274),cljs.core.identity);
if(((schema_ast["_typeMap"][name]) == null)){
(schema_ast["_typeMap"][name] = (new (district.graphql_utils.GraphQL["GraphQLScalarType"])(cljs.core.clj__GT_js.call(null,scalar_type_config))));
} else {
var keyword_type_27574 = (schema_ast["_typeMap"][name]["_scalarConfig"]);
(keyword_type_27574["parseValue"] = parseValue);

(keyword_type_27574["parseLiteral"] = parseLiteral);

(keyword_type_27574["serialize"] = serialize);
}

return schema_ast;
});
district.graphql_utils.add_keyword_type = (function district$graphql_utils$add_keyword_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27584 = arguments.length;
var i__4500__auto___27585 = (0);
while(true){
if((i__4500__auto___27585 < len__4499__auto___27584)){
args__4502__auto__.push((arguments[i__4500__auto___27585]));

var G__27586 = (i__4500__auto___27585 + (1));
i__4500__auto___27585 = G__27586;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.graphql_utils.add_keyword_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.graphql_utils.add_keyword_type.cljs$core$IFn$_invoke$arity$variadic = (function (schema_ast,p__27577){
var vec__27578 = p__27577;
var map__27581 = cljs.core.nth.call(null,vec__27578,(0),null);
var map__27581__$1 = ((((!((map__27581 == null)))?(((((map__27581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27581):map__27581);
var disable_serialize_QMARK_ = cljs.core.get.call(null,map__27581__$1,new cljs.core.Keyword(null,"disable-serialize?","disable-serialize?",504422491));
return district.graphql_utils.add_scalar_type.call(null,schema_ast,(function (){var G__27583 = district.graphql_utils.keyword_scalar_type_config;
if(cljs.core.truth_(disable_serialize_QMARK_)){
return cljs.core.dissoc.call(null,G__27583,new cljs.core.Keyword(null,"serialize","serialize",-69216574));
} else {
return G__27583;
}
})());
});

district.graphql_utils.add_keyword_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.graphql_utils.add_keyword_type.cljs$lang$applyTo = (function (seq27575){
var G__27576 = cljs.core.first.call(null,seq27575);
var seq27575__$1 = cljs.core.next.call(null,seq27575);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27576,seq27575__$1);
});

district.graphql_utils.add_date_type = (function district$graphql_utils$add_date_type(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27596 = arguments.length;
var i__4500__auto___27597 = (0);
while(true){
if((i__4500__auto___27597 < len__4499__auto___27596)){
args__4502__auto__.push((arguments[i__4500__auto___27597]));

var G__27598 = (i__4500__auto___27597 + (1));
i__4500__auto___27597 = G__27598;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.graphql_utils.add_date_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.graphql_utils.add_date_type.cljs$core$IFn$_invoke$arity$variadic = (function (schema_ast,p__27589){
var vec__27590 = p__27589;
var map__27593 = cljs.core.nth.call(null,vec__27590,(0),null);
var map__27593__$1 = ((((!((map__27593 == null)))?(((((map__27593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27593):map__27593);
var disable_serialize_QMARK_ = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword(null,"disable-serialize?","disable-serialize?",504422491));
return district.graphql_utils.add_scalar_type.call(null,schema_ast,(function (){var G__27595 = district.graphql_utils.date_scalar_type_config;
if(cljs.core.truth_(disable_serialize_QMARK_)){
return cljs.core.dissoc.call(null,G__27595,new cljs.core.Keyword(null,"serialize","serialize",-69216574));
} else {
return G__27595;
}
})());
});

district.graphql_utils.add_date_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.graphql_utils.add_date_type.cljs$lang$applyTo = (function (seq27587){
var G__27588 = cljs.core.first.call(null,seq27587);
var seq27587__$1 = cljs.core.next.call(null,seq27587);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27588,seq27587__$1);
});


//# sourceMappingURL=graphql_utils.js.map?rel=1526705064162
