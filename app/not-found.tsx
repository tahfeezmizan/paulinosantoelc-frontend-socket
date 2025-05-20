"use client"
import { useRouter } from 'next/navigation';
import React from 'react';


const WorkingPage: React.FC = () => {
  const router = useRouter(); // Create a router instance

  const handleGoHome = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F5F5F5] text-[#00A9EA] ">
      <div className="text-center animate-pulse container">
        <h1 className="text-4xl font-semibold">
          We are working on this page!
        </h1>
        <p className="mt-4 text-lg">
          Please check back later.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-6 py-2 bg-[#00A9EA] text-white rounded-lg hover:bg-[#007bb5] transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default WorkingPage;