import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FinanceKaro",
  description: "Track your finance",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={outfit.className}>
          <Head>
            <link rel="icon" href="/fetch.ico" />
          </Head>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
