'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { useCurrency } from '@/lib/currency-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, ShoppingBag } from 'lucide-react';
import type { CartItem } from '@/lib/types';

export default function CartView() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();
  const { formatPrice } = useCurrency();

  const formattedCartTotal = formatPrice(cartTotal);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 rounded-lg border-2 border-dashed">
        <ShoppingBag className="w-16 h-16 text-muted-foreground" />
        <h2 className="mt-6 text-2xl font-semibold">Your cart is empty</h2>
        <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-6">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 lg:gap-12 items-start">
      <div className="lg:col-span-2 space-y-6">
        {cartItems.map(item => (
          <CartItemRow 
            key={item.product.id} 
            item={item} 
            onRemove={removeFromCart} 
            onUpdateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="lg:col-span-1 sticky top-24">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formattedCartTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{formattedCartTotal}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg" className="w-full">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}


function CartItemRow({ item, onRemove, onUpdateQuantity }: { item: CartItem, onRemove: (id: string) => void, onUpdateQuantity: (id: string, q: number) => void}) {
  const { formatPrice } = useCurrency();
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image src={item.product.imageUrl} alt={item.product.name} fill className="object-cover" />
      </div>
      <div className="flex-grow">
        <Link href={`/products/${item.product.id}`} className="font-semibold hover:underline">{item.product.name}</Link>
        <p className="text-muted-foreground">{formatPrice(item.product.price)}</p>
      </div>
      <div className="flex items-center gap-4">
        <Input 
          type="number" 
          value={item.quantity} 
          onChange={(e) => onUpdateQuantity(item.product.id, parseInt(e.target.value))}
          className="w-20 h-10 text-center"
          min="1"
        />
        <Button variant="ghost" size="icon" onClick={() => onRemove(item.product.id)}>
          <Trash2 className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Remove item</span>
        </Button>
      </div>
    </div>
  )
}
