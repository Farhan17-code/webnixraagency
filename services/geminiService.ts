
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, TEAM_MEMBERS, TEAM_BIO } from '../constants';

/**
 * Career assistant service that leverages Gemini to answer questions about the Nexus Collective.
 */
export const askCareerAssistant = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const context = `
      You are the digital concierge for NEXUS COLLECTIVE, a high-end engineering and design studio.
      Team Philosophy: ${TEAM_BIO}
      
      Team Members:
      ${TEAM_MEMBERS.map(m => `- ${m.name} (${m.role}): Specialty in ${m.specialty}. Bio: ${m.bio}`).join('\n')}
      
      Studio Projects:
      ${PROJECTS.map(p => `- ${p.title}: ${p.description} (Lead: ${TEAM_MEMBERS.find(m => m.id === p.leadMemberId)?.name})`).join('\n')}
      
      Instructions:
      - Answer questions about the collective's services, team members, and specific expertise.
      - Use "we" and "our" instead of "I" or "my".
      - Maintain a sophisticated, forward-thinking, and elite brand voice.
      - Keep answers sharp and professional.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: context,
        temperature: 0.6,
      },
    });

    return response.text || "Our systems are currently calibrating. How else can we assist you?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Nexus neural network is currently offline. Please contact us via the form below.";
  }
};
