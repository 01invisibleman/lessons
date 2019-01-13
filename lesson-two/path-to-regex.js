const http = require('http');
const pathToRegex = require('path-to-regex');
http.createServer((req, res) => {
    let parser = new pathToRegex('/user/:name');
    let result = parser.match(req.url);
    if (req.url.length > 6) {
        res.end("Hi" + " " + result.name);
    } else {
        res.end("Welcome");
    }
}).listen(3000, () => {
    console.log("The server is running on port 3000");
});