import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Iresume } from "../types/resumeTypes";

const resumeSchema = new Schema<Iresume>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    template: {
        type: String,
        required: true
    },
    personalInfo: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        country: String,
        portfolioWeb: String
    },
    summary: String,
    education: [{
        degree: String,
        schoolName: String,
        startDate: String,
        endDate: String,
        location: String,
        description: [String]
    }],
    experience: [{
        companyName: String,
        jobRole: String,
        startDate: String,
        endDate: String,
        currentlyWorking: Boolean,
        location: String,
        description: [String]
    }],
    projects: [{
        projectName: String,
        projectLink: String,
        githubLink: String,
        description: [String],
        startDate: String,
        endDate: String,
        technologies: [String],
    }],
    skills: [{
        id: String,
        skills: [String],
        category: String
    }],
    certifications: [{
        id: String,
        title: String,
        issuer: String,
        issueDate: String
    }],
    languages: [{
        id: String,
        language: String,
        proficiency: String

    }],
    targetRole: String,
    hobbies: [String],
    customSections: [{
        id: String,
        title: String,
        content: String
    }],


})

export default mongoose.model<Iresume>("Resume", resumeSchema);





