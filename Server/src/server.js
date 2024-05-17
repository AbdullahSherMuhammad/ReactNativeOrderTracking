import express from "express";
import BodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const App = express();
const port = process.env.PORT;

App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(cors());

App.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
