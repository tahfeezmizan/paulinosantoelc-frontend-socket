'use client';

import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const ChangePassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    // Handle password change logic here
    // console.log('Password changed!');
  };

  return (

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[#F1FAFE] rounded-xl px-10 py-14"
      >
        <h2 className="text-3xl font-semibold hanken-text text-center mb-2">
          Change New Password!
        </h2>
        <p className="text-center font-normal text-gray-600 mb-6 text-base">
          Set a new password to enhance account security and protect your business information.
        </p>

        {/* New Password */}
        <div className="mb-4 relative">
          <label className="block text-base text-black font-medium mb-1">New Password*</label>
          <input
            type={showNewPassword ? 'text' : 'password'}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your new password.."
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowNewPassword((prev) => !prev)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            <FaEye />
          </button>
        </div>

        {/* Confirm Password */}
        <div className="mb-6 relative">
          <label className="block text-base text-black font-medium mb-1">Confirm Password</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your confirm password.."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          >
            👁️
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00aaff] hover:bg-[#0099e6] text-white py-2 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
    
  );
};

export default ChangePassword;
