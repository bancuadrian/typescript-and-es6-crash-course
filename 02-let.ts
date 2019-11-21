/**
 * variable scope(lifecycle of a variable - i.e Where in the code it's visible and for how long)
 */

{
    // this is a block 
}

// this is not part of a block
{
    var a = "block";
}

console.log(a); // will output a
/**
 * 
 * variables declared in a block are available everywhere in the code
 * 
 */

function hello() {
    var b = "within a function";
}

hello();
// console.log(b); - this will throw a compilation error - b is visible within the function only - function level scope

function anotherHello() {
    var c = "This is C";
    for (var i = 0; i < 10; i++) {
        var c = "This is another C";
    }
    console.log(c);
}

/**
 * will output "This is another C"
 * var c will be overwritten
 */
anotherHello();


function yetAnotherHello() {
    var d = "This is D";
    for (var i = 0; i < 10; i++) {
        /**
         * immediatley invoked function expression (iife)
         * have their own scope
         */
        (function () {
            var d = "This is another D";
        })();
    }
    console.log(d);
}

/**
 * Will output "This is D"
 */
yetAnotherHello();

/**
 * let - creates variable with block level scope
 */

function yetAnotherAnotherHello() {
    var e = "This is E";
    for (var i = 0; i < 10; i++) {
        /**
         * let e - will have the scope within the block level code
         */
        let e = "This is another E";
    }
    console.log(e);
    /**
     * i will have the last value from the for loop
     */
    console.log("I is now: ", i);
    for (let j = 0; j < 10; j++) {
        /**
         * let e - will have the scope within the block level code
         */
        let e2 = "This is another E2";
    }
    // console.log("J is now: ", j); - this will trigger a compilation error - j is only visible within the for loop
}
/**
 * 
 */
yetAnotherAnotherHello();