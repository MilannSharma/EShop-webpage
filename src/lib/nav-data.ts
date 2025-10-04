import { type LucideIcon, Package, Shirt, Home, Watch, Palette } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface NavSection {
  title: string;
  icon: LucideIcon;
  links: NavLink[];
}

export const navItems: NavSection[] = [
  {
    title: 'Artisanal Bags & Carriers',
    icon: Package,
    links: [
      { name: 'Maharani Tote', href: '/products/category/tote-bags' },
      { name: 'Noor Clutch', href: '/products/category/clutch-bags' },
      { name: 'Anaya Sling', href: '/products/category/sling-bags' },
      { name: 'Riva Potli', href: '/products/category/potli-bags' },
      { name: 'Aarohi Pouch', href: '/products/category/mini-bags' },
      { name: 'Raga Voyager', href: '/products/category/travel-duffels' },
    ],
  },
  {
    title: 'Heritage Apparel',
    icon: Shirt,
    links: [
      { name: 'Embroidered Shirts / Tops', href: '/products/category/shirts-tops' },
      { name: 'Handloom Kurtas / Tunics', href: '/products/category/kurtas-tunics' },
      { name: 'Co-ord Sets', href: '/products/category/co-ord-sets' },
      { name: 'Sarees & Dupattas', href: '/products/category/sarees-dupattas' },
      { name: 'Dresses & Gowns', href: '/products/category/dresses-gowns' },
      { name: 'Jackets / Shrugs', href: '/products/category/jackets-shrugs' },
      { name: 'Kaftans / Robes', href: '/products/category/kaftans-robes' },
    ],
  },
  {
    title: 'Home Textile & Décor',
    icon: Home,
    links: [
      { name: 'Rugs & Carpets', href: '/products/category/rugs-carpets' },
      { name: 'Cushion Covers', href: '/products/category/cushion-covers' },
      { name: 'Throws & Blankets', href: '/products/category/throws-blankets' },
      { name: 'Curtains & Drapes', href: '/products/category/curtains-drapes' },
      { name: 'Table Runners / Mats', href: '/products/category/table-runners' },
      { name: 'Wall Hangings / Tapestries', href: '/products/category/wall-hangings' },
    ],
  },
  {
    title: 'Luxury Accessories',
    icon: Watch,
    links: [
      { name: 'Watches with Textile Straps', href: '/products/category/watches' },
      { name: 'Scarves / Stoles', href: '/products/category/scarves-stoles' },
      { name: 'Belts / Wallets', href: '/products/category/belts-wallets' },
      { name: 'Jewelry Wraps / Pouches', href: '/products/category/jewelry-wraps' },
      { name: 'Hair Accessories', href: '/products/category/hair-accessories' },
    ],
  },
  {
    title: 'Textile & Craft Material',
    icon: Palette,
    links: [
      { name: 'Handwoven Fabrics', href: '/products/category/handwoven-fabrics' },
      { name: 'Embroidered Panels', href: '/products/category/embroidered-panels' },
      { name: 'Brocade / Velvet Textiles', href: '/products/category/brocade-velvet' },
      { name: 'Printed Silk & Cotton', href: '/products/category/printed-fabrics' },
      { name: 'Upcycled Textile Swatches', href: '/products/category/upcycled-swatches' },
    ],
  },
];
