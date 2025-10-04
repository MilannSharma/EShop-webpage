import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '@/lib/cart-context';
import { CurrencyProvider } from '@/lib/currency-context';
import { cn } from '@/lib/utils';
import { MainContent } from '@/components/layout/main-content';

export const metadata: Metadata = {
  title: 'Lakshita Creations',
  description: 'Exquisite textiles and fabrics for the discerning eye.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CurrencyProvider>
          <CartProvider>
              <div className="flex min-h-screen flex-col">
                <Header />
                <MainContent>
                  {children}
                </MainContent>
                <Footer />
              </div>
              <Toaster />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
