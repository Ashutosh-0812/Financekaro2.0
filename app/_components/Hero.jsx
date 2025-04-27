import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-white py-20">
      {/* Background Light Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/20 via-transparent to-indigo-400/20 blur-2xl opacity-60"></div>

      {/* Main Content */}
      <div className="flex flex-col w-full max-w-7xl px-5 md:px-10 z-10">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-2">
            Manage your Money with <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600">
              AI-Driven Personal Finance Advisor
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Plan smarter. Spend wiser. Save faster. Your journey to financial freedom starts here.
          </p>

          {/* Action Section */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <p className="text-gray-500 dark:text-gray-400 text-md">
              Ready to take control of your finances?
            </p>
            <Link href="/dashboard">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-10 rounded-full text-lg transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
