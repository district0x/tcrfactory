// Compiled by ClojureScript 1.10.238 {}
goog.provide('district0x.re_frame.web3_fx');
goog.require('cljs.core');
goog.require('cljs_web3.eth');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
district0x.re_frame.web3_fx._STAR_listeners_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
district0x.re_frame.web3_fx.block_filter_opts_QMARK_ = (function district0x$re_frame$web3_fx$block_filter_opts_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) || (typeof x === 'string') || ((x == null)));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement.call(null,cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Symbol("district0x.re-frame.web3-fx","block-filter-opts?","district0x.re-frame.web3-fx/block-filter-opts?",-1491416411,null),district0x.re_frame.web3_fx.block_filter_opts_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement.call(null,cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","event-ids","district0x.re-frame.web3-fx/event-ids",171623322),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__32123_SHARP_){
return ((cljs.core.fn_QMARK_.call(null,p1__32123_SHARP_)) || ((p1__32123_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__32123_SHARP_ === 'string'));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__32124){
return cljs.core.coll_QMARK_.call(null,G__32124);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("district0x.re-frame.web3-fx","contract-fn-arg","district0x.re-frame.web3-fx/contract-fn-arg",-1779842421))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196),new cljs.core.Keyword("district0x.re-frame.web3-fx","dispatch","district0x.re-frame.web3-fx/dispatch",2099750196));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","event-id","district0x.re-frame.web3-fx/event-id",2011956357),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.nilable_impl.call(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Symbol("district0x.re-frame.web3-fx","block-filter-opts?","district0x.re-frame.web3-fx/block-filter-opts?",-1491416411,null),district0x.re_frame.web3_fx.block_filter_opts_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hashes","district0x.re-frame.web3-fx/tx-hashes",89248703),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__32125){
return cljs.core.coll_QMARK_.call(null,G__32125);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null)))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32127){
return cljs.core.map_QMARK_.call(null,G__32127);
})], null),(function (G__32127){
return cljs.core.map_QMARK_.call(null,G__32127);
}),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__32126){
return cljs.core.coll_QMARK_.call(null,G__32126);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","args","district0x.re-frame.web3-fx/args",-119160355),new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-opts","district0x.re-frame.web3-fx/tx-opts",-2112810848),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash","district0x.re-frame.web3-fx/on-tx-hash",-1256571327),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-hash-error","district0x.re-frame.web3-fx/on-tx-hash-error",267549671),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","fn","district0x.re-frame.web3-fx/fn",-1887505567),new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441)], null))))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","call","district0x.re-frame.web3-fx/call",-644577399),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32128){
return cljs.core.map_QMARK_.call(null,G__32128);
}),(function (G__32128){
return cljs.core.contains_QMARK_.call(null,G__32128,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__32128){
return cljs.core.contains_QMARK_.call(null,G__32128,new cljs.core.Keyword(null,"fns","fns",1185138786));
})], null),(function (G__32128){
return ((cljs.core.map_QMARK_.call(null,G__32128)) && (cljs.core.contains_QMARK_.call(null,G__32128,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_.call(null,G__32128,new cljs.core.Keyword(null,"fns","fns",1185138786))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","fns","district0x.re-frame.web3-fx/fns",558354789)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"fns","fns",1185138786)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"fns","fns",1185138786)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null)))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32130){
return cljs.core.map_QMARK_.call(null,G__32130);
}),(function (G__32130){
return cljs.core.contains_QMARK_.call(null,G__32130,new cljs.core.Keyword(null,"instance","instance",-2121349050));
}),(function (G__32130){
return cljs.core.contains_QMARK_.call(null,G__32130,new cljs.core.Keyword(null,"event","event",301435442));
})], null),(function (G__32130){
return ((cljs.core.map_QMARK_.call(null,G__32130)) && (cljs.core.contains_QMARK_.call(null,G__32130,new cljs.core.Keyword(null,"instance","instance",-2121349050))) && (cljs.core.contains_QMARK_.call(null,G__32130,new cljs.core.Keyword(null,"event","event",301435442))));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"instance","instance",-2121349050))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"event","event",301435442)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__32129){
return cljs.core.coll_QMARK_.call(null,G__32129);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","instance","district0x.re-frame.web3-fx/instance",688922441),new cljs.core.Keyword("district0x.re-frame.web3-fx","event","district0x.re-frame.web3-fx/event",-1226065613)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857),new cljs.core.Keyword("district0x.re-frame.web3-fx","event-filter-opts","district0x.re-frame.web3-fx/event-filter-opts",-1195151124),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387)], null))))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-events","district0x.re-frame.web3-fx/watch-events",-1055414721),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32131){
return cljs.core.map_QMARK_.call(null,G__32131);
}),(function (G__32131){
return cljs.core.contains_QMARK_.call(null,G__32131,new cljs.core.Keyword(null,"events","events",1792552201));
})], null),(function (G__32131){
return ((cljs.core.map_QMARK_.call(null,G__32131)) && (cljs.core.contains_QMARK_.call(null,G__32131,new cljs.core.Keyword(null,"events","events",1792552201))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","events","district0x.re-frame.web3-fx/events",-2058694130)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"events","events",1792552201)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32133){
return cljs.core.map_QMARK_.call(null,G__32133);
}),(function (G__32133){
return cljs.core.contains_QMARK_.call(null,G__32133,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
})], null),(function (G__32133){
return ((cljs.core.map_QMARK_.call(null,G__32133)) && (cljs.core.contains_QMARK_.call(null,G__32133,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200))));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__32132){
return cljs.core.coll_QMARK_.call(null,G__32132);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","tx-hash","district0x.re-frame.web3-fx/tx-hash",122755499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-receipt","district0x.re-frame.web3-fx/on-tx-receipt",692783820),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-success","district0x.re-frame.web3-fx/on-tx-success",-915344735),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-tx-error","district0x.re-frame.web3-fx/on-tx-error",-869700419),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-transactions","district0x.re-frame.web3-fx/watch-transactions",-1867553294),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32134){
return cljs.core.map_QMARK_.call(null,G__32134);
}),(function (G__32134){
return cljs.core.contains_QMARK_.call(null,G__32134,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__32134){
return cljs.core.contains_QMARK_.call(null,G__32134,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
})], null),(function (G__32134){
return ((cljs.core.map_QMARK_.call(null,G__32134)) && (cljs.core.contains_QMARK_.call(null,G__32134,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_.call(null,G__32134,new cljs.core.Keyword(null,"transactions","transactions",-1425846118))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","transactions","district0x.re-frame.web3-fx/transactions",-2121303651)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transactions","transactions",-1425846118)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)))),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("s","nilable","s/nilable",-812128520,null),cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))),cljs.spec.alpha.nilable_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32136){
return cljs.core.map_QMARK_.call(null,G__32136);
}),(function (G__32136){
return cljs.core.contains_QMARK_.call(null,G__32136,new cljs.core.Keyword(null,"address","address",559499426));
}),(function (G__32136){
return cljs.core.contains_QMARK_.call(null,G__32136,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
})], null),(function (G__32136){
return ((cljs.core.map_QMARK_.call(null,G__32136)) && (cljs.core.contains_QMARK_.call(null,G__32136,new cljs.core.Keyword(null,"address","address",559499426))) && (cljs.core.contains_QMARK_.call(null,G__32136,new cljs.core.Keyword(null,"on-success","on-success",1786904109))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"watch?","watch?",-1976903168),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"address","address",559499426))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109)))], null),null])),null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__32135){
return cljs.core.coll_QMARK_.call(null,G__32135);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","address","district0x.re-frame.web3-fx/address",-2004050011),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","watch?","district0x.re-frame.web3-fx/watch?",528384771),new cljs.core.Keyword("district0x.re-frame.web3-fx","id","district0x.re-frame.web3-fx/id",-741682857)], null))))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","get-balances","district0x.re-frame.web3-fx/get-balances",1560627875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32137){
return cljs.core.map_QMARK_.call(null,G__32137);
}),(function (G__32137){
return cljs.core.contains_QMARK_.call(null,G__32137,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
}),(function (G__32137){
return cljs.core.contains_QMARK_.call(null,G__32137,new cljs.core.Keyword(null,"web3","web3",-879451640));
})], null),(function (G__32137){
return ((cljs.core.map_QMARK_.call(null,G__32137)) && (cljs.core.contains_QMARK_.call(null,G__32137,new cljs.core.Keyword(null,"addresses","addresses",-559529694))) && (cljs.core.contains_QMARK_.call(null,G__32137,new cljs.core.Keyword(null,"web3","web3",-879451640))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","addresses","district0x.re-frame.web3-fx/addresses",-634807771),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addresses","addresses",-559529694),new cljs.core.Keyword(null,"web3","web3",-879451640)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"addresses","addresses",-559529694))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","listen","district0x.re-frame.web3-fx/listen",-1948149550),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__32138){
return cljs.core.map_QMARK_.call(null,G__32138);
}),(function (G__32138){
return cljs.core.contains_QMARK_.call(null,G__32138,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
}),(function (G__32138){
return cljs.core.contains_QMARK_.call(null,G__32138,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
}),(function (G__32138){
return cljs.core.contains_QMARK_.call(null,G__32138,new cljs.core.Keyword(null,"web3","web3",-879451640));
}),(function (G__32138){
return cljs.core.contains_QMARK_.call(null,G__32138,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
})], null),(function (G__32138){
return ((cljs.core.map_QMARK_.call(null,G__32138)) && (cljs.core.contains_QMARK_.call(null,G__32138,new cljs.core.Keyword(null,"on-success","on-success",1786904109))) && (cljs.core.contains_QMARK_.call(null,G__32138,new cljs.core.Keyword(null,"on-error","on-error",1728533530))) && (cljs.core.contains_QMARK_.call(null,G__32138,new cljs.core.Keyword(null,"web3","web3",-879451640))) && (cljs.core.contains_QMARK_.call(null,G__32138,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district0x.re-frame.web3-fx","on-success","district0x.re-frame.web3-fx/on-success",1427519280),new cljs.core.Keyword("district0x.re-frame.web3-fx","on-error","district0x.re-frame.web3-fx/on-error",-998556387),new cljs.core.Keyword("district0x.re-frame.web3-fx","web3","district0x.re-frame.web3-fx/web3",-1442805499),new cljs.core.Keyword("district0x.re-frame.web3-fx","block-filter-opts","district0x.re-frame.web3-fx/block-filter-opts",1054601333)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"web3","web3",-879451640),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-success","on-success",1786904109))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-error","on-error",1728533530))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"web3","web3",-879451640))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672)))], null),null])));
district0x.re_frame.web3_fx.dispach_fn = (function district0x$re_frame$web3_fx$dispach_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32142 = arguments.length;
var i__4500__auto___32143 = (0);
while(true){
if((i__4500__auto___32143 < len__4499__auto___32142)){
args__4502__auto__.push((arguments[i__4500__auto___32143]));

var G__32144 = (i__4500__auto___32143 + (1));
i__4500__auto___32143 = G__32144;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return district0x.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

district0x.re_frame.web3_fx.dispach_fn.cljs$core$IFn$_invoke$arity$variadic = (function (on_success,on_error,args){
return (function (err,res){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_error,cljs.core.cons.call(null,err,args))));
} else {
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_success,cljs.core.cons.call(null,res,args))));
}
});
});

district0x.re_frame.web3_fx.dispach_fn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
district0x.re_frame.web3_fx.dispach_fn.cljs$lang$applyTo = (function (seq32139){
var G__32140 = cljs.core.first.call(null,seq32139);
var seq32139__$1 = cljs.core.next.call(null,seq32139);
var G__32141 = cljs.core.first.call(null,seq32139__$1);
var seq32139__$2 = cljs.core.next.call(null,seq32139__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32140,G__32141,seq32139__$2);
});

district0x.re_frame.web3_fx.contract_event_dispach_fn = (function district0x$re_frame$web3_fx$contract_event_dispach_fn(on_success,on_error){
return (function (err,res){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_error,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null))));
} else {
return re_frame.core.dispatch.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,on_success,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(res),res], null))));
}
});
});
district0x.re_frame.web3_fx.stop_listener_BANG_ = (function district0x$re_frame$web3_fx$stop_listener_BANG_(id){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,district0x.re_frame.web3_fx._STAR_listeners_STAR_),id);
if(cljs.core.truth_(temp__5457__auto__)){
var filters = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.dissoc,id);

var seq__32145 = cljs.core.seq.call(null,filters);
var chunk__32146 = null;
var count__32147 = (0);
var i__32148 = (0);
while(true){
if((i__32148 < count__32147)){
var filter = cljs.core._nth.call(null,chunk__32146,i__32148);
cljs_web3.eth.stop_watching_BANG_.call(null,filter,((function (seq__32145,chunk__32146,count__32147,i__32148,filter,filters,temp__5457__auto__){
return (function (){
return null;
});})(seq__32145,chunk__32146,count__32147,i__32148,filter,filters,temp__5457__auto__))
);


var G__32149 = seq__32145;
var G__32150 = chunk__32146;
var G__32151 = count__32147;
var G__32152 = (i__32148 + (1));
seq__32145 = G__32149;
chunk__32146 = G__32150;
count__32147 = G__32151;
i__32148 = G__32152;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32145);
if(temp__5457__auto____$1){
var seq__32145__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32145__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32145__$1);
var G__32153 = cljs.core.chunk_rest.call(null,seq__32145__$1);
var G__32154 = c__4319__auto__;
var G__32155 = cljs.core.count.call(null,c__4319__auto__);
var G__32156 = (0);
seq__32145 = G__32153;
chunk__32146 = G__32154;
count__32147 = G__32155;
i__32148 = G__32156;
continue;
} else {
var filter = cljs.core.first.call(null,seq__32145__$1);
cljs_web3.eth.stop_watching_BANG_.call(null,filter,((function (seq__32145,chunk__32146,count__32147,i__32148,filter,seq__32145__$1,temp__5457__auto____$1,filters,temp__5457__auto__){
return (function (){
return null;
});})(seq__32145,chunk__32146,count__32147,i__32148,filter,seq__32145__$1,temp__5457__auto____$1,filters,temp__5457__auto__))
);


var G__32157 = cljs.core.next.call(null,seq__32145__$1);
var G__32158 = null;
var G__32159 = (0);
var G__32160 = (0);
seq__32145 = G__32157;
chunk__32146 = G__32158;
count__32147 = G__32159;
i__32148 = G__32160;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
district0x.re_frame.web3_fx.start_listener_BANG_ = (function district0x$re_frame$web3_fx$start_listener_BANG_(p__32161){
var map__32162 = p__32161;
var map__32162__$1 = ((((!((map__32162 == null)))?(((((map__32162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32162):map__32162);
var web3 = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_filter_opts = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var callback = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var id__$1 = (cljs.core.truth_(id)?id:callback);
district0x.re_frame.web3_fx.stop_listener_BANG_.call(null,id__$1);

cljs.core.swap_BANG_.call(null,district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.update,id__$1,cljs.core.conj,cljs_web3.eth.filter.call(null,web3,block_filter_opts,callback));

return id__$1;
});
district0x.re_frame.web3_fx.start_event_listener_BANG_ = (function district0x$re_frame$web3_fx$start_event_listener_BANG_(p__32164){
var map__32165 = p__32164;
var map__32165__$1 = ((((!((map__32165 == null)))?(((((map__32165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32165):map__32165);
var instance = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event_filter_opts = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var block_filter_opts = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var callback = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var id__$1 = (cljs.core.truth_(id)?id:callback);
district0x.re_frame.web3_fx.stop_listener_BANG_.call(null,id__$1);

cljs.core.swap_BANG_.call(null,district0x.re_frame.web3_fx._STAR_listeners_STAR_,cljs.core.update,id__$1,cljs.core.conj,cljs_web3.eth.contract_call.call(null,instance,event,event_filter_opts,block_filter_opts,callback));

return id__$1;
});
district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn = (function district0x$re_frame$web3_fx$dispatch_on_tx_receipt_fn(p__32169){
var map__32170 = p__32169;
var map__32170__$1 = ((((!((map__32170 == null)))?(((((map__32170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32170):map__32170);
var on_tx_success = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_error = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var tx_hash = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var web3 = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return ((function (map__32170,map__32170__$1,on_tx_success,on_tx_receipt,on_tx_error,tx_hash,web3,id){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_transaction_receipt.call(null,web3,tx_hash,((function (map__32170,map__32170__$1,on_tx_success,on_tx_receipt,on_tx_error,tx_hash,web3,id){
return (function (_,receipt){
if(cljs.core.truth_(new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(receipt))){
district0x.re_frame.web3_fx.stop_listener_BANG_.call(null,id);

if(cljs.core.truth_(on_tx_receipt)){
re_frame.core.dispatch.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,on_tx_receipt),receipt));
} else {
}

var pred__32172 = ((function (map__32170,map__32170__$1,on_tx_success,on_tx_receipt,on_tx_error,tx_hash,web3,id){
return (function (p1__32167_SHARP_,p2__32168_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__32167_SHARP_,p2__32168_SHARP_);
});})(map__32170,map__32170__$1,on_tx_success,on_tx_receipt,on_tx_error,tx_hash,web3,id))
;
var expr__32173 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(receipt);
if(cljs.core.truth_(pred__32172.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,"0x00",null,"0x0",null], null), null),expr__32173))){
if(cljs.core.truth_(on_tx_error)){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,on_tx_error),receipt));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__32172.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,"0x1",null,"0x01",null], null), null),expr__32173))){
if(cljs.core.truth_(on_tx_success)){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,on_tx_success),receipt));
} else {
return null;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__32173)].join('')));
}
}
} else {
return null;
}
});})(map__32170,map__32170__$1,on_tx_success,on_tx_receipt,on_tx_error,tx_hash,web3,id))
);
}
});
;})(map__32170,map__32170__$1,on_tx_success,on_tx_receipt,on_tx_error,tx_hash,web3,id))
});
district0x.re_frame.web3_fx.contract_state_call_callback = (function district0x$re_frame$web3_fx$contract_state_call_callback(p__32175){
var map__32176 = p__32175;
var map__32176__$1 = ((((!((map__32176 == null)))?(((((map__32176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32176):map__32176);
var web3 = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var on_tx_hash = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_tx_hash_error = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_receipt = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_error = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var on_tx_success = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
return ((function (map__32176,map__32176__$1,web3,on_tx_hash,on_tx_hash_error,on_tx_receipt,on_tx_error,on_tx_success){
return (function (err,tx_hash){
if(cljs.core.truth_(err)){
if(cljs.core.truth_(on_tx_hash_error)){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,on_tx_hash_error),err));
} else {
return null;
}
} else {
var listener_id = cljs.core.rand.call(null,(9999999));
if(cljs.core.truth_(on_tx_hash)){
re_frame.core.dispatch.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,on_tx_hash),tx_hash));
} else {
}

return district0x.re_frame.web3_fx.start_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));
}
});
;})(map__32176,map__32176__$1,web3,on_tx_hash,on_tx_hash_error,on_tx_receipt,on_tx_error,on_tx_success))
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3","watch-events","web3/watch-events",-1449844963),(function (p__32178){
var map__32179 = p__32178;
var map__32179__$1 = ((((!((map__32179 == null)))?(((((map__32179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32179):map__32179);
var params = map__32179__$1;
var events = cljs.core.get.call(null,map__32179__$1,new cljs.core.Keyword(null,"events","events",1792552201));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-events","district0x.re-frame.web3-fx/watch-events",-1055414721),params);
} else {
}
} else {
}

var seq__32181 = cljs.core.seq.call(null,events);
var chunk__32182 = null;
var count__32183 = (0);
var i__32184 = (0);
while(true){
if((i__32184 < count__32183)){
var map__32185 = cljs.core._nth.call(null,chunk__32182,i__32184);
var map__32185__$1 = ((((!((map__32185 == null)))?(((((map__32185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32185):map__32185);
var id = cljs.core.get.call(null,map__32185__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.call(null,map__32185__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var block_filter_opts = cljs.core.get.call(null,map__32185__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var event_filter_opts = cljs.core.get.call(null,map__32185__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var on_success = cljs.core.get.call(null,map__32185__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__32185__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event = cljs.core.get.call(null,map__32185__$1,new cljs.core.Keyword(null,"event","event",301435442));
district0x.re_frame.web3_fx.start_event_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),event_filter_opts,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.contract_event_dispach_fn.call(null,on_success,on_error)], null));


var G__32189 = seq__32181;
var G__32190 = chunk__32182;
var G__32191 = count__32183;
var G__32192 = (i__32184 + (1));
seq__32181 = G__32189;
chunk__32182 = G__32190;
count__32183 = G__32191;
i__32184 = G__32192;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32181);
if(temp__5457__auto__){
var seq__32181__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32181__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32181__$1);
var G__32193 = cljs.core.chunk_rest.call(null,seq__32181__$1);
var G__32194 = c__4319__auto__;
var G__32195 = cljs.core.count.call(null,c__4319__auto__);
var G__32196 = (0);
seq__32181 = G__32193;
chunk__32182 = G__32194;
count__32183 = G__32195;
i__32184 = G__32196;
continue;
} else {
var map__32187 = cljs.core.first.call(null,seq__32181__$1);
var map__32187__$1 = ((((!((map__32187 == null)))?(((((map__32187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32187):map__32187);
var id = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var block_filter_opts = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var event_filter_opts = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439));
var on_success = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var event = cljs.core.get.call(null,map__32187__$1,new cljs.core.Keyword(null,"event","event",301435442));
district0x.re_frame.web3_fx.start_event_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),event_filter_opts,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.contract_event_dispach_fn.call(null,on_success,on_error)], null));


var G__32197 = cljs.core.next.call(null,seq__32181__$1);
var G__32198 = null;
var G__32199 = (0);
var G__32200 = (0);
seq__32181 = G__32197;
chunk__32182 = G__32198;
count__32183 = G__32199;
i__32184 = G__32200;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3","watch-transactions","web3/watch-transactions",-1296047084),(function (p__32201){
var map__32202 = p__32201;
var map__32202__$1 = ((((!((map__32202 == null)))?(((((map__32202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32202):map__32202);
var params = map__32202__$1;
var web3 = cljs.core.get.call(null,map__32202__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var transactions = cljs.core.get.call(null,map__32202__$1,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","watch-transactions","district0x.re-frame.web3-fx/watch-transactions",-1867553294),params);
} else {
}
} else {
}

var seq__32204 = cljs.core.seq.call(null,transactions);
var chunk__32205 = null;
var count__32206 = (0);
var i__32207 = (0);
while(true){
if((i__32207 < count__32206)){
var map__32208 = cljs.core._nth.call(null,chunk__32205,i__32207);
var map__32208__$1 = ((((!((map__32208 == null)))?(((((map__32208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32208):map__32208);
var tx_hash = cljs.core.get.call(null,map__32208__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var on_tx_receipt = cljs.core.get.call(null,map__32208__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success = cljs.core.get.call(null,map__32208__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_error = cljs.core.get.call(null,map__32208__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var id = cljs.core.get.call(null,map__32208__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var listener_id_32212 = (function (){var or__3922__auto__ = id;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.rand.call(null,(9999999));
}
})();
district0x.re_frame.web3_fx.start_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_32212,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_32212,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));


var G__32213 = seq__32204;
var G__32214 = chunk__32205;
var G__32215 = count__32206;
var G__32216 = (i__32207 + (1));
seq__32204 = G__32213;
chunk__32205 = G__32214;
count__32206 = G__32215;
i__32207 = G__32216;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32204);
if(temp__5457__auto__){
var seq__32204__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32204__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32204__$1);
var G__32217 = cljs.core.chunk_rest.call(null,seq__32204__$1);
var G__32218 = c__4319__auto__;
var G__32219 = cljs.core.count.call(null,c__4319__auto__);
var G__32220 = (0);
seq__32204 = G__32217;
chunk__32205 = G__32218;
count__32206 = G__32219;
i__32207 = G__32220;
continue;
} else {
var map__32210 = cljs.core.first.call(null,seq__32204__$1);
var map__32210__$1 = ((((!((map__32210 == null)))?(((((map__32210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32210):map__32210);
var tx_hash = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200));
var on_tx_receipt = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_tx_success = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_error = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var id = cljs.core.get.call(null,map__32210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var listener_id_32221 = (function (){var or__3922__auto__ = id;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.rand.call(null,(9999999));
}
})();
district0x.re_frame.web3_fx.start_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_32221,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispatch_on_tx_receipt_fn.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),listener_id_32221,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),tx_hash,new cljs.core.Keyword(null,"web3","web3",-879451640),web3], null))], null));


var G__32222 = cljs.core.next.call(null,seq__32204__$1);
var G__32223 = null;
var G__32224 = (0);
var G__32225 = (0);
seq__32204 = G__32222;
chunk__32205 = G__32223;
count__32206 = G__32224;
i__32207 = G__32225;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3","call","web3/call",-479653525),(function (p__32226){
var map__32227 = p__32226;
var map__32227__$1 = ((((!((map__32227 == null)))?(((((map__32227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32227):map__32227);
var params = map__32227__$1;
var web3 = cljs.core.get.call(null,map__32227__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var fns = cljs.core.get.call(null,map__32227__$1,new cljs.core.Keyword(null,"fns","fns",1185138786));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","call","district0x.re-frame.web3-fx/call",-644577399),params);
} else {
}
} else {
}

var seq__32229 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,fns));
var chunk__32230 = null;
var count__32231 = (0);
var i__32232 = (0);
while(true){
if((i__32232 < count__32231)){
var map__32233 = cljs.core._nth.call(null,chunk__32230,i__32232);
var map__32233__$1 = ((((!((map__32233 == null)))?(((((map__32233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32233):map__32233);
var args = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tx_opts = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var fn = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var on_tx_error = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var instance = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_tx_hash_error = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_success = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_success = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_tx_hash = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_error = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(instance)){
if(cljs.core.truth_(tx_opts)){
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.contract_state_call_callback.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),on_tx_hash,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),on_tx_hash_error,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error], null))], null)));
} else {
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null)));
}
} else {
cljs.core.apply.call(null,fn,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null)));
}


var G__32237 = seq__32229;
var G__32238 = chunk__32230;
var G__32239 = count__32231;
var G__32240 = (i__32232 + (1));
seq__32229 = G__32237;
chunk__32230 = G__32238;
count__32231 = G__32239;
i__32232 = G__32240;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32229);
if(temp__5457__auto__){
var seq__32229__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32229__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32229__$1);
var G__32241 = cljs.core.chunk_rest.call(null,seq__32229__$1);
var G__32242 = c__4319__auto__;
var G__32243 = cljs.core.count.call(null,c__4319__auto__);
var G__32244 = (0);
seq__32229 = G__32241;
chunk__32230 = G__32242;
count__32231 = G__32243;
i__32232 = G__32244;
continue;
} else {
var map__32235 = cljs.core.first.call(null,seq__32229__$1);
var map__32235__$1 = ((((!((map__32235 == null)))?(((((map__32235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32235):map__32235);
var args = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var tx_opts = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"tx-opts","tx-opts",1753016225));
var fn = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var on_tx_error = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852));
var instance = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var on_tx_hash_error = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922));
var on_tx_success = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272));
var on_tx_receipt = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197));
var on_success = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_tx_hash = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666));
var on_error = cljs.core.get.call(null,map__32235__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.core.truth_(instance)){
if(cljs.core.truth_(tx_opts)){
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_opts], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.contract_state_call_callback.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"on-tx-hash","on-tx-hash",-1483327666),on_tx_hash,new cljs.core.Keyword(null,"on-tx-hash-error","on-tx-hash-error",-161520922),on_tx_hash_error,new cljs.core.Keyword(null,"on-tx-receipt","on-tx-receipt",280949197),on_tx_receipt,new cljs.core.Keyword(null,"on-tx-success","on-tx-success",1626127272),on_tx_success,new cljs.core.Keyword(null,"on-tx-error","on-tx-error",1904038852),on_tx_error], null))], null)));
} else {
cljs.core.apply.call(null,cljs_web3.eth.contract_call,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance,fn], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null)));
}
} else {
cljs.core.apply.call(null,fn,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web3], null),args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null)));
}


var G__32245 = cljs.core.next.call(null,seq__32229__$1);
var G__32246 = null;
var G__32247 = (0);
var G__32248 = (0);
seq__32229 = G__32245;
chunk__32230 = G__32246;
count__32231 = G__32247;
i__32232 = G__32248;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3","get-balances","web3/get-balances",-152059131),(function (p__32249){
var map__32250 = p__32249;
var map__32250__$1 = ((((!((map__32250 == null)))?(((((map__32250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32250):map__32250);
var params = map__32250__$1;
var addresses = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"addresses","addresses",-559529694));
var web3 = cljs.core.get.call(null,map__32250__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","get-balances","district0x.re-frame.web3-fx/get-balances",1560627875),params);
} else {
}
} else {
}

var seq__32252 = cljs.core.seq.call(null,addresses);
var chunk__32253 = null;
var count__32254 = (0);
var i__32255 = (0);
while(true){
if((i__32255 < count__32254)){
var map__32256 = cljs.core._nth.call(null,chunk__32253,i__32255);
var map__32256__$1 = ((((!((map__32256 == null)))?(((((map__32256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32256):map__32256);
var address = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var watch_QMARK_ = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var instance = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not.call(null,instance)){
cljs_web3.eth.get_balance.call(null,web3,address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
} else {
cljs_web3.eth.contract_call.call(null,instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
}

if(cljs.core.truth_((function (){var and__3911__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.seq.call(null,addresses);
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.not.call(null,instance)){
district0x.re_frame.web3_fx.start_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__32252,chunk__32253,count__32254,i__32255,map__32256,map__32256__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__32250,map__32250__$1,params,addresses,web3){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_balance.call(null,web3,address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
}
});})(seq__32252,chunk__32253,count__32254,i__32255,map__32256,map__32256__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__32250,map__32250__$1,params,addresses,web3))
], null));
} else {
district0x.re_frame.web3_fx.start_event_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__32252,chunk__32253,count__32254,i__32255,map__32256,map__32256__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__32250,map__32250__$1,params,addresses,web3){
return (function (){
return cljs_web3.eth.contract_call.call(null,instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
});})(seq__32252,chunk__32253,count__32254,i__32255,map__32256,map__32256__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__32250,map__32250__$1,params,addresses,web3))
], null));

district0x.re_frame.web3_fx.start_event_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__32252,chunk__32253,count__32254,i__32255,map__32256,map__32256__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__32250,map__32250__$1,params,addresses,web3){
return (function (){
return cljs_web3.eth.contract_call.call(null,instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
});})(seq__32252,chunk__32253,count__32254,i__32255,map__32256,map__32256__$1,address,on_success,on_error,watch_QMARK_,instance,id,map__32250,map__32250__$1,params,addresses,web3))
], null));
}
} else {
}


var G__32260 = seq__32252;
var G__32261 = chunk__32253;
var G__32262 = count__32254;
var G__32263 = (i__32255 + (1));
seq__32252 = G__32260;
chunk__32253 = G__32261;
count__32254 = G__32262;
i__32255 = G__32263;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32252);
if(temp__5457__auto__){
var seq__32252__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32252__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32252__$1);
var G__32264 = cljs.core.chunk_rest.call(null,seq__32252__$1);
var G__32265 = c__4319__auto__;
var G__32266 = cljs.core.count.call(null,c__4319__auto__);
var G__32267 = (0);
seq__32252 = G__32264;
chunk__32253 = G__32265;
count__32254 = G__32266;
i__32255 = G__32267;
continue;
} else {
var map__32258 = cljs.core.first.call(null,seq__32252__$1);
var map__32258__$1 = ((((!((map__32258 == null)))?(((((map__32258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32258):map__32258);
var address = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"address","address",559499426));
var on_success = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var watch_QMARK_ = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"watch?","watch?",-1976903168));
var instance = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
var id = cljs.core.get.call(null,map__32258__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.not.call(null,instance)){
cljs_web3.eth.get_balance.call(null,web3,address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
} else {
cljs_web3.eth.contract_call.call(null,instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
}

if(cljs.core.truth_((function (){var and__3911__auto__ = watch_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.seq.call(null,addresses);
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.not.call(null,instance)){
district0x.re_frame.web3_fx.start_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__32252,chunk__32253,count__32254,i__32255,map__32258,map__32258__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__32252__$1,temp__5457__auto__,map__32250,map__32250__$1,params,addresses,web3){
return (function (err){
if(cljs.core.truth_(err)){
return null;
} else {
return cljs_web3.eth.get_balance.call(null,web3,address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
}
});})(seq__32252,chunk__32253,count__32254,i__32255,map__32258,map__32258__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__32252__$1,temp__5457__auto__,map__32250,map__32250__$1,params,addresses,web3))
], null));
} else {
district0x.re_frame.web3_fx.start_event_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__32252,chunk__32253,count__32254,i__32255,map__32258,map__32258__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__32252__$1,temp__5457__auto__,map__32250,map__32250__$1,params,addresses,web3){
return (function (){
return cljs_web3.eth.contract_call.call(null,instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
});})(seq__32252,chunk__32253,count__32254,i__32255,map__32258,map__32258__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__32252__$1,temp__5457__auto__,map__32250,map__32250__$1,params,addresses,web3))
], null));

district0x.re_frame.web3_fx.start_event_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"instance","instance",-2121349050),instance,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"Transfer","Transfer",1300822108),new cljs.core.Keyword(null,"event-filter-opts","event-filter-opts",2125928439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),address], null),new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),"latest",new cljs.core.Keyword(null,"callback","callback",-705136228),((function (seq__32252,chunk__32253,count__32254,i__32255,map__32258,map__32258__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__32252__$1,temp__5457__auto__,map__32250,map__32250__$1,params,addresses,web3){
return (function (){
return cljs_web3.eth.contract_call.call(null,instance,new cljs.core.Keyword(null,"balance-of","balance-of",-1311809266),address,district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error));
});})(seq__32252,chunk__32253,count__32254,i__32255,map__32258,map__32258__$1,address,on_success,on_error,watch_QMARK_,instance,id,seq__32252__$1,temp__5457__auto__,map__32250,map__32250__$1,params,addresses,web3))
], null));
}
} else {
}


var G__32268 = cljs.core.next.call(null,seq__32252__$1);
var G__32269 = null;
var G__32270 = (0);
var G__32271 = (0);
seq__32252 = G__32268;
chunk__32253 = G__32269;
count__32254 = G__32270;
i__32255 = G__32271;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3","watch-blocks","web3/watch-blocks",98499474),(function (p__32272){
var map__32273 = p__32272;
var map__32273__$1 = ((((!((map__32273 == null)))?(((((map__32273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32273):map__32273);
var config = map__32273__$1;
var web3 = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"web3","web3",-879451640));
var id = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var block_filter_opts = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672));
var on_success = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__32273__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("district0x.re-frame.web3-fx","listen","district0x.re-frame.web3-fx/listen",-1948149550),config);
} else {
}
} else {
}

return district0x.re_frame.web3_fx.start_listener_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"web3","web3",-879451640),web3,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"block-filter-opts","block-filter-opts",745527672),block_filter_opts,new cljs.core.Keyword(null,"callback","callback",-705136228),district0x.re_frame.web3_fx.dispach_fn.call(null,on_success,on_error)], null));
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3","stop-watching","web3/stop-watching",-1379727666),(function (p__32275){
var map__32276 = p__32275;
var map__32276__$1 = ((((!((map__32276 == null)))?(((((map__32276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32276):map__32276);
var ids = cljs.core.get.call(null,map__32276__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var seq__32278 = cljs.core.seq.call(null,ids);
var chunk__32279 = null;
var count__32280 = (0);
var i__32281 = (0);
while(true){
if((i__32281 < count__32280)){
var id = cljs.core._nth.call(null,chunk__32279,i__32281);
district0x.re_frame.web3_fx.stop_listener_BANG_.call(null,id);


var G__32282 = seq__32278;
var G__32283 = chunk__32279;
var G__32284 = count__32280;
var G__32285 = (i__32281 + (1));
seq__32278 = G__32282;
chunk__32279 = G__32283;
count__32280 = G__32284;
i__32281 = G__32285;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32278);
if(temp__5457__auto__){
var seq__32278__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32278__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32278__$1);
var G__32286 = cljs.core.chunk_rest.call(null,seq__32278__$1);
var G__32287 = c__4319__auto__;
var G__32288 = cljs.core.count.call(null,c__4319__auto__);
var G__32289 = (0);
seq__32278 = G__32286;
chunk__32279 = G__32287;
count__32280 = G__32288;
i__32281 = G__32289;
continue;
} else {
var id = cljs.core.first.call(null,seq__32278__$1);
district0x.re_frame.web3_fx.stop_listener_BANG_.call(null,id);


var G__32290 = cljs.core.next.call(null,seq__32278__$1);
var G__32291 = null;
var G__32292 = (0);
var G__32293 = (0);
seq__32278 = G__32290;
chunk__32279 = G__32291;
count__32280 = G__32292;
i__32281 = G__32293;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("web3","stop-watching-all","web3/stop-watching-all",-2047858581),(function (){
var seq__32294 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,district0x.re_frame.web3_fx._STAR_listeners_STAR_)));
var chunk__32295 = null;
var count__32296 = (0);
var i__32297 = (0);
while(true){
if((i__32297 < count__32296)){
var id = cljs.core._nth.call(null,chunk__32295,i__32297);
district0x.re_frame.web3_fx.stop_listener_BANG_.call(null,id);


var G__32298 = seq__32294;
var G__32299 = chunk__32295;
var G__32300 = count__32296;
var G__32301 = (i__32297 + (1));
seq__32294 = G__32298;
chunk__32295 = G__32299;
count__32296 = G__32300;
i__32297 = G__32301;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32294);
if(temp__5457__auto__){
var seq__32294__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32294__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32294__$1);
var G__32302 = cljs.core.chunk_rest.call(null,seq__32294__$1);
var G__32303 = c__4319__auto__;
var G__32304 = cljs.core.count.call(null,c__4319__auto__);
var G__32305 = (0);
seq__32294 = G__32302;
chunk__32295 = G__32303;
count__32296 = G__32304;
i__32297 = G__32305;
continue;
} else {
var id = cljs.core.first.call(null,seq__32294__$1);
district0x.re_frame.web3_fx.stop_listener_BANG_.call(null,id);


var G__32306 = cljs.core.next.call(null,seq__32294__$1);
var G__32307 = null;
var G__32308 = (0);
var G__32309 = (0);
seq__32294 = G__32306;
chunk__32295 = G__32307;
count__32296 = G__32308;
i__32297 = G__32309;
continue;
}
} else {
return null;
}
}
break;
}
}));

//# sourceMappingURL=web3_fx.js.map?rel=1526705066585
