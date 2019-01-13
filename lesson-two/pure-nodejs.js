const http = require('http');
http.createServer((req, res) => {
    if (req.url.split("/user/")[1]) {
        res.end("Hi" + " " + req.url.split("/user/")[1]);
    } else {
        res.end("Welcome");
    }
}).listen(3000,()=>{
    console.log("The server is running on port 3000");
});