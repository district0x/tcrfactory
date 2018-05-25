// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_solidity_sha3.core');
goog.require('cljs.core');
goog.require('cljs_web3.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
cljs_solidity_sha3.core.remove_0x = (function cljs_solidity_sha3$core$remove_0x(s){
return clojure.string.replace.call(null,s,/0x/,"");
});
cljs_solidity_sha3.core.left_pad = (function cljs_solidity_sha3$core$left_pad(var_args){
var G__29995 = arguments.length;
switch (G__29995) {
case 2:
return cljs_solidity_sha3.core.left_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_solidity_sha3.core.left_pad.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_solidity_sha3.core.left_pad.cljs$core$IFn$_invoke$arity$2 = (function (s,len){
return cljs_solidity_sha3.core.left_pad.call(null,s,len," ");
});

cljs_solidity_sha3.core.left_pad.cljs$core$IFn$_invoke$arity$3 = (function (s,len,ch){
return cljs.pprint.cl_format.call(null,null,["~",cljs.core.str.cljs$core$IFn$_invoke$arity$1(len),",'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch),"d"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});

cljs_solidity_sha3.core.left_pad.cljs$lang$maxFixedArity = 3;

cljs_solidity_sha3.core.solidity_sha3 = (function cljs_solidity_sha3$core$solidity_sha3(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29998 = arguments.length;
var i__4500__auto___29999 = (0);
while(true){
if((i__4500__auto___29999 < len__4499__auto___29998)){
args__4502__auto__.push((arguments[i__4500__auto___29999]));

var G__30000 = (i__4500__auto___29999 + (1));
i__4500__auto___29999 = G__30000;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_solidity_sha3.core.solidity_sha3.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_solidity_sha3.core.solidity_sha3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_web3.core.sha3.call(null,clojure.string.join.call(null,"",cljs.core.map.call(null,(function (arg){
if(((typeof arg === 'string') && (clojure.string.starts_with_QMARK_.call(null,arg,"0x")))){
return cljs_solidity_sha3.core.remove_0x.call(null,arg);
} else {
if(typeof arg === 'string'){
return cljs_solidity_sha3.core.remove_0x.call(null,cljs_web3.core.to_hex.call(null,arg));
} else {
if(typeof arg === 'number'){
return cljs_solidity_sha3.core.left_pad.call(null,cljs_solidity_sha3.core.remove_0x.call(null,cljs_web3.core.to_hex.call(null,arg)),(64),"0");
} else {
return null;
}
}
}
}),args)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),"hex"], null));
});

cljs_solidity_sha3.core.solidity_sha3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_solidity_sha3.core.solidity_sha3.cljs$lang$applyTo = (function (seq29997){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29997));
});


//# sourceMappingURL=core.js.map?rel=1526792760239
