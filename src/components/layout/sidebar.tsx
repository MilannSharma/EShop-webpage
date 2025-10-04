
"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from '@/lib/nav-data';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Menu as MenuIcon } from "lucide-react";

type MenuItem = { name: string; href: string; };

const Menu = ({ children, items }: { children: React.ReactNode; items: {name: string; href: string}[] }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150"
        onClick={() => setIsOpened((v) => !v)}
        aria-expanded={isOpened}
        aria-controls="submenu"
      >
        <div className="flex items-center gap-x-2">{children}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpened && (
        <ul id="submenu" className="mx-4 px-2 border-l text-sm font-medium">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export function Sidebar({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean, toggleSidebar: () => void }) {

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col flex-shrink-0 border-r bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out",
        isSidebarOpen ? "w-72" : "w-20"
      )}
    >
        <div className="flex items-center justify-end h-20 px-4 border-b">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle Sidebar</span>
            </Button>
        </div>

      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex-1 flex flex-col">
            <ul className={cn("text-sm font-medium flex-1 py-4", isSidebarOpen ? "px-4" : "px-2")}>
                {navItems.map((item, idx) => (
                    <li key={idx}>
                      {isSidebarOpen ? (
                        <Menu items={item.links}>
                            <div className="text-gray-500">
                                <item.icon className="w-5 h-5" />
                            </div>
                            {item.title}
                        </Menu>
                      ) : (
                        <Link href="#" className="flex justify-center items-center p-2 text-gray-600 rounded-lg hover:bg-gray-50">
                           <item.icon className="w-5 h-5" />
                        </Link>
                      )}
                    </li>
                ))}
            </ul>

            <div className={cn("pt-2 mt-auto border-t", isSidebarOpen ? "px-4" : "px-2")}>
              <ul className="text-sm font-medium">
                  <li>
                    <Link
                      href="#"
                      className={cn("flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150", !isSidebarOpen && "justify-center")}
                    >
                      <div className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                      </div>
                      {isSidebarOpen && "Help"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/account/profile"
                       className={cn("flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150", !isSidebarOpen && "justify-center")}
                    >
                      <div className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      {isSidebarOpen && "Settings"}
                    </Link>
                  </li>
              </ul>
            </div>
            <div className={cn("h-20 flex items-center border-t", isSidebarOpen ? "pl-2" : "justify-center")}>
                <div className="w-full flex items-center gap-x-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    className="w-10 h-10 rounded-full"
                    alt="User avatar"
                  />
                  {isSidebarOpen && (
                    <div>
                      <span className="block text-gray-700 text-sm font-semibold">Alivika tony</span>
                      <span className="block mt-px text-gray-600 text-xs">Hobby Plan</span>
                    </div>
                  )}
                </div>
            </div>
          </div>
      </div>
    </aside>
  );
}
