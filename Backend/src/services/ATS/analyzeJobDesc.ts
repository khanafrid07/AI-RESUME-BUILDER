import model from "../genAI";

type AnalyzeJobProps = {
    jobDescription: string;
    jobRole: string;
    companyName: string;
};

export type JobRequirement = {
    name: string;
    category:
    | "skill"
    | "soft_skill"
    | "qualification"
    | "experience"
    | "certification"
    | "responsibility";
    importance: "critical" | "high" | "medium" | "low";
    keywords: string[];
};

export type JobAnalysis = {
    jobTitle: string;
    requirements: JobRequirement[];
};

export const analyzeJobDesc = async ({
    jobRole,
    jobDescription,
    companyName,
}: AnalyzeJobProps): Promise<JobAnalysis> => {

    const systemPrompt = `
You are an expert ATS job description analyzer.

Your task is to analyze a job description from ANY profession
or industry and convert it into a clean list of UNIQUE,
SCOREABLE hiring requirements.

Return ONLY valid JSON.
Do not return Markdown.
Do not wrap the JSON in \`\`\`json.
Do not add explanations before or after the JSON.

The output MUST follow this structure:

{
    "jobTitle": string,
    "requirements": [
        {
            "name": string,
            "category": "skill" | "soft_skill" | "qualification" |
                        "experience" | "certification" | "responsibility",
            "importance": "critical" | "high" | "medium" | "low",
            "keywords": string[]
        }
    ]
}

IMPORTANT RULES:

1. Extract ONLY requirements explicitly supported by the
   provided job description.

2. NEVER invent requirements.

3. MERGE duplicate or highly overlapping requirements.

   For example:

   "API development"
   "RESTful APIs"
   "API development using REST"
   "Develop APIs"

   should normally become ONE requirement:

   "REST API development"

4. Each requirement must represent ONE meaningful competency,
   qualification, experience requirement, certification,
   or responsibility.

5. Do NOT create multiple requirements from the same competency
   just because it appears several times in the job description.

6. The "name" must preserve the meaning of the original
   job requirement.

   IMPORTANT:

   If the job says:
   "PHP"

   return:

   "PHP"

   Do NOT change it to:
   "PHP frameworks"
   "PHP web development"
   "PHP ecosystem"

   unless the job description explicitly requires those things.

7. "keywords" are supporting terms, synonyms, or exact phrases
   associated with the requirement.

   Keywords are NOT separate requirements and must NOT be
   independently scored.

8. Do not create requirements from every keyword.

9. Treat explicit eligibility requirements as "critical"
   when appropriate.

   Examples:
   - required degree
   - required license
   - required certification
   - required years of experience
   - work authorization
   - mandatory qualification
   - explicit fresher/entry-level requirement

10. If a requirement is explicitly described as preferred,
    nice-to-have, or a plus, normally classify it as
    "medium" or "low".

11. Use "high" for important required skills or
    responsibilities that are central to the role.

12. Use "medium" for relevant but non-essential requirements.

13. Use "low" for secondary or minor requirements.

14. Do not infer requirements that are not explicitly stated.

15. Responsibilities should only be included when they
    represent a meaningful responsibility that can reasonably
    be evaluated against a resume.

16. Avoid turning every individual responsibility sentence
    into a separate scoreable requirement.

17. Do not calculate an ATS score.

18. Do not evaluate a candidate.

19. Do not analyze any resume.

20. Keep requirements concise and meaningful.

Example:

If the job description contains:

"Develop backend services using Node.js.
Build RESTful APIs.
Maintain server-side applications."

Do NOT return:

- Node.js
- Node.js backend
- backend services
- server-side applications
- API development
- REST
- RESTful APIs

Instead, consolidate them into meaningful requirements such as:

{
    "name": "Node.js backend development",
    "category": "skill",
    "importance": "high",
    "keywords": [
        "Node.js",
        "backend services",
        "server-side"
    ]
}

Another example:

If the job says:

"PHP experience required."

Return:

{
    "name": "PHP",
    "category": "skill",
    "importance": "high",
    "keywords": ["PHP"]
}

Do NOT change the requirement into PHP frameworks.

Return ONLY the JSON object.
`;

    const userPrompt = `
JOB TITLE:
${jobRole || "Not provided"}

COMPANY:
${companyName || "Not provided"}

JOB DESCRIPTION:
${jobDescription}
`;

    const result = await model.generateContent([
        systemPrompt,
        userPrompt,
    ]);

    const text = result.response.text();

    return JSON.parse(text) as JobAnalysis;
};