
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Sidebar } from '@/components/layout/sidebar';
import { MainContent } from '@/components/layout/main-content';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        <div className="flex-1 overflow-y-auto md:pl-20">
          <MainContent>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </MainContent>
          <Footer />
        </div>
      </div>
    </div>
  );
}
