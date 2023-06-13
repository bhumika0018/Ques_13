var varName = require("http");

varName
    .createServer(function (req, res) {
        res.writeHead(200, {});
        res.end("Hello World");
    })
    .listen(8080);