import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import db from "./config/db"
import authRoute from "./routes/authRoute"
import resumeRoute from "./routes/resumeRoute"
import cookieParser from "cookie-parser"
db()

type config = {
    PORT: string,
    MONGO_URI: string
}
const config: config = {
    PORT: process.env.PORT || '5000',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Ai_resume_builder'
}

const app: Express = express();
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/auth", authRoute)
app.use("/api/resume", resumeRoute)



console.log(process.env.PORT)
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});