import { systemPrompt } from "./systemPrompt";

type EducationPromptData = {
  education: {
    schoolName: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  }[]
};

export const educationPrompt = (data: EducationPromptData) => {
  return `
${systemPrompt}

Task:
Generate ATS-friendly education highlights for a resume.

Instructions:
- Return ONLY valid JSON.
- Do not use markdown.
- Do not invent awards, grades, or achievements.
- Base the response on the provided degree and target role.
- Generate 2-4 concise bullet points highlighting relevant knowledge and coursework.

Return JSON in this format:

{
  "description": [
    "",
    "",
    ""
  ]
}

Target Role:
${data.education.map(edu => `
Desc:
${edu.description}
startDate:
${edu.startDate}
endDate: 
${edu.endDate}
location:
${edu.location}
Degree:
${edu.degree}

Institution:
${edu.schoolName}
`)}
`;
};