// Compiled by ClojureScript 1.10.238 {}
goog.provide('contextual.core');
goog.require('cljs.core');

/**
 * An associative data structure which tracks a path of keys from some
 *   root that was used to obtain this value. Any 'child' values
 *   retrieved from a Contextual object, via any of its APIs, will also
 *   be Contextual (provided they also are associative), with the same
 *   root and the child's key added as a path element.
 * @interface
 */
contextual.core.Contextual = function(){};

/**
 * Return the full path from the root
 */
contextual.core.context = (function contextual$core$context(_){
if(((!((_ == null))) && (!((_.contextual$core$Contextual$context$arity$1 == null))))){
return _.contextual$core$Contextual$context$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (contextual.core.context[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (contextual.core.context["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Contextual.context",_);
}
}
}
});

/**
 * Return the underlying, non-contextual
 *   version of the object
 */
contextual.core.decontextualize = (function contextual$core$decontextualize(_){
if(((!((_ == null))) && (!((_.contextual$core$Contextual$decontextualize$arity$1 == null))))){
return _.contextual$core$Contextual$decontextualize$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (contextual.core.decontextualize[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (contextual.core.decontextualize["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Contextual.decontextualize",_);
}
}
}
});


/**
 * A value that can be contextualized.
 * @interface
 */
contextual.core.Contextualizable = function(){};

/**
 * Return a contextualized version
 *   of the value. Uses the given path is provided, otherwise uses an
 *   empty path (i.e, the given object is the root).
 */
contextual.core.contextualize = (function contextual$core$contextualize(var_args){
var G__26793 = arguments.length;
switch (G__26793) {
case 1:
return contextual.core.contextualize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return contextual.core.contextualize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

contextual.core.contextualize.cljs$core$IFn$_invoke$arity$1 = (function (_){
if(((!((_ == null))) && (!((_.contextual$core$Contextualizable$contextualize$arity$1 == null))))){
return _.contextual$core$Contextualizable$contextualize$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (contextual.core.contextualize[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (contextual.core.contextualize["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Contextualizable.contextualize",_);
}
}
}
});

contextual.core.contextualize.cljs$core$IFn$_invoke$arity$2 = (function (_,path){
if(((!((_ == null))) && (!((_.contextual$core$Contextualizable$contextualize$arity$2 == null))))){
return _.contextual$core$Contextualizable$contextualize$arity$2(_,path);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (contextual.core.contextualize[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,path);
} else {
var m__4212__auto____$1 = (contextual.core.contextualize["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,path);
} else {
throw cljs.core.missing_protocol.call(null,"Contextualizable.contextualize",_);
}
}
}
});

contextual.core.contextualize.cljs$lang$maxFixedArity = 2;



cljs.core.PersistentVector.prototype.contextual$core$Contextualizable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.contextual$core$Contextualizable$contextualize$arity$1 = (function (v){
var v__$1 = this;
return contextual.core.__GT_DelegateVec.call(null,v__$1,cljs.core.PersistentVector.EMPTY);
});

cljs.core.PersistentVector.prototype.contextual$core$Contextualizable$contextualize$arity$2 = (function (v,path){
var v__$1 = this;
return contextual.core.__GT_DelegateVec.call(null,v__$1,path);
});

cljs.core.Subvec.prototype.contextual$core$Contextualizable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.contextual$core$Contextualizable$contextualize$arity$1 = (function (v){
var v__$1 = this;
return contextual.core.__GT_DelegateVec.call(null,v__$1,cljs.core.PersistentVector.EMPTY);
});

cljs.core.Subvec.prototype.contextual$core$Contextualizable$contextualize$arity$2 = (function (v,path){
var v__$1 = this;
return contextual.core.__GT_DelegateVec.call(null,v__$1,path);
});

cljs.core.PersistentArrayMap.prototype.contextual$core$Contextualizable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.contextual$core$Contextualizable$contextualize$arity$1 = (function (m){
var m__$1 = this;
return contextual.core.__GT_DelegateMap.call(null,m__$1,cljs.core.PersistentVector.EMPTY);
});

cljs.core.PersistentArrayMap.prototype.contextual$core$Contextualizable$contextualize$arity$2 = (function (m,path){
var m__$1 = this;
return contextual.core.__GT_DelegateMap.call(null,m__$1,path);
});

cljs.core.PersistentHashMap.prototype.contextual$core$Contextualizable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.contextual$core$Contextualizable$contextualize$arity$1 = (function (m){
var m__$1 = this;
return contextual.core.__GT_DelegateMap.call(null,m__$1,cljs.core.PersistentVector.EMPTY);
});

cljs.core.PersistentHashMap.prototype.contextual$core$Contextualizable$contextualize$arity$2 = (function (m,path){
var m__$1 = this;
return contextual.core.__GT_DelegateMap.call(null,m__$1,path);
});

cljs.core.PersistentTreeMap.prototype.contextual$core$Contextualizable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.contextual$core$Contextualizable$contextualize$arity$1 = (function (m){
var m__$1 = this;
return contextual.core.__GT_DelegateMap.call(null,m__$1,cljs.core.PersistentVector.EMPTY);
});

cljs.core.PersistentTreeMap.prototype.contextual$core$Contextualizable$contextualize$arity$2 = (function (m,path){
var m__$1 = this;
return contextual.core.__GT_DelegateMap.call(null,m__$1,path);
});
/**
 * Return true if the value can be converted to a contextual one.
 * 
 * We would prefer to use (satisfies? Contextualizable), however, the
 * performance of satisfies? is not satisfactory.
 */
contextual.core.contextualizable_QMARK_ = (function contextual$core$contextualizable_QMARK_(value){
return ((cljs.core.map_QMARK_.call(null,value)) || (cljs.core.vector_QMARK_.call(null,value)));
});
contextual.core.contextual_value = (function contextual$core$contextual_value(path,key,value){
if(cljs.core.truth_(contextual.core.contextualizable_QMARK_.call(null,value))){
return contextual.core.contextualize.call(null,value,cljs.core.conj.call(null,path,key));
} else {
return value;
}
});
contextual.core.contextual_entry = (function contextual$core$contextual_entry(path,p__26795){
var vec__26796 = p__26795;
var key = cljs.core.nth.call(null,vec__26796,(0),null);
var value = cljs.core.nth.call(null,vec__26796,(1),null);
var entry = vec__26796;
if(cljs.core.truth_(contextual.core.contextualizable_QMARK_.call(null,value))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,contextual.core.contextualize.call(null,value,cljs.core.conj.call(null,path,key))], null);
} else {
return entry;
}
});

/**
* @constructor
 * @implements {cljs.core.IKVReduce}
 * @implements {contextual.core.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {contextual.core.Contextual}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
contextual.core.DelegateMap = (function (delegate,path){
this.delegate = delegate;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
contextual.core.DelegateMap.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.delegate.toString();
});

contextual.core.DelegateMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

contextual.core.DelegateMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return contextual.core.contextual_value.call(null,self__.path,k,cljs.core._lookup.call(null,self__.delegate,k));
});

contextual.core.DelegateMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return contextual.core.contextual_value.call(null,self__.path,k,cljs.core._lookup.call(null,self__.delegate,k,not_found));
});

contextual.core.DelegateMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.delegate,f,init);
});

contextual.core.DelegateMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta.call(null,self__.delegate);
});

contextual.core.DelegateMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateMap.call(null,self__.delegate,self__.path);
});

contextual.core.DelegateMap.prototype.contextual$core$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

contextual.core.DelegateMap.prototype.contextual$core$Contextual$context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

contextual.core.DelegateMap.prototype.contextual$core$Contextual$decontextualize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delegate;
});

contextual.core.DelegateMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.delegate);
});

contextual.core.DelegateMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._hash.call(null,self__.delegate);
});

contextual.core.DelegateMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return cljs.core._equiv.call(null,self__.delegate,other);
});

contextual.core.DelegateMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateMap.call(null,cljs.core._empty.call(null,self__.delegate),self__.path);
});

contextual.core.DelegateMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateMap.call(null,cljs.core._dissoc.call(null,self__.delegate,k),self__.path);
});

contextual.core.DelegateMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateMap.call(null,cljs.core._assoc.call(null,self__.delegate,k,v),self__.path);
});

contextual.core.DelegateMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.delegate,k);
});

contextual.core.DelegateMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5457__auto__ = cljs.core._seq.call(null,self__.delegate);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return cljs.core.map.call(null,cljs.core.partial.call(null,contextual.core.contextual_entry,self__.path),s);
} else {
return null;
}
});

contextual.core.DelegateMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateMap.call(null,cljs.core._with_meta.call(null,self__.delegate,meta),self__.path);
});

contextual.core.DelegateMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,entry){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateMap.call(null,cljs.core._conj.call(null,self__.delegate,entry),self__.path);
});

contextual.core.DelegateMap.prototype.call = (function() {
var G__26800 = null;
var G__26800__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return contextual.core.contextual_value.call(null,self__.path,k,self__.delegate.call(null,k));
});
var G__26800__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return contextual.core.contextual_value.call(null,self__.path,k,self__.delegate.call(null,k,not_found));
});
G__26800 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26800__2.call(this,self__,k);
case 3:
return G__26800__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__26800.cljs$core$IFn$_invoke$arity$2 = G__26800__2;
G__26800.cljs$core$IFn$_invoke$arity$3 = G__26800__3;
return G__26800;
})()
;

contextual.core.DelegateMap.prototype.apply = (function (self__,args26799){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26799)));
});

contextual.core.DelegateMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
return contextual.core.contextual_value.call(null,self__.path,k,self__.delegate.call(null,k));
});

contextual.core.DelegateMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var _ = this;
return contextual.core.contextual_value.call(null,self__.path,k,self__.delegate.call(null,k,not_found));
});

contextual.core.DelegateMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delegate","delegate",498647757,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

contextual.core.DelegateMap.cljs$lang$type = true;

contextual.core.DelegateMap.cljs$lang$ctorStr = "contextual.core/DelegateMap";

contextual.core.DelegateMap.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"contextual.core/DelegateMap");
});

/**
 * Positional factory function for contextual.core/DelegateMap.
 */
contextual.core.__GT_DelegateMap = (function contextual$core$__GT_DelegateMap(delegate,path){
return (new contextual.core.DelegateMap(delegate,path));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IKVReduce}
 * @implements {contextual.core.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {contextual.core.Contextual}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IMapEntry}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
contextual.core.DelegateVec = (function (delegate,path){
this.delegate = delegate;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 33450783;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
contextual.core.DelegateVec.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.delegate.toString();
});

contextual.core.DelegateVec.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

contextual.core.DelegateVec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return contextual.core.contextual_value.call(null,self__.path,k,cljs.core._lookup.call(null,self__.delegate,k));
});

contextual.core.DelegateVec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return contextual.core.contextual_value.call(null,self__.path,k,cljs.core._lookup.call(null,self__.delegate,k,not_found));
});

contextual.core.DelegateVec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.delegate,f,init);
});

contextual.core.DelegateVec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return contextual.core.contextual_value.call(null,self__.path,n,cljs.core._nth.call(null,self__.delegate,n));
});

contextual.core.DelegateVec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
return contextual.core.contextual_value.call(null,self__.path,n,cljs.core._nth.call(null,self__.delegate,n,not_found));
});

contextual.core.DelegateVec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,val){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateVec.call(null,cljs.core._assoc_n.call(null,self__.delegate,n,val),self__.path);
});

contextual.core.DelegateVec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq_iter.call(null,cljs.core.seq.call(null,this$__$1));
});

contextual.core.DelegateVec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta.call(null,self__.delegate);
});

contextual.core.DelegateVec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateVec.call(null,self__.delegate,self__.path);
});

contextual.core.DelegateVec.prototype.contextual$core$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

contextual.core.DelegateVec.prototype.contextual$core$Contextual$context$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

contextual.core.DelegateVec.prototype.contextual$core$Contextual$decontextualize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delegate;
});

contextual.core.DelegateVec.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.delegate);
});

contextual.core.DelegateVec.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._key.call(null,self__.delegate);
});

contextual.core.DelegateVec.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return contextual.core.contextual_value.call(null,self__.path,(1),cljs.core._val.call(null,self__.delegate));
});

contextual.core.DelegateVec.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var idx = (cljs.core.count.call(null,self__.delegate) - (1));
return contextual.core.contextual_value.call(null,self__.path,idx,cljs.core._peek.call(null,self__.delegate));
});

contextual.core.DelegateVec.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateVec.call(null,cljs.core._pop.call(null,self__.delegate),self__.path);
});

contextual.core.DelegateVec.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._hash.call(null,self__.delegate);
});

contextual.core.DelegateVec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return cljs.core._equiv.call(null,self__.delegate,other);
});

contextual.core.DelegateVec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return contextual.core.__GT_DelegateMap.call(null,cljs.core._empty.call(null,self__.delegate),self__.path);
});

contextual.core.DelegateVec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.delegate,f);
});

contextual.core.DelegateVec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.delegate,f,init);
});

contextual.core.DelegateVec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateVec.call(null,cljs.core._assoc.call(null,self__.delegate,k,v),self__.path);
});

contextual.core.DelegateVec.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.delegate,k);
});

contextual.core.DelegateVec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5457__auto__ = cljs.core._seq.call(null,self__.delegate);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return cljs.core.map_indexed.call(null,((function (s,temp__5457__auto__,___$1){
return (function (i,val){
return contextual.core.contextual_value.call(null,self__.path,i,val);
});})(s,temp__5457__auto__,___$1))
,s);
} else {
return null;
}
});

contextual.core.DelegateVec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new contextual.core.DelegateVec(cljs.core._with_meta.call(null,self__.delegate,meta),self__.path));
});

contextual.core.DelegateVec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,val){
var self__ = this;
var ___$1 = this;
return contextual.core.__GT_DelegateMap.call(null,cljs.core._conj.call(null,self__.delegate,val),self__.path);
});

contextual.core.DelegateVec.prototype.call = (function() {
var G__26802 = null;
var G__26802__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return contextual.core.contextual_value.call(null,self__.path,k,self__.delegate.call(null,k));
});
var G__26802__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return contextual.core.contextual_value.call(null,self__.path,k,self__.delegate.call(null,k,not_found));
});
G__26802 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26802__2.call(this,self__,k);
case 3:
return G__26802__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__26802.cljs$core$IFn$_invoke$arity$2 = G__26802__2;
G__26802.cljs$core$IFn$_invoke$arity$3 = G__26802__3;
return G__26802;
})()
;

contextual.core.DelegateVec.prototype.apply = (function (self__,args26801){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26801)));
});

contextual.core.DelegateVec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
return contextual.core.contextual_value.call(null,self__.path,k,self__.delegate.call(null,k));
});

contextual.core.DelegateVec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var _ = this;
return contextual.core.contextual_value.call(null,self__.path,k,self__.delegate.call(null,k,not_found));
});

contextual.core.DelegateVec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delegate","delegate",498647757,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

contextual.core.DelegateVec.cljs$lang$type = true;

contextual.core.DelegateVec.cljs$lang$ctorStr = "contextual.core/DelegateVec";

contextual.core.DelegateVec.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"contextual.core/DelegateVec");
});

/**
 * Positional factory function for contextual.core/DelegateVec.
 */
contextual.core.__GT_DelegateVec = (function contextual$core$__GT_DelegateVec(delegate,path){
return (new contextual.core.DelegateVec(delegate,path));
});


//# sourceMappingURL=core.js.map?rel=1526705063539
