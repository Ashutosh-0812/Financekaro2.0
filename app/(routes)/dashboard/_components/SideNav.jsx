import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  IndianRupee,
  LogOut,
} from "lucide-react";
import { UserButton, useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
 
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 5,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();
  const { signOut } = useClerk();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 border shadow-sm flex flex-col">
      {/* Logo Section */}
      <div className="flex flex-row items-center">
        <Image src={"./chart-donut.svg"} alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl">FinanceKaro</span>
      </div>

      {/* Menu Items */}
      <div className="mt-5 flex-1">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <h2
              className={`flex gap-2 items-center
                text-gray-500 font-medium
                mb-2 p-4 cursor-pointer rounded-full
                hover:text-primary hover:bg-blue-100
                ${path === menu.path && "text-primary bg-blue-100"}
              `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Bottom Section - User & Logout */}
      <div className="flex items-center gap-4 p-4">
        <UserButton />
        <button
          onClick={() => signOut(() => window.location.assign("/"))}
          className="flex items-center gap-2 text-gray-500 hover:text-red-500"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideNav;