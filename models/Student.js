import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;
