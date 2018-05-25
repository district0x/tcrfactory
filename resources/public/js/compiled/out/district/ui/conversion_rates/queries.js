// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.conversion_rates.queries');
goog.require('cljs.core');
district.ui.conversion_rates.queries.db_kw = new cljs.core.Keyword(null,"district.ui.conversion-rates","district.ui.conversion-rates",1064087970);
district.ui.conversion_rates.queries.conversion_rates = (function district$ui$conversion_rates$queries$conversion_rates(var_args){
var G__33338 = arguments.length;
switch (G__33338) {
case 1:
return district.ui.conversion_rates.queries.conversion_rates.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return district.ui.conversion_rates.queries.conversion_rates.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

district.ui.conversion_rates.queries.conversion_rates.cljs$core$IFn$_invoke$arity$1 = (function (db){
return new cljs.core.Keyword(null,"conversion-rates","conversion-rates",1603404721).cljs$core$IFn$_invoke$arity$1(district.ui.conversion_rates.queries.db_kw.cljs$core$IFn$_invoke$arity$1(db));
});

district.ui.conversion_rates.queries.conversion_rates.cljs$core$IFn$_invoke$arity$2 = (function (db,from){
return cljs.core.get.call(null,district.ui.conversion_rates.queries.conversion_rates.call(null,db),from);
});

district.ui.conversion_rates.queries.conversion_rates.cljs$lang$maxFixedArity = 2;

district.ui.conversion_rates.queries.conversion_rate = (function district$ui$conversion_rates$queries$conversion_rate(db,from,to){
return cljs.core.get.call(null,district.ui.conversion_rates.queries.conversion_rates.call(null,db,from),to);
});
district.ui.conversion_rates.queries.cache_ttl = (function district$ui$conversion_rates$queries$cache_ttl(db){
return new cljs.core.Keyword(null,"cache-ttl","cache-ttl",914328511).cljs$core$IFn$_invoke$arity$1(district.ui.conversion_rates.queries.db_kw.cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.conversion_rates.queries.cache_has_QMARK_ = (function district$ui$conversion_rates$queries$cache_has_QMARK_(db,pair){
return cljs.core.boolean$.call(null,(function (){var temp__5457__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.conversion_rates.queries.db_kw,new cljs.core.Keyword(null,"cache","cache",-1237023054),pair], null));
if(cljs.core.truth_(temp__5457__auto__)){
var t = temp__5457__auto__;
var ttl = district.ui.conversion_rates.queries.cache_ttl.call(null,db);
return (((new Date()).getTime() - t) < ttl);
} else {
return null;
}
})());
});
district.ui.conversion_rates.queries.pairs = (function district$ui$conversion_rates$queries$pairs(from_currencies,to_currencies){
var iter__4292__auto__ = (function district$ui$conversion_rates$queries$pairs_$_iter__33340(s__33341){
return (new cljs.core.LazySeq(null,(function (){
var s__33341__$1 = s__33341;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33341__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var f = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__33341__$1,f,xs__6012__auto__,temp__5457__auto__){
return (function district$ui$conversion_rates$queries$pairs_$_iter__33340_$_iter__33342(s__33343){
return (new cljs.core.LazySeq(null,((function (s__33341__$1,f,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__33343__$1 = s__33343;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__33343__$1);
if(temp__5457__auto____$1){
var s__33343__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33343__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__33343__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__33345 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__33344 = (0);
while(true){
if((i__33344 < size__4291__auto__)){
var t = cljs.core._nth.call(null,c__4290__auto__,i__33344);
cljs.core.chunk_append.call(null,b__33345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,t], null));

var G__33346 = (i__33344 + (1));
i__33344 = G__33346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33345),district$ui$conversion_rates$queries$pairs_$_iter__33340_$_iter__33342.call(null,cljs.core.chunk_rest.call(null,s__33343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33345),null);
}
} else {
var t = cljs.core.first.call(null,s__33343__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,t], null),district$ui$conversion_rates$queries$pairs_$_iter__33340_$_iter__33342.call(null,cljs.core.rest.call(null,s__33343__$2)));
}
} else {
return null;
}
break;
}
});})(s__33341__$1,f,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__33341__$1,f,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,to_currencies));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,district$ui$conversion_rates$queries$pairs_$_iter__33340.call(null,cljs.core.rest.call(null,s__33341__$1)));
} else {
var G__33347 = cljs.core.rest.call(null,s__33341__$1);
s__33341__$1 = G__33347;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,from_currencies);
});
district.ui.conversion_rates.queries.cache_has_all_pairs_QMARK_ = (function district$ui$conversion_rates$queries$cache_has_all_pairs_QMARK_(db,from_currencies,to_currencies){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,district.ui.conversion_rates.queries.cache_has_QMARK_,db),district.ui.conversion_rates.queries.pairs.call(null,from_currencies,to_currencies));
});
district.ui.conversion_rates.queries.convert = (function district$ui$conversion_rates$queries$convert(var_args){
var G__33349 = arguments.length;
switch (G__33349) {
case 3:
return district.ui.conversion_rates.queries.convert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return district.ui.conversion_rates.queries.convert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

district.ui.conversion_rates.queries.convert.cljs$core$IFn$_invoke$arity$3 = (function (db,from,value){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33350){
var vec__33351 = p__33350;
var k = cljs.core.nth.call(null,vec__33351,(0),null);
var v = cljs.core.nth.call(null,vec__33351,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(v * value)], null);
}),district.ui.conversion_rates.queries.conversion_rates.call(null,db,from)));
});

district.ui.conversion_rates.queries.convert.cljs$core$IFn$_invoke$arity$4 = (function (db,from,to,value){
return (district.ui.conversion_rates.queries.conversion_rate.call(null,db,from,to) * value);
});

district.ui.conversion_rates.queries.convert.cljs$lang$maxFixedArity = 4;

district.ui.conversion_rates.queries.merge_conversion_rates = (function district$ui$conversion_rates$queries$merge_conversion_rates(db,conversion_rates){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.conversion_rates.queries.db_kw,new cljs.core.Keyword(null,"conversion-rates","conversion-rates",1603404721)], null),cljs.core.merge,conversion_rates);
});
district.ui.conversion_rates.queries.assoc_cache_ttl = (function district$ui$conversion_rates$queries$assoc_cache_ttl(db,cache_ttl){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.conversion_rates.queries.db_kw,new cljs.core.Keyword(null,"cache-ttl","cache-ttl",914328511)], null),cache_ttl);
});
district.ui.conversion_rates.queries.update_cache = (function district$ui$conversion_rates$queries$update_cache(db,from_currencies,to_currencies){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.conversion_rates.queries.db_kw,new cljs.core.Keyword(null,"cache","cache",-1237023054)], null),cljs.core.merge,cljs.core.zipmap.call(null,district.ui.conversion_rates.queries.pairs.call(null,from_currencies,to_currencies),cljs.core.repeat.call(null,(new Date()).getTime())));
});
district.ui.conversion_rates.queries.dissoc_conversion_rates = (function district$ui$conversion_rates$queries$dissoc_conversion_rates(db){
return cljs.core.dissoc.call(null,db,district.ui.conversion_rates.queries.db_kw);
});

//# sourceMappingURL=queries.js.map?rel=1526705067618
