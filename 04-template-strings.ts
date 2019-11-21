/**
 * ES5
 */
let single = "hello world!";
let multi = "Hello " +
    "world " +
    "this\n " +
    "is another line";

/**
 * ES6
 */

let multiNew = `
 Hello 
 world 
 this \n
 is another line`;

console.log(multiNew);

/**
 * Tick can now interpret variables using ${varName} inside template strings
 */
let aName = "Adrian";

const message = `
Hello
${aName} 
and 
welcome!`;

console.log(message);
