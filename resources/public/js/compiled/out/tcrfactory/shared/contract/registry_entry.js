// Compiled by ClojureScript 1.10.238 {}
goog.provide('tcrfactory.shared.contract.registry_entry');
goog.require('cljs.core');
goog.require('bignumber.core');
goog.require('cljs_web3.core');
goog.require('clojure.set');
goog.require('district.web3_utils');
tcrfactory.shared.contract.registry_entry.statuses = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword("reg-entry.status","challenge-period","reg-entry.status/challenge-period",-1203984141),(1),new cljs.core.Keyword("reg-entry.status","commit-period","reg-entry.status/commit-period",-732279687),(2),new cljs.core.Keyword("reg-entry.status","reveal-period","reg-entry.status/reveal-period",-2143405708),(3),new cljs.core.Keyword("reg-entry.status","blacklisted","reg-entry.status/blacklisted",-1312267913),(4),new cljs.core.Keyword("reg-entry.status","whitelisted","reg-entry.status/whitelisted",104480733)], null);
tcrfactory.shared.contract.registry_entry.load_registry_entry_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reg-entry","version","reg-entry/version",937299367),new cljs.core.Keyword("reg-entry","status","reg-entry/status",644680158),new cljs.core.Keyword("reg-entry","creator","reg-entry/creator",1589991545),new cljs.core.Keyword("reg-entry","deposit","reg-entry/deposit",-17289746),new cljs.core.Keyword("reg-entry","challenge-period-end","reg-entry/challenge-period-end",1476557912),new cljs.core.Keyword("reg-entry","registry","reg-entry/registry",-1755532287),new cljs.core.Keyword("reg-entry","registry-token","reg-entry/registry-token",1240003608),new cljs.core.Keyword("reg-entry","title","reg-entry/title",-2106492952),new cljs.core.Keyword("reg-entry","description","reg-entry/description",-1988838567)], null);
tcrfactory.shared.contract.registry_entry.load_registry_entry_challenge_keys = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("reg-entry","challenge-period-end","reg-entry/challenge-period-end",1476557912),new cljs.core.Keyword("challenge","challenger","challenge/challenger",1595473901),new cljs.core.Keyword("challenge","reward-pool","challenge/reward-pool",88957231),new cljs.core.Keyword("challenge","description","challenge/description",-279944717),new cljs.core.Keyword("challenge","commit-period-end","challenge/commit-period-end",150412023),new cljs.core.Keyword("challenge","reveal-period-end","challenge/reveal-period-end",-1110608218),new cljs.core.Keyword("challenge","votes-for","challenge/votes-for",-1323941498),new cljs.core.Keyword("challenge","votes-against","challenge/votes-against",-709845935),new cljs.core.Keyword("challenge","claimed-reward-on","challenge/claimed-reward-on",-863925310),new cljs.core.Keyword("challenge","vote-quorum","challenge/vote-quorum",1457716903)], null);
tcrfactory.shared.contract.registry_entry.vote_props = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("vote","secret-hash","vote/secret-hash",768311957),new cljs.core.Keyword("vote","option","vote/option",70027282),new cljs.core.Keyword("vote","amount","vote/amount",369170758),new cljs.core.Keyword("vote","revealed-on","vote/revealed-on",1637983942),new cljs.core.Keyword("vote","claimed-reward-on","vote/claimed-reward-on",421971785)], null);
tcrfactory.shared.contract.registry_entry.vote_options = new cljs.core.PersistentArrayMap(null, 3, [(0),new cljs.core.Keyword("vote.option","no-vote","vote.option/no-vote",-1703330191),(1),new cljs.core.Keyword("vote.option","vote-for","vote.option/vote-for",-1716827570),(2),new cljs.core.Keyword("vote.option","vote-against","vote.option/vote-against",-559357886)], null);
tcrfactory.shared.contract.registry_entry.vote_option__GT_num = clojure.set.map_invert.call(null,tcrfactory.shared.contract.registry_entry.vote_options);
tcrfactory.shared.contract.registry_entry.parse_status = (function tcrfactory$shared$contract$registry_entry$parse_status(status){
return tcrfactory.shared.contract.registry_entry.statuses.call(null,bignumber.core.number.call(null,status));
});
tcrfactory.shared.contract.registry_entry.parse_load_registry_entry = (function tcrfactory$shared$contract$registry_entry$parse_load_registry_entry(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33606 = arguments.length;
var i__4500__auto___33607 = (0);
while(true){
if((i__4500__auto___33607 < len__4499__auto___33606)){
args__4502__auto__.push((arguments[i__4500__auto___33607]));

var G__33608 = (i__4500__auto___33607 + (1));
i__4500__auto___33607 = G__33608;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return tcrfactory.shared.contract.registry_entry.parse_load_registry_entry.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

tcrfactory.shared.contract.registry_entry.parse_load_registry_entry.cljs$core$IFn$_invoke$arity$variadic = (function (reg_entry_addr,registry_entry,p__33600){
var vec__33601 = p__33600;
var map__33604 = cljs.core.nth.call(null,vec__33601,(0),null);
var map__33604__$1 = ((((!((map__33604 == null)))?(((((map__33604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33604):map__33604);
var parse_dates_QMARK_ = cljs.core.get.call(null,map__33604__$1,new cljs.core.Keyword(null,"parse-dates?","parse-dates?",-307553452));
if(cljs.core.truth_(registry_entry)){
var registry_entry__$1 = cljs.core.zipmap.call(null,tcrfactory.shared.contract.registry_entry.load_registry_entry_keys,registry_entry);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,registry_entry__$1,new cljs.core.Keyword("reg-entry","address","reg-entry/address",-1093166519),reg_entry_addr),new cljs.core.Keyword("reg-entry","version","reg-entry/version",937299367),bignumber.core.number),new cljs.core.Keyword("reg-entry","deposit","reg-entry/deposit",-17289746),district.web3_utils.wei__GT_eth_number),new cljs.core.Keyword("reg-entry","status","reg-entry/status",644680158),tcrfactory.shared.contract.registry_entry.parse_status),new cljs.core.Keyword("reg-entry","challenge-period-end","reg-entry/challenge-period-end",1476557912),(cljs.core.truth_(parse_dates_QMARK_)?district.web3_utils.web3_time__GT_local_date_time:bignumber.core.number));
} else {
return null;
}
});

tcrfactory.shared.contract.registry_entry.parse_load_registry_entry.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tcrfactory.shared.contract.registry_entry.parse_load_registry_entry.cljs$lang$applyTo = (function (seq33597){
var G__33598 = cljs.core.first.call(null,seq33597);
var seq33597__$1 = cljs.core.next.call(null,seq33597);
var G__33599 = cljs.core.first.call(null,seq33597__$1);
var seq33597__$2 = cljs.core.next.call(null,seq33597__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33598,G__33599,seq33597__$2);
});

tcrfactory.shared.contract.registry_entry.parse_load_registry_entry_challenge = (function tcrfactory$shared$contract$registry_entry$parse_load_registry_entry_challenge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33619 = arguments.length;
var i__4500__auto___33620 = (0);
while(true){
if((i__4500__auto___33620 < len__4499__auto___33619)){
args__4502__auto__.push((arguments[i__4500__auto___33620]));

var G__33621 = (i__4500__auto___33620 + (1));
i__4500__auto___33620 = G__33621;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return tcrfactory.shared.contract.registry_entry.parse_load_registry_entry_challenge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

tcrfactory.shared.contract.registry_entry.parse_load_registry_entry_challenge.cljs$core$IFn$_invoke$arity$variadic = (function (reg_entry_addr,registry_entry,p__33613){
var vec__33614 = p__33613;
var map__33617 = cljs.core.nth.call(null,vec__33614,(0),null);
var map__33617__$1 = ((((!((map__33617 == null)))?(((((map__33617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33617):map__33617);
var parse_dates_QMARK_ = cljs.core.get.call(null,map__33617__$1,new cljs.core.Keyword(null,"parse-dates?","parse-dates?",-307553452));
if(cljs.core.truth_(registry_entry)){
var registry_entry__$1 = cljs.core.zipmap.call(null,tcrfactory.shared.contract.registry_entry.load_registry_entry_challenge_keys,registry_entry);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,registry_entry__$1,new cljs.core.Keyword("reg-entry","challenge-period-end","reg-entry/challenge-period-end",1476557912),(cljs.core.truth_(parse_dates_QMARK_)?district.web3_utils.web3_time__GT_local_date_time:bignumber.core.number)),new cljs.core.Keyword("challenge","challenger","challenge/challenger",1595473901),((function (registry_entry__$1,vec__33614,map__33617,map__33617__$1,parse_dates_QMARK_){
return (function (p1__33609_SHARP_){
if(cljs.core.truth_(district.web3_utils.empty_address_QMARK_.call(null,p1__33609_SHARP_))){
return null;
} else {
return p1__33609_SHARP_;
}
});})(registry_entry__$1,vec__33614,map__33617,map__33617__$1,parse_dates_QMARK_))
),new cljs.core.Keyword("challenge","reward-pool","challenge/reward-pool",88957231),district.web3_utils.wei__GT_eth_number),new cljs.core.Keyword("challenge","commit-period-end","challenge/commit-period-end",150412023),(cljs.core.truth_(parse_dates_QMARK_)?district.web3_utils.web3_time__GT_local_date_time:bignumber.core.number)),new cljs.core.Keyword("challenge","reveal-period-end","challenge/reveal-period-end",-1110608218),(cljs.core.truth_(parse_dates_QMARK_)?district.web3_utils.web3_time__GT_local_date_time:bignumber.core.number)),new cljs.core.Keyword("challenge","votes-for","challenge/votes-for",-1323941498),bignumber.core.number),new cljs.core.Keyword("challenge","vote-quorum","challenge/vote-quorum",1457716903),bignumber.core.number),new cljs.core.Keyword("challenge","votes-against","challenge/votes-against",-709845935),bignumber.core.number),new cljs.core.Keyword("challenge","claimed-reward-on","challenge/claimed-reward-on",-863925310),(cljs.core.truth_(parse_dates_QMARK_)?district.web3_utils.web3_time__GT_local_date_time:bignumber.core.number));
} else {
return null;
}
});

tcrfactory.shared.contract.registry_entry.parse_load_registry_entry_challenge.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tcrfactory.shared.contract.registry_entry.parse_load_registry_entry_challenge.cljs$lang$applyTo = (function (seq33610){
var G__33611 = cljs.core.first.call(null,seq33610);
var seq33610__$1 = cljs.core.next.call(null,seq33610);
var G__33612 = cljs.core.first.call(null,seq33610__$1);
var seq33610__$2 = cljs.core.next.call(null,seq33610__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33611,G__33612,seq33610__$2);
});

tcrfactory.shared.contract.registry_entry.parse_vote_option = (function tcrfactory$shared$contract$registry_entry$parse_vote_option(vote_option){
return tcrfactory.shared.contract.registry_entry.vote_options.call(null,bignumber.core.number.call(null,vote_option));
});
tcrfactory.shared.contract.registry_entry.parse_load_vote = (function tcrfactory$shared$contract$registry_entry$parse_load_vote(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33632 = arguments.length;
var i__4500__auto___33633 = (0);
while(true){
if((i__4500__auto___33633 < len__4499__auto___33632)){
args__4502__auto__.push((arguments[i__4500__auto___33633]));

var G__33634 = (i__4500__auto___33633 + (1));
i__4500__auto___33633 = G__33634;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return tcrfactory.shared.contract.registry_entry.parse_load_vote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

tcrfactory.shared.contract.registry_entry.parse_load_vote.cljs$core$IFn$_invoke$arity$variadic = (function (contract_addr,voter_address,voter,p__33626){
var vec__33627 = p__33626;
var map__33630 = cljs.core.nth.call(null,vec__33627,(0),null);
var map__33630__$1 = ((((!((map__33630 == null)))?(((((map__33630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33630):map__33630);
var parse_dates_QMARK_ = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword(null,"parse-dates?","parse-dates?",-307553452));
var parse_vote_option_QMARK_ = cljs.core.get.call(null,map__33630__$1,new cljs.core.Keyword(null,"parse-vote-option?","parse-vote-option?",-594921210));
if(cljs.core.truth_(voter)){
var voter__$1 = cljs.core.zipmap.call(null,tcrfactory.shared.contract.registry_entry.vote_props,voter);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,voter__$1,new cljs.core.Keyword("reg-entry","address","reg-entry/address",-1093166519),contract_addr),new cljs.core.Keyword("vote","voter","vote/voter",1023050713),voter_address),new cljs.core.Keyword("vote","option","vote/option",70027282),(cljs.core.truth_(parse_vote_option_QMARK_)?tcrfactory.shared.contract.registry_entry.parse_vote_option:bignumber.core.number)),new cljs.core.Keyword("vote","amount","vote/amount",369170758),bignumber.core.number),new cljs.core.Keyword("vote","revealed-on","vote/revealed-on",1637983942),(cljs.core.truth_(parse_dates_QMARK_)?district.web3_utils.web3_time__GT_local_date_time:bignumber.core.number)),new cljs.core.Keyword("vote","claimed-reward-on","vote/claimed-reward-on",421971785),(cljs.core.truth_(parse_dates_QMARK_)?district.web3_utils.web3_time__GT_local_date_time:bignumber.core.number));
} else {
return null;
}
});

tcrfactory.shared.contract.registry_entry.parse_load_vote.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
tcrfactory.shared.contract.registry_entry.parse_load_vote.cljs$lang$applyTo = (function (seq33622){
var G__33623 = cljs.core.first.call(null,seq33622);
var seq33622__$1 = cljs.core.next.call(null,seq33622);
var G__33624 = cljs.core.first.call(null,seq33622__$1);
var seq33622__$2 = cljs.core.next.call(null,seq33622__$1);
var G__33625 = cljs.core.first.call(null,seq33622__$2);
var seq33622__$3 = cljs.core.next.call(null,seq33622__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33623,G__33624,G__33625,seq33622__$3);
});


//# sourceMappingURL=registry_entry.js.map?rel=1526705067947
