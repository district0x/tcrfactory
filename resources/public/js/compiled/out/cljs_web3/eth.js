// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_web3.eth');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Gets eth object from web3-instance.
 * 
 *   Parameter:
 *   web3 - web3 instance
 */
cljs_web3.eth.eth = (function cljs_web3$eth$eth(web3){
return (web3["eth"]);
});
/**
 * Gets compile object from web3-instance.
 * 
 *   Parameter:
 *   web3 - web3 instance
 */
cljs_web3.eth.get_compile = (function cljs_web3$eth$get_compile(web3){
return (cljs_web3.eth.eth.call(null,web3)["compile"]);
});
/**
 * Gets the default address that is used for the following methods (optionally
 *   you can overwrite it by specifying the :from key in their options map):
 * 
 *   - `send-transaction!`
 *   - `call!`
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns the default address HEX string.
 * 
 *   Example:
 *   user> `(default-account web3-instance)`
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.default_account = (function cljs_web3$eth$default_account(web3){
return (web3["eth"]["defaultAccount"]);
});
/**
 * Sets the default address that is used for the following methods (optionally
 *   you can overwrite it by specifying the :from key in their options map):
 * 
 *   - `send-transaction!`
 *   - `call!`
 * 
 *   Parameters:
 *   web3    - web3 instance
 *   hex-str - Any 20 bytes address you own, or where you have the private key for
 * 
 * 
 *   Returns a 20 bytes HEX string representing the currently set address.
 * 
 *   Example:
 *   user> (set-default-account! web3-instance
 *                            "0x85d85715218895ae964a750d9a92f13a8951de3d")
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.set_default_account_BANG_ = (function cljs_web3$eth$set_default_account_BANG_(web3,hex_str){
return (cljs_web3.eth.eth.call(null,web3)["defaultAccount"] = hex_str);
});
/**
 * This default block is used for the following methods (optionally you can
 *   override it by passing the default-block parameter):
 * 
 *   - `get-balance`
 *   - `get-code`
 *   - `get-transactionCount`
 *   - `get-storageAt`
 *   - `call`
 *   - `contract-call`
 *   - `estimate-gas`
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns one of:
 *   - a block number
 *   - "earliest", the genisis block
 *   - "latest", the latest block (current head of the blockchain)
 *   - "pending", the currently mined block (including pending transactions)
 * 
 *   Example:
 *   user> `(default-block web3-instance)`
 *   "latest"
 */
cljs_web3.eth.default_block = (function cljs_web3$eth$default_block(web3){
return (web3["eth"]["defaultBlock"]);
});
/**
 * Sets default block that is used for the following methods (optionally you can
 *   override it by passing the default-block parameter):
 * 
 *   - `get-balance`
 *   - `get-code`
 *   - `get-transactionCount`
 *   - `get-storageAt`
 *   - `call`
 *   - `contract-call`
 *   - `estimate-gas`
 * 
 *   Parameters:
 *   web3  - web3 instance
 *   block - one of:
 *          - a block number
 *          - "earliest", the genisis block
 *          - "latest", the latest block (current head of the blockchain)
 *          - "pending", the currently mined block (including pending
 *            transactions)
 * 
 *   Example:
 *   user> `(set-default-block! web3-instance "earliest")`
 *   "earliest"
 */
cljs_web3.eth.set_default_block_BANG_ = (function cljs_web3$eth$set_default_block_BANG_(web3,block){
return (cljs_web3.eth.eth.call(null,web3)["defaultBlock"] = block);
});
/**
 * This property is read only and returns the either a sync object, when the
 *   node is syncing or false.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns a sync object as follows, when the node is currently syncing or false:
 *   - startingBlock: The block number where the sync started.
 *   - currentBlock:  The block number where at which block the node currently
 *                 synced to already.
 *   - highestBlock:  The estimated block number to sync to.
 * 
 *   Example:
 *   user> `(syncing web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `false`
 */
cljs_web3.eth.syncing = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","syncing");
/**
 * This convenience function calls the callback everytime a sync starts, updates
 *   and stops.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns an isSyncing object with the following methods:
 *   - `.addCallback`  Adds another callback, which will be called when the node
 *                  starts or stops syncing.
 *   - `.stopWatching` Stops the syncing callbacks
 * 
 *   Callback return value:
 * 
 *  The callback will be fired with true when the syncing starts and with false
 *  when it stopped.
 * 
 *  While syncing it will return the syncing object:
 *  - startingBlock: The block number where the sync started.
 *  - currentBlock:  The block number where at which block the node currently
 *                   synced to already.
 *  - highestBlock:  The estimated block number to sync to
 * 
 *   Example:
 *   user> `(.addCallback (web3-eth/syncing? web3-instance) (fn [err res] ...))`
 *   #object[s [object Object]]
 */
cljs_web3.eth.syncing_QMARK_ = (function cljs_web3$eth$syncing_QMARK_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31882 = arguments.length;
var i__4500__auto___31883 = (0);
while(true){
if((i__4500__auto___31883 < len__4499__auto___31882)){
args__4502__auto__.push((arguments[i__4500__auto___31883]));

var G__31884 = (i__4500__auto___31883 + (1));
i__4500__auto___31883 = G__31884;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.syncing_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"isSyncing",args);
});

cljs_web3.eth.syncing_QMARK_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.syncing_QMARK_.cljs$lang$applyTo = (function (seq31880){
var G__31881 = cljs.core.first.call(null,seq31880);
var seq31880__$1 = cljs.core.next.call(null,seq31880);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31881,seq31880__$1);
});

/**
 * This property is read only and returns the coinbase address where the mining
 *   rewards go to.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a string representing the coinbase address of the client.
 * 
 *   Example:
 *   user> `(coinbase web3-instance)`
 *   "0x85d85715218895ae964a750d9a92f13a8951de3d"
 */
cljs_web3.eth.coinbase = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","coinbase");
/**
 * This property is read only and says whether the node is mining or not.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a boolean: true if the client is mining, otherwise false.
 * 
 *   Example:
 *   `(mining? web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `false`
 */
cljs_web3.eth.mining_QMARK_ = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","mining");
/**
 * This property is read only and returns the number of hashes per second that
 *   the node is mining with.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns a number representing the hashes per second.
 * 
 *   user> `(hashrate web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0
 *   
 */
cljs_web3.eth.hashrate = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","hashrate");
/**
 * This property is read only and returns the current gas price. The gas price
 *   is determined by the x latest blocks median gas price.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns a BigNumber instance of the current gas price in wei.
 * 
 *   Example:
 *   user> `(gas-price web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> #object[e 90000000000]
 */
cljs_web3.eth.gas_price = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","gasPrice");
/**
 * This property is read only and returns a list of accounts the node controls.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns an array of addresses controlled by client.
 * 
 *   Example:
 *   user> `(accounts web3-instance (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `[0x85d85715218895ae964a750d9a92f13a8951de3d]`
 */
cljs_web3.eth.accounts = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","accounts");
/**
 * This property is read only and returns the current block number.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Returns the number of the most recent block.
 * 
 *   Example:
 *   `(block-number web3-instance
 *               (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> `1783426`
 */
cljs_web3.eth.block_number = cljs_web3.utils.prop_or_clb_fn.call(null,"eth","blockNumber");
/**
 * (Not Implemented yet) Registers the given address to be included in
 *   `accounts`. This allows non-private-key owned accounts to be associated
 *   as an owned account (e.g., contract wallets).
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   address     - string representing the address
 *   callback-fn - callback with two parameters, error and result.
 */
cljs_web3.eth.register = (function cljs_web3$eth$register(web3,address){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"register",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});
/**
 * (Not Implemented yet) Unregisters a given address.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   address     - string representing the address
 *   callback-fn - callback with two parameters, error and result.
 */
cljs_web3.eth.unregister = (function cljs_web3$eth$unregister(web3,address){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"unRegister",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});
/**
 * Get the balance of an address at a given block.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the balance of.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns a BigNumber instance of the current balance for the given address in
 *   wei.
 * 
 *   Example:
 *   user> `(get-balance web3-instance
 *                    "0x85d85715218895ae964a750d9a92f13a8951de3d"
 *                    "latest"
 *                    (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> #object[e 1729597111000000000]
 */
cljs_web3.eth.get_balance = (function cljs_web3$eth$get_balance(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31891 = arguments.length;
var i__4500__auto___31892 = (0);
while(true){
if((i__4500__auto___31892 < len__4499__auto___31891)){
args__4502__auto__.push((arguments[i__4500__auto___31892]));

var G__31893 = (i__4500__auto___31892 + (1));
i__4500__auto___31892 = G__31893;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_balance.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31887){
var vec__31888 = p__31887;
var address = cljs.core.nth.call(null,vec__31888,(0),null);
var default_block = cljs.core.nth.call(null,vec__31888,(1),null);
var args = vec__31888;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getBalance",args);
});

cljs_web3.eth.get_balance.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_balance.cljs$lang$applyTo = (function (seq31885){
var G__31886 = cljs.core.first.call(null,seq31885);
var seq31885__$1 = cljs.core.next.call(null,seq31885);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31886,seq31885__$1);
});

/**
 * Get the storage at a specific position of an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the storage from.
 *   position      - The index position of the storage.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with web3.eth.defaultBlock.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the value in storage at the given position.
 * 
 *   Example:
 *   user> `(get-storage-at web3-instance
 *                       "0x85d85715218895ae964a750d9a92f13a8951de3d"
 *                       0
 *                       "latest"
 *                       (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> "0x0000000000000000000000000000000000000000000000000000000000000000" 
 */
cljs_web3.eth.get_storage_at = (function cljs_web3$eth$get_storage_at(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31900 = arguments.length;
var i__4500__auto___31901 = (0);
while(true){
if((i__4500__auto___31901 < len__4499__auto___31900)){
args__4502__auto__.push((arguments[i__4500__auto___31901]));

var G__31902 = (i__4500__auto___31901 + (1));
i__4500__auto___31901 = G__31902;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_storage_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31896){
var vec__31897 = p__31896;
var address = cljs.core.nth.call(null,vec__31897,(0),null);
var position = cljs.core.nth.call(null,vec__31897,(1),null);
var default_block = cljs.core.nth.call(null,vec__31897,(2),null);
var args = vec__31897;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getStorageAt",args);
});

cljs_web3.eth.get_storage_at.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_storage_at.cljs$lang$applyTo = (function (seq31894){
var G__31895 = cljs.core.first.call(null,seq31894);
var seq31894__$1 = cljs.core.next.call(null,seq31894);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31895,seq31894__$1);
});

/**
 * Get the code at a specific address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the code from.
 *   default-block - If you pass this parameter it will not use the default block set
 *                with `get-default-block!`.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the data at given address HEX string.
 * 
 *   Example:
 *   user> (get-code web3-instance
 *                "0x85d85715218895ae964a750d9a92f13a8951de3d
 *                0
 *                "latest"
 *                (fn [err res] (when-not err (println res))))
 *   nil
 *   user> `0x`
 *   
 */
cljs_web3.eth.get_code = (function cljs_web3$eth$get_code(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31909 = arguments.length;
var i__4500__auto___31910 = (0);
while(true){
if((i__4500__auto___31910 < len__4499__auto___31909)){
args__4502__auto__.push((arguments[i__4500__auto___31910]));

var G__31911 = (i__4500__auto___31910 + (1));
i__4500__auto___31910 = G__31911;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_code.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31905){
var vec__31906 = p__31905;
var address = cljs.core.nth.call(null,vec__31906,(0),null);
var default_block = cljs.core.nth.call(null,vec__31906,(1),null);
var args = vec__31906;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getCode",args);
});

cljs_web3.eth.get_code.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_code.cljs$lang$applyTo = (function (seq31903){
var G__31904 = cljs.core.first.call(null,seq31903);
var seq31903__$1 = cljs.core.next.call(null,seq31903);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31904,seq31903__$1);
});

/**
 * Returns a block matching the block number or block hash.
 * 
 *   Parameters:
 *   web3                        - web3 instance
 * 
 *   block-hash-or-number        - The block number or hash. Or the string
 *                              "earliest", "latest" or "pending"
 *                              as in the default block parameter.
 * 
 *   return-transaction-objects? - If true, the returned block will contain all
 *                              transactions as objects, if false it will
 *                              only contains the transaction hashes.
 *   callback-fn                 - callback with two parameters, error and result
 * 
 *   Returns the block object:
 * 
 *   - number: Number - the block number. null when its pending block.
 *   - hash: String, 32 Bytes - hash of the block. null when its pending block.
 *   - parent-hash: String, 32 Bytes - hash of the parent block.
 *   - nonce: String, 8 Bytes - hash of the generated proof-of-work. null when its
 *                           pending block.
 *   - sha3-uncles: String, 32 Bytes - SHA3 of the uncles data in the block.
 *   - logs-bloom: String, 256 Bytes - the bloom filter for the logs of the block.
 *                                 null when its pending block.
 *   - transactions-root: String, 32 Bytes - the root of the transaction trie of the
 *                                        block
 *   - state-root: String, 32 Bytes - the root of the final state trie of the block.
 *   - miner: String, 20 Bytes - the address of the beneficiary to whom the mining
 *                            rewards were given.
 *   - difficulty: BigNumber - integer of the difficulty for this block.
 *   - total-difficulty: BigNumber - integer of the total difficulty of the chain
 *                                until this block.
 *   - extra- data: String - the "extra data" field of this block.
 *   - size: Number - integer the size of this block in bytes.
 *   - gas- limit: Number - the maximum gas allowed in this block.
 *   - gas-used: Number - the total used gas by all transactions in this block.
 *   - timestamp: Number - the unix timestamp for when the block was collated.
 *   - transactions: Array - Array of transaction objects, or 32 Bytes transaction
 *                        hashes depending on the last given parameter.
 *   - uncles: Array - Array of uncle hashes.
 * 
 *   Example:
 *   user> `(get-block web3-instance
 *                  0
 *                  false
 *                  (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> {:state-root 0x.., :hash 0x.., :number 0, :difficulty #object[e 1048576],
 *       ...}
 */
cljs_web3.eth.get_block = (function cljs_web3$eth$get_block(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31918 = arguments.length;
var i__4500__auto___31919 = (0);
while(true){
if((i__4500__auto___31919 < len__4499__auto___31918)){
args__4502__auto__.push((arguments[i__4500__auto___31919]));

var G__31920 = (i__4500__auto___31919 + (1));
i__4500__auto___31919 = G__31920;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31914){
var vec__31915 = p__31914;
var block_hash_or_number = cljs.core.nth.call(null,vec__31915,(0),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.call(null,vec__31915,(1),null);
var args = vec__31915;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getBlock",args);
});

cljs_web3.eth.get_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_block.cljs$lang$applyTo = (function (seq31912){
var G__31913 = cljs.core.first.call(null,seq31912);
var seq31912__$1 = cljs.core.next.call(null,seq31912);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31913,seq31912__$1);
});

/**
 * Returns the number of transaction in a given block.
 * 
 *   Parameters
 *   web3                 - web3 instance
 *   block-hash-or-number - The block number or hash. Or the string "earliest",
 *                       "latest" or "pending" as in the default block
 *                       parameter.
 *   callback-fn          - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(get-block-transaction-count
 *         web3-instance
 *         0
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0
 */
cljs_web3.eth.get_block_transaction_count = (function cljs_web3$eth$get_block_transaction_count(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31927 = arguments.length;
var i__4500__auto___31928 = (0);
while(true){
if((i__4500__auto___31928 < len__4499__auto___31927)){
args__4502__auto__.push((arguments[i__4500__auto___31928]));

var G__31929 = (i__4500__auto___31928 + (1));
i__4500__auto___31928 = G__31929;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_block_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31923){
var vec__31924 = p__31923;
var block_hash_or_number = cljs.core.nth.call(null,vec__31924,(0),null);
var args = vec__31924;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getBlockTransactionCount",args);
});

cljs_web3.eth.get_block_transaction_count.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_block_transaction_count.cljs$lang$applyTo = (function (seq31921){
var G__31922 = cljs.core.first.call(null,seq31921);
var seq31921__$1 = cljs.core.next.call(null,seq31921);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31922,seq31921__$1);
});

/**
 * Returns a blocks uncle by a given uncle index position.
 *   Parameters
 * 
 *   Parameters:
 *   web3                        - web3 instance
 *   block-hash-or-number        - The block number or hash. Or the string
 *                              "earliest", "latest" or "pending" as in
 *                              the default block parameter
 *   uncle-number                - The index position of the uncle
 *   return-transaction-objects? - If true, the returned block will contain all
 *                              transactions as objects, if false it will only
 *                              contains the transaction hashes
 *   default-block               - If you pass this parameter it will not use the
 *                              default block set with (set-default-block)
 *   callback-fn                 - callback with two parameters, error and result
 * 
 *   Returns the returned uncle. For a return value see `(get-block)`.
 * 
 *   Note: An uncle doesn't contain individual transactions.
 */
cljs_web3.eth.get_uncle = (function cljs_web3$eth$get_uncle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31936 = arguments.length;
var i__4500__auto___31937 = (0);
while(true){
if((i__4500__auto___31937 < len__4499__auto___31936)){
args__4502__auto__.push((arguments[i__4500__auto___31937]));

var G__31938 = (i__4500__auto___31937 + (1));
i__4500__auto___31937 = G__31938;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_uncle.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31932){
var vec__31933 = p__31932;
var block_hash_or_number = cljs.core.nth.call(null,vec__31933,(0),null);
var uncle_number = cljs.core.nth.call(null,vec__31933,(1),null);
var return_transaction_objects_QMARK_ = cljs.core.nth.call(null,vec__31933,(2),null);
var args = vec__31933;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getUncle",args);
});

cljs_web3.eth.get_uncle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_uncle.cljs$lang$applyTo = (function (seq31930){
var G__31931 = cljs.core.first.call(null,seq31930);
var seq31930__$1 = cljs.core.next.call(null,seq31930);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31931,seq31930__$1);
});

/**
 * Returns a transaction matching the given transaction hash.
 * 
 * Parameters:
 * web3             - web3 instance
 * transaction-hash - The transaction hash.
 * callback-fn      - callback with two parameters, error and result
 * 
 * Returns a transaction object its hash transaction-hash:
 * 
 * - hash: String, 32 Bytes - hash of the transaction.
 * - nonce: Number - the number of transactions made by the sender prior to this
 *   one.
 * - block-hash: String, 32 Bytes - hash of the block where this transaction was
 *                                  in. null when its pending.
 * - block-number: Number - block number where this transaction was in. null when
 *                          its pending.
 * - transaction-index: Number - integer of the transactions index position in the
 *                               block. null when its pending.
 * - from: String, 20 Bytes - address of the sender.
 * - to: String, 20 Bytes - address of the receiver. null when its a contract
 *                          creation transaction.
 * - value: BigNumber - value transferred in Wei.
 * - gas-price: BigNumber - gas price provided by the sender in Wei.
 * - gas: Number - gas provided by the sender.
 * - input: String - the data sent along with the transaction.
 * 
 * Example:
 * user> `(get-transaction
 *          web3-instance
 *          "0x..."
 *          (fn [err res] (when-not err (println res))))`
 * nil
 * user> {:r 0x...
 *        :v 0x2a
 *        :hash 0xf...
 *        :transaction-index 3 ...
 *        (...)
 *        :to 0x...}
 */
cljs_web3.eth.get_transaction = (function cljs_web3$eth$get_transaction(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31945 = arguments.length;
var i__4500__auto___31946 = (0);
while(true){
if((i__4500__auto___31946 < len__4499__auto___31945)){
args__4502__auto__.push((arguments[i__4500__auto___31946]));

var G__31947 = (i__4500__auto___31946 + (1));
i__4500__auto___31946 = G__31947;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31941){
var vec__31942 = p__31941;
var transaction_hash = cljs.core.nth.call(null,vec__31942,(0),null);
var args = vec__31942;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransaction",args);
});

cljs_web3.eth.get_transaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_transaction.cljs$lang$applyTo = (function (seq31939){
var G__31940 = cljs.core.first.call(null,seq31939);
var seq31939__$1 = cljs.core.next.call(null,seq31939);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31940,seq31939__$1);
});

/**
 * Returns a transaction based on a block hash or number and the transactions
 *   index position.
 * 
 *   Parameters:
 *   web3                 - web3 instance
 *   block-hash-or-number - A block number or hash. Or the string "earliest",
 *                       "latest" or "pending" as in the default block
 *                       parameter.
 *   index                - The transactions index position.
 *   callback-fn          - callback with two parameters, error and result
 *   Number               - The transactions index position.
 * 
 *   Returns a transaction object, see `(get-transaction)`
 * 
 *   Example:
 *   user> `(get-transaction-from-block
 *         web3-instance
 *         1799402
 *         0
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> {:r 0x...
 *       :v 0x2a
 *       :hash 0xf...
 *       :transaction-index 0 ...
 *       (...)
 *       :to 0x...}
 */
cljs_web3.eth.get_transaction_from_block = (function cljs_web3$eth$get_transaction_from_block(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31954 = arguments.length;
var i__4500__auto___31955 = (0);
while(true){
if((i__4500__auto___31955 < len__4499__auto___31954)){
args__4502__auto__.push((arguments[i__4500__auto___31955]));

var G__31956 = (i__4500__auto___31955 + (1));
i__4500__auto___31955 = G__31956;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_transaction_from_block.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31950){
var vec__31951 = p__31950;
var block_hash_or_number = cljs.core.nth.call(null,vec__31951,(0),null);
var index = cljs.core.nth.call(null,vec__31951,(1),null);
var args = vec__31951;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionFromBlock",args);
});

cljs_web3.eth.get_transaction_from_block.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_transaction_from_block.cljs$lang$applyTo = (function (seq31948){
var G__31949 = cljs.core.first.call(null,seq31948);
var seq31948__$1 = cljs.core.next.call(null,seq31948);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31949,seq31948__$1);
});

/**
 * Returns the receipt of a transaction by transaction hash.
 * 
 *   Note That the receipt is not available for pending transactions.
 * 
 *   Parameters:
 *   web3              - web3 instance
 *   transaction-hash  - The transaction hash.
 *   callback-fn       - callback with two parameters, error and result
 * 
 *   Returns transaction receipt object, or null when no receipt was found:
 * 
 *   - blockHash: String, 32 Bytes - hash of the block where this transaction was
 *                                in.
 *   - blockNumber: Number - block number where this transaction was in.
 *   - transactionHash: String, 32 Bytes - hash of the transaction.
 *   - transactionIndex: Number - integer of the transactions index position in the
 *                             block.
 *   - from: String, 20 Bytes - address of the sender.
 *   - to: String, 20 Bytes - address of the receiver. null when its a contract
 *                         creation transaction.
 *   - cumulativeGasUsed: Number - The total amount of gas used when this
 *                              transaction was executed in the block.
 *   - gasUsed: Number - The amount of gas used by this specific transaction alone.
 *   - contractAddress: String - 20 Bytes - The contract address created, if the
 *                                       transaction was a contract creation,
 *                                       otherwise null.
 *   - logs: Array - Array of log objects, which this transaction generated.
 * 
 *   Example
 */
cljs_web3.eth.get_transaction_receipt = (function cljs_web3$eth$get_transaction_receipt(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31963 = arguments.length;
var i__4500__auto___31964 = (0);
while(true){
if((i__4500__auto___31964 < len__4499__auto___31963)){
args__4502__auto__.push((arguments[i__4500__auto___31964]));

var G__31965 = (i__4500__auto___31964 + (1));
i__4500__auto___31964 = G__31965;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_transaction_receipt.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31959){
var vec__31960 = p__31959;
var transaction_hash = cljs.core.nth.call(null,vec__31960,(0),null);
var args = vec__31960;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionReceipt",args);
});

cljs_web3.eth.get_transaction_receipt.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_transaction_receipt.cljs$lang$applyTo = (function (seq31957){
var G__31958 = cljs.core.first.call(null,seq31957);
var seq31957__$1 = cljs.core.next.call(null,seq31957);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31958,seq31957__$1);
});

/**
 * Get the numbers of transactions sent from this address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to get the numbers of transactions from.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the number of transactions sent from the given address.
 * 
 *   Example:
 *   user> `(get-transaction-count web3-instance "0x8"
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 16
 */
cljs_web3.eth.get_transaction_count = (function cljs_web3$eth$get_transaction_count(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31972 = arguments.length;
var i__4500__auto___31973 = (0);
while(true){
if((i__4500__auto___31973 < len__4499__auto___31972)){
args__4502__auto__.push((arguments[i__4500__auto___31973]));

var G__31974 = (i__4500__auto___31973 + (1));
i__4500__auto___31973 = G__31974;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_transaction_count.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31968){
var vec__31969 = p__31968;
var address = cljs.core.nth.call(null,vec__31969,(0),null);
var default_block = cljs.core.nth.call(null,vec__31969,(1),null);
var args = vec__31969;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getTransactionCount",args);
});

cljs_web3.eth.get_transaction_count.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_transaction_count.cljs$lang$applyTo = (function (seq31966){
var G__31967 = cljs.core.first.call(null,seq31966);
var seq31966__$1 = cljs.core.next.call(null,seq31966);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31967,seq31966__$1);
});

/**
 * Sends a transaction to the network.
 * 
 *   Parameters:
 *   web3               - web3 instance
 *   transaction-object - The transaction object to send:
 * 
 *  :from: String - The address for the sending account. Uses the
 *                  `default-account` property, if not specified.
 * 
 *  :to: String   - (optional) The destination address of the message, left
 *                             undefined for a contract-creation
 *                             transaction.
 * 
 *  :value        - (optional) The value transferred for the transaction in
 *                             Wei, also the endowment if it's a
 *                             contract-creation transaction.
 * 
 *  :gas:         - (optional, default: To-Be-Determined) The amount of gas
 *                  to use for the transaction (unused gas is refunded).
 *  :gas-price:   - (optional, default: To-Be-Determined) The price of gas
 *                  for this transaction in wei, defaults to the mean network
 *                  gas price.
 *  :data:        - (optional) Either a byte string containing the associated
 *                  data of the message, or in the case of a contract-creation
 *                  transaction, the initialisation code.
 *  :nonce:       - (optional) Integer of a nonce. This allows to overwrite your
 *                             own pending transactions that use the same nonce.
 *   callback-fn   - callback with two parameters, error and result, where result
 *                is the transaction hash
 * 
 *   Returns the 32 Bytes transaction hash as HEX string.
 * 
 *   If the transaction was a contract creation use `(get-transaction-receipt)` to
 *   get the contract address, after the transaction was mined.
 * 
 *   Example:
 *   user> (send-transaction! web3-instance {:to "0x.."}
 *        (fn [err res] (when-not err (println res))))
 *   nil
 *   user> 0x...
 */
cljs_web3.eth.send_transaction_BANG_ = (function cljs_web3$eth$send_transaction_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31981 = arguments.length;
var i__4500__auto___31982 = (0);
while(true){
if((i__4500__auto___31982 < len__4499__auto___31981)){
args__4502__auto__.push((arguments[i__4500__auto___31982]));

var G__31983 = (i__4500__auto___31982 + (1));
i__4500__auto___31982 = G__31983;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.send_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31977){
var vec__31978 = p__31977;
var transaction_object = cljs.core.nth.call(null,vec__31978,(0),null);
var args = vec__31978;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendTransaction",args);
});

cljs_web3.eth.send_transaction_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.send_transaction_BANG_.cljs$lang$applyTo = (function (seq31975){
var G__31976 = cljs.core.first.call(null,seq31975);
var seq31975__$1 = cljs.core.next.call(null,seq31975);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31976,seq31975__$1);
});

/**
 * Sends an already signed transaction. For example can be signed using:
 *   https://github.com/SilentCicero/ethereumjs-accounts
 * 
 *   Parameters:
 *   web3                    - web3 instance
 *   signed-transaction-data - Signed transaction data in HEX format
 * 
 *   callback-fn             - callback with two parameters, error and result
 * 
 *   Returns the 32 Bytes transaction hash as HEX string.
 * 
 *   If the transaction was a contract creation use `(get-transaction-receipt)`
 *   to get the contract address, after the transaction was mined.
 * 
 *   See https://github.com/ethereum/wiki/wiki/JavaScript-API#example-46 for a
 *   JavaScript example.
 */
cljs_web3.eth.send_raw_transaction_BANG_ = (function cljs_web3$eth$send_raw_transaction_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31990 = arguments.length;
var i__4500__auto___31991 = (0);
while(true){
if((i__4500__auto___31991 < len__4499__auto___31990)){
args__4502__auto__.push((arguments[i__4500__auto___31991]));

var G__31992 = (i__4500__auto___31991 + (1));
i__4500__auto___31991 = G__31992;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.send_raw_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31986){
var vec__31987 = p__31986;
var signed_transaction_data = cljs.core.nth.call(null,vec__31987,(0),null);
var args = vec__31987;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendRawTransaction",args);
});

cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.send_raw_transaction_BANG_.cljs$lang$applyTo = (function (seq31984){
var G__31985 = cljs.core.first.call(null,seq31984);
var seq31984__$1 = cljs.core.next.call(null,seq31984);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31985,seq31984__$1);
});

/**
 * Sends IBAN transaction from user account to destination IBAN address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   from          - address from which we want to send transaction
 *   iban-address  - IBAN address to which we want to send transaction
 *   value         - value that we want to send in IBAN transaction
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Note: uses smart contract to transfer money to IBAN account.
 * 
 *   Example:
 *   user> `(send-iban-transaction! '0xx'
 *                               'NL88YADYA02'
 *                                0x100
 *                                (fn [err res] (prn res)))`
 */
cljs_web3.eth.send_iban_transaction_BANG_ = (function cljs_web3$eth$send_iban_transaction_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31999 = arguments.length;
var i__4500__auto___32000 = (0);
while(true){
if((i__4500__auto___32000 < len__4499__auto___31999)){
args__4502__auto__.push((arguments[i__4500__auto___32000]));

var G__32001 = (i__4500__auto___32000 + (1));
i__4500__auto___32000 = G__32001;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.send_iban_transaction_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__31995){
var vec__31996 = p__31995;
var from = cljs.core.nth.call(null,vec__31996,(0),null);
var iban_address = cljs.core.nth.call(null,vec__31996,(1),null);
var value = cljs.core.nth.call(null,vec__31996,(2),null);
var args = vec__31996;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sendIBANTransaction",args);
});

cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.send_iban_transaction_BANG_.cljs$lang$applyTo = (function (seq31993){
var G__31994 = cljs.core.first.call(null,seq31993);
var seq31993__$1 = cljs.core.next.call(null,seq31993);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31994,seq31993__$1);
});

/**
 * Signs data from a specific account. This account needs to be unlocked.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   address       - The address to sign with
 *   data-to-sign  - Data to sign
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the signed data.
 * 
 *   After the hex prefix, characters correspond to ECDSA values like this:
 * 
 *   r = signature[0:64]
 *   s = signature[64:128]
 *   v = signature[128:130]
 * 
 *   Note that if you are using ecrecover, v will be either "00" or "01". As a
 *   result, in order to use this value, you will have to parse it to an integer
 *   and then add 27. This will result in either a 27 or a 28.
 * 
 *   Example:
 *   user> `(sign web3-instance
 *             "0x135a7de83802408321b74c322f8558db1679ac20"
 *             "0x9dd2c369a187b4e6b9c402f030e50743e619301ea62aa4c0737d4ef7e10a3d49"
 *             (fn [err res] (when-not err (println res))))`
 * 
 *   user> 0x3...
 */
cljs_web3.eth.sign = (function cljs_web3$eth$sign(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32008 = arguments.length;
var i__4500__auto___32009 = (0);
while(true){
if((i__4500__auto___32009 < len__4499__auto___32008)){
args__4502__auto__.push((arguments[i__4500__auto___32009]));

var G__32010 = (i__4500__auto___32009 + (1));
i__4500__auto___32009 = G__32010;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.sign.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__32004){
var vec__32005 = p__32004;
var address = cljs.core.nth.call(null,vec__32005,(0),null);
var data_to_sign = cljs.core.nth.call(null,vec__32005,(1),null);
var args = vec__32005;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"sign",args);
});

cljs_web3.eth.sign.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.sign.cljs$lang$applyTo = (function (seq32002){
var G__32003 = cljs.core.first.call(null,seq32002);
var seq32002__$1 = cljs.core.next.call(null,seq32002);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32003,seq32002__$1);
});

/**
 * Sign a transaction. Method is not documented in the web3.js docs. Not sure if it is safe.
 * 
 *   Parameters:
 *   web3           - web3 instance
 *   sign-tx-params - Parameters of transaction
 *                 See `(send-transaction!)`
 *   private-key    - Private key to sign the transaction with
 *   callback-fn    - callback with two parameters, error and result
 * 
 *   Returns signed transaction data.
 */
cljs_web3.eth.sign_transaction = (function cljs_web3$eth$sign_transaction(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32017 = arguments.length;
var i__4500__auto___32018 = (0);
while(true){
if((i__4500__auto___32018 < len__4499__auto___32017)){
args__4502__auto__.push((arguments[i__4500__auto___32018]));

var G__32019 = (i__4500__auto___32018 + (1));
i__4500__auto___32018 = G__32019;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.sign_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__32013){
var vec__32014 = p__32013;
var sign_tx_params = cljs.core.nth.call(null,vec__32014,(0),null);
var private_key = cljs.core.nth.call(null,vec__32014,(1),null);
var signed_tx = cljs.core.nth.call(null,vec__32014,(2),null);
var args = vec__32014;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"signTransaction",args);
});

cljs_web3.eth.sign_transaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.sign_transaction.cljs$lang$applyTo = (function (seq32011){
var G__32012 = cljs.core.first.call(null,seq32011);
var seq32011__$1 = cljs.core.next.call(null,seq32011);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32012,seq32011__$1);
});

/**
 * Executes a message call transaction, which is directly executed in the VM of
 *   the node, but never mined into the blockchain.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   call-object   - A transaction object see web3.eth.sendTransaction, with the
 *                difference that for calls the from property is optional as
 *                well.
 *   default-block - If you pass this parameter it will not use the default block
 *                set with set-default-block.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the returned data of the call as string, e.g. a codes functions return
 *   value.
 * 
 *   Example:
 *   user> `(call! web3-instance {:to   "0x"
 *                             :data "0x"}
 *              (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0x
 */
cljs_web3.eth.call_BANG_ = (function cljs_web3$eth$call_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32026 = arguments.length;
var i__4500__auto___32027 = (0);
while(true){
if((i__4500__auto___32027 < len__4499__auto___32026)){
args__4502__auto__.push((arguments[i__4500__auto___32027]));

var G__32028 = (i__4500__auto___32027 + (1));
i__4500__auto___32027 = G__32028;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__32022){
var vec__32023 = p__32022;
var call_object = cljs.core.nth.call(null,vec__32023,(0),null);
var default_block = cljs.core.nth.call(null,vec__32023,(1),null);
var args = vec__32023;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"call",args);
});

cljs_web3.eth.call_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.call_BANG_.cljs$lang$applyTo = (function (seq32020){
var G__32021 = cljs.core.first.call(null,seq32020);
var seq32020__$1 = cljs.core.next.call(null,seq32020);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32021,seq32020__$1);
});

/**
 * Executes a message call or transaction, which is directly executed in the VM
 *   of the node, but never mined into the blockchain and returns the amount of the
 *   gas used.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   call-object   - See `(send-transaction!)`, except that all properties are
 *                optional.
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns the used gas for the simulated call/transaction.
 * 
 *   Example:
 *   user> `(estimate-gas web3-instance
 *         {:to   "0x135a7de83802408321b74c322f8558db1679ac20",
 *          :data "0x135a7de83802408321b74c322f8558db1679ac20"}
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 22361
 */
cljs_web3.eth.estimate_gas = (function cljs_web3$eth$estimate_gas(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32035 = arguments.length;
var i__4500__auto___32036 = (0);
while(true){
if((i__4500__auto___32036 < len__4499__auto___32035)){
args__4502__auto__.push((arguments[i__4500__auto___32036]));

var G__32037 = (i__4500__auto___32036 + (1));
i__4500__auto___32036 = G__32037;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.estimate_gas.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__32031){
var vec__32032 = p__32031;
var call_object = cljs.core.nth.call(null,vec__32032,(0),null);
var args = vec__32032;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"estimateGas",args);
});

cljs_web3.eth.estimate_gas.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.estimate_gas.cljs$lang$applyTo = (function (seq32029){
var G__32030 = cljs.core.first.call(null,seq32029);
var seq32029__$1 = cljs.core.next.call(null,seq32029);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32030,seq32029__$1);
});

/**
 * Parameters:
 *   web3          - web3 instance
 *   block-or-transaction  - The string "latest" or "pending" to watch
 *                        for changes in the latest block or pending
 *                        transactions respectively. Or a filter options
 *                        object as follows:
 * 
 *  from-block: Number|String - The number of the earliest block (latest may be
 *                              given to mean the most recent and pending
 *                              currently mining, block). By default
 *                             latest.
 *  to-block: Number|String   - The number of the latest block (latest may be
 *                              given to mean the most recent and pending
 *                              currently mining, block). By default latest.
 * 
 *  address: String           - An address or a list of addresses to only get
 *                              logs from particular account(s).
 * 
 *  :topics: Array of Strings - An array of values which must each appear in the
 *                              log entries. The order is important, if you want
 *                              to leave topics out use null, e.g.
 *                              `[null, '0x00...']`. You can also pass another array
 *                              for each topic with options for that topic e.g.
 *                              `[null, ['option1', 'option2']]`
 * 
 *   Returns a filter object with the following methods:
 * 
 *  `(.get filter callback-fn)`:   Returns all of the log entries that fit the
 *                                 filter.
 *  `(.watch filter callback-fn)`: Watches for state changes that fit the
 *                                 filter and calls the callback.
 *  `(.stopWatching filter)`:      Stops the watch and uninstalls the filter in the
 *                                 node. Should always be called once it is done.
 * 
 *   Watch callback return value
 * 
 *  String - When using the "latest" parameter, it returns the block hash of
 *           the last incoming block.
 * 
 *  String - When using the "pending" parameter, it returns a transaction hash
 *           of the most recent pending transaction.
 *  Object - When using manual filter options, it returns a log object as follows:
 * 
 *      logIndex: Number - integer of the log index position in the block. null
 *                         when its pending log.
 *      transactionIndex: Number - integer of the transactions index position log
 *                                 was created from. null when its pending log.
 *      transactionHash: String, 32 Bytes - hash of the transactions this log was
 *                                          created from. null when its pending log.
 *      blockHash: String, 32 Bytes - hash of the block where this log was in. null
 *                                    when its pending. null when its pending log.
 *      blockNumber: Number - the block number where this log was in. null when its
 *                            pending. null when its pending log.
 *      address: String, 32 Bytes - address from which this log originated.
 *      data: String - contains one or more 32 Bytes non-indexed arguments of the log.
 * 
 *      topics: Array of Strings - Array of 0 to 4 32 Bytes DATA of indexed log
 *                                 arguments. (In solidity: The first topic is the hash
 *                                 of the signature of the event, except if you declared the
 *                                 event with the anonymous specifier.)
 * 
 *   Note for event filter return values see Contract Events at
 *   https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-events
 */
cljs_web3.eth.filter = (function cljs_web3$eth$filter(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32040 = arguments.length;
var i__4500__auto___32041 = (0);
while(true){
if((i__4500__auto___32041 < len__4499__auto___32040)){
args__4502__auto__.push((arguments[i__4500__auto___32041]));

var G__32042 = (i__4500__auto___32041 + (1));
i__4500__auto___32041 = G__32042;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.filter.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"filter",args);
});

cljs_web3.eth.filter.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.filter.cljs$lang$applyTo = (function (seq32038){
var G__32039 = cljs.core.first.call(null,seq32038);
var seq32038__$1 = cljs.core.next.call(null,seq32038);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32039,seq32038__$1);
});

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.get_compilers = (function cljs_web3$eth$get_compilers(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32045 = arguments.length;
var i__4500__auto___32046 = (0);
while(true){
if((i__4500__auto___32046 < len__4499__auto___32045)){
args__4502__auto__.push((arguments[i__4500__auto___32046]));

var G__32047 = (i__4500__auto___32046 + (1));
i__4500__auto___32046 = G__32047;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.get_compilers.cljs$core$IFn$_invoke$arity$variadic = (function (web3,args){
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"getCompilers",args);
});

cljs_web3.eth.get_compilers.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.get_compilers.cljs$lang$applyTo = (function (seq32043){
var G__32044 = cljs.core.first.call(null,seq32043);
var seq32043__$1 = cljs.core.next.call(null,seq32043);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32044,seq32043__$1);
});

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_solidity = (function cljs_web3$eth$compile_solidity(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32054 = arguments.length;
var i__4500__auto___32055 = (0);
while(true){
if((i__4500__auto___32055 < len__4499__auto___32054)){
args__4502__auto__.push((arguments[i__4500__auto___32055]));

var G__32056 = (i__4500__auto___32055 + (1));
i__4500__auto___32055 = G__32056;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.compile_solidity.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__32050){
var vec__32051 = p__32050;
var source_string = cljs.core.nth.call(null,vec__32051,(0),null);
var args = vec__32051;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"solidity",args);
});

cljs_web3.eth.compile_solidity.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.compile_solidity.cljs$lang$applyTo = (function (seq32048){
var G__32049 = cljs.core.first.call(null,seq32048);
var seq32048__$1 = cljs.core.next.call(null,seq32048);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32049,seq32048__$1);
});

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_lll = (function cljs_web3$eth$compile_lll(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32063 = arguments.length;
var i__4500__auto___32064 = (0);
while(true){
if((i__4500__auto___32064 < len__4499__auto___32063)){
args__4502__auto__.push((arguments[i__4500__auto___32064]));

var G__32065 = (i__4500__auto___32064 + (1));
i__4500__auto___32064 = G__32065;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.compile_lll.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__32059){
var vec__32060 = p__32059;
var source_string = cljs.core.nth.call(null,vec__32060,(0),null);
var args = vec__32060;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"lll",args);
});

cljs_web3.eth.compile_lll.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.compile_lll.cljs$lang$applyTo = (function (seq32057){
var G__32058 = cljs.core.first.call(null,seq32057);
var seq32057__$1 = cljs.core.next.call(null,seq32057);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32058,seq32057__$1);
});

/**
 * Compiling features being deprecated https://github.com/ethereum/EIPs/issues/209
 */
cljs_web3.eth.compile_serpent = (function cljs_web3$eth$compile_serpent(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32072 = arguments.length;
var i__4500__auto___32073 = (0);
while(true){
if((i__4500__auto___32073 < len__4499__auto___32072)){
args__4502__auto__.push((arguments[i__4500__auto___32073]));

var G__32074 = (i__4500__auto___32073 + (1));
i__4500__auto___32073 = G__32074;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.compile_serpent.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__32068){
var vec__32069 = p__32068;
var source_string = cljs.core.nth.call(null,vec__32069,(0),null);
var args = vec__32069;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.get_compile.call(null,web3),"serpent",args);
});

cljs_web3.eth.compile_serpent.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.compile_serpent.cljs$lang$applyTo = (function (seq32066){
var G__32067 = cljs.core.first.call(null,seq32066);
var seq32066__$1 = cljs.core.next.call(null,seq32066);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32067,seq32066__$1);
});

/**
 * Returns GlobalRegistrar object.
 * 
 *   See https://github.com/ethereum/web3.js/blob/master/example/namereg.html
 *   for an example in JavaScript.
 */
cljs_web3.eth.namereg = (function cljs_web3$eth$namereg(web3){
return (cljs_web3.eth.eth.call(null,web3)["namereg"]);
});
/**
 * Creates a contract object for a solidity contract, which can be used to
 *   initiate contracts on an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   abi           - ABI array with descriptions of functions and events of
 *                the contract
 *   callback-fn   - callback with two parameters, error and result
 * 
 *   Returns a contract object.
 */
cljs_web3.eth.contract = (function cljs_web3$eth$contract(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32081 = arguments.length;
var i__4500__auto___32082 = (0);
while(true){
if((i__4500__auto___32082 < len__4499__auto___32081)){
args__4502__auto__.push((arguments[i__4500__auto___32082]));

var G__32083 = (i__4500__auto___32082 + (1));
i__4500__auto___32082 = G__32083;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.contract.cljs$core$IFn$_invoke$arity$variadic = (function (web3,p__32077){
var vec__32078 = p__32077;
var abi = cljs.core.nth.call(null,vec__32078,(0),null);
var args = vec__32078;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.eth.call(null,web3),"contract",args);
});

cljs_web3.eth.contract.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.contract.cljs$lang$applyTo = (function (seq32075){
var G__32076 = cljs.core.first.call(null,seq32075);
var seq32075__$1 = cljs.core.next.call(null,seq32075);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32076,seq32075__$1);
});

/**
 * Initiate an existing contract on an address.
 * 
 *   Parameters:
 *   web3          - web3 instance
 *   abi           - ABI array with descriptions of functions and events of
 *                the contract
 *   address       - The address of the existing contract
 * 
 *   Example:
 *   user> `(contract-at web3-instance
 *                    abi
 *                    address)`
 */
cljs_web3.eth.contract_at = (function cljs_web3$eth$contract_at(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32091 = arguments.length;
var i__4500__auto___32092 = (0);
while(true){
if((i__4500__auto___32092 < len__4499__auto___32091)){
args__4502__auto__.push((arguments[i__4500__auto___32092]));

var G__32093 = (i__4500__auto___32092 + (1));
i__4500__auto___32092 = G__32093;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs_web3.eth.contract_at.cljs$core$IFn$_invoke$arity$variadic = (function (web3,abi,p__32087){
var vec__32088 = p__32087;
var address = cljs.core.nth.call(null,vec__32088,(0),null);
var args = vec__32088;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.contract.call(null,web3,abi),"at",args);
});

cljs_web3.eth.contract_at.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_web3.eth.contract_at.cljs$lang$applyTo = (function (seq32084){
var G__32085 = cljs.core.first.call(null,seq32084);
var seq32084__$1 = cljs.core.next.call(null,seq32084);
var G__32086 = cljs.core.first.call(null,seq32084__$1);
var seq32084__$2 = cljs.core.next.call(null,seq32084__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32085,G__32086,seq32084__$2);
});

/**
 * Deploy a contract asynchronous from a Solidity file.
 * 
 *   Parameters:
 *   web3             - web3 instance
 *   abi              - ABI array with descriptions of functions and events of
 *                   the contract
 *   transaction-data - map that contains
 *  - :gas - max gas to use
 *  - :data the BIN of the contract
 *  - :from account to use
 *   callback-fn      - callback with two parameters, error and contract.
 *                   From the contract the "address" property can be used to
 *                   obtain the address. And the "transactionHash" to obtain
 *                   the hash of the transaction, which created the contract.
 * 
 *   Example:
 *   `(contract-new web3-instance
 *               abi
 *               {:from "0x.."
 *                :data bin
 *                :gas  4000000}
 *               (fn [err contract]
 *                 (if-not err
 *                  (let [address (aget contract "address")
 *                        tx-hash (aget contract "transactionHash")]
 *                    ;; Two calls: transaction received
 *                    ;; and contract deployed.
 *                    ;; Check address on the second call
 *                    (when (address? address)
 *                      (do-something-with-contract contract)
 *                      (do-something-with-address address)))
 *                  (println "error deploying contract" err))))`
 * nil
 */
cljs_web3.eth.contract_new = (function cljs_web3$eth$contract_new(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32101 = arguments.length;
var i__4500__auto___32102 = (0);
while(true){
if((i__4500__auto___32102 < len__4499__auto___32101)){
args__4502__auto__.push((arguments[i__4500__auto___32102]));

var G__32103 = (i__4500__auto___32102 + (1));
i__4500__auto___32102 = G__32103;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs_web3.eth.contract_new.cljs$core$IFn$_invoke$arity$variadic = (function (web3,abi,p__32097){
var vec__32098 = p__32097;
var transaction_data = cljs.core.nth.call(null,vec__32098,(0),null);
var callback_fn = cljs.core.nth.call(null,vec__32098,(1),null);
var args = vec__32098;
return cljs_web3.utils.js_apply.call(null,cljs_web3.eth.contract.call(null,web3,abi),"new",args);
});

cljs_web3.eth.contract_new.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_web3.eth.contract_new.cljs$lang$applyTo = (function (seq32094){
var G__32095 = cljs.core.first.call(null,seq32094);
var seq32094__$1 = cljs.core.next.call(null,seq32094);
var G__32096 = cljs.core.first.call(null,seq32094__$1);
var seq32094__$2 = cljs.core.next.call(null,seq32094__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32095,G__32096,seq32094__$2);
});

/**
 * Explicitly call a method on a contract.
 * 
 *   Use the kebab-cases version of the original method.
 *   E.g., function fooBar() can be addressed with :foo-bar.
 * 
 *   Parameters:
 *   contract-instance - an instance of the contract (obtained via `contract` or
 *                    `contract-at`)
 *   method            - the kebab-cased version of the method
 *   args              - arguments to the method
 * 
 *   Example:
 *   user> `(web3-eth/contract-call ContractInstance :multiply 5)`
 *   25
 */
cljs_web3.eth.contract_call = (function cljs_web3$eth$contract_call(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32107 = arguments.length;
var i__4500__auto___32108 = (0);
while(true){
if((i__4500__auto___32108 < len__4499__auto___32107)){
args__4502__auto__.push((arguments[i__4500__auto___32108]));

var G__32109 = (i__4500__auto___32108 + (1));
i__4500__auto___32108 = G__32109;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs_web3.eth.contract_call.cljs$core$IFn$_invoke$arity$variadic = (function (contract_instance,method,args){
return cljs_web3.utils.js_apply.call(null,contract_instance,method,args);
});

cljs_web3.eth.contract_call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_web3.eth.contract_call.cljs$lang$applyTo = (function (seq32104){
var G__32105 = cljs.core.first.call(null,seq32104);
var seq32104__$1 = cljs.core.next.call(null,seq32104);
var G__32106 = cljs.core.first.call(null,seq32104__$1);
var seq32104__$2 = cljs.core.next.call(null,seq32104__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32105,G__32106,seq32104__$2);
});

cljs_web3.eth.contract_get_data = (function cljs_web3$eth$contract_get_data(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32113 = arguments.length;
var i__4500__auto___32114 = (0);
while(true){
if((i__4500__auto___32114 < len__4499__auto___32113)){
args__4502__auto__.push((arguments[i__4500__auto___32114]));

var G__32115 = (i__4500__auto___32114 + (1));
i__4500__auto___32114 = G__32115;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs_web3.eth.contract_get_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs_web3.eth.contract_get_data.cljs$core$IFn$_invoke$arity$variadic = (function (contract_instance,method,args){
var method_name = cljs_web3.utils.camel_case.call(null,cljs.core.name.call(null,method));
var method_fn = (contract_instance[method_name]);
if(cljs.core.truth_(method_fn)){
return cljs_web3.utils.js_apply.call(null,method_fn,"getData",args);
} else {
throw ["Method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)," was not found in object."].join('');
}
});

cljs_web3.eth.contract_get_data.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs_web3.eth.contract_get_data.cljs$lang$applyTo = (function (seq32110){
var G__32111 = cljs.core.first.call(null,seq32110);
var seq32110__$1 = cljs.core.next.call(null,seq32110);
var G__32112 = cljs.core.first.call(null,seq32110__$1);
var seq32110__$2 = cljs.core.next.call(null,seq32110__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32111,G__32112,seq32110__$2);
});

/**
 * Stops and uninstalls the filter.
 * 
 *   Arguments:
 *   filter - the filter to stop
 */
cljs_web3.eth.stop_watching_BANG_ = (function cljs_web3$eth$stop_watching_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32118 = arguments.length;
var i__4500__auto___32119 = (0);
while(true){
if((i__4500__auto___32119 < len__4499__auto___32118)){
args__4502__auto__.push((arguments[i__4500__auto___32119]));

var G__32120 = (i__4500__auto___32119 + (1));
i__4500__auto___32119 = G__32120;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs_web3.eth.stop_watching_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (filter,args){
return cljs_web3.utils.js_apply.call(null,filter,"stopWatching",args);
});

cljs_web3.eth.stop_watching_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_web3.eth.stop_watching_BANG_.cljs$lang$applyTo = (function (seq32116){
var G__32117 = cljs.core.first.call(null,seq32116);
var seq32116__$1 = cljs.core.next.call(null,seq32116);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32117,seq32116__$1);
});


//# sourceMappingURL=eth.js.map?rel=1526705066404
