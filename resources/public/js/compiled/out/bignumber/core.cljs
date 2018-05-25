(ns bignumber.core
  (:refer-clojure :exclude [pos? neg? abs int? zero? - + * / mod = > >= < <=]))

(defn bignumber? [x]
  ; Doesn't work for web3.js, leaving it here for the future record
  ; (and x (cljs.core/= (aget x "constructor" "name") "BigNumber"))
  (and x (aget x "toNumber")))

(defn- apply-fn [bn-fn-name native-fn x & args]
  (if (bignumber? x)
    (apply js-invoke x bn-fn-name args)
    (apply native-fn x args)))


(defn- apply-arithmentic-fn [bn-fn-name native-fn x y base]
  (if (bignumber? x)
    (js-invoke x bn-fn-name y base)
    (native-fn x y)))


(defn number [x]
  (apply-fn "toNumber" identity x))


(defn abs [x]
  (apply-fn "abs" js/Math.abs x))


(defn ceil [x]
  (apply-fn "ceil" js/Math.ceil x))


(defn cmp [x & [base]]
  (apply-fn "cmp" compare x base))


(defn dp [x]
  (apply-fn "dp" identity x))


(defn / [x y & [base]]
  (apply-arithmentic-fn "div" cljs.core/divide x y base))


(defn div-to-int [x y & [base]]
  (apply-arithmentic-fn "divToInt" cljs.core/divide x y base))


(defn = [x y & [base]]
  (apply-arithmentic-fn "eq" cljs.core/= x y base))


(defn floor [x]
  (apply-fn "floor" js/Math.floor x))


(defn > [x y & [base]]
  (apply-arithmentic-fn "gt" cljs.core/> x y base))


(defn >= [x y & [base]]
  (apply-arithmentic-fn "gte" cljs.core/>= x y base))


(defn finite? [x]
  (apply-fn "isFinite" (complement infinite?) x))


(defn int? [x]
  (apply-fn "isInt" cljs.core/int? x))


(defn nan? [x]
  (apply-fn "isNaN" js/isNaN x))


(defn neg? [x]
  (apply-fn "isNeg" cljs.core/neg? x))


(defn zero? [x]
  (apply-fn "isZero" cljs.core/zero? x))


(defn < [x y & [base]]
  (apply-arithmentic-fn "lt" cljs.core/< x y base))


(defn <= [x y & [base]]
  (apply-arithmentic-fn "lte" cljs.core/<= x y base))


(defn - [x y & [base]]
  (apply-arithmentic-fn "minus" cljs.core/- x y base))


(defn mod [x y & [base]]
  (apply-arithmentic-fn "mod" cljs.core/mod x y base))


(defn neg [x]
  (apply-fn "neg" cljs.core/unchecked-negate x))

(defn + [x y & [base]]
  (apply-arithmentic-fn "plus" cljs.core/+ x y base))


(defn sd [x & [z]]
  ;; No equivalent in native JS
  (apply-fn "sd" (constantly nil) x z))


(defn round [x & [dp rm]]
  (apply-fn "round" js/Math.round x dp rm))


(defn shift [x z]
  ;;  ¯\_(ツ)_/¯
  (apply-fn "shift" (constantly nil) x dp z))


(defn sqrt [x]
  (apply-fn "sqrt" js/Math.sqrt x))


(defn * [x y & [base]]
  (apply-arithmentic-fn "times" cljs.core/* x y base))


(defn digits [x & [sd rm]]
  (apply-fn "toDigits" identity x sd rm))


(defn exponential [x & [dp rm]]
  (js-invoke x "toExponential" dp rm))


(defn fixed [x & [dp rm]]
  (js-invoke x "toFixed" dp rm))


(defn format [x & [dp rm]]
  (apply-fn "toFormat" identity x dp rm))


(defn fraction [x & [max]]
  (apply-fn "toFraction" identity x map))


(defn json [x]
  (apply-fn "toJSON" js/JSON.stringify x))


(defn pow [x n & [m]]
  (apply-fn "pow" js/Math.pow x n m))


(defn precision [x & [sd rm]]
  (js-invoke x "toPrecision" sd rm))


(defn trunc [x]
  (cond
    (bignumber? x) (js-invoke x "trunc" x)
    (number? x) (int x)
    :else x))


(defn value-of [x]
  (js-invoke x "valueOf"))



