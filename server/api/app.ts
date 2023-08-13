import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { initRoutes } from "./REST/routes/routes";

//allow only specific websites to make requests, hide this
export const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://studio.apollographql.com",
    "https://web.postman.co",
    "https://www.postman.com"

  ],
  credentials: true,
};

//express app
export const app = express();

//use middlewares
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/express", cors<cors.CorsRequest>(corsOptions));
app.get("/express", (req, res) => {
  res.status(200);
  res.send("Express app running");
});

initRoutes(app);
