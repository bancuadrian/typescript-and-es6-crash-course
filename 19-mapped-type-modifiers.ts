/**
 * typed modifiers are used to mutate the properties of a class
 */
interface IPet {
    name: string;
    age: number;
    favoritePark?: string;
}

type ReadonlyPet = {
    /**
     * this takes all properties of IPet and converts them to readonly
     * -? - removes any optional parameters
     */
    +readonly [K in keyof IPet]-?: IPet[K];
}

const pet:IPet = {name: "Buttons", age: 6};
const readonlyPet: ReadonlyPet = {name: 'Buttons', age: 5};

pet.age = 6;
readonlyPet.age = 12; // throws compilation error