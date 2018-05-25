// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__35469 = arguments.length;
switch (G__35469) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__35471 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__35472 = null;
var count__35473 = (0);
var i__35474 = (0);
while(true){
if((i__35474 < count__35473)){
var k = cljs.core._nth.call(null,chunk__35472,i__35474);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__35475 = seq__35471;
var G__35476 = chunk__35472;
var G__35477 = count__35473;
var G__35478 = (i__35474 + (1));
seq__35471 = G__35475;
chunk__35472 = G__35476;
count__35473 = G__35477;
i__35474 = G__35478;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35471);
if(temp__5457__auto__){
var seq__35471__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35471__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35471__$1);
var G__35479 = cljs.core.chunk_rest.call(null,seq__35471__$1);
var G__35480 = c__4319__auto__;
var G__35481 = cljs.core.count.call(null,c__4319__auto__);
var G__35482 = (0);
seq__35471 = G__35479;
chunk__35472 = G__35480;
count__35473 = G__35481;
i__35474 = G__35482;
continue;
} else {
var k = cljs.core.first.call(null,seq__35471__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__35483 = cljs.core.next.call(null,seq__35471__$1);
var G__35484 = null;
var G__35485 = (0);
var G__35486 = (0);
seq__35471 = G__35483;
chunk__35472 = G__35484;
count__35473 = G__35485;
i__35474 = G__35486;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1526705516320
