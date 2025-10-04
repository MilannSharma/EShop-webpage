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

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-auto flex-col items-center px-4 sm:px-6 lg:px-8 py-2">
        <div className={`transition-opacity duration-1000 ease-in ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="/" className="flex justify-center py-[10px]">
            <h1 className="text-2xl md:text-3xl font-bold font-headline">Lakshita Collection</h1>
          </Link>
        </div>
        <div className="flex h-16 w-full items-center justify-between">
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
                  <nav className="flex flex-col gap-4 text-lg font-medium">
                    {navLinks.map(({ href, label }) => (
                      <Link key={href} href={href} onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/70 transition-colors hover:text-foreground">
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center items-center gap-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-foreground/70 transition-colors hover:text-foreground">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
