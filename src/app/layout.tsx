
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '@/lib/cart-context';
import { CurrencyProvider } from '@/lib/currency-context';
import AppLayout from './app-layout';


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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CurrencyProvider>
          <CartProvider>
              <AppLayout>{children}</AppLayout>
            <Toaster />
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}
