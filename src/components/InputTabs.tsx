import React, { useState } from 'react';
import { FileUp, Youtube, Sparkles, ArrowLeft, Play } from 'lucide-react';

interface SummaryState {
  isLoading: boolean;
  showSummary: boolean;
  type: 'youtube' | 'document' | null;
}

const InputTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'document'>('youtube');
  const [summaryState, setSummaryState] = useState<SummaryState>({
    isLoading: false,
    showSummary: false,
    type: null,
  });

  const handleSubmit = () => {
    setSummaryState({ isLoading: true, showSummary: false, type: activeTab });
    setTimeout(() => {
      setSummaryState({ isLoading: false, showSummary: true, type: activeTab });
    }, 2000);
  };

  const handleBack = () => {
    setSummaryState({ isLoading: false, showSummary: false, type: null });
  };

  if (summaryState.showSummary) {
    return (
      <div className="w-full max-w-5xl mx-auto mt-8 px-4">
        <div className="bg-gray-900 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/5">
              {summaryState.type === 'youtube' ? (
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
                    alt="Video thumbnail"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-white mt-4 text-lg font-medium">Understanding Machine Learning Basics</h3>
                </div>
              ) : (
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <FileUp className="w-16 h-16 mx-auto text-emerald-500 mb-4" />
                  <h3 className="text-white text-lg font-medium">research-paper.pdf</h3>
                </div>
              )}
            </div>
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
              <p className="text-gray-300 mb-6">
                This comprehensive guide explores the fundamental concepts of machine learning, covering supervised and
                unsupervised learning techniques, model evaluation, and practical applications in real-world scenarios.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Highlights</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    Introduction to basic machine learning algorithms and their applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    Practical examples of implementing machine learning models
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    Best practices for model training and evaluation
                  </li>
                </ul>
              </div>
              <button
                onClick={handleBack}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Input
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-4">
      <div className="flex flex-col sm:flex-row border-b border-gray-200">
        <button
          className={`px-6 py-3 text-sm font-medium flex items-center justify-center ${
            activeTab === 'youtube'
              ? 'text-emerald-600 border-b-2 border-emerald-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('youtube')}
        >
          <Youtube className="h-4 w-4 mr-2" />
          YouTube URL
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium flex items-center justify-center ${
            activeTab === 'document'
              ? 'text-emerald-600 border-b-2 border-emerald-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('document')}
        >
          <FileUp className="h-4 w-4 mr-2" />
          Document Upload
        </button>
      </div>

      <div className="mt-4">
        {summaryState.isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Analyzing your content...</p>
          </div>
        ) : activeTab === 'youtube' ? (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Paste YouTube video URL here"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Start Summarizing
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-12 text-center hover:border-emerald-500 transition-colors cursor-pointer">
            <FileUp className="h-10 w-10 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600 mb-2">Drag files or click to upload</p>
            <p className="text-gray-400 text-sm">(PDF, Word, PPT)</p>
            <input type="file" className="hidden" multiple accept=".pdf,.doc,.docx,.ppt,.pptx" />
            <button
              onClick={handleSubmit}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center mx-auto"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Start Summarizing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputTabs;