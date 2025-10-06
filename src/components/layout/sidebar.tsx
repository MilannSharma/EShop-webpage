
"use client";

import { useState } from "react";
import { navItems } from '@/lib/nav-data';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Menu as MenuIcon, X, MoreHorizontal, LogOut, Settings, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";


const NavItem = ({ item, isOpen }: { item: typeof navItems[0]; isOpen: boolean }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <button
        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        className={cn(
          "w-full flex items-center gap-x-3 text-sidebar-muted-foreground p-3 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent duration-150",
          !isOpen && "justify-center"
        )}
      >
        <item.icon className="w-6 h-6 flex-shrink-0" />
        <AnimatePresence>
        {isOpen && (
            <motion.span 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="flex-grow text-left truncate">
                {item.title}
            </motion.span>
        )}
        </AnimatePresence>
        {isOpen && (
             <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.2, delay: 0.1 }}
             >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-5 h-5 duration-150 ${isSubMenuOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                >
                    <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                    />
                </svg>
             </motion.div>
        )}
      </button>
      <AnimatePresence>
        {isOpen && isSubMenuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-8 py-2 space-y-1 border-l border-sidebar-border ml-6">
                {item.links.map((link) => (
                <li key={link.name}>
                    <Link
                    href={link.href}
                    className={cn(
                        "block p-2 rounded-lg text-sm",
                        pathname === link.href
                          ? "bg-sidebar-accent text-sidebar-foreground font-bold"
                          : "text-sidebar-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                    {link.name}
                    </Link>
                </li>
                ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
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
        "hidden md:flex flex-col flex-shrink-0 border-r bg-sidebar/50 backdrop-blur-lg text-sidebar-foreground h-full z-20 absolute top-0 left-0"
      )}
    >
        <div className={cn("flex items-center h-20 px-4")}>
             <Button variant="ghost" size="icon" onClick={toggleLock} className="text-sidebar-muted-foreground">
                {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                <span className="sr-only">Toggle Sidebar</span>
            </Button>
        </div>

      <div className="flex flex-col h-full overflow-y-auto overflow-x-hidden px-4">
        <nav className="flex-1 flex flex-col space-y-2">
            {navItems.map((item, idx) => (
                <NavItem key={idx} item={item} isOpen={isOpen} />
            ))}
        </nav>
        
        <div className="py-4">
            <Separator className="bg-sidebar-border" />
        </div>
        
        <div className="pb-4">
          <Popover>
            <PopoverTrigger asChild>
                <button
                    className={cn(
                        "w-full flex items-center p-2 rounded-lg text-left duration-150",
                        isOpen ? "gap-x-3 hover:bg-sidebar-accent" : "justify-center"
                    )}
                >
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://picsum.photos/seed/avatar/200/200" alt="Nina Ergemla" />
                        <AvatarFallback>NE</AvatarFallback>
                    </Avatar>
                    <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-grow truncate"
                        >
                            <div className="font-semibold text-sidebar-foreground">Nina Ergemla</div>
                            <div className="text-xs text-sidebar-muted-foreground">nina_erg@ergemla.com</div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                    <AnimatePresence>
                    {isOpen && (
                         <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MoreHorizontal className="h-5 w-5 text-sidebar-muted-foreground" />
                        </motion.div>
                    )}
                    </AnimatePresence>
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-56" align={isOpen ? "end" : "center"} side="top" sideOffset={10}>
              <div className="space-y-1">
                 <Link href="/account/profile" className="flex items-center gap-2 p-2 rounded-md hover:bg-accent">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                </Link>
                 <Link href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-accent">
                    <Bell className="w-4 h-4" />
                    <span>Notifications</span>
                    <span className="ml-auto text-xs font-bold bg-green-500 text-white rounded-full h-5 w-5 flex items-center justify-center">24</span>
                </Link>
                <Separator />
                <button className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-accent text-red-500">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </motion.aside>
  );
}
