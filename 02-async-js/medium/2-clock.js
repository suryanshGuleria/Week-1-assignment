// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


setInterval(()=>{
    var newDate = new Date;
    var simpleTime = newDate.getHours() + ':' + newDate.getMinutes() + ":" + newDate.getSeconds();
    console.log(simpleTime);  
    
    if(newDate.getHours()>12){
    var notSimpleTime = ((newDate.getHours())-12) + ':' + newDate.getMinutes() + ":" + newDate.getSeconds() + ' PM';
    console.log(notSimpleTime);
    }
    else{
    var notSimpleTime = newDate.getHours() + ':' + newDate.getMinutes() + ":" + newDate.getSeconds() + ' AM';
    console.log(notSimpleTime);
    }
    
},1000);    