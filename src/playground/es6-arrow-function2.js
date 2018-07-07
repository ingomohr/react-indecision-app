const user = {
    name: "John",
    cities: ["NY", "Rio", "Tokyo"],

    // Arrow-function would not allow
    // access to 'this'
    // i.e. printCities = () => {...}
    // es5 function would do, though
    // but we use this es6 thingie:
    printCities() {
        this.cities.forEach((city) => {
            console.log(this.name + " lived in " + city);
        });
    },

    // now some map() fun:
    printCities2() {
        this.cities.map((city) =>
            this.name + " also lived in " + city
        ).forEach((msg) => console.log(msg));
    }
};

console.log(user.printCities());
console.log(user.printCities2());

