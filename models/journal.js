import { Schema, model } from "mongoose";

const journal = new Schema({
  className: { type: String, required: true },
  titulaire: { type: String, required: true },
  semaine: { type: String, required: true },
  faitA: { type: String, required: true },
  SchoolName: { type: String, required: true },
  AnneeScolaire: { type: String, required: true },
  Logo: { type: String, required: true },
});

const Journal = model("journal", journal);

export default Journal;
