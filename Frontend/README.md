# 💻 AI Resume Builder - Frontend

This is the React + TypeScript frontend for the **AI Resume Builder**. It provides a fully interactive, step-by-step editing wizard alongside a live-updated resume preview panel.

> [!WARNING]
> **⚠️ WORK IN PROGRESS & ACTIVE DEVELOPMENT**
> The frontend is currently in the **active development phase**. The core forms structure, UI layouts, template styling, state management, and API slice mutations are fully functional, but features like PDF export, template selector bindings, and database saves are still under construction.

---

## 🚀 Key Features

- **Split-Screen Dynamic Preview:** Interactive forms on the left and real-time styled resume template on the right.
- **Customizable Multi-step Wizard:**
  1. **Contact Info:** Name, contact details, profile, target role.
  2. **Education:** Input degrees, school names, dates, descriptions.
  3. **Skills:** Tag input with AI-suggested skills options.
  4. **Experience:** Log past jobs, timeline, and use AI to generate descriptive accomplishment points.
  5. **Summary:** Write your own summary or generate one using Gemini AI.
  6. **Projects:** Document project names, links, and descriptions.
  7. **Finalize:** Add custom fields like certifications, languages, hobbies, or arbitrary new custom text blocks.
- **Premium Templates:** Built-in modern templates like *Bold Modern*, *Classic ATS*, *Minimalist*, *Modern Professional*, *Simple Elegant*, and more.
- **Redux State Management:** Global state control and API mutations handled via Redux Toolkit and RTK Query.

---

## 🛠️ Technology Stack

- **Framework:** React 19
- **Bundler:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, DaisyUI v5 (Tailwind CSS component library)
- **Icons:** Lucide React
- **State Management:** Redux Toolkit, React Redux, RTK Query
- **Routing:** React Router DOM v7

---

## 📂 Folder Structure

```
Frontend/
├── public/                 # Static assets
└── src/
    ├── app/                # Redux store config (store.ts)
    ├── assets/             # Global visual assets
    ├── components/         # Common inputs and shared visual elements
    ├── features/
    │   ├── Dashboard/      # Main dashboard wrapper & RTK Query slice (ResumeApi.ts)
    │   ├── EditorForms/    # Multi-step forms (Contact, Education, Experience, Summary, Projects, Finalize)
    │   └── templates/      # Collection of resume templates (ClassicATS, BoldModern, etc.)
    ├── layout/             # Shared layout components (Navbar, Footer)
    ├── Pages/              # Page layouts (Home.tsx, TempleatePage.tsx, UserLayout.tsx)
    ├── App.tsx             # Route definitions
    ├── App.css             # Main styling overrides
    ├── index.css           # Tailwind directives
    └── main.tsx            # React application entry point
```

---

## 🏃 Getting Started

### Prerequisites
Make sure you have Node.js installed. Ensure the backend server is running so that the AI suggestions and template persistence endpoints work properly.

### Installation
1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build the application for production:
   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🔗 Main Project README
For detailed documentation on the overall application architecture, backend API, setup, and database design, please see the [Main Project README](../README.md).
