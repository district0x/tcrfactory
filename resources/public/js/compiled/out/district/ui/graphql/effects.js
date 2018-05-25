// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.graphql.effects');
goog.require('cljs.core');
goog.require('cljsjs.graphql');
goog.require('clojure.string');
goog.require('district.graphql_utils');
goog.require('district.ui.graphql.utils');
goog.require('re_frame.core');
district.ui.graphql.effects.global$module$cljsjs$graphql = goog.global.GraphQL;
district.ui.graphql.effects.print_str_graphql = (GraphQL["print"]);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.graphql.effects","enqueue-query","district.ui.graphql.effects/enqueue-query",-1327874050),(function (p__28198){
var map__28199 = p__28198;
var map__28199__$1 = ((((!((map__28199 == null)))?(((((map__28199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28199):map__28199);
var opts = map__28199__$1;
var fetcher = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"fetcher","fetcher",1918422086));
var dataloader = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675));
var schema = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var query = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
return cljs.core.js_invoke.call(null,dataloader,"load",opts);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.graphql.effects","fetch","district.ui.graphql.effects/fetch",36777727),(function (p__28201){
var map__28202 = p__28201;
var map__28202__$1 = ((((!((map__28202 == null)))?(((((map__28202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28202):map__28202);
var opts = map__28202__$1;
var schema = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var fetcher = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"fetcher","fetcher",1918422086));
var on_success = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var variables = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var gql_name__GT_kw = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258));
var query_middlewares = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"query-middlewares","query-middlewares",-1171364302));
var on_request = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"on-request","on-request",972531605));
var on_error = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var query = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var on_response = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"on-response","on-response",-1635376834));
var non_middleware_fields = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"on-request","on-request",972531605),new cljs.core.Keyword(null,"on-response","on-response",-1635376834),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null);
var map__28204 = district.ui.graphql.utils.apply_query_middlewares.call(null,query_middlewares,cljs.core.apply.call(null,cljs.core.dissoc,opts,non_middleware_fields));
var map__28204__$1 = ((((!((map__28204 == null)))?(((((map__28204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28204):map__28204);
var query__$1 = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables__$1 = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var queries = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"queries","queries",1446291995));
var responses = cljs.core.get.call(null,map__28204__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var query_clj = cljs.core.apply.call(null,district.ui.graphql.utils.merge_in_colls,cljs.core.map.call(null,((function (non_middleware_fields,map__28204,map__28204__$1,query__$1,variables__$1,queries,responses,map__28202,map__28202__$1,opts,schema,fetcher,on_success,variables,gql_name__GT_kw,query_middlewares,on_request,on_error,query,on_response){
return (function (q){
return district.ui.graphql.utils.query__GT_clj.call(null,q,schema,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),gql_name__GT_kw,new cljs.core.Keyword(null,"variables","variables",1563680814),variables__$1], null));
});})(non_middleware_fields,map__28204,map__28204__$1,query__$1,variables__$1,queries,responses,map__28202,map__28202__$1,opts,schema,fetcher,on_success,variables,gql_name__GT_kw,query_middlewares,on_request,on_error,query,on_response))
,queries));
var req_opts = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238),district.ui.graphql.effects.print_str_graphql.call(null,query__$1),new cljs.core.Keyword(null,"query-clj","query-clj",-1159525522),query_clj,new cljs.core.Keyword(null,"variables","variables",1563680814),variables__$1], null));
var fetcher_promise = (cljs.core.truth_((function (){var and__3911__auto__ = fetcher;
if(cljs.core.truth_(and__3911__auto__)){
return !(cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,new cljs.core.Keyword(null,"query-str","query-str",97062238).cljs$core$IFn$_invoke$arity$1(req_opts))));
} else {
return and__3911__auto__;
}
})())?fetcher.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query-str","query-str",97062238).cljs$core$IFn$_invoke$arity$1(req_opts),new cljs.core.Keyword(null,"variables","variables",1563680814),variables__$1], null))):null);
if(cljs.core.truth_((function (){var and__3911__auto__ = on_request;
if(cljs.core.truth_(and__3911__auto__)){
return fetcher_promise;
} else {
return and__3911__auto__;
}
})())){
re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_request,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_opts], null))));
} else {
}

return Promise.all(cljs.core.clj__GT_js.call(null,cljs.core.concat.call(null,responses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fetcher_promise], null)))).then(((function (non_middleware_fields,map__28204,map__28204__$1,query__$1,variables__$1,queries,responses,query_clj,req_opts,fetcher_promise,map__28202,map__28202__$1,opts,schema,fetcher,on_success,variables,gql_name__GT_kw,query_middlewares,on_request,on_error,query,on_response){
return (function (resps){
var res = cljs.core.reduce.call(null,((function (non_middleware_fields,map__28204,map__28204__$1,query__$1,variables__$1,queries,responses,query_clj,req_opts,fetcher_promise,map__28202,map__28202__$1,opts,schema,fetcher,on_success,variables,gql_name__GT_kw,query_middlewares,on_request,on_error,query,on_response){
return (function (acc,res){
var res__$1 = district.ui.graphql.utils.remove_nil_vals.call(null,district.graphql_utils.js__GT_clj_response.call(null,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),gql_name__GT_kw], null)));
return district.ui.graphql.utils.merge_in_colls.call(null,acc,res__$1);
});})(non_middleware_fields,map__28204,map__28204__$1,query__$1,variables__$1,queries,responses,query_clj,req_opts,fetcher_promise,map__28202,map__28202__$1,opts,schema,fetcher,on_success,variables,gql_name__GT_kw,query_middlewares,on_request,on_error,query,on_response))
,cljs.core.PersistentArrayMap.EMPTY,resps);
if(cljs.core.truth_(on_response)){
re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,req_opts], null))));
} else {
}

if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res))){
if(cljs.core.truth_(on_success)){
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(res),req_opts], null))));
} else {
return null;
}
} else {
if(cljs.core.truth_(on_error)){
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(res),req_opts], null))));
} else {
return null;
}
}
});})(non_middleware_fields,map__28204,map__28204__$1,query__$1,variables__$1,queries,responses,query_clj,req_opts,fetcher_promise,map__28202,map__28202__$1,opts,schema,fetcher,on_success,variables,gql_name__GT_kw,query_middlewares,on_request,on_error,query,on_response))
).catch(((function (non_middleware_fields,map__28204,map__28204__$1,query__$1,variables__$1,queries,responses,query_clj,req_opts,fetcher_promise,map__28202,map__28202__$1,opts,schema,fetcher,on_success,variables,gql_name__GT_kw,query_middlewares,on_request,on_error,query,on_response){
return (function (error){
var error__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.ex_message.call(null,error)], null);
if(cljs.core.truth_(on_response)){
re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error__$1], null)], null),req_opts], null))));
} else {
}

if(cljs.core.truth_(on_error)){
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error__$1], null),req_opts], null))));
} else {
return null;
}
});})(non_middleware_fields,map__28204,map__28204__$1,query__$1,variables__$1,queries,responses,query_clj,req_opts,fetcher_promise,map__28202,map__28202__$1,opts,schema,fetcher,on_success,variables,gql_name__GT_kw,query_middlewares,on_request,on_error,query,on_response))
);
}));
district.ui.graphql.effects.create_middleware_fn = (function district$ui$graphql$effects$create_middleware_fn(method){
return (function (p__28206){
var map__28207 = p__28206;
var map__28207__$1 = ((((!((map__28207 == null)))?(((((map__28207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28207):map__28207);
var fetcher = cljs.core.get.call(null,map__28207__$1,new cljs.core.Keyword(null,"fetcher","fetcher",1918422086));
var middlewares = cljs.core.get.call(null,map__28207__$1,new cljs.core.Keyword(null,"middlewares","middlewares",1647612460));
var afterwares = cljs.core.get.call(null,map__28207__$1,new cljs.core.Keyword(null,"afterwares","afterwares",-1385656736));
var seq__28209 = cljs.core.seq.call(null,(function (){var or__3922__auto__ = middlewares;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return afterwares;
}
})());
var chunk__28210 = null;
var count__28211 = (0);
var i__28212 = (0);
while(true){
if((i__28212 < count__28211)){
var middleware = cljs.core._nth.call(null,chunk__28210,i__28212);
cljs.core.js_invoke.call(null,fetcher,method,((function (seq__28209,chunk__28210,count__28211,i__28212,middleware,map__28207,map__28207__$1,fetcher,middlewares,afterwares){
return (function (response,options,next){
if(cljs.core.fn_QMARK_.call(null,middleware)){
cljs.core.apply.call(null,middleware,response,options,next);
} else {
}

if(cljs.core.sequential_QMARK_.call(null,middleware)){
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,middleware,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [response,options,next], null))));
} else {
return null;
}
});})(seq__28209,chunk__28210,count__28211,i__28212,middleware,map__28207,map__28207__$1,fetcher,middlewares,afterwares))
);


var G__28213 = seq__28209;
var G__28214 = chunk__28210;
var G__28215 = count__28211;
var G__28216 = (i__28212 + (1));
seq__28209 = G__28213;
chunk__28210 = G__28214;
count__28211 = G__28215;
i__28212 = G__28216;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28209);
if(temp__5457__auto__){
var seq__28209__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28209__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28209__$1);
var G__28217 = cljs.core.chunk_rest.call(null,seq__28209__$1);
var G__28218 = c__4319__auto__;
var G__28219 = cljs.core.count.call(null,c__4319__auto__);
var G__28220 = (0);
seq__28209 = G__28217;
chunk__28210 = G__28218;
count__28211 = G__28219;
i__28212 = G__28220;
continue;
} else {
var middleware = cljs.core.first.call(null,seq__28209__$1);
cljs.core.js_invoke.call(null,fetcher,method,((function (seq__28209,chunk__28210,count__28211,i__28212,middleware,seq__28209__$1,temp__5457__auto__,map__28207,map__28207__$1,fetcher,middlewares,afterwares){
return (function (response,options,next){
if(cljs.core.fn_QMARK_.call(null,middleware)){
cljs.core.apply.call(null,middleware,response,options,next);
} else {
}

if(cljs.core.sequential_QMARK_.call(null,middleware)){
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,middleware,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [response,options,next], null))));
} else {
return null;
}
});})(seq__28209,chunk__28210,count__28211,i__28212,middleware,seq__28209__$1,temp__5457__auto__,map__28207,map__28207__$1,fetcher,middlewares,afterwares))
);


var G__28221 = cljs.core.next.call(null,seq__28209__$1);
var G__28222 = null;
var G__28223 = (0);
var G__28224 = (0);
seq__28209 = G__28221;
chunk__28210 = G__28222;
count__28211 = G__28223;
i__28212 = G__28224;
continue;
}
} else {
return null;
}
}
break;
}
});
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.graphql.effects","add-fetch-middleware","district.ui.graphql.effects/add-fetch-middleware",-1640005454),district.ui.graphql.effects.create_middleware_fn.call(null,"use"));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.graphql.effects","add-fetch-afterware","district.ui.graphql.effects/add-fetch-afterware",-1704022616),district.ui.graphql.effects.create_middleware_fn.call(null,"useAfter"));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.graphql.effects","add-fetch-batch-middleware","district.ui.graphql.effects/add-fetch-batch-middleware",2005455827),district.ui.graphql.effects.create_middleware_fn.call(null,"batchUse"));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.graphql.effects","add-fetch-batch-afterware","district.ui.graphql.effects/add-fetch-batch-afterware",2002447221),district.ui.graphql.effects.create_middleware_fn.call(null,"batchUseAfter"));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.graphql.effects","fetch-middleware-next","district.ui.graphql.effects/fetch-middleware-next",1889922810),(function (next){
return next.call(null);
}));

//# sourceMappingURL=effects.js.map?rel=1526705064630
