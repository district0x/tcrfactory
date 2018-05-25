// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.web3_tx_costs.events');
goog.require('cljs.core');
goog.require('bignumber.core');
goog.require('cljs_web3.core');
goog.require('cljs.spec.alpha');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district.ui.conversion_rates.events');
goog.require('district.ui.conversion_rates.queries');
goog.require('district.ui.web3_tx_costs.queries');
goog.require('district.ui.web3_tx.events');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('re_frame.core');
district.ui.web3_tx_costs.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-costs.events","start","district.ui.web3-tx-costs.events/start",1964333489),district.ui.web3_tx_costs.events.interceptors,(function (p__25209,p__25210){
var map__25211 = p__25209;
var map__25211__$1 = ((((!((map__25211 == null)))?(((((map__25211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25211):map__25211);
var db = cljs.core.get.call(null,map__25211__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25212 = p__25210;
var map__25215 = cljs.core.nth.call(null,vec__25212,(0),null);
var map__25215__$1 = ((((!((map__25215 == null)))?(((((map__25215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25215):map__25215);
var currencies = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"currencies","currencies",2003336181));
var request_interval_ms = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"request-interval-ms","request-interval-ms",-2134360974));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx_costs.queries.set_currencies.call(null,db,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs.events","add-currencies","district.ui.web3-tx-costs.events/add-currencies",1258387391),currencies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-interval-ms","request-interval-ms",-2134360974),request_interval_ms], null)], null),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("district.ui.web3-tx-costs.events","tx-loaded","district.ui.web3-tx-costs.events/tx-loaded",2127414255),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.web3-tx.events","tx-loaded","district.ui.web3-tx.events/tx-loaded",-1027130856),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx-costs.events","tx-loaded","district.ui.web3-tx-costs.events/tx-loaded",2127414255)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-costs.events","add-currencies","district.ui.web3-tx-costs.events/add-currencies",1258387391),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.web3_tx_costs.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.web3-tx-costs","currencies","district.ui.web3-tx-costs/currencies",350744806))], null),(function (p__25218,p__25219){
var map__25220 = p__25218;
var map__25220__$1 = ((((!((map__25220 == null)))?(((((map__25220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25220):map__25220);
var db = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25221 = p__25219;
var currencies = cljs.core.nth.call(null,vec__25221,(0),null);
var map__25224 = cljs.core.nth.call(null,vec__25221,(1),null);
var map__25224__$1 = ((((!((map__25224 == null)))?(((((map__25224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25224):map__25224);
var request_interval_ms = cljs.core.get.call(null,map__25224__$1,new cljs.core.Keyword(null,"request-interval-ms","request-interval-ms",-2134360974));
if(cljs.core.truth_(currencies)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx_costs.queries.add_currencies.call(null,db,currencies),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.conversion-rates.events","watch-conversion-rates","district.ui.conversion-rates.events/watch-conversion-rates",257806915),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from-currencies","from-currencies",1794066200),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ETH","ETH",-1240862103)], null),new cljs.core.Keyword(null,"to-currencies","to-currencies",1238261786),currencies], null),(cljs.core.truth_(request_interval_ms)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-interval-ms","request-interval-ms",-2134360974),request_interval_ms], null):null))], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-costs.events","tx-loaded","district.ui.web3-tx-costs.events/tx-loaded",2127414255),district.ui.web3_tx_costs.events.interceptors,(function (p__25227,p__25228){
var map__25229 = p__25227;
var map__25229__$1 = ((((!((map__25229 == null)))?(((((map__25229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25229):map__25229);
var db = cljs.core.get.call(null,map__25229__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__25230 = p__25228;
var vec__25233 = cljs.core.nth.call(null,vec__25230,(0),null);
var _ = cljs.core.nth.call(null,vec__25233,(0),null);
var tx_hash = cljs.core.nth.call(null,vec__25233,(1),null);
var tx_receipt = cljs.core.nth.call(null,vec__25233,(2),null);
var tx = cljs.core.nth.call(null,vec__25233,(3),null);
var tx_cost_eth = bignumber.core.number.call(null,cljs_web3.core.from_wei.call(null,bignumber.core._STAR_.call(null,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(tx),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(tx_receipt)),new cljs.core.Keyword(null,"ether","ether",-911152777)));
var tx_costs = cljs.core.reduce.call(null,((function (tx_cost_eth,map__25229,map__25229__$1,db,vec__25230,vec__25233,_,tx_hash,tx_receipt,tx){
return (function (result,currency){
return cljs.core.assoc.call(null,result,currency,district.ui.conversion_rates.queries.convert.call(null,db,new cljs.core.Keyword(null,"ETH","ETH",-1240862103),currency,tx_cost_eth));
});})(tx_cost_eth,map__25229,map__25229__$1,db,vec__25230,vec__25233,_,tx_hash,tx_receipt,tx))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ETH","ETH",-1240862103),tx_cost_eth], null),district.ui.web3_tx_costs.queries.currencies.call(null,db));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","set-tx","district.ui.web3-tx.events/set-tx",-2003211234),tx_hash,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-costs","tx-costs",1617118704),tx_costs], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.web3-tx-costs.events","stop","district.ui.web3-tx-costs.events/stop",312730056),district.ui.web3_tx_costs.events.interceptors,(function (p__25237){
var map__25238 = p__25237;
var map__25238__$1 = ((((!((map__25238 == null)))?(((((map__25238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25238):map__25238);
var db = cljs.core.get.call(null,map__25238__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.web3_tx_costs.queries.dissoc_web3_tx_costs.call(null,db),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),new cljs.core.Keyword("district.ui.web3-tx-costs.events","tx-loaded","district.ui.web3-tx-costs.events/tx-loaded",2127414255)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526741423804
