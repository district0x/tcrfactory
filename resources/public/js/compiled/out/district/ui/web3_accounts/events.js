// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_accounts.events');
goog.require('cljs.core');
goog.require('cljs_web3.core');
goog.require('cljs_web3.eth');
goog.require('cljs.spec.alpha');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.web3_accounts.queries');
goog.require('district.ui.web3.events');
goog.require('district.ui.web3.queries');
goog.require('district.ui.window_focus.queries');
goog.require('district0x.re_frame.interval_fx');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('district0x.re_frame.web3_fx');
goog.require('re_frame.core');
district.ui.web3_accounts.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","account","district.ui.web3-accounts.events/account",-821763517),new cljs.core.Symbol("cljs-web3.core","address?","cljs-web3.core/address?",-1543623079,null),cljs_web3.core.address_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","accounts","district.ui.web3-accounts.events/accounts",-299283351),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district.ui.web3-accounts.events","account","district.ui.web3-accounts.events/account",-821763517)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","account","district.ui.web3-accounts.events/account",-821763517),new cljs.core.Keyword("district.ui.web3-accounts.events","account","district.ui.web3-accounts.events/account",-821763517),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__33535){
return cljs.core.coll_QMARK_.call(null,G__33535);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district.ui.web3-accounts.events","account","district.ui.web3-accounts.events/account",-821763517))], null),null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","start","district.ui.web3-accounts.events/start",1165690714),district.ui.web3_accounts.events.interceptors,(function (p__33536,p__33537){
var map__33538 = p__33536;
var map__33538__$1 = ((((!((map__33538 == null)))?(((((map__33538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33538):map__33538);
var db = cljs.core.get.call(null,map__33538__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33539 = p__33537;
var map__33542 = cljs.core.nth.call(null,vec__33539,(0),null);
var map__33542__$1 = ((((!((map__33542 == null)))?(((((map__33542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33542):map__33542);
var opts = map__33542__$1;
var disable_polling_QMARK_ = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"disable-polling?","disable-polling?",1418933913));
var polling_interval_ms = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"polling-interval-ms","polling-interval-ms",1272919940),(4000));
var disable_loading_at_start_QMARK_ = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"disable-loading-at-start?","disable-loading-at-start?",476736496));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_accounts.queries.assoc_accounts.call(null,db,cljs.core.PersistentVector.EMPTY)], null),(cljs.core.truth_(disable_loading_at_start_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.web3-accounts.events","load-accounts","district.ui.web3-accounts.events/load-accounts",1323827377),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.web3.events","web3-created","district.ui.web3.events/web3-created",-602267634),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","load-accounts","district.ui.web3-accounts.events/load-accounts",1323827377),opts], null)], null)], null)),((((cljs.core.not.call(null,disable_polling_QMARK_)) && (cljs.core.not.call(null,disable_loading_at_start_QMARK_))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-interval","dispatch-interval",-1358911768),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","poll-accounts","district.ui.web3-accounts.events/poll-accounts",980909475),opts], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.web3-accounts.events","poll-accounts","district.ui.web3-accounts.events/poll-accounts",980909475),new cljs.core.Keyword(null,"ms","ms",-1152709733),polling_interval_ms], null)], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","poll-accounts","district.ui.web3-accounts.events/poll-accounts",980909475),district.ui.web3_accounts.events.interceptors,(function (p__33545,p__33546){
var map__33547 = p__33545;
var map__33547__$1 = ((((!((map__33547 == null)))?(((((map__33547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33547):map__33547);
var db = cljs.core.get.call(null,map__33547__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33548 = p__33546;
var opts = cljs.core.nth.call(null,vec__33548,(0),null);
return cljs.core.merge.call(null,(cljs.core.truth_((function (){var and__3911__auto__ = district.ui.window_focus.queries.focused_QMARK_.call(null,db);
if(cljs.core.truth_(and__3911__auto__)){
return district.ui.web3.queries.web3.call(null,db);
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","load-accounts","district.ui.web3-accounts.events/load-accounts",1323827377),opts], null)], null):null),(cljs.core.truth_((function (){var and__3911__auto__ = district.ui.web3.queries.web3.call(null,db);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,district.ui.web3.queries.web3_injected_QMARK_.call(null,db));
} else {
return and__3911__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-interval","clear-interval",-68384603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.web3-accounts.events","poll-accounts","district.ui.web3-accounts.events/poll-accounts",980909475)], null)], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","load-accounts","district.ui.web3-accounts.events/load-accounts",1323827377),district.ui.web3_accounts.events.interceptors,(function (p__33552,p__33553){
var map__33554 = p__33552;
var map__33554__$1 = ((((!((map__33554 == null)))?(((((map__33554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33554):map__33554);
var db = cljs.core.get.call(null,map__33554__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33555 = p__33553;
var map__33558 = cljs.core.nth.call(null,vec__33555,(0),null);
var map__33558__$1 = ((((!((map__33558 == null)))?(((((map__33558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33558):map__33558);
var load_injected_accounts_only_QMARK_ = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"load-injected-accounts-only?","load-injected-accounts-only?",2047198421));
var temp__5457__auto__ = district.ui.web3.queries.web3.call(null,db);
if(cljs.core.truth_(temp__5457__auto__)){
var web3 = temp__5457__auto__;
if(cljs.core.truth_((function (){var and__3911__auto__ = load_injected_accounts_only_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,district.ui.web3.queries.web3_injected_QMARK_.call(null,db));
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","set-accounts","district.ui.web3-accounts.events/set-accounts",1641165198),cljs.core.PersistentVector.EMPTY], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("web3","call","web3/call",-479653525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"fns","fns",1185138786),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs_web3.eth.accounts,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","set-accounts","district.ui.web3-accounts.events/set-accounts",1641165198)], null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","accounts-load-failed","district.ui.web3-accounts.events/accounts-load-failed",-1013145553)], null)], null)], null)], null)], null);
}
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","accounts-load-failed","district.ui.web3-accounts.events/accounts-load-failed",-1013145553),district.ui.web3_accounts.events.interceptors,(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","set-accounts","district.ui.web3-accounts.events/set-accounts",1641165198),cljs.core.PersistentVector.EMPTY], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","set-accounts","district.ui.web3-accounts.events/set-accounts",1641165198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_accounts.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","accounts","district.ui.web3-accounts.events/accounts",-299283351))], null),(function (p__33561,p__33562){
var map__33563 = p__33561;
var map__33563__$1 = ((((!((map__33563 == null)))?(((((map__33563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33563):map__33563);
var db = cljs.core.get.call(null,map__33563__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33564 = p__33562;
var accounts = cljs.core.nth.call(null,vec__33564,(0),null);
var active_account = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,accounts),district.ui.web3_accounts.queries.active_account.call(null,db)))?district.ui.web3_accounts.queries.active_account.call(null,db):cljs.core.first.call(null,accounts));
return cljs.core.merge.call(null,((cljs.core.not_EQ_.call(null,accounts,district.ui.web3_accounts.queries.accounts.call(null,db)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_accounts.queries.assoc_accounts.call(null,db,accounts),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","accounts-changed","district.ui.web3-accounts.events/accounts-changed",1261902656),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new","new",-2085437848),accounts,new cljs.core.Keyword(null,"old","old",-1825222690),district.ui.web3_accounts.queries.accounts.call(null,db)], null)], null)], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","set-active-account","district.ui.web3-accounts.events/set-active-account",2097434173),active_account], null)], null)], null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","accounts-changed","district.ui.web3-accounts.events/accounts-changed",1261902656),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","set-active-account","district.ui.web3-accounts.events/set-active-account",2097434173),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_accounts.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","account","district.ui.web3-accounts.events/account",-821763517),new cljs.core.Keyword("district.ui.web3-accounts.events","account","district.ui.web3-accounts.events/account",-821763517),null))], null),(function (p__33568,p__33569){
var map__33570 = p__33568;
var map__33570__$1 = ((((!((map__33570 == null)))?(((((map__33570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33570):map__33570);
var db = cljs.core.get.call(null,map__33570__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33571 = p__33569;
var active_account = cljs.core.nth.call(null,vec__33571,(0),null);
if(cljs.core.not_EQ_.call(null,active_account,district.ui.web3_accounts.queries.active_account.call(null,db))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_accounts.queries.assoc_active_account.call(null,db,active_account),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-accounts.events","active-account-changed","district.ui.web3-accounts.events/active-account-changed",644149716),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new","new",-2085437848),active_account,new cljs.core.Keyword(null,"old","old",-1825222690),district.ui.web3_accounts.queries.active_account.call(null,db)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","active-account-changed","district.ui.web3-accounts.events/active-account-changed",644149716),cljs.core.constantly.call(null,null));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-accounts.events","stop","district.ui.web3-accounts.events/stop",-457359233),district.ui.web3_accounts.events.interceptors,(function (p__33575,p__33576){
var map__33577 = p__33575;
var map__33577__$1 = ((((!((map__33577 == null)))?(((((map__33577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33577):map__33577);
var db = cljs.core.get.call(null,map__33577__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33578 = p__33576;
var map__33581 = cljs.core.nth.call(null,vec__33578,(0),null);
var map__33581__$1 = ((((!((map__33581 == null)))?(((((map__33581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33581):map__33581);
var disable_loading_at_start_QMARK_ = cljs.core.get.call(null,map__33581__$1,new cljs.core.Keyword(null,"disable-loading-at-start?","disable-loading-at-start?",476736496));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_accounts.queries.dissoc_web3_accounts.call(null,db),new cljs.core.Keyword(null,"clear-interval","clear-interval",-68384603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("district.ui.web3-accounts.events","poll-accounts","district.ui.web3-accounts.events/poll-accounts",980909475)], null)], null),(cljs.core.truth_(disable_loading_at_start_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.web3-accounts.events","load-accounts","district.ui.web3-accounts.events/load-accounts",1323827377)], null)], null)));
}));

//# sourceMappingURL=events.js.map?rel=1526705067849
