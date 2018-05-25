// Compiled by ClojureScript 1.10.238 {}
goog.provide('tcrfactory.ui.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('district.ui.component.router');
goog.require('district.ui.graphql');
goog.require('district.ui.notification');
goog.require('district.ui.now');
goog.require('district.ui.reagent_render');
goog.require('district.ui.router_google_analytics');
goog.require('district.ui.router');
goog.require('district.ui.smart_contracts');
goog.require('district.ui.web3_account_balances');
goog.require('district.ui.web3_accounts');
goog.require('district.ui.web3_balances');
goog.require('district.ui.web3_sync_now');
goog.require('district.ui.web3_tx_id');
goog.require('district.ui.web3_tx_log');
goog.require('district.ui.web3_tx');
goog.require('district.ui.web3');
goog.require('district.ui.window_size');
goog.require('mount.core');
goog.require('print.foo');
goog.require('tcrfactory.shared.graphql_schema');
goog.require('tcrfactory.shared.routes');
goog.require('tcrfactory.shared.smart_contracts');
goog.require('tcrfactory.ui.component.create_registry');
goog.require('tcrfactory.ui.component.home');
goog.require('tcrfactory.ui.component.registry_detail');
goog.require('tcrfactory.ui.component.search_registries');
goog.require('tcrfactory.ui.events');
tcrfactory.ui.core.debug_QMARK_ = goog.DEBUG;
tcrfactory.ui.core.init = (function tcrfactory$ui$core$init(){
cljs.spec.alpha.check_asserts.call(null,tcrfactory.ui.core.debug_QMARK_);

cljs.core.enable_console_print_BANG_.call(null);

return mount.core.start.call(null,mount.core.with_args.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:8549"], null),new cljs.core.Keyword(null,"smart-contracts","smart-contracts",1766679213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contracts","contracts",905357673),tcrfactory.shared.smart_contracts.smart_contracts], null),new cljs.core.Keyword(null,"web3-tx-log","web3-tx-log",50614840),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open-on-tx-hash?","open-on-tx-hash?",-1349756795),true,new cljs.core.Keyword(null,"tx-costs-currencies","tx-costs-currencies",-2004931670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"USD","USD",-801544589)], null)], null),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"app",new cljs.core.Keyword(null,"component-var","component-var",-90867051),new cljs.core.Var(function(){return district.ui.component.router.router;},new cljs.core.Symbol("district.ui.component.router","router","district.ui.component.router/router",-1999140551,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"district.ui.component.router","district.ui.component.router",1970513092,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),"resources/public/js/compiled/out/district/ui/component/router.cljs",(13),(1),(7),(7),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(district.ui.component.router.router)?district.ui.component.router.router.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"routes","routes",457900162),tcrfactory.shared.routes.routes,new cljs.core.Keyword(null,"default-route","default-route",-1491022475),new cljs.core.Keyword("route","home","route/home",-250934710),new cljs.core.Keyword(null,"html5?","html5?",-1008298421),false], null),new cljs.core.Keyword(null,"router-google-analytics","router-google-analytics",808957129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),!(tcrfactory.ui.core.debug_QMARK_)], null),new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),tcrfactory.shared.graphql_schema.graphql_schema,new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:6400/graphql"], null)], null)));
});
goog.exportSymbol('tcrfactory.ui.core.init', tcrfactory.ui.core.init);

//# sourceMappingURL=core.js.map?rel=1526901180280
