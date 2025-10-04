
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

  const products = await getProducts();

  const newCollectionProducts = products.slice(0, 3);
  const bestSellingProducts = products.slice(3, 6);


  return (
    <div className="space-y-24">
      {/* Hero Carousel Section */}
      <section className="w-full -mt-8">
        <Carousel
          opts={{ loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {newCollectionProducts.map((product) => (
              <CarouselItem key={product.id}>
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.description}
                    fill
                    className="object-cover"
                    data-ai-hint={product.imageHint}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 text-white">
                    <h1 className="text-3xl md:text-5xl font-headline tracking-tight">
                      {product.name}
                    </h1>
                    <p className="mt-4 max-w-lg text-white/80">
                      Discover our curated collection of exquisite textiles, crafted with passion and artistry.
                    </p>
                    <Button asChild size="lg" className="mt-6">
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
      
      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y py-12">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-foreground/80"/>
            <h3 className="mt-4 font-semibold">Book An Appointment</h3>
            <p className="mt-2 text-sm text-foreground/60">Schedule a virtual or in-person consultation.</p>
          </div>
          <div className="flex flex-col items-center">
            <Box className="w-8 h-8 text-foreground/80"/>
            <h3 className="mt-4 font-semibold">Pick Up In Store</h3>
            <p className="mt-2 text-sm text-foreground/60">Convenient pickup at our flagship location.</p>
          </div>
          <div className="flex flex-col items-center">
            <Gift className="w-8 h-8 text-foreground/80"/>
            <h3 className="mt-4 font-semibold">Special Packaging</h3>
            <p className="mt-2 text-sm text-foreground/60">Beautifully wrapped for the perfect gift.</p>
          </div>
          <div className="flex flex-col items-center">
            <CreditCard className="w-8 h-8 text-foreground/80"/>
            <h3 className="mt-4 font-semibold">Free Global Returns</h3>
            <p className="mt-2 text-sm text-foreground/60">Hassle-free returns on all orders worldwide.</p>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section id="products" className="scroll-mt-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Our New Arrivals
          </h2>
          <Button variant="link">View All <ArrowRight className="ml-2 h-4 w-4"/></Button>
        </div>
        <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
                {products.map(product => (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                        <ProductCard product={product} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </section>

      {/* Featured Collection */}
      <section className="bg-card w-full">
        <div className="container mx-auto grid md:grid-cols-2 items-center gap-12 px-4 sm:px-6 lg:px-8 py-20">
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
            <p className="mt-6 text-foreground/60 leading-relaxed">
              Our Classic Winter Collection brings together timeless designs and the finest materials. Experience the perfect blend of warmth, comfort, and style, crafted to elevate your winter wardrobe. Each piece reflects our commitment to quality and sustainable fashion, ensuring you look and feel your best through the colder months.
            </p>
            <Button className="mt-8" size="lg">Shop The Collection</Button>
          </div>
        </div>
      </section>
      
      {/* Best Selling Carousel */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Best Selling Items</h2>
            <Button variant="link">View All <ArrowRight className="ml-2 h-4 w-4"/></Button>
        </div>
        <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
                {bestSellingProducts.map(product => product && (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                        <ProductCard product={product} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </section>

      {/* Testimonials */}
      <section className="bg-card w-full text-center py-20">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-widest text-foreground/60">Testimonials</p>
          <blockquote className="mt-6 max-w-2xl mx-auto text-2xl md:text-3xl font-headline">
            "More than expected, crazy soft, flexible and best fitted white simple denim shirt."
          </blockquote>
          <div className="mt-6 text-sm text-foreground/80">- Sarah J.</div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto text-center py-12">
        <h2 className="text-3xl font-headline tracking-tight">Sign Up For Our Newsletter</h2>
        <p className="mt-2 text-foreground/60">Get updates on new arrivals and special offers.</p>
        <form className="mt-8 max-w-md mx-auto flex gap-2">
          <Input type="email" placeholder="Enter your email" className="text-center" />
          <Button type="submit">Sign Up</Button>
        </form>
      </section>

      {/* Follow Us */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-headline tracking-tight">Follow Us On Instagram</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-2">
           {[...Array(5)].map((_, i) => (
             <div key={i} className="relative aspect-square w-full">
               <Image src={`https://picsum.photos/seed/${i+10}/400/400`} alt="Instagram post" fill className="object-cover" />
             </div>
           ))}
        </div>
        <Button asChild variant="outline" className="mt-8">
            <Link href="#">@lakshita_creation</Link>
        </Button>
      </section>
    </div>
  );
}
