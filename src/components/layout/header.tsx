
'use client';

import Link from 'next/link';
import { User, Menu, Search, Heart, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartIcon from '@/components/cart/cart-icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react';
import CurrencySelector from '../currency/currency-selector';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navItems } from '@/lib/nav-data';
import { cn } from '@/lib/utils';


interface HeaderProps {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

export function Header({ toggleSidebar, isSidebarOpen }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start md:w-1/3">
           <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open Menu</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleSidebar}>
                {isSidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
                <span className="sr-only">Toggle Sidebar</span>
            </Button>

           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetContent side="left" className="w-full max-w-sm overflow-y-auto">
                <div className="flex flex-col gap-6 pt-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="font-bold font-headline text-lg text-secondary-foreground tracking-wider">Lakshita Creations</span>
                  </Link>
                  <nav className="flex flex-col gap-4 text-lg font-medium">
                    {navLinks.map(({ href, label }) => (
                      <Link key={href} href={href} onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/70 transition-colors hover:text-foreground">
                        {label}
                      </Link>
                    ))}
                  </nav>
                  
                  <div className="border-t pt-6 space-y-4">
                     <Accordion type="multiple" className="w-full">
                        {navItems.map((item) => (
                            <AccordionItem value={item.title} key={item.title}>
                            <AccordionTrigger className="px-4 py-2 text-base font-semibold text-foreground/80 hover:bg-accent/50 rounded-md">
                                <div className="flex items-center gap-3">
                                <item.icon className="h-5 w-5" />
                                {item.title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-8">
                                <ul className="space-y-2 py-2">
                                {item.links.map((link) => (
                                    <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-1.5 text-base text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md"
                                    >
                                        {link.name}
                                    </Link>
                                    </li>
                                ))}
                                </ul>
                            </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <CurrencySelector />
                    <Button variant="outline" asChild className="w-full justify-start">
                      <Link href="/account" onClick={() => setIsMobileMenuOpen(false)}>
                        <User className="mr-2" />
                        My Account
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          <Link href="/" className="flex items-center gap-2 ml-2 md:ml-0">
            <span className="font-bold font-headline text-2xl text-secondary-foreground tracking-wider">Lakshita Creations</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex flex-grow justify-center items-center gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-foreground/70 transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:w-1/3">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Link>
            </Button>
            <CartIcon />
        </div>
      </div>
    </header>
  );
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#products', label: 'Shop'},
  { href: '/pattern-generator', label: 'AI Pattern Generator' },
  { href: '/about', label: 'About' },
];
