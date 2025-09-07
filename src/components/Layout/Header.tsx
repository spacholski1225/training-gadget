import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            Diet & Training Tracker
          </Link>
          <nav className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Główna
            </Link>
            <Link
              to="/report"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/report'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Raport Tygodniowy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;