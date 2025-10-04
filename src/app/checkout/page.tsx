'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";
import { useCurrency } from "@/lib/currency-context";
import Image from "next/image";
import Link from "next/link";
import { CreditCard, Lock } from "lucide-react";

export default function CheckoutPage() {
    const { cartItems, cartTotal } = useCart();
    const { formatPrice } = useCurrency();

    const formattedCartTotal = formatPrice(cartTotal);

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-semibold">Your cart is empty.</h1>
                <p className="text-muted-foreground mt-2">Add items to your cart to proceed to checkout.</p>
                <Button asChild className="mt-6">
                    <Link href="/">Continue Shopping</Link>
                </Button>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Checkout</h1>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Shipping Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First Name</Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" placeholder="123 Textile Ave" />
                            </div>
                             <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" placeholder="Fabricville" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="zip">ZIP Code</Label>
                                    <Input id="zip" placeholder="12345" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5" />
                                Payment Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="card-number">Card Number</Label>
                                <Input id="card-number" placeholder="**** **** **** 1234" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiry">Expiry Date</Label>
                                    <Input id="expiry" placeholder="MM/YY" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="123" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="space-y-8">
                     <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.product.id} className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                            <Image src={item.product.imageUrl} alt={item.product.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{item.product.name}</p>
                                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p>{formatPrice(item.product.price * item.quantity)}</p>
                                </div>
                            ))}
                            <Separator />
                            <div className="flex justify-between">
                                <p>Subtotal</p>
                                <p>{formattedCartTotal}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold text-lg">
                                <p>Total</p>
                                <p>{formattedCartTotal}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Button size="lg" className="w-full">
                        <Lock className="w-4 h-4 mr-2" />
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    );
}
