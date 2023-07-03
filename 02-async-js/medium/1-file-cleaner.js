// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

var fileData;

fs.readFile('toWork.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    fileData = data;
    //to clean the data
    function removeExtraSpaces(data) {
        return data.replace(/\s+/g, ' ').trim();
      }
    var toWrite = removeExtraSpaces(fileData);

    //to write cleaned data onto the file
    fs.writeFile('toWork.txt', toWrite, err=>{
        if(err){
            console.log(err);
            return
        }
    })
});



