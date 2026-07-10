import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useCatalogSubset = (names) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!names || names.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const query = names.map(encodeURIComponent).join(',');
        const response = await fetch(`${API_URL}/api/products?names=${query}`);
        if (response.status >= 400) {
          throw new Error('server error');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      console.log("fetched a subset of products!");
    };

    fetchProducts();
  }, [JSON.stringify(names)]);

  return { products, error, loading };
};

export default useCatalogSubset;