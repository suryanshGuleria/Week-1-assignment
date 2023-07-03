var counter = 0;


function incrementCounter(){
    console.log(counter++);
    setTimeout(incrementCounter,1000);
}

incrementCounter();






















