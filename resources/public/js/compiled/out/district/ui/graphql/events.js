// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.graphql.events');
goog.require('cljs.core');
goog.require('cljsjs.apollo_fetch');
goog.require('cljsjs.graphql');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.graphql_utils');
goog.require('district.ui.graphql.effects');
goog.require('district.ui.graphql.middleware.id_fields');
goog.require('district.ui.graphql.middleware.typenames');
goog.require('district.ui.graphql.queries');
goog.require('district.ui.graphql.utils');
goog.require('graphql_query.core');
goog.require('re_frame.core');
district.ui.graphql.events.global$module$cljsjs$graphql = goog.global.GraphQL;
district.ui.graphql.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","start","district.ui.graphql.events/start",-1690163725),district.ui.graphql.events.interceptors,(function (p__28289,p__28290){
var map__28291 = p__28289;
var map__28291__$1 = ((((!((map__28291 == null)))?(((((map__28291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28291):map__28291);
var db = cljs.core.get.call(null,map__28291__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28292 = p__28290;
var map__28295 = cljs.core.nth.call(null,vec__28292,(0),null);
var map__28295__$1 = ((((!((map__28295 == null)))?(((((map__28295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28295):map__28295);
var opts = map__28295__$1;
var schema = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var url = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"url","url",276297046));
var query_middlewares = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"query-middlewares","query-middlewares",-1171364302));
var fetch_opts = cljs.core.get.call(null,map__28295__$1,new cljs.core.Keyword(null,"fetch-opts","fetch-opts",-1704398338));
var fetcher = (cljs.core.truth_(url)?apolloFetch.createApolloFetch(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),url], null),fetch_opts))):null);
var dataloader = district.ui.graphql.utils.create_dataloader.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fetch-event","fetch-event",1316520469),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","fetch","district.ui.graphql.events/fetch",840169268)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","normalize-response","district.ui.graphql.events/normalize-response",1020761823)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","query-error*","district.ui.graphql.events/query-error*",-641859611)], null),new cljs.core.Keyword(null,"on-response","on-response",-1635376834),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","query-response*","district.ui.graphql.events/query-response*",-1109443206)], null),new cljs.core.Keyword(null,"on-request","on-request",972531605),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","query-request*","district.ui.graphql.events/query-request*",-457415718)], null)], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.graphql.queries.merge_config.call(null,db,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150),district.graphql_utils.kw__GT_gql_name,new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258),district.graphql_utils.gql_name__GT_kw,new cljs.core.Keyword(null,"fetcher","fetcher",1918422086),fetcher,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),dataloader,new cljs.core.Keyword(null,"schema","schema",-1582001791),district.ui.graphql.utils.build_schema.call(null,schema),new cljs.core.Keyword(null,"query-middlewares","query-middlewares",-1171364302),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.graphql.utils.create_middleware.call(null,new cljs.core.Keyword(null,"id-fields","id-fields",-34838957),district.ui.graphql.middleware.id_fields.id_fields_middleware),district.ui.graphql.utils.create_middleware.call(null,new cljs.core.Keyword(null,"typenames","typenames",2077458645),district.ui.graphql.middleware.typenames.typenames_middleware)], null),query_middlewares)], null),cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150),new cljs.core.Keyword(null,"gql-name->kw","gql-name->kw",-1497962258)], null))))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","query","district.ui.graphql.events/query",-459226942),district.ui.graphql.events.interceptors,(function (p__28298,p__28299){
var map__28300 = p__28298;
var map__28300__$1 = ((((!((map__28300 == null)))?(((((map__28300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28300):map__28300);
var db = cljs.core.get.call(null,map__28300__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28301 = p__28299;
var map__28304 = cljs.core.nth.call(null,vec__28301,(0),null);
var map__28304__$1 = ((((!((map__28304 == null)))?(((((map__28304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28304):map__28304);
var opts = map__28304__$1;
var query = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_str = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
var variables = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var refetch_on = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"refetch-on","refetch-on",899071755));
var refetch_id = cljs.core.get.call(null,map__28304__$1,new cljs.core.Keyword(null,"refetch-id","refetch-id",-1385897546));
var map__28307 = ((cljs.core.not.call(null,(function (){var or__3922__auto__ = query;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return query_str;
}
})()))?district.ui.graphql.utils.parse_query.call(null,query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150),district.ui.graphql.queries.config.call(null,db,new cljs.core.Keyword(null,"kw->gql-name","kw->gql-name",-1726890150))], null)):opts);
var map__28307__$1 = ((((!((map__28307 == null)))?(((((map__28307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28307):map__28307);
var query__$1 = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_str__$1 = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.graphql.effects","enqueue-query","district.ui.graphql.effects/enqueue-query",-1327874050),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"schema","schema",-1582001791),district.ui.graphql.queries.config.call(null,db,new cljs.core.Keyword(null,"schema","schema",-1582001791)),new cljs.core.Keyword(null,"fetcher","fetcher",1918422086),district.ui.graphql.queries.config.call(null,db,new cljs.core.Keyword(null,"fetcher","fetcher",1918422086)),new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),district.ui.graphql.queries.config.call(null,db,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675)),new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238),query_str__$1,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)], null),(cljs.core.truth_((function (){var and__3911__auto__ = refetch_on;
if(cljs.core.truth_(and__3911__auto__)){
return refetch_id;
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(district.ui.graphql.queries.db_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(refetch_id)].join(''),new cljs.core.Keyword(null,"events","events",1792552201),refetch_on,new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","query","district.ui.graphql.events/query",-459226942),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"refetch-on","refetch-on",899071755),new cljs.core.Keyword(null,"refetch-id","refetch-id",-1385897546))], null)], null)], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","normalize-response","district.ui.graphql.events/normalize-response",1020761823),district.ui.graphql.events.interceptors,(function (p__28309,p__28310){
var map__28311 = p__28309;
var map__28311__$1 = ((((!((map__28311 == null)))?(((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var db = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28312 = p__28310;
var response = cljs.core.nth.call(null,vec__28312,(0),null);
var map__28315 = cljs.core.nth.call(null,vec__28312,(1),null);
var map__28315__$1 = ((((!((map__28315 == null)))?(((((map__28315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28315):map__28315);
var query_clj = cljs.core.get.call(null,map__28315__$1,new cljs.core.Keyword(null,"query-clj","query-clj",-1159525522));
var results = district.ui.graphql.utils.normalize_response.call(null,response,query_clj,district.ui.graphql.queries.config.call(null,db));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.graphql.queries.merge_results.call(null,db,results)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","assoc-queries-with-batched-query","district.ui.graphql.events/assoc-queries-with-batched-query",1224871210),district.ui.graphql.events.interceptors,(function (p__28318,p__28319){
var map__28320 = p__28318;
var map__28320__$1 = ((((!((map__28320 == null)))?(((((map__28320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);
var db = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28321 = p__28319;
var map__28324 = cljs.core.nth.call(null,vec__28321,(0),null);
var map__28324__$1 = ((((!((map__28324 == null)))?(((((map__28324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28324):map__28324);
var batched_query_str = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"batched-query-str","batched-query-str",176581846));
var query_configs = cljs.core.get.call(null,map__28324__$1,new cljs.core.Keyword(null,"query-configs","query-configs",2064213539));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.graphql.queries.assoc_queries_with_batched_query.call(null,db,query_configs,batched_query_str)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","set-query-loading","district.ui.graphql.events/set-query-loading",-1436474658),district.ui.graphql.events.interceptors,(function (p__28327,p__28328){
var map__28329 = p__28327;
var map__28329__$1 = ((((!((map__28329 == null)))?(((((map__28329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28329):map__28329);
var db = cljs.core.get.call(null,map__28329__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28330 = p__28328;
var map__28333 = cljs.core.nth.call(null,vec__28330,(0),null);
var map__28333__$1 = ((((!((map__28333 == null)))?(((((map__28333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28333):map__28333);
var query_str = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
var loading_QMARK_ = cljs.core.get.call(null,map__28333__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.graphql.queries.assoc_query_loading.call(null,db,query_str,loading_QMARK_)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","set-query-errors","district.ui.graphql.events/set-query-errors",-2084326031),district.ui.graphql.events.interceptors,(function (p__28336,p__28337){
var map__28338 = p__28336;
var map__28338__$1 = ((((!((map__28338 == null)))?(((((map__28338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28338):map__28338);
var db = cljs.core.get.call(null,map__28338__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28339 = p__28337;
var map__28342 = cljs.core.nth.call(null,vec__28339,(0),null);
var map__28342__$1 = ((((!((map__28342 == null)))?(((((map__28342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28342):map__28342);
var query_str = cljs.core.get.call(null,map__28342__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
var errors = cljs.core.get.call(null,map__28342__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.graphql.queries.assoc_query_errors.call(null,db,query_str,errors)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","fetch","district.ui.graphql.events/fetch",840169268),district.ui.graphql.events.interceptors,(function (p__28345,p__28346){
var map__28347 = p__28345;
var map__28347__$1 = ((((!((map__28347 == null)))?(((((map__28347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28347):map__28347);
var db = cljs.core.get.call(null,map__28347__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28348 = p__28346;
var opts = cljs.core.nth.call(null,vec__28348,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.graphql.effects","fetch","district.ui.graphql.effects/fetch",36777727),cljs.core.merge.call(null,district.ui.graphql.queries.config.call(null,db),opts)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","set-schema","district.ui.graphql.events/set-schema",1115679726),district.ui.graphql.events.interceptors,(function (p__28352,p__28353){
var map__28354 = p__28352;
var map__28354__$1 = ((((!((map__28354 == null)))?(((((map__28354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28354):map__28354);
var db = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28355 = p__28353;
var schema = cljs.core.nth.call(null,vec__28355,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.graphql.queries.merge_config.call(null,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),district.ui.graphql.utils.build_schema.call(null,schema)], null))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","update-entity","district.ui.graphql.events/update-entity",-811830324),district.ui.graphql.events.interceptors,(function (p__28359,p__28360){
var map__28361 = p__28359;
var map__28361__$1 = ((((!((map__28361 == null)))?(((((map__28361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28361):map__28361);
var db = cljs.core.get.call(null,map__28361__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28362 = p__28360;
var type = cljs.core.nth.call(null,vec__28362,(0),null);
var id = cljs.core.nth.call(null,vec__28362,(1),null);
var new_entity = cljs.core.nth.call(null,vec__28362,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.graphql.queries.update_entity.call(null,db,type,id,new_entity)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","query-error*","district.ui.graphql.events/query-error*",-641859611),district.ui.graphql.events.interceptors,(function (p__28366,p__28367){
var map__28368 = p__28366;
var map__28368__$1 = ((((!((map__28368 == null)))?(((((map__28368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28368):map__28368);
var db = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28369 = p__28367;
var errors = cljs.core.nth.call(null,vec__28369,(0),null);
var map__28372 = cljs.core.nth.call(null,vec__28369,(1),null);
var map__28372__$1 = ((((!((map__28372 == null)))?(((((map__28372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28372):map__28372);
var query_str = cljs.core.get.call(null,map__28372__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","set-query-errors","district.ui.graphql.events/set-query-errors",-2084326031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors,new cljs.core.Keyword(null,"query-str","query-str",97062238),query_str], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","query-request*","district.ui.graphql.events/query-request*",-457415718),district.ui.graphql.events.interceptors,(function (p__28375,p__28376){
var map__28377 = p__28375;
var map__28377__$1 = ((((!((map__28377 == null)))?(((((map__28377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28377):map__28377);
var db = cljs.core.get.call(null,map__28377__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28378 = p__28376;
var map__28381 = cljs.core.nth.call(null,vec__28378,(0),null);
var map__28381__$1 = ((((!((map__28381 == null)))?(((((map__28381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28381):map__28381);
var query_str = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
var query_configs = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"query-configs","query-configs",2064213539));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","assoc-queries-with-batched-query","district.ui.graphql.events/assoc-queries-with-batched-query",1224871210),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"batched-query-str","batched-query-str",176581846),query_str,new cljs.core.Keyword(null,"query-configs","query-configs",2064213539),query_configs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","set-query-loading","district.ui.graphql.events/set-query-loading",-1436474658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-str","query-str",97062238),query_str,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","query-response*","district.ui.graphql.events/query-response*",-1109443206),district.ui.graphql.events.interceptors,(function (p__28384,p__28385){
var map__28386 = p__28384;
var map__28386__$1 = ((((!((map__28386 == null)))?(((((map__28386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28386):map__28386);
var db = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28387 = p__28385;
var _ = cljs.core.nth.call(null,vec__28387,(0),null);
var map__28390 = cljs.core.nth.call(null,vec__28387,(1),null);
var map__28390__$1 = ((((!((map__28390 == null)))?(((((map__28390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28390):map__28390);
var query_str = cljs.core.get.call(null,map__28390__$1,new cljs.core.Keyword(null,"query-str","query-str",97062238));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.events","set-query-loading","district.ui.graphql.events/set-query-loading",-1436474658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-str","query-str",97062238),query_str,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","unregister-refetch","district.ui.graphql.events/unregister-refetch",-1969429843),district.ui.graphql.events.interceptors,(function (p__28393,p__28394){
var map__28395 = p__28393;
var map__28395__$1 = ((((!((map__28395 == null)))?(((((map__28395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28395):map__28395);
var db = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28396 = p__28394;
var map__28399 = cljs.core.nth.call(null,vec__28396,(0),null);
var map__28399__$1 = ((((!((map__28399 == null)))?(((((map__28399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28399):map__28399);
var refetch_id = cljs.core.get.call(null,map__28399__$1,new cljs.core.Keyword(null,"refetch-id","refetch-id",-1385897546));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(district.ui.graphql.queries.db_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(refetch_id)].join('')], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.graphql.events","stop","district.ui.graphql.events/stop",-1315561462),district.ui.graphql.events.interceptors,(function (p__28402){
var map__28403 = p__28402;
var map__28403__$1 = ((((!((map__28403 == null)))?(((((map__28403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403):map__28403);
var db = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"db","db",993250759));
return null;
}));

//# sourceMappingURL=events.js.map?rel=1526705064779
