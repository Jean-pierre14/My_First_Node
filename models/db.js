import mongoose from "mongoose";

const DB = mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((_) => console.log(`Connected to mongoose`))
  .catch((err) => console.log(`Error: ${err}`));

export default DB;
