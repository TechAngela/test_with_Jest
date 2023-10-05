import express from "express";
import Student from "../models/students.model.mjs";
const router = express.Router();
router.get('/getStudents', async (req, res) => {
    try {
        const data = await Student.find({});
        console.log("student retrieved successfully");
        res.status(200).json(data);
    }
    catch (err) {
        console.error(`Error in retrieving student ${err}`);
    }
});
router.post("/addstudent", async (req, res) => {
    try {
        const data = await Student.create(req.body);
        console.log('Student has been added to database');
        res.status(200).json(data);
    }
    catch (err) {
        console.error(`${err} error occured while adding new student`);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const data = await Student.findById(req.params.id);
        console.log("student found by id");
        res.status(200).json(data);
    }
    catch (err) {
        console.error(`${err} Error Occured While Retrieving a single student`);
    }
});
export default router;
//# sourceMappingURL=student.router.mjs.map