"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wrapAsync_1 = __importDefault(require("../middlewares/wrapAsync"));
const verify_1 = __importDefault(require("../middlewares/verify"));
const Resume_1 = __importDefault(require("../models/Resume"));
const router = (0, express_1.Router)();
router.post("/", verify_1.default, (0, wrapAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, name, summary, projects, interests, experience, languages, certificates, template, portfolio, linkedin, github, phone, location, email } = req.body;
    const newResume = new Resume_1.default({ name, title, summary, projects, interests, experience, languages, certificates, template, portfolio, linkedin, github, phone, location, email });
    yield newResume.save();
    res.status(201).json({ message: "Resume Created ", newResume });
})));
router.get("/", verify_1.default, (0, wrapAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const getResume = yield Resume_1.default.find({ user: req.userId });
    res.status(200).json({ getResume });
})));
exports.default = router;
