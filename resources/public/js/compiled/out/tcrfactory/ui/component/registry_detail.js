// Compiled by ClojureScript 1.10.238 {}
goog.provide('tcrfactory.ui.component.registry_detail');
goog.require('cljs.core');
goog.require('district.ui.component.page');
goog.require('district.ui.graphql.subs');
goog.require('district.ui.router.utils');
goog.require('re_frame.core');
goog.require('district.ui.router.subs');
goog.require('tcrfactory.ui.component.app_layout');
tcrfactory.ui.component.registry_detail.registry_detail_header = (function tcrfactory$ui$component$registry_detail$registry_detail_header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Registry detail header"], null);
});
cljs.core._add_method.call(null,district.ui.component.page.page,new cljs.core.Keyword("route","registry-detail","route/registry-detail",811804779),(function (){
var page_params = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.router.subs","active-page-params","district.ui.router.subs/active-page-params",628971686)], null));
return ((function (page_params){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tcrfactory.ui.component.app_layout.app_layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tcrfactory.ui.component.registry_detail.registry_detail_header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(district.ui.router.utils.resolve.call(null,new cljs.core.Keyword("route","create-registry-entry","route/create-registry-entry",-1339941717),cljs.core.deref.call(null,page_params)))].join('')], null),"Submit Entry"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null);
});
;})(page_params))
}));

//# sourceMappingURL=registry_detail.js.map?rel=1526737694857
