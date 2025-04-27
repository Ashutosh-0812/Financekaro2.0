"use client";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";

function DashboardHeader({ onMenuClick }) {
  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center">
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Menu onClick={onMenuClick} className="w-8 h-8 cursor-pointer" />
      </div>

      {/* User Profile on the Right */}
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default DashboardHeader;
