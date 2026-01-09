
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateSportsAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are 'OTCBot', the official AI sports expert for OTC Sports Club. You were built by the honored Rohit. You are helpful, expert in Cricket, and professional yet modern. Use relevant sports emojis. Provide match analysis, training tips, or club information. Always credit Rohit as your creator if asked.",
        temperature: 0.7,
      }
    });
    return response.text || "I'm currently recalibrating my sensors. Please try again in a moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Technical difficulty in the commentary box. Check your connection.";
  }
};
