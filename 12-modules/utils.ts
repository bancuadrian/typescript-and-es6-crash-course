function square(x: number) {
    return Math.pow(x, 2);
}

function cow() {
    console.log("Mooooo!!!");
}

/**
 * see destructuring
 * can be exported like this:
 * export {square: square, cow: cow}
 */

export {square, cow}

/**
 * you can export directly
 */
export function sayHello() {
    console.log('Hello!');
}

/**
 * default export
 * there can be only one default export
 */
export default function thisIsDefault() {
    console.log('Default function');
}