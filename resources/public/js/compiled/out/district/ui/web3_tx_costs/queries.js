// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_costs.queries');
goog.require('cljs.core');
goog.require('clojure.set');
district.ui.web3_tx_costs.queries.db_key = new cljs.core.Keyword(null,"district.ui.web3-tx-costs","district.ui.web3-tx-costs",1027379243);
district.ui.web3_tx_costs.queries.currencies = (function district$ui$web3_tx_costs$queries$currencies(db){
return new cljs.core.Keyword(null,"currencies","currencies",2003336181).cljs$core$IFn$_invoke$arity$1(district.ui.web3_tx_costs.queries.db_key.cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_tx_costs.queries.set_currencies = (function district$ui$web3_tx_costs$queries$set_currencies(db,currencies){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_costs.queries.db_key,new cljs.core.Keyword(null,"currencies","currencies",2003336181)], null),currencies);
});
district.ui.web3_tx_costs.queries.add_currencies = (function district$ui$web3_tx_costs$queries$add_currencies(db,currencies){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_costs.queries.db_key,new cljs.core.Keyword(null,"currencies","currencies",2003336181)], null),clojure.set.union,currencies);
});
district.ui.web3_tx_costs.queries.dissoc_web3_tx_costs = (function district$ui$web3_tx_costs$queries$dissoc_web3_tx_costs(db){
return cljs.core.dissoc.call(null,db,district.ui.web3_tx_costs.queries.db_key);
});

//# sourceMappingURL=queries.js.map?rel=1526705067661
