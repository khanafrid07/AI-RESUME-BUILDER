/// <reference types="node" />
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_KEY = process.env.GEMINI_API_KEY as string;

if (!GEMINI_KEY) {
  throw new Error("Missing GEMINI_API_KEY environment variable.");
}
const genAi = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAi.getGenerativeModel({
  model: "gemini-2.5-flash"
})

export default model