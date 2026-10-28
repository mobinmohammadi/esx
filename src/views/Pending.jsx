import React from "react";
import { Link } from "react-router-dom";
import { FaHourglassHalf, FaClock, FaEnvelope } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";

const Pending = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  px-4 py-10">
      {/* Main Card */}
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl shadow-indigo-100 p-8 md:p-10 text-center relative overflow-hidden">
        
        {/* Decorative background blobs */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>

        {/* Animated Icon */}
        <div className="relative flex justify-center mb-6">
          <div className="relative">
            {/* Spinning ring */}
            <div className="absolute inset-0 w-28 h-28 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            {/* Center icon */}
            <div className="w-28 h-28 flex items-center justify-center bg-indigo-50 rounded-full">
              <FaHourglassHalf className="text-4xl text-indigo-600 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
          Your Account is Under Review
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
          Our support team is currently reviewing your account information.
          This process usually takes between{" "}
          <span className="font-semibold text-indigo-600">24 to 48 hours</span>.
          You'll be notified by email once approved.
        </p>

        {/* Info Box */}
        <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 mb-6 text-left space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <FaClock className="text-indigo-600 shrink-0" />
            <span>Estimated review time: 24–48 hours</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <FaEnvelope className="text-indigo-600 shrink-0" />
            <span>Result will be sent to your email</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <MdOutlineSupportAgent className="text-indigo-600 shrink-0" />
            <span>Contact support if you need assistance</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-indigo-300"
          >
            Back to Home
            <HiOutlineArrowRight />
          </Link>

          <a
            href="mailto:support@example.com"
            className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-5 rounded-xl transition-all duration-200"
          >
            <MdOutlineSupportAgent />
            Contact Support
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-6">
          Reference ID: <span className="font-mono">PND-{Date.now().toString().slice(-6)}</span>
        </p>
      </div>
    </div>
  );
};

export default Pending;