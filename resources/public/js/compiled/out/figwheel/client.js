// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e35900){if((e35900 instanceof Error)){
var e = e35900;
return "Error: Unable to stringify";
} else {
throw e35900;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35903 = arguments.length;
switch (G__35903) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35901_SHARP_){
if(typeof p1__35901_SHARP_ === 'string'){
return p1__35901_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35901_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35906 = arguments.length;
var i__4500__auto___35907 = (0);
while(true){
if((i__4500__auto___35907 < len__4499__auto___35906)){
args__4502__auto__.push((arguments[i__4500__auto___35907]));

var G__35908 = (i__4500__auto___35907 + (1));
i__4500__auto___35907 = G__35908;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35905){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35905));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35910 = arguments.length;
var i__4500__auto___35911 = (0);
while(true){
if((i__4500__auto___35911 < len__4499__auto___35910)){
args__4502__auto__.push((arguments[i__4500__auto___35911]));

var G__35912 = (i__4500__auto___35911 + (1));
i__4500__auto___35911 = G__35912;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35909){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35909));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35913){
var map__35914 = p__35913;
var map__35914__$1 = ((((!((map__35914 == null)))?(((((map__35914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35914):map__35914);
var message = cljs.core.get.call(null,map__35914__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35914__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29904__auto___35993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___35993,ch){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___35993,ch){
return (function (state_35965){
var state_val_35966 = (state_35965[(1)]);
if((state_val_35966 === (7))){
var inst_35961 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35967_35994 = state_35965__$1;
(statearr_35967_35994[(2)] = inst_35961);

(statearr_35967_35994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (1))){
var state_35965__$1 = state_35965;
var statearr_35968_35995 = state_35965__$1;
(statearr_35968_35995[(2)] = null);

(statearr_35968_35995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (4))){
var inst_35918 = (state_35965[(7)]);
var inst_35918__$1 = (state_35965[(2)]);
var state_35965__$1 = (function (){var statearr_35969 = state_35965;
(statearr_35969[(7)] = inst_35918__$1);

return statearr_35969;
})();
if(cljs.core.truth_(inst_35918__$1)){
var statearr_35970_35996 = state_35965__$1;
(statearr_35970_35996[(1)] = (5));

} else {
var statearr_35971_35997 = state_35965__$1;
(statearr_35971_35997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (15))){
var inst_35925 = (state_35965[(8)]);
var inst_35940 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35925);
var inst_35941 = cljs.core.first.call(null,inst_35940);
var inst_35942 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35941);
var inst_35943 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35942)].join('');
var inst_35944 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35943);
var state_35965__$1 = state_35965;
var statearr_35972_35998 = state_35965__$1;
(statearr_35972_35998[(2)] = inst_35944);

(statearr_35972_35998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (13))){
var inst_35949 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35973_35999 = state_35965__$1;
(statearr_35973_35999[(2)] = inst_35949);

(statearr_35973_35999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (6))){
var state_35965__$1 = state_35965;
var statearr_35974_36000 = state_35965__$1;
(statearr_35974_36000[(2)] = null);

(statearr_35974_36000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (17))){
var inst_35947 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35975_36001 = state_35965__$1;
(statearr_35975_36001[(2)] = inst_35947);

(statearr_35975_36001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (3))){
var inst_35963 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35965__$1,inst_35963);
} else {
if((state_val_35966 === (12))){
var inst_35924 = (state_35965[(9)]);
var inst_35938 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35924,opts);
var state_35965__$1 = state_35965;
if(cljs.core.truth_(inst_35938)){
var statearr_35976_36002 = state_35965__$1;
(statearr_35976_36002[(1)] = (15));

} else {
var statearr_35977_36003 = state_35965__$1;
(statearr_35977_36003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (2))){
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35965__$1,(4),ch);
} else {
if((state_val_35966 === (11))){
var inst_35925 = (state_35965[(8)]);
var inst_35930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35931 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35925);
var inst_35932 = cljs.core.async.timeout.call(null,(1000));
var inst_35933 = [inst_35931,inst_35932];
var inst_35934 = (new cljs.core.PersistentVector(null,2,(5),inst_35930,inst_35933,null));
var state_35965__$1 = state_35965;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35965__$1,(14),inst_35934);
} else {
if((state_val_35966 === (9))){
var inst_35925 = (state_35965[(8)]);
var inst_35951 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35952 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35925);
var inst_35953 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35952);
var inst_35954 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35953)].join('');
var inst_35955 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35954);
var state_35965__$1 = (function (){var statearr_35978 = state_35965;
(statearr_35978[(10)] = inst_35951);

return statearr_35978;
})();
var statearr_35979_36004 = state_35965__$1;
(statearr_35979_36004[(2)] = inst_35955);

(statearr_35979_36004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (5))){
var inst_35918 = (state_35965[(7)]);
var inst_35920 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35921 = (new cljs.core.PersistentArrayMap(null,2,inst_35920,null));
var inst_35922 = (new cljs.core.PersistentHashSet(null,inst_35921,null));
var inst_35923 = figwheel.client.focus_msgs.call(null,inst_35922,inst_35918);
var inst_35924 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35923);
var inst_35925 = cljs.core.first.call(null,inst_35923);
var inst_35926 = figwheel.client.autoload_QMARK_.call(null);
var state_35965__$1 = (function (){var statearr_35980 = state_35965;
(statearr_35980[(8)] = inst_35925);

(statearr_35980[(9)] = inst_35924);

return statearr_35980;
})();
if(cljs.core.truth_(inst_35926)){
var statearr_35981_36005 = state_35965__$1;
(statearr_35981_36005[(1)] = (8));

} else {
var statearr_35982_36006 = state_35965__$1;
(statearr_35982_36006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (14))){
var inst_35936 = (state_35965[(2)]);
var state_35965__$1 = state_35965;
var statearr_35983_36007 = state_35965__$1;
(statearr_35983_36007[(2)] = inst_35936);

(statearr_35983_36007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (16))){
var state_35965__$1 = state_35965;
var statearr_35984_36008 = state_35965__$1;
(statearr_35984_36008[(2)] = null);

(statearr_35984_36008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (10))){
var inst_35957 = (state_35965[(2)]);
var state_35965__$1 = (function (){var statearr_35985 = state_35965;
(statearr_35985[(11)] = inst_35957);

return statearr_35985;
})();
var statearr_35986_36009 = state_35965__$1;
(statearr_35986_36009[(2)] = null);

(statearr_35986_36009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35966 === (8))){
var inst_35924 = (state_35965[(9)]);
var inst_35928 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35924,opts);
var state_35965__$1 = state_35965;
if(cljs.core.truth_(inst_35928)){
var statearr_35987_36010 = state_35965__$1;
(statearr_35987_36010[(1)] = (11));

} else {
var statearr_35988_36011 = state_35965__$1;
(statearr_35988_36011[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29904__auto___35993,ch))
;
return ((function (switch__29814__auto__,c__29904__auto___35993,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29815__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29815__auto____0 = (function (){
var statearr_35989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35989[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29815__auto__);

(statearr_35989[(1)] = (1));

return statearr_35989;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29815__auto____1 = (function (state_35965){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_35965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e35990){if((e35990 instanceof Object)){
var ex__29818__auto__ = e35990;
var statearr_35991_36012 = state_35965;
(statearr_35991_36012[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36013 = state_35965;
state_35965 = G__36013;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29815__auto__ = function(state_35965){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29815__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29815__auto____1.call(this,state_35965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29815__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29815__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___35993,ch))
})();
var state__29906__auto__ = (function (){var statearr_35992 = f__29905__auto__.call(null);
(statearr_35992[(6)] = c__29904__auto___35993);

return statearr_35992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___35993,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36014_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36014_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36016 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36016){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36015){if((e36015 instanceof Error)){
var e = e36015;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36016], null));
} else {
var e = e36015;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36016))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36017){
var map__36018 = p__36017;
var map__36018__$1 = ((((!((map__36018 == null)))?(((((map__36018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36018):map__36018);
var opts = map__36018__$1;
var build_id = cljs.core.get.call(null,map__36018__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36018,map__36018__$1,opts,build_id){
return (function (p__36020){
var vec__36021 = p__36020;
var seq__36022 = cljs.core.seq.call(null,vec__36021);
var first__36023 = cljs.core.first.call(null,seq__36022);
var seq__36022__$1 = cljs.core.next.call(null,seq__36022);
var map__36024 = first__36023;
var map__36024__$1 = ((((!((map__36024 == null)))?(((((map__36024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36024):map__36024);
var msg = map__36024__$1;
var msg_name = cljs.core.get.call(null,map__36024__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36022__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36021,seq__36022,first__36023,seq__36022__$1,map__36024,map__36024__$1,msg,msg_name,_,map__36018,map__36018__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36021,seq__36022,first__36023,seq__36022__$1,map__36024,map__36024__$1,msg,msg_name,_,map__36018,map__36018__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36018,map__36018__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36026){
var vec__36027 = p__36026;
var seq__36028 = cljs.core.seq.call(null,vec__36027);
var first__36029 = cljs.core.first.call(null,seq__36028);
var seq__36028__$1 = cljs.core.next.call(null,seq__36028);
var map__36030 = first__36029;
var map__36030__$1 = ((((!((map__36030 == null)))?(((((map__36030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36030):map__36030);
var msg = map__36030__$1;
var msg_name = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36028__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36032){
var map__36033 = p__36032;
var map__36033__$1 = ((((!((map__36033 == null)))?(((((map__36033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36033):map__36033);
var on_compile_warning = cljs.core.get.call(null,map__36033__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36033__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36033,map__36033__$1,on_compile_warning,on_compile_fail){
return (function (p__36035){
var vec__36036 = p__36035;
var seq__36037 = cljs.core.seq.call(null,vec__36036);
var first__36038 = cljs.core.first.call(null,seq__36037);
var seq__36037__$1 = cljs.core.next.call(null,seq__36037);
var map__36039 = first__36038;
var map__36039__$1 = ((((!((map__36039 == null)))?(((((map__36039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36039):map__36039);
var msg = map__36039__$1;
var msg_name = cljs.core.get.call(null,map__36039__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36037__$1;
var pred__36041 = cljs.core._EQ_;
var expr__36042 = msg_name;
if(cljs.core.truth_(pred__36041.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36042))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36041.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36042))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36033,map__36033__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__,msg_hist,msg_names,msg){
return (function (state_36131){
var state_val_36132 = (state_36131[(1)]);
if((state_val_36132 === (7))){
var inst_36051 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36051)){
var statearr_36133_36180 = state_36131__$1;
(statearr_36133_36180[(1)] = (8));

} else {
var statearr_36134_36181 = state_36131__$1;
(statearr_36134_36181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (20))){
var inst_36125 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36135_36182 = state_36131__$1;
(statearr_36135_36182[(2)] = inst_36125);

(statearr_36135_36182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (27))){
var inst_36121 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36136_36183 = state_36131__$1;
(statearr_36136_36183[(2)] = inst_36121);

(statearr_36136_36183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (1))){
var inst_36044 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36044)){
var statearr_36137_36184 = state_36131__$1;
(statearr_36137_36184[(1)] = (2));

} else {
var statearr_36138_36185 = state_36131__$1;
(statearr_36138_36185[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (24))){
var inst_36123 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36139_36186 = state_36131__$1;
(statearr_36139_36186[(2)] = inst_36123);

(statearr_36139_36186[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (4))){
var inst_36129 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36131__$1,inst_36129);
} else {
if((state_val_36132 === (15))){
var inst_36127 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36140_36187 = state_36131__$1;
(statearr_36140_36187[(2)] = inst_36127);

(statearr_36140_36187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (21))){
var inst_36080 = (state_36131[(2)]);
var inst_36081 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36082 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36081);
var state_36131__$1 = (function (){var statearr_36141 = state_36131;
(statearr_36141[(7)] = inst_36080);

return statearr_36141;
})();
var statearr_36142_36188 = state_36131__$1;
(statearr_36142_36188[(2)] = inst_36082);

(statearr_36142_36188[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (31))){
var inst_36110 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36110)){
var statearr_36143_36189 = state_36131__$1;
(statearr_36143_36189[(1)] = (34));

} else {
var statearr_36144_36190 = state_36131__$1;
(statearr_36144_36190[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (32))){
var inst_36119 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36145_36191 = state_36131__$1;
(statearr_36145_36191[(2)] = inst_36119);

(statearr_36145_36191[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (33))){
var inst_36106 = (state_36131[(2)]);
var inst_36107 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36108 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36107);
var state_36131__$1 = (function (){var statearr_36146 = state_36131;
(statearr_36146[(8)] = inst_36106);

return statearr_36146;
})();
var statearr_36147_36192 = state_36131__$1;
(statearr_36147_36192[(2)] = inst_36108);

(statearr_36147_36192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (13))){
var inst_36065 = figwheel.client.heads_up.clear.call(null);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(16),inst_36065);
} else {
if((state_val_36132 === (22))){
var inst_36086 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36087 = figwheel.client.heads_up.append_warning_message.call(null,inst_36086);
var state_36131__$1 = state_36131;
var statearr_36148_36193 = state_36131__$1;
(statearr_36148_36193[(2)] = inst_36087);

(statearr_36148_36193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (36))){
var inst_36117 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36149_36194 = state_36131__$1;
(statearr_36149_36194[(2)] = inst_36117);

(statearr_36149_36194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (29))){
var inst_36097 = (state_36131[(2)]);
var inst_36098 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36099 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36098);
var state_36131__$1 = (function (){var statearr_36150 = state_36131;
(statearr_36150[(9)] = inst_36097);

return statearr_36150;
})();
var statearr_36151_36195 = state_36131__$1;
(statearr_36151_36195[(2)] = inst_36099);

(statearr_36151_36195[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (6))){
var inst_36046 = (state_36131[(10)]);
var state_36131__$1 = state_36131;
var statearr_36152_36196 = state_36131__$1;
(statearr_36152_36196[(2)] = inst_36046);

(statearr_36152_36196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (28))){
var inst_36093 = (state_36131[(2)]);
var inst_36094 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36095 = figwheel.client.heads_up.display_warning.call(null,inst_36094);
var state_36131__$1 = (function (){var statearr_36153 = state_36131;
(statearr_36153[(11)] = inst_36093);

return statearr_36153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(29),inst_36095);
} else {
if((state_val_36132 === (25))){
var inst_36091 = figwheel.client.heads_up.clear.call(null);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(28),inst_36091);
} else {
if((state_val_36132 === (34))){
var inst_36112 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(37),inst_36112);
} else {
if((state_val_36132 === (17))){
var inst_36071 = (state_36131[(2)]);
var inst_36072 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36073 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36072);
var state_36131__$1 = (function (){var statearr_36154 = state_36131;
(statearr_36154[(12)] = inst_36071);

return statearr_36154;
})();
var statearr_36155_36197 = state_36131__$1;
(statearr_36155_36197[(2)] = inst_36073);

(statearr_36155_36197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (3))){
var inst_36063 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36063)){
var statearr_36156_36198 = state_36131__$1;
(statearr_36156_36198[(1)] = (13));

} else {
var statearr_36157_36199 = state_36131__$1;
(statearr_36157_36199[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (12))){
var inst_36059 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36158_36200 = state_36131__$1;
(statearr_36158_36200[(2)] = inst_36059);

(statearr_36158_36200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (2))){
var inst_36046 = (state_36131[(10)]);
var inst_36046__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36131__$1 = (function (){var statearr_36159 = state_36131;
(statearr_36159[(10)] = inst_36046__$1);

return statearr_36159;
})();
if(cljs.core.truth_(inst_36046__$1)){
var statearr_36160_36201 = state_36131__$1;
(statearr_36160_36201[(1)] = (5));

} else {
var statearr_36161_36202 = state_36131__$1;
(statearr_36161_36202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (23))){
var inst_36089 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36089)){
var statearr_36162_36203 = state_36131__$1;
(statearr_36162_36203[(1)] = (25));

} else {
var statearr_36163_36204 = state_36131__$1;
(statearr_36163_36204[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (35))){
var state_36131__$1 = state_36131;
var statearr_36164_36205 = state_36131__$1;
(statearr_36164_36205[(2)] = null);

(statearr_36164_36205[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (19))){
var inst_36084 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36084)){
var statearr_36165_36206 = state_36131__$1;
(statearr_36165_36206[(1)] = (22));

} else {
var statearr_36166_36207 = state_36131__$1;
(statearr_36166_36207[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (11))){
var inst_36055 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36167_36208 = state_36131__$1;
(statearr_36167_36208[(2)] = inst_36055);

(statearr_36167_36208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (9))){
var inst_36057 = figwheel.client.heads_up.clear.call(null);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(12),inst_36057);
} else {
if((state_val_36132 === (5))){
var inst_36048 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36131__$1 = state_36131;
var statearr_36168_36209 = state_36131__$1;
(statearr_36168_36209[(2)] = inst_36048);

(statearr_36168_36209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (14))){
var inst_36075 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36075)){
var statearr_36169_36210 = state_36131__$1;
(statearr_36169_36210[(1)] = (18));

} else {
var statearr_36170_36211 = state_36131__$1;
(statearr_36170_36211[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (26))){
var inst_36101 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36101)){
var statearr_36171_36212 = state_36131__$1;
(statearr_36171_36212[(1)] = (30));

} else {
var statearr_36172_36213 = state_36131__$1;
(statearr_36172_36213[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (16))){
var inst_36067 = (state_36131[(2)]);
var inst_36068 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36069 = figwheel.client.heads_up.display_exception.call(null,inst_36068);
var state_36131__$1 = (function (){var statearr_36173 = state_36131;
(statearr_36173[(13)] = inst_36067);

return statearr_36173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(17),inst_36069);
} else {
if((state_val_36132 === (30))){
var inst_36103 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36104 = figwheel.client.heads_up.display_warning.call(null,inst_36103);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(33),inst_36104);
} else {
if((state_val_36132 === (10))){
var inst_36061 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36174_36214 = state_36131__$1;
(statearr_36174_36214[(2)] = inst_36061);

(statearr_36174_36214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (18))){
var inst_36077 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36078 = figwheel.client.heads_up.display_exception.call(null,inst_36077);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(21),inst_36078);
} else {
if((state_val_36132 === (37))){
var inst_36114 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36175_36215 = state_36131__$1;
(statearr_36175_36215[(2)] = inst_36114);

(statearr_36175_36215[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (8))){
var inst_36053 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(11),inst_36053);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29904__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29814__auto__,c__29904__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto____0 = (function (){
var statearr_36176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36176[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto__);

(statearr_36176[(1)] = (1));

return statearr_36176;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto____1 = (function (state_36131){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_36131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e36177){if((e36177 instanceof Object)){
var ex__29818__auto__ = e36177;
var statearr_36178_36216 = state_36131;
(statearr_36178_36216[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36217 = state_36131;
state_36131 = G__36217;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto__ = function(state_36131){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto____1.call(this,state_36131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__,msg_hist,msg_names,msg))
})();
var state__29906__auto__ = (function (){var statearr_36179 = f__29905__auto__.call(null);
(statearr_36179[(6)] = c__29904__auto__);

return statearr_36179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__,msg_hist,msg_names,msg))
);

return c__29904__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29904__auto___36246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto___36246,ch){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto___36246,ch){
return (function (state_36232){
var state_val_36233 = (state_36232[(1)]);
if((state_val_36233 === (1))){
var state_36232__$1 = state_36232;
var statearr_36234_36247 = state_36232__$1;
(statearr_36234_36247[(2)] = null);

(statearr_36234_36247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (2))){
var state_36232__$1 = state_36232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36232__$1,(4),ch);
} else {
if((state_val_36233 === (3))){
var inst_36230 = (state_36232[(2)]);
var state_36232__$1 = state_36232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36232__$1,inst_36230);
} else {
if((state_val_36233 === (4))){
var inst_36220 = (state_36232[(7)]);
var inst_36220__$1 = (state_36232[(2)]);
var state_36232__$1 = (function (){var statearr_36235 = state_36232;
(statearr_36235[(7)] = inst_36220__$1);

return statearr_36235;
})();
if(cljs.core.truth_(inst_36220__$1)){
var statearr_36236_36248 = state_36232__$1;
(statearr_36236_36248[(1)] = (5));

} else {
var statearr_36237_36249 = state_36232__$1;
(statearr_36237_36249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (5))){
var inst_36220 = (state_36232[(7)]);
var inst_36222 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36220);
var state_36232__$1 = state_36232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36232__$1,(8),inst_36222);
} else {
if((state_val_36233 === (6))){
var state_36232__$1 = state_36232;
var statearr_36238_36250 = state_36232__$1;
(statearr_36238_36250[(2)] = null);

(statearr_36238_36250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (7))){
var inst_36228 = (state_36232[(2)]);
var state_36232__$1 = state_36232;
var statearr_36239_36251 = state_36232__$1;
(statearr_36239_36251[(2)] = inst_36228);

(statearr_36239_36251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36233 === (8))){
var inst_36224 = (state_36232[(2)]);
var state_36232__$1 = (function (){var statearr_36240 = state_36232;
(statearr_36240[(8)] = inst_36224);

return statearr_36240;
})();
var statearr_36241_36252 = state_36232__$1;
(statearr_36241_36252[(2)] = null);

(statearr_36241_36252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29904__auto___36246,ch))
;
return ((function (switch__29814__auto__,c__29904__auto___36246,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29815__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29815__auto____0 = (function (){
var statearr_36242 = [null,null,null,null,null,null,null,null,null];
(statearr_36242[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29815__auto__);

(statearr_36242[(1)] = (1));

return statearr_36242;
});
var figwheel$client$heads_up_plugin_$_state_machine__29815__auto____1 = (function (state_36232){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_36232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e36243){if((e36243 instanceof Object)){
var ex__29818__auto__ = e36243;
var statearr_36244_36253 = state_36232;
(statearr_36244_36253[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36254 = state_36232;
state_36232 = G__36254;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29815__auto__ = function(state_36232){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29815__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29815__auto____1.call(this,state_36232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29815__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29815__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto___36246,ch))
})();
var state__29906__auto__ = (function (){var statearr_36245 = f__29905__auto__.call(null);
(statearr_36245[(6)] = c__29904__auto___36246);

return statearr_36245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto___36246,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__){
return (function (state_36260){
var state_val_36261 = (state_36260[(1)]);
if((state_val_36261 === (1))){
var inst_36255 = cljs.core.async.timeout.call(null,(3000));
var state_36260__$1 = state_36260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36260__$1,(2),inst_36255);
} else {
if((state_val_36261 === (2))){
var inst_36257 = (state_36260[(2)]);
var inst_36258 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36260__$1 = (function (){var statearr_36262 = state_36260;
(statearr_36262[(7)] = inst_36257);

return statearr_36262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36260__$1,inst_36258);
} else {
return null;
}
}
});})(c__29904__auto__))
;
return ((function (switch__29814__auto__,c__29904__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29815__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29815__auto____0 = (function (){
var statearr_36263 = [null,null,null,null,null,null,null,null];
(statearr_36263[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29815__auto__);

(statearr_36263[(1)] = (1));

return statearr_36263;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29815__auto____1 = (function (state_36260){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_36260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e36264){if((e36264 instanceof Object)){
var ex__29818__auto__ = e36264;
var statearr_36265_36267 = state_36260;
(statearr_36265_36267[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36268 = state_36260;
state_36260 = G__36268;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29815__auto__ = function(state_36260){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29815__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29815__auto____1.call(this,state_36260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29815__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29815__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__))
})();
var state__29906__auto__ = (function (){var statearr_36266 = f__29905__auto__.call(null);
(statearr_36266[(6)] = c__29904__auto__);

return statearr_36266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__))
);

return c__29904__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29904__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29904__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__29905__auto__ = (function (){var switch__29814__auto__ = ((function (c__29904__auto__,figwheel_version,temp__5457__auto__){
return (function (state_36275){
var state_val_36276 = (state_36275[(1)]);
if((state_val_36276 === (1))){
var inst_36269 = cljs.core.async.timeout.call(null,(2000));
var state_36275__$1 = state_36275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36275__$1,(2),inst_36269);
} else {
if((state_val_36276 === (2))){
var inst_36271 = (state_36275[(2)]);
var inst_36272 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36273 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36272);
var state_36275__$1 = (function (){var statearr_36277 = state_36275;
(statearr_36277[(7)] = inst_36271);

return statearr_36277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36275__$1,inst_36273);
} else {
return null;
}
}
});})(c__29904__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__29814__auto__,c__29904__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto____0 = (function (){
var statearr_36278 = [null,null,null,null,null,null,null,null];
(statearr_36278[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto__);

(statearr_36278[(1)] = (1));

return statearr_36278;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto____1 = (function (state_36275){
while(true){
var ret_value__29816__auto__ = (function (){try{while(true){
var result__29817__auto__ = switch__29814__auto__.call(null,state_36275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29817__auto__;
}
break;
}
}catch (e36279){if((e36279 instanceof Object)){
var ex__29818__auto__ = e36279;
var statearr_36280_36282 = state_36275;
(statearr_36280_36282[(5)] = ex__29818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36283 = state_36275;
state_36275 = G__36283;
continue;
} else {
return ret_value__29816__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto__ = function(state_36275){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto____1.call(this,state_36275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29815__auto__;
})()
;})(switch__29814__auto__,c__29904__auto__,figwheel_version,temp__5457__auto__))
})();
var state__29906__auto__ = (function (){var statearr_36281 = f__29905__auto__.call(null);
(statearr_36281[(6)] = c__29904__auto__);

return statearr_36281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29906__auto__);
});})(c__29904__auto__,figwheel_version,temp__5457__auto__))
);

return c__29904__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36284){
var map__36285 = p__36284;
var map__36285__$1 = ((((!((map__36285 == null)))?(((((map__36285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36285):map__36285);
var file = cljs.core.get.call(null,map__36285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36285__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36285__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36287 = "";
var G__36287__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36287),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36287);
var G__36287__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36287__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36287__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36287__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36287__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36288){
var map__36289 = p__36288;
var map__36289__$1 = ((((!((map__36289 == null)))?(((((map__36289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36289):map__36289);
var ed = map__36289__$1;
var formatted_exception = cljs.core.get.call(null,map__36289__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36289__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36289__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36291_36295 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36292_36296 = null;
var count__36293_36297 = (0);
var i__36294_36298 = (0);
while(true){
if((i__36294_36298 < count__36293_36297)){
var msg_36299 = cljs.core._nth.call(null,chunk__36292_36296,i__36294_36298);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36299);


var G__36300 = seq__36291_36295;
var G__36301 = chunk__36292_36296;
var G__36302 = count__36293_36297;
var G__36303 = (i__36294_36298 + (1));
seq__36291_36295 = G__36300;
chunk__36292_36296 = G__36301;
count__36293_36297 = G__36302;
i__36294_36298 = G__36303;
continue;
} else {
var temp__5457__auto___36304 = cljs.core.seq.call(null,seq__36291_36295);
if(temp__5457__auto___36304){
var seq__36291_36305__$1 = temp__5457__auto___36304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36291_36305__$1)){
var c__4319__auto___36306 = cljs.core.chunk_first.call(null,seq__36291_36305__$1);
var G__36307 = cljs.core.chunk_rest.call(null,seq__36291_36305__$1);
var G__36308 = c__4319__auto___36306;
var G__36309 = cljs.core.count.call(null,c__4319__auto___36306);
var G__36310 = (0);
seq__36291_36295 = G__36307;
chunk__36292_36296 = G__36308;
count__36293_36297 = G__36309;
i__36294_36298 = G__36310;
continue;
} else {
var msg_36311 = cljs.core.first.call(null,seq__36291_36305__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36311);


var G__36312 = cljs.core.next.call(null,seq__36291_36305__$1);
var G__36313 = null;
var G__36314 = (0);
var G__36315 = (0);
seq__36291_36295 = G__36312;
chunk__36292_36296 = G__36313;
count__36293_36297 = G__36314;
i__36294_36298 = G__36315;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36316){
var map__36317 = p__36316;
var map__36317__$1 = ((((!((map__36317 == null)))?(((((map__36317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36317):map__36317);
var w = map__36317__$1;
var message = cljs.core.get.call(null,map__36317__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36319 = cljs.core.seq.call(null,plugins);
var chunk__36320 = null;
var count__36321 = (0);
var i__36322 = (0);
while(true){
if((i__36322 < count__36321)){
var vec__36323 = cljs.core._nth.call(null,chunk__36320,i__36322);
var k = cljs.core.nth.call(null,vec__36323,(0),null);
var plugin = cljs.core.nth.call(null,vec__36323,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36329 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36319,chunk__36320,count__36321,i__36322,pl_36329,vec__36323,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36329.call(null,msg_hist);
});})(seq__36319,chunk__36320,count__36321,i__36322,pl_36329,vec__36323,k,plugin))
);
} else {
}


var G__36330 = seq__36319;
var G__36331 = chunk__36320;
var G__36332 = count__36321;
var G__36333 = (i__36322 + (1));
seq__36319 = G__36330;
chunk__36320 = G__36331;
count__36321 = G__36332;
i__36322 = G__36333;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36319);
if(temp__5457__auto__){
var seq__36319__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36319__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36319__$1);
var G__36334 = cljs.core.chunk_rest.call(null,seq__36319__$1);
var G__36335 = c__4319__auto__;
var G__36336 = cljs.core.count.call(null,c__4319__auto__);
var G__36337 = (0);
seq__36319 = G__36334;
chunk__36320 = G__36335;
count__36321 = G__36336;
i__36322 = G__36337;
continue;
} else {
var vec__36326 = cljs.core.first.call(null,seq__36319__$1);
var k = cljs.core.nth.call(null,vec__36326,(0),null);
var plugin = cljs.core.nth.call(null,vec__36326,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36338 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36319,chunk__36320,count__36321,i__36322,pl_36338,vec__36326,k,plugin,seq__36319__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36338.call(null,msg_hist);
});})(seq__36319,chunk__36320,count__36321,i__36322,pl_36338,vec__36326,k,plugin,seq__36319__$1,temp__5457__auto__))
);
} else {
}


var G__36339 = cljs.core.next.call(null,seq__36319__$1);
var G__36340 = null;
var G__36341 = (0);
var G__36342 = (0);
seq__36319 = G__36339;
chunk__36320 = G__36340;
count__36321 = G__36341;
i__36322 = G__36342;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36344 = arguments.length;
switch (G__36344) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36345_36350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36346_36351 = null;
var count__36347_36352 = (0);
var i__36348_36353 = (0);
while(true){
if((i__36348_36353 < count__36347_36352)){
var msg_36354 = cljs.core._nth.call(null,chunk__36346_36351,i__36348_36353);
figwheel.client.socket.handle_incoming_message.call(null,msg_36354);


var G__36355 = seq__36345_36350;
var G__36356 = chunk__36346_36351;
var G__36357 = count__36347_36352;
var G__36358 = (i__36348_36353 + (1));
seq__36345_36350 = G__36355;
chunk__36346_36351 = G__36356;
count__36347_36352 = G__36357;
i__36348_36353 = G__36358;
continue;
} else {
var temp__5457__auto___36359 = cljs.core.seq.call(null,seq__36345_36350);
if(temp__5457__auto___36359){
var seq__36345_36360__$1 = temp__5457__auto___36359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36345_36360__$1)){
var c__4319__auto___36361 = cljs.core.chunk_first.call(null,seq__36345_36360__$1);
var G__36362 = cljs.core.chunk_rest.call(null,seq__36345_36360__$1);
var G__36363 = c__4319__auto___36361;
var G__36364 = cljs.core.count.call(null,c__4319__auto___36361);
var G__36365 = (0);
seq__36345_36350 = G__36362;
chunk__36346_36351 = G__36363;
count__36347_36352 = G__36364;
i__36348_36353 = G__36365;
continue;
} else {
var msg_36366 = cljs.core.first.call(null,seq__36345_36360__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36366);


var G__36367 = cljs.core.next.call(null,seq__36345_36360__$1);
var G__36368 = null;
var G__36369 = (0);
var G__36370 = (0);
seq__36345_36350 = G__36367;
chunk__36346_36351 = G__36368;
count__36347_36352 = G__36369;
i__36348_36353 = G__36370;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36375 = arguments.length;
var i__4500__auto___36376 = (0);
while(true){
if((i__4500__auto___36376 < len__4499__auto___36375)){
args__4502__auto__.push((arguments[i__4500__auto___36376]));

var G__36377 = (i__4500__auto___36376 + (1));
i__4500__auto___36376 = G__36377;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36372){
var map__36373 = p__36372;
var map__36373__$1 = ((((!((map__36373 == null)))?(((((map__36373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var opts = map__36373__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36371){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36371));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36378){if((e36378 instanceof Error)){
var e = e36378;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36378;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36379){
var map__36380 = p__36379;
var map__36380__$1 = ((((!((map__36380 == null)))?(((((map__36380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36380):map__36380);
var msg_name = cljs.core.get.call(null,map__36380__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1526705070340
