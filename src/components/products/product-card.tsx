'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

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
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-xl font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <Button onClick={() => addToCart(product)}>
          <ShoppingCart className="mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
