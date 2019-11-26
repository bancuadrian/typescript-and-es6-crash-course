/**
 * you can import type definitions files
 * npm install -g typings
 * for example if you want to install jquery definition file
 * typings install jquery --save --source dt --global
 * 
 * see more on https://github.com/DefinitelyTyped/DefinitelyTyped
 */
/**
 * you can use types like this:
 * (all typings are bundled in index.d.ts)
 */
/// <reference path="typings/index.d.ts" />

/**
 * if no type is set for a variable, Typescript will assume that it's any
 * this is configured via tsconfig.json, in the "noImplicitAny" property
 * set it to true, and the tsc compiler will throw errors 
 */
let varWillBeNumber;
varWillBeNumber = 1;
/**
 * this will work and we change the type of variable to string
 * and we don't want that
 */
varWillBeNumber = '2';
console.log(varWillBeNumber);

/**
 * so, we can define the type of the variable
 */
let varNumber: number;
varNumber = 3;
// varNumber = 'a'; // this will throw a compilation error

/**
 * some types of variables
 */
let decimal: number = 6;
let done: boolean = false;
let color: string = 'blue';

/**
 * arrays
 */
let list: number[] = [1, 2, 3]; // list of numbers
// list.push('3'); // this will throw an error

/**
 * generic
 */
let genericList: Array<number> = [1, 2, 3];

/**
 * Function
 */
let aFunc: Function = () => console.log("This is a function");

/**
 * Function with expected return type
 */
function returnNumber(): number {
    // return "1"; // will throw error
    return 1;
}

/**
 * enums
 */

 enum Direction {
     Up,
     Down,
     Left,
     Right
 }

 let go: Direction;
 go = Direction.Up;
 console.log(go); // will output the position in the enum, in this case, 0

 /**
  * classes
  */
 let person: Person;
 /** list of persons */
 let people: Person[];

 /**
  * any type
  */
 let notSure: any = 1;
 notSure = "any";

 /** 
  * void type
  */
 function returnNothing(): void {
     console.log("Moo");
     // return "something"; // will throw a compilation error
 }

 let value: any = "Adrian";
 /** type hinting(assertion) */
 (<string>value).length;