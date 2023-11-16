//Read file or write file. 'fs'.

const fs = require('fs');

//Read file. 
const readFile = fs.readFileSync('./texts/text.txt', 'utf-8');

// console.log(readFile);

//Write file.
const writeFile = fs.writeFileSync('./texts/written.txt', readFile + 'This is my created file');
console.log(writeFile)