// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson047.garden.v1v3v3.garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('mranderson047.garden.v1v3v3.garden.types');
goog.require('mranderson047.garden.v1v3v3.garden.util');
mranderson047.garden.v1v3v3.garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)]);
mranderson047.garden.v1v3v3.garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
mranderson047.garden.v1v3v3.garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
mranderson047.garden.v1v3v3.garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
mranderson047.garden.v1v3v3.garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
mranderson047.garden.v1v3v3.garden.units.unit_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$unit_QMARK_(x){
return (x instanceof mranderson047.garden.v1v3v3.garden.types.CSSUnit);
});
mranderson047.garden.v1v3v3.garden.units.length_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$length_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
mranderson047.garden.v1v3v3.garden.units.angle_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$angle_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
mranderson047.garden.v1v3v3.garden.units.time_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$time_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
mranderson047.garden.v1v3v3.garden.units.frequency_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$frequency_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
mranderson047.garden.v1v3v3.garden.units.resolution_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$resolution_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
/**
 * Map associating CSS unit types to their conversion values.
 */
mranderson047.garden.v1v3v3.garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.call(null,"%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,"%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
mranderson047.garden.v1v3v3.garden.units.convertable_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
mranderson047.garden.v1v3v3.garden.units.convert = (function mranderson047$garden$v1v3v3$garden$units$convert(p__34667,right){
var map__34668 = p__34667;
var map__34668__$1 = ((((!((map__34668 == null)))?(((((map__34668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34668):map__34668);
var m = cljs.core.get.call(null,map__34668__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.call(null,map__34668__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.call(null,mranderson047.garden.v1v3v3.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.call(null,mranderson047.garden.v1v3v3.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.call(null,mranderson047.garden.v1v3v3.garden.util.format.call(null,"Can't convert %s to %s",cljs.core.name.call(null,left),cljs.core.name.call(null,right)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first.call(null,cljs.core.drop_while.call(null,mranderson047.garden.v1v3v3.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.call(null,["Inconvertible unit ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
mranderson047.garden.v1v3v3.garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
mranderson047.garden.v1v3v3.garden.units.read_unit = (function mranderson047$garden$v1v3v3$garden$units$read_unit(s){
var temp__5457__auto__ = cljs.core.re_matches.call(null,mranderson047.garden.v1v3v3.garden.units.unit_re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__34670 = temp__5457__auto__;
var _ = cljs.core.nth.call(null,vec__34670,(0),null);
var magnitude = cljs.core.nth.call(null,vec__34670,(1),null);
var unit = cljs.core.nth.call(null,vec__34670,(2),null);
var unit__$1 = cljs.core.keyword.call(null,unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.call(null,magnitude):(0));
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_predicate = (function mranderson047$garden$v1v3v3$garden$units$make_unit_predicate(unit){
return (function (x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit);
} else {
return and__3911__auto__;
}
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_fn = (function mranderson047$garden$v1v3v3$garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.units.unit_QMARK_.call(null,x))){
if(cljs.core._EQ_.call(null,unit.call(null,x),unit)){
return x;
} else {
return mranderson047.garden.v1v3v3.garden.units.convert.call(null,x,unit);
}
} else {
var ex_message = mranderson047.garden.v1v3v3.garden.util.format.call(null,"Unable to convert from %s to %s",cljs.core.type.getName(),cljs.core.name.call(null,unit));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], null);
throw cljs.core.ex_info.call(null,ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_adder = (function mranderson047$garden$v1v3v3$garden$units$make_unit_adder(unit){
var u = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_ = null;
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return u.call(null,(0));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return u.call(null,x);
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__34673 = u.call(null,x);
var map__34673__$1 = ((((!((map__34673 == null)))?(((((map__34673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34673):map__34673);
var m1 = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__34674 = u.call(null,y);
var map__34674__$1 = ((((!((map__34674 == null)))?(((((map__34674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34674):map__34674);
var m2 = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 + m2));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__34677__delegate = function (x,y,more){
return cljs.core.reduce.call(null,mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_,mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.call(null,x,y),more);
};
var G__34677 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__34678__i = 0, G__34678__a = new Array(arguments.length -  2);
while (G__34678__i < G__34678__a.length) {G__34678__a[G__34678__i] = arguments[G__34678__i + 2]; ++G__34678__i;}
  more = new cljs.core.IndexedSeq(G__34678__a,0,null);
} 
return G__34677__delegate.call(this,x,y,more);};
G__34677.cljs$lang$maxFixedArity = 2;
G__34677.cljs$lang$applyTo = (function (arglist__34679){
var x = cljs.core.first(arglist__34679);
arglist__34679 = cljs.core.next(arglist__34679);
var y = cljs.core.first(arglist__34679);
var more = cljs.core.rest(arglist__34679);
return G__34677__delegate(x,y,more);
});
G__34677.cljs$core$IFn$_invoke$arity$variadic = G__34677__delegate;
return G__34677;
})()
;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__34680 = null;
if (arguments.length > 2) {
var G__34681__i = 0, G__34681__a = new Array(arguments.length -  2);
while (G__34681__i < G__34681__a.length) {G__34681__a[G__34681__i] = arguments[G__34681__i + 2]; ++G__34681__i;}
G__34680 = new cljs.core.IndexedSeq(G__34681__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__34680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_;
})()
;})(u))
});
/**
 * Create a subtraction function for subtracting Units.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor = (function mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor(unit){
var u = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_ = null;
var mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1 = (function (x){
return u.call(null,(- x));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__34682 = u.call(null,x);
var map__34682__$1 = ((((!((map__34682 == null)))?(((((map__34682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34682):map__34682);
var m1 = cljs.core.get.call(null,map__34682__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__34683 = u.call(null,y);
var map__34683__$1 = ((((!((map__34683 == null)))?(((((map__34683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34683):map__34683);
var m2 = cljs.core.get.call(null,map__34683__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 - m2));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__34686__delegate = function (x,y,more){
return cljs.core.reduce.call(null,mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_,mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.call(null,x,y),more);
};
var G__34686 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__34687__i = 0, G__34687__a = new Array(arguments.length -  2);
while (G__34687__i < G__34687__a.length) {G__34687__a[G__34687__i] = arguments[G__34687__i + 2]; ++G__34687__i;}
  more = new cljs.core.IndexedSeq(G__34687__a,0,null);
} 
return G__34686__delegate.call(this,x,y,more);};
G__34686.cljs$lang$maxFixedArity = 2;
G__34686.cljs$lang$applyTo = (function (arglist__34688){
var x = cljs.core.first(arglist__34688);
arglist__34688 = cljs.core.next(arglist__34688);
var y = cljs.core.first(arglist__34688);
var more = cljs.core.rest(arglist__34688);
return G__34686__delegate(x,y,more);
});
G__34686.cljs$core$IFn$_invoke$arity$variadic = G__34686__delegate;
return G__34686;
})()
;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__34689 = null;
if (arguments.length > 2) {
var G__34690__i = 0, G__34690__a = new Array(arguments.length -  2);
while (G__34690__i < G__34690__a.length) {G__34690__a[G__34690__i] = arguments[G__34690__i + 2]; ++G__34690__i;}
G__34689 = new cljs.core.IndexedSeq(G__34690__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__34689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_;
})()
;})(u))
});
/**
 * Create a multiplication function for multiplying Units.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier = (function mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier(unit){
var u = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_ = null;
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return u.call(null,(1));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return u.call(null,x);
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__34691 = u.call(null,x);
var map__34691__$1 = ((((!((map__34691 == null)))?(((((map__34691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34691):map__34691);
var m1 = cljs.core.get.call(null,map__34691__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__34692 = u.call(null,y);
var map__34692__$1 = ((((!((map__34692 == null)))?(((((map__34692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34692):map__34692);
var m2 = cljs.core.get.call(null,map__34692__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 * m2));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__34695__delegate = function (x,y,more){
return cljs.core.reduce.call(null,mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_,mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.call(null,x,y),more);
};
var G__34695 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__34696__i = 0, G__34696__a = new Array(arguments.length -  2);
while (G__34696__i < G__34696__a.length) {G__34696__a[G__34696__i] = arguments[G__34696__i + 2]; ++G__34696__i;}
  more = new cljs.core.IndexedSeq(G__34696__a,0,null);
} 
return G__34695__delegate.call(this,x,y,more);};
G__34695.cljs$lang$maxFixedArity = 2;
G__34695.cljs$lang$applyTo = (function (arglist__34697){
var x = cljs.core.first(arglist__34697);
arglist__34697 = cljs.core.next(arglist__34697);
var y = cljs.core.first(arglist__34697);
var more = cljs.core.rest(arglist__34697);
return G__34695__delegate(x,y,more);
});
G__34695.cljs$core$IFn$_invoke$arity$variadic = G__34695__delegate;
return G__34695;
})()
;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__34698 = null;
if (arguments.length > 2) {
var G__34699__i = 0, G__34699__a = new Array(arguments.length -  2);
while (G__34699__i < G__34699__a.length) {G__34699__a[G__34699__i] = arguments[G__34699__i + 2]; ++G__34699__i;}
G__34698 = new cljs.core.IndexedSeq(G__34699__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__34698);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_;
})()
;})(u))
});
/**
 * Create a division function for dividing Units.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_divider = (function mranderson047$garden$v1v3v3$garden$units$make_unit_divider(unit){
var u = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,unit);
return ((function (u){
return (function() {
var mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud = null;
var mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1 = (function (x){
return u.call(null,((1) / x));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__34700 = u.call(null,x);
var map__34700__$1 = ((((!((map__34700 == null)))?(((((map__34700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34700):map__34700);
var m1 = cljs.core.get.call(null,map__34700__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__34701 = u.call(null,y);
var map__34701__$1 = ((((!((map__34701 == null)))?(((((map__34701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34701):map__34701);
var m2 = cljs.core.get.call(null,map__34701__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return u.call(null,(m1 / m2));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__34704__delegate = function (x,y,more){
return cljs.core.reduce.call(null,mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud,mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.call(null,x,y),more);
};
var G__34704 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__34705__i = 0, G__34705__a = new Array(arguments.length -  2);
while (G__34705__i < G__34705__a.length) {G__34705__a[G__34705__i] = arguments[G__34705__i + 2]; ++G__34705__i;}
  more = new cljs.core.IndexedSeq(G__34705__a,0,null);
} 
return G__34704__delegate.call(this,x,y,more);};
G__34704.cljs$lang$maxFixedArity = 2;
G__34704.cljs$lang$applyTo = (function (arglist__34706){
var x = cljs.core.first(arglist__34706);
arglist__34706 = cljs.core.next(arglist__34706);
var y = cljs.core.first(arglist__34706);
var more = cljs.core.rest(arglist__34706);
return G__34704__delegate(x,y,more);
});
G__34704.cljs$core$IFn$_invoke$arity$variadic = G__34704__delegate;
return G__34704;
})()
;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__34707 = null;
if (arguments.length > 2) {
var G__34708__i = 0, G__34708__a = new Array(arguments.length -  2);
while (G__34708__i < G__34708__a.length) {G__34708__a[G__34708__i] = arguments[G__34708__i + 2]; ++G__34708__i;}
G__34707 = new cljs.core.IndexedSeq(G__34708__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__34707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud;
})()
;})(u))
});
mranderson047.garden.v1v3v3.garden.units.cm = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"cm","cm",540591536));
mranderson047.garden.v1v3v3.garden.units.mm = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"mm","mm",-1652850560));
mranderson047.garden.v1v3v3.garden.units.in$ = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"in","in",-1531184865));
mranderson047.garden.v1v3v3.garden.units.px = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"px","px",281329899));
mranderson047.garden.v1v3v3.garden.units.pt = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pt","pt",556460867));
mranderson047.garden.v1v3v3.garden.units.pc = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"pc","pc",512913453));
mranderson047.garden.v1v3v3.garden.units.percent = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"%","%",1704198600));
mranderson047.garden.v1v3v3.garden.units.em = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"em","em",707813035));
mranderson047.garden.v1v3v3.garden.units.ex = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ex","ex",-1413771341));
mranderson047.garden.v1v3v3.garden.units.ch = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
mranderson047.garden.v1v3v3.garden.units.rem = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rem","rem",-976484757));
mranderson047.garden.v1v3v3.garden.units.vw = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vw","vw",1941049135));
mranderson047.garden.v1v3v3.garden.units.vh = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vh","vh",79552846));
mranderson047.garden.v1v3v3.garden.units.vmin = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmin","vmin",446546816));
mranderson047.garden.v1v3v3.garden.units.vmax = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
mranderson047.garden.v1v3v3.garden.units.deg = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"deg","deg",-681556081));
mranderson047.garden.v1v3v3.garden.units.grad = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"grad","grad",1125187229));
mranderson047.garden.v1v3v3.garden.units.rad = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"rad","rad",-833983012));
mranderson047.garden.v1v3v3.garden.units.turn = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"turn","turn",75759344));
mranderson047.garden.v1v3v3.garden.units.s = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"s","s",1705939918));
mranderson047.garden.v1v3v3.garden.units.ms = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"ms","ms",-1152709733));
mranderson047.garden.v1v3v3.garden.units.Hz = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
mranderson047.garden.v1v3v3.garden.units.kHz = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"kHz","kHz",240398466));
mranderson047.garden.v1v3v3.garden.units.dpi = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpi","dpi",-986162832));
mranderson047.garden.v1v3v3.garden.units.dpcm = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
mranderson047.garden.v1v3v3.garden.units.dppx = mranderson047.garden.v1v3v3.garden.units.make_unit_fn.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=units.js.map?rel=1526705515393
