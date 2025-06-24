import React from 'react';
import { Zap } from 'lucide-react';

const PromotionalBanner: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-12 bg-gradient-to-r from-emerald-900 to-emerald-700">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Boost Your Productivity?
        </h2>
        <p className="text-lg sm:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Rainative helps you summarize and manage content effortlessly with AI-powered tools tailored for students,
          professionals, and creators. Join thousands of users who save hours every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-white text-emerald-700 font-medium px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center justify-center">
            <Zap className="h-5 w-5 mr-2" />
            Get Started Free
          </button>
          <button className="w-full sm:w-auto bg-emerald-800 text-white font-medium px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors">
            View Pricing
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-emerald-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Fast & Accurate</h3>
            <p className="text-emerald-100">Get summaries in seconds with our advanced AI technology</p>
          </div>
          <div className="bg-emerald-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Multiple Formats</h3>
            <p className="text-emerald-100">Support for videos, documents, and presentations</p>
          </div>
          <div className="bg-emerald-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Easy Sharing</h3>
            <p className="text-emerald-100">Share summaries with your team in one click</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;