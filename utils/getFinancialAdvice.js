import fetch from "node-fetch"; // Only if necessary

require('dotenv').config();

const geminiApiKey = process.env.GEMINI_API_KEY;

const fetchFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} INR
      - Expenses: ${totalSpend} INR
      Provide detailed financial advice in 2 sentences.
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyApjnrMESPP1zsEoBAwpW67A87IjeAGEcE`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: userPrompt }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Unauthorized: Please check your Gemini API key.");
      } else {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text; // Correct way based on Gemini response format
  } catch (error) {
    console.error("Error fetching financial advice:", error.message);
    return "Sorry, I couldn't fetch the financial advice at this time. Please try again later.";
  }
};

export default fetchFinancialAdvice;
