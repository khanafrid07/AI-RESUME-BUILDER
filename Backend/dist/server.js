"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = __importDefault(require("./config/db"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const resumeRoute_1 = __importDefault(require("./routes/resumeRoute"));
(0, db_1.default)();
const config = {
    PORT: process.env.PORT || '5000',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Ai_resume_builder'
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/auth", authRoute_1.default);
app.use("/api/resume", resumeRoute_1.default);
console.log(process.env.PORT);
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
