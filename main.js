const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type":"text/plain"});
    if (req.url === "/") {
        res.end("Hello OpenYT");
    }
});

server.listen(8080);