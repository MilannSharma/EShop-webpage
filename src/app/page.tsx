
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/product-grid";
import Image from "next/image";
import Link from "next/link";
import placeholderImages from '@/lib/placeholder-images.json';
import { ArrowRight, Box, CreditCard, Gift, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from "@/components/products/product-card";
import { getProducts } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";

export default async function Home() {
  const collectionImage = placeholderImages.placeholderImages.find(p => p.id === 'prod4');
  const springOfferImage = placeholderImages.placeholderImages.find(p => p.id === 'spring-offer');
  const winterOfferImage = placeholderImages.placeholderImages.find(p => p.id === 'winter-offer');

  const products = await getProducts();

  const newCollectionProducts = products.slice(0, 3);
  const bestSellingProducts = products.slice(3, 6);


  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Carousel Section */}
      <section className="w-full -mt-8">
        <Carousel
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {newCollectionProducts.map((product) => (
              <CarouselItem key={product.id}>
                <div className="relative aspect-[3/4] md:aspect-[2/1] w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.description}
                    fill
                    className="object-cover"
                    data-ai-hint={product.imageHint}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 lg:p-16 text-white">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline tracking-tight">
                      {product.name}
                    </h1>
                    <p className="mt-2 md:mt-4 max-w-lg text-sm md:text-base text-white/80">
                      Discover our curated collection of exquisite textiles, crafted with passion and artistry.
                    </p>
                    <Button asChild size="lg" className="mt-4 md:mt-6">
                      <Link href={`/products/${product.id}`}>Shop Now <ArrowRight className="ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </section>
      
      {/* Product Carousel */}
      <section id="products" className="scroll-mt-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-baseline mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Our New Arrivals
          </h2>
          <Button variant="link" asChild>
            <Link href="#">View All <ArrowRight className="ml-2 h-4 w-4"/></Link>
          </Button>
        </div>
        <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
                {products.map(product => (
                    <CarouselItem key={product.id} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <ProductCard product={product} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      {/* Featured Collection */}
      <section className="bg-card w-full">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {collectionImage && (
            <div className="relative aspect-square w-full">
              <Image 
                src={collectionImage.imageUrl}
                alt="Classic Winter Collection"
                fill
                className="object-cover"
                data-ai-hint={collectionImage.imageHint}
              />
            </div>
          )}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-headline tracking-wide">CLASSIC WINTER COLLECTION</h2>
            <p className="mt-4 md:mt-6 text-foreground/60 leading-relaxed">
              Our Classic Winter Collection brings together timeless designs and the finest materials. Experience the perfect blend of warmth, comfort, and style, crafted to elevate your winter wardrobe. Each piece reflects our commitment to quality and sustainable fashion, ensuring you look and feel your best through the colder months.
            </p>
            <Button className="mt-6 md:mt-8" size="lg">Shop The Collection</Button>
          </div>
        </div>
      </section>
      
      {/* Best Selling Carousel */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-baseline mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Best Selling Items</h2>
            <Button variant="link" asChild>
                <Link href="#">View All <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
        </div>
        <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
                {bestSellingProducts.map(product => product && (
                    <CarouselItem key={product.id} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <ProductCard product={product} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      {/* Offers Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
            {springOfferImage && (
                <div className="relative bg-secondary/30 flex justify-between items-center overflow-hidden">
                    <div className="w-1/2 relative aspect-[3/4]">
                        <Image src={springOfferImage.imageUrl} alt="Spring Collection" fill className="object-cover" data-ai-hint={springOfferImage.imageHint} />
                    </div>
                    <div className="w-1/2 flex flex-col items-center text-center p-4">
                        <p className="text-sm text-primary">20% OFF THE ALL ORDER</p>
                        <h3 className="text-2xl md:text-3xl font-headline mt-2">Spring Collection</h3>
                        <Button variant="outline" className="mt-4">Shop Now</Button>
                    </div>
                </div>
            )}
            {winterOfferImage && (
                <div className="relative bg-secondary/30 flex justify-between items-center overflow-hidden">
                    <div className="w-1/2 relative aspect-[3/4]">
                        <Image src={winterOfferImage.imageUrl} alt="Winter Collection" fill className="object-cover" data-ai-hint={winterOfferImage.imageHint} />
                    </div>
                     <div className="w-1/2 flex flex-col items-center text-center p-4">
                        <p className="text-sm text-primary">20% OFF THE ALL ORDER</p>
                        <h3 className="text-2xl md:text-3xl font-headline mt-2">Winter Collection</h3>
                        <Button variant="outline" className="mt-4">Shop Now</Button>
                    </div>
                </div>
            )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto text-center py-12">
        <h2 className="text-2xl md:text-3xl font-headline tracking-tight">Sign Up For Our Newsletter</h2>
        <p className="mt-2 text-foreground/60">Get updates on new arrivals and special offers.</p>
        <form className="mt-6 md:mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="Enter your email" className="text-center sm:text-left" />
          <Button type="submit">Sign Up</Button>
        </form>
      </section>
    </div>
  );
}
