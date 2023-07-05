/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    const promise1 = waitOneSecond();
    const promise2 = waitTwoSecond();
    const promise3 = waitThreeSecond();

    Promise.all([promise1, promise2, promise3])
    .then(()=>{
        console.log('Total time taken: '+ (Date.now()-startTime) + 'ms');
    })
    .catch((error)=>{
        console.error(error);
    })
}

calculateTime();