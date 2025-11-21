import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// 1. Fast AI Response: Generate a description for a skill title
export const generateSkillDescription = async (title: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite-latest',
      contents: `Write a short, engaging, and professional description (max 2 sentences) for a skill exchange offer titled: "${title}". It should sound inviting to someone who wants to learn.`,
    });
    return response.text || '';
  } catch (error) {
    console.error("Gemini Description Error:", error);
    return "Share your expertise and connect with others.";
  }
};

// 2. Chatbot & Thinking Mode: Main Assistant
export const chatWithAI = async (
  message: string, 
  history: { role: 'user' | 'model', text: string }[], 
  useThinking: boolean = false
) => {
  try {
    const model = useThinking ? 'gemini-3-pro-preview' : 'gemini-3-pro-preview'; // Using Pro for better chat quality
    
    const config: any = {
      systemInstruction: "You are the SkillSwap Assistant. Help users find skills to learn, suggest swaps, and give advice on teaching/learning. Be friendly and concise.",
    };

    if (useThinking) {
      config.thinkingConfig = { thinkingBudget: 1024 }; // Using a modest budget for demo
      // Note: Max is 32768, but 1024 is usually enough for reasonable latency in a demo
    }

    // Convert history to compatible format if using Chat object, or just append to prompt for single turn simplicity in this demo context
    // For robustness, we'll use generateContent with history as context if needed, but here we'll stick to single turn + context for simplicity or simple chat.
    // Let's use the Chat API properly.
    
    const chat = ai.chats.create({
        model: model,
        config: config,
        history: history.map(h => ({ role: h.role, parts: [{ text: h.text }] }))
    });

    const response = await chat.sendMessage({ message });
    return response.text;

  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having trouble connecting to the knowledge base right now.";
  }
};

// 3. Search Grounding: Find Trends/Resources
export const searchSkillTrends = async (query: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: query,
            config: {
                tools: [{ googleSearch: {} }],
            },
        });
        
        // Extract text and grounding metadata
        const text = response.text;
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        
        return { text, chunks };
    } catch (error) {
        console.error("Gemini Search Error:", error);
        return { text: "Unable to search right now.", chunks: [] };
    }
};

// 4. TTS: Speak text
export const generateSpeech = async (text: string): Promise<ArrayBuffer | null> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' }, // Puck, Charon, Kore, Fenrir, Zephyr
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
            // Decode base64 to ArrayBuffer
            const binaryString = window.atob(base64Audio);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        }
        return null;
    } catch (error) {
        console.error("Gemini TTS Error:", error);
        return null;
    }
};
