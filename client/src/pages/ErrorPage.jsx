import { Link } from 'react-router';

const ErrorPage = ({ 
  title = "Page not found", 
  message = "Looks like this aisle doesn't exist. Let's get you back to the store." 
}) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-6 text-center">
      <p className="text-7xl">🛒</p>
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-500 max-w-sm">{message}</p>
      <Link to="/" className="mt-2 px-6 py-2 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition-colors">
        Back to home
      </Link>
    </main>
  );
};

export default ErrorPage;