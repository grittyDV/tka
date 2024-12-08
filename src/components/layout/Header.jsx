import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link to="/">TKA Law</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/practice-areas" className="hover:text-gray-300">Practice Areas</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/case-results" className="hover:text-gray-300">Case Results</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Free Consultation
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;