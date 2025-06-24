import React from 'react';
import InputTabs from './InputTabs';

const MainSection: React.FC = () => {
  return (
    <div className="text-center py-10 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
        Summarize and Organize Your Content
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Save time and extract key insights from your videos and documents with our AI-powered tools.
      </p>
      <InputTabs />
    </div>
  );
};

export default MainSection;