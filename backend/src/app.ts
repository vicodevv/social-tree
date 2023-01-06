require("dotenv").config();
import express from "express";
import config from "config";

const app = express();

app.use(express.json());

const port = config.get("port");

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);

});