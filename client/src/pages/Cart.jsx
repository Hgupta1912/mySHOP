import { useOutletContext, useNavigate } from 'react-router';
import CartListing from '../components/CartListing.jsx';
import useCatalogSubset from '../hooks/useCatalogSubset.js';
import LoadingPage from '../components/LoadingPage.jsx';
import ErrorPage from './ErrorPage.jsx';

const Cart = () => {
  const { items } = useOutletContext();
  const navigate = useNavigate();

  const itemNames = items.map(item => item.name);
  const { products, error, loading } = useCatalogSubset(itemNames);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage title="Something went wrong" message="We're having trouble loading your cart. Please try again later." />;

  const total = items.reduce((acc, item) => {
    const productInfo = products.find(p => p.name === item.name);
    return acc + productInfo.price * item.qty;
  }, 0);


  if (items.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-6 text-center">
        <p className="text-6xl">🛒</p>
        <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="text-gray-500">Looks like you haven't added anything yet.</p>
        <button
          onClick={() => navigate('/shop')}
          className="mt-2 px-6 py-2 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition-colors"
        >
          Browse the shop
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-gray-900">Your cart</h2>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6">
        {items.map(item => (
          <CartListing key={item.name} name={item.name} qty={item.qty} />
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex flex-col gap-3">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        className="w-full py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 active:scale-95 transition-all"
        onClick={() => {}}
      >
        Proceed to checkout
      </button>

      <button
        onClick={() => navigate('/shop')}
        className="text-sm text-center text-green-700 hover:underline"
      >
        ← Continue shopping
      </button>
    </main>
  );
};

export default Cart;