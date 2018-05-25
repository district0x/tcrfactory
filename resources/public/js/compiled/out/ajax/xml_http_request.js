// Compiled by ClojureScript 1.10.238 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__33140,handler){
var map__33141 = p__33140;
var map__33141__$1 = ((((!((map__33141 == null)))?(((((map__33141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33141):map__33141);
var uri = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__33141,map__33141__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__33139_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__33139_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__33141,map__33141__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___33153 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___33153)){
var response_type_33154 = temp__5457__auto___33153;
this$__$1.responseType = cljs.core.name.call(null,response_type_33154);
} else {
}

var seq__33143_33155 = cljs.core.seq.call(null,headers);
var chunk__33144_33156 = null;
var count__33145_33157 = (0);
var i__33146_33158 = (0);
while(true){
if((i__33146_33158 < count__33145_33157)){
var vec__33147_33159 = cljs.core._nth.call(null,chunk__33144_33156,i__33146_33158);
var k_33160 = cljs.core.nth.call(null,vec__33147_33159,(0),null);
var v_33161 = cljs.core.nth.call(null,vec__33147_33159,(1),null);
this$__$1.setRequestHeader(k_33160,v_33161);


var G__33162 = seq__33143_33155;
var G__33163 = chunk__33144_33156;
var G__33164 = count__33145_33157;
var G__33165 = (i__33146_33158 + (1));
seq__33143_33155 = G__33162;
chunk__33144_33156 = G__33163;
count__33145_33157 = G__33164;
i__33146_33158 = G__33165;
continue;
} else {
var temp__5457__auto___33166 = cljs.core.seq.call(null,seq__33143_33155);
if(temp__5457__auto___33166){
var seq__33143_33167__$1 = temp__5457__auto___33166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33143_33167__$1)){
var c__4319__auto___33168 = cljs.core.chunk_first.call(null,seq__33143_33167__$1);
var G__33169 = cljs.core.chunk_rest.call(null,seq__33143_33167__$1);
var G__33170 = c__4319__auto___33168;
var G__33171 = cljs.core.count.call(null,c__4319__auto___33168);
var G__33172 = (0);
seq__33143_33155 = G__33169;
chunk__33144_33156 = G__33170;
count__33145_33157 = G__33171;
i__33146_33158 = G__33172;
continue;
} else {
var vec__33150_33173 = cljs.core.first.call(null,seq__33143_33167__$1);
var k_33174 = cljs.core.nth.call(null,vec__33150_33173,(0),null);
var v_33175 = cljs.core.nth.call(null,vec__33150_33173,(1),null);
this$__$1.setRequestHeader(k_33174,v_33175);


var G__33176 = cljs.core.next.call(null,seq__33143_33167__$1);
var G__33177 = null;
var G__33178 = (0);
var G__33179 = (0);
seq__33143_33155 = G__33176;
chunk__33144_33156 = G__33177;
count__33145_33157 = G__33178;
i__33146_33158 = G__33179;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1526705067386
