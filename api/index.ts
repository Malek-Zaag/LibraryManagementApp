import { json, urlencoded } from "body-parser";
import express from "express";
import connection from "./config";
import cors from "cors";
import { router } from "./router";
import { DotenvConfigOptions } from "dotenv";

const app: express.Express = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(5050, () => {
  console.log("server listening on port 5050");
});

app.get("/", (req: express.Request, res: express.Response) => {
  console.log("test worked for get request");
  res.send("hello from backend 2");
  console.log("help me out!!!!");
});
app.use(router);

connection
  .sync()
  .then(() => {
    console.log("database listening");
  })
  .catch((err) => {
    console.log(err);
  });
