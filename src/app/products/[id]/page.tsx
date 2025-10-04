'use client';

import { getProductById } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart-context';
import Recommendations from '@/components/products/recommendations';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Product } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const fetchedProduct = await getProductById(params.id);
      if (!fetchedProduct) {
        notFound();
      }
      setProduct(fetchedProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [params.id]);
  
  if (loading || !product) {
    return (
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <Skeleton className="aspect-square rounded-lg" />
        <div className="space-y-6">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="h-12 w-48" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint={product.imageHint}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{product.name}</h1>
          <p className="text-3xl font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>
          <div className="text-base text-foreground/80 font-body leading-relaxed space-y-4">
            <p>{product.description}</p>
          </div>
          <Button size="lg" onClick={() => addToCart(product)}>
            <ShoppingCart className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">You Might Also Like</h2>
        <Recommendations currentProduct={product.name} />
      </section>
    </div>
  );
}
