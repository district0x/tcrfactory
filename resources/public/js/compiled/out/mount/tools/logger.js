// Compiled by ClojureScript 1.10.238 {}
goog.provide('mount.tools.logger');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.debug.Console');
if(typeof mount.tools.logger._STAR_logger_STAR_ !== 'undefined'){
} else {
mount.tools.logger._STAR_logger_STAR_ = (function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("mount");
})()
;
}
mount.tools.logger.log = (function mount$tools$logger$log(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24979 = arguments.length;
var i__4500__auto___24980 = (0);
while(true){
if((i__4500__auto___24980 < len__4499__auto___24979)){
args__4502__auto__.push((arguments[i__4500__auto___24980]));

var G__24981 = (i__4500__auto___24980 + (1));
i__4500__auto___24980 = G__24981;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mount.tools.logger.log.cljs$core$IFn$_invoke$arity$variadic = (function (msg,level){
var G__24978 = cljs.core.first.call(null,level);
var G__24978__$1 = (((G__24978 instanceof cljs.core.Keyword))?G__24978.fqn:null);
switch (G__24978__$1) {
case "error":
return goog.log.error(mount.tools.logger._STAR_logger_STAR_,msg);

break;
default:
return goog.log.info(mount.tools.logger._STAR_logger_STAR_,msg);

}
});

mount.tools.logger.log.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mount.tools.logger.log.cljs$lang$applyTo = (function (seq24976){
var G__24977 = cljs.core.first.call(null,seq24976);
var seq24976__$1 = cljs.core.next.call(null,seq24976);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24977,seq24976__$1);
});


//# sourceMappingURL=logger.js.map?rel=1526705061572
