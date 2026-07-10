import useImageURL from "../hooks/useImageURL.js";
import { useNavigate } from 'react-router';

const Home = () => {
  const { imageURL, error, loading } = useImageURL("Hu475i12tHBg94FIeD");
  const navigate = useNavigate();

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[480px] overflow-hidden bg-gray-900">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-lg font-medium animate-pulse">Loading…</p>
          </div>
        )}
        {error && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <p className="text-gray-400">Couldn't load image</p>
          </div>
        )}
        {imageURL && (
          <img
            src={imageURL}
            alt="mySHOP Hero"
            className="w-full h-full object-cover opacity-60"
          />
        )}
        {/* overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Welcome to <span className="text-green-400">mySHOP</span>
          </h1>
          <p className="text-gray-200 max-w-md text-lg">
            Your global grocery store — find anything and everything you need.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="mt-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 active:scale-95 transition-all shadow-lg"
          >
            Start Shopping
          </button>
        </div>
      </section>

      {/* Below hero */}
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Fresh. Local. Delivered.</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          From everyday staples to specialty ingredients, mySHOP brings the world's best groceries to your door.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="mt-8 px-6 py-2 border-2 border-green-700 text-green-700 font-medium rounded-full hover:bg-green-50 transition-colors"
        >
          Browse the Shop
        </button>
      </section>
    </main>
  );
};

export default Home;