
'use client';

export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow w-full overflow-y-auto">
      {children}
    </main>
  );
}
