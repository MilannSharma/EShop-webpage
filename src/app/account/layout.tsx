'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ShoppingBag, User } from "lucide-react";

const accountNavLinks = [
    { href: "/account/orders", label: "My Orders", icon: ShoppingBag },
    { href: "/account/profile", label: "My Profile", icon: User },
];

export default function AccountLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">My Account</h1>
            <div className="grid md:grid-cols-4 gap-8">
                <aside className="md:col-span-1">
                    <nav className="flex flex-col space-y-2">
                        {accountNavLinks.map(link => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                    pathname === link.href && "bg-secondary text-primary font-semibold"
                                )}
                            >
                                <link.icon className="h-4 w-4" />
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
