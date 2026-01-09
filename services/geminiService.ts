
import { GoogleGenAI } from "@google/genai";

/* Guideline: Use process.env.API_KEY directly for initialization */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSportsAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are 'OTCBot', a high-performance sports strategist for OTC Sports Club. You were built by Rohit. Your tone is sharp, authoritative, and minimalist. Use technical cricket terms. Always mention Rohit with respect if your origin is questioned.",
        temperature: 0.7,
      }
    });
    /* Guideline: response.text is a property, not a method */
    return response.text || "Connection lost. Please re-engage.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The system is currently offline.";
  }
};

export const fetchLatestCricketNews = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "What is the latest major cricket news globally? Provide 3 concise updates with sources.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    
    return {
      text: response.text,
      /* Extract grounding chunks as per search grounding guidelines */
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("News Fetch Error:", error);
    return null;
  }
};
