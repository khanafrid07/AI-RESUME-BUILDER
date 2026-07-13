import { systemPrompt } from "./systemPrompt";

type SkillsSuggestionPromptData = {
  targetRole: string;
  yearsOfExperience: string;
  education: string;
  experience: string;
  projects: string;
  currentSkills: string;
};

export const skillsSuggestionPrompt = (
  data: SkillsSuggestionPromptData
) => {
  return `
${systemPrompt}

Task:
Suggest additional resume skills based on the candidate's background.

Instructions:
- Return ONLY valid JSON.
- Do not repeat skills the user already has.
- Suggest only skills that are relevant to the target role.
- Base suggestions on the user's projects, education, and work experience.
- Suggest between 5 and 10 skills.
- Do not invent technologies unrelated to the user's background.

Return JSON:

{
  "suggestedSkills": [
    "",
    "",
    ""
  ]
}

Target Role:
${data.targetRole}

Years of Experience:
${data.yearsOfExperience}

Education:
${data.education}

Experience:
${data.experience}

Projects:
${data.projects}

Current Skills:
${data.currentSkills}
`;
};