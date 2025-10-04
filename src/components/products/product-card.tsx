
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { useCurrency } from '@/lib/currency-context';
import { ShoppingCart, ShoppingBag, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const router = useRouter();

  return (
    <div className="group relative">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            data-ai-hint={product.imageHint}
          />
        </div>
      </Link>
      <div className="mt-4 flex justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-foreground">
            <Link href={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-foreground/60 line-clamp-1">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-foreground">{formatPrice(product.price)}</p>
      </div>
       <div className="absolute bottom-20 right-2 opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
        <Button size="icon" variant="secondary" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
