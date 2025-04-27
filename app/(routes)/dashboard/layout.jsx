"use client";
import React, { useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    if (result?.length === 0) {
      router.replace("/dashboard/budgets");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Mobile SideNav */}
      {isSideNavOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsSideNavOpen(false)}
          ></div>
          {/* Sidebar */}
          <div className="relative w-64 bg-white dark:bg-gray-900 h-full z-50">
            <SideNav onClose={() => setIsSideNavOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed w-64 h-full border-r shadow-sm">
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col">
        <DashboardHeader onMenuClick={() => setIsSideNavOpen(true)} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
