import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  username: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: {type: String, required: true}
});

const Student = model("Student", StudentSchema);
export default Student;
