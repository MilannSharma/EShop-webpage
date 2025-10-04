'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/layout/sidebar';

export function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAccountPage = pathname.startsWith('/account');

  if (isAccountPage) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
