// Compiled by ClojureScript 1.10.238 {}
goog.provide('district.ui.graphql.middleware.id_fields');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('district.ui.graphql.utils');
district.ui.graphql.middleware.id_fields.visit = (GraphQL["visit"]);
district.ui.graphql.middleware.id_fields.id_fields_middleware = (function district$ui$graphql$middleware$id_fields$id_fields_middleware(p__28228){
var map__28229 = p__28228;
var map__28229__$1 = ((((!((map__28229 == null)))?(((((map__28229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28229):map__28229);
var query = cljs.core.get.call(null,map__28229__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var schema = cljs.core.get.call(null,map__28229__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),district.ui.graphql.middleware.id_fields.visit.call(null,query,({"enter": ((function (map__28229,map__28229__$1,query,schema){
return (function (node,key,parent,path,ancestors){
if(((cljs.core._EQ_.call(null,key,"selectionSet")) && ((cljs.core.count.call(null,ancestors) > (0))))){
var temp__5457__auto___28235 = district.ui.graphql.utils.get_id_fields_names.call(null,schema,cljs.core.concat.call(null,ancestors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent], null)));
if(cljs.core.truth_(temp__5457__auto___28235)){
var id_field_names_28236 = temp__5457__auto___28235;
var selection_names_28237 = cljs.core.set.call(null,cljs.core.map.call(null,((function (id_field_names_28236,temp__5457__auto___28235,map__28229,map__28229__$1,query,schema){
return (function (p1__28227_SHARP_){
return (p1__28227_SHARP_["name"]["value"]);
});})(id_field_names_28236,temp__5457__auto___28235,map__28229,map__28229__$1,query,schema))
,(node["selections"])));
var field_names_to_add_28238 = clojure.set.difference.call(null,id_field_names_28236,selection_names_28237);
if(cljs.core.seq.call(null,selection_names_28237)){
var seq__28231_28239 = cljs.core.seq.call(null,field_names_to_add_28238);
var chunk__28232_28240 = null;
var count__28233_28241 = (0);
var i__28234_28242 = (0);
while(true){
if((i__28234_28242 < count__28233_28241)){
var field_name_28243 = cljs.core._nth.call(null,chunk__28232_28240,i__28234_28242);
(node["selections"]).push(cljs.core.clj__GT_js.call(null,district.ui.graphql.utils.create_field_node.call(null,field_name_28243)));


var G__28244 = seq__28231_28239;
var G__28245 = chunk__28232_28240;
var G__28246 = count__28233_28241;
var G__28247 = (i__28234_28242 + (1));
seq__28231_28239 = G__28244;
chunk__28232_28240 = G__28245;
count__28233_28241 = G__28246;
i__28234_28242 = G__28247;
continue;
} else {
var temp__5457__auto___28248__$1 = cljs.core.seq.call(null,seq__28231_28239);
if(temp__5457__auto___28248__$1){
var seq__28231_28249__$1 = temp__5457__auto___28248__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28231_28249__$1)){
var c__4319__auto___28250 = cljs.core.chunk_first.call(null,seq__28231_28249__$1);
var G__28251 = cljs.core.chunk_rest.call(null,seq__28231_28249__$1);
var G__28252 = c__4319__auto___28250;
var G__28253 = cljs.core.count.call(null,c__4319__auto___28250);
var G__28254 = (0);
seq__28231_28239 = G__28251;
chunk__28232_28240 = G__28252;
count__28233_28241 = G__28253;
i__28234_28242 = G__28254;
continue;
} else {
var field_name_28255 = cljs.core.first.call(null,seq__28231_28249__$1);
(node["selections"]).push(cljs.core.clj__GT_js.call(null,district.ui.graphql.utils.create_field_node.call(null,field_name_28255)));


var G__28256 = cljs.core.next.call(null,seq__28231_28249__$1);
var G__28257 = null;
var G__28258 = (0);
var G__28259 = (0);
seq__28231_28239 = G__28256;
chunk__28232_28240 = G__28257;
count__28233_28241 = G__28258;
i__28234_28242 = G__28259;
continue;
}
} else {
}
}
break;
}
} else {
}

} else {
}
} else {
}

return undefined;
});})(map__28229,map__28229__$1,query,schema))
}))], null);
});

//# sourceMappingURL=id_fields.js.map?rel=1526705064649
