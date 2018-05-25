// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_log.queries');
goog.require('cljs.core');
goog.require('district.ui.web3_accounts.queries');
goog.require('district.ui.web3_tx_log_core.queries');
district.ui.web3_tx_log.queries.db_key = new cljs.core.Keyword(null,"district.ui.web3-tx-log","district.ui.web3-tx-log",-1895968774);
district.ui.web3_tx_log.queries.settings = (function district$ui$web3_tx_log$queries$settings(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log.queries.db_key,new cljs.core.Keyword(null,"settings","settings",1556144875)], null));
});
district.ui.web3_tx_log.queries.from_active_address_only_QMARK_ = (function district$ui$web3_tx_log$queries$from_active_address_only_QMARK_(db){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"from-active-address-only?","from-active-address-only?",-232822829).cljs$core$IFn$_invoke$arity$1(district.ui.web3_tx_log.queries.settings.call(null,db)));
});
district.ui.web3_tx_log.queries.open_QMARK_ = (function district$ui$web3_tx_log$queries$open_QMARK_(db){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(district.ui.web3_tx_log.queries.settings.call(null,db)));
});
district.ui.web3_tx_log.queries.txs = (function district$ui$web3_tx_log$queries$txs(db){
return district.ui.web3_tx_log_core.queries.txs.call(null,db,(cljs.core.truth_(district.ui.web3_tx_log.queries.from_active_address_only_QMARK_.call(null,db))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),district.ui.web3_accounts.queries.active_account.call(null,db)], null):null));
});
district.ui.web3_tx_log.queries.merge_settings = (function district$ui$web3_tx_log$queries$merge_settings(db,settings){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log.queries.db_key,new cljs.core.Keyword(null,"settings","settings",1556144875)], null),cljs.core.merge,settings);
});
district.ui.web3_tx_log.queries.localstorage_disabled_QMARK_ = (function district$ui$web3_tx_log$queries$localstorage_disabled_QMARK_(db){
return new cljs.core.Keyword(null,"disable-using-localstorage?","disable-using-localstorage?",375201508).cljs$core$IFn$_invoke$arity$1(district.ui.web3_tx_log.queries.db_key.cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_tx_log.queries.assoc_opt = (function district$ui$web3_tx_log$queries$assoc_opt(db,key,value){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_log.queries.db_key,key], null),value);
});
district.ui.web3_tx_log.queries.dissoc_web3_tx_log = (function district$ui$web3_tx_log$queries$dissoc_web3_tx_log(db){
return cljs.core.dissoc.call(null,db,district.ui.web3_tx_log.queries.db_key);
});

//# sourceMappingURL=queries.js.map?rel=1526741423838
