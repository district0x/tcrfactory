// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.router.subs');
goog.require('cljs.core');
goog.require('district.ui.router.queries');
goog.require('re_frame.core');
district.ui.router.subs.sub_fn = (function district$ui$router$subs$sub_fn(query_fn){
return (function (db,p__22796){
var vec__22797 = p__22796;
var seq__22798 = cljs.core.seq.call(null,vec__22797);
var first__22799 = cljs.core.first.call(null,seq__22798);
var seq__22798__$1 = cljs.core.next.call(null,seq__22798);
var _ = first__22799;
var args = seq__22798__$1;
return cljs.core.apply.call(null,query_fn,db,args);
});
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.router.subs","active-page","district.ui.router.subs/active-page",-1052425068),district.ui.router.queries.active_page);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.router.subs","active-page-name","district.ui.router.subs/active-page-name",1993836981),district.ui.router.queries.active_page_name);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.router.subs","active-page-params","district.ui.router.subs/active-page-params",628971686),district.ui.router.queries.active_page_params);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.router.subs","active-page-query","district.ui.router.subs/active-page-query",-907829037),district.ui.router.queries.active_page_query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.router.subs","resolve","district.ui.router.subs/resolve",-222464164),district.ui.router.subs.sub_fn.call(null,district.ui.router.queries.resolve));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.router.subs","match","district.ui.router.subs/match",-1526026020),district.ui.router.subs.sub_fn.call(null,district.ui.router.queries.match));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.router.subs","bide-router","district.ui.router.subs/bide-router",-1351017988),district.ui.router.queries.bide_router);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("district.ui.router.subs","html5?","district.ui.router.subs/html5?",1880401677),district.ui.router.queries.html5_QMARK_);

//# sourceMappingURL=subs.js.map?rel=1526715393695
