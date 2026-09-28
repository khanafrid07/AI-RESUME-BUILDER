import type { ResumeData } from "../EditorForms/types";
export const dummyResumeData: ResumeData = {
    personalInfo: {
        firstName: "Aarav",
        lastName: "Sharma",
        phone: "+977 9812345678",
        email: "aarav.sharma@example.com",
        address: "Baneshwor",
        city: "Kathmandu",
        country: "Nepal",
        portfolioWeb: "https://aaravsharma.dev",
    },

    summary:
        "Full-stack developer with 2+ years of experience building scalable web applications using React, TypeScript, Node.js, and MongoDB. Experienced in designing REST APIs, authentication systems, responsive user interfaces, and database-driven applications. Passionate about writing clean, maintainable code and building products that solve real-world problems.",

    targetRole: "Full Stack Developer",

    education: [
        {
            degree: "Bachelor of Computer Applications",
            schoolName: "Tribhuvan University",
            startDate: "2020",
            endDate: "2024",
            location: "Kathmandu, Nepal",
            description: [
                "Studied software development, database management, data structures, and web technologies.",
                "Developed multiple full-stack applications as academic and personal projects.",
            ],
        },
        {
            degree: "Higher Secondary Education",
            schoolName: "National College",
            startDate: "2018",
            endDate: "2020",
            location: "Kathmandu, Nepal",
            description: [
                "Focused on computer science and mathematics.",
            ],
        },
    ],

    experience: [
        {
            companyName: "TechNova Solutions",
            jobRole: "Full Stack Developer",
            startDate: "Jan 2025",
            endDate: "",
            currentlyWorking: true,
            location: "Kathmandu, Nepal",
            description: [
                "Developed and maintained full-stack web applications using React, TypeScript, Node.js, Express, and MongoDB.",
                "Designed RESTful APIs for authentication, user management, products, orders, and payments.",
                "Implemented JWT-based authentication with refresh tokens and secure HTTP-only cookies.",
                "Improved API performance by optimizing MongoDB queries and introducing Redis caching.",
            ],
        },
        {
            companyName: "PixelCraft Technologies",
            jobRole: "Frontend Developer Intern",
            startDate: "Jun 2024",
            endDate: "Dec 2024",
            currentlyWorking: false,
            location: "Lalitpur, Nepal",
            description: [
                "Built responsive interfaces using React, JavaScript, Tailwind CSS, and Bootstrap.",
                "Integrated frontend applications with REST APIs and handled asynchronous state using Redux Toolkit.",
                "Collaborated with designers and backend developers to implement reusable UI components.",
            ],
        },
    ],

    projects: [
        {
            projectName: "AI Resume Builder",
            projectLink: "https://resume.aaravsharma.dev",
            githubLink: "https://github.com/aaravsharma/ai-resume-builder",
            description: [
                "Built a full-stack resume builder that allows users to create, edit, and export professional resumes.",
                "Implemented AI-powered resume generation and ATS analysis using Gemini.",
                "Created multiple reusable resume templates with PDF export using Puppeteer.",
            ],
            startDate: "2025",
            endDate: "2026",
            technologies: [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Redux Toolkit",
                "Gemini AI",
            ],
        },
        {
            projectName: "ShopSmart E-Commerce",
            projectLink: "https://shopsmart.aaravsharma.dev",
            githubLink: "https://github.com/aaravsharma/shopsmart",
            description: [
                "Developed a full-stack e-commerce platform with product discovery, cart management, authentication, and order processing.",
                "Implemented admin dashboards for managing products, orders, banners, and users.",
                "Designed scalable API architecture with Redis caching and MongoDB indexing.",
            ],
            startDate: "2025",
            endDate: "2026",
            technologies: [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Redis",
                "RTK Query",
                "Tailwind CSS",
            ],
        },
        {
            projectName: "TaskFlow",
            projectLink: "https://taskflow.aaravsharma.dev",
            githubLink: "https://github.com/aaravsharma/taskflow",
            description: [
                "Created a collaborative task management application for organizing projects and tracking team progress.",
                "Implemented task creation, filtering, status management, and user authentication.",
            ],
            startDate: "2024",
            endDate: "2024",
            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
            ],
        },
    ],

    skills: [
        {
            id: "skill-1",
            category: "Frontend",
            skills: [
                "React",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Redux Toolkit",
            ],
        },
        {
            id: "skill-2",
            category: "Backend",
            skills: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT",
                "Authentication",
            ],
        },
        {
            id: "skill-3",
            category: "Database",
            skills: [
                "MongoDB",
                "Mongoose",
                "Redis",
                "Database Indexing",
            ],
        },
        {
            id: "skill-4",
            category: "Tools",
            skills: [
                "Git",
                "GitHub",
                "Docker",
                "Postman",
                "VS Code",
            ],
        },
    ],

    certifications: [
        {
            id: "cert-1",
            title: "Meta Front-End Developer Professional Certificate",
            issuer: "Meta",
            issueDate: "2024",
        },
        {
            id: "cert-2",
            title: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            issueDate: "2024",
        },
        {
            id: "cert-3",
            title: "Node.js Developer Certification",
            issuer: "OpenJS Foundation",
            issueDate: "2025",
        },
    ],

    languages: [
        {
            id: "lang-1",
            language: "English",
            proficiency: "Professional",
        },
        {
            id: "lang-2",
            language: "Hindi",
            proficiency: "Fluent",
        },
        {
            id: "lang-3",
            language: "Nepali",
            proficiency: "Native",
        },
    ],

    hobbies: [
        "Open-source development",
        "Reading technology blogs",
        "Photography",
        "Problem solving",
    ],

    customSections: [
        {
            id: "custom-1",
            title: "Achievements",
            content:
                "Built and deployed multiple full-stack applications and participated in several university-level software development competitions.",
        },
        {
            id: "custom-2",
            title: "Interests",
            content:
                "Interested in distributed systems, backend architecture, artificial intelligence, and developer tooling.",
        },
    ],

    template: "classic-ats",
};