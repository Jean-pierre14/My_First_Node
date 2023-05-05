import { Schema, model } from "mongoose";

const journal = new Schema({
  cours: { type: String, required: true },
  lecon: { type: String, required: true },
});

const Journal = model("journal", journal);

export default Journal;
