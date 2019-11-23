/**
 * ES6 classes
 */
class Person {
    /** 
     * access modifiers are Typescript features
     */
    private firstName = "";
    lastName = "";

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    name() {
        return `${this.firstName} ${this.lastName}`;
    }

    whoAreYou() {
        return `Hi, I'm ${this.name()}`;
    }
}

let adrian = new Person("Adrian", "Bancu");

console.log(adrian.name());
console.log(adrian.whoAreYou());

class Student extends Person {
    course = "";

    constructor(firstName, lastName, course) {
        super(firstName, lastName);

        this.course = course;
    }

    whoAreYou() {
        return `${super.whoAreYou()} and I'm studying ${this.course}`;
    }
}

let andrei = new Student("Andrei", "Doe", "Math");
console.log(andrei.whoAreYou());

interface Animal {
    name: string;
    age: number;
    /** this is mandatory to be implemented */
    howOld(): number;
    /** this is optional */
    feed?(times: number): boolean;
}

class Dog implements Animal{
    /**
     * Typescript feature. 
     * Add access modifiers to constructor and it will add properties
     * with the same name to the class and set them without having to define them
     * @param name 
     * @param age 
     */
    constructor(public name: string, public age: number) { }

    howOld(): number {
        return this.age;
    }

    feed(times: number): boolean {
        return true;
    }
}

let poo = new Dog("Poo", 5);
console.log(poo.name);