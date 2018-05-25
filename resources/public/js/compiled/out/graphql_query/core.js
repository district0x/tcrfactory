// Compiled by ClojureScript 1.10.238 {}
goog.provide('graphql_query.core');
goog.require('cljs.core');
goog.require('graphql_query.spec');
goog.require('clojure.string');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
graphql_query.core._STAR_kw__GT_gql_name_STAR_ = cljs.core.name;
graphql_query.core.kw__GT_str = (function graphql_query$core$kw__GT_str(kw){
return cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)].join(''),(1));
});
graphql_query.core.kw_arg__GT_str = (function graphql_query$core$kw_arg__GT_str(kw){
var temp__5455__auto__ = cljs.core.namespace.call(null,kw);
if(cljs.core.truth_(temp__5455__auto__)){
var ns = temp__5455__auto__;
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.kw__GT_str.call(null,kw)),"\""].join('');
} else {
return cljs.core.name.call(null,kw);
}
});

/**
 * Protocol responsible for query arguments' formatting to string.
 *   Has separate implementations for general data types in cljs and clj.
 * @interface
 */
graphql_query.core.ArgumentFormatter = function(){};

graphql_query.core.arg__GT_str = (function graphql_query$core$arg__GT_str(arg){
if(((!((arg == null))) && (!((arg.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 == null))))){
return arg.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1(arg);
} else {
var x__4211__auto__ = (((arg == null))?null:arg);
var m__4212__auto__ = (graphql_query.core.arg__GT_str[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,arg);
} else {
var m__4212__auto____$1 = (graphql_query.core.arg__GT_str["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,arg);
} else {
throw cljs.core.missing_protocol.call(null,"ArgumentFormatter.arg->str",arg);
}
}
}
});

/**
 * Given a map of query arguments, formats them and concatenates to string.
 * 
 *   E.g. (arguments->str {:id 1 :type "human"}) => id:1,type:"human"
 */
graphql_query.core.arguments__GT_str = (function graphql_query$core$arguments__GT_str(args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.interpose.call(null,",",(function (){var iter__4292__auto__ = (function graphql_query$core$arguments__GT_str_$_iter__26719(s__26720){
return (new cljs.core.LazySeq(null,(function (){
var s__26720__$1 = s__26720;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26720__$1);
if(temp__5457__auto__){
var s__26720__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26720__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26720__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26722 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26721 = (0);
while(true){
if((i__26721 < size__4291__auto__)){
var vec__26723 = cljs.core._nth.call(null,c__4290__auto__,i__26721);
var k = cljs.core.nth.call(null,vec__26723,(0),null);
var v = cljs.core.nth.call(null,vec__26723,(1),null);
cljs.core.chunk_append.call(null,b__26722,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,k),":",graphql_query.core.arg__GT_str.call(null,v)], null));

var G__26729 = (i__26721 + (1));
i__26721 = G__26729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26722),graphql_query$core$arguments__GT_str_$_iter__26719.call(null,cljs.core.chunk_rest.call(null,s__26720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26722),null);
}
} else {
var vec__26726 = cljs.core.first.call(null,s__26720__$2);
var k = cljs.core.nth.call(null,vec__26726,(0),null);
var v = cljs.core.nth.call(null,vec__26726,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,k),":",graphql_query.core.arg__GT_str.call(null,v)], null),graphql_query$core$arguments__GT_str_$_iter__26719.call(null,cljs.core.rest.call(null,s__26720__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,args);
})())));
});
/**
 * Given something that is sequential format it to be like a JSON array.
 */
graphql_query.core.sequential__GT_str = (function graphql_query$core$sequential__GT_str(arg){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,graphql_query.core.arg__GT_str,arg)))),"]"].join('');
});
goog.object.set(graphql_query.core.ArgumentFormatter,"null",true);

goog.object.set(graphql_query.core.arg__GT_str,"null",(function (arg){
return "null";
}));

cljs.core.IndexedSeq.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.sequential__GT_str.call(null,arg__$1);
});

goog.date.UtcDateTime.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return arg__$1.getTime();
});

cljs.core.LazySeq.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.sequential__GT_str.call(null,arg__$1);
});

goog.object.set(graphql_query.core.ArgumentFormatter,"boolean",true);

goog.object.set(graphql_query.core.arg__GT_str,"boolean",(function (arg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');
}));

goog.object.set(graphql_query.core.ArgumentFormatter,"object",true);

goog.object.set(graphql_query.core.arg__GT_str,"object",(function (arg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');
}));

goog.object.set(graphql_query.core.ArgumentFormatter,"number",true);

goog.object.set(graphql_query.core.arg__GT_str,"number",(function (arg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');
}));

cljs.core.PersistentHashMap.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,arg__$1)),"}"].join('');
});

cljs.core.PersistentVector.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.sequential__GT_str.call(null,arg__$1);
});

goog.object.set(graphql_query.core.ArgumentFormatter,"string",true);

goog.object.set(graphql_query.core.arg__GT_str,"string",(function (arg){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),"\""].join('');
}));

cljs.core.Keyword.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.kw_arg__GT_str.call(null,arg__$1);
});

cljs.core.PersistentArrayMap.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,arg__$1)),"}"].join('');
});

goog.date.DateTime.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return arg__$1.getTime();
});

goog.date.Date.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return arg__$1.getTime();
});

cljs.core.List.prototype.graphql_query$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.graphql_query$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return graphql_query.core.sequential__GT_str.call(null,arg__$1);
});
/**
 * Converts namespaced meta field keyword to graphql format, e.g :meta/typename -> __typename
 */
graphql_query.core.meta_field__GT_str = (function graphql_query$core$meta_field__GT_str(meta_field){
return ["__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,meta_field))].join('');
});
/**
 * Given a spec conformed vector of query fields (and possibly nested fields),
 *   concatenates them to string, keeping nested structures intact.
 */
graphql_query.core.fields__GT_str = (function graphql_query$core$fields__GT_str(fields){
if((fields instanceof cljs.core.Keyword)){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name.call(null,fields)))].join('');
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",(function (){var iter__4292__auto__ = (function graphql_query$core$fields__GT_str_$_iter__26732(s__26733){
return (new cljs.core.LazySeq(null,(function (){
var s__26733__$1 = s__26733;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26733__$1);
if(temp__5457__auto__){
var s__26733__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26733__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26733__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26735 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26734 = (0);
while(true){
if((i__26734 < size__4291__auto__)){
var vec__26736 = cljs.core._nth.call(null,c__4290__auto__,i__26734);
var type = cljs.core.nth.call(null,vec__26736,(0),null);
var value = cljs.core.nth.call(null,vec__26736,(1),null);
cljs.core.chunk_append.call(null,b__26735,(function (){var pred__26739 = cljs.core._EQ_;
var expr__26740 = type;
if(cljs.core.truth_(pred__26739.call(null,new cljs.core.Keyword("graphql-query","meta-field","graphql-query/meta-field",-1316086536),expr__26740))){
return graphql_query.core.meta_field__GT_str.call(null,value);
} else {
if(cljs.core.truth_(pred__26739.call(null,new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872),expr__26740))){
return graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,value);
} else {
if(cljs.core.truth_(pred__26739.call(null,new cljs.core.Keyword("graphql-query","field-with-args","graphql-query/field-with-args",346219238),expr__26740))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null))].join('');
} else {
if(cljs.core.truth_(pred__26739.call(null,new cljs.core.Keyword("graphql-query","field-with-data","graphql-query/field-with-data",1563015933),expr__26740))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto____$1 = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("field","alias","field/alias",-2112144072).cljs$core$IFn$_invoke$arity$1(value));
if(cljs.core.truth_(temp__5457__auto____$1)){
var alias = temp__5457__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),":"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str.call(null,new cljs.core.Keyword("field","data","field/data",124985413).cljs$core$IFn$_invoke$arity$1(value)))].join('');
} else {
if(cljs.core.truth_(pred__26739.call(null,new cljs.core.Keyword("graphql-query","nested-field","graphql-query/nested-field",1694864949),expr__26740))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null)),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str.call(null,new cljs.core.Keyword("graphql-query","nested-field-children","graphql-query/nested-field-children",-848298602).cljs$core$IFn$_invoke$arity$1(value))),"}"].join('');
} else {
if(cljs.core.truth_(pred__26739.call(null,new cljs.core.Keyword("graphql-query","nested-field-arg-only","graphql-query/nested-field-arg-only",679548765),expr__26740))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''))].join('');
} else {
if(cljs.core.truth_(pred__26739.call(null,new cljs.core.Keyword(null,"fragments","fragments",1456109445),expr__26740))){
return clojure.string.join.call(null," ",cljs.core.map.call(null,((function (i__26734,pred__26739,expr__26740,vec__26736,type,value,c__4290__auto__,size__4291__auto__,b__26735,s__26733__$2,temp__5457__auto__){
return (function (p1__26730_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name.call(null,p1__26730_SHARP_)))].join('');
});})(i__26734,pred__26739,expr__26740,vec__26736,type,value,c__4290__auto__,size__4291__auto__,b__26735,s__26733__$2,temp__5457__auto__))
,value));
} else {
if(cljs.core.truth_(pred__26739.call(null,new cljs.core.Keyword("graphql-query","nested-field-with-fragments","graphql-query/nested-field-with-fragments",2105204608),expr__26740))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,((function (i__26734,pred__26739,expr__26740,vec__26736,type,value,c__4290__auto__,size__4291__auto__,b__26735,s__26733__$2,temp__5457__auto__){
return (function (p1__26731_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name.call(null,p1__26731_SHARP_)))].join('');
});})(i__26734,pred__26739,expr__26740,vec__26736,type,value,c__4290__auto__,size__4291__auto__,b__26735,s__26733__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"fragments","fragments",1456109445).cljs$core$IFn$_invoke$arity$1(value)))),"}"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26740)].join('')));
}
}
}
}
}
}
}
}
})());

var G__26748 = (i__26734 + (1));
i__26734 = G__26748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26735),graphql_query$core$fields__GT_str_$_iter__26732.call(null,cljs.core.chunk_rest.call(null,s__26733__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26735),null);
}
} else {
var vec__26742 = cljs.core.first.call(null,s__26733__$2);
var type = cljs.core.nth.call(null,vec__26742,(0),null);
var value = cljs.core.nth.call(null,vec__26742,(1),null);
return cljs.core.cons.call(null,(function (){var pred__26745 = cljs.core._EQ_;
var expr__26746 = type;
if(cljs.core.truth_(pred__26745.call(null,new cljs.core.Keyword("graphql-query","meta-field","graphql-query/meta-field",-1316086536),expr__26746))){
return graphql_query.core.meta_field__GT_str.call(null,value);
} else {
if(cljs.core.truth_(pred__26745.call(null,new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872),expr__26746))){
return graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,value);
} else {
if(cljs.core.truth_(pred__26745.call(null,new cljs.core.Keyword("graphql-query","field-with-args","graphql-query/field-with-args",346219238),expr__26746))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","field","graphql-query/field",1263918872).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null))].join('');
} else {
if(cljs.core.truth_(pred__26745.call(null,new cljs.core.Keyword("graphql-query","field-with-data","graphql-query/field-with-data",1563015933),expr__26746))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto____$1 = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("field","alias","field/alias",-2112144072).cljs$core$IFn$_invoke$arity$1(value));
if(cljs.core.truth_(temp__5457__auto____$1)){
var alias = temp__5457__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),":"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str.call(null,new cljs.core.Keyword("field","data","field/data",124985413).cljs$core$IFn$_invoke$arity$1(value)))].join('');
} else {
if(cljs.core.truth_(pred__26745.call(null,new cljs.core.Keyword("graphql-query","nested-field","graphql-query/nested-field",1694864949),expr__26746))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null)),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str.call(null,new cljs.core.Keyword("graphql-query","nested-field-children","graphql-query/nested-field-children",-848298602).cljs$core$IFn$_invoke$arity$1(value))),"}"].join('');
} else {
if(cljs.core.truth_(pred__26745.call(null,new cljs.core.Keyword("graphql-query","nested-field-arg-only","graphql-query/nested-field-arg-only",679548765),expr__26746))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''))].join('');
} else {
if(cljs.core.truth_(pred__26745.call(null,new cljs.core.Keyword(null,"fragments","fragments",1456109445),expr__26746))){
return clojure.string.join.call(null," ",cljs.core.map.call(null,((function (pred__26745,expr__26746,vec__26742,type,value,s__26733__$2,temp__5457__auto__){
return (function (p1__26730_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name.call(null,p1__26730_SHARP_)))].join('');
});})(pred__26745,expr__26746,vec__26742,type,value,s__26733__$2,temp__5457__auto__))
,value));
} else {
if(cljs.core.truth_(pred__26745.call(null,new cljs.core.Keyword("graphql-query","nested-field-with-fragments","graphql-query/nested-field-with-fragments",2105204608),expr__26746))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("graphql-query","nested-field-root","graphql-query/nested-field-root",-957564851).cljs$core$IFn$_invoke$arity$1(value))),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,((function (pred__26745,expr__26746,vec__26742,type,value,s__26733__$2,temp__5457__auto__){
return (function (p1__26731_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name.call(null,p1__26731_SHARP_)))].join('');
});})(pred__26745,expr__26746,vec__26742,type,value,s__26733__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"fragments","fragments",1456109445).cljs$core$IFn$_invoke$arity$1(value)))),"}"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26746)].join('')));
}
}
}
}
}
}
}
}
})(),graphql_query$core$fields__GT_str_$_iter__26732.call(null,cljs.core.rest.call(null,s__26733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,fields);
})()));
}
});
/**
 * Given a vector of variable maps, formats them and concatenates to string.
 * 
 *   E.g. (variables->str [{:variable/name "id" :variable/type :Int}]) => "$id: Int"
 */
graphql_query.core.variables__GT_str = (function graphql_query$core$variables__GT_str(variables){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",(function (){var iter__4292__auto__ = (function graphql_query$core$variables__GT_str_$_iter__26749(s__26750){
return (new cljs.core.LazySeq(null,(function (){
var s__26750__$1 = s__26750;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__26750__$1);
if(temp__5457__auto__){
var s__26750__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26750__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__26750__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__26752 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__26751 = (0);
while(true){
if((i__26751 < size__4291__auto__)){
var map__26753 = cljs.core._nth.call(null,c__4290__auto__,i__26751);
var map__26753__$1 = ((((!((map__26753 == null)))?(((((map__26753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26753):map__26753);
var var_name = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword("variable","name","variable/name",811639477));
var var_type = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword("variable","type","variable/type",-1953194216));
var var_default = cljs.core.get.call(null,map__26753__$1,new cljs.core.Keyword("variable","default","variable/default",-1073804668));
cljs.core.chunk_append.call(null,b__26752,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,var_name)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,var_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(var_default)?["=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arg__GT_str.call(null,var_default))].join(''):null))].join(''));

var G__26757 = (i__26751 + (1));
i__26751 = G__26757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26752),graphql_query$core$variables__GT_str_$_iter__26749.call(null,cljs.core.chunk_rest.call(null,s__26750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26752),null);
}
} else {
var map__26755 = cljs.core.first.call(null,s__26750__$2);
var map__26755__$1 = ((((!((map__26755 == null)))?(((((map__26755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26755):map__26755);
var var_name = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword("variable","name","variable/name",811639477));
var var_type = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword("variable","type","variable/type",-1953194216));
var var_default = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword("variable","default","variable/default",-1073804668));
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,var_name)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,var_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(var_default)?["=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arg__GT_str.call(null,var_default))].join(''):null))].join(''),graphql_query$core$variables__GT_str_$_iter__26749.call(null,cljs.core.rest.call(null,s__26750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,variables);
})()));
});
/**
 * Given a fragment map, formats it and concatenates to string,
 */
graphql_query.core.fragment__GT_str = (function graphql_query$core$fragment__GT_str(fragment){
var fields = ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str.call(null,new cljs.core.Keyword("fragment","fields","fragment/fields",-429235046).cljs$core$IFn$_invoke$arity$1(fragment))),"}"].join('');
return ["fragment ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,cljs.core.name.call(null,new cljs.core.Keyword("fragment","name","fragment/name",1216787065).cljs$core$IFn$_invoke$arity$1(fragment))))," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("fragment","type","fragment/type",-1548562724).cljs$core$IFn$_invoke$arity$1(fragment))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fields)].join('');
});
/**
 * Include fields if fields is not empty or is a keyword.
 * fields could be nil or empty for operations that return a scalar.
 */
graphql_query.core.include_fields_QMARK_ = (function graphql_query$core$include_fields_QMARK_(fields){
return (((fields instanceof cljs.core.Keyword)) || (!(cljs.core.empty_QMARK_.call(null,fields))));
});
if(typeof graphql_query.core.__GT_query_str !== 'undefined'){
} else {
graphql_query.core.__GT_query_str = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"graphql-query.core","->query-str"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (query){
if(cljs.core.vector_QMARK_.call(null,query)){
return cljs.core.first.call(null,query);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("graphql-query","query","graphql-query/query",206075446).cljs$core$IFn$_invoke$arity$1(query))){
return new cljs.core.Keyword("graphql-query","query","graphql-query/query",206075446);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("graphql-query","query-with-data","graphql-query/query-with-data",-1538966023).cljs$core$IFn$_invoke$arity$1(query))){
return new cljs.core.Keyword("graphql-query","query-with-data","graphql-query/query-with-data",-1538966023);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,graphql_query.core.__GT_query_str,new cljs.core.Keyword("graphql-query","query-vector","graphql-query/query-vector",-1817956937),(function (p__26758){
var vec__26759 = p__26758;
var _ = cljs.core.nth.call(null,vec__26759,(0),null);
var query = cljs.core.nth.call(null,vec__26759,(1),null);

return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,graphql_query.core.__GT_query_str,query)))),"}"].join('');
}));
cljs.core._add_method.call(null,graphql_query.core.__GT_query_str,new cljs.core.Keyword("graphql-query","query-def","graphql-query/query-def",-1841092046),(function (p__26762){
var vec__26763 = p__26762;
var _ = cljs.core.nth.call(null,vec__26763,(0),null);
var query = cljs.core.nth.call(null,vec__26763,(1),null);

var operation = new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(query);
var operation_with_name = (cljs.core.truth_(operation)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("operation","type","operation/type",-518350333).cljs$core$IFn$_invoke$arity$1(operation)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("operation","name","operation/name",185509282).cljs$core$IFn$_invoke$arity$1(operation)))].join(''):null);
var variables = new cljs.core.Keyword(null,"variables","variables",1563680814).cljs$core$IFn$_invoke$arity$1(query);
var variables_str = (cljs.core.truth_(variables)?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.variables__GT_str.call(null,variables)),")"].join(''):null);
var fragments = new cljs.core.Keyword(null,"fragments","fragments",1456109445).cljs$core$IFn$_invoke$arity$1(query);
var fragments_str = (cljs.core.truth_(fragments)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,graphql_query.core.fragment__GT_str,fragments))))].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_with_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variables_str),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,graphql_query.core.__GT_query_str,new cljs.core.Keyword(null,"queries","queries",1446291995).cljs$core$IFn$_invoke$arity$1(query))))),"}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragments_str)].join('');
}));
cljs.core._add_method.call(null,graphql_query.core.__GT_query_str,new cljs.core.Keyword("graphql-query","query","graphql-query/query",206075446),(function (query){

var query_def = new cljs.core.Keyword("graphql-query","query","graphql-query/query",206075446).cljs$core$IFn$_invoke$arity$1(query);
var alias = (cljs.core.truth_(new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))),":"].join(''):null);
var query_str = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_def));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query_def))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query_def))),")"].join(''):null);
var fields = ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query_def))),"}"].join('');
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fields)].join('');
}));
cljs.core._add_method.call(null,graphql_query.core.__GT_query_str,new cljs.core.Keyword(null,"queries","queries",1446291995),(function (p__26766){
var vec__26767 = p__26766;
var _ = cljs.core.nth.call(null,vec__26767,(0),null);
var query = cljs.core.nth.call(null,vec__26767,(1),null);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,graphql_query.core.__GT_query_str,query)))),"}"].join('');
}));
cljs.core._add_method.call(null,graphql_query.core.__GT_query_str,new cljs.core.Keyword("graphql-query","query-with-data","graphql-query/query-with-data",-1538966023),(function (p__26770){
var vec__26771 = p__26770;
var _ = cljs.core.nth.call(null,vec__26771,(0),null);
var query = cljs.core.nth.call(null,vec__26771,(1),null);
var query_str = graphql_query.core.__GT_query_str.call(null,new cljs.core.Keyword("query","data","query/data",131250295).cljs$core$IFn$_invoke$arity$1(query));
var alias = (cljs.core.truth_(new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))),":"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str)].join('');
}));
cljs.core._add_method.call(null,graphql_query.core.__GT_query_str,new cljs.core.Keyword("query","data","query/data",131250295),(function (p__26774){
var vec__26775 = p__26774;
var _ = cljs.core.nth.call(null,vec__26775,(0),null);
var query = cljs.core.nth.call(null,vec__26775,(1),null);

var query_str = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))),")"].join(''):null);
var fields = (cljs.core.truth_(graphql_query.core.include_fields_QMARK_.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query)))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query))),"}"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fields)].join('');
}));
cljs.core._add_method.call(null,graphql_query.core.__GT_query_str,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query){

var query_str = graphql_query.core._STAR_kw__GT_gql_name_STAR_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))),")"].join(''):null);
var fields = (cljs.core.truth_(graphql_query.core.include_fields_QMARK_.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query)))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(graphql_query.core.fields__GT_str.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query))),"}"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fields)].join('');
}));
/**
 * Formats clojure data structure to valid graphql query string.
 */
graphql_query.core.graphql_query = (function graphql_query$core$graphql_query(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26787 = arguments.length;
var i__4500__auto___26788 = (0);
while(true){
if((i__4500__auto___26788 < len__4499__auto___26787)){
args__4502__auto__.push((arguments[i__4500__auto___26788]));

var G__26789 = (i__4500__auto___26788 + (1));
i__4500__auto___26788 = G__26789;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return graphql_query.core.graphql_query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

graphql_query.core.graphql_query.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__26780){
var vec__26781 = p__26780;
var map__26784 = cljs.core.nth.call(null,vec__26781,(0),null);
var map__26784__$1 = ((((!((map__26784 == null)))?(((((map__26784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26784):map__26784);
var kw__GT_gql_name = cljs.core.get.call(null,map__26784__$1,new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150));
var _STAR_kw__GT_gql_name_STAR_26786 = graphql_query.core._STAR_kw__GT_gql_name_STAR_;
graphql_query.core._STAR_kw__GT_gql_name_STAR_ = (function (){var or__3922__auto__ = kw__GT_gql_name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return graphql_query.core._STAR_kw__GT_gql_name_STAR_;
}
})();

try{return graphql_query.core.__GT_query_str.call(null,graphql_query.spec.query__GT_spec.call(null,data));
}finally {graphql_query.core._STAR_kw__GT_gql_name_STAR_ = _STAR_kw__GT_gql_name_STAR_26786;
}});

graphql_query.core.graphql_query.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
graphql_query.core.graphql_query.cljs$lang$applyTo = (function (seq26778){
var G__26779 = cljs.core.first.call(null,seq26778);
var seq26778__$1 = cljs.core.next.call(null,seq26778);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26779,seq26778__$1);
});


//# sourceMappingURL=core.js.map?rel=1526705063470
