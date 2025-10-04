import { getProducts } from '@/lib/api';
import ProductCard from './product-card';

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
