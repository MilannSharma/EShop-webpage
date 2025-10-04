'use client';

export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow">
      {children}
    </main>
  );
}
