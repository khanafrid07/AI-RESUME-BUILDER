import { systemPrompt } from "./systemPrompt";

type ProjectPromptData = {
  projects: {
    projectName: string;
    projectLink?: string;
    githubLink?: string;
    description: string;
    startDate?: string;
    endDate?: string;
    technologies: string[];
  }[];
  targetRole?: string;
  skills?: string[];
  index?: number;
};

export const projectPrompt = (data: ProjectPromptData) => {
  if (!data.projects || data.projects.length === 0) {
    return `
${systemPrompt}
Task: Generate ATS-friendly resume bullet points for a project.
Return JSON:
{
  "description": []
}
`;
  }

  const targetIndex = typeof data.index === 'number' ? data.index : data.projects.length - 1;
  const targetProject = data.projects[targetIndex] || data.projects[data.projects.length - 1];

  const targetProjectName = targetProject?.projectName || "";
  const targetTechnologies = Array.isArray(targetProject?.technologies) 
    ? targetProject.technologies.join(", ") 
    : (targetProject?.technologies || "");
  const targetDescription = targetProject?.description || "";

  return `
${systemPrompt}

Task:
Generate ATS-friendly project bullet points for a resume.
Specifically, generate exactly 3 professional resume bullet points for the following project:
- Project Name: ${targetProjectName}
- Technologies Used: ${targetTechnologies}

Instructions:
- Return ONLY valid JSON.
- Do not use markdown (e.g. no \`\`\`json blocks, no bold, no italic, no bullet symbols in the strings).
- Write exactly 3 professional resume bullet points.
- Each bullet point should begin with a strong action verb (e.g., "Designed", "Developed", "Implemented", "Optimized", "Architected").
- Keep each bullet point between 15-25 words.
- Mention technologies naturally and in context.
- Base the description on the "Current Description" provided below, refining and professionalizing it. If the current description is minimal, use the project name, technologies, and target role to generate highly relevant professional achievements.
- Do not invent facts, metrics, or certifications that contradict the user's input.
- Optimize the bullet points for the target role.

Return JSON in exactly this format:
{
  "description": [
    "First bullet point...",
    "Second bullet point...",
    "Third bullet point..."
  ]
}

Target Role:
${data.targetRole || "N/A"}

Skills context:
${data.skills && data.skills.length > 0 ? (Array.isArray(data.skills) ? data.skills.join(", ") : data.skills) : "N/A"}

Current Description of the Project:
${targetDescription || "None provided"}
`;
};