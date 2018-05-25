// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35612){
var map__35613 = p__35612;
var map__35613__$1 = ((((!((map__35613 == null)))?(((((map__35613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35613):map__35613);
var m = map__35613__$1;
var n = cljs.core.get.call(null,map__35613__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35613__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35615_35637 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35616_35638 = null;
var count__35617_35639 = (0);
var i__35618_35640 = (0);
while(true){
if((i__35618_35640 < count__35617_35639)){
var f_35641 = cljs.core._nth.call(null,chunk__35616_35638,i__35618_35640);
cljs.core.println.call(null,"  ",f_35641);


var G__35642 = seq__35615_35637;
var G__35643 = chunk__35616_35638;
var G__35644 = count__35617_35639;
var G__35645 = (i__35618_35640 + (1));
seq__35615_35637 = G__35642;
chunk__35616_35638 = G__35643;
count__35617_35639 = G__35644;
i__35618_35640 = G__35645;
continue;
} else {
var temp__5457__auto___35646 = cljs.core.seq.call(null,seq__35615_35637);
if(temp__5457__auto___35646){
var seq__35615_35647__$1 = temp__5457__auto___35646;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35615_35647__$1)){
var c__4319__auto___35648 = cljs.core.chunk_first.call(null,seq__35615_35647__$1);
var G__35649 = cljs.core.chunk_rest.call(null,seq__35615_35647__$1);
var G__35650 = c__4319__auto___35648;
var G__35651 = cljs.core.count.call(null,c__4319__auto___35648);
var G__35652 = (0);
seq__35615_35637 = G__35649;
chunk__35616_35638 = G__35650;
count__35617_35639 = G__35651;
i__35618_35640 = G__35652;
continue;
} else {
var f_35653 = cljs.core.first.call(null,seq__35615_35647__$1);
cljs.core.println.call(null,"  ",f_35653);


var G__35654 = cljs.core.next.call(null,seq__35615_35647__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__35615_35637 = G__35654;
chunk__35616_35638 = G__35655;
count__35617_35639 = G__35656;
i__35618_35640 = G__35657;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35658 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35658);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35658)))?cljs.core.second.call(null,arglists_35658):arglists_35658));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35619_35659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35620_35660 = null;
var count__35621_35661 = (0);
var i__35622_35662 = (0);
while(true){
if((i__35622_35662 < count__35621_35661)){
var vec__35623_35663 = cljs.core._nth.call(null,chunk__35620_35660,i__35622_35662);
var name_35664 = cljs.core.nth.call(null,vec__35623_35663,(0),null);
var map__35626_35665 = cljs.core.nth.call(null,vec__35623_35663,(1),null);
var map__35626_35666__$1 = ((((!((map__35626_35665 == null)))?(((((map__35626_35665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35626_35665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35626_35665):map__35626_35665);
var doc_35667 = cljs.core.get.call(null,map__35626_35666__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35668 = cljs.core.get.call(null,map__35626_35666__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35664);

cljs.core.println.call(null," ",arglists_35668);

if(cljs.core.truth_(doc_35667)){
cljs.core.println.call(null," ",doc_35667);
} else {
}


var G__35669 = seq__35619_35659;
var G__35670 = chunk__35620_35660;
var G__35671 = count__35621_35661;
var G__35672 = (i__35622_35662 + (1));
seq__35619_35659 = G__35669;
chunk__35620_35660 = G__35670;
count__35621_35661 = G__35671;
i__35622_35662 = G__35672;
continue;
} else {
var temp__5457__auto___35673 = cljs.core.seq.call(null,seq__35619_35659);
if(temp__5457__auto___35673){
var seq__35619_35674__$1 = temp__5457__auto___35673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35619_35674__$1)){
var c__4319__auto___35675 = cljs.core.chunk_first.call(null,seq__35619_35674__$1);
var G__35676 = cljs.core.chunk_rest.call(null,seq__35619_35674__$1);
var G__35677 = c__4319__auto___35675;
var G__35678 = cljs.core.count.call(null,c__4319__auto___35675);
var G__35679 = (0);
seq__35619_35659 = G__35676;
chunk__35620_35660 = G__35677;
count__35621_35661 = G__35678;
i__35622_35662 = G__35679;
continue;
} else {
var vec__35628_35680 = cljs.core.first.call(null,seq__35619_35674__$1);
var name_35681 = cljs.core.nth.call(null,vec__35628_35680,(0),null);
var map__35631_35682 = cljs.core.nth.call(null,vec__35628_35680,(1),null);
var map__35631_35683__$1 = ((((!((map__35631_35682 == null)))?(((((map__35631_35682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35631_35682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35631_35682):map__35631_35682);
var doc_35684 = cljs.core.get.call(null,map__35631_35683__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35685 = cljs.core.get.call(null,map__35631_35683__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35681);

cljs.core.println.call(null," ",arglists_35685);

if(cljs.core.truth_(doc_35684)){
cljs.core.println.call(null," ",doc_35684);
} else {
}


var G__35686 = cljs.core.next.call(null,seq__35619_35674__$1);
var G__35687 = null;
var G__35688 = (0);
var G__35689 = (0);
seq__35619_35659 = G__35686;
chunk__35620_35660 = G__35687;
count__35621_35661 = G__35688;
i__35622_35662 = G__35689;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__35633 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35634 = null;
var count__35635 = (0);
var i__35636 = (0);
while(true){
if((i__35636 < count__35635)){
var role = cljs.core._nth.call(null,chunk__35634,i__35636);
var temp__5457__auto___35690__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35690__$1)){
var spec_35691 = temp__5457__auto___35690__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35691));
} else {
}


var G__35692 = seq__35633;
var G__35693 = chunk__35634;
var G__35694 = count__35635;
var G__35695 = (i__35636 + (1));
seq__35633 = G__35692;
chunk__35634 = G__35693;
count__35635 = G__35694;
i__35636 = G__35695;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__35633);
if(temp__5457__auto____$1){
var seq__35633__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35633__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35633__$1);
var G__35696 = cljs.core.chunk_rest.call(null,seq__35633__$1);
var G__35697 = c__4319__auto__;
var G__35698 = cljs.core.count.call(null,c__4319__auto__);
var G__35699 = (0);
seq__35633 = G__35696;
chunk__35634 = G__35697;
count__35635 = G__35698;
i__35636 = G__35699;
continue;
} else {
var role = cljs.core.first.call(null,seq__35633__$1);
var temp__5457__auto___35700__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35700__$2)){
var spec_35701 = temp__5457__auto___35700__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35701));
} else {
}


var G__35702 = cljs.core.next.call(null,seq__35633__$1);
var G__35703 = null;
var G__35704 = (0);
var G__35705 = (0);
seq__35633 = G__35702;
chunk__35634 = G__35703;
count__35635 = G__35704;
i__35636 = G__35705;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1526705069999
