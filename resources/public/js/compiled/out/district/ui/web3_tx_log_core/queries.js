// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_log_core.queries');
goog.require('cljs.core');
goog.require('district.ui.web3_tx.queries');
district.ui.web3_tx_log_core.queries.tx_hashes = (function district$ui$web3_tx_log_core$queries$tx_hashes(db){
return new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",1222964382).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_tx_log_core.queries.txs = (function district$ui$web3_tx_log_core$queries$txs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24931 = arguments.length;
var i__4500__auto___24932 = (0);
while(true){
if((i__4500__auto___24932 < len__4499__auto___24931)){
args__4502__auto__.push((arguments[i__4500__auto___24932]));

var G__24933 = (i__4500__auto___24932 + (1));
i__4500__auto___24932 = G__24933;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.ui.web3_tx_log_core.queries.txs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.ui.web3_tx_log_core.queries.txs.cljs$core$IFn$_invoke$arity$variadic = (function (db,args){
var txs = cljs.core.apply.call(null,district.ui.web3_tx.queries.txs,db,args);
var hashes = cljs.core.set.call(null,cljs.core.keys.call(null,txs));
return cljs.core.map.call(null,txs,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,hashes),district.ui.web3_tx_log_core.queries.tx_hashes.call(null,db)));
});

district.ui.web3_tx_log_core.queries.txs.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.ui.web3_tx_log_core.queries.txs.cljs$lang$applyTo = (function (seq24929){
var G__24930 = cljs.core.first.call(null,seq24929);
var seq24929__$1 = cljs.core.next.call(null,seq24929);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24930,seq24929__$1);
});

district.ui.web3_tx_log_core.queries.add_tx_hash = (function district$ui$web3_tx_log_core$queries$add_tx_hash(db,tx_hash){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",1222964382),new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772)], null),cljs.core.conj,tx_hash);
});
district.ui.web3_tx_log_core.queries.remove_tx_hash = (function district$ui$web3_tx_log_core$queries$remove_tx_hash(db,tx_hash){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",1222964382),new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772)], null),cljs.core.partial.call(null,cljs.core.remove,(function (p1__24934_SHARP_){
return cljs.core._EQ_.call(null,tx_hash,p1__24934_SHARP_);
})));
});
district.ui.web3_tx_log_core.queries.assoc_tx_hashes = (function district$ui$web3_tx_log_core$queries$assoc_tx_hashes(db,tx_hashes){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",1222964382),new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772)], null),tx_hashes);
});
district.ui.web3_tx_log_core.queries.dissoc_web3_tx_log_core = (function district$ui$web3_tx_log_core$queries$dissoc_web3_tx_log_core(db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"district.ui.web3-tx-log-core","district.ui.web3-tx-log-core",1222964382));
});

//# sourceMappingURL=queries.js.map?rel=1526741423343
