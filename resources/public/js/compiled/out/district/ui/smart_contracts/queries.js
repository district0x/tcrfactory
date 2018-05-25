// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.smart_contracts.queries');
goog.require('cljs.core');
goog.require('cljs_web3.eth');
goog.require('district.ui.web3.queries');
goog.require('clojure.string');
district.ui.smart_contracts.queries.contracts = (function district$ui$smart_contracts$queries$contracts(db){
return new cljs.core.Keyword(null,"district.ui.smart-contracts","district.ui.smart-contracts",1081739298).cljs$core$IFn$_invoke$arity$1(db);
});
district.ui.smart_contracts.queries.contract = (function district$ui$smart_contracts$queries$contract(db,contract_key){
return contract_key.call(null,new cljs.core.Keyword(null,"district.ui.smart-contracts","district.ui.smart-contracts",1081739298).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.smart_contracts.queries.contract_address = (function district$ui$smart_contracts$queries$contract_address(db,contract_key){
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(district.ui.smart_contracts.queries.contract.call(null,db,contract_key));
});
district.ui.smart_contracts.queries.contract_abi = (function district$ui$smart_contracts$queries$contract_abi(db,contract_key){
return new cljs.core.Keyword(null,"abi","abi",-1999451499).cljs$core$IFn$_invoke$arity$1(district.ui.smart_contracts.queries.contract.call(null,db,contract_key));
});
district.ui.smart_contracts.queries.contract_bin = (function district$ui$smart_contracts$queries$contract_bin(db,contract_key){
return new cljs.core.Keyword(null,"bin","bin",-200999690).cljs$core$IFn$_invoke$arity$1(district.ui.smart_contracts.queries.contract.call(null,db,contract_key));
});
district.ui.smart_contracts.queries.contract_name = (function district$ui$smart_contracts$queries$contract_name(db,contract_key){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(district.ui.smart_contracts.queries.contract.call(null,db,contract_key));
});
district.ui.smart_contracts.queries.instance = (function district$ui$smart_contracts$queries$instance(var_args){
var G__34256 = arguments.length;
switch (G__34256) {
case 2:
return district.ui.smart_contracts.queries.instance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return district.ui.smart_contracts.queries.instance.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

district.ui.smart_contracts.queries.instance.cljs$core$IFn$_invoke$arity$2 = (function (db,contract_key){
return district.ui.smart_contracts.queries.instance.call(null,db,contract_key,district.ui.smart_contracts.queries.contract_address.call(null,db,contract_key));
});

district.ui.smart_contracts.queries.instance.cljs$core$IFn$_invoke$arity$3 = (function (db,contract_key,address){
var temp__5457__auto__ = district.ui.web3.queries.web3.call(null,db);
if(cljs.core.truth_(temp__5457__auto__)){
var web3 = temp__5457__auto__;
return cljs_web3.eth.contract_at.call(null,web3,district.ui.smart_contracts.queries.contract_abi.call(null,db,contract_key),address);
} else {
return null;
}
});

district.ui.smart_contracts.queries.instance.cljs$lang$maxFixedArity = 3;

district.ui.smart_contracts.queries.merge_contracts = (function district$ui$smart_contracts$queries$merge_contracts(db,contracts){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"district.ui.smart-contracts","district.ui.smart-contracts",1081739298),cljs.core.merge,contracts);
});
district.ui.smart_contracts.queries.merge_contract = (function district$ui$smart_contracts$queries$merge_contract(db,contract_key,contract){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.smart-contracts","district.ui.smart-contracts",1081739298),contract_key], null),cljs.core.merge,contract);
});
district.ui.smart_contracts.queries.assoc_contract_abi = (function district$ui$smart_contracts$queries$assoc_contract_abi(db,contract_key,abi){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.smart-contracts","district.ui.smart-contracts",1081739298),contract_key,new cljs.core.Keyword(null,"abi","abi",-1999451499)], null),((typeof abi === 'string')?JSON.parse(cljs.core.clj__GT_js.call(null,abi)):((cljs.core.array_QMARK_.call(null,abi))?abi:((cljs.core.vector_QMARK_.call(null,abi))?cljs.core.clj__GT_js.call(null,abi):null
))));
});
district.ui.smart_contracts.queries.assoc_contract_bin = (function district$ui$smart_contracts$queries$assoc_contract_bin(db,contract_key,bin){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.smart-contracts","district.ui.smart-contracts",1081739298),contract_key,new cljs.core.Keyword(null,"bin","bin",-200999690)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.starts_with_QMARK_.call(null,bin,"0x"))?null:"0x")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bin)].join(''));
});
district.ui.smart_contracts.queries.dissoc_smart_contracts = (function district$ui$smart_contracts$queries$dissoc_smart_contracts(db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"district.ui.smart-contracts","district.ui.smart-contracts",1081739298));
});

//# sourceMappingURL=queries.js.map?rel=1526705068992
