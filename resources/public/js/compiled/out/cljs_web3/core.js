// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_web3.core');
goog.require('cljs.core');
goog.require('cljs_web3.utils');
/**
 * Returns a string representing the Ethereum js api version.
 * 
 *   Parameters:
 *   Web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(web3/version-node web3-instance
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0.2.0
 */
cljs_web3.core.version_api = cljs_web3.utils.prop_or_clb_fn.call(null,"version","api");
/**
 * Returns a string representing the client/node version.
 * 
 *   Parameters:
 *   Web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(version-node web3-instance
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> MetaMask/v3.10.8
 */
cljs_web3.core.version_node = cljs_web3.utils.prop_or_clb_fn.call(null,"version","node");
/**
 * Returns a string representing the network protocol version.
 * 
 *   "1"  is Main Net or Local Net
 *   "2"  is (Deprecated) Morden Network
 *   "3"  is Ropsten Test Net
 *   "4"  is Rinkeby Test Net
 *   "42" is Kovan Test Net
 * 
 *   Parameters:
 *   Web3        - Web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(version-network web3-instance
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 3
 */
cljs_web3.core.version_network = cljs_web3.utils.prop_or_clb_fn.call(null,"version","network");
/**
 * Returns a hexadecimal string representing the Ethereum protocol version.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(version-ethereum web3-instance
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 0x3f
 */
cljs_web3.core.version_ethereum = cljs_web3.utils.prop_or_clb_fn.call(null,"version","ethereum");
/**
 * Returns a string representing the Whisper protocol version.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(version-whisper
 *         web3-instance
 *         (fn [err res] (when-not err (println res))))`
 *   nil
 *   user> 20
 */
cljs_web3.core.version_whisper = cljs_web3.utils.prop_or_clb_fn.call(null,"version","whisper");
/**
 * Returns a boolean indicating if a connection to a node exists.
 * 
 *   Parameters:
 *   web3        - web3 instance
 *   callback-fn - callback with two parameters, error and result
 * 
 *   Example:
 *   user> `(connected? web3-instance)`
 *   true
 */
cljs_web3.core.connected_QMARK_ = (function cljs_web3$core$connected_QMARK_(web3){
return cljs_web3.utils.js_apply.call(null,web3,"isConnected");
});
/**
 * Returns a string representing the Keccak-256 SHA3 of the given data.
 * 
 *   Parameters:
 *   String - The string to hash using the Keccak-256 SHA3 algorithm
 *   Map    - (optional) Set encoding to hex if the string to hash is encoded
 *                    in hex. A leading 0x will be automatically ignored.
 *   Web3   - (optional first argument) Web3 JavaScript object.
 * 
 *   Example:
 *   user> (def hash "Some string to be hashed")
 *   #'user/hash
 *   user> `(sha3 hash)
 *   "0xed973b234cf2238052c9ac87072c71bcf33abc1bbd721018e0cca448ef79b379"`
 *   user> `(sha3 hash {:encoding :hex})`
 *   "0xbd83a94d23235dd7dfcf67a5a0d9e9643a715cd5b528083a2cf944d61f8e7b51"
 * 
 *   NOTE: This differs from the documented result of the Web3 JavaScript API,
 *   which equals
 *   "0x85dd39c91a64167ba20732b228251e67caed1462d4bcf036af88dc6856d0fdcc"
 */
cljs_web3.core.sha3 = (function cljs_web3$core$sha3(var_args){
var G__32318 = arguments.length;
switch (G__32318) {
case 1:
return cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$1 = (function (string){
return cljs_web3.core.sha3.call(null,string,null);
});

cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$2 = (function (string,options){
return cljs_web3.core.sha3.call(null,Web3,string,options);
});

cljs_web3.core.sha3.cljs$core$IFn$_invoke$arity$3 = (function (Web3,string,options){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"sha3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,options], null));
});

cljs_web3.core.sha3.cljs$lang$maxFixedArity = 3;

/**
 * Returns hexadecimal string representation of any value
 *   string|number|map|set|BigNumber.
 * 
 *   Parameters:
 *   Any  - The value to parse
 *   Web3 - (optional first argument) Web3 JavaScript object.
 * 
 *   Example:
 *   user> `(to-hex "foo")`
 *   "0x666f6f" 
 */
cljs_web3.core.to_hex = (function cljs_web3$core$to_hex(var_args){
var G__32321 = arguments.length;
switch (G__32321) {
case 1:
return cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$1 = (function (any){
return cljs_web3.core.to_hex.call(null,Web3,any);
});

cljs_web3.core.to_hex.cljs$core$IFn$_invoke$arity$2 = (function (Web3,any){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toHex",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [any], null));
});

cljs_web3.core.to_hex.cljs$lang$maxFixedArity = 2;

/**
 * Converts a HEX string into a ASCII string.
 * 
 *   Parameters:
 *   hex-string - A HEX string to be converted to ASCII.
 *   Web3       - (optional first argument) Web3 JavaScript object.
 * 
 *   Example:
 *   user> `(to-ascii "0x666f6f")`
 *   "foo" 
 */
cljs_web3.core.to_ascii = (function cljs_web3$core$to_ascii(var_args){
var G__32324 = arguments.length;
switch (G__32324) {
case 1:
return cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$1 = (function (hex_string){
return cljs_web3.core.to_ascii.call(null,Web3,hex_string);
});

cljs_web3.core.to_ascii.cljs$core$IFn$_invoke$arity$2 = (function (Web3,hex_string){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toAscii",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hex_string], null));
});

cljs_web3.core.to_ascii.cljs$lang$maxFixedArity = 2;

/**
 * Converts any ASCII string to a HEX string.
 * 
 *   Parameters:
 *   string  - An ASCII string to be converted to HEX.
 *   padding - (optional) The number of bytes the returned HEX string should have.
 *   Web3    - (optional first argument) Web3 JavaScript object.
 * 
 *   Example:
 *   user> `(from-ascii "ethereum")`
 *   "0x657468657265756d"
 *   user> `(from-ascii "ethereum")`
 *   "0x657468657265756d000000000000000000000000000000000000000000000000"
 * 
 *   NOTE: The latter is intended behaviour. Because of a bug in Web3 the padding
 *      is not added. See https://github.com/ethereum/web3.js/issues/337
 */
cljs_web3.core.from_ascii = (function cljs_web3$core$from_ascii(var_args){
var G__32327 = arguments.length;
switch (G__32327) {
case 1:
return cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$1 = (function (string){
return cljs_web3.core.from_ascii.call(null,string,null);
});

cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$2 = (function (string,padding){
return cljs_web3.core.from_ascii.call(null,Web3,string,padding);
});

cljs_web3.core.from_ascii.cljs$core$IFn$_invoke$arity$3 = (function (Web3,string,padding){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"fromAscii",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,padding], null));
});

cljs_web3.core.from_ascii.cljs$lang$maxFixedArity = 3;

/**
 * Returns the number representing a HEX string in its number representation.
 * 
 *   Parameters:
 *   hex-string - An HEX string to be converted to a number.
 *   Web3       - (optional first argument) Web3 JavaScript object.
 * 
 *   Example:
 *   user> `(to-decimal "0x15")`
 *   21
 */
cljs_web3.core.to_decimal = (function cljs_web3$core$to_decimal(var_args){
var G__32330 = arguments.length;
switch (G__32330) {
case 1:
return cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$1 = (function (hex_string){
return cljs_web3.core.to_decimal.call(null,Web3,hex_string);
});

cljs_web3.core.to_decimal.cljs$core$IFn$_invoke$arity$2 = (function (Web3,hex_string){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toDecimal",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hex_string], null));
});

cljs_web3.core.to_decimal.cljs$lang$maxFixedArity = 2;

/**
 * Converts a number or number string to its HEX representation.
 * 
 *   Parameters:
 *   number - A number to be converted to a HEX string.
 *   Web3   - (optional first argument) Web3 JavaScript object.
 * 
 *   Example:
 *   user-> `(web3/from-decimal 21)`
 *   "0x15"
 */
cljs_web3.core.from_decimal = (function cljs_web3$core$from_decimal(var_args){
var G__32333 = arguments.length;
switch (G__32333) {
case 1:
return cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$1 = (function (number){
return cljs_web3.core.from_decimal.call(null,Web3,number);
});

cljs_web3.core.from_decimal.cljs$core$IFn$_invoke$arity$2 = (function (Web3,number){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"fromDecimal",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [number], null));
});

cljs_web3.core.from_decimal.cljs$lang$maxFixedArity = 2;

/**
 * Converts a number of Wei into an Ethereum unit.
 * 
 *   Parameters:
 *   number - A number or BigNumber instance.
 *   unit   - One of :noether :wei :kwei :Kwei :babbage :femtoether :mwei :Mwei
 *         :lovelace :picoether :gwei :Gwei :shannon :nanoether :nano :szabo
 *         :microether :micro :finney :milliether :milli :ether :kether :grand
 *         :mether :gether :tether
 *   Web3   - (optional first argument) Web3 JavaScript object.
 * 
 *   Returns either a number string, or a BigNumber instance, depending on the
 *   given number parameter.
 * 
 *   Example:
 *   user> `(web3/from-wei 10 :ether)`
 *   "0.00000000000000001"
 */
cljs_web3.core.from_wei = (function cljs_web3$core$from_wei(var_args){
var G__32336 = arguments.length;
switch (G__32336) {
case 2:
return cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$2 = (function (number,unit){
return cljs_web3.core.from_wei.call(null,Web3,number,unit);
});

cljs_web3.core.from_wei.cljs$core$IFn$_invoke$arity$3 = (function (Web3,number,unit){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"fromWei",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [number,cljs.core.name.call(null,unit)], null));
});

cljs_web3.core.from_wei.cljs$lang$maxFixedArity = 3;

/**
 * Converts an Ethereum unit into Wei.
 * 
 *   Parameters:
 *   number - A number or BigNumber instance.
 *   unit   - One of :noether :wei :kwei :Kwei :babbage :femtoether :mwei :Mwei
 *         :lovelace :picoether :gwei :Gwei :shannon :nanoether :nano :szabo
 *         :microether :micro :finney :milliether :milli :ether :kether :grand
 *         :mether :gether :tether
 *   Web3   - (optional first argument) Web3 JavaScript object.
 * 
 *   Returns either a number string, or a BigNumber instance, depending on the
 *   given number parameter.
 * 
 *   Example:
 *   user> `(web3/to-wei 10 :ether)`
 *   "10000000000000000000"
 */
cljs_web3.core.to_wei = (function cljs_web3$core$to_wei(var_args){
var G__32339 = arguments.length;
switch (G__32339) {
case 2:
return cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$2 = (function (number,unit){
return cljs_web3.core.to_wei.call(null,Web3,number,unit);
});

cljs_web3.core.to_wei.cljs$core$IFn$_invoke$arity$3 = (function (Web3,number,unit){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toWei",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [number,cljs.core.name.call(null,unit)], null));
});

cljs_web3.core.to_wei.cljs$lang$maxFixedArity = 3;

/**
 * Converts a given number into a BigNumber instance.
 * 
 *   Parameters:
 *   number-or-hex-string - A number, number string or HEX string of a number.
 *   Web3                 - (optional first argument) Web3 JavaScript object.
 * 
 *   Example:
 *   user> `(to-big-number "10000000000000000000")`
 *   <An instance of BigNumber>
 */
cljs_web3.core.to_big_number = (function cljs_web3$core$to_big_number(var_args){
var G__32342 = arguments.length;
switch (G__32342) {
case 1:
return cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$1 = (function (number_or_hex_string){
return cljs_web3.core.to_big_number.call(null,Web3,number_or_hex_string);
});

cljs_web3.core.to_big_number.cljs$core$IFn$_invoke$arity$2 = (function (Web3,number_or_hex_string){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"toBigNumber",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [number_or_hex_string], null));
});

cljs_web3.core.to_big_number.cljs$lang$maxFixedArity = 2;

/**
 * Returns input string with zeroes or sign padded to the left.
 * 
 *   Parameters:
 *   string - String to be padded
 *   chars  - Amount of chars to address
 *   sign   - (optional) Char to pad with (behaviour with multiple chars is
 *                    undefined)
 *   Web3   - (optional first argument) Web3 JavaScript object.
 * 
 *   Example:
 *   user> `(web3/pad-left "foo" 8)`
 *   "00000foo"
 *   user> `(web3/pad-left "foo" 8 "b")`
 *   "bbbbbfoo" 
 */
cljs_web3.core.pad_left = (function cljs_web3$core$pad_left(var_args){
var G__32345 = arguments.length;
switch (G__32345) {
case 2:
return cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$2 = (function (string,chars){
return cljs_web3.core.pad_left.call(null,string,chars,null);
});

cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$3 = (function (string,chars,sign){
return cljs_web3.core.pad_left.call(null,Web3,string,chars,sign);
});

cljs_web3.core.pad_left.cljs$core$IFn$_invoke$arity$4 = (function (Web3,string,chars,sign){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"padLeft",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,chars,sign], null));
});

cljs_web3.core.pad_left.cljs$lang$maxFixedArity = 4;

/**
 * Returns input string with zeroes or sign padded to the right.
 * 
 *   Parameters:
 *   string - String to be padded
 *   chars  - Amount of total chars
 *   sign   - (optional) Char to pad with (behaviour with multiple chars is
 *                    undefined)
 *   Web3   - (optional first argument) Web3 instance
 * 
 *   Example:
 *   user> `(web3/pad-right "foo" 8)`
 *   "foo00000"
 *   user> `(web3/pad-right "foo" 8 "b")`
 *   "foobbbbb" 
 */
cljs_web3.core.pad_right = (function cljs_web3$core$pad_right(var_args){
var G__32348 = arguments.length;
switch (G__32348) {
case 2:
return cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$2 = (function (string,chars){
return cljs_web3.core.pad_right.call(null,string,chars,null);
});

cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$3 = (function (string,chars,sign){
return cljs_web3.core.pad_right.call(null,Web3,string,chars,sign);
});

cljs_web3.core.pad_right.cljs$core$IFn$_invoke$arity$4 = (function (Web3,string,chars,sign){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"padRight",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [string,chars,sign], null));
});

cljs_web3.core.pad_right.cljs$lang$maxFixedArity = 4;

/**
 * Returns a boolean indicating if the given string is an address.
 * 
 *   Parameters:
 *   address - An HEX string.
 *   Web3    - (Optional first argument) Web3 JavaScript object
 * 
 *   Returns false if it's not on a valid address format. Returns true if it's an
 *   all lowercase or all uppercase valid address. If it's a mixed case address, it
 *   checks using web3's isChecksumAddress().
 * 
 *   Example:
 *   user> `(address? "0x8888f1f195afa192cfee860698584c030f4c9db1")`
 *   true
 * 
 *   ;; With first f capitalized
 *   user> `(web3/address? "0x8888F1f195afa192cfee860698584c030f4c9db1")`
 *   false
 */
cljs_web3.core.address_QMARK_ = (function cljs_web3$core$address_QMARK_(var_args){
var G__32351 = arguments.length;
switch (G__32351) {
case 1:
return cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (address){
return cljs_web3.core.address_QMARK_.call(null,Web3,address);
});

cljs_web3.core.address_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (Web3,address){
return cljs_web3.utils.js_prototype_apply.call(null,Web3,"isAddress",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [address], null));
});

cljs_web3.core.address_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Should be called to reset the state of web3. Resets everything except the manager.
 *   Uninstalls all filters. Stops polling.
 * 
 *   Parameters:
 *   web3             - An instance of web3
 *   keep-is-syncing? - If true it will uninstall all filters, but will keep the
 *                   web3.eth.isSyncing() polls
 * 
 *   Returns nil.
 * 
 *   Example:
 *   user> `(reset web3-instance true)`
 *   nil
 */
cljs_web3.core.reset = (function cljs_web3$core$reset(var_args){
var G__32354 = arguments.length;
switch (G__32354) {
case 1:
return cljs_web3.core.reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.reset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.reset.cljs$core$IFn$_invoke$arity$1 = (function (web3){
return cljs_web3.core.reset.call(null,web3,false);
});

cljs_web3.core.reset.cljs$core$IFn$_invoke$arity$2 = (function (web3,keep_is_syncing_QMARK_){
return cljs_web3.utils.js_apply.call(null,web3,"reset",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keep_is_syncing_QMARK_], null));
});

cljs_web3.core.reset.cljs$lang$maxFixedArity = 2;

/**
 * Should be called to set provider.
 * 
 *   Parameters:
 *   web3     - Web3 instance
 *   provider - the provider
 * 
 *   Available providers in web3-cljs:
 *   - `http-provider`
 *   - `ipc-provider`
 * 
 *   Example:
 *   user> `(set-provider web3-instance
 *                     (http-provider web3-instance "http://localhost:8545"))`
 *   nil
 */
cljs_web3.core.set_provider = (function cljs_web3$core$set_provider(web3,provider){
return cljs_web3.utils.js_apply.call(null,web3,"setProvider",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [provider], null));
});
/**
 * Will contain the current provider, if one is set. This can be used to check
 *   if Mist etc. already set a provider.
 * 
 *   Parameters:
 *   web3 - web3 instance
 * 
 *   Returns the provider set or nil.
 */
cljs_web3.core.current_provider = (function cljs_web3$core$current_provider(web3){
return (web3["currentProvider"]);
});
cljs_web3.core.http_provider = (function cljs_web3$core$http_provider(Web3,uri){
var constructor$ = (Web3["providers"]["HttpProvider"]);
return (new constructor$(uri));
});
cljs_web3.core.ipc_provider = (function cljs_web3$core$ipc_provider(Web3,uri){
var constructor$ = (Web3["providers"]["IpcProvider"]);
return (new constructor$(uri));
});
/**
 * Creates a web3 instance using an `http-provider`.
 * 
 *   Parameters:
 *   url  - The URL string for which to create the provider.
 *   Web3 - (Optional first argument) Web3 JavaScript object
 * 
 *   Example:
 *   user> `(create-web3 "http://localhost:8545/")`
 *   <web3 instance>
 */
cljs_web3.core.create_web3 = (function cljs_web3$core$create_web3(var_args){
var G__32357 = arguments.length;
switch (G__32357) {
case 1:
return cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$1 = (function (url){
return cljs_web3.core.create_web3.call(null,Web3,url);
});

cljs_web3.core.create_web3.cljs$core$IFn$_invoke$arity$2 = (function (Web3,url){
return (new Web3(cljs_web3.core.http_provider.call(null,Web3,url)));
});

cljs_web3.core.create_web3.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1526705066650
