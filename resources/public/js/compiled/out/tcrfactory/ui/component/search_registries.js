// Compiled by ClojureScript 1.10.238 {}
goog.provide('tcrfactory.ui.component.search_registries');
goog.require('cljs.core');
goog.require('district.ui.component.page');
goog.require('district.ui.graphql.subs');
goog.require('district.ui.router.utils');
goog.require('re_frame.core');
goog.require('tcrfactory.ui.component.app_layout');
tcrfactory.ui.component.search_registries.registries_list = (function tcrfactory$ui$component$search_registries$registries_list(){
var registries = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.graphql.subs","query","district.ui.graphql.subs/query",-317938676),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-registries","search-registries",1507101220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyword","keyword",811389747),"abc"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("registry","title","registry/title",1557421732)], null)], null)], null)], null)], null));
return ((function (registries){
return (function (){
cljs.core.println.call(null,cljs.core.deref.call(null,registries));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hh"], null);
});
;})(registries))
});
cljs.core._add_method.call(null,district.ui.component.page.page,new cljs.core.Keyword("route","search-registries","route/search-registries",541007965),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tcrfactory.ui.component.app_layout.app_layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Search Registries"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tcrfactory.ui.component.search_registries.registries_list], null)], null);
}));

//# sourceMappingURL=search_registries.js.map?rel=1526901180259
