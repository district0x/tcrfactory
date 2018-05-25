// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.reagent_render.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
district.ui.reagent_render.utils.re_render = (function district$ui$reagent_render$utils$re_render(p__23918){
var map__23919 = p__23918;
var map__23919__$1 = ((((!((map__23919 == null)))?(((((map__23919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23919):map__23919);
var id = cljs.core.get.call(null,map__23919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var target = cljs.core.get.call(null,map__23919__$1,new cljs.core.Keyword(null,"target","target",253001721));
var component_var = cljs.core.get.call(null,map__23919__$1,new cljs.core.Keyword(null,"component-var","component-var",-90867051));
re_frame.core.clear_subscription_cache_BANG_.call(null);

return setTimeout(((function (map__23919,map__23919__$1,id,target,component_var){
return (function (){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_var], null),(cljs.core.truth_(target)?target:(cljs.core.truth_(id)?document.getElementById(id):null)));
});})(map__23919,map__23919__$1,id,target,component_var))
,(0));
});

//# sourceMappingURL=utils.js.map?rel=1526705060186
