// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_account_balances.events');
goog.require('cljs.core');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.web3_accounts.events');
goog.require('district.ui.web3_accounts.queries');
goog.require('district.ui.web3_balances.events');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('re_frame.core');
district.ui.web3_account_balances.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-account-balances.events","start","district.ui.web3-account-balances.events/start",763117943),district.ui.web3_account_balances.events.interceptors,(function (p__35545,p__35546){
var map__35547 = p__35545;
var map__35547__$1 = ((((!((map__35547 == null)))?(((((map__35547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35547):map__35547);
var db = cljs.core.get.call(null,map__35547__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35548 = p__35546;
var map__35551 = cljs.core.nth.call(null,vec__35548,(0),null);
var map__35551__$1 = ((((!((map__35551 == null)))?(((((map__35551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35551):map__35551);
var opts = map__35551__$1;
var disable_loading_at_start_QMARK_ = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword(null,"disable-loading-at-start?","disable-loading-at-start?",476736496));
if(cljs.core.truth_(disable_loading_at_start_QMARK_)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.web3-account-balances.events","accounts-changed","district.ui.web3-account-balances.events/accounts-changed",590379341),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.web3-accounts.events","accounts-changed","district.ui.web3-accounts.events/accounts-changed",1261902656),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-account-balances.events","load-account-balances","district.ui.web3-account-balances.events/load-account-balances",1248818541),opts], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-account-balances.events","load-account-balances","district.ui.web3-account-balances.events/load-account-balances",1248818541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_account_balances.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-account-balances","opts","district.ui.web3-account-balances/opts",-1931883454))], null),(function (p__35554,p__35555){
var map__35556 = p__35554;
var map__35556__$1 = ((((!((map__35556 == null)))?(((((map__35556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35556):map__35556);
var db = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35557 = p__35555;
var map__35560 = cljs.core.nth.call(null,vec__35557,(0),null);
var map__35560__$1 = ((((!((map__35560 == null)))?(((((map__35560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35560):map__35560);
var disable_loading_at_start_QMARK_ = cljs.core.get.call(null,map__35560__$1,new cljs.core.Keyword(null,"disable-loading-at-start?","disable-loading-at-start?",476736496));
var for_contracts = cljs.core.get.call(null,map__35560__$1,new cljs.core.Keyword(null,"for-contracts","for-contracts",-406095931));
var vec__35561 = cljs.core.nth.call(null,vec__35557,(1),null);
var _ = cljs.core.nth.call(null,vec__35561,(0),null);
var map__35564 = cljs.core.nth.call(null,vec__35561,(1),null);
var map__35564__$1 = ((((!((map__35564 == null)))?(((((map__35564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35564):map__35564);
var old = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
return cljs.core.merge.call(null,((cljs.core.seq.call(null,old))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","stop-watching","district.ui.web3-balances.events/stop-watching",-1262652529),cljs.core.flatten.call(null,(function (){var iter__4292__auto__ = ((function (map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function district$ui$web3_account_balances$events$iter__35568(s__35569){
return (new cljs.core.LazySeq(null,((function (map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function (){
var s__35569__$1 = s__35569;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35569__$1);
if(temp__5457__auto__){
var s__35569__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35569__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35569__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35571 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35570 = (0);
while(true){
if((i__35570 < size__4291__auto__)){
var address = cljs.core._nth.call(null,c__4290__auto__,i__35570);
cljs.core.chunk_append.call(null,b__35571,(function (){var iter__4292__auto__ = ((function (i__35570,address,c__4290__auto__,size__4291__auto__,b__35571,s__35569__$2,temp__5457__auto__,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function district$ui$web3_account_balances$events$iter__35568_$_iter__35572(s__35573){
return (new cljs.core.LazySeq(null,((function (i__35570,address,c__4290__auto__,size__4291__auto__,b__35571,s__35569__$2,temp__5457__auto__,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function (){
var s__35573__$1 = s__35573;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__35573__$1);
if(temp__5457__auto____$1){
var s__35573__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35573__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__35573__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__35575 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__35574 = (0);
while(true){
if((i__35574 < size__4291__auto____$1)){
var contract = cljs.core._nth.call(null,c__4290__auto____$1,i__35574);
cljs.core.chunk_append.call(null,b__35575,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"contract","contract",798152745),contract], null));

var G__35592 = (i__35574 + (1));
i__35574 = G__35592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35575),district$ui$web3_account_balances$events$iter__35568_$_iter__35572.call(null,cljs.core.chunk_rest.call(null,s__35573__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35575),null);
}
} else {
var contract = cljs.core.first.call(null,s__35573__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"contract","contract",798152745),contract], null),district$ui$web3_account_balances$events$iter__35568_$_iter__35572.call(null,cljs.core.rest.call(null,s__35573__$2)));
}
} else {
return null;
}
break;
}
});})(i__35570,address,c__4290__auto__,size__4291__auto__,b__35571,s__35569__$2,temp__5457__auto__,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
,null,null));
});})(i__35570,address,c__4290__auto__,size__4291__auto__,b__35571,s__35569__$2,temp__5457__auto__,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
;
return iter__4292__auto__.call(null,for_contracts);
})());

var G__35593 = (i__35570 + (1));
i__35570 = G__35593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35571),district$ui$web3_account_balances$events$iter__35568.call(null,cljs.core.chunk_rest.call(null,s__35569__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35571),null);
}
} else {
var address = cljs.core.first.call(null,s__35569__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (address,s__35569__$2,temp__5457__auto__,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function district$ui$web3_account_balances$events$iter__35568_$_iter__35576(s__35577){
return (new cljs.core.LazySeq(null,((function (address,s__35569__$2,temp__5457__auto__,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function (){
var s__35577__$1 = s__35577;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__35577__$1);
if(temp__5457__auto____$1){
var s__35577__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35577__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35577__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35579 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35578 = (0);
while(true){
if((i__35578 < size__4291__auto__)){
var contract = cljs.core._nth.call(null,c__4290__auto__,i__35578);
cljs.core.chunk_append.call(null,b__35579,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"contract","contract",798152745),contract], null));

var G__35594 = (i__35578 + (1));
i__35578 = G__35594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35579),district$ui$web3_account_balances$events$iter__35568_$_iter__35576.call(null,cljs.core.chunk_rest.call(null,s__35577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35579),null);
}
} else {
var contract = cljs.core.first.call(null,s__35577__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"contract","contract",798152745),contract], null),district$ui$web3_account_balances$events$iter__35568_$_iter__35576.call(null,cljs.core.rest.call(null,s__35577__$2)));
}
} else {
return null;
}
break;
}
});})(address,s__35569__$2,temp__5457__auto__,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
,null,null));
});})(address,s__35569__$2,temp__5457__auto__,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
;
return iter__4292__auto__.call(null,for_contracts);
})(),district$ui$web3_account_balances$events$iter__35568.call(null,cljs.core.rest.call(null,s__35569__$2)));
}
} else {
return null;
}
break;
}
});})(map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
,null,null));
});})(map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
;
return iter__4292__auto__.call(null,old);
})())], null)], null):null),(function (){var for_contracts__$1 = (cljs.core.truth_(for_contracts)?for_contracts:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ETH","ETH",-1240862103)], null));
var accounts = district.ui.web3_accounts.queries.accounts.call(null,db);
if(cljs.core.seq.call(null,accounts)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-balances.events","load-balances","district.ui.web3-balances.events/load-balances",-867191028),cljs.core.flatten.call(null,(function (){var iter__4292__auto__ = ((function (for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function district$ui$web3_account_balances$events$iter__35580(s__35581){
return (new cljs.core.LazySeq(null,((function (for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function (){
var s__35581__$1 = s__35581;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35581__$1);
if(temp__5457__auto__){
var s__35581__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35581__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35581__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35583 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35582 = (0);
while(true){
if((i__35582 < size__4291__auto__)){
var address = cljs.core._nth.call(null,c__4290__auto__,i__35582);
cljs.core.chunk_append.call(null,b__35583,(function (){var iter__4292__auto__ = ((function (i__35582,address,c__4290__auto__,size__4291__auto__,b__35583,s__35581__$2,temp__5457__auto__,for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function district$ui$web3_account_balances$events$iter__35580_$_iter__35584(s__35585){
return (new cljs.core.LazySeq(null,((function (i__35582,address,c__4290__auto__,size__4291__auto__,b__35583,s__35581__$2,temp__5457__auto__,for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function (){
var s__35585__$1 = s__35585;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__35585__$1);
if(temp__5457__auto____$1){
var s__35585__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35585__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__35585__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__35587 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__35586 = (0);
while(true){
if((i__35586 < size__4291__auto____$1)){
var contract = cljs.core._nth.call(null,c__4290__auto____$1,i__35586);
cljs.core.chunk_append.call(null,b__35587,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"contract","contract",798152745),contract,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),cljs.core.not.call(null,disable_loading_at_start_QMARK_)], null));

var G__35595 = (i__35586 + (1));
i__35586 = G__35595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35587),district$ui$web3_account_balances$events$iter__35580_$_iter__35584.call(null,cljs.core.chunk_rest.call(null,s__35585__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35587),null);
}
} else {
var contract = cljs.core.first.call(null,s__35585__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"contract","contract",798152745),contract,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),cljs.core.not.call(null,disable_loading_at_start_QMARK_)], null),district$ui$web3_account_balances$events$iter__35580_$_iter__35584.call(null,cljs.core.rest.call(null,s__35585__$2)));
}
} else {
return null;
}
break;
}
});})(i__35582,address,c__4290__auto__,size__4291__auto__,b__35583,s__35581__$2,temp__5457__auto__,for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
,null,null));
});})(i__35582,address,c__4290__auto__,size__4291__auto__,b__35583,s__35581__$2,temp__5457__auto__,for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
;
return iter__4292__auto__.call(null,for_contracts__$1);
})());

var G__35596 = (i__35582 + (1));
i__35582 = G__35596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35583),district$ui$web3_account_balances$events$iter__35580.call(null,cljs.core.chunk_rest.call(null,s__35581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35583),null);
}
} else {
var address = cljs.core.first.call(null,s__35581__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (address,s__35581__$2,temp__5457__auto__,for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function district$ui$web3_account_balances$events$iter__35580_$_iter__35588(s__35589){
return (new cljs.core.LazySeq(null,((function (address,s__35581__$2,temp__5457__auto__,for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old){
return (function (){
var s__35589__$1 = s__35589;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__35589__$1);
if(temp__5457__auto____$1){
var s__35589__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35589__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__35589__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__35591 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__35590 = (0);
while(true){
if((i__35590 < size__4291__auto__)){
var contract = cljs.core._nth.call(null,c__4290__auto__,i__35590);
cljs.core.chunk_append.call(null,b__35591,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"contract","contract",798152745),contract,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),cljs.core.not.call(null,disable_loading_at_start_QMARK_)], null));

var G__35597 = (i__35590 + (1));
i__35590 = G__35597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35591),district$ui$web3_account_balances$events$iter__35580_$_iter__35588.call(null,cljs.core.chunk_rest.call(null,s__35589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35591),null);
}
} else {
var contract = cljs.core.first.call(null,s__35589__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),address,new cljs.core.Keyword(null,"contract","contract",798152745),contract,new cljs.core.Keyword(null,"watch?","watch?",-1976903168),cljs.core.not.call(null,disable_loading_at_start_QMARK_)], null),district$ui$web3_account_balances$events$iter__35580_$_iter__35588.call(null,cljs.core.rest.call(null,s__35589__$2)));
}
} else {
return null;
}
break;
}
});})(address,s__35581__$2,temp__5457__auto__,for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
,null,null));
});})(address,s__35581__$2,temp__5457__auto__,for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
;
return iter__4292__auto__.call(null,for_contracts__$1);
})(),district$ui$web3_account_balances$events$iter__35580.call(null,cljs.core.rest.call(null,s__35581__$2)));
}
} else {
return null;
}
break;
}
});})(for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
,null,null));
});})(for_contracts__$1,accounts,map__35556,map__35556__$1,db,vec__35557,map__35560,map__35560__$1,disable_loading_at_start_QMARK_,for_contracts,vec__35561,_,map__35564,map__35564__$1,old))
;
return iter__4292__auto__.call(null,accounts);
})())], null)], null);
} else {
return null;
}
})());
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-account-balances.events","stop","district.ui.web3-account-balances.events/stop",1287449230),district.ui.web3_account_balances.events.interceptors,(function (p__35598,p__35599){
var map__35600 = p__35598;
var map__35600__$1 = ((((!((map__35600 == null)))?(((((map__35600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35600):map__35600);
var db = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35601 = p__35599;
var map__35604 = cljs.core.nth.call(null,vec__35601,(0),null);
var map__35604__$1 = ((((!((map__35604 == null)))?(((((map__35604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35604):map__35604);
var disable_loading_at_start_QMARK_ = cljs.core.get.call(null,map__35604__$1,new cljs.core.Keyword(null,"disable-loading-at-start?","disable-loading-at-start?",476736496));
if(cljs.core.truth_(disable_loading_at_start_QMARK_)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.web3-account-balances.events","accounts-changed","district.ui.web3-account-balances.events/accounts-changed",590379341)], null)], null);
}
}));

//# sourceMappingURL=events.js.map?rel=1526705069951
