// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx.events');
goog.require('cljs.core');
goog.require('bignumber.core');
goog.require('cljs_web3.eth');
goog.require('cljs.spec.alpha');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.web3_tx.queries');
goog.require('district.ui.web3.events');
goog.require('district.ui.web3.queries');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('district0x.re_frame.web3_fx');
goog.require('re_frame.core');
district.ui.web3_tx.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-data","district.ui.web3-tx.events/tx-data",-1992748412),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","start","district.ui.web3-tx.events/start",-1189429764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx.events.interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"web3-tx-localstorage","web3-tx-localstorage",902508782))], null),(function (p__24491,p__24492){
var map__24493 = p__24491;
var map__24493__$1 = ((((!((map__24493 == null)))?(((((map__24493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24493):map__24493);
var db = cljs.core.get.call(null,map__24493__$1,new cljs.core.Keyword(null,"db","db",993250759));
var web3_tx_localstorage = cljs.core.get.call(null,map__24493__$1,new cljs.core.Keyword(null,"web3-tx-localstorage","web3-tx-localstorage",902508782));
var vec__24494 = p__24492;
var map__24497 = cljs.core.nth.call(null,vec__24494,(0),null);
var map__24497__$1 = ((((!((map__24497 == null)))?(((((map__24497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24497):map__24497);
var disable_using_localstorage_QMARK_ = cljs.core.get.call(null,map__24497__$1,new cljs.core.Keyword(null,"disable-using-localstorage?","disable-using-localstorage?",375201508));
var txs = (cljs.core.truth_(disable_using_localstorage_QMARK_)?cljs.core.PersistentArrayMap.EMPTY:district.ui.web3_tx.queries.txs.call(null,web3_tx_localstorage));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx.queries.assoc_opt.call(null,district.ui.web3_tx.queries.merge_txs.call(null,db,txs),new cljs.core.Keyword(null,"disable-using-localstorage?","disable-using-localstorage?",375201508),disable_using_localstorage_QMARK_),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.web3-tx.events","web3-created","district.ui.web3-tx.events/web3-created",-823254387),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.web3.events","web3-created","district.ui.web3.events/web3-created",-602267634),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","watch-pending-txs","district.ui.web3-tx.events/watch-pending-txs",1656110266)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","watch-pending-txs","district.ui.web3-tx.events/watch-pending-txs",1656110266),district.ui.web3_tx.events.interceptors,(function (p__24500){
var map__24501 = p__24500;
var map__24501__$1 = ((((!((map__24501 == null)))?(((((map__24501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24501):map__24501);
var db = cljs.core.get.call(null,map__24501__$1,new cljs.core.Keyword(null,"db","db",993250759));
var pending_txs = district.ui.web3_tx.queries.txs.call(null,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword("tx.status","pending","tx.status/pending",572020533)], null));
if(cljs.core.seq.call(null,pending_txs)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","watch-transactions","web3/watch-transactions",-1296047084),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),district.ui.web3.queries.web3.call(null,db),new cljs.core.Keyword(null,"transactions","transactions",-1425846118),(function (){var iter__4292__auto__ = ((function (pending_txs,map__24501,map__24501__$1,db){
return (function district$ui$web3_tx$events$iter__24503(s__24504){
return (new cljs.core.LazySeq(null,((function (pending_txs,map__24501,map__24501__$1,db){
return (function (){
var s__24504__$1 = s__24504;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24504__$1);
if(temp__5457__auto__){
var s__24504__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24504__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24504__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24506 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24505 = (0);
while(true){
if((i__24505 < size__4291__auto__)){
var tx_hash = cljs.core._nth.call(null,c__4290__auto__,i__24505);
cljs.core.chunk_append.call(null,b__24506,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-tx","district.ui.web3-tx",-904136579)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx_hash)].join(''),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-success","district.ui.web3-tx.events/tx-success",1776630931),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-error","district.ui.web3-tx.events/tx-error",-1962063295),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-receipt","district.ui.web3-tx.events/tx-receipt",-775134710),cljs.core.PersistentArrayMap.EMPTY], null)], null));

var G__24507 = (i__24505 + (1));
i__24505 = G__24507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24506),district$ui$web3_tx$events$iter__24503.call(null,cljs.core.chunk_rest.call(null,s__24504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24506),null);
}
} else {
var tx_hash = cljs.core.first.call(null,s__24504__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-tx","district.ui.web3-tx",-904136579)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx_hash)].join(''),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-success","district.ui.web3-tx.events/tx-success",1776630931),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-error","district.ui.web3-tx.events/tx-error",-1962063295),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-receipt","district.ui.web3-tx.events/tx-receipt",-775134710),cljs.core.PersistentArrayMap.EMPTY], null)], null),district$ui$web3_tx$events$iter__24503.call(null,cljs.core.rest.call(null,s__24504__$2)));
}
} else {
return null;
}
break;
}
});})(pending_txs,map__24501,map__24501__$1,db))
,null,null));
});})(pending_txs,map__24501,map__24501__$1,db))
;
return iter__4292__auto__.call(null,cljs.core.keys.call(null,pending_txs));
})()], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","send-tx","district.ui.web3-tx.events/send-tx",-1958850483),district.ui.web3_tx.events.interceptors,(function (p__24508,p__24509){
var map__24510 = p__24508;
var map__24510__$1 = ((((!((map__24510 == null)))?(((((map__24510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24510):map__24510);
var db = cljs.core.get.call(null,map__24510__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24511 = p__24509;
var map__24514 = cljs.core.nth.call(null,vec__24511,(0),null);
var map__24514__$1 = ((((!((map__24514 == null)))?(((((map__24514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24514):map__24514);
var opts = map__24514__$1;
var instance = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var fn = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var tx_opts = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var args = cljs.core.get.call(null,map__24514__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),district.ui.web3.queries.web3.call(null,db),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,opts,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560)],[args,tx_opts,fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-error","district.ui.web3-tx.events/tx-error",-1962063295),opts], null),instance,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash-error","district.ui.web3-tx.events/tx-hash-error",560113589),opts], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash-error","district.ui.web3-tx.events/tx-hash-error",560113589),opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687),opts], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-success","district.ui.web3-tx.events/tx-success",1776630931),opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-receipt","district.ui.web3-tx.events/tx-receipt",-775134710),opts], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-receipt","district.ui.web3-tx.events/tx-receipt",-775134710),opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-success","district.ui.web3-tx.events/tx-success",1776630931),opts], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687),opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-error","district.ui.web3-tx.events/tx-error",-1962063295),opts], null)], null)]))], null)], null)], null);
}));
district.ui.web3_tx.events.concat_callback_effects = (function district$ui$web3_tx$events$concat_callback_effects(callback,callback_n,args){
var on_tx_hash_all = cljs.core.concat.call(null,(cljs.core.truth_(callback)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback], null):null),callback_n);
var iter__4292__auto__ = ((function (on_tx_hash_all){
return (function district$ui$web3_tx$events$concat_callback_effects_$_iter__24517(s__24518){
return (new cljs.core.LazySeq(null,((function (on_tx_hash_all){
return (function (){
var s__24518__$1 = s__24518;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24518__$1);
if(temp__5457__auto__){
var s__24518__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24518__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24518__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24520 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24519 = (0);
while(true){
if((i__24519 < size__4291__auto__)){
var on_tx_hash = cljs.core._nth.call(null,c__4290__auto__,i__24519);
cljs.core.chunk_append.call(null,b__24520,cljs.core.vec.call(null,cljs.core.concat.call(null,on_tx_hash,args)));

var G__24521 = (i__24519 + (1));
i__24519 = G__24521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24520),district$ui$web3_tx$events$concat_callback_effects_$_iter__24517.call(null,cljs.core.chunk_rest.call(null,s__24518__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24520),null);
}
} else {
var on_tx_hash = cljs.core.first.call(null,s__24518__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_tx_hash,args)),district$ui$web3_tx$events$concat_callback_effects_$_iter__24517.call(null,cljs.core.rest.call(null,s__24518__$2)));
}
} else {
return null;
}
break;
}
});})(on_tx_hash_all))
,null,null));
});})(on_tx_hash_all))
;
return iter__4292__auto__.call(null,on_tx_hash_all);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687),district.ui.web3_tx.events.interceptors,(function (p__24522,p__24523){
var map__24524 = p__24522;
var map__24524__$1 = ((((!((map__24524 == null)))?(((((map__24524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24524):map__24524);
var db = cljs.core.get.call(null,map__24524__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24525 = p__24523;
var map__24528 = cljs.core.nth.call(null,vec__24525,(0),null);
var map__24528__$1 = ((((!((map__24528 == null)))?(((((map__24528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24528):map__24528);
var on_tx_hash = cljs.core.get.call(null,map__24528__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_hash_n = cljs.core.get.call(null,map__24528__$1,new cljs.core.Keyword(null,"on-tx-hash-n","on-tx-hash-n",-1946600856));
var tx_hash = cljs.core.nth.call(null,vec__24525,(1),null);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","add-tx","district.ui.web3-tx.events/add-tx",-113800549),tx_hash], null)], null),(cljs.core.truth_((function (){var or__3922__auto__ = on_tx_hash;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return on_tx_hash_n;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),district.ui.web3_tx.events.concat_callback_effects.call(null,on_tx_hash,on_tx_hash_n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_hash], null))], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash-error","district.ui.web3-tx.events/tx-hash-error",560113589),district.ui.web3_tx.events.interceptors,(function (p__24531,p__24532){
var map__24533 = p__24531;
var map__24533__$1 = ((((!((map__24533 == null)))?(((((map__24533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24533):map__24533);
var db = cljs.core.get.call(null,map__24533__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24534 = p__24532;
var seq__24535 = cljs.core.seq.call(null,vec__24534);
var first__24536 = cljs.core.first.call(null,seq__24535);
var seq__24535__$1 = cljs.core.next.call(null,seq__24535);
var map__24537 = first__24536;
var map__24537__$1 = ((((!((map__24537 == null)))?(((((map__24537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24537):map__24537);
var on_tx_hash_error = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_hash_error_n = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword(null,"on-tx-hash-error-n","on-tx-hash-error-n",369462502));
var args = seq__24535__$1;
if(cljs.core.truth_((function (){var or__3922__auto__ = on_tx_hash_error;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return on_tx_hash_error_n;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),district.ui.web3_tx.events.concat_callback_effects.call(null,on_tx_hash_error,on_tx_hash_error_n,args)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-success","district.ui.web3-tx.events/tx-success",1776630931),district.ui.web3_tx.events.interceptors,(function (p__24540,p__24541){
var map__24542 = p__24540;
var map__24542__$1 = ((((!((map__24542 == null)))?(((((map__24542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24542):map__24542);
var db = cljs.core.get.call(null,map__24542__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24543 = p__24541;
var map__24546 = cljs.core.nth.call(null,vec__24543,(0),null);
var map__24546__$1 = ((((!((map__24546 == null)))?(((((map__24546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24546):map__24546);
var on_tx_success = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_success_n = cljs.core.get.call(null,map__24546__$1,new cljs.core.Keyword(null,"on-tx-success-n","on-tx-success-n",-1316147475));
var map__24547 = cljs.core.nth.call(null,vec__24543,(1),null);
var map__24547__$1 = ((((!((map__24547 == null)))?(((((map__24547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24547):map__24547);
var tx_receipt = map__24547__$1;
var transaction_hash = cljs.core.get.call(null,map__24547__$1,new cljs.core.Keyword(null,"transaction-hash","transaction-hash",-1131458511));
var tx_receipt__$1 = cljs.core.assoc.call(null,tx_receipt,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword("tx.status","success","tx.status/success",-1663270666));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","set-tx","district.ui.web3-tx.events/set-tx",-2003211234),transaction_hash,tx_receipt__$1], null)], null),(cljs.core.truth_((function (){var or__3922__auto__ = on_tx_success;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return on_tx_success_n;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),district.ui.web3_tx.events.concat_callback_effects.call(null,on_tx_success,on_tx_success_n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_receipt__$1], null))], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-error","district.ui.web3-tx.events/tx-error",-1962063295),district.ui.web3_tx.events.interceptors,(function (p__24551,p__24552){
var map__24553 = p__24551;
var map__24553__$1 = ((((!((map__24553 == null)))?(((((map__24553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24553):map__24553);
var db = cljs.core.get.call(null,map__24553__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24554 = p__24552;
var map__24557 = cljs.core.nth.call(null,vec__24554,(0),null);
var map__24557__$1 = ((((!((map__24557 == null)))?(((((map__24557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24557):map__24557);
var on_tx_error = cljs.core.get.call(null,map__24557__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var on_tx_error_n = cljs.core.get.call(null,map__24557__$1,new cljs.core.Keyword(null,"on-tx-error-n","on-tx-error-n",2086396560));
var map__24558 = cljs.core.nth.call(null,vec__24554,(1),null);
var map__24558__$1 = ((((!((map__24558 == null)))?(((((map__24558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24558):map__24558);
var tx_receipt = map__24558__$1;
var transaction_hash = cljs.core.get.call(null,map__24558__$1,new cljs.core.Keyword(null,"transaction-hash","transaction-hash",-1131458511));
var tx_receipt__$1 = cljs.core.assoc.call(null,tx_receipt,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword("tx.status","error","tx.status/error",300053332));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","set-tx","district.ui.web3-tx.events/set-tx",-2003211234),transaction_hash,tx_receipt__$1], null)], null),(cljs.core.truth_((function (){var or__3922__auto__ = on_tx_error;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return on_tx_error_n;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),district.ui.web3_tx.events.concat_callback_effects.call(null,on_tx_error,on_tx_error_n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_receipt__$1], null))], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-receipt","district.ui.web3-tx.events/tx-receipt",-775134710),district.ui.web3_tx.events.interceptors,(function (p__24562,p__24563){
var map__24564 = p__24562;
var map__24564__$1 = ((((!((map__24564 == null)))?(((((map__24564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24564):map__24564);
var db = cljs.core.get.call(null,map__24564__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24565 = p__24563;
var map__24568 = cljs.core.nth.call(null,vec__24565,(0),null);
var map__24568__$1 = ((((!((map__24568 == null)))?(((((map__24568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24568):map__24568);
var on_tx_receipt = cljs.core.get.call(null,map__24568__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_receipt_n = cljs.core.get.call(null,map__24568__$1,new cljs.core.Keyword(null,"on-tx-receipt-n","on-tx-receipt-n",-563945750));
var map__24569 = cljs.core.nth.call(null,vec__24565,(1),null);
var map__24569__$1 = ((((!((map__24569 == null)))?(((((map__24569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24569):map__24569);
var tx_receipt = map__24569__$1;
var transaction_hash = cljs.core.get.call(null,map__24569__$1,new cljs.core.Keyword(null,"transaction-hash","transaction-hash",-1131458511));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),district.ui.web3.queries.web3.call(null,db),new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs_web3.eth.get_transaction,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [transaction_hash], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-loaded","district.ui.web3-tx.events/tx-loaded",-1027130856),transaction_hash,tx_receipt], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-load-failed","district.ui.web3-tx.events/tx-load-failed",-1207755438)], null)], null)], null)], null)], null),(cljs.core.truth_((function (){var or__3922__auto__ = on_tx_receipt;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return on_tx_receipt_n;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),district.ui.web3_tx.events.concat_callback_effects.call(null,on_tx_receipt,on_tx_receipt_n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_receipt], null))], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-loaded","district.ui.web3-tx.events/tx-loaded",-1027130856),district.ui.web3_tx.events.interceptors,(function (p__24573,p__24574){
var map__24575 = p__24573;
var map__24575__$1 = ((((!((map__24575 == null)))?(((((map__24575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24575):map__24575);
var db = cljs.core.get.call(null,map__24575__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24576 = p__24574;
var tx_hash = cljs.core.nth.call(null,vec__24576,(0),null);
var tx_receipt = cljs.core.nth.call(null,vec__24576,(1),null);
var tx_data = cljs.core.nth.call(null,vec__24576,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","set-tx","district.ui.web3-tx.events/set-tx",-2003211234),tx_hash,cljs.core.update.call(null,cljs.core.update.call(null,tx_data,new cljs.core.Keyword(null,"value","value",305978217),bignumber.core.number),new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),bignumber.core.number)], null)], null);
}));
district.ui.web3_tx.events.merge_tx_data = (function district$ui$web3_tx$events$merge_tx_data(db,tx_hash,tx_data){
var new_db = district.ui.web3_tx.queries.merge_tx_data.call(null,db,tx_hash,tx_data);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),(cljs.core.truth_(district.ui.web3_tx.queries.localstorage_disabled_QMARK_.call(null,db))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"web3-tx-localstorage","web3-tx-localstorage",902508782),cljs.core.select_keys.call(null,new_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-tx","district.ui.web3-tx",-904136579)], null))], null)));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","add-tx","district.ui.web3-tx.events/add-tx",-113800549),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687))], null),(function (p__24580,p__24581){
var map__24582 = p__24580;
var map__24582__$1 = ((((!((map__24582 == null)))?(((((map__24582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24582):map__24582);
var db = cljs.core.get.call(null,map__24582__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24583 = p__24581;
var tx_hash = cljs.core.nth.call(null,vec__24583,(0),null);
return district.ui.web3_tx.events.merge_tx_data.call(null,db,tx_hash,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"created-on","created-on",-1211780919),(new Date()),new cljs.core.Keyword(null,"transaction-hash","transaction-hash",-1131458511),tx_hash,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword("tx.status","pending","tx.status/pending",572020533)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","set-tx","district.ui.web3-tx.events/set-tx",-2003211234),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx.events.interceptors,district0x.re_frame.spec_interceptors.validate_args.call(null,cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687),new cljs.core.Keyword("district.ui.web3-tx.events","tx-data","district.ui.web3-tx.events/tx-data",-1992748412),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687),new cljs.core.Keyword("district.ui.web3-tx.events","tx-data","district.ui.web3-tx.events/tx-data",-1992748412),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)))], null),(function (p__24587,p__24588){
var map__24589 = p__24587;
var map__24589__$1 = ((((!((map__24589 == null)))?(((((map__24589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24589):map__24589);
var db = cljs.core.get.call(null,map__24589__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24590 = p__24588;
var tx_hash = cljs.core.nth.call(null,vec__24590,(0),null);
var tx_data = cljs.core.nth.call(null,vec__24590,(1),null);
return district.ui.web3_tx.events.merge_tx_data.call(null,db,tx_hash,tx_data);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","remove-tx","district.ui.web3-tx.events/remove-tx",106007566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","tx-hash","district.ui.web3-tx.events/tx-hash",-1080771687))], null),(function (p__24594,p__24595){
var map__24596 = p__24594;
var map__24596__$1 = ((((!((map__24596 == null)))?(((((map__24596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24596):map__24596);
var db = cljs.core.get.call(null,map__24596__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24597 = p__24595;
var tx_hash = cljs.core.nth.call(null,vec__24597,(0),null);
var new_db = district.ui.web3_tx.queries.remove_tx.call(null,db,tx_hash);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),(cljs.core.truth_(district.ui.web3_tx.queries.localstorage_disabled_QMARK_.call(null,db))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"web3-tx-localstorage","web3-tx-localstorage",902508782),cljs.core.select_keys.call(null,new_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-tx","district.ui.web3-tx",-904136579)], null))], null)));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","clear-localstorage","district.ui.web3-tx.events/clear-localstorage",1773224158),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"web3-tx-localstorage","web3-tx-localstorage",902508782),null], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx.events","stop","district.ui.web3-tx.events/stop",-828540895),district.ui.web3_tx.events.interceptors,(function (p__24601){
var map__24602 = p__24601;
var map__24602__$1 = ((((!((map__24602 == null)))?(((((map__24602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24602):map__24602);
var db = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx.queries.dissoc_web3_tx.call(null,db),new cljs.core.Keyword("web3","stop-watching","web3/stop-watching",-1379727666),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.map.call(null,((function (map__24602,map__24602__$1,db){
return (function (p__24604){
var vec__24605 = p__24604;
var tx_hash = cljs.core.nth.call(null,vec__24605,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-tx","district.ui.web3-tx",-904136579)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx_hash)].join('');
});})(map__24602,map__24602__$1,db))
,district.ui.web3_tx.queries.txs.call(null,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword("tx.status","pending","tx.status/pending",572020533)], null)))], null),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.web3-tx.events","web3-created","district.ui.web3-tx.events/web3-created",-823254387)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526741423070
