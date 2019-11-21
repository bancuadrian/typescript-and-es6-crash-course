/**
 * object destructuring
 */
var someObject = { first: "Adrian", last: "Bancu", age: 33 };
/**
 * extract to local variables in ES5
 */
var f = someObject.first;
var l = someObject.last;
console.log(f, l);
/**
 * extract in ES6, using destructuring
 * this is a pattern, a set of rules how we want to destructure an object
 */
var fAgain = someObject.first, lAgain = someObject.last;
console.log(fAgain, lAgain);
/**
 * extract to local variables with the same name
 */
var first = someObject.first, last = someObject.last;
console.log(first, last);
/**
 * shorthand version
 */
// const {first, last} = someObject;
/**
 * array destructuring
 */
var arr = ['a', 'b'];
var x = arr[0], y = arr[1];
console.log(x, y);
/**
 * Using destructuring example 1
 */
function f1(options) {
    console.log(options.x, options.y, options.z);
}
f1({ x: 1, y: 2, z: 3 });
/**
 * Using destructuring example 2
 */
function f2(_a) {
    var x = _a.x, y = _a.y, z = _a.z, _b = _a.w, w = _b === void 0 ? 0 : _b;
    console.log(x, y, z, w);
}
f2({ x: 1, y: 2, z: 3 });
