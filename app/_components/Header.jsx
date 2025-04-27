"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-4 flex justify-between items-center border-b shadow-sm">
      <div className="flex-shrink-0 flex items-center gap-2 min-w-[120px]">
        <Image src={"/chart-donut.svg"} alt="logo" width={32} height={20} />
        <span className="text-blue-800 font-bold text-lg whitespace-nowrap">Financekaro</span>
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-2 items-center">
          <Link href={"/dashboard"}>
            <Button 
              variant="outline" 
              className="rounded-full text-xs sm:text-sm px-3 py-1 h-8"
            >
              Dashboard
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="rounded-full text-xs sm:text-sm px-3 py-1 h-8">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;