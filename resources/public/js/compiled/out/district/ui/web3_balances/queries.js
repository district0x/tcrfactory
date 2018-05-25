// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_balances.queries');
goog.require('cljs.core');
goog.require('cljs_web3.core');
district.ui.web3_balances.queries.contracts = (function district$ui$web3_balances$queries$contracts(db){
return new cljs.core.Keyword(null,"contracts","contracts",905357673).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-balances","district.ui.web3-balances",-1729433762).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_balances.queries.merge_contracts = (function district$ui$web3_balances$queries$merge_contracts(db,contracts){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-balances","district.ui.web3-balances",-1729433762),new cljs.core.Keyword(null,"contracts","contracts",905357673)], null),cljs.core.merge,contracts);
});
district.ui.web3_balances.queries.contract_address = (function district$ui$web3_balances$queries$contract_address(db,contract_key){
return cljs.core.get_in.call(null,district.ui.web3_balances.queries.contracts.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_key,new cljs.core.Keyword(null,"address","address",559499426)], null));
});
district.ui.web3_balances.queries.balance_key = (function district$ui$web3_balances$queries$balance_key(db,contract){
if(cljs.core.truth_((function (){var and__3911__auto__ = contract;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.call(null,contract,new cljs.core.Keyword(null,"ETH","ETH",-1240862103));
} else {
return and__3911__auto__;
}
})())){
var instance_addr = (contract["address"]);
if(cljs.core.truth_(instance_addr)){
return instance_addr;
} else {
if(cljs.core.truth_(cljs_web3.core.address_QMARK_.call(null,contract))){
return contract;
} else {
return district.ui.web3_balances.queries.contract_address.call(null,db,contract);

}
}
} else {
return new cljs.core.Keyword(null,"ETH","ETH",-1240862103);
}
});
district.ui.web3_balances.queries.balances = (function district$ui$web3_balances$queries$balances(db){
return new cljs.core.Keyword(null,"balances","balances",-1047003019).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-balances","district.ui.web3-balances",-1729433762).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_balances.queries.balance = (function district$ui$web3_balances$queries$balance(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33762 = arguments.length;
var i__4500__auto___33763 = (0);
while(true){
if((i__4500__auto___33763 < len__4499__auto___33762)){
args__4502__auto__.push((arguments[i__4500__auto___33763]));

var G__33764 = (i__4500__auto___33763 + (1));
i__4500__auto___33763 = G__33764;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.web3_balances.queries.balance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.web3_balances.queries.balance.cljs$core$IFn$_invoke$arity$variadic = (function (db,address,p__33758){
var vec__33759 = p__33758;
var contract = cljs.core.nth.call(null,vec__33759,(0),null);
return cljs.core.get_in.call(null,district.ui.web3_balances.queries.balances.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_balances.queries.balance_key.call(null,db,contract),address], null));
});

district.ui.web3_balances.queries.balance.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.web3_balances.queries.balance.cljs$lang$applyTo = (function (seq33755){
var G__33756 = cljs.core.first.call(null,seq33755);
var seq33755__$1 = cljs.core.next.call(null,seq33755);
var G__33757 = cljs.core.first.call(null,seq33755__$1);
var seq33755__$2 = cljs.core.next.call(null,seq33755__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33756,G__33757,seq33755__$2);
});

district.ui.web3_balances.queries.assoc_balance = (function district$ui$web3_balances$queries$assoc_balance(var_args){
var G__33766 = arguments.length;
switch (G__33766) {
case 3:
return district.ui.web3_balances.queries.assoc_balance.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return district.ui.web3_balances.queries.assoc_balance.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

district.ui.web3_balances.queries.assoc_balance.cljs$core$IFn$_invoke$arity$3 = (function (db,address,balance){
return district.ui.web3_balances.queries.assoc_balance.call(null,db,address,null,balance).call(null);
});

district.ui.web3_balances.queries.assoc_balance.cljs$core$IFn$_invoke$arity$4 = (function (db,address,contract,balance){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-balances","district.ui.web3-balances",-1729433762),new cljs.core.Keyword(null,"balances","balances",-1047003019),district.ui.web3_balances.queries.balance_key.call(null,db,contract),address], null),balance);
});

district.ui.web3_balances.queries.assoc_balance.cljs$lang$maxFixedArity = 4;

district.ui.web3_balances.queries.merge_balances = (function district$ui$web3_balances$queries$merge_balances(db,balances){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-balances","district.ui.web3-balances",-1729433762),new cljs.core.Keyword(null,"balances","balances",-1047003019)], null),cljs.core.merge,balances);
});
district.ui.web3_balances.queries.watch_ids = (function district$ui$web3_balances$queries$watch_ids(db){
return new cljs.core.Keyword(null,"watch-ids","watch-ids",1654940812).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-balances","district.ui.web3-balances",-1729433762).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_balances.queries.concat_watch_ids = (function district$ui$web3_balances$queries$concat_watch_ids(db,watch_ids){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-balances","district.ui.web3-balances",-1729433762),new cljs.core.Keyword(null,"watch-ids","watch-ids",1654940812)], null),cljs.core.concat,watch_ids);
});
district.ui.web3_balances.queries.merge_web3_balances = (function district$ui$web3_balances$queries$merge_web3_balances(db,p__33768){
var map__33769 = p__33768;
var map__33769__$1 = ((((!((map__33769 == null)))?(((((map__33769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33769):map__33769);
var balances = cljs.core.get.call(null,map__33769__$1,new cljs.core.Keyword(null,"balances","balances",-1047003019));
var contracts = cljs.core.get.call(null,map__33769__$1,new cljs.core.Keyword(null,"contracts","contracts",905357673));
var watch_ids = cljs.core.get.call(null,map__33769__$1,new cljs.core.Keyword(null,"watch-ids","watch-ids",1654940812));
return district.ui.web3_balances.queries.concat_watch_ids.call(null,district.ui.web3_balances.queries.merge_contracts.call(null,district.ui.web3_balances.queries.merge_balances.call(null,db,balances),contracts),watch_ids);
});
district.ui.web3_balances.queries.dissoc_web3_balances = (function district$ui$web3_balances$queries$dissoc_web3_balances(db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"district.ui.web3-balances","district.ui.web3-balances",-1729433762));
});

//# sourceMappingURL=queries.js.map?rel=1526705068222
