// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.web3_utils');
goog.require('cljs.core');
goog.require('bignumber.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
goog.require('cljs_web3.core');
goog.require('clojure.string');
district.web3_utils.wei__GT_eth = (function district$web3_utils$wei__GT_eth(x){
if(cljs.core.truth_(x)){
try{return cljs_web3.core.from_wei.call(null,x,new cljs.core.Keyword(null,"ether","ether",-911152777));
}catch (e33592){var _ = e33592;
return null;
}} else {
return null;
}
});
district.web3_utils.wei__GT_eth_number = cljs.core.comp.call(null,bignumber.core.number,district.web3_utils.wei__GT_eth);
district.web3_utils.eth__GT_wei = (function district$web3_utils$eth__GT_wei(x){
if(cljs.core.truth_(x)){
try{return cljs_web3.core.to_wei.call(null,((typeof x === 'string')?clojure.string.replace.call(null,x,",","."):x),new cljs.core.Keyword(null,"ether","ether",-911152777));
}catch (e33593){var _ = e33593;
return null;
}} else {
return null;
}
});
district.web3_utils.eth__GT_wei_number = cljs.core.comp.call(null,bignumber.core.number,district.web3_utils.eth__GT_wei);
district.web3_utils.zero_address = "0x0000000000000000000000000000000000000000";
district.web3_utils.zero_address_QMARK_ = (function district$web3_utils$zero_address_QMARK_(x){
return ((cljs.core._EQ_.call(null,x,district.web3_utils.zero_address)) || (cljs.core._EQ_.call(null,x,"0x")));
});
district.web3_utils.empty_address_QMARK_ = (function district$web3_utils$empty_address_QMARK_(x){
var or__3922__auto__ = cljs.core.empty_QMARK_.call(null,x);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return district.web3_utils.zero_address_QMARK_.call(null,x);
}
});
district.web3_utils.remove_0x = (function district$web3_utils$remove_0x(s){
return clojure.string.replace.call(null,s,/0x/,"");
});
district.web3_utils.web3_time__GT_date_time = (function district$web3_utils$web3_time__GT_date_time(x){
return cljs_time.coerce.from_long.call(null,(bignumber.core.number.call(null,x) * (1000)));
});
district.web3_utils.web3_time__GT_local_date_time = (function district$web3_utils$web3_time__GT_local_date_time(x){
var temp__5457__auto__ = district.web3_utils.web3_time__GT_date_time.call(null,x);
if(cljs.core.truth_(temp__5457__auto__)){
var dt = temp__5457__auto__;
return cljs_time.core.to_default_time_zone.call(null,dt);
} else {
return null;
}
});
district.web3_utils.prepend_address_zeros = (function district$web3_utils$prepend_address_zeros(address){
var n = ((42) - cljs.core.count.call(null,address));
if((n > (0))){
return ["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.take.call(null,n,cljs.core.repeat.call(null,"0")))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,address,(2)))].join(''))].join('');
} else {
return address;
}
});
district.web3_utils.remove_zero_chars = (function district$web3_utils$remove_zero_chars(s){
return clojure.string.join.call(null,cljs.core.take_while.call(null,(function (p1__33594_SHARP_){
return ((0) < p1__33594_SHARP_.charCodeAt((0)));
}),s));
});
district.web3_utils.bytes32__GT_str = cljs.core.comp.call(null,district.web3_utils.remove_zero_chars,cljs_web3.core.to_ascii);
district.web3_utils.uint__GT_address = cljs.core.comp.call(null,district.web3_utils.prepend_address_zeros,cljs_web3.core.from_decimal);

//# sourceMappingURL=web3_utils.js.map?rel=1526705067912
