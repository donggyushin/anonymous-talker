import express from "express";
import bodyParser from "body-parser";
import api from "./routes/index";

const app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

let port = 8080;

let userList = [];

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/../../client/build"));

app.use("/api", api);

io.on("connection", socket => {
  console.log(socket.id + " has logged in");

  socket.on("disconnect", () => {
    console.log("user disconnected: ", socket.id);
  });

  socket.on("send displayName", displayName => {
    const newUser = {
      id: socket.id,
      userListItem: displayName
    };

    const result = userList.findIndex(
      user => user.userListItem === displayName
    );
    if (displayName === "") {
      io.to(socket.id).emit("error message", "이미 사용중인 닉네임");
    }

    console.log(result);
    if (result === -1) {
      userList.push(newUser);
    } else {
      io.to(socket.id).emit("error message", "이미 사용중인 닉네임");
    }

    console.log(userList);
    io.emit("receive displayName", userList);
  });

  socket.on("user leave", displayName => {
    console.log("user leave");
    const newUserList = userList.filter(
      user => user.userListItem !== displayName
    );
    userList = newUserList;
    io.emit("receive displayName", userList);
  });

  socket.on("send message", (displayName, message) => {
    io.emit("receive message", displayName, message);
  });
});

http.listen(port, () => {
  console.log("Express is listening on port ", port);
});
