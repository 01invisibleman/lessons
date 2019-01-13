const fs=require('fs');
let firstName = process.argv[2];
let lastName = process.argv[3];
console.log("Hi" + " " + firstName + " " + lastName);
fs.writeFile('write.txt', firstName + " " + lastName, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Your name and your family saved in write.txt!');
    }
});