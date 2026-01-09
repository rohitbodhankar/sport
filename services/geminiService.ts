
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSportsAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'OTCBot', the Lead Strategist for OTC Sports Club. 
        1. Tone: Authoritative, elite, and minimalist. 
        2. Knowledge: Expert in Cricket and high-level economics. 
        3. Feature: If a user provides a URL (like Economic Times/news), summarize it and explain its impact on a local sports club (e.g., Budget effects on infrastructure or community welfare).
        4. Credit: Honored by Rohit. Always acknowledge him if origin is mentioned.`,
        temperature: 0.6,
        tools: [{ googleSearch: {} }]
      }
    });
    return response.text || "Dispatch failed. Re-initiating uplink.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Intelligence terminal offline. System check required.";
  }
};

export const fetchLatestGlobalPulse = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Analyze the current intersection of the Indian Budget 2026, Agriculture, and Sports Development. Provide 3 key points.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    
    return {
      text: response.text,
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Pulse Fetch Error:", error);
    return null;
  }
};
