import express from "express";
import bodyParser from "body-parser";
import api from "./routes/index";

const app = express();

let port = 8080;

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/../../client/build"));

app.use("/api", api);

app.listen(port, () => {
  console.log("Express is listening on port ", port);
});
