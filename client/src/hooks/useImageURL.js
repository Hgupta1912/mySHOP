import { useState, useEffect } from 'react';

const APIKey = 'pD0EyZpMO3QA8LE7Folh7nKyqtYVMPjL';

const useImageURL = (giphyID) => {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/${giphyID}?api_key=${APIKey}`)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('server error');
                }
                return response.json();
            })
            .then((response) => setImageURL(response.data.images.original.url))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { imageURL, error, loading };
};

export default useImageURL;