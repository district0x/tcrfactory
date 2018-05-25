// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson047.reagent.v0v7v0.reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
if(typeof mranderson047.reagent.v0v7v0.reagent.dom.imported !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.dom.imported = null;
}
mranderson047.reagent.v0v7v0.reagent.dom.module = (function mranderson047$reagent$v0v7v0$reagent$dom$module(){
if(!((mranderson047.reagent.v0v7v0.reagent.dom.imported == null))){
return mranderson047.reagent.v0v7v0.reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return mranderson047.reagent.v0v7v0.reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__3922__auto__ = mranderson047.reagent.v0v7v0.reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof mranderson047.reagent.v0v7v0.reagent.dom.roots !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mranderson047.reagent.v0v7v0.reagent.dom.unmount_comp = (function mranderson047$reagent$v0v7v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots,cljs.core.dissoc,container);

return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
mranderson047.reagent.v0v7v0.reagent.dom.render_comp = (function mranderson047$reagent$v0v7v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_32847 = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_32847){
return (function (){
var _STAR_always_update_STAR_32848 = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson047.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32848;
}});})(_STAR_always_update_STAR_32847))
);
}finally {mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32847;
}});
mranderson047.reagent.v0v7v0.reagent.dom.re_render_component = (function mranderson047$reagent$v0v7v0$reagent$dom$re_render_component(comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson047.reagent.v0v7v0.reagent.dom.render = (function mranderson047$reagent$v0v7v0$reagent$dom$render(var_args){
var G__32850 = arguments.length;
switch (G__32850) {
case 2:
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render.call(null,comp,container,null);
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return mranderson047.reagent.v0v7v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return mranderson047.reagent.v0v7v0.reagent.dom.render_comp.call(null,f,container,callback);
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson047.reagent.v0v7v0.reagent.dom.unmount_component_at_node = (function mranderson047$reagent$v0v7v0$reagent$dom$unmount_component_at_node(container){
return mranderson047.reagent.v0v7v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson047.reagent.v0v7v0.reagent.dom.dom_node = (function mranderson047$reagent$v0v7v0$reagent$dom$dom_node(this$){
return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["findDOMNode"])(this$);
});
mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node = mranderson047.reagent.v0v7v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson047.reagent.v0v7v0.reagent.dom.force_update_all = (function mranderson047$reagent$v0v7v0$reagent$dom$force_update_all(){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var seq__32852_32856 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots)));
var chunk__32853_32857 = null;
var count__32854_32858 = (0);
var i__32855_32859 = (0);
while(true){
if((i__32855_32859 < count__32854_32858)){
var v_32860 = cljs.core._nth.call(null,chunk__32853_32857,i__32855_32859);
cljs.core.apply.call(null,mranderson047.reagent.v0v7v0.reagent.dom.re_render_component,v_32860);


var G__32861 = seq__32852_32856;
var G__32862 = chunk__32853_32857;
var G__32863 = count__32854_32858;
var G__32864 = (i__32855_32859 + (1));
seq__32852_32856 = G__32861;
chunk__32853_32857 = G__32862;
count__32854_32858 = G__32863;
i__32855_32859 = G__32864;
continue;
} else {
var temp__5457__auto___32865 = cljs.core.seq.call(null,seq__32852_32856);
if(temp__5457__auto___32865){
var seq__32852_32866__$1 = temp__5457__auto___32865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32852_32866__$1)){
var c__4319__auto___32867 = cljs.core.chunk_first.call(null,seq__32852_32866__$1);
var G__32868 = cljs.core.chunk_rest.call(null,seq__32852_32866__$1);
var G__32869 = c__4319__auto___32867;
var G__32870 = cljs.core.count.call(null,c__4319__auto___32867);
var G__32871 = (0);
seq__32852_32856 = G__32868;
chunk__32853_32857 = G__32869;
count__32854_32858 = G__32870;
i__32855_32859 = G__32871;
continue;
} else {
var v_32872 = cljs.core.first.call(null,seq__32852_32866__$1);
cljs.core.apply.call(null,mranderson047.reagent.v0v7v0.reagent.dom.re_render_component,v_32872);


var G__32873 = cljs.core.next.call(null,seq__32852_32866__$1);
var G__32874 = null;
var G__32875 = (0);
var G__32876 = (0);
seq__32852_32856 = G__32873;
chunk__32853_32857 = G__32874;
count__32854_32858 = G__32875;
i__32855_32859 = G__32876;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1526705513454
