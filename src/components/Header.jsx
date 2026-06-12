import { Link } from 'react-router';
import logo from '../assets/myshop-logo.svg';

const Header = ({qty}) => {
    return (
        <header className="flex justify-between">
            <img src={logo} alt='mySHOP logo' />
            <nav className="flex justify-end items-start gap-4 bg-white">
                <Link
                    to="/"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Home
                </Link>
                <Link
                    to="/shop"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Shop
                </Link>
                <Link
                    to="/cart"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Cart {`(${qty})`}
                </Link>
            </nav>
        </header>
    );
};

export default Header;
