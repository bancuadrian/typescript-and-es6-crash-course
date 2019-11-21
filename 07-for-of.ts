/**
 * ES5 way of looping
 */

let array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/**
 * ES5 way of looping part 2
 * but in this case you cannot break or return out of the loop
 */
array.forEach(function (value) {
    console.log(value);
});

/**
 * for..in...
 */
let obj = { a: 1, b: 2 };
for (let prop in obj) {
    console.log(prop, obj[prop]);
}

/**
 * for in arrays is not really recommended
 */
let arrIn = [1, 2, 3];
for (let index in arrIn) {
    /**
     * converts index to string - watch out for this
     */
    console.log(index, typeof(index));
}

/**
 * for..of arrays (does not have access to index)
 */
let arrInAgain = [10, 20, 30];
for (let value of arrInAgain) {
    console.log(value, typeof(value));
}