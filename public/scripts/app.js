"use strict";

// es5
var square5 = function square5(x) {
    return x * x;
};
console.log("SquareEs5", square5(2));

// es6 (we do love 'em lambdas)
var square6 = function square6(x) {
    return x * x;
};
console.log("SquareEs6", square6(3));
