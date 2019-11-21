// "use strict";

/**
 * const declares that a variable is constant over time(immutable)
 * must be immediatley initialized
 * 
 * the variable is immutable, not the value
 */
// const foo; // this will get a syntax error
const foo = "baz";

// foo = "another baz"; // this will trigger an error. you cannot change const

function hello() {
    if(true) {
        /**
         * constants have block level scope visibility
         */
        const tmp = 123;
    }
    // console.log(tmp); // error - constants have block level scope
}

/**
 * constant means that it has to point to same thing over time
 * it does not mean that "thing" cannot change, i.e objects
 */

 const antoherFoo = {};
 // antoherFoo = {}; // this will trigger an error
 antoherFoo['name'] = "John";
 console.log(antoherFoo);

 /**
  * you can "freeze" objects to lock their properties
  */
 const yetAnotherFoo = Object.freeze({});
 /**
  * this does not throw error, but it will be ignored
  * this works because we do not use strict mode
  * if you write "use strict" in this file header, this will trigger an error
  */
 yetAnotherFoo['name'] = "John";
 console.log(yetAnotherFoo);  // will output {}