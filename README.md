# 🚀 AI Resume Builder

An elegant, modern, AI-powered Resume Builder application built with the MERN stack (MongoDB, Express, React, Node.js), TypeScript, and Gemini AI. This project enables users to construct ATS-friendly, visually stunning resumes in real-time, leveraging Google Gemini to generate high-impact summaries, work experience descriptions, project bullet points, and customized skill suggestions.

> [!WARNING]
> **⚠️ WORK IN PROGRESS & ACTIVE DEVELOPMENT**
> This project is currently in the **active development phase**. While major parts of the frontend editor layout, routing, backend server API structure, and Gemini AI integrations are implemented, some key capabilities (like saving/loading resumes, downloading PDFs, and multi-template rendering hooks) are still being actively integrated. It is not yet a fully finished product.

## 🚧 Project Status & Roadmap

### Completed & Fully Functional
- **Monorepo Setup:** Complete backend server structure (Node, Express, Mongoose, TypeScript) and client structure (React 19, Vite, Tailwind CSS v4, DaisyUI v5).
- **User Authentication:** Complete registration and login flows with password hashing (`bcryptjs`) and secure session JWTs.
- **Interactive Multi-Step Editor:** Input fields and state tracking for Personal Info, Work Experience, Education, Skills, Projects, and custom segments.
- **Gemini AI Integration:** Backend route and prompts configured to generate resumes' summary, accomplishments descriptions, education context, and skill lists using `gemini-2.5-flash`.
- **Visual Resume Templates:** Core designs for 7+ ATS-friendly templates (Classic ATS, Bold Modern, Executive Slate, etc.) built out using Tailwind.
- **Live Split-Panel Previewer:** Interactive scaling viewer that matches the resume layout dynamically.

### Under Active Development (Remaining Work)
- **PDF Export / Download:** Implementing client-side printing styles or libraries (like `html2pdf.js`/`window.print`) to download the completed template as a standard A4/Letter PDF.
- **State Persistence & Database Saves:** Connecting the front-end finalization page to save the full resume payload to MongoDB via Mongoose.
- **User Resume Dashboard:** UI panels to list, edit, rename, or delete existing resumes from the user's dashboard.
- **Multi-Template Selector:** Connecting template-switching buttons to swap the active preview template dynamically using template slugs.
- **Profile Image Uploads:** Cloud storage or local upload handler integration for profile photo previews.

---

## 🎨 Design & Layout Preview

- **Split-Screen Interactive Editor:** Edit your details on the left, and watch your resume render instantly on the right.
- **Dynamic Scale Previewing:** The live preview scales gracefully depending on screen size to match precise PDF output layouts.
- **Premium Aesthetics:** Styled with [Tailwind CSS v4](https://tailwindcss.com/) and [DaisyUI v5](https://daisyui.com/) for fluid, modern, glassmorphic interfaces.

---

## 🌟 Key Features

### 1. 🤖 AI-Powered Assistant (Powered by Google Gemini 2.5)
- **AI Summary Generator:** Instantly crafts a tailored professional summary based on your target role, experience levels, projects, and education.
- **AI Experience Descriptions:** Generates strong, action-verb-filled bullet points highlighting achievements for target job roles.
- **AI Projects Descriptions:** Suggests descriptions and technologies for projects to align with modern hiring standards.
- **AI Education Descriptions:** Crafts tailored, professional descriptions highlighting key educational achievements.
- **AI Skills Suggestion:** Generates a list of highly relevant technical and soft skills recommended for your target job title.

### 2. 🗂️ Premium Resume Template Library
Choose from 7+ professionally designed, layout-tested, and ATS-friendly templates:
- 🛠️ **Classic ATS** – Maximum compatibility for automated sorting systems.
- ✨ **Bold Modern** – High-impact design with modern typography and accent layouts.
- 📄 **Classic Formatted** – Clean, traditional layout for executive and corporate roles.
- 🏢 **Modern Professional** – Balanced, elegant spacing designed for industry veterans.
- 🧼 **Minimal Clean** – Sleek, whitespace-focused minimalist design.
- 🧘 **Minimalist** – Strict, simple, yet highly structured layout.
- 🎨 **Simple Elegant** – Beautiful layout with visual accents.

### 3. 📝 Structured Step-by-Step Forms
Seamlessly build your resume sections:
- **Contact & Personal Info** (Name, email, phone, location, links to GitHub, LinkedIn, Portfolio).
- **Work Experience** (Interactive timeline, job roles, locations, duties, and AI accomplishments generator).
- **Education** (Schools, degrees, locations, dates, and descriptions).
- **Skills & Proficiencies** (Interactive tags, skill groups, and AI suggestion).
- **Projects** (Project titles, links, descriptions, and technology lists).
- **Finalize & Add-ons** (Add Languages, Certifications, Hobbies, and unlimited Custom Sections).

### 4. 🔑 Authentication & Security
- Hashed passwords using `bcryptjs`.
- Session management using JSON Web Tokens (`jwt`).
- Protected backend API routes.

---

## 🏗️ Architecture & Project Structure

The project is structured as a monorepo containing two main parts: the Node/Express backend (`/Backend`) and the React/Vite frontend (`/Frontend`).

```
AI-RESUME-BUILDER/
├── Backend/                    # Express.js Server
│   ├── src/
│   │   ├── config/            # DB Config (MongoDB connection)
│   │   ├── controller/        # Request Handlers
│   │   ├── middlewares/       # Auth (verify) & wrapper middlewares
│   │   ├── models/            # Mongoose Schemas (User, Resume)
│   │   ├── Prompts/           # Structured prompts for Gemini API
│   │   ├── routes/            # Routes (Auth, Resume API)
│   │   ├── services/          # Gemini AI (Google Generative AI service)
│   │   ├── types/             # TypeScript Declarations
│   │   └── server.ts          # Express Application Entry Point
│   ├── package.json
│   └── tsconfig.json
│
├── Frontend/                   # React.js SPA (Vite)
│   ├── src/
│   │   ├── app/               # Redux Store Configuration
│   │   ├── components/        # Shared Form/UI Components
│   │   ├── features/
│   │   │   ├── Dashboard/     # Editor Dashboard, State, & RTK Query
│   │   │   ├── EditorForms/   # Step-by-step wizard forms (Contact, Education, etc.)
│   │   │   └── templates/     # Premium templates (ClassicATS, BoldModern, etc.)
│   │   ├── layout/            # Navbar, Footer
│   │   ├── Pages/             # Home, Template Gallery, layout files
│   │   ├── App.tsx            # Routes configurations
│   │   └── main.tsx           # Entry point
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── package.json                # Root dependency config
└── README.md                   # Project Documentation
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19 (TypeScript)
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4, DaisyUI v5 (with Lucide React icons)
- **State Management:** Redux Toolkit & RTK Query (for API polling/mutations)
- **Routing:** React Router DOM v7

### Backend
- **Platform:** Node.js (TypeScript)
- **Framework:** Express.js v5
- **Database:** MongoDB (using Mongoose ODM)
- **Authentication:** JWT, bcryptjs
- **AI Integration:** `@google/generative-ai` (Gemini 2.5 Flash SDK)

---

## ⚡ Getting Started & Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or via Atlas)
- Google Gemini API Key (Get one from [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the Repository
```bash
git clone https://github.com/khanafrid07/AI-RESUME-BUILDER.git
cd AI-RESUME-BUILDER
```

### 2. Configure the Backend
Navigate to the `Backend` directory and set up your environment variables:
```bash
cd Backend
```
Create a `.env` file in the `Backend` root:
```env
PORT=8080
JWT_SECRET=your_jwt_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```
Install backend dependencies and start the development server:
```bash
npm install
npm run dev
```
The backend server will run on `http://localhost:8080` (or the configured `PORT`).

### 3. Configure the Frontend
Navigate to the `Frontend` directory:
```bash
cd ../Frontend
```
Install frontend dependencies and start the Vite dev server:
```bash
npm install
npm run dev
```
The frontend application will start on `http://localhost:5173`. Open it in your web browser.

---

## 🔌 API Documentation

### Authentication Routes
- **`POST /api/auth/register`**: Register a new account. Returns a JWT token.
- **`POST /api/auth/login`**: Authenticate a user. Returns a JWT token.

### Resume & AI Routes
- **`POST /api/resume/ai/generate`**: Primary endpoint for Gemini AI resume completions.
  - **Body parameters:**
    ```json
    {
      "type": "summary" | "experience" | "project" | "education" | "skills",
      "aiFormData": { ... }
    }
    ```
- **`GET /api/resume`**: Fetches all saved resumes for the authenticated user (requires JWT token in header).

---

## 📝 License

Distributed under the ISC License. See `LICENSE` (if present) for details.
