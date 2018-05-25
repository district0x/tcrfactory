// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.window_size.queries');
goog.require('cljs.core');
district.ui.window_size.queries.breakpoints = (function district$ui$window_size$queries$breakpoints(db){
return new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.window-size","district.ui.window-size",649428842).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.window_size.queries.size = (function district$ui$window_size$queries$size(db){
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.window-size","district.ui.window-size",649428842).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.window_size.queries.calculate_size = (function district$ui$window_size$queries$calculate_size(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35512 = arguments.length;
var i__4500__auto___35513 = (0);
while(true){
if((i__4500__auto___35513 < len__4499__auto___35512)){
args__4502__auto__.push((arguments[i__4500__auto___35513]));

var G__35514 = (i__4500__auto___35513 + (1));
i__4500__auto___35513 = G__35514;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district.ui.window_size.queries.calculate_size.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district.ui.window_size.queries.calculate_size.cljs$core$IFn$_invoke$arity$variadic = (function (db,window_width,p__35506){
var vec__35507 = p__35506;
var breakpts = cljs.core.nth.call(null,vec__35507,(0),null);
var map__35510 = (function (){var or__3922__auto__ = breakpts;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return district.ui.window_size.queries.breakpoints.call(null,db);
}
})();
var map__35510__$1 = ((((!((map__35510 == null)))?(((((map__35510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35510):map__35510);
var max_large_monitor = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"max-large-monitor","max-large-monitor",-268956005));
var max_computer = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"max-computer","max-computer",1156643054));
var max_tablet = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"max-tablet","max-tablet",-841743274));
var max_mobile = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"max-mobile","max-mobile",268104982));
if((window_width > max_large_monitor)){
return (4);
} else {
if((window_width > max_computer)){
return (3);
} else {
if((window_width > max_tablet)){
return (2);
} else {
if((window_width > max_mobile)){
return (1);
} else {
return (0);

}
}
}
}
});

district.ui.window_size.queries.calculate_size.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district.ui.window_size.queries.calculate_size.cljs$lang$applyTo = (function (seq35503){
var G__35504 = cljs.core.first.call(null,seq35503);
var seq35503__$1 = cljs.core.next.call(null,seq35503);
var G__35505 = cljs.core.first.call(null,seq35503__$1);
var seq35503__$2 = cljs.core.next.call(null,seq35503__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35504,G__35505,seq35503__$2);
});

district.ui.window_size.queries.wide_monitor_QMARK_ = (function district$ui$window_size$queries$wide_monitor_QMARK_(db){
return cljs.core._EQ_.call(null,district.ui.window_size.queries.size.call(null,db),(4));
});
district.ui.window_size.queries.large_monitor_QMARK_ = (function district$ui$window_size$queries$large_monitor_QMARK_(db){
return cljs.core._EQ_.call(null,district.ui.window_size.queries.size.call(null,db),(3));
});
district.ui.window_size.queries.computer_QMARK_ = (function district$ui$window_size$queries$computer_QMARK_(db){
return cljs.core._EQ_.call(null,district.ui.window_size.queries.size.call(null,db),(2));
});
district.ui.window_size.queries.tablet_QMARK_ = (function district$ui$window_size$queries$tablet_QMARK_(db){
return cljs.core._EQ_.call(null,district.ui.window_size.queries.size.call(null,db),(1));
});
district.ui.window_size.queries.mobile_QMARK_ = (function district$ui$window_size$queries$mobile_QMARK_(db){
return cljs.core._EQ_.call(null,district.ui.window_size.queries.size.call(null,db),(0));
});
district.ui.window_size.queries.max_large_monitor_QMARK_ = (function district$ui$window_size$queries$max_large_monitor_QMARK_(db){
return (district.ui.window_size.queries.size.call(null,db) <= (3));
});
district.ui.window_size.queries.max_computer_QMARK_ = (function district$ui$window_size$queries$max_computer_QMARK_(db){
return (district.ui.window_size.queries.size.call(null,db) <= (2));
});
district.ui.window_size.queries.max_tablet_QMARK_ = (function district$ui$window_size$queries$max_tablet_QMARK_(db){
return (district.ui.window_size.queries.size.call(null,db) <= (1));
});
district.ui.window_size.queries.min_large_monitor_QMARK_ = (function district$ui$window_size$queries$min_large_monitor_QMARK_(db){
return (district.ui.window_size.queries.size.call(null,db) >= (3));
});
district.ui.window_size.queries.min_computer_QMARK_ = (function district$ui$window_size$queries$min_computer_QMARK_(db){
return (district.ui.window_size.queries.size.call(null,db) >= (2));
});
district.ui.window_size.queries.min_tablet_QMARK_ = (function district$ui$window_size$queries$min_tablet_QMARK_(db){
return (district.ui.window_size.queries.size.call(null,db) >= (1));
});
district.ui.window_size.queries.assoc_breakpoints = (function district$ui$window_size$queries$assoc_breakpoints(db,breakpoints){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.window-size","district.ui.window-size",649428842),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)], null),breakpoints);
});
district.ui.window_size.queries.assoc_size = (function district$ui$window_size$queries$assoc_size(db,size){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.window-size","district.ui.window-size",649428842),new cljs.core.Keyword(null,"size","size",1098693007)], null),size);
});
district.ui.window_size.queries.assoc_window_size = (function district$ui$window_size$queries$assoc_window_size(db,p__35515){
var map__35516 = p__35515;
var map__35516__$1 = ((((!((map__35516 == null)))?(((((map__35516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35516):map__35516);
var breakpoints = cljs.core.get.call(null,map__35516__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var size = cljs.core.get.call(null,map__35516__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return district.ui.window_size.queries.assoc_size.call(null,district.ui.window_size.queries.assoc_breakpoints.call(null,db,breakpoints),size);
});
district.ui.window_size.queries.dissoc_window_size = (function district$ui$window_size$queries$dissoc_window_size(db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"district.ui.window-size","district.ui.window-size",649428842));
});

//# sourceMappingURL=queries.js.map?rel=1526705069864
