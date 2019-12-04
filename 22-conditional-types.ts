/**
 * if type is an array of any, then T will return, otherwise "never" is returned
 */
type ArrayFilter<T> = T extends any[] ? T : never;

/**
 * this type will be an ArrayFilter of <...>
 */
type StringsOrNumbers = ArrayFilter<boolean | string | number | string[] | number[]>;

/**
 * 1. conditional types distribute over each element in the set of possible types.
 *    it will apply the ternary operator above to each of the four types in ArrayFilter and replace each one of them
 *    results in : <never | never | never | string[] | number[]>
 * 
 * 2. "never is ignored" so it will result in a type of <string[] | number[]>
 */

 let var1: ArrayFilter<number[]> = [1, 2, 3];
 let var2: ArrayFilter<string[]> = ["1", "2", "3"];
 let var3: ArrayFilter<boolean[]> = [true,false,true];

 let strOrNum: StringsOrNumbers = var1;
 strOrNum = var2;
 // strOrNum = var3; // this throws a compilation error

 /**
  * you can use conditional types in function overloading
  */
 interface Book {
     id: string;
     tableOfContents: string[];
 }

 interface Tv {
     id: number;
     diagonal: number;
 }

 interface IItemService {
     /**
      * if id is string it will return a book
      * if id is number it will return a tv
      * @param id 
      */
     getItemOneWay<T>(id: T): Book | Tv;

     getItem<T>(id: T): T extends string ? Book : Tv;

     getItemLocked<T extends string | number>(id: T): T extends string ? Book : Tv;
 }

 let itemService:IItemService; 

 const aBook = itemService.getItemOneWay("1"); // this may be a Book or a Tv
 const book = itemService.getItem("1"); // book is now of type Book
 const tv = itemService.getItem(1); // tv is now of type Tv
 const errorTv = itemService.getItem(true); // errorTv is now of type Tv
 // const newTv = itemService.getItemLocked(true); - will throw error