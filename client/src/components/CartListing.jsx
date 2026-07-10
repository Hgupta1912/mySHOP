import { useOutletContext } from 'react-router';
import catalog from '../data/catalog.js';
import useCatalogSubset from '../hooks/useCatalogSubset.js';
import LoadingPage from './LoadingPage.jsx';

const CartListing = ({ name, qty }) => {
  const { removeItem } = useOutletContext();
  const { products, error, loading } = useCatalogSubset([name]);
  const productInfo = products[0];
  
  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage title="Something went wrong" message="We're having trouble loading a product in your cart. Please try again later." />;
  if (!productInfo) return <ErrorPage />; // uses defaults, correct copy for this case

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100">
      <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
        <img
          src={`/${productInfo.pathName}`}
          alt={name}
          className="max-h-16 object-contain"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">Qty: {qty}</p>
      </div>

      <p className="font-bold text-green-700 w-20 text-right">
        ${(productInfo.price * qty).toFixed(2)}
      </p>

      <button
        onClick={() => removeItem(name)}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors flex-shrink-0"
        aria-label={`Remove ${name} from cart`}
      >
        ✕
      </button>
    </div>
  );
};

export default CartListing;