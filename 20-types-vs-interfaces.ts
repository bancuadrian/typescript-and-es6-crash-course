type IDog = {}
type ICat = {}
/**
 * types aliases are used to alias a more complex type like 
 * a union of other types to a reusable name
 */
type Pet = IDog | ICat;

/**
 * interfaces are used for more of traditional OOP purposes 
 * where you define the shape of an object
 */
interface IAnimal {
    age: number;
    eat(): void;
    speak(): string;
}

/**
 * this type is aliasing the shape of the object IAnimal to this name
 */
type AnimalTypeAlias = {
    age: number;
    eat(): void;
    speak(): string;
}

/**
 * the interface and the type are mostly equivalent
 */
let animalInterface: IAnimal;
let animalTypeAlias: AnimalTypeAlias;
/**
 * if you change properties on IAnimal or AnimalTypeAlias, this will throw a compiler error 
 * otherwise, from property point of view, the ojects are identical
 */
animalInterface = animalTypeAlias;

function feedAnimal(animal: Animal) {
    animal.eat();
}

class Animal implements IAnimal {
    age = 0;

    eat() {
        console.log('nom..nom..');
    }

    speak(): string {
        return 'Hello master';
    }
}

/**
 * type aliases can act like a more complex type, like a function
 */
type Eat = (food: string) => boolean;
let animalEats: Eat = (food: string) => {
    return true;
};

/**
 * you can declare the same type as an interface
 * this interface is functional equivalent with the type above
 */
interface IEat {
    (food: string): boolean;
}
let anotherAnimalEats: IEat = (food: string) => {
    return true;
};

/**
 * type aliases can act like an array
 */
type AnimalList = string[];
let listOfAnimals: AnimalList = ["Tiger", "Boa", "Dog"];

/**
 * the type array above can be build using interfaces
 * but it will miss all the array method from the type above
 */
interface IAnimalList {
    [index: number]: string;
}
let anotherList: IAnimalList = { 0: "Tiger", 1: "Boa", 25: "Dog", 5: "Example that this object respects its contract" }

/**
 * types can express a merge of different other types
 */
interface IPet {
    pose(): void;
}

interface IFeline {
    nightvision: boolean;
}

type TinyCat = {
    drinksMilk(): void;
};

/**
 * type Cat is both a Pet and a Feline and will have properties from both interfaces
 * a type can be an intersection of interfaces and/or types
 */
type Cat = IPet & IFeline & TinyCat;
let cat: Cat;
// cat.pose(); // cat.nightvision

/**
 * the same merge with interfaces
 * NOTE: interfaces can extend multiple interfaces and types
 */
interface IAnotherCat extends IPet, IFeline, TinyCat {

}
let cat2: IAnotherCat;
// cat.pose(); // cat.nightvision

/**
 * a class can implement an interface and a type
 */
class HouseCat implements IFeline, TinyCat {}


/**
 * a type can be either one or another interface
 */
type PetType = IDog | ICat;
/**
 * an interface cannot extend a union type 
 * because an interface is a specific contract. it must know exactly what the contract is.
 * it cannot implement something that maybe one or another
 */
// interface IPet2 extends PetType {}; - this throws a compiler error
/**
 * same thing applies for classes because a class is a blueprint of 
 * how to create instances of objects
 */
// class APet implements PetType {};

/**
 * if you have two interfaces with the same name they will be merged together
 * types do not support this.
 * 
 * this is useful for extending interfaces from external packages without touching the source code.
 * if the library author did not mark the public API with interfaces, you cannot this.
 * as a library author, expose your public types as interfaces to allow your consumers to extend them if needed
 */
interface IA {
    a: string;
}

interface IA {
    b: string;
}
/**
 * anObject will have properties a and b
 */
let anObject: IA;
// anObject.a;
// anObject.b;

/**
 * Example of adding a method to the JQuery library
 * this adds the method hideChildren() to JQuery
 */
interface JQuery {
    hideChildren(): JQuery;
}