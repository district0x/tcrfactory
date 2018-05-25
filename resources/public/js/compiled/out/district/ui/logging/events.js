// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.logging.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
district.ui.logging.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.logging.events","success","district.ui.logging.events/success",-2145086252),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.logging.events.interceptors], null),(function (_,p__26803){
var vec__26804 = p__26803;
var args = cljs.core.nth.call(null,vec__26804,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("log","success","log/success",1890753102),args], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("log","success","log/success",1890753102),(function (p__26807){
var vec__26808 = p__26807;
var seq__26809 = cljs.core.seq.call(null,vec__26808);
var first__26810 = cljs.core.first.call(null,seq__26809);
var seq__26809__$1 = cljs.core.next.call(null,seq__26809);
var message = first__26810;
var vec__26811 = seq__26809__$1;
var opts = cljs.core.nth.call(null,vec__26811,(0),null);
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"district.ui.logging.events","/private/var/folders/qt/x8hly40s2xz4nlw4_fz09br80000gp/T/form-init5416446372827233607.clj",16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__26808,seq__26809,first__26810,seq__26809__$1,message,vec__26811,opts){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Success",message,opts], null);
});})(vec__26808,seq__26809,first__26810,seq__26809__$1,message,vec__26811,opts))
,null)),null,-69905121);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.logging.events","error","district.ui.logging.events/error",-1492500618),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.logging.events.interceptors], null),(function (_,p__26814){
var vec__26815 = p__26814;
var args = cljs.core.nth.call(null,vec__26815,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("log","error","log/error",-979141924),args], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("log","error","log/error",-979141924),(function (p__26818){
var vec__26819 = p__26818;
var seq__26820 = cljs.core.seq.call(null,vec__26819);
var first__26821 = cljs.core.first.call(null,seq__26820);
var seq__26820__$1 = cljs.core.next.call(null,seq__26820);
var message = first__26821;
var vec__26822 = seq__26820__$1;
var opts = cljs.core.nth.call(null,vec__26822,(0),null);
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"district.ui.logging.events","/private/var/folders/qt/x8hly40s2xz4nlw4_fz09br80000gp/T/form-init5416446372827233607.clj",27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__26819,seq__26820,first__26821,seq__26820__$1,message,vec__26822,opts){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error",message,opts], null);
});})(vec__26819,seq__26820,first__26821,seq__26820__$1,message,vec__26822,opts))
,null)),null,-1000639528);
}));

//# sourceMappingURL=events.js.map?rel=1526705505555
