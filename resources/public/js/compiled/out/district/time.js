// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.time');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
district.time.time_units = (function district$time$time_units(milis){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),Math.floor(cljs.core.mod.call(null,(milis / (1000)),(60))),new cljs.core.Keyword(null,"minutes","minutes",1319166394),Math.floor(cljs.core.mod.call(null,((milis / (1000)) / (60)),(60))),new cljs.core.Keyword(null,"hours","hours",58380855),Math.floor(cljs.core.mod.call(null,(milis / (3600000)),(24))),new cljs.core.Keyword(null,"days","days",-1394072564),Math.floor((milis / (86400000)))], null);
});
district.time.biggest_time_unit = (function district$time$biggest_time_unit(p__34248){
var map__34249 = p__34248;
var map__34249__$1 = ((((!((map__34249 == null)))?(((((map__34249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34249):map__34249);
var seconds = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
if((days > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",-1394072564),days], null);
} else {
if((hours > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),hours], null);
} else {
if((minutes > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds], null);

}
}
}
});
district.time.time_remaining = (function district$time$time_remaining(from_time,to_time){
var milis_difference = (cljs_time.coerce.to_long.call(null,to_time) - cljs_time.coerce.to_long.call(null,from_time));
if((milis_difference > (0))){
return district.time.time_units.call(null,milis_difference);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"hours","hours",58380855),(0),new cljs.core.Keyword(null,"days","days",-1394072564),(0)], null);
}
});
district.time.time_remaining_biggest_unit = (function district$time$time_remaining_biggest_unit(from_time,to_time){
return district.time.biggest_time_unit.call(null,district.time.time_remaining.call(null,from_time,to_time));
});
district.time.long__GT_epoch = (function district$time$long__GT_epoch(x){
return (x / (1000));
});
district.time.epoch__GT_long = (function district$time$epoch__GT_long(x){
return (x * (1000));
});

//# sourceMappingURL=time.js.map?rel=1526705068963
