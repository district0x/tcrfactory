// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.window_focus.queries');
goog.require('cljs.core');
district.ui.window_focus.queries.focused_QMARK_ = (function district$ui$window_focus$queries$focused_QMARK_(db){
return new cljs.core.Keyword(null,"focused?","focused?",-1922723333).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"district.ui.window-focus","district.ui.window-focus",-1732053862).cljs$core$IFn$_invoke$arity$1(db));
});
district.ui.window_focus.queries.assoc_focused = (function district$ui$window_focus$queries$assoc_focused(db,focused_QMARK_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"district.ui.window-focus","district.ui.window-focus",-1732053862),new cljs.core.Keyword(null,"focused?","focused?",-1922723333)], null),focused_QMARK_);
});
district.ui.window_focus.queries.dissoc_window_focus = (function district$ui$window_focus$queries$dissoc_window_focus(db){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"district.ui.window-focus","district.ui.window-focus",-1732053862));
});

//# sourceMappingURL=queries.js.map?rel=1526705067759
