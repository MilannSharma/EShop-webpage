

"use client";

import { useState } from "react";
import { navItems } from '@/lib/nav-data';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ children, items }: { children: React.ReactNode; items: {name: string; href: string}[] }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between text-sidebar-muted-foreground p-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent duration-150"
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
        <ul id="submenu" className="mx-4 px-2 border-l-sidebar-border border-l text-sm font-medium">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="flex items-center gap-x-2 text-sidebar-muted-foreground p-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent duration-150"
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

const variants = {
  open: { width: "18rem" },
  closed: { width: "5rem" },
};

export function Sidebar() {
  const [isLocked, setIsLocked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isOpen = isLocked || isHovered;

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <motion.aside
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onHoverStart={() => !isLocked && setIsHovered(true)}
      onHoverEnd={() => !isLocked && setIsHovered(false)}
      className={cn(
        "hidden md:flex flex-col flex-shrink-0 border-r bg-sidebar text-sidebar-foreground"
      )}
    >
        <div className={cn("flex items-center h-20 px-4 border-b-sidebar-border border-b", isOpen ? "justify-between": "justify-center")}>
            <Button variant="ghost" size="icon" onClick={toggleLock}>
                {isLocked ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                <span className="sr-only">Toggle Sidebar</span>
            </Button>
        </div>

      <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden">
        <div className="flex-1 flex flex-col">
            <ul className={cn("text-sm font-medium flex-1 py-4", isOpen ? "px-4" : "px-2")}>
                {navItems.map((item, idx) => (
                    <li key={idx} className="relative group">
                      {isOpen ? (
                        <Menu items={item.links}>
                            <div className="text-sidebar-muted-foreground">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.span
                                    initial={{ opacity: 0}}
                                    animate={{ opacity: 1}}
                                    exit={{ opacity: 0}}
                                    transition={{duration: 0.2, delay: 0.15}}
                                >
                                    {item.title}
                                </motion.span>
                              )}
                            </AnimatePresence>
                        </Menu>
                      ) : (
                        <Link href="#" className="flex justify-center items-center p-2 text-sidebar-muted-foreground rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                           <item.icon className="w-5 h-5" />
                           <AnimatePresence>
                           {!isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                            >
                                {item.title}
                            </motion.div>
                           )}
                           </AnimatePresence>
                        </Link>
                      )}
                    </li>
                ))}
            </ul>
        </div>
          <div className={cn("py-4 mt-auto border-t-sidebar-border border-t", isOpen ? "px-4" : "px-2")}>
              <div className={cn("w-full flex items-center gap-x-4", !isOpen && "justify-center")}>
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="User avatar"
                />
                <AnimatePresence>
                {isOpen && (
                  <motion.div
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0}}
                      transition={{duration: 0.2, delay: 0.15}}
                  >
                    <span className="block text-sidebar-foreground text-sm font-semibold">Alivika tony</span>
                    <span className="block mt-px text-sidebar-muted-foreground text-xs">Hobby Plan</span>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
          </div>
      </div>
    </motion.aside>
  );
}
