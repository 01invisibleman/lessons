const program = require('commander');
program
    .version('0.0.0')
    .option('-f, --firstname')
    .option('-l, --lastname')
    .parse(process.argv)
console.log("Hi" + " " + program.args[0] + " " + program.args[1]);