import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useCatalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const response = await fetch(`${API_URL}/api/products`);
        if (response.status >= 400) {
          throw new Error('server error');
        }
        const data = await response.json();
        setCatalog(data);
      } 
      catch (error) {
        setError(error);
      } 
      finally {
        setLoading(false);
      }
      console.log("fetched the catalog!");
    };

    fetchCatalog();
  }, []);

  return { catalog, error, loading };
};

export default useCatalog;