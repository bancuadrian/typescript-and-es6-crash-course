/**
 * ES5
 */
var single = "hello world!";
var multi = "Hello " +
    "world " +
    "this\n " +
    "is another line";
/**
 * ES6
 */
var multiNew = "\n Hello \n world \n this \n\n is another line";
console.log(multiNew);
/**
 * Tick can now interpret variables using ${varName} inside template strings
 */
var aName = "Adrian";
var message = "\nHello\n" + aName + " \nand \nwelcome!";
console.log(message);
