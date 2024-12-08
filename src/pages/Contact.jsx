import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Case Type</label>
                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  required
                >
                  <option value="">Select Case Type</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="civil">Civil Litigation</option>
                  <option value="real-estate">Real Estate Law</option>
                  <option value="family">Family Law</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-md"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Legal Street<br />New York, NY 10001</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@tkalaw.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;