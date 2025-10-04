'use client';

import Link from 'next/link';
import { User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartIcon from '@/components/cart/cart-icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState, useEffect } from 'react';
import CurrencySelector from '../currency/currency-selector';
import { useSidebar } from '@/lib/sidebar-context';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pattern-generator', label: 'AI Pattern Generator' },
];

const Logo = () => (
    <svg
      width="30"
      height="40"
      viewBox="0 0 100 100"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="5"
        y="85"
        fontFamily="Playfair Display, serif"
        fontSize="90"
        fontWeight="bold"
      >
        L
      </text>
      <text
        x="28.5"
        y="96"
        fontFamily="Playfair Display, serif"
        fontSize="70"
        fontWeight="bold"
      >
        C
      </text>
    </svg>
)


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start gap-2 md:gap-4">
           <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open Menu</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
          <Link href="/" className="flex items-center gap-0 -ml-2">
            <Logo />
            <span className="font-bold font-headline text-2xl hidden sm:inline-block text-secondary-foreground -ml-2.5">Lakshita Creation</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex flex-grow justify-center items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-foreground/70 transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <div className="hidden md:flex items-center gap-2">
            <CurrencySelector />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <CartIcon />
          </div>

          <div className="md:hidden flex items-center">
            <CartIcon />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 pt-8">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
                    <span className="font-bold font-headline text-lg text-secondary-foreground">Lakshita Creation</span>
                  </Link>
                  <nav className="flex flex-col gap-4 text-lg font-medium">
                    {navLinks.map(({ href, label }) => (
                      <Link key={href} href={href} onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/70 transition-colors hover:text-foreground">
                        {label}
                      </Link>
                    ))}
                  </nav>
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
          </div>
        </div>
      </div>
    </header>
  );
}
