import { systemPrompt } from "./systemPrompt";

type ExperiencePromptData = {
  experience: {
    location: string;
    currentlyWorking?: string;
    targetRole?: string;
    jobRole: string;
    companyName: string;
    startDate: string;
    endDate: string;
    workSummary?: string;
    description: string[] | string;
  }[];
  targetRole?: string;
  skills?: { Category: string, skills: string[] }[];
};

export default function experiencePrompt(
  data: ExperiencePromptData
): string {
  return `
${systemPrompt}

Task:
Generate ATS-friendly resume bullet points for a work experience section.

Instructions:
- Return ONLY valid JSON.
- Do not use markdown.
- Generate exactly 4 bullet points.
- Start each bullet with a strong action verb.
- Each bullet should be 15-25 words.
- Focus on achievements, impact, and responsibilities.
- Include technologies naturally when relevant.
- Do not invent facts.
- Tailor the writing to the target role.

Return JSON:

{
  "description": [
    "",
    "",
    "",
    ""
  ]
}

${data.targetRole ? `Target Role:\n${data.targetRole}\n` : ""}
${data?.skills && data.skills.map((skill) => (`Category: ${skill.Category}, Skills: ${skill.skills.join(", ")}`)).join("\n")}

Candidate Experience

${data.experience
      .map(
        (item, index) => {
          const rawDesc = item.workSummary || (Array.isArray(item.description) ? item.description.filter(Boolean).join("\n") : item.description);
          return `
Experience ${index + 1}

Job Role: ${item.jobRole}
Company: ${item.companyName}
Location: ${item.location}
Start Date: ${item.startDate}
End Date: ${item.currentlyWorking ? "Present" : item.endDate}



`;
        }
      )
    }
`;
}