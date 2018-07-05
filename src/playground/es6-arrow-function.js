// es5
const square5 = function (x) {
    return x * x;
}
console.log("SquareEs5", square5(2));


// es6 (we do love 'em lambdas)
const square6 = (x) => x * x;
console.log("SquareEs6", square6(3));