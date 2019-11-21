/**
 * object destructuring
 */
const someObject = {first: "Adrian", last: "Bancu", age: 33};

/**
 * extract to local variables in ES5
 */
 const f = someObject.first;
 const l = someObject.last;
console.log(f,l);

/**
 * extract in ES6, using destructuring
 * this is a pattern, a set of rules how we want to destructure an object
 */
const {first: fAgain, last: lAgain} = someObject;
console.log(fAgain, lAgain);
/**
 * extract to local variables with the same name
 */
const {first: first, last: last} = someObject;
console.log(first, last);
/**
 * shorthand version
 */
// const {first, last} = someObject;

/**
 * array destructuring
 */

 const arr = ['a', 'b'];
 const [x, y] = arr;
 console.log(x, y);

 /**
  * Using destructuring example 1
  */
 function f1(options) {
     console.log(options.x, options.y, options.z);
 }
 f1({x: 1, y:2, z:3});

 /**
  * Using destructuring example 2
  */

 function f2({x, y, z, w=0}) {
    console.log(x, y, z, w);
}
f2({x: 1, y:2, z:3});