import Student from "./../models/Student.js";

// Get all students
export const GetStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

// Get a student by id
export const GetStudent = async (req, res) => {
  let studentId = req.params.id;
  await Student.findById(studentId)
    .then((student) => res.json({ msg: student }))
    .catch((error) => res.status(500).json({ msg: error.message }));
};

// Update a student by id
export const UpdateStudent = async (req, res) => {
  let studentId = req.params.id;
  let updatedData = req.body; // Assuming the updated data is sent in the request body

  try {
    const updatedStudent = await Student.findByIdAndUpdate(studentId, updatedData, { new: true });
    res.json({ msg: "Student updated successfully", student: updatedStudent });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete a student by id
export const DeleteStudent = async (req, res) => {
  let studentId = req.params.id;
  await Student.findOneAndDelete(studentId)
    .then((student) => res.json(student))
    .catch((err) => console.log(err));
};

// Delete all students
export const DeleteAllStudents = async (req, res) => {
  await Student.deleteMany({})
    .then((_) => res.json({ msg: "Collection is clean" }))
    .catch((err) => console.log(err));
};
