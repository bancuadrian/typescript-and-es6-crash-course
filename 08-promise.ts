
function doAsyncTask() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Done after timeout');
            if(1==1)
                resolve();
            else
                reject(); // this could happen in any case
        }, 3000);
    });

    return promise;
}

doAsyncTask().then(
    // success callback
    () => console.log("Finished async task"),
    // error callback
    () => console.log("Task error")
);

/**
 * immediately resolved promise
 */
// let promise2 = Promise.reject('error');
let promise3 = Promise.resolve('done');
promise3.then((val) => console.log(val));

let chainedPromise = Promise.resolve('done from promise3')
    /** when resolving first promise, we throw an error */
    .then((val) => {throw new Error('fail from promise3')})
    /** in this case, reject is not defined, so it will pass forward */
    .then((val) => console.log(val, 'This will never output'))
    /** this will catch unhandled rejections */
    .catch((err) => console.error(err));


let chainedPromise2 = Promise.resolve('done from chainedPromise2')
    .then((val) => `${val} continued`)
    .then((val) => {
        console.log(val, ' => In case of success from chainedPromise2');
        /** now we throw error */
        throw new Error('This is first error from chainedPromise2')
    })
    .then(
        (val) => 'Will never reach here, it has an error',
        (error) => {
            console.error(error, '--output-here--'); // this is first error
            throw new Error('This is second error from chainedPromise2');
        }
    )
    /** this will catch unhandled rejections */
    .catch((err) => console.error(err ,"--output-here--"));