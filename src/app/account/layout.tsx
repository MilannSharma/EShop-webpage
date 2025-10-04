'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const accountNavLinks = [
    { href: "/account/orders", label: "My Orders" },
    { href: "/account/profile", label: "My Profile" },
];

export default function AccountLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-12 items-start">
                <aside className="md:col-span-1">
                    <h2 className="text-lg font-semibold mb-4">My Account</h2>
                    <nav className="flex flex-col space-y-2">
                        {accountNavLinks.map(link => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={cn(
                                    "px-3 py-2 text-muted-foreground transition-colors hover:text-primary hover:bg-secondary rounded-md",
                                    pathname === link.href && "bg-secondary text-primary font-semibold"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </aside>
                <main className="md:col-span-3">
                    {children}
                </main>
            </div>
        </div>
    );
}
