import React from 'react';
import { FileText, Youtube, FileType } from 'lucide-react';

type SummaryType = 'YouTube' | 'PDF' | 'Word';

interface SummaryCardProps {
  title: string;
  type: SummaryType;
  timeAgo: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, type, timeAgo }) => {
  const getIcon = () => {
    switch (type) {
      case 'YouTube':
        return <Youtube className="h-5 w-5 text-red-500" />;
      case 'PDF':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'Word':
        return <FileType className="h-5 w-5 text-indigo-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeClass = () => {
    switch (type) {
      case 'YouTube':
        return 'bg-red-100 text-red-800';
      case 'PDF':
        return 'bg-blue-100 text-blue-800';
      case 'Word':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          {getIcon()}
          <span className={`ml-2 text-xs font-medium py-1 px-2 rounded-full ${getTypeClass()}`}>
            {type}
          </span>
        </div>
        <span className="text-xs text-gray-500">{timeAgo}</span>
      </div>
      <h3 className="font-medium text-gray-800">{title}</h3>
    </div>
  );
};

export default SummaryCard;