const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static("express"));
app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/express/index.html"));
});
const server = http.createServer(app);
const port = 80;
server.listen(port);