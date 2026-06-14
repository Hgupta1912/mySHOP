import { Link } from 'react-router';
import logo from '../assets/myshop-logo.svg';

const Header = ({ qty }) => {
  return (
    <header className="flex items-center justify-between px-8 py-3 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <Link to="/">
        <img src={logo} alt="mySHOP logo" className="h-10 w-auto" />
      </Link>
      <nav className="flex items-center gap-2">
        <Link to="/" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">
          Home
        </Link>
        <Link to="/shop" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-700 transition-colors">
          Shop
        </Link>
        <Link
          to="/cart"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors"
        >
          Cart
          <span className="bg-white text-green-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {qty}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;