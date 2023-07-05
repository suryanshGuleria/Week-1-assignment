/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    const promise1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },1000)
    })

    return promise1;
}

function waitTwoSecond() {
    const promise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },2000)
    })

    return promise2;
}

function waitThreeSecond() {
    const promise3 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        },3000)
    })

    return promise3;
}

function calculateTime() {
    const startTime = Date.now();
    waitOneSecond()
    .then(function(){
        return waitTwoSecond();
    })
    .then(function(){
        return waitThreeSecond();
    })
    .then(function(){
        console.log('Total time taken: ' + (Date.now() - startTime) + 'ms');
    })
}

calculateTime();