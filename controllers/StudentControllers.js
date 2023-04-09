import Student from "./../models/Student.js";

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

export const DeleteStudent = async (req, res) => {
  let studentId = req.params.id;
  await Student.findOneAndDelete(studentId)
    .then((student) => res.json(student))
    .catch((err) => console.log(err));
};

export const DeleteAllStudents = async (req, res) => {
  await Student.deleteMany({})
    .then((_) => res.json({ msg: "Collection is clean" }))
    .catch((err) => console.log(err));
};
