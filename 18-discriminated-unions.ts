/**
 * See more here: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 * 
 * Discriminated unions are useful in functional programming
 * 
 * There are three ingredients:
 *
 * 1. Types that have a common, singleton type property — the discriminant.
 * 2. A type alias that takes the union of those types — the union.
 * 3. Type guards on the common property.
 */

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

interface Triangle {
    kind: "triangle";
}

type Shape = Square | Rectangle | Circle; // | Triangle - if you add this, compiler will throw an error Argument of type 'Triangle' is not assignable to parameter of type 'never'.
/**
 * x: never means that this value will never be assigned
 * it's a compiler way of type checking
 * @param x 
 */
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function area(s: Shape) {
    /**
     * you need to cover all cases in type Shape
     */
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        /**
         * if you add a new object to type Shape, compiler will throw an error 
         */
        default: return assertNever(s); // error here if there are missing cases
    }
}