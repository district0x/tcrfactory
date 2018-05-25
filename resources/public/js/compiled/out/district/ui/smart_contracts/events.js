// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.smart_contracts.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.spec.alpha');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.forward_events_fx');
goog.require('day8.re_frame.http_fx');
goog.require('district.ui.smart_contracts.queries');
goog.require('district.ui.web3.queries');
goog.require('district.ui.web3.events');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('re_frame.core');
goog.require('clojure.string');
district.ui.smart_contracts.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.smart-contracts.events","start","district.ui.smart-contracts.events/start",-300737873),district.ui.smart_contracts.events.interceptors,(function (p__34260,p__34261){
var map__34262 = p__34260;
var map__34262__$1 = ((((!((map__34262 == null)))?(((((map__34262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34262):map__34262);
var db = cljs.core.get.call(null,map__34262__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34263 = p__34261;
var map__34266 = cljs.core.nth.call(null,vec__34263,(0),null);
var map__34266__$1 = ((((!((map__34266 == null)))?(((((map__34266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34266):map__34266);
var opts = map__34266__$1;
var contracts = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"contracts","contracts",905357673));
var disable_loading_at_start_QMARK_ = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"disable-loading-at-start?","disable-loading-at-start?",476736496));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.smart_contracts.queries.merge_contracts.call(null,db,contracts)], null),(cljs.core.truth_(disable_loading_at_start_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","load-contracts","district.ui.smart-contracts.events/load-contracts",-1868180862),opts], null)], null)));
}));
district.ui.smart_contracts.events.ensure_slash = (function district$ui$smart_contracts$events$ensure_slash(path){
if(!(clojure.string.ends_with_QMARK_.call(null,path,"/"))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/"].join('');
} else {
return path;
}
});
district.ui.smart_contracts.events.get_version_param = (function district$ui$smart_contracts$events$get_version_param(contract_version,contracts_version){
if(cljs.core.truth_((function (){var or__3922__auto__ = contracts_version;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return contract_version;
}
})())){
return ["?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(contract_version)?contract_version:((cljs.core._EQ_.call(null,contracts_version,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370)))?(new Date()).getTime():contracts_version
)))].join('');
} else {
return null;
}
});
district.ui.smart_contracts.events.get_file_path = (function district$ui$smart_contracts$events$get_file_path(file_type,p__34269,p__34270){
var map__34271 = p__34269;
var map__34271__$1 = ((((!((map__34271 == null)))?(((((map__34271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34271):map__34271);
var name = cljs.core.get.call(null,map__34271__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.call(null,map__34271__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var version = cljs.core.get.call(null,map__34271__$1,new cljs.core.Keyword(null,"version","version",425292698));
var map__34272 = p__34270;
var map__34272__$1 = ((((!((map__34272 == null)))?(((((map__34272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34272):map__34272);
var contracts_path = cljs.core.get.call(null,map__34272__$1,new cljs.core.Keyword(null,"contracts-path","contracts-path",695214927),"./contracts/build/");
var contracts_version = cljs.core.get.call(null,map__34272__$1,new cljs.core.Keyword(null,"contracts-version","contracts-version",662638665));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(district.ui.smart_contracts.events.ensure_slash.call(null,(function (){var or__3922__auto__ = path;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return contracts_path;
}
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,file_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(district.ui.smart_contracts.events.get_version_param.call(null,version,contracts_version))].join('');
});
district.ui.smart_contracts.events.contracts_to_load = (function district$ui$smart_contracts$events$contracts_to_load(p__34275){
var map__34276 = p__34275;
var map__34276__$1 = ((((!((map__34276 == null)))?(((((map__34276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34276):map__34276);
var opts = map__34276__$1;
var contracts = cljs.core.get.call(null,map__34276__$1,new cljs.core.Keyword(null,"contracts","contracts",905357673));
var load_bin_QMARK_ = cljs.core.get.call(null,map__34276__$1,new cljs.core.Keyword(null,"load-bin?","load-bin?",1580238150));
return cljs.core.reduce.call(null,((function (map__34276,map__34276__$1,opts,contracts,load_bin_QMARK_){
return (function (acc,p__34278){
var vec__34279 = p__34278;
var key = cljs.core.nth.call(null,vec__34279,(0),null);
var map__34282 = cljs.core.nth.call(null,vec__34279,(1),null);
var map__34282__$1 = ((((!((map__34282 == null)))?(((((map__34282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34282):map__34282);
var contract = map__34282__$1;
var abi = cljs.core.get.call(null,map__34282__$1,new cljs.core.Keyword(null,"abi","abi",-1999451499));
var bin = cljs.core.get.call(null,map__34282__$1,new cljs.core.Keyword(null,"bin","bin",-200999690));
var G__34284 = acc;
var G__34284__$1 = ((cljs.core.not.call(null,abi))?cljs.core.conj.call(null,G__34284,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-path","file-path",-2005501162),district.ui.smart_contracts.events.get_file_path.call(null,new cljs.core.Keyword(null,"abi","abi",-1999451499),contract,opts),new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),key,new cljs.core.Keyword(null,"file-type","file-type",1274948820),new cljs.core.Keyword(null,"abi","abi",-1999451499)], null)):G__34284);
if(cljs.core.truth_((function (){var and__3911__auto__ = load_bin_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,bin);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.conj.call(null,G__34284__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-path","file-path",-2005501162),district.ui.smart_contracts.events.get_file_path.call(null,new cljs.core.Keyword(null,"bin","bin",-200999690),contract,opts),new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),key,new cljs.core.Keyword(null,"file-type","file-type",1274948820),new cljs.core.Keyword(null,"bin","bin",-200999690)], null));
} else {
return G__34284__$1;
}
});})(map__34276,map__34276__$1,opts,contracts,load_bin_QMARK_))
,cljs.core.PersistentVector.EMPTY,contracts);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.smart-contracts.events","load-contracts","district.ui.smart-contracts.events/load-contracts",-1868180862),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.smart_contracts.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.smart-contracts","opts","district.ui.smart-contracts/opts",-51277190))], null),(function (p__34285,p__34286){
var map__34287 = p__34285;
var map__34287__$1 = ((((!((map__34287 == null)))?(((((map__34287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34287):map__34287);
var db = cljs.core.get.call(null,map__34287__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34288 = p__34286;
var map__34291 = cljs.core.nth.call(null,vec__34288,(0),null);
var map__34291__$1 = ((((!((map__34291 == null)))?(((((map__34291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34291):map__34291);
var opts = map__34291__$1;
var request_timeout = cljs.core.get.call(null,map__34291__$1,new cljs.core.Keyword(null,"request-timeout","request-timeout",-2047539823),(10000));
var contracts = cljs.core.get.call(null,map__34291__$1,new cljs.core.Keyword(null,"contracts","contracts",905357673));
var to_load = district.ui.smart_contracts.events.contracts_to_load.call(null,opts);
var _STAR_load_batch_STAR_ = cljs.core.atom.call(null,cljs.core.zipmap.call(null,to_load,cljs.core.repeat.call(null,false)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.smart_contracts.queries.merge_contracts.call(null,db,contracts),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function (){var iter__4292__auto__ = ((function (to_load,_STAR_load_batch_STAR_,map__34287,map__34287__$1,db,vec__34288,map__34291,map__34291__$1,opts,request_timeout,contracts){
return (function district$ui$smart_contracts$events$iter__34294(s__34295){
return (new cljs.core.LazySeq(null,((function (to_load,_STAR_load_batch_STAR_,map__34287,map__34287__$1,db,vec__34288,map__34291,map__34291__$1,opts,request_timeout,contracts){
return (function (){
var s__34295__$1 = s__34295;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34295__$1);
if(temp__5457__auto__){
var s__34295__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34295__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__34295__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__34297 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__34296 = (0);
while(true){
if((i__34296 < size__4291__auto__)){
var map__34298 = cljs.core._nth.call(null,c__4290__auto__,i__34296);
var map__34298__$1 = ((((!((map__34298 == null)))?(((((map__34298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34298):map__34298);
var contract_to_load = map__34298__$1;
var file_path = cljs.core.get.call(null,map__34298__$1,new cljs.core.Keyword(null,"file-path","file-path",-2005501162));
var file_type = cljs.core.get.call(null,map__34298__$1,new cljs.core.Keyword(null,"file-type","file-type",1274948820));
cljs.core.chunk_append.call(null,b__34297,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),file_path,new cljs.core.Keyword(null,"timeout","timeout",-318625318),request_timeout,new cljs.core.Keyword(null,"response-format","response-format",1664465322),((cljs.core._EQ_.call(null,file_type,new cljs.core.Keyword(null,"abi","abi",-1999451499)))?ajax.core.json_response_format.call(null):ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","contract-loaded","district.ui.smart-contracts.events/contract-loaded",2126695233),contract_to_load,true,_STAR_load_batch_STAR_], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","contract-loaded","district.ui.smart-contracts.events/contract-loaded",2126695233),contract_to_load,false,_STAR_load_batch_STAR_], null)], null));

var G__34302 = (i__34296 + (1));
i__34296 = G__34302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34297),district$ui$smart_contracts$events$iter__34294.call(null,cljs.core.chunk_rest.call(null,s__34295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34297),null);
}
} else {
var map__34300 = cljs.core.first.call(null,s__34295__$2);
var map__34300__$1 = ((((!((map__34300 == null)))?(((((map__34300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34300):map__34300);
var contract_to_load = map__34300__$1;
var file_path = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"file-path","file-path",-2005501162));
var file_type = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"file-type","file-type",1274948820));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),file_path,new cljs.core.Keyword(null,"timeout","timeout",-318625318),request_timeout,new cljs.core.Keyword(null,"response-format","response-format",1664465322),((cljs.core._EQ_.call(null,file_type,new cljs.core.Keyword(null,"abi","abi",-1999451499)))?ajax.core.json_response_format.call(null):ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","contract-loaded","district.ui.smart-contracts.events/contract-loaded",2126695233),contract_to_load,true,_STAR_load_batch_STAR_], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","contract-loaded","district.ui.smart-contracts.events/contract-loaded",2126695233),contract_to_load,false,_STAR_load_batch_STAR_], null)], null),district$ui$smart_contracts$events$iter__34294.call(null,cljs.core.rest.call(null,s__34295__$2)));
}
} else {
return null;
}
break;
}
});})(to_load,_STAR_load_batch_STAR_,map__34287,map__34287__$1,db,vec__34288,map__34291,map__34291__$1,opts,request_timeout,contracts))
,null,null));
});})(to_load,_STAR_load_batch_STAR_,map__34287,map__34287__$1,db,vec__34288,map__34291,map__34291__$1,opts,request_timeout,contracts))
;
return iter__4292__auto__.call(null,to_load);
})()], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.smart-contracts.events","contract-loaded","district.ui.smart-contracts.events/contract-loaded",2126695233),district.ui.smart_contracts.events.interceptors,(function (p__34303,p__34304){
var map__34305 = p__34303;
var map__34305__$1 = ((((!((map__34305 == null)))?(((((map__34305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34305):map__34305);
var db = cljs.core.get.call(null,map__34305__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34306 = p__34304;
var map__34309 = cljs.core.nth.call(null,vec__34306,(0),null);
var map__34309__$1 = ((((!((map__34309 == null)))?(((((map__34309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34309):map__34309);
var contract = map__34309__$1;
var contract_key = cljs.core.get.call(null,map__34309__$1,new cljs.core.Keyword(null,"contract-key","contract-key",-137341548));
var file_type = cljs.core.get.call(null,map__34309__$1,new cljs.core.Keyword(null,"file-type","file-type",1274948820));
var success_QMARK_ = cljs.core.nth.call(null,vec__34306,(1),null);
var _STAR_load_batch_STAR_ = cljs.core.nth.call(null,vec__34306,(2),null);
var response = cljs.core.nth.call(null,vec__34306,(3),null);
cljs.core.swap_BANG_.call(null,_STAR_load_batch_STAR_,cljs.core.assoc,contract,true);

var new_db = (cljs.core.truth_(success_QMARK_)?(function (){var pred__34312 = cljs.core._EQ_;
var expr__34313 = file_type;
if(cljs.core.truth_(pred__34312.call(null,new cljs.core.Keyword(null,"abi","abi",-1999451499),expr__34313))){
return district.ui.smart_contracts.queries.assoc_contract_abi.call(null,db,contract_key,response);
} else {
if(cljs.core.truth_(pred__34312.call(null,new cljs.core.Keyword(null,"bin","bin",-200999690),expr__34313))){
return district.ui.smart_contracts.queries.assoc_contract_bin.call(null,db,contract_key,response);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34313)].join('')));
}
}
})():db);
return cljs.core.merge.call(null,(cljs.core.truth_(success_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","set-contract","district.ui.smart-contracts.events/set-contract",614538368),contract_key,district.ui.smart_contracts.queries.contract.call(null,new_db,contract_key)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","contract-load-failed","district.ui.smart-contracts.events/contract-load-failed",-275202673),contract_key,district.ui.smart_contracts.queries.contract.call(null,new_db,contract_key),response], null)], null)),((cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.vals.call(null,cljs.core.deref.call(null,_STAR_load_batch_STAR_))))?(cljs.core.truth_(district.ui.web3.queries.web3.call(null,db))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","contracts-loaded","district.ui.smart-contracts.events/contracts-loaded",-1074021337)], null)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","do-nothing*","district.ui.smart-contracts.events/do-nothing*",1959320207)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3.events","web3-created","district.ui.web3.events/web3-created",-602267634)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts.events","contracts-loaded","district.ui.smart-contracts.events/contracts-loaded",-1074021337)], null)], null)], null)], null)], null)):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.smart-contracts.events","do-nothing*","district.ui.smart-contracts.events/do-nothing*",1959320207),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.smart-contracts.events","set-contract","district.ui.smart-contracts.events/set-contract",614538368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.smart_contracts.events.interceptors,district0x.re_frame.spec_interceptors.validate_args.call(null,cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contract-key","contract-key",-137341548),new cljs.core.Keyword(null,"contract","contract",798152745),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts","contract-key","district.ui.smart-contracts/contract-key",-766799881),new cljs.core.Keyword("district.ui.smart-contracts","contract","district.ui.smart-contracts/contract",1543250380),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.smart-contracts","contract-key","district.ui.smart-contracts/contract-key",-766799881),new cljs.core.Keyword("district.ui.smart-contracts","contract","district.ui.smart-contracts/contract",1543250380),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)))], null),(function (p__34315,p__34316){
var map__34317 = p__34315;
var map__34317__$1 = ((((!((map__34317 == null)))?(((((map__34317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34317):map__34317);
var db = cljs.core.get.call(null,map__34317__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34318 = p__34316;
var contract_key = cljs.core.nth.call(null,vec__34318,(0),null);
var contract = cljs.core.nth.call(null,vec__34318,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.smart_contracts.queries.merge_contract.call(null,db,contract_key,contract)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.smart-contracts.events","contract-load-failed","district.ui.smart-contracts.events/contract-load-failed",-275202673),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.smart-contracts.events","contracts-loaded","district.ui.smart-contracts.events/contracts-loaded",-1074021337),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.smart-contracts.events","stop","district.ui.smart-contracts.events/stop",-1952115498),district.ui.smart_contracts.events.interceptors,(function (p__34322){
var map__34323 = p__34322;
var map__34323__$1 = ((((!((map__34323 == null)))?(((((map__34323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34323):map__34323);
var db = cljs.core.get.call(null,map__34323__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.smart_contracts.queries.dissoc_smart_contracts.call(null,db)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526705069046
