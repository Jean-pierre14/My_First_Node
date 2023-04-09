import exp from "express";
import cors from "cors";
import StudentRouters from "./routers/StudentRouter.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotenv.config({ path: `./.env` });

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((_) => console.log(`Connected to mongoose`))
  .catch((err) => console.log(`Error: ${err}`));

const app = exp();

app.use(cors());
app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routers
app.use("/student", StudentRouters);

app.listen(7000, (err) => {
  if (err) throw err.message;
  console.log(`Server run on port: 7000`);
});
