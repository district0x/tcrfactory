// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.router.queries');
goog.require('cljs.core');
goog.require('bide.core');
district.ui.router.queries.db_key = new cljs.core.Keyword(null,"district.ui.router","district.ui.router",-1100170479);
district.ui.router.queries.active_page = (function district$ui$router$queries$active_page(db){
return new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(district.ui.router.queries.db_key.cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.router.queries.active_page_name = (function district$ui$router$queries$active_page_name(db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(district.ui.router.queries.active_page.call(null,db));
});
district.ui.router.queries.active_page_params = (function district$ui$router$queries$active_page_params(db){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(district.ui.router.queries.active_page.call(null,db));
});
district.ui.router.queries.active_page_query = (function district$ui$router$queries$active_page_query(db){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(district.ui.router.queries.active_page.call(null,db));
});
district.ui.router.queries.assoc_active_page = (function district$ui$router$queries$assoc_active_page(db,active_page){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.router.queries.db_key,new cljs.core.Keyword(null,"active-page","active-page",370357330)], null),active_page);
});
district.ui.router.queries.bide_router = (function district$ui$router$queries$bide_router(db){
return new cljs.core.Keyword(null,"bide-router","bide-router",1278159734).cljs$core$IFn$_invoke$arity$1(district.ui.router.queries.db_key.cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.router.queries.html5_QMARK_ = (function district$ui$router$queries$html5_QMARK_(db){
return new cljs.core.Keyword(null,"html5?","html5?",-1008298421).cljs$core$IFn$_invoke$arity$1(district.ui.router.queries.db_key.cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.router.queries.resolve = (function district$ui$router$queries$resolve(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22447 = arguments.length;
var i__4500__auto___22448 = (0);
while(true){
if((i__4500__auto___22448 < len__4499__auto___22447)){
args__4502__auto__.push((arguments[i__4500__auto___22448]));

var G__22449 = (i__4500__auto___22448 + (1));
i__4500__auto___22448 = G__22449;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return district.ui.router.queries.resolve.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

district.ui.router.queries.resolve.cljs$core$IFn$_invoke$arity$variadic = (function (db,args){
return cljs.core.apply.call(null,bide.core.resolve,district.ui.router.queries.bide_router.call(null,db),args);
});

district.ui.router.queries.resolve.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
district.ui.router.queries.resolve.cljs$lang$applyTo = (function (seq22445){
var G__22446 = cljs.core.first.call(null,seq22445);
var seq22445__$1 = cljs.core.next.call(null,seq22445);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22446,seq22445__$1);
});

district.ui.router.queries.match = (function district$ui$router$queries$match(db,path){
return bide.core.match.call(null,district.ui.router.queries.bide_router.call(null,db),path);
});
district.ui.router.queries.assoc_bide_router = (function district$ui$router$queries$assoc_bide_router(db,bide_router){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.router.queries.db_key,new cljs.core.Keyword(null,"bide-router","bide-router",1278159734)], null),bide_router);
});
district.ui.router.queries.assoc_html5 = (function district$ui$router$queries$assoc_html5(db,html5_QMARK_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.router.queries.db_key,new cljs.core.Keyword(null,"html5?","html5?",-1008298421)], null),html5_QMARK_);
});
district.ui.router.queries.dissoc_router = (function district$ui$router$queries$dissoc_router(db){
return cljs.core.dissoc.call(null,db,district.ui.router.queries.db_key);
});

//# sourceMappingURL=queries.js.map?rel=1526715393371
