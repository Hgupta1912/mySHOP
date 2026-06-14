import { useParams, useOutletContext } from 'react-router';
import { useState } from "react";
import catalog from "../data/catalog.js";

function Listing() {
  const { productName } = useParams();
  const [qty, setQty] = useState(1);
  const { addItem } = useOutletContext();
  const productInfo = catalog.find(product => product.name === productName);

  if (!productInfo) return <p className="text-center text-gray-500 mt-20">Product not found.</p>;

  function handleManualInput(event) {
    const val = Number(event.target.value);
    setQty(val < 1 ? 1 : val);
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 flex gap-12 items-start">
      <div className="flex-1 bg-gray-50 rounded-2xl flex items-center justify-center p-8 min-h-72">
        <img
          src={`/${productInfo.pathName}`}
          alt={productInfo.name}
          className="max-h-64 object-contain rounded-lg"
        />
      </div>

      <article className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-900">{productInfo.name}</h2>
        <p className="text-2xl font-bold text-green-700">${productInfo.price}</p>
        <p className="text-gray-500 leading-relaxed">{productInfo.details}</p>

        <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
          <label className="text-sm font-medium text-gray-700">Quantity</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQty(prev => prev > 1 ? prev - 1 : 1)}
              className="w-9 h-9 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              −
            </button>
            <input
              type="number"
              name="Quantity"
              value={qty}
              min="1"
              onChange={handleManualInput}
              className="w-16 text-center border border-gray-200 rounded-lg py-1 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              onClick={() => setQty(prev => prev + 1)}
              className="w-9 h-9 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              +
            </button>
          </div>

          <button
            onClick={() => addItem(productInfo.name, qty)}
            className="mt-2 w-full py-3 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 active:scale-95 transition-all"
          >
            Add to cart
          </button>
        </div>
      </article>
    </main>
  );
}

export default Listing;