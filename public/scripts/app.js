"use strict";

var nameVar = "John";
// Now, this is weird sh*t
var nameVar = "Jackie";
// => prints "Jackie"
console.log("nameVar:", nameVar);

var nameLet = "John";
nameLet = "John Doe";
// not possible:
// let nameLet = "Berta";
console.log("nameLet:", nameLet);

var nameConst = "ConstName";
// not possible:
// nameConst = "foo";
console.log("nameConst:", nameConst);

// Scoping:
// =========================
// var is function-scoped
var petName = "Moe";
if (petName) {
    var notSoHiddenName = "Hidden";
}
// actually possible #whattha:
console.log("pet name: ", notSoHiddenName);

// let, const are block-scoped


// use let and const.
// forget var
