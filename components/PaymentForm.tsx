import React, { useState } from 'react';

interface FormData {
  message: string;
  firstName: string;
  lastName: string;
}

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    message: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-amber-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          {/* Message Field */}
          <div className="mb-6">
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              How much are you Paying?
            </label>
            <div className="relative">
              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-amber-900 transition-colors duration-200"
                placeholder=""
              />
            </div>
          </div>

          {/* Name Fields Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label 
                htmlFor="firstName" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-amber-900 transition-colors duration-200"
                placeholder=""
              />
            </div>

            {/* Last Name */}
            <div>
              <label 
                htmlFor="lastName" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-amber-900 transition-colors duration-200"
                placeholder=""
              />
            </div>
          </div>

          {/* Submit Button (Hidden in original but included for functionality) */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-amber-900 text-white font-medium py-3 px-4 rounded-lg hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:ring-offset-2 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;