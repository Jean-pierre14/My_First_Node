import Student from "./../models/Student.js";
import bcrypt from "bcrypt";

import { body, validationResult } from "express-validator";

export const GetStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export const GetStudent = (req, res) => {
  let Id = req.params.id;

  Student.findById(Id, (err, docs) => {
    if (err) console.log(`Error: ${err.message}`);
    res.status(200).json(docs);
  });
};

export const UpdateStudents = (req, res) => {
  res.json("Student Update ALL");
};
export const DeleteStudent = (req, res) => {
  res.json("Student Delete one");
};
export const DeleteAllStudents = (req, res) => {
  res.json("Student Delete All");
};
