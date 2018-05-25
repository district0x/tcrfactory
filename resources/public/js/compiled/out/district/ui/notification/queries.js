// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.notification.queries');
goog.require('cljs.core');
district.ui.notification.queries.db_key = new cljs.core.Keyword(null,"district.ui.notification","district.ui.notification",-452320866);
district.ui.notification.queries.assoc_district_ui_notification = (function district$ui$notification$queries$assoc_district_ui_notification(db,opts){
return cljs.core.assoc.call(null,db,district.ui.notification.queries.db_key,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)], null)));
});
district.ui.notification.queries.dissoc_district_ui_notification = (function district$ui$notification$queries$dissoc_district_ui_notification(db){
return cljs.core.dissoc.call(null,db,district.ui.notification.queries.db_key);
});
district.ui.notification.queries.queue_notification = (function district$ui$notification$queries$queue_notification(db,notification){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.conj,notification);
});
district.ui.notification.queries.pop_notification = (function district$ui$notification$queries$pop_notification(db){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__34184_SHARP_){
return cljs.core.pop.call(null,p1__34184_SHARP_);
}));
});
district.ui.notification.queries.peek_notification = (function district$ui$notification$queries$peek_notification(db){
return cljs.core.peek.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"queue","queue",1455835879)], null)));
});
district.ui.notification.queries.queue = (function district$ui$notification$queries$queue(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"queue","queue",1455835879)], null));
});
district.ui.notification.queries.show_notification = (function district$ui$notification$queries$show_notification(db,notification){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"notification","notification",-222338233)], null),((typeof notification === 'string')?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),notification,new cljs.core.Keyword(null,"open?","open?",1238443125),true], null):((cljs.core.map_QMARK_.call(null,notification))?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),notification):notification
)));
});
district.ui.notification.queries.default_show_duration = (function district$ui$notification$queries$default_show_duration(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"default-show-duration","default-show-duration",-1858404648)], null));
});
district.ui.notification.queries.default_hide_duration = (function district$ui$notification$queries$default_hide_duration(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"default-hide-duration","default-hide-duration",659917260)], null));
});
district.ui.notification.queries.assoc_open = (function district$ui$notification$queries$assoc_open(db,value){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),value);
});
district.ui.notification.queries.notification = (function district$ui$notification$queries$notification(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"notification","notification",-222338233)], null));
});
district.ui.notification.queries.clear_queue = (function district$ui$notification$queries$clear_queue(db){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [district.ui.notification.queries.db_key,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));
});

//# sourceMappingURL=queries.js.map?rel=1526705068885
