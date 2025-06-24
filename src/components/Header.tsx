import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-gray-100">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-400 bg-clip-text text-transparent flex items-center">
          <Sparkles className="h-6 w-6 mr-2 text-emerald-500" />
          Rainative
        </h1>
      </div>
      <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300 text-sm">
        Sign out
      </button>
    </header>
  );
};

export default Header;