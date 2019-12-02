/**
 * tsconfig.json property "strictPropertyInitialization": true 
 * compiler will check if properties are initialized before usage.
 * 
 * To mark that this will definitely be initialized, add the "!" operator
 */

 class Library {
     titles: string[];
     anotherUnintialized!: string[];

     constructor() {}
 }

 const library = new Library();

 const shortTitles = library.titles.filter( // this will throw a compilation error. titles is not yet initialized
     title => title.length < 5
 );

 const anotherShortTitles = library.anotherUnintialized.filter( // this will NOT throw a compilation error even though the variable is not yet initialized
    title => title.length < 5
);