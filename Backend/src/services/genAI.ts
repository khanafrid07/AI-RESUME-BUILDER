/// <reference types="node" />
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_KEY = process.env.GEMINI_API_KEY as string;
const apiKeys = GEMINI_KEY.split(",")

let currKeyIdx = 0

if (!GEMINI_KEY) {
  throw new Error("Missing GEMINI_API_KEY environment variable.");
}
const genAi = new GoogleGenerativeAI(apiKeys[currKeyIdx]);
const model = genAi.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: { responseMimeType: "application/json" }

})


export const rotateKey = () => {

  currKeyIdx = (currKeyIdx + 1) % apiKeys.length
  return apiKeys[currKeyIdx]
}

export default model