/**
 * ES5 functions can be sent as parameters
 * it's called anonymous functions
 */
setTimeout(function () {
    console.log('Timeout');
}, 300);

/**
 * ES6 fat arrow syntax
 */

setTimeout(() => {
    console.log('ES6 Timeout');
}, 500);

/**
 * or shorthand without "{}" because it has one line
 */

setTimeout(() => console.log('ES6 Timeout shorthand'), 700);

/**
 * functions assigned to variables in ES5
 */
 let add = function(a, b) {
     return a + b;
 }
 add(1,2);

 /**
  * now in ES6 using fat arrow
  * 
  * one-line shorthand does not need return keyword
  * one liners will return by default
  */

let addES6 = (a, b) => a + b;
addES6(1,3);

/**
 * ES5 problems
 */
let obj = {
    name: "Asim",
    sayLater: function() {
        setTimeout(function() {
            /**
             * this will be undefined, because this keyword will be out of context 
             * when this anonymous function will be called
             */
            console.log(this.name);
        }, 900);
    }
};
obj.sayLater();

/**
 * ES5 problems and solutions
 */
obj = {
    name: "Asim",
    sayLater: function() {
        let thisObject = this;
        setTimeout(function() {
            /** 
             * now it will print "Asim" because thisObject variable gets the value of the object
             */
            console.log(thisObject.name);
        }, 950);
    }
};
obj.sayLater();

/**
 * ES6 fat arrow solution
 * Now it stabilises the value of "this"
 */
obj = {
    name: "Asim Again",
    sayLater: function() {
        setTimeout(() => {
            /**
             * this == obj - this is now equal to our object
             */
            console.log(this.name);
        }, 1000);
    }
};
obj.sayLater();