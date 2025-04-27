import React from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  LogOut,
  X,
} from "lucide-react";
import { UserButton, useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav({ onClose }) {
  const menuList = [
    { id: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { id: 3, name: "Budgets", icon: PiggyBank, path: "/dashboard/budgets" },
    { id: 4, name: "Expenses", icon: ReceiptText, path: "/dashboard/expenses" },
    { id: 5, name: "Upgrade", icon: ShieldCheck, path: "/dashboard/upgrade" },
  ];

  const path = usePathname();
  const { signOut } = useClerk();

  return (
    <div className="flex flex-col h-full p-5 bg-white dark:bg-gray-900">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/chart-donut.svg" alt="logo" width={40} height={25} />
          <span className="text-blue-800 font-bold text-xl">FinanceKaro</span>
        </div>

        {/* Close button for mobile */}
        {onClose && (
          <X className="w-8 h-8 cursor-pointer md:hidden" onClick={onClose} />
        )}
      </div>

      {/* Menu List */}
      <div className="mt-6 flex-1">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <h2
              className={`flex items-center gap-2 text-gray-500 font-medium mb-3 p-3 rounded-lg hover:bg-blue-100 hover:text-primary ${
                path === menu.path && "bg-blue-100 text-primary"
              }`}
            >
              <menu.icon className="w-5 h-5" />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Logout */}
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
