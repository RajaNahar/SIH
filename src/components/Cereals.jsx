import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import graph from "../assets/graph.png";
const CerealForm = () => {
  const [cerealname, setCerealsname] = useState("");
  const [date, setDate] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the submitRes function
      await submitRes();
    } catch (err) {
      setError("An error occurred: " + err.message);
    }
  };

  const submitRes = async () => {
    try {
      // Replace with your API endpoint
      const result = await axios.post("http://localhost:8000/predict/", {
        date: date, // Adjust payload structure based on backend requirements
      });
      setResponse(result.data);
      setError("");
    } catch (err) {
      setError("Error: " + (err.response?.data.detail || err.message));
      setResponse("");
    }
  };

  const [chartData, setChartData] = useState({});

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <div className="relative w-3/5 bg-cover bg-center bg-blur-[10px] bg-[url('https://cdn.pixabay.com/photo/2018/02/17/23/02/field-3161149_960_720.jpg')]">
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Cereals Price Prediction
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Cereal Name:
                  </label>
                  <input
                    type="text"
                    value={cerealname}
                    onChange={(e) => setCerealsname(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Date:
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
                  className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Get Price Prediction
                </button>
              </form>
              {response && (
                <div className="mt-4">Response: {JSON.stringify(response)}</div>
              )}
              {error && <div className="mt-4 text-red-600">Error: {error}</div>}
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="w-2/5 bg-gray-100 p-6">
          {/* Placeholder for graph */}
          <p>Graph will be displayed here.</p>
        </div>
      </div>
    </>
  );
};

export default CerealForm;
