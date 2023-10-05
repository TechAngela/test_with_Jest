import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name: String,
    school: String,
    grade: Number
});
const Student = mongoose.model('Student', studentSchema);
export default Student;
//# sourceMappingURL=students.model.mjs.map