// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.now.queries');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('district.time');
district.ui.now.queries.now = (function district$ui$now$queries$now(db){
return new cljs.core.Keyword(null,"now","now",-1650525531).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.now","district.ui.now",2023588773).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.now.queries.delta_now = (function district$ui$now$queries$delta_now(db){
return new cljs.core.Keyword(null,"delta-now","delta-now",294236464).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.now","district.ui.now",2023588773).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.now.queries.assoc_now = (function district$ui$now$queries$assoc_now(db,now){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.now","district.ui.now",2023588773),new cljs.core.Keyword(null,"now","now",-1650525531)], null),now);
});
district.ui.now.queries.assoc_delta_now = (function district$ui$now$queries$assoc_delta_now(db,value){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.now","district.ui.now",2023588773),new cljs.core.Keyword(null,"delta-now","delta-now",294236464)], null),value);
});
district.ui.now.queries.dissoc_now = (function district$ui$now$queries$dissoc_now(db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"district.ui.now","district.ui.now",2023588773));
});
district.ui.now.queries.time_remaining = (function district$ui$now$queries$time_remaining(db,to_time){
return district.time.time_remaining.call(null,district.ui.now.queries.now.call(null,db),to_time);
});

//# sourceMappingURL=queries.js.map?rel=1526713901880
