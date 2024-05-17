import express from "express";
import BodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/authRouter.js";
import cors from "cors";

dotenv.config();

// rest objects
const app = express();
const port = process.env.PORT;

//middleware
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(cors());
app.use(morgan("dev"));

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nativeordertrackingapp-default-rtdb.firebaseio.com"
});


app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})