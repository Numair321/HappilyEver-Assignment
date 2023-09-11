// pages/Page1.js
import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col mx-auto p-4 shadow-md rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <h1 className="text-2xl font-bold mb-4">Enter into Student Info System</h1>
      <Link to="/chatbot">
        <button className="mt-2 uppercase text-neutral-950 bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-500 hover:to-yellow-500 rounded-md px-4 py-2" >Enroll Now</button>
      </Link>
    </div>
  );
};

export default Page1;
