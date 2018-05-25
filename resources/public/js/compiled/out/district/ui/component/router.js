// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.component.router');
goog.require('cljs.core');
goog.require('district.ui.component.page');
goog.require('district.ui.router.subs');
goog.require('re_frame.core');
district.ui.component.router.router = (function district$ui$component$router$router(){
var active_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.subs","active-page","district.ui.router.subs/active-page",-1052425068)], null));
return ((function (active_page){
return (function (){
var map__22808 = cljs.core.deref.call(null,active_page);
var map__22808__$1 = ((((!((map__22808 == null)))?(((((map__22808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22808):map__22808);
var name = cljs.core.get.call(null,map__22808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__22808__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__22808__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_(name)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.component.page.page,name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')], null));
} else {
return null;
}
});
;})(active_page))
});

//# sourceMappingURL=router.js.map?rel=1526715393734
