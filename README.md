<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     
 </head>
 <body>
     <div id="root">
         <h1>FinanceKaro 2.0 ✨</h1>
         <p>FinanceKaro 2.0 is a cutting-edge personal finance management application designed to empower you to take control of your financial future. It combines the latest web technologies with the power of AI to provide you with personalized insights and tools.</p>
         <h2>🚀 Features</h2>
         <ul>
             <li><strong>Budget Management</strong>: Enables users to manage their budgets effectively. 💰</li>
             <li><strong>Personalized Financial Advice</strong>: Provides detailed financial advice based on user-specific financial data using the Gemini API. 💡</li>
             <li><strong>Expense Input</strong>: Allows users to input their expenses with details like amount, date, description, and category. 💸</li>
             <li><strong>Responsive Design</strong>: Ensures a seamless experience across different devices. 📱💻</li>
         </ul>
         <h2>🧰 Tech Stack</h2>
         <p>FinanceKaro 2.0 is built using a robust and modern technology stack:</p>
         <ul>
             <li><strong>Frontend</strong>:
                 <ul>
                     <li>Next.js</li>
                     <li>React</li>
                     <li>TypeScript</li>
                     <li>Tailwind CSS</li>
                     <li>Shadcn/UI</li>
                 </ul>
             </li>
             <li><strong>Backend</strong>:
                 <ul>
                     <li>Next.js API Routes</li>
                 </ul>
             </li>
             <li><strong>AI Integration</strong>:
                 <ul>
                     <li>Gemini API</li>
                 </ul>
             </li>
             <li><strong>Visualization</strong>:
                 <ul>
                     <li>Recharts</li>
                 </ul>
             </li>
         </ul>
         <h2>📦 Getting Started</h2>
         <p>Follow these steps to set up the project locally on your machine.</p>
         <h3>Prerequisites</h3>
         <p>Make sure you have the following installed on your machine:</p>
         <ul>
             <li><strong>Git</strong>: <a href="https://git-scm.com/">https://git-scm.com/</a></li>
             <li><strong>Node.js</strong>: <a href="https://nodejs.org/en">https://nodejs.org/en</a></li>
             <li><strong>npm</strong>: <a href="https://www.npmjs.com/">https://www.npmjs.com/</a> (Node Package Manager)</li>
         </ul>
         <h3>Cloning the Repository</h3>
         <pre><code>git clone https://github.com/mendsalbert/ai-finance-trackingt.git
 cd ai-finance-tracking</code></pre>
         <h3>Installation</h3>
         <p>Install the project dependencies using npm:</p>
         <pre><code>npm install</code></pre>
         <h3>🔐 Environment Variables</h3>
         <p>Create a <code>.env.local</code> file in the root directory and add the following:</p>
         <pre><code># MongoDB connection URI
 NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
 CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
 NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
 NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
 NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
 NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
 NEXT_PUBLIC_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
 NEXT_PUBLIC_DATABASE_URL=YOUR_DATABASE_URL</code></pre>
         <p>Replace the placeholder values with your actual Clerk and Gemini API credentials, and your database URL. You can obtain these credentials by signing up on the respective websites.</p>
         <h3>Running the Project</h3>
         <pre><code>npm run dev</code></pre>
         <p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to view the project.</p>
         <h2>🌐 Live Demo</h2>
         <p>Visit the app here: <a href="https://financekaro2-0.vercel.app/">https://financekaro2-0.vercel.app/</a></p>
     </div>
 </body>
 </html>
