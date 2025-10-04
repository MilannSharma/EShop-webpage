
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/product-grid";
import Image from "next/image";
import Link from "next/link";
import placeholderImages from '@/lib/placeholder-images.json';
import { ArrowRight, Box, CreditCard, Gift, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  const heroImage = placeholderImages.placeholderImages.find(p => p.id === 'hero');
  const collectionImage = placeholderImages.placeholderImages.find(p => p.id === 'prod4');

  const newCollectionProducts = [
    placeholderImages.placeholderImages.find(p => p.id === 'prod1'),
    placeholderImages.placeholderImages.find(p => p.id === 'prod2'),
    placeholderImages.placeholderImages.find(p => p.id === 'prod3'),
  ];

  const bestSellingProducts = [
    placeholderImages.placeholderImages.find(p => p.id === 'prod4'),
    placeholderImages.placeholderImages.find(p => p.id === 'prod5'),
    placeholderImages.placeholderImages.find(p => p.id === 'prod6'),
  ];


  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-headline tracking-tight">
          New Collections
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-foreground/60">
          Discover our curated collection of exquisite textiles, crafted with passion and artistry. Explore the latest trends and timeless pieces that tell a story.
        </p>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newCollectionProducts.map((product) => product && (
              <div key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={product.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={product.imageHint}
                    />
                  </div>
                </Link>
                <div className="mt-4 text-left">
                  <h3 className="font-semibold text-lg">{product.description.split('.')[0]}</h3>
                  <p className="text-sm text-foreground/60 mt-1">A fine piece from our latest collection.</p>
                  <Button variant="link" asChild className="mt-2 px-0">
                    <Link href={`/products/${product.id}`}>Shop Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      {/* Product Grid */}
      <section id="products" className="scroll-mt-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Our New Arrivals
          </h2>
          <Button variant="link">View All <ArrowRight className="ml-2 h-4 w-4"/></Button>
        </div>
        <ProductGrid />
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
      
      {/* Best Selling */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Best Selling Items</h2>
            <Button variant="link">View All <ArrowRight className="ml-2 h-4 w-4"/></Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellingProducts.map((product) => product && (
            <div key={product.id}>
              <Link href={`/products/${product.id}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={product.imageHint}
                  />
                </div>
              </Link>
              <div className="mt-4">
                <h3 className="font-semibold">{product.description.split('.')[0]}</h3>
                <p className="text-foreground/60">$99.00</p>
              </div>
            </div>
          ))}
        </div>
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
