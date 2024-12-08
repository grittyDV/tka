import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Expert Legal Solutions for Complex Challenges</h1>
            <p className="text-xl mb-8">Dedicated legal professionals committed to protecting your rights and interests.</p>
            <Link to="/contact" className="btn-primary inline-block text-lg">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <h2 className="heading-2 text-center mb-12">Our Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ name: 'Corporate Law', link: '/practice-areas#corporate' },
              { name: 'Civil Litigation', link: '/practice-areas#civil' },
              { name: 'Real Estate Law', link: '/practice-areas#real-estate' }].map((area) => (
              <div key={area.name} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{area.name}</h3>
                <p className="text-gray-600 mb-4">Expert legal guidance in {area.name.toLowerCase()} matters.</p>
                <Link to={area.link} className="text-blue-600 hover:text-blue-800">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same but using proper className references */}
      {/* ... */}
    </div>
  );
};

export default Home;