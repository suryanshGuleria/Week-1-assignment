/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(timeInMs) {
    const pr = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('Resolved');
        },timeInMs)
    })

    return pr;
}

const promise = wait(3000);
promise.then(()=> {console.log(promise);});


