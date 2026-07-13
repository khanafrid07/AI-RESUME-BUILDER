import dotenv from "dotenv";
dotenv.config();
import experiencePrompt from "./Prompts/experincePrompt";
import model from "./services/genAI";

async function test() {
  const aiFormData = {
    experience: [
      {
        companyName: "Google",
        jobRole: "Software Engineer",
        startDate: "2025-01-01",
        endDate: "",
        currentlyWorking: "true",
        location: "Mountain View",
        description: ["Built some cool web apps", "Optimized queries"],
      }
    ],
    targetRole: "Senior Frontend Engineer",
    skills: ["React", "TypeScript"]
  };

  const prompt = experiencePrompt(aiFormData as any);
  console.log("--- PROMPT ---");
  console.log(prompt);
  console.log("--------------");

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    console.log("--- RAW RESPONSE ---");
    console.log(text);
    console.log("--------------------");

    const processedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("--- PROCESSED TEXT ---");
    console.log(processedText);
    console.log("----------------------");

    const parsed = JSON.parse(processedText);
    console.log("--- PARSED JSON ---");
    console.dir(parsed, { depth: null });
  } catch (err) {
    console.error("Error during generation/parsing:", err);
  }
}

test();
