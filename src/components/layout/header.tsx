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

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pattern-generator', label: 'AI Pattern Generator' },
];

const Logo = () => (
    <svg 
      width="100" 
      height="60" 
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
        x="32" 
        y="98" 
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

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold font-headline text-3xl hidden sm:inline-block text-secondary-foreground">Lakshita Creation</span>
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
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <CartIcon />
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
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
                  <div className="flex items-center gap-2 border-t pt-6">
                     <Button variant="ghost" size="icon" asChild>
                        <Link href="/account">
                          <User className="h-5 w-5" />
                          <span className="sr-only">Account</span>
                        </Link>
                      </Button>
                      <CartIcon />
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
