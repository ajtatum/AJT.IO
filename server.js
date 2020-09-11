const http = require("http");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("express"));
app.use("/", function (req, res) {
    res.sendFile("/express/index.html");
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);