import exp from "express";
import bcrypt from "bcrypt";

import {
  DeleteAllStudents,
  DeleteStudent,
  GetStudent,
  GetStudents,
  UpdateStudents,
} from "../controllers/StudentControllers.js";

import Student from "../models/Student.js";

import { body, validationResult } from "express-validator";

const router = exp.Router();

router.route("/").get(GetStudents).delete(DeleteAllStudents);

router.post(
  "/",
  [
    body("username")
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 4 characters"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .normalizeEmail()
      .isEmail()
      .withMessage("Email is not valid"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 4 })
      .withMessage("Password must be at least 5 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    Student.findOne({ email: req.body.email })
      .then((student) => {
        if (student) {
          res.json("This email is taken");
        } else {
          const saltRounds = 10;

          const NewStudent = new Student({
            username: req.body.username,
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
          });

          bcrypt.genSalt(saltRounds, (err, salt) =>
            bcrypt.hash(NewStudent.password, salt, (err, hash) => {
              if (err) throw err;
              NewStudent.password = hash;

              NewStudent.save()
                .then((_) => res.status(200).json("success"))
                .catch((err) => console.log(`Error: ${err.message}`));
            })
          );
        }
      })
      .catch((err) => console.log(`Error: ${err}`));
  }
);

router.route("/:id").get(GetStudent).put(UpdateStudents).delete(DeleteStudent);

export default router;
