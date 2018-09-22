"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var port = 8080;

app.use(_bodyParser2.default.json());
app.use("/", _express2.default.static(__dirname + "/../../client/build"));

app.use("/api", _index2.default);

io.on("connection", function (socket) {
  console.log(socket.id + " has logged in");

  socket.on("disconnect", function () {
    console.log("user disconnected: ", socket.id);
  });

  socket.on("send message", function (displayName, message) {
    io.emit("receive message", displayName, message);
  });
});

http.listen(port, function () {
  console.log("Express is listening on port ", port);
});