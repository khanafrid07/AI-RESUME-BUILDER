import { systemPrompt } from "./systemPrompt";

export const summaryPrompt = (data: any) => {
  return `
${systemPrompt}

Task:
Generate a professional ATS-friendly resume summary.

Instructions:
- Return ONLY valid JSON.
- Write a concise summary (1-2 sentences).
- Highlight the candidate's strengths.
- Tailor the summary to the target role.
- Do not invent facts.

Return JSON:

{
  "summary": ""
}

Target Role:
${data.targetRole}

Years of Experience:
${data.yearsOfExperience}

Experience:
${JSON.stringify(data.experience, null, 2)}

Projects:
${JSON.stringify(data.projects, null, 2)}

Skills:
${JSON.stringify(data.skills, null, 2)}

Education:
${JSON.stringify(data.education, null, 2)}
`;
};