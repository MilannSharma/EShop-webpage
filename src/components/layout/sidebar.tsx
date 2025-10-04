'use client';
import { useSidebar } from '@/lib/sidebar-context';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/nav-data';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  return (
    <aside
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
      className={cn(
        'hidden md:flex flex-col border-r transition-[width] duration-300 ease-in-out',
        isSidebarOpen ? 'w-64' : 'w-20' // Keep a smaller width when collapsed
      )}
    >
      <ScrollArea className="flex-grow">
        <div className={cn('overflow-hidden transition-opacity duration-300', isSidebarOpen ? 'opacity-100' : 'opacity-0 md:opacity-100')}>
          <nav className="py-4 px-2">
            <Accordion type="multiple" className="w-full">
              {navItems.map((item) => (
                <AccordionItem value={item.title} key={item.title}>
                  <AccordionTrigger className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:bg-accent/50 rounded-md">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {isSidebarOpen && item.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6">
                    <ul className="space-y-1 py-2">
                      {item.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="block px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </nav>
        </div>
      </ScrollArea>
    </aside>
  );
}
