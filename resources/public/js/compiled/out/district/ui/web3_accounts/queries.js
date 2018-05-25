// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_accounts.queries');
goog.require('cljs.core');
district.ui.web3_accounts.queries.accounts = (function district$ui$web3_accounts$queries$accounts(db){
return new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-accounts","district.ui.web3-accounts",-314986574).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_accounts.queries.has_accounts_QMARK_ = (function district$ui$web3_accounts$queries$has_accounts_QMARK_(db){
return cljs.core.boolean$.call(null,cljs.core.seq.call(null,district.ui.web3_accounts.queries.accounts.call(null,db)));
});
district.ui.web3_accounts.queries.assoc_accounts = (function district$ui$web3_accounts$queries$assoc_accounts(db,accounts){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-accounts","district.ui.web3-accounts",-314986574),new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null),accounts);
});
district.ui.web3_accounts.queries.active_account = (function district$ui$web3_accounts$queries$active_account(db){
return new cljs.core.Keyword(null,"active-account","active-account",1559728328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.web3-accounts","district.ui.web3-accounts",-314986574).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.web3_accounts.queries.has_active_account_QMARK_ = (function district$ui$web3_accounts$queries$has_active_account_QMARK_(db){
return cljs.core.boolean$.call(null,district.ui.web3_accounts.queries.active_account.call(null,db));
});
district.ui.web3_accounts.queries.assoc_active_account = (function district$ui$web3_accounts$queries$assoc_active_account(db,active_account){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.web3-accounts","district.ui.web3-accounts",-314986574),new cljs.core.Keyword(null,"active-account","active-account",1559728328)], null),active_account);
});
district.ui.web3_accounts.queries.dissoc_web3_accounts = (function district$ui$web3_accounts$queries$dissoc_web3_accounts(db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"district.ui.web3-accounts","district.ui.web3-accounts",-314986574));
});

//# sourceMappingURL=queries.js.map?rel=1526705067689
