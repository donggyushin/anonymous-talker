import express from "express";
import bodyParser from "body-parser";
import api from "./routes/index";

const app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

let port = 8080;

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/../../client/build"));

app.use("/api", api);

io.on("connection", socket => {
  console.log(socket.id + " has logged in");

  socket.on("disconnect", () => {
    console.log("user disconnected: ", socket.id);
  });

  socket.on("send message", (displayName, message) => {
    io.emit("receive message", displayName, message);
  });
});

http.listen(port, () => {
  console.log("Express is listening on port ", port);
});
