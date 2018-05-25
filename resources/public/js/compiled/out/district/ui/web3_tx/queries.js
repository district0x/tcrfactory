// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx.queries');
goog.require('cljs.core');
district.ui.web3_tx.queries.db_key = new cljs.core.Keyword(null,"district.ui.web3-tx","district.ui.web3-tx",-904136579);
district.ui.web3_tx.queries.txs = (function district$ui$web3_tx$queries$txs(var_args){
var G__22446 = arguments.length;
switch (G__22446) {
case 1:
return district.ui.web3_tx.queries.txs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.ui.web3_tx.queries.txs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

district.ui.web3_tx.queries.txs.cljs$core$IFn$_invoke$arity$1 = (function (db){
return new cljs.core.Keyword(null,"txs","txs",2056038378).cljs$core$IFn$_invoke$arity$1(district.ui.web3_tx.queries.db_key.cljs$core$IFn$_invoke$arity$1(db));
});

district.ui.web3_tx.queries.txs.cljs$core$IFn$_invoke$arity$2 = (function (db,filter_opts){
if(cljs.core.truth_(filter_opts)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__22447){
var vec__22448 = p__22447;
var _ = cljs.core.nth.call(null,vec__22448,(0),null);
var tx = cljs.core.nth.call(null,vec__22448,(1),null);
return cljs.core._EQ_.call(null,filter_opts,cljs.core.select_keys.call(null,tx,cljs.core.keys.call(null,filter_opts)));
}),district.ui.web3_tx.queries.txs.call(null,db)));
} else {
return district.ui.web3_tx.queries.txs.call(null,db);
}
});

district.ui.web3_tx.queries.txs.cljs$lang$maxFixedArity = 2;

district.ui.web3_tx.queries.tx = (function district$ui$web3_tx$queries$tx(db,tx_hash){
return cljs.core.get.call(null,district.ui.web3_tx.queries.txs.call(null,db),tx_hash);
});
district.ui.web3_tx.queries.localstorage_disabled_QMARK_ = (function district$ui$web3_tx$queries$localstorage_disabled_QMARK_(db){
return new cljs.core.Keyword(null,"disable-using-localstorage?","disable-using-localstorage?",375201508).cljs$core$IFn$_invoke$arity$1(district.ui.web3_tx.queries.db_key.cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_tx.queries.merge_tx_data = (function district$ui$web3_tx$queries$merge_tx_data(db,tx_hash,tx_data){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx.queries.db_key,new cljs.core.Keyword(null,"txs","txs",2056038378),tx_hash], null),cljs.core.merge,tx_data);
});
district.ui.web3_tx.queries.remove_tx = (function district$ui$web3_tx$queries$remove_tx(db,tx_hash){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx.queries.db_key,new cljs.core.Keyword(null,"txs","txs",2056038378)], null),cljs.core.dissoc,tx_hash);
});
district.ui.web3_tx.queries.merge_txs = (function district$ui$web3_tx$queries$merge_txs(db,txs){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx.queries.db_key,new cljs.core.Keyword(null,"txs","txs",2056038378)], null),cljs.core.merge,txs);
});
district.ui.web3_tx.queries.assoc_opt = (function district$ui$web3_tx$queries$assoc_opt(db,key,value){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx.queries.db_key,key], null),value);
});
district.ui.web3_tx.queries.dissoc_web3_tx = (function district$ui$web3_tx$queries$dissoc_web3_tx(db){
return cljs.core.dissoc.call(null,db,district.ui.web3_tx.queries.db_key);
});

//# sourceMappingURL=queries.js.map?rel=1526741421755
