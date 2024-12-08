import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TKA Law</h3>
            <p className="text-gray-400">Dedicated to protecting your rights and securing your future.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Corporate Law</li>
              <li>Civil Litigation</li>
              <li>Real Estate Law</li>
              <li>Family Law</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Legal Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: contact@tkalaw.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TKA Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;