// Compiled by ClojureScript 1.10.238 {}
goog.provide('tcrfactory.ui.events');
goog.require('cljs.core');
goog.require('cljs_solidity_sha3.core');
goog.require('cljs_web3.core');
goog.require('cljs_web3.eth');
goog.require('district.ui.smart_contracts.queries');
goog.require('district.ui.web3_accounts.queries');
goog.require('district.ui.web3_sync_now.events');
goog.require('district.ui.web3_tx.events');
goog.require('re_frame.core');
goog.require('tcrfactory.shared.contract.registry_entry');
tcrfactory.ui.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-registry","create-registry",-147479113),tcrfactory.ui.events.interceptors,(function (p__28558,p__28559){
var map__28560 = p__28558;
var map__28560__$1 = ((((!((map__28560 == null)))?(((((map__28560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28560):map__28560);
var db = cljs.core.get.call(null,map__28560__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28561 = p__28559;
var args = cljs.core.nth.call(null,vec__28561,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","send-tx","district.ui.web3-tx.events/send-tx",-1958850483),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"instance","instance",-2121349050),district.ui.smart_contracts.queries.instance.call(null,db,new cljs.core.Keyword(null,"registry-factory","registry-factory",-1244854388)),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"create-registry","create-registry",-147479113),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"token-name","token-name",1766556933).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"token-symbol","token-symbol",-1488616500).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"total-supply","total-supply",1447638579).cljs$core$IFn$_invoke$arity$1(args),district.ui.smart_contracts.queries.contract_address.call(null,db,new cljs.core.Keyword(null,"minime-token-factory","minime-token-factory",-803389653)),new cljs.core.Keyword(null,"challenge-period-duration","challenge-period-duration",607102986).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"commit-period-duration","commit-period-duration",-1584387503).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"reveal-period-duration","reveal-period-duration",-742705871).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"deposit","deposit",-1686435851).cljs$core$IFn$_invoke$arity$1(args)], null),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),district.ui.web3_accounts.queries.active_account.call(null,db),new cljs.core.Keyword(null,"gas","gas",-139961463),(6200000)], null),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-registry-success","create-registry-success",-748742628)], null),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-registry-error","create-registry-error",63677508)], null),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-registry-error","create-registry-error",63677508)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-registry-success","create-registry-success",-748742628),tcrfactory.ui.events.interceptors,(function (p__28565,args){
var map__28566 = p__28565;
var map__28566__$1 = ((((!((map__28566 == null)))?(((((map__28566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28566):map__28566);
var db = cljs.core.get.call(null,map__28566__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"create-registry-success","create-registry-success",-748742628),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-registry-error","create-registry-error",63677508),tcrfactory.ui.events.interceptors,(function (p__28568,args){
var map__28569 = p__28568;
var map__28569__$1 = ((((!((map__28569 == null)))?(((((map__28569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);
var db = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"create-registry-error","create-registry-error",63677508),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-registry-entry","create-registry-entry",-1244752322),tcrfactory.ui.events.interceptors,(function (p__28571,p__28572){
var map__28573 = p__28571;
var map__28573__$1 = ((((!((map__28573 == null)))?(((((map__28573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28573):map__28573);
var db = cljs.core.get.call(null,map__28573__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28574 = p__28572;
var map__28577 = cljs.core.nth.call(null,vec__28574,(0),null);
var map__28577__$1 = ((((!((map__28577 == null)))?(((((map__28577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28577):map__28577);
var registry_entry_factory = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"registry-entry-factory","registry-entry-factory",1350197273));
var registry_token = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"registry-token","registry-token",-345376259));
var deposit = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var title = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__28577__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var extra_data = cljs_web3.eth.contract_get_data.call(null,district.ui.smart_contracts.queries.instance.call(null,db,new cljs.core.Keyword(null,"registry-entry-factory","registry-entry-factory",1350197273)),new cljs.core.Keyword(null,"create-registry-entry","create-registry-entry",-1244752322),district.ui.web3_accounts.queries.active_account.call(null,db),title,description);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","send-tx","district.ui.web3-tx.events/send-tx",-1958850483),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"instance","instance",-2121349050),district.ui.smart_contracts.queries.instance.call(null,db,new cljs.core.Keyword(null,"registry-token","registry-token",-345376259),registry_token),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"approve-and-call","approve-and-call",1637372534),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [registry_entry_factory,deposit,extra_data], null),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),district.ui.web3_accounts.queries.active_account.call(null,db),new cljs.core.Keyword(null,"gas","gas",-139961463),(3000000)], null),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-registry-entry-success","create-registry-entry-success",-541007013)], null),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-registry-entry-error","create-registry-entry-error",-1105399821)], null),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-registry-entry-error","create-registry-entry-error",-1105399821)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-registry-entry-success","create-registry-entry-success",-541007013),tcrfactory.ui.events.interceptors,(function (p__28580,args){
var map__28581 = p__28580;
var map__28581__$1 = ((((!((map__28581 == null)))?(((((map__28581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28581):map__28581);
var db = cljs.core.get.call(null,map__28581__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"create-registry-entry-success","create-registry-entry-success",-541007013),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-registry-entry-error","create-registry-entry-error",-1105399821),tcrfactory.ui.events.interceptors,(function (p__28583,args){
var map__28584 = p__28583;
var map__28584__$1 = ((((!((map__28584 == null)))?(((((map__28584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28584):map__28584);
var db = cljs.core.get.call(null,map__28584__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"create-registry-entry-error","create-registry-entry-error",-1105399821),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-challenge","create-challenge",1714161628),tcrfactory.ui.events.interceptors,(function (p__28586,p__28587){
var map__28588 = p__28586;
var map__28588__$1 = ((((!((map__28588 == null)))?(((((map__28588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28588):map__28588);
var db = cljs.core.get.call(null,map__28588__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28589 = p__28587;
var map__28592 = cljs.core.nth.call(null,vec__28589,(0),null);
var map__28592__$1 = ((((!((map__28592 == null)))?(((((map__28592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28592):map__28592);
var registry_entry = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"registry-entry","registry-entry",1035834759));
var registry_token = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"registry-token","registry-token",-345376259));
var deposit = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"deposit","deposit",-1686435851));
var description = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var extra_data = cljs_web3.eth.contract_get_data.call(null,district.ui.smart_contracts.queries.instance.call(null,db,new cljs.core.Keyword(null,"registry-entry","registry-entry",1035834759)),new cljs.core.Keyword(null,"create-challenge","create-challenge",1714161628),district.ui.web3_accounts.queries.active_account.call(null,db),description);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","send-tx","district.ui.web3-tx.events/send-tx",-1958850483),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"instance","instance",-2121349050),district.ui.smart_contracts.queries.instance.call(null,db,new cljs.core.Keyword(null,"registry-token","registry-token",-345376259),registry_token),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"approve-and-call","approve-and-call",1637372534),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [registry_entry,deposit,extra_data], null),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),district.ui.web3_accounts.queries.active_account.call(null,db),new cljs.core.Keyword(null,"gas","gas",-139961463),(3000000)], null),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-challenge-success","create-challenge-success",1187195870)], null),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-challenge-error","create-challenge-error",1370690323)], null),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-challenge-error","create-challenge-error",1370690323)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-challenge-success","create-challenge-success",1187195870),tcrfactory.ui.events.interceptors,(function (p__28595,args){
var map__28596 = p__28595;
var map__28596__$1 = ((((!((map__28596 == null)))?(((((map__28596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28596):map__28596);
var db = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"create-challenge-success","create-challenge-success",1187195870),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"create-challenge-error","create-challenge-error",1370690323),tcrfactory.ui.events.interceptors,(function (p__28598,args){
var map__28599 = p__28598;
var map__28599__$1 = ((((!((map__28599 == null)))?(((((map__28599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28599):map__28599);
var db = cljs.core.get.call(null,map__28599__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"create-challenge-error","create-challenge-error",1370690323),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"commit-vote","commit-vote",1657719524),tcrfactory.ui.events.interceptors,(function (p__28601,p__28602){
var map__28603 = p__28601;
var map__28603__$1 = ((((!((map__28603 == null)))?(((((map__28603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28603):map__28603);
var db = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28604 = p__28602;
var map__28607 = cljs.core.nth.call(null,vec__28604,(0),null);
var map__28607__$1 = ((((!((map__28607 == null)))?(((((map__28607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28607):map__28607);
var registry_entry = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"registry-entry","registry-entry",1035834759));
var registry_token = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"registry-token","registry-token",-345376259));
var amount = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var vote_option = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"vote-option","vote-option",980731250));
var salt = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"salt","salt",-587171712));
var extra_data = cljs_web3.eth.contract_get_data.call(null,district.ui.smart_contracts.queries.instance.call(null,db,new cljs.core.Keyword(null,"registry-entry","registry-entry",1035834759)),new cljs.core.Keyword(null,"commit-vote","commit-vote",1657719524),district.ui.web3_accounts.queries.active_account.call(null,db),amount,cljs_solidity_sha3.core.solidity_sha3.call(null,tcrfactory.shared.contract.registry_entry.vote_option__GT_num.call(null,vote_option),salt));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","send-tx","district.ui.web3-tx.events/send-tx",-1958850483),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"instance","instance",-2121349050),district.ui.smart_contracts.queries.instance.call(null,db,new cljs.core.Keyword(null,"registry-token","registry-token",-345376259),registry_token),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"approve-and-call","approve-and-call",1637372534),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [registry_entry,amount,extra_data], null),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),district.ui.web3_accounts.queries.active_account.call(null,db),new cljs.core.Keyword(null,"gas","gas",-139961463),(3000000)], null),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-vote-success","commit-vote-success",-1280673318)], null),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-vote-error","commit-vote-error",1864062993)], null),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-vote-error","commit-vote-error",1864062993)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"commit-vote-success","commit-vote-success",-1280673318),tcrfactory.ui.events.interceptors,(function (p__28610,args){
var map__28611 = p__28610;
var map__28611__$1 = ((((!((map__28611 == null)))?(((((map__28611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28611):map__28611);
var db = cljs.core.get.call(null,map__28611__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"commit-vote-success","commit-vote-success",-1280673318),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"commit-vote-error","commit-vote-error",1864062993),tcrfactory.ui.events.interceptors,(function (p__28613,args){
var map__28614 = p__28613;
var map__28614__$1 = ((((!((map__28614 == null)))?(((((map__28614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28614):map__28614);
var db = cljs.core.get.call(null,map__28614__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"commit-vote-error","commit-vote-error",1864062993),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"reveal-vote","reveal-vote",-170670781),tcrfactory.ui.events.interceptors,(function (p__28616,p__28617){
var map__28618 = p__28616;
var map__28618__$1 = ((((!((map__28618 == null)))?(((((map__28618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28618):map__28618);
var db = cljs.core.get.call(null,map__28618__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__28619 = p__28617;
var map__28622 = cljs.core.nth.call(null,vec__28619,(0),null);
var map__28622__$1 = ((((!((map__28622 == null)))?(((((map__28622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28622):map__28622);
var registry_entry = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"registry-entry","registry-entry",1035834759));
var vote_option = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"vote-option","vote-option",980731250));
var salt = cljs.core.get.call(null,map__28622__$1,new cljs.core.Keyword(null,"salt","salt",-587171712));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.web3-tx.events","send-tx","district.ui.web3-tx.events/send-tx",-1958850483),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"instance","instance",-2121349050),district.ui.smart_contracts.queries.instance.call(null,db,new cljs.core.Keyword(null,"registry-entry","registry-entry",1035834759),registry_entry),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"reveal-vote","reveal-vote",-170670781),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tcrfactory.shared.contract.registry_entry.vote_option__GT_num.call(null,vote_option),salt], null),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),district.ui.web3_accounts.queries.active_account.call(null,db),new cljs.core.Keyword(null,"gas","gas",-139961463),(3000000)], null),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reveal-vote-success","reveal-vote-success",1060373229)], null),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reveal-vote-error","reveal-vote-error",1589086669)], null),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reveal-vote-error","reveal-vote-error",1589086669)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"reveal-vote-success","reveal-vote-success",1060373229),tcrfactory.ui.events.interceptors,(function (p__28625,args){
var map__28626 = p__28625;
var map__28626__$1 = ((((!((map__28626 == null)))?(((((map__28626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28626):map__28626);
var db = cljs.core.get.call(null,map__28626__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"reveal-vote-success","reveal-vote-success",1060373229),args);

return null;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"reveal-vote-error","reveal-vote-error",1589086669),tcrfactory.ui.events.interceptors,(function (p__28628,args){
var map__28629 = p__28628;
var map__28629__$1 = ((((!((map__28629 == null)))?(((((map__28629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28629):map__28629);
var db = cljs.core.get.call(null,map__28629__$1,new cljs.core.Keyword(null,"db","db",993250759));
re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"reveal-vote-error","reveal-vote-error",1589086669),args);

return null;
}));

//# sourceMappingURL=events.js.map?rel=1526799914101
