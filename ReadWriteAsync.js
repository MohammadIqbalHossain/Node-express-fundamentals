//Reading and writing file asynchrounusly.

const fs = require('fs');

fs.readFile('./texts/text.txt', 'utf-8', (error, data) => {
     if(error){
        throw new Error("Error reading file");
     }
    //  console.log(data)

     fs.writeFile('./texts/written2.txt', data + 'Some text', (err) => {
        if(err){
            throw new Error("Error writing file");
        }
     })
})

console.log('async check');