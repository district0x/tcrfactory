// Compiled by ClojureScript 1.10.238 {}
goog.provide('graphql_query.exception');
goog.require('cljs.core');
if(typeof graphql_query.exception.throw_ex !== 'undefined'){
} else {
graphql_query.exception.throw_ex = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"graphql-query.exception","throw-ex"),new cljs.core.Keyword("graphql-query","ex-type","graphql-query/ex-type",206825959),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,graphql_query.exception.throw_ex,new cljs.core.Keyword("graphql-query","spec-validation","graphql-query/spec-validation",-418117220),(function (data){
throw (new Error(["Invalid query data ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')));
}));
cljs.core._add_method.call(null,graphql_query.exception.throw_ex,new cljs.core.Keyword("graphql-query","invalid-fragments","graphql-query/invalid-fragments",613350178),(function (data){
throw (new Error(["Invalid fragments: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("graphql-query","ex-data","graphql-query/ex-data",-675354215).cljs$core$IFn$_invoke$arity$1(data))].join('')));
}));
cljs.core._add_method.call(null,graphql_query.exception.throw_ex,new cljs.core.Keyword("graphql-query","invalid-variables","graphql-query/invalid-variables",1315779878),(function (data){
throw (new Error(["Invalid variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("graphql-query","ex-data","graphql-query/ex-data",-675354215).cljs$core$IFn$_invoke$arity$1(data))].join('')));
}));

//# sourceMappingURL=exception.js.map?rel=1526705063259
