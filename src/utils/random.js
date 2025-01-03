import { generateContent } from "./gemini";

export const generateRandomName = async () => {
  const prompt = "請隨機生成一個現實生活中會出現的角色的名稱";
  try {
    const response = await generateContent(prompt);
    return response.trim().replace(/"/g, '');
  } catch (error) {
      console.error("Error generating random name:", error);
      return "Error Name"
  }
};

export const generateRandomDescription = async () => {
  const prompt = "請隨機生成一個現實生活中會出現的角色的描述，長度約 20 字左右";
  try {
      const response = await generateContent(prompt);
    return response.trim().replace(/"/g, '');
  } catch (error) {
      console.error("Error generating random description:", error);
       return "Error Description"
  }
};