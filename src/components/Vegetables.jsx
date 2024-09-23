import React, { useState } from 'react';
import Navbar from './Navbar';
import graph from '../assets/graph.png'
const CerealForm = ({ onSubmit }) => {
  const [vegetablesname, setVegetablesname] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(vegetablesname, date); // Corrected variable name
  };

  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen">
      {/* Form Section */}
      <div className="relative w-3/5 bg-cover bg-center bg-blur-[10px] bg-[url('https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_640.jpg')]">
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Vegetables Price Prediction</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Vegetables Name:
                </label>
                <input
                  type="text"
                  value={vegetablesname}
                  onChange={(e) => setVegetablesname(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Region:
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Get Price Prediction
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="w-2/5 bg-gray-100 p-6">
        {/* Placeholder for graph */}
        <div className="h-full flex items-center justify-center text-gray-500">
        <p>Graph will be displayed here.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default CerealForm;
