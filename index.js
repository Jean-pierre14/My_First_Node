import exp from "express";
import cors from "cors";
import fileUpload from "express-fileupload"
import StudentRouters from "./routers/StudentRouter.js";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

import dbConnection from "./config/dbConnection.js";

dotenv.config({ path: `./.env` });

// DB connection
dbConnection()

const app = exp();

app.use(cors());
app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

// Routers
app.get("/", (request, response) => {

  response.json({message: "go to /student"})

})

/**
 * Student router
 */

app.use("/student", StudentRouters);

app.listen(7000, (err) => {
  if (err) throw err.message;

  console.log(`Server run on port: 7000`);

});
