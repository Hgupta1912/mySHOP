import App from './App.jsx';
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop.jsx';
import Listing from './pages/Listing.jsx';
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'shop', element: <Shop /> },
            { path: 'shop/:product', element: <Listing /> },
            { path: 'cart', element: <Cart /> },
        ],
    },
];

export default routes;
