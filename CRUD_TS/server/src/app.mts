import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { router } from "./mongodb/routes/student.router.mjs"

const app = express()
dotenv.config();
const connectionString = "mongodb+srv://Angel:Prayer33@angeldb.ofbwpgd.mongodb.net/CRUD_TS?retryWrites=true&w=majority";

async function dbconnect(): Promise<void> {
     await mongoose.connect(connectionString);
     console.log("The database is successfully connected!");
}

try {
     await dbconnect();
} catch (error) {
     console.log("something wrong:", error);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
     res.status(200).send("testing database")
})
app.use("/api/student", router)
const PORT = 8000;
app.listen(PORT, () => {
     console.log(`server is running on port ${PORT}`)
})
export default app;

