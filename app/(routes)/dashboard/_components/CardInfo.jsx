import formatNumber from "@/utils"; 
import getFinancialAdvice from "@/utils/getFinancialAdvice";
import {
  PiggyBank,
  ReceiptText,
  Wallet,
  Sparkles,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function CardInfo({ budgetList, incomeList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [financialAdvice, setFinancialAdvice] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [customAdvice, setCustomAdvice] = useState("");

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      CalculateCardInfo();
    }
  }, [budgetList, incomeList]);

  useEffect(() => {
    if (totalBudget > 0 || totalIncome > 0 || totalSpend > 0) {
      const fetchDefaultAdvice = async () => {
        const advice = await getFinancialAdvice(
          totalBudget,
          totalIncome,
          totalSpend
        );
        setFinancialAdvice(advice);
      };
      fetchDefaultAdvice();
    }
  }, [totalBudget, totalIncome, totalSpend]);

  const CalculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    let totalIncome_ = 0;

    budgetList.forEach((element) => {
      totalBudget_ += Number(element.amount || 0);
      totalSpend_ += Number(element.totalSpend || 0);
    });

    incomeList?.forEach((element) => {
      const amount = element?.amount || element?.totalAmount || 0;
      totalIncome_ += Number(amount);
    });

    setTotalIncome(totalIncome_);
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
  };

  const handleUserQuestionSubmit = async () => {
    if (userQuestion.trim() === "") return;
    const advice = await getFinancialAdvice(
      totalBudget,
      totalIncome,
      totalSpend,
      userQuestion
    );
    setCustomAdvice(advice);
    setUserQuestion(""); // <-- Clear the input box after asking
  };
  

  return (
    <div>
      {budgetList?.length > 0 ? (
        <div>
          <div className="p-7 border mt-4 -mb-1 rounded-2xl flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex mb-2 flex-row space-x-1 items-center">
                <h2 className="text-md">FinanceKaro</h2>
                <Sparkles className="rounded-full text-white w-10 h-10 p-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate" />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask a financial question..."
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  className="border px-3 py-2 rounded-lg text-sm"
                />
                <button
                  onClick={handleUserQuestionSubmit}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Ask
                </button>
              </div>
            </div>

            <h2 className="font-light text-md">
              {financialAdvice || "Loading financial advice..."}
            </h2>

            {customAdvice && (
              <div className="p-4 bg-blue-100 rounded-lg mt-2">
                <h2 className="text-sm font-medium text-blue-700">Gemini says:</h2>
                <p className="text-blue-900">{customAdvice}</p>
              </div>
            )}
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Total Budget */}
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Budget</h2>
                <h2 className="font-bold text-2xl">₹{formatNumber(totalBudget)}</h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>

            {/* Total Spend */}
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Spend</h2>
                <h2 className="font-bold text-2xl">₹{formatNumber(totalSpend)}</h2>
              </div>
              <ReceiptText className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>

            {/* No. Of Budgets */}
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">No. Of Budgets</h2>
                <h2 className="font-bold text-2xl">{budgetList?.length}</h2>
              </div>
              <Wallet className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
