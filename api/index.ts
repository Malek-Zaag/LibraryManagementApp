import express, { Express, Request, Response } from "express";
const app: Express = express();

app.listen(5050, () => {
  console.log("server listening on port 5050");
});

app.get("/", (req: Request, res: Response) => {
  console.log("test worked for get request");
  res.send("hello from backend 2");
  console.log("help me out!!!!");
});
