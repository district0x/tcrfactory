// Compiled by ClojureScript 1.10.238 {}
goog.provide('print.foo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
print.foo._STAR_print_fn_STAR_ = cljs.pprint.pprint;
print.foo._STAR_enabled_STAR_ = true;
/**
 * Turns any one binding arg (which may be a destructuring binding) into a vector
 *   where the left elem is the arg with a possible :as added to it.
 *   And the rght side is the symbol referring to the arg itself.
 */
print.foo.single_destructuring_arg__GT_form_PLUS_name = (function print$foo$single_destructuring_arg__GT_form_PLUS_name(arg_form){
var as_symbol = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"symbol-for-destructured-arg","symbol-for-destructured-arg",-470881179,null));
var snd_to_last_is_as_QMARK_ = ((function (as_symbol){
return (function (p1__27601_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.second.call(null,cljs.core.reverse.call(null,p1__27601_SHARP_)));
});})(as_symbol))
;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.vector_QMARK_.call(null,arg_form);
if(and__3911__auto__){
return snd_to_last_is_as_QMARK_.call(null,arg_form);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_form,cljs.core.last.call(null,arg_form)], null);
} else {
if(cljs.core.vector_QMARK_.call(null,arg_form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cljs.core.conj.call(null,arg_form,new cljs.core.Keyword(null,"as","as",1148689641)),as_symbol),as_symbol], null);
} else {
if(((cljs.core.map_QMARK_.call(null,arg_form)) && (cljs.core.contains_QMARK_.call(null,arg_form,new cljs.core.Keyword(null,"as","as",1148689641))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_form,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg_form)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg_form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,arg_form,new cljs.core.Keyword(null,"as","as",1148689641),as_symbol),as_symbol], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_form,arg_form], null);

}
}
}
}
});
print.foo.expand_arg = (function print$foo$expand_arg(arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
return cljs.core.first.call(null,print.foo.single_destructuring_arg__GT_form_PLUS_name.call(null,arg));
}
});
/**
 * Diagnostic tool for printing the result of evaluating an s-expression.
 * Any initial args over 1, are printed as strings, and generally used as a label.
 */
print.foo.print_and_return = (function print$foo$print_and_return(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27603 = arguments.length;
var i__4500__auto___27604 = (0);
while(true){
if((i__4500__auto___27604 < len__4499__auto___27603)){
args__4502__auto__.push((arguments[i__4500__auto___27604]));

var G__27605 = (i__4500__auto___27604 + (1));
i__4500__auto___27604 = G__27605;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return print.foo.print_and_return.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

print.foo.print_and_return.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(print.foo._STAR_enabled_STAR_){
if(cljs.core.seq.call(null,cljs.core.butlast.call(null,xs))){
cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,xs)));
} else {
}

print.foo._STAR_print_fn_STAR_.call(null,cljs.core.last.call(null,xs));
} else {
}

return cljs.core.last.call(null,xs);
});

print.foo.print_and_return.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
print.foo.print_and_return.cljs$lang$applyTo = (function (seq27602){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27602));
});

/**
 * Quicker-to-type version of `print-and-return` with " *** " appended to the front
 */
print.foo.tap = cljs.core.partial.call(null,print.foo.print_and_return," *** ");
print.foo.resolves_to_fn_QMARK_ = (function print$foo$resolves_to_fn_QMARK_(x){
return true;
});
if(typeof print.foo.parse_item !== 'undefined'){
} else {
print.foo.parse_item = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"print.foo","parse-item"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (x){
if(cljs.core.list_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((x instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,print.foo.resolves_to_fn_QMARK_.call(null,x))))){
return new cljs.core.Keyword(null,"sym","sym",-1444860305);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
if(typeof print.foo.parse_list !== 'undefined'){
} else {
print.foo.parse_list = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"print.foo","parse-list"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (p__27606){
var vec__27607 = p__27606;
var seq__27608 = cljs.core.seq.call(null,vec__27607);
var first__27609 = cljs.core.first.call(null,seq__27608);
var seq__27608__$1 = cljs.core.next.call(null,seq__27608);
var sym = first__27609;
var _ = seq__27608__$1;
return sym;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"list","list",765357683),(function (lst){
return print.foo.parse_list.call(null,lst);
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (v){
return cljs.core.into.call(null,cljs.core.empty.call(null,v),cljs.core.map.call(null,print.foo.parse_item,v));
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"set","set",304602554),(function (s){
return cljs.core.into.call(null,cljs.core.empty.call(null,s),cljs.core.map.call(null,print.foo.parse_item,s));
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"map","map",1371690461),(function (m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),(function (){var iter__4292__auto__ = (function print$foo$iter__27610(s__27611){
return (new cljs.core.LazySeq(null,(function (){
var s__27611__$1 = s__27611;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27611__$1);
if(temp__5457__auto__){
var s__27611__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27611__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27611__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27613 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27612 = (0);
while(true){
if((i__27612 < size__4291__auto__)){
var vec__27614 = cljs.core._nth.call(null,c__4290__auto__,i__27612);
var k = cljs.core.nth.call(null,vec__27614,(0),null);
var v = cljs.core.nth.call(null,vec__27614,(1),null);
cljs.core.chunk_append.call(null,b__27613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [print.foo.parse_item.call(null,k),print.foo.parse_item.call(null,v)], null));

var G__27620 = (i__27612 + (1));
i__27612 = G__27620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27613),print$foo$iter__27610.call(null,cljs.core.chunk_rest.call(null,s__27611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27613),null);
}
} else {
var vec__27617 = cljs.core.first.call(null,s__27611__$2);
var k = cljs.core.nth.call(null,vec__27617,(0),null);
var v = cljs.core.nth.call(null,vec__27617,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [print.foo.parse_item.call(null,k),print.foo.parse_item.call(null,v)], null),print$foo$iter__27610.call(null,cljs.core.rest.call(null,s__27611__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,m);
})());
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"sym","sym",-1444860305),(function (s){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print-and-return","print.foo/print-and-return",-439645733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,s,null,(1),null)))));
}));
cljs.core._add_method.call(null,print.foo.parse_item,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
return x;
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"->","->",-2139605430,null),(function (p__27621){
var vec__27622 = p__27621;
var seq__27623 = cljs.core.seq.call(null,vec__27622);
var first__27624 = cljs.core.first.call(null,seq__27623);
var seq__27623__$1 = cljs.core.next.call(null,seq__27623);
var _ = first__27624;
var args = seq__27623__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print->","print.foo/print->",-1561919828,null),null,(1),null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"->>","->>",-1874332161,null),(function (p__27625){
var vec__27626 = p__27625;
var seq__27627 = cljs.core.seq.call(null,vec__27626);
var first__27628 = cljs.core.first.call(null,seq__27627);
var seq__27627__$1 = cljs.core.next.call(null,seq__27627);
var _ = first__27628;
var args = seq__27627__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print->>","print.foo/print->>",18105645,null),null,(1),null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"cond->","cond->",561741875,null),(function (p__27629){
var vec__27630 = p__27629;
var seq__27631 = cljs.core.seq.call(null,vec__27630);
var first__27632 = cljs.core.first.call(null,seq__27631);
var seq__27631__$1 = cljs.core.next.call(null,seq__27631);
var _ = first__27632;
var args = seq__27631__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print-cond->","print.foo/print-cond->",1299792964,null),null,(1),null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),(function (p__27633){
var vec__27634 = p__27633;
var seq__27635 = cljs.core.seq.call(null,vec__27634);
var first__27636 = cljs.core.first.call(null,seq__27635);
var seq__27635__$1 = cljs.core.next.call(null,seq__27635);
var _ = first__27636;
var args = seq__27635__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print-cond->>","print.foo/print-cond->>",1988528225,null),null,(1),null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"let","let",358118826,null),(function (p__27637){
var vec__27638 = p__27637;
var seq__27639 = cljs.core.seq.call(null,vec__27638);
var first__27640 = cljs.core.first.call(null,seq__27639);
var seq__27639__$1 = cljs.core.next.call(null,seq__27639);
var _ = first__27640;
var vec__27641 = seq__27639__$1;
var seq__27642 = cljs.core.seq.call(null,vec__27641);
var first__27643 = cljs.core.first.call(null,seq__27642);
var seq__27642__$1 = cljs.core.next.call(null,seq__27642);
var bindings = first__27643;
var body = seq__27642__$1;
var bdg_names = cljs.core.take_nth.call(null,(2),bindings);
var bdg_vals = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,bindings));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print-let","print.foo/print-let",202687074,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,bdg_names,cljs.core.map.call(null,print.foo.parse_item,bdg_vals))),null,(1),null)),cljs.core.map.call(null,print.foo.parse_item,body))));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (p__27644){
var vec__27645 = p__27644;
var seq__27646 = cljs.core.seq.call(null,vec__27645);
var first__27647 = cljs.core.first.call(null,seq__27646);
var seq__27646__$1 = cljs.core.next.call(null,seq__27646);
var _ = first__27647;
var args = seq__27646__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print-if","print.foo/print-if",1068606534,null),null,(1),null)),cljs.core.map.call(null,print.foo.parse_item,args))));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"cond","cond",1606708055,null),(function (p__27648){
var vec__27649 = p__27648;
var seq__27650 = cljs.core.seq.call(null,vec__27649);
var first__27651 = cljs.core.first.call(null,seq__27650);
var seq__27650__$1 = cljs.core.next.call(null,seq__27650);
var _ = first__27651;
var args = seq__27650__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.map.call(null,print.foo.parse_item,args))));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"defn","defn",-126010802,null),(function (p__27652){
var vec__27653 = p__27652;
var seq__27654 = cljs.core.seq.call(null,vec__27653);
var first__27655 = cljs.core.first.call(null,seq__27654);
var seq__27654__$1 = cljs.core.next.call(null,seq__27654);
var _ = first__27655;
var args = seq__27654__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print-defn","print.foo/print-defn",848552547,null),null,(1),null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),(function (p__27656){
var vec__27657 = p__27656;
var seq__27658 = cljs.core.seq.call(null,vec__27657);
var first__27659 = cljs.core.first.call(null,seq__27658);
var seq__27658__$1 = cljs.core.next.call(null,seq__27658);
var _ = first__27659;
var args = seq__27658__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print-defn-","print.foo/print-defn-",1412715370,null),null,(1),null)),args)));
}));
cljs.core._add_method.call(null,print.foo.parse_list,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27660){
var vec__27661 = p__27660;
var seq__27662 = cljs.core.seq.call(null,vec__27661);
var first__27663 = cljs.core.first.call(null,seq__27662);
var seq__27662__$1 = cljs.core.next.call(null,seq__27662);
var sym = first__27663;
var args = seq__27662__$1;
var l = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),args);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","print-and-return","print.foo/print-and-return",-439645733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,l,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,cljs.core.map.call(null,((function (l,vec__27661,seq__27662,first__27663,seq__27662__$1,sym,args){
return (function (idx,x){
if((idx === (0))){
return x;
} else {
return print.foo.parse_item.call(null,x);
}
});})(l,vec__27661,seq__27662,first__27663,seq__27662__$1,sym,args))
,cljs.core.range.call(null),l),null,(1),null)))));
}));
print.foo.get_miliseconds = (function print$foo$get_miliseconds(){
return (new Date()).getMilliseconds();
});
print.foo.wrap_middleware_debugging = (function print$foo$wrap_middleware_debugging(handler,middleware_name,p__27665){
var map__27666 = p__27665;
var map__27666__$1 = ((((!((map__27666 == null)))?(((((map__27666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27666):map__27666);
var get_in = cljs.core.get.call(null,map__27666__$1,new cljs.core.Keyword(null,"get-in","get-in",688791704),cljs.core.PersistentVector.EMPTY);
var summarize_QMARK_ = cljs.core.get.call(null,map__27666__$1,new cljs.core.Keyword(null,"summarize?","summarize?",829177006),true);
var timings_QMARK_ = cljs.core.get.call(null,map__27666__$1,new cljs.core.Keyword(null,"timings?","timings?",-1773054946),false);
return ((function (map__27666,map__27666__$1,get_in,summarize_QMARK_,timings_QMARK_){
return (function (request){
print.foo.print_and_return.call(null,["REQUEST - GOING INTO: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(middleware_name)].join(''));

print.foo.print_and_return.call(null,cljs.core.get_in.call(null,request,get_in));

var start = print.foo.get_miliseconds.call(null);
var result = handler.call(null,request);
var end = print.foo.get_miliseconds.call(null);
var result__$1 = (function (){var G__27668 = result;
if(cljs.core.truth_(timings_QMARK_)){
return cljs.core.update_in.call(null,G__27668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("print.foo","timings","print.foo/timings",17857736)], null),((function (G__27668,start,result,end,map__27666,map__27666__$1,get_in,summarize_QMARK_,timings_QMARK_){
return (function (p1__27664_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3922__auto__ = p1__27664_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"middleware","middleware",1462115504),middleware_name,new cljs.core.Keyword(null,"middleware-elapsed","middleware-elapsed",700303951),(end - start)], null));
});})(G__27668,start,result,end,map__27666,map__27666__$1,get_in,summarize_QMARK_,timings_QMARK_))
);
} else {
return G__27668;
}
})();
print.foo.print_and_return.call(null,["RESPONSE - COMING OUT OF: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(middleware_name)].join(''));

print.foo.print_and_return.call(null,cljs.core.get_in.call(null,result__$1,get_in));

if(cljs.core.truth_((function (){var and__3911__auto__ = timings_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return summarize_QMARK_;
} else {
return and__3911__auto__;
}
})())){
print.foo.print_and_return.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"middleware-timings","middleware-timings",1251383063),new cljs.core.Keyword("print.foo","timings","print.foo/timings",17857736).cljs$core$IFn$_invoke$arity$1(result__$1)], null));

return cljs.core.dissoc.call(null,result__$1,new cljs.core.Keyword("print.foo","timings","print.foo/timings",17857736));
} else {
return result__$1;
}
});
;})(map__27666,map__27666__$1,get_in,summarize_QMARK_,timings_QMARK_))
});
print.foo.interleave_middlewares = (function print$foo$interleave_middlewares(handler,middlewares,p__27669){
var map__27670 = p__27669;
var map__27670__$1 = ((((!((map__27670 == null)))?(((((map__27670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27670):map__27670);
var get_in = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"get-in","get-in",688791704),cljs.core.PersistentVector.EMPTY);
var timings_QMARK_ = cljs.core.get.call(null,map__27670__$1,new cljs.core.Keyword(null,"timings?","timings?",-1773054946),false);
var summarize_QMARK__determinations = cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,(cljs.core.count.call(null,middlewares) - (1)),false)),true);
var mw_names = cljs.core.map.call(null,cljs.core.str,middlewares);
var logging_mws = (function (){var iter__4292__auto__ = ((function (summarize_QMARK__determinations,mw_names,map__27670,map__27670__$1,get_in,timings_QMARK_){
return (function print$foo$interleave_middlewares_$_iter__27672(s__27673){
return (new cljs.core.LazySeq(null,((function (summarize_QMARK__determinations,mw_names,map__27670,map__27670__$1,get_in,timings_QMARK_){
return (function (){
var s__27673__$1 = s__27673;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__27673__$1);
if(temp__5457__auto__){
var s__27673__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27673__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__27673__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__27675 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__27674 = (0);
while(true){
if((i__27674 < size__4291__auto__)){
var vec__27676 = cljs.core._nth.call(null,c__4290__auto__,i__27674);
var summarize_QMARK_ = cljs.core.nth.call(null,vec__27676,(0),null);
var mw_name = cljs.core.nth.call(null,vec__27676,(1),null);
cljs.core.chunk_append.call(null,b__27675,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","wrap-middleware-debugging","print.foo/wrap-middleware-debugging",-128908014,null),null,(1),null)),(new cljs.core.List(null,mw_name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"summarize?","summarize?",829177006),null,(1),null)),(new cljs.core.List(null,summarize_QMARK_,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"get-in","get-in",688791704),null,(1),null)),(new cljs.core.List(null,get_in,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"timings?","timings?",-1773054946),null,(1),null)),(new cljs.core.List(null,timings_QMARK_,null,(1),null)))))),null,(1),null))))));

var G__27682 = (i__27674 + (1));
i__27674 = G__27682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27675),print$foo$interleave_middlewares_$_iter__27672.call(null,cljs.core.chunk_rest.call(null,s__27673__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27675),null);
}
} else {
var vec__27679 = cljs.core.first.call(null,s__27673__$2);
var summarize_QMARK_ = cljs.core.nth.call(null,vec__27679,(0),null);
var mw_name = cljs.core.nth.call(null,vec__27679,(1),null);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("print.foo","wrap-middleware-debugging","print.foo/wrap-middleware-debugging",-128908014,null),null,(1),null)),(new cljs.core.List(null,mw_name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"summarize?","summarize?",829177006),null,(1),null)),(new cljs.core.List(null,summarize_QMARK_,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"get-in","get-in",688791704),null,(1),null)),(new cljs.core.List(null,get_in,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"timings?","timings?",-1773054946),null,(1),null)),(new cljs.core.List(null,timings_QMARK_,null,(1),null)))))),null,(1),null))))),print$foo$interleave_middlewares_$_iter__27672.call(null,cljs.core.rest.call(null,s__27673__$2)));
}
} else {
return null;
}
break;
}
});})(summarize_QMARK__determinations,mw_names,map__27670,map__27670__$1,get_in,timings_QMARK_))
,null,null));
});})(summarize_QMARK__determinations,mw_names,map__27670,map__27670__$1,get_in,timings_QMARK_))
;
return iter__4292__auto__.call(null,cljs.core.map.call(null,cljs.core.list,summarize_QMARK__determinations,mw_names));
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,handler,null,(1),null)),cljs.core.interleave.call(null,middlewares,logging_mws))));
});

//# sourceMappingURL=foo.js.map?rel=1526705064226
