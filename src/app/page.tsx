import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/product-grid";
import Image from "next/image";
import Link from "next/link";
import placeholderImages from '@/lib/placeholder-images.json';

export default function Home() {
  const heroImage = placeholderImages.placeholderImages.find(p => p.id === 'hero');

  return (
    <div className="space-y-12">
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground p-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            The Fabric of Your Dreams
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl font-body">
            Discover our curated collection of exquisite textiles, crafted with passion and artistry.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="#products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section id="products" className="scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
          Our Collection
        </h2>
        <ProductGrid />
      </section>
    </div>
  );
}
