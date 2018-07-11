
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

/**
 * A student.
 * <p>
 * And <i>this</i> is some lovely class comment.
 * </p>
 * ... which - sadly - doesn't support html tags
 * ... at least not in my VSCode installation.
 */
class Student extends Person {

    constructor(name, age, university) {
        super(name, age);
        this.university = university;
    }

    isInUniversity() {
        // '!!' => flipped twice
        // => is true if this.univerity is set
        return !!this.university;
    }

    sayHi() {
        let hi = super.sayHi();
        return hi + ". Oh, and I'm a student at " + this.university;
    }


}
const student = new Student();
console.log(student);
console.log(student.isInUniversity());
student.university = "Oxford";
console.log(student.isInUniversity());
console.log(student.sayHi());

