
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold">Lakshita Creations</h3>
            <p className="text-sm text-muted-foreground mt-2">The fabric of your dreams. Discover our curated collection of exquisite textiles.</p>
             <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground"><Youtube className="h-5 w-5" /></Link>
            </div>
        </div>
        <div>
          <h4 className="font-semibold tracking-wider">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Press</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold tracking-wider">Help</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold tracking-wider">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Lakshita Creations. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    Powered by Mishh
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
