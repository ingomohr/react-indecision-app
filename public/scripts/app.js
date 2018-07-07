"use strict";

var user = {
    name: "John",
    cities: ["NY", "Rio", "Tokyo"],

    // Arrow-function would not allow
    // access to 'this'
    // i.e. printCities = () => {...}
    // es5 function would do, though
    // but we use this es6 thingie:
    printCities: function printCities() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + " lived in " + city);
        });
    },


    // now some map() fun:
    printCities2: function printCities2() {
        var _this2 = this;

        this.cities.map(function (city) {
            return _this2.name + " also lived in " + city;
        }).forEach(function (msg) {
            return console.log(msg);
        });
    }
};

console.log(user.printCities());
console.log(user.printCities2());
