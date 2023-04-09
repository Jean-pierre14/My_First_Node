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

export const GetStudent = async (req, res) => {
  let studentId = req.params.id;
  await Student.findById(studentId)
    .then((student) => res.json({ msg: student }))
    .catch((error) => res.status(500).json({ msg: error.message }));
};

export const DeleteStudent = (req, res) => {
  res.json("Student Delete one");
};
export const DeleteAllStudents = (req, res) => {
  res.json("Student Delete All");
};
