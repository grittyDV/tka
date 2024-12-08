import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Expert Legal Solutions for Complex Challenges</h1>
            <p className="text-xl mb-8">Dedicated legal professionals committed to protecting your rights and interests.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Corporate Law', 'Civil Litigation', 'Real Estate Law'].map((area) => (
              <div key={area} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{area}</h3>
                <p className="text-gray-600 mb-4">Expert legal guidance in {area.toLowerCase()} matters.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TKA Law</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Experience', desc: '20+ years of legal expertise' },
              { title: 'Results', desc: 'Proven track record of success' },
              { title: 'Personal Attention', desc: 'Dedicated to your case' },
              { title: 'Free Consultation', desc: 'No obligation initial meeting' }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Case?</h2>
          <p className="text-xl mb-8">Schedule your free consultation today.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg hover:bg-gray-100">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;