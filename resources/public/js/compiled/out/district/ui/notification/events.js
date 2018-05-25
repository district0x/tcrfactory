// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.notification.events');
goog.require('cljs.core');
goog.require('day8.re_frame.forward_events_fx');
goog.require('district0x.re_frame.interval_fx');
goog.require('district0x.re_frame.spec_interceptors');
goog.require('district.ui.notification.spec');
goog.require('district.ui.notification.queries');
goog.require('re_frame.core');
goog.require('cljs.pprint');
district.ui.notification.events.interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.notification.events","start","district.ui.notification.events/start",-1965496723),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors], null),(function (p__34192,p__34193){
var map__34194 = p__34192;
var map__34194__$1 = ((((!((map__34194 == null)))?(((((map__34194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34194):map__34194);
var db = cljs.core.get.call(null,map__34194__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34195 = p__34193;
var opts = cljs.core.nth.call(null,vec__34195,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.notification.queries.assoc_district_ui_notification.call(null,db,opts),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("district.ui.notification.events","queue-notification","district.ui.notification.events/queue-notification",-594668494),null], null), null),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.notification.events","process-queue","district.ui.notification.events/process-queue",-1770727516)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.notification.events","stop","district.ui.notification.events/stop",-1604361836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors], null),(function (p__34199){
var map__34200 = p__34199;
var map__34200__$1 = ((((!((map__34200 == null)))?(((((map__34200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34200):map__34200);
var db = cljs.core.get.call(null,map__34200__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.notification.queries.dissoc_district_ui_notification.call(null,db),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),district.ui.notification.queries.db_key], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.notification.events","show","district.ui.notification.events/show",1035407953),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors,district0x.re_frame.spec_interceptors.validate_first_arg.call(null,new cljs.core.Keyword("district.ui.notification.spec","notification","district.ui.notification.spec/notification",114613283))], null),(function (p__34202,p__34203){
var map__34204 = p__34202;
var map__34204__$1 = ((((!((map__34204 == null)))?(((((map__34204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34204):map__34204);
var db = cljs.core.get.call(null,map__34204__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34205 = p__34203;
var notification = cljs.core.nth.call(null,vec__34205,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.notification.events","queue-notification","district.ui.notification.events/queue-notification",-594668494),notification], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district.ui.notification.events","queue-notification","district.ui.notification.events/queue-notification",-594668494),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors], null),(function (db,p__34209){
var vec__34210 = p__34209;
var notification = cljs.core.nth.call(null,vec__34210,(0),null);
return district.ui.notification.queries.queue_notification.call(null,db,notification);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district.ui.notification.events","clear-queue","district.ui.notification.events/clear-queue",943599466),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors], null),(function (db){
return district.ui.notification.queries.clear_queue.call(null,db);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.notification.events","process-queue","district.ui.notification.events/process-queue",-1770727516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors], null),cljs.core.with_meta((function (p__34214){
var map__34215 = p__34214;
var map__34215__$1 = ((((!((map__34215 == null)))?(((((map__34215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34215):map__34215);
var db = cljs.core.get.call(null,map__34215__$1,new cljs.core.Keyword(null,"db","db",993250759));
var hide_duration = district.ui.notification.queries.default_hide_duration.call(null,db);
var queue = district.ui.notification.queries.queue.call(null,db);
var events = (function (){var queue__$1 = queue;
var this$ = cljs.core.peek.call(null,queue__$1);
var events = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),(0),new cljs.core.Keyword(null,"notification","notification",-222338233),this$], null)], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,queue__$1)){
return events;
} else {
var G__34221 = cljs.core.pop.call(null,queue__$1);
var G__34222 = cljs.core.peek.call(null,cljs.core.pop.call(null,queue__$1));
var G__34223 = (function (){var map__34217 = cljs.core.last.call(null,events);
var map__34217__$1 = ((((!((map__34217 == null)))?(((((map__34217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34217):map__34217);
var delay = cljs.core.get.call(null,map__34217__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var map__34218 = this$;
var map__34218__$1 = ((((!((map__34218 == null)))?(((((map__34218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34218):map__34218);
var show_duration = cljs.core.get.call(null,map__34218__$1,new cljs.core.Keyword(null,"show-duration","show-duration",1805172445));
var next = cljs.core.peek.call(null,cljs.core.pop.call(null,queue__$1));
return cljs.core.conj.call(null,events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),((delay + (cljs.core.truth_(show_duration)?show_duration:district.ui.notification.queries.default_show_duration.call(null,db))) + (cljs.core.truth_(next)?hide_duration:(0))),new cljs.core.Keyword(null,"notification","notification",-222338233),next], null));
})();
queue__$1 = G__34221;
this$ = G__34222;
events = G__34223;
continue;
}
break;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.call(null,((function (hide_duration,queue,events,map__34215,map__34215__$1,db){
return (function (p1__34213_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.notification.events","schedule-next-notification","district.ui.notification.events/schedule-next-notification",-1128389887),p1__34213_SHARP_], null));
});})(hide_duration,queue,events,map__34215,map__34215__$1,db))
,events),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,events)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.notification.events","clear-queue","district.ui.notification.events/clear-queue",943599466)], null)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"This handler works by interweaving queued events with 'empty' notifications, which work as ::hide-notification events.\n         Re-frame queue of events becomes (distinct (concat [show1 hide] [show1 show2 hide])) etc. where each vector is a sequence of queued notifications."], null)));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.notification.events","schedule-next-notification","district.ui.notification.events/schedule-next-notification",-1128389887),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors], null),(function (p__34224,p__34225){
var map__34226 = p__34224;
var map__34226__$1 = ((((!((map__34226 == null)))?(((((map__34226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34226):map__34226);
var db = cljs.core.get.call(null,map__34226__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34227 = p__34225;
var map__34230 = cljs.core.nth.call(null,vec__34227,(0),null);
var map__34230__$1 = ((((!((map__34230 == null)))?(((((map__34230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34230):map__34230);
var delay = cljs.core.get.call(null,map__34230__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
var notification = cljs.core.get.call(null,map__34230__$1,new cljs.core.Keyword(null,"notification","notification",-222338233));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),delay,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("district.ui.notification.events","show-notification","district.ui.notification.events/show-notification",-1333051310),notification], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("district.ui.notification.events","show-notification","district.ui.notification.events/show-notification",-1333051310),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors], null),(function (db,p__34233){
var vec__34234 = p__34233;
var notification = cljs.core.nth.call(null,vec__34234,(0),null);
return district.ui.notification.queries.show_notification.call(null,db,notification);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("district.ui.notification.events","hide-notification","district.ui.notification.events/hide-notification",-964166660),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.events.interceptors], null),(function (p__34237,_){
var map__34238 = p__34237;
var map__34238__$1 = ((((!((map__34238 == null)))?(((((map__34238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34238):map__34238);
var db = cljs.core.get.call(null,map__34238__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),district.ui.notification.queries.assoc_open.call(null,db,false)], null);
}));

//# sourceMappingURL=events.js.map?rel=1526705068932
