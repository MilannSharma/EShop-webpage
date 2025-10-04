
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { navItems } from '@/lib/nav-data';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden md:block w-64 flex-shrink-0 border-r bg-sidebar text-sidebar-foreground"
    >
      <div className="h-full p-4">
        <h2 className="px-4 pb-2 text-lg font-semibold tracking-tight text-sidebar-primary-foreground">
          Product Categories
        </h2>
        <div className="space-y-1">
          <Accordion type="multiple" className="w-full">
            {navItems.map((item) => (
              <AccordionItem value={item.title} key={item.title} className="border-b-0">
                <AccordionTrigger className="px-4 py-2 text-sm font-medium text-sidebar-accent-foreground hover:bg-sidebar-accent rounded-md [&[data-state=open]]:bg-sidebar-accent">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-8">
                  <ul className="space-y-1 py-1">
                    {item.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={cn(
                            'block rounded-md py-1.5 text-sm text-sidebar-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                            pathname === link.href && 'bg-sidebar-accent text-sidebar-accent-foreground'
                          )}
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
        </div>
      </div>
    </aside>
  );
}
