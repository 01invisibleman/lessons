const fs = require('fs');
let firstNameAndLastName = fs.readFileSync('read.txt');
console.log("Hi" + " " + firstNameAndLastName);