import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add placeholder routes for future pages */}
            <Route path="/practice-areas" element={<div className="container mx-auto px-6 py-12"><h1 className="text-4xl font-bold">Practice Areas</h1></div>} />
            <Route path="/about" element={<div className="container mx-auto px-6 py-12"><h1 className="text-4xl font-bold">About Us</h1></div>} />
            <Route path="/case-results" element={<div className="container mx-auto px-6 py-12"><h1 className="text-4xl font-bold">Case Results</h1></div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;