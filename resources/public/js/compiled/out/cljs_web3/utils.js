// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_web3.utils');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_web3.utils.safe_case = (function cljs_web3$utils$safe_case(case_f){
return (function (x){
var G__31846 = cljs.core.subs.call(null,cljs.core.name.call(null,x),(1));
var G__31846__$1 = clojure.string.replace.call(null,G__31846,"_","*")
;
var G__31846__$2 = case_f.call(null,G__31846__$1)
;
var G__31846__$3 = clojure.string.replace.call(null,G__31846__$2,"*","_")
;
var G__31846__$4 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.name.call(null,x))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31846__$3)].join('')
;
if((x instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,G__31846__$4);
} else {
return G__31846__$4;
}
});
});
cljs_web3.utils.camel_case = cljs_web3.utils.safe_case.call(null,camel_snake_kebab.core.__GT_camelCase);
cljs_web3.utils.kebab_case = cljs_web3.utils.safe_case.call(null,camel_snake_kebab.core.__GT_kebab_case);
cljs_web3.utils.js__GT_cljk = (function cljs_web3$utils$js__GT_cljk(p1__31847_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__31847_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
/**
 * From JavaScript to Clojure with kekab-cased keywords.
 */
cljs_web3.utils.js__GT_cljkk = cljs.core.comp.call(null,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,cljs_web3.utils.kebab_case),cljs_web3.utils.js__GT_cljk);
/**
 * From Clojure with kebab-cased keywords to JavaScript.
 */
cljs_web3.utils.cljkk__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,camel_snake_kebab.extras.transform_keys,cljs_web3.utils.camel_case));
cljs_web3.utils.callback_js__GT_clj = (function cljs_web3$utils$callback_js__GT_clj(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return (function (err,res){
if(cljs.core.truth_((function (){var and__3911__auto__ = res;
if(cljs.core.truth_(and__3911__auto__)){
return (res["v"]);
} else {
return and__3911__auto__;
}
})())){
(res["v"] = (res["v"]));
} else {
}

return x.call(null,err,cljs_web3.utils.js__GT_cljkk.call(null,res));
});
} else {
return x;
}
});
cljs_web3.utils.args_cljkk__GT_js = (function cljs_web3$utils$args_cljkk__GT_js(args){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs_web3.utils.cljkk__GT_js,cljs_web3.utils.callback_js__GT_clj),args);
});
cljs_web3.utils.js_apply = (function cljs_web3$utils$js_apply(var_args){
var G__31849 = arguments.length;
switch (G__31849) {
case 2:
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$2 = (function (this$,method_name){
return cljs_web3.utils.js_apply.call(null,this$,method_name,null);
});

cljs_web3.utils.js_apply.cljs$core$IFn$_invoke$arity$3 = (function (this$,method_name,args){
var method_name__$1 = cljs_web3.utils.camel_case.call(null,cljs.core.name.call(null,method_name));
if(cljs.core.truth_((this$[method_name__$1]))){
return cljs_web3.utils.js__GT_cljkk.call(null,cljs.core.apply.call(null,cljs.core.js_invoke,this$,method_name__$1,cljs_web3.utils.args_cljkk__GT_js.call(null,args)));
} else {
throw ["Method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name__$1)," was not found in object."].join('');
}
});

cljs_web3.utils.js_apply.cljs$lang$maxFixedArity = 3;

cljs_web3.utils.js_prototype_apply = (function cljs_web3$utils$js_prototype_apply(js_obj,method_name,args){
return cljs_web3.utils.js_apply.call(null,(js_obj["prototype"]),method_name,args);
});
/**
 * Constructor to create an fn to get properties or to get properties and apply a
 *   callback fn.
 */
cljs_web3.utils.prop_or_clb_fn = (function cljs_web3$utils$prop_or_clb_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31852 = arguments.length;
var i__4500__auto___31853 = (0);
while(true){
if((i__4500__auto___31853 < len__4499__auto___31852)){
args__4502__auto__.push((arguments[i__4500__auto___31853]));

var G__31854 = (i__4500__auto___31853 + (1));
i__4500__auto___31853 = G__31854;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_web3.utils.prop_or_clb_fn.cljs$core$IFn$_invoke$arity$variadic = (function (ks){
return (function() { 
var G__31855__delegate = function (web3,args){
if(cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args))){
return cljs_web3.utils.js_apply.call(null,cljs.core.apply.call(null,cljs.core.aget,web3,cljs.core.butlast.call(null,ks)),["get",cljs.core.str.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.core.__GT_PascalCase.call(null,cljs.core.last.call(null,ks)))].join(''),args);
} else {
return cljs_web3.utils.js__GT_cljkk.call(null,cljs.core.apply.call(null,cljs.core.aget,web3,ks));
}
};
var G__31855 = function (web3,var_args){
var args = null;
if (arguments.length > 1) {
var G__31856__i = 0, G__31856__a = new Array(arguments.length -  1);
while (G__31856__i < G__31856__a.length) {G__31856__a[G__31856__i] = arguments[G__31856__i + 1]; ++G__31856__i;}
  args = new cljs.core.IndexedSeq(G__31856__a,0,null);
} 
return G__31855__delegate.call(this,web3,args);};
G__31855.cljs$lang$maxFixedArity = 1;
G__31855.cljs$lang$applyTo = (function (arglist__31857){
var web3 = cljs.core.first(arglist__31857);
var args = cljs.core.rest(arglist__31857);
return G__31855__delegate(web3,args);
});
G__31855.cljs$core$IFn$_invoke$arity$variadic = G__31855__delegate;
return G__31855;
})()
;
});

cljs_web3.utils.prop_or_clb_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_web3.utils.prop_or_clb_fn.cljs$lang$applyTo = (function (seq31851){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31851));
});

cljs_web3.utils.create_async_fn = (function cljs_web3$utils$create_async_fn(f){
return (function() { 
var G__31873__delegate = function (args){
var vec__31858 = (((cljs.core.first.call(null,args) instanceof cljs.core.async.impl.channels.ManyToManyChannel))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.async.chan.call(null),args], null));
var ch = cljs.core.nth.call(null,vec__31858,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__31858,(1),null);
cljs.core.apply.call(null,f,cljs.core.concat.call(null,args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__31858,ch,args__$1){
return (function (err,res){
var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__,vec__31858,ch,args__$1){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__,vec__31858,ch,args__$1){
return (function (state_31867){
var state_val_31868 = (state_31867[(1)]);
if((state_val_31868 === (1))){
var inst_31861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31862 = [err,res];
var inst_31863 = (new cljs.core.PersistentVector(null,2,(5),inst_31861,inst_31862,null));
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31867__$1,(2),ch,inst_31863);
} else {
if((state_val_31868 === (2))){
var inst_31865 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31867__$1,inst_31865);
} else {
return null;
}
}
});})(c__29904__auto__,vec__31858,ch,args__$1))
;
return ((function (switch__29814__auto__,c__29904__auto__,vec__31858,ch,args__$1){
return (function() {
var cljs_web3$utils$create_async_fn_$_state_machine__29815__auto__ = null;
var cljs_web3$utils$create_async_fn_$_state_machine__29815__auto____0 = (function (){
var statearr_31869 = [null,null,null,null,null,null,null];
(statearr_31869[(0)] = cljs_web3$utils$create_async_fn_$_state_machine__29815__auto__);

(statearr_31869[(1)] = (1));

return statearr_31869;
});
var cljs_web3$utils$create_async_fn_$_state_machine__29815__auto____1 = (function (state_31867){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_31867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e31870){if((e31870 instanceof Object)){
var ex__29818__auto__ = e31870;
var statearr_31871_31874 = state_31867;
(statearr_31871_31874[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31875 = state_31867;
state_31867 = G__31875;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
cljs_web3$utils$create_async_fn_$_state_machine__29815__auto__ = function(state_31867){
switch(arguments.length){
case 0:
return cljs_web3$utils$create_async_fn_$_state_machine__29815__auto____0.call(this);
case 1:
return cljs_web3$utils$create_async_fn_$_state_machine__29815__auto____1.call(this,state_31867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_web3$utils$create_async_fn_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_web3$utils$create_async_fn_$_state_machine__29815__auto____0;
cljs_web3$utils$create_async_fn_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_web3$utils$create_async_fn_$_state_machine__29815__auto____1;
return cljs_web3$utils$create_async_fn_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__,vec__31858,ch,args__$1))
})();
var state__29906__auto__ = (function (){var statearr_31872 = f__29905__auto__.call(null);
(statearr_31872[(6)] = c__29904__auto__);

return statearr_31872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__,vec__31858,ch,args__$1))
);

return c__29904__auto__;
});})(vec__31858,ch,args__$1))
], null)));

return ch;
};
var G__31873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31876__i = 0, G__31876__a = new Array(arguments.length -  0);
while (G__31876__i < G__31876__a.length) {G__31876__a[G__31876__i] = arguments[G__31876__i + 0]; ++G__31876__i;}
  args = new cljs.core.IndexedSeq(G__31876__a,0,null);
} 
return G__31873__delegate.call(this,args);};
G__31873.cljs$lang$maxFixedArity = 0;
G__31873.cljs$lang$applyTo = (function (arglist__31877){
var args = cljs.core.seq(arglist__31877);
return G__31873__delegate(args);
});
G__31873.cljs$core$IFn$_invoke$arity$variadic = G__31873__delegate;
return G__31873;
})()
;
});

//# sourceMappingURL=utils.js.map?rel=1526705066284
