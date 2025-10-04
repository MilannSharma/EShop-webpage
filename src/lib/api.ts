import type { Product, Order } from '@/lib/types';
import placeholderData from '@/lib/placeholder-images.json';

const products: Product[] = [
  { id: '1', name: 'Azure Paisley Silk Scarf', description: 'A luxurious silk scarf with a timeless paisley pattern in shades of blue and gold. Perfect for adding a touch of elegance to any outfit.', price: 75.00, imageUrl: placeholderData.placeholderImages.find(p => p.id === 'prod1')?.imageUrl || '', imageHint: 'silk scarf' },
  { id: '2', name: 'Natural Organic Cotton', description: 'A 5-yard bolt of soft, GOTS-certified organic cotton fabric in a natural, unbleached color. Ideal for clothing and home goods.', price: 45.50, imageUrl: placeholderData.placeholderImages.find(p => p.id === 'prod2')?.imageUrl || '', imageHint: 'cotton fabric' },
  { id: '3', name: 'Forest Green Linen', description: 'Hand-dyed linen textile with a subtle, earthy green tie-dye pattern. Breathable and perfect for summer wear.', price: 62.00, imageUrl: placeholderData.placeholderImages.find(p => p.id === 'prod3')?.imageUrl || '', imageHint: 'linen textile' },
  { id: '4', name: 'Silver Blossom Brocade', description: 'An intricate brocade fabric featuring floral motifs woven with shimmering silver thread. Excellent for formal wear and upholstery.', price: 120.00, imageUrl: placeholderData.placeholderImages.find(p => p.id === 'prod4')?.imageUrl || '', imageHint: 'brocade fabric' },
  { id: '5', name: 'Highlander Tartan Wool', description: 'A cozy and warm wool throw with a classic tartan pattern in red and black. Measures 50" x 60".', price: 95.00, imageUrl: placeholderData.placeholderImages.find(p => p.id === 'prod5')?.imageUrl || '', imageHint: 'wool blanket' },
  { id: '6', name: 'Royal Magenta Velvet', description: 'A roll of vibrant and plush velvet fabric in a deep magenta color. Perfect for dramatic drapery or luxurious apparel.', price: 88.75, imageUrl: placeholderData.placeholderImages.find(p => p.id === 'prod6')?.imageUrl || '', imageHint: 'velvet fabric' },
];

const orders: Order[] = [
    {
        id: 'ORD-2024-001',
        date: '2024-07-15',
        status: 'Delivered',
        total: 120.50,
        items: [
            { product: products[0], quantity: 1 },
            { product: products[1], quantity: 1 },
        ]
    },
    {
        id: 'ORD-2024-002',
        date: '2024-07-28',
        status: 'Shipped',
        total: 215.00,
        items: [
            { product: products[3], quantity: 1 },
            { product: products[4], quantity: 1 },
        ]
    }
];


// Simulate network delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function getProducts(): Promise<Product[]> {
  await delay(50);
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay(50);
  return products.find(p => p.id === id);
}

export async function getOrders(): Promise<Order[]> {
    await delay(50);
    return orders;
}
