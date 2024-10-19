import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Hey yoooo ,salam alaikum...</h1>
      <div className="flex space-x-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-40 h-48 flex items-center justify-center">Template 1</div>
        <div className="bg-white p-6 rounded-lg shadow-md w-40 h-48 flex items-center justify-center">Template 2</div>
        <div className="bg-white p-6 rounded-lg shadow-md w-40 h-48 flex items-center justify-center">Template 3</div>
      </div>
      <Link to="/editor"><button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">generate your own</button></Link>
      
    </div>
  );
}

export default Home;
