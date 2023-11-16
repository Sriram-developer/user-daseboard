
// UserForm.jsx

import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    username: '',
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming you would perform some submission logic (e.g., API call) here
    // For demonstration purposes, we'll just show a success message
    setSubmitted(true);
  };

  const closePopup = () => {
    setSubmitted(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold mb-6">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Add User
        </button>
      </form>
      {isSubmitted && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="bg-white p-6 rounded-md shadow-md shadow-lg">
      <p className="text-green-600 text-lg font-semibold mb-4">Successfully Added User!</p>
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        onClick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default UserForm;
