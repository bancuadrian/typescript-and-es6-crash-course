import {square, cow} from "./utils";
/**
 * you can import using different names to avoid conflicts
 */
import {square as sqr} from "./utils";
/**
 * you can import everything using *
 */
import * as utilObj from "./utils";

console.log(square(3));
cow();
console.log(sqr(2));
utilObj.cow();
utilObj.sayHello();

/**
 * default exports do not need {function} imports
 */
import thisIsDefault from "./utils";
thisIsDefault();