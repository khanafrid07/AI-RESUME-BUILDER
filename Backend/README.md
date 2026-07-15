# 🖥️ AI Resume Builder - Backend

This is the Node.js, Express, and TypeScript backend for the **AI Resume Builder**. It handles authentication, data persistence with MongoDB/Mongoose, and interacts with the Google Gemini 2.5 Flash model to generate resume sections based on custom prompts.

> [!WARNING]
> **⚠️ WORK IN PROGRESS & ACTIVE DEVELOPMENT**
> The backend service is currently in the **active development phase**. Authentication routing, User schemas, Gemini AI prompt pipelines, and basic Mongoose schemas are completed, but endpoints for saving/editing complete resume payloads are still being extended and tested for frontend connection.

---

## 🚀 Key Features

- **Gemini AI Integration:** Generates custom resume summaries, experience bullet points, education outlines, projects descriptions, and skill suggestions.
- **Secure Authentication:** User signup and signin endpoints powered by `bcryptjs` for password hashing and `jsonwebtoken` (JWT) for secure session tokens.
- **Data Persistence:** Robust schemas for Users and Resumes in MongoDB using Mongoose.
- **Async Safety:** Route handlers wrapped in custom error catchers (`wrapAsync`) for stable error handling.

---

## 🛠️ Technology Stack

- **Platform:** Node.js (TypeScript)
- **Framework:** Express.js v5
- **Database:** MongoDB (using Mongoose ODM)
- **AI SDK:** `@google/generative-ai` (Gemini 2.5 Flash API)
- **Security:** `bcryptjs`, `jsonwebtoken`
- **Environment:** `dotenv` for configuration

---

## 📂 Folder Structure

```
Backend/
├── src/
│   ├── config/            # DB connection setup (db.ts)
│   ├── controller/        # Request handling logic
│   ├── middlewares/       # verifyToken (JWT checker) and wrapAsync
│   ├── models/            # Mongoose schemas (User.ts, Resume.ts)
│   ├── Prompts/           # Structured instructions/prompts sent to Gemini API
│   │   ├── educationPrompt.ts
│   │   ├── experincePrompt.ts
│   │   ├── projectPrompt.ts
│   │   ├── skillPrompt.ts
│   │   └── summaryPrompt.ts
│   ├── routes/            # Routes (authRoute.ts, resumeRoute.ts)
│   ├── services/          # Gemini API client instantiation (genAI.ts)
│   ├── types/             # Custom TypeScript declarations (express.d.ts)
│   ├── test_prompt.ts     # Command-line utility for testing prompts
│   └── server.ts          # Server entry point
├── .env                   # Configuration variables (gitignored)
├── package.json           # Scripts and dependencies
└── tsconfig.json          # TypeScript compiler configuration
```

---

## 🏃 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [MongoDB](https://www.mongodb.com/) running locally or via Atlas.
- A Gemini API Key from [Google AI Studio](https://aistudio.google.com/).

### 2. Environment Setup
Create a `.env` file in the root of the `/Backend` directory:
```env
PORT=8080
JWT_SECRET=your_jwt_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Installation & Run
Install the dependencies and start the development server:
```bash
npm install
npm run dev
```

The server will run on `http://localhost:8080` (or your configured `PORT`).

---

## 🔌 API Reference

### Auth
- **`POST /api/auth/register`**
  - **Body:** `{ name, email, password }`
  - **Returns:** Successful message + JWT `token`.
- **`POST /api/auth/login`**
  - **Body:** `{ email, password }`
  - **Returns:** Successful message + JWT `token`.

### Resumes & AI
- **`GET /api/resume`** *(Requires Auth Token)*
  - **Returns:** List of saved resumes for the authenticated user.
- **`POST /api/resume/ai/generate`**
  - **Body:** `{ type, aiFormData }` where `type` is one of `summary`, `experience`, `project`, `education`, or `skills`.
  - **Returns:** JSON object with AI-generated text parsed into structures (e.g., description bullets, suggested skills).

---

## 🔗 Main Project README
For detailed documentation on the entire application suite and the frontend layout, please see the [Main Project README](../README.md).
