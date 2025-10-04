
'use client'

import { getOrders } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import { useCurrency } from "@/lib/currency-context";
import { useEffect, useState } from "react";
import type { Order } from "@/lib/types";

export default function OrdersPage() {
    const { formatPrice } = useCurrency();
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        async function fetchOrders() {
            const fetchedOrders = await getOrders();
            setOrders(fetchedOrders);
        }
        fetchOrders();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Check the status of recent orders.</CardDescription>
            </CardHeader>
            <CardContent>
                {orders.length === 0 ? (
                    <p>You have no past orders.</p>
                ) : (
                    <Accordion type="single" collapsible className="w-full">
                        {orders.map(order => (
                            <AccordionItem value={order.id} key={order.id}>
                                <AccordionTrigger>
                                    <div className="flex justify-between items-center w-full pr-4">
                                        <div className="text-left">
                                            <p className="font-semibold">{order.id}</p>
                                            <p className="text-sm text-muted-foreground">Date: {new Date(order.date).toLocaleDateString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'} className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                {order.status}
                                            </Badge>
                                            <p className="font-semibold">{formatPrice(order.total)}</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Product</TableHead>
                                                <TableHead>Details</TableHead>
                                                <TableHead>Quantity</TableHead>
                                                <TableHead className="text-right">Price</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {order.items.map(item => (
                                                <TableRow key={item.product.id}>
                                                    <TableCell>
                                                        <div className="relative w-16 h-16 rounded-md overflow-hidden">
                                                            <Image src={item.product.imageUrl} alt={item.product.name} fill className="object-cover" />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="font-medium">{item.product.name}</TableCell>
                                                    <TableCell>{item.quantity}</TableCell>
                                                    <TableCell className="text-right">{formatPrice(item.product.price)}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                )}
            </CardContent>
        </Card>
    );
}
