// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_id.queries');
goog.require('cljs.core');
goog.require('district.ui.web3_accounts.queries');
goog.require('district.ui.web3_tx.queries');
goog.require('medley.core');
district.ui.web3_tx_id.queries.db_key = new cljs.core.Keyword(null,"district.ui.web3-tx-id","district.ui.web3-tx-id",185301330);
district.ui.web3_tx_id.queries.add_tx_hash = (function district$ui$web3_tx_id$queries$add_tx_hash(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25412 = arguments.length;
var i__4500__auto___25413 = (0);
while(true){
if((i__4500__auto___25413 < len__4499__auto___25412)){
args__4502__auto__.push((arguments[i__4500__auto___25413]));

var G__25414 = (i__4500__auto___25413 + (1));
i__4500__auto___25413 = G__25414;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return district.ui.web3_tx_id.queries.add_tx_hash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

district.ui.web3_tx_id.queries.add_tx_hash.cljs$core$IFn$_invoke$arity$variadic = (function (db,tx_id,tx_hash,p__25406){
var vec__25407 = p__25406;
var map__25410 = cljs.core.nth.call(null,vec__25407,(0),null);
var map__25410__$1 = ((((!((map__25410 == null)))?(((((map__25410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25410):map__25410);
var from = cljs.core.get.call(null,map__25410__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var fn = cljs.core.get.call(null,map__25410__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_id.queries.db_key,new cljs.core.Keyword(null,"txs","txs",2056038378),tx_id], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"fn","fn",-1175266204),fn], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_id.queries.db_key,new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),tx_hash], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx-id","tx-id",638275288),tx_id,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"fn","fn",-1175266204),fn], null));
});

district.ui.web3_tx_id.queries.add_tx_hash.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
district.ui.web3_tx_id.queries.add_tx_hash.cljs$lang$applyTo = (function (seq25402){
var G__25403 = cljs.core.first.call(null,seq25402);
var seq25402__$1 = cljs.core.next.call(null,seq25402);
var G__25404 = cljs.core.first.call(null,seq25402__$1);
var seq25402__$2 = cljs.core.next.call(null,seq25402__$1);
var G__25405 = cljs.core.first.call(null,seq25402__$2);
var seq25402__$3 = cljs.core.next.call(null,seq25402__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25403,G__25404,G__25405,seq25402__$3);
});

district.ui.web3_tx_id.queries.tx_hash = (function district$ui$web3_tx_id$queries$tx_hash(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25422 = arguments.length;
var i__4500__auto___25423 = (0);
while(true){
if((i__4500__auto___25423 < len__4499__auto___25422)){
args__4502__auto__.push((arguments[i__4500__auto___25423]));

var G__25424 = (i__4500__auto___25423 + (1));
i__4500__auto___25423 = G__25424;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.web3_tx_id.queries.tx_hash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.web3_tx_id.queries.tx_hash.cljs$core$IFn$_invoke$arity$variadic = (function (db,tx_id,p__25418){
var vec__25419 = p__25418;
var opts = cljs.core.nth.call(null,vec__25419,(0),null);
return new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(medley.core.find_first.call(null,((function (vec__25419,opts){
return (function (item){
return ((cljs.core._EQ_.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return district.ui.web3_accounts.queries.active_account.call(null,db);
}
})(),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(item))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(opts))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(item))))));
});})(vec__25419,opts))
,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_id.queries.db_key,new cljs.core.Keyword(null,"txs","txs",2056038378),tx_id], null))));
});

district.ui.web3_tx_id.queries.tx_hash.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.web3_tx_id.queries.tx_hash.cljs$lang$applyTo = (function (seq25415){
var G__25416 = cljs.core.first.call(null,seq25415);
var seq25415__$1 = cljs.core.next.call(null,seq25415);
var G__25417 = cljs.core.first.call(null,seq25415__$1);
var seq25415__$2 = cljs.core.next.call(null,seq25415__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25416,G__25417,seq25415__$2);
});

district.ui.web3_tx_id.queries.tx = (function district$ui$web3_tx_id$queries$tx(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25432 = arguments.length;
var i__4500__auto___25433 = (0);
while(true){
if((i__4500__auto___25433 < len__4499__auto___25432)){
args__4502__auto__.push((arguments[i__4500__auto___25433]));

var G__25434 = (i__4500__auto___25433 + (1));
i__4500__auto___25433 = G__25434;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.web3_tx_id.queries.tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.web3_tx_id.queries.tx.cljs$core$IFn$_invoke$arity$variadic = (function (db,tx_id,p__25428){
var vec__25429 = p__25428;
var opts = cljs.core.nth.call(null,vec__25429,(0),null);
return district.ui.web3_tx.queries.tx.call(null,db,district.ui.web3_tx_id.queries.tx_hash.call(null,db,tx_id,opts));
});

district.ui.web3_tx_id.queries.tx.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.web3_tx_id.queries.tx.cljs$lang$applyTo = (function (seq25425){
var G__25426 = cljs.core.first.call(null,seq25425);
var seq25425__$1 = cljs.core.next.call(null,seq25425);
var G__25427 = cljs.core.first.call(null,seq25425__$1);
var seq25425__$2 = cljs.core.next.call(null,seq25425__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25426,G__25427,seq25425__$2);
});

district.ui.web3_tx_id.queries.tx_status = (function district$ui$web3_tx_id$queries$tx_status(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25442 = arguments.length;
var i__4500__auto___25443 = (0);
while(true){
if((i__4500__auto___25443 < len__4499__auto___25442)){
args__4502__auto__.push((arguments[i__4500__auto___25443]));

var G__25444 = (i__4500__auto___25443 + (1));
i__4500__auto___25443 = G__25444;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.web3_tx_id.queries.tx_status.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.web3_tx_id.queries.tx_status.cljs$core$IFn$_invoke$arity$variadic = (function (db,tx_id,p__25438){
var vec__25439 = p__25438;
var opts = cljs.core.nth.call(null,vec__25439,(0),null);
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(district.ui.web3_tx_id.queries.tx.call(null,db,tx_id,opts));
});

district.ui.web3_tx_id.queries.tx_status.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.web3_tx_id.queries.tx_status.cljs$lang$applyTo = (function (seq25435){
var G__25436 = cljs.core.first.call(null,seq25435);
var seq25435__$1 = cljs.core.next.call(null,seq25435);
var G__25437 = cljs.core.first.call(null,seq25435__$1);
var seq25435__$2 = cljs.core.next.call(null,seq25435__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25436,G__25437,seq25435__$2);
});

district.ui.web3_tx_id.queries.tx_pending_QMARK_ = (function district$ui$web3_tx_id$queries$tx_pending_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25452 = arguments.length;
var i__4500__auto___25453 = (0);
while(true){
if((i__4500__auto___25453 < len__4499__auto___25452)){
args__4502__auto__.push((arguments[i__4500__auto___25453]));

var G__25454 = (i__4500__auto___25453 + (1));
i__4500__auto___25453 = G__25454;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.web3_tx_id.queries.tx_pending_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.web3_tx_id.queries.tx_pending_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (db,tx_id,p__25448){
var vec__25449 = p__25448;
var opts = cljs.core.nth.call(null,vec__25449,(0),null);
return cljs.core._EQ_.call(null,new cljs.core.Keyword("tx.status","pending","tx.status/pending",572020533),district.ui.web3_tx_id.queries.tx_status.call(null,db,tx_id,opts));
});

district.ui.web3_tx_id.queries.tx_pending_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.web3_tx_id.queries.tx_pending_QMARK_.cljs$lang$applyTo = (function (seq25445){
var G__25446 = cljs.core.first.call(null,seq25445);
var seq25445__$1 = cljs.core.next.call(null,seq25445);
var G__25447 = cljs.core.first.call(null,seq25445__$1);
var seq25445__$2 = cljs.core.next.call(null,seq25445__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25446,G__25447,seq25445__$2);
});

district.ui.web3_tx_id.queries.tx_success_QMARK_ = (function district$ui$web3_tx_id$queries$tx_success_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25462 = arguments.length;
var i__4500__auto___25463 = (0);
while(true){
if((i__4500__auto___25463 < len__4499__auto___25462)){
args__4502__auto__.push((arguments[i__4500__auto___25463]));

var G__25464 = (i__4500__auto___25463 + (1));
i__4500__auto___25463 = G__25464;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.web3_tx_id.queries.tx_success_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.web3_tx_id.queries.tx_success_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (db,tx_id,p__25458){
var vec__25459 = p__25458;
var opts = cljs.core.nth.call(null,vec__25459,(0),null);
return cljs.core._EQ_.call(null,new cljs.core.Keyword("tx.status","success","tx.status/success",-1663270666),district.ui.web3_tx_id.queries.tx_status.call(null,db,tx_id,opts));
});

district.ui.web3_tx_id.queries.tx_success_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.web3_tx_id.queries.tx_success_QMARK_.cljs$lang$applyTo = (function (seq25455){
var G__25456 = cljs.core.first.call(null,seq25455);
var seq25455__$1 = cljs.core.next.call(null,seq25455);
var G__25457 = cljs.core.first.call(null,seq25455__$1);
var seq25455__$2 = cljs.core.next.call(null,seq25455__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25456,G__25457,seq25455__$2);
});

district.ui.web3_tx_id.queries.tx_error_QMARK_ = (function district$ui$web3_tx_id$queries$tx_error_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25472 = arguments.length;
var i__4500__auto___25473 = (0);
while(true){
if((i__4500__auto___25473 < len__4499__auto___25472)){
args__4502__auto__.push((arguments[i__4500__auto___25473]));

var G__25474 = (i__4500__auto___25473 + (1));
i__4500__auto___25473 = G__25474;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.web3_tx_id.queries.tx_error_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.web3_tx_id.queries.tx_error_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (db,tx_id,p__25468){
var vec__25469 = p__25468;
var opts = cljs.core.nth.call(null,vec__25469,(0),null);
return cljs.core._EQ_.call(null,new cljs.core.Keyword("tx.status","error","tx.status/error",300053332),district.ui.web3_tx_id.queries.tx_status.call(null,db,tx_id,opts));
});

district.ui.web3_tx_id.queries.tx_error_QMARK_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.web3_tx_id.queries.tx_error_QMARK_.cljs$lang$applyTo = (function (seq25465){
var G__25466 = cljs.core.first.call(null,seq25465);
var seq25465__$1 = cljs.core.next.call(null,seq25465);
var G__25467 = cljs.core.first.call(null,seq25465__$1);
var seq25465__$2 = cljs.core.next.call(null,seq25465__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25466,G__25467,seq25465__$2);
});

district.ui.web3_tx_id.queries.remove_tx_id = (function district$ui$web3_tx_id$queries$remove_tx_id(db,tx_hash){
var map__25476 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_id.queries.db_key,new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),tx_hash], null));
var map__25476__$1 = ((((!((map__25476 == null)))?(((((map__25476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25476):map__25476);
var tx_id = cljs.core.get.call(null,map__25476__$1,new cljs.core.Keyword(null,"tx-id","tx-id",638275288));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_id.queries.db_key,new cljs.core.Keyword(null,"txs","txs",2056038378),tx_id], null),cljs.core.partial.call(null,cljs.core.remove,((function (map__25476,map__25476__$1,tx_id){
return (function (p1__25475_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__25475_SHARP_),tx_hash);
});})(map__25476,map__25476__$1,tx_id))
)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_id.queries.db_key,new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),tx_hash], null),cljs.core.dissoc);
});
district.ui.web3_tx_id.queries.web3_tx_id = (function district$ui$web3_tx_id$queries$web3_tx_id(db){
return cljs.core.get.call(null,db,district.ui.web3_tx_id.queries.db_key);
});
district.ui.web3_tx_id.queries.assoc_web3_tx_id = (function district$ui$web3_tx_id$queries$assoc_web3_tx_id(db,p__25478){
var map__25479 = p__25478;
var map__25479__$1 = ((((!((map__25479 == null)))?(((((map__25479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25479):map__25479);
var txs = cljs.core.get.call(null,map__25479__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var tx_hashes = cljs.core.get.call(null,map__25479__$1,new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_id.queries.db_key,new cljs.core.Keyword(null,"txs","txs",2056038378)], null),txs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_id.queries.db_key,new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772)], null),tx_hashes);
});
district.ui.web3_tx_id.queries.dissoc_web3_tx_id = (function district$ui$web3_tx_id$queries$dissoc_web3_tx_id(db){
return cljs.core.dissoc.call(null,db,district.ui.web3_tx_id.queries.db_key);
});

//# sourceMappingURL=queries.js.map?rel=1526741424387
