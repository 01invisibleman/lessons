const http = require('http');
const pathToRegex = require('path-to-regex');
http.createServer((req, res) => {
    let parser = new pathToRegex('/user/:name');
    let result = parser.match(req.url);
    if (req.url.length > 6) {
        setTimeout(sto, 10000);
    } else {
        res.end("Welcome");
    }
    function sto() {
        res.end("Hi" + " " + result.name);
    }
}).listen(3000, () => {
    console.log("The server is running on port 3000");
});