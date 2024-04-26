import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createGameService } from "../services/createGameService";
import { returnMapSizeService } from "../services/returnMapSizeService";

const app = express();

app.use(cors());

const jsonParser = bodyParser.json();

app.post("/start-game", jsonParser, createGameService());

app.get("/getMapSize/:accountID", jsonParser, returnMapSizeService());

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
