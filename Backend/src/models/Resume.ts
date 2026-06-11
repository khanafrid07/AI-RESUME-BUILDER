import mongoose, { Document, Schema } from "mongoose";

interface IExperience {
    company: string;
    role: string;
    duration: string;
}
interface IResume extends Document {
    user: mongoose.Types.ObjectId;

    name: string;
    title: string;
    summary: string;

    email: string;
    phone: string;
    location: string;

    linkedin: string;
    github: string;
    portfolio: string;

    template: string;
    profileImage: string;
    education: string[];

    experience: IExperience[];

    skills: string[];
    languages: string[];
    projects: string[];
    certificates: string[];
    interests: string[];
}

const resumeSchema = new Schema<IResume>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true

    },

    name: { type: String, required: true },
    title: String,
    summary: String,
    email: String,
    linkedin: String,
    github: String,
    profileImage: String,
    portfolio: String,
    template: String,
    location: String,
    phone: String,
    education: [String],

    experience: [
        {
            company: String,
            role: String,
            duration: String,
        },
    ],

    skills: [String],
    languages: [{ name: String, level: String }],
    projects: [{ title: String, descrpiton: String, linkTitle: String, link: String, duration: String }],
    certificates: [String],
    interests: [String],
},
    { timestamps: true }
);

const Resume = mongoose.model<IResume>("Resume", resumeSchema);

export default Resume;