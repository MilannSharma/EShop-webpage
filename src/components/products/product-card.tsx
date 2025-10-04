'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { useCurrency } from '@/lib/currency-context';
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const router = useRouter();

  const handleBuyNow = () => {
    addToCart(product);
    router.push('/checkout');
  };

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <Link href={`/products/${product.id}`} className="group">
        <CardHeader className="p-0">
          <div className="relative h-64 w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              data-ai-hint={product.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="text-lg leading-snug group-hover:text-primary">
            {product.name}
          </CardTitle>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-4 p-4 pt-0">
        <p className="text-xl font-semibold">
          {formatPrice(product.price)}
        </p>
        <div className="w-full grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={() => addToCart(product)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button onClick={handleBuyNow}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Buy Now
            </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
