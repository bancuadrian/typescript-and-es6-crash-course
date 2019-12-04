/**
 * unkown type is used to avoid type errors.
 * compiler will throw errors until some sort of type checking will be done on that object
 */

interface IComment {
    message: string;
}

interface IDataService {
    getData(): unknown;
}

let service: IDataService;
const response = service.getData();

/**
 * if i try to use response before type checking it, then compiler will throw errors
 */
console.log(response.data);

/**
 * if I do some sort of type checking, then the compiler will know it's safe to use it
 */
if(typeof response === 'string') {
    /**
     * compiler knows that now response is of type string
     */
    console.log(response.toLocaleUpperCase());
} else if(isComment(response)) {
    /**
     * or with user defined type-guard.
     * now it will know that response is of type IComment
     */
    console.log(response.message);
} else {
    /**
     * you can even cast it
     */
    const numbers = <number[]> response;
    console.log(numbers.indexOf(1));
}

function isComment(type: any): type is IComment {
    return (<IComment>type).message !== undefined;
};

