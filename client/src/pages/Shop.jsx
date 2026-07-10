import ProductCard from "../components/ProductCard.jsx";
import { useOutletContext } from 'react-router';
import LoadingPage from '../components/LoadingPage.jsx';
import ErrorPage from './ErrorPage.jsx';

function Shop() {
    const { catalog, error, loading } = useOutletContext();

    if (loading) return <LoadingPage />;
    if (error) return <ErrorPage title="Something went wrong" message="We're having trouble loading mySHOPS's catalog. Please try again later." />;
    if (catalog.length === 0) return <ErrorPage title="No products available" message="Check back soon!" />;

    return (
        <main className='grid grid-cols-3 gap-4'>
            {catalog.map(item => <ProductCard key={item.id} productInfo={item}/>)}
        </main>
    ); 
}

export default Shop;
