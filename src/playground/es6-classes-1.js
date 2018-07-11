
const defaultAgeIfNotPassedToConstructor = 42;

class Person {

    constructor(name, age = defaultAgeIfNotPassedToConstructor) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        return "Hi, my name is " + this.name;
    }
}

const person = new Person("John Doe"); // age 42
console.log(person);
console.log(person.sayHi());

const person2 = new Person("Leeroy Jenkins", 29);
console.log(person2);
console.log(person2.sayHi());

