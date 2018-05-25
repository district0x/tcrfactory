// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.reagent_render.events');
goog.require('cljs.core');
goog.require('district.ui.reagent_render.spec');
goog.require('district.ui.reagent_render.utils');
goog.require('re_frame.core');
district.ui.reagent_render.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.reagent-render.events","start","district.ui.reagent-render.events/start",-1610965993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.reagent_render.events.interceptors], null),(function (_,p__24724){
var vec__24725 = p__24724;
var opts = cljs.core.nth.call(null,vec__24725,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.reagent-render.events","render","district.ui.reagent-render.events/render",1994623518),opts], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.reagent-render.events","render","district.ui.reagent-render.events/render",1994623518),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.reagent_render.events.interceptors], null),(function (_,p__24728){
var vec__24729 = p__24728;
var opts = cljs.core.nth.call(null,vec__24729,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.reagent-render.events","render-fx","district.ui.reagent-render.events/render-fx",932307993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts], null)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("district.ui.reagent-render.events","render-fx","district.ui.reagent-render.events/render-fx",932307993),(function (p__24732){
var vec__24733 = p__24732;
var opts = cljs.core.nth.call(null,vec__24733,(0),null);
return district.ui.reagent_render.utils.re_render.call(null,opts);
}));

//# sourceMappingURL=events.js.map?rel=1526705061225
