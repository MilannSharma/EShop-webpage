import CartView from "./cart-view";

export default function CartPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
        Your Shopping Cart
      </h1>
      <CartView />
    </div>
  );
}
