import React from 'react';
import SummaryCard from './SummaryCard';

const RecentSummaries: React.FC = () => {
  const summaries = [
    {
      id: 1,
      title: 'Machine Learning Basics',
      type: 'YouTube' as const,
      timeAgo: '5 min ago',
    },
    {
      id: 2,
      title: 'Project Proposal',
      type: 'PDF' as const,
      timeAgo: '2 hours ago',
    },
    {
      id: 3,
      title: 'Research Notes',
      type: 'Word' as const,
      timeAgo: '1 day ago',
    },
  ];

  return (
    <div className="mt-16 max-w-5xl mx-auto px-6 mb-12"> {/* Added mb-12 */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Recent Summaries</h2>
        <a href="#" className="text-emerald-600 hover:text-emerald-800 text-sm font-medium">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {summaries.map((summary) => (
          <SummaryCard
            key={summary.id}
            title={summary.title}
            type={summary.type}
            timeAgo={summary.timeAgo}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentSummaries;