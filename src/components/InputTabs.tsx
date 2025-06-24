import React, { useState } from 'react';
import { FileUp, Youtube, Sparkles, ArrowLeft, Play, Clock, TrendingUp, Lightbulb, Target, Users, Zap, ChevronDown, ChevronUp } from 'lucide-react';

interface SummaryState {
  isLoading: boolean;
  showSummary: boolean;
  type: 'youtube' | 'document' | null;
}

interface TimelineItem {
  timestamp: string;
  summary: string;
}

const InputTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'document'>('youtube');
  const [activeSection, setActiveSection] = useState<'summarize' | 'viral' | 'recommendation'>('summarize');
  const [summaryState, setSummaryState] = useState<SummaryState>({
    isLoading: false,
    showSummary: false,
    type: null,
  });
  const [expandedTimeline, setExpandedTimeline] = useState<number[]>([0]);

  const timelineData: TimelineItem[] = [
    { timestamp: '00:00 - 01:00', summary: 'Introduction to machine learning concepts and why they matter in today\'s technology landscape.' },
    { timestamp: '01:00 - 02:30', summary: 'Deep dive into supervised learning algorithms including linear regression and decision trees.' },
    { timestamp: '02:30 - 04:00', summary: 'Practical examples of implementing basic ML models using Python and popular libraries.' },
    { timestamp: '04:00 - 05:15', summary: 'Discussion of unsupervised learning techniques and clustering algorithms.' },
    { timestamp: '05:15 - 06:30', summary: 'Best practices for model evaluation, cross-validation, and avoiding overfitting.' },
  ];

  const viralScore = 87;
  const viralLabel = viralScore >= 80 ? 'Very Viral' : viralScore >= 60 ? 'Moderately Viral' : 'Low Reach';

  const handleSubmit = () => {
    setSummaryState({ isLoading: true, showSummary: false, type: activeTab });
    setTimeout(() => {
      setSummaryState({ isLoading: false, showSummary: true, type: activeTab });
    }, 2000);
  };

  const handleBack = () => {
    setSummaryState({ isLoading: false, showSummary: false, type: null });
    setActiveSection('summarize');
  };

  const toggleTimeline = (index: number) => {
    setExpandedTimeline(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getViralScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-400 to-emerald-500';
    if (score >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  if (summaryState.showSummary) {
    return (
      <div className="w-full max-w-7xl mx-auto mt-8 px-4">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-xl p-1 flex space-x-1">
            <button
              onClick={() => setActiveSection('summarize')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === 'summarize'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              Summarize
            </button>
            <button
              onClick={() => setActiveSection('viral')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === 'viral'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-2" />
              Viral Score
            </button>
            <button
              onClick={() => setActiveSection('recommendation')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === 'recommendation'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Lightbulb className="w-4 h-4 inline mr-2" />
              Recommendation
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl">
          {activeSection === 'summarize' && (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-2/5">
                {summaryState.type === 'youtube' ? (
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
                      alt="Video thumbnail"
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-30 transition-all duration-300">
                      <Play className="w-16 h-16 text-white drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      6:30
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                    <FileUp className="w-16 h-16 mx-auto text-cyan-500 mb-4" />
                    <h3 className="text-white text-lg font-medium">research-paper.pdf</h3>
                  </div>
                )}
                <h3 className="text-white mt-4 text-xl font-semibold">Understanding Machine Learning Basics</h3>
                <p className="text-gray-400 mt-2 text-sm">Published 2 days ago • 45K views</p>
              </div>
              
              <div className="w-full lg:w-3/5">
                <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Summary
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  This comprehensive guide explores the fundamental concepts of machine learning, covering supervised and
                  unsupervised learning techniques, model evaluation, and practical applications in real-world scenarios.
                </p>
                
                {/* Timeline Summary */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-cyan-400" />
                    Timeline Summary
                  </h3>
                  <div className="space-y-4">
                    {timelineData.map((item, index) => (
                      <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                        <button
                          onClick={() => toggleTimeline(index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors duration-200"
                        >
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4"></div>
                            <span className="text-cyan-400 font-mono text-sm font-medium">{item.timestamp}</span>
                          </div>
                          {expandedTimeline.includes(index) ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                        {expandedTimeline.includes(index) && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-300 leading-relaxed">{item.summary}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleBack}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Input
                </button>
              </div>
            </div>
          )}

          {activeSection === 'viral' && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Viral Analysis
              </h2>
              
              {/* Viral Score */}
              <div className="mb-12">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-700"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - viralScore / 100)}`}
                      className="transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" className="text-green-400" stopColor="currentColor" />
                        <stop offset="100%" className="text-emerald-500" stopColor="currentColor" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">{viralScore}</div>
                      <div className="text-sm text-gray-400">out of 100</div>
                    </div>
                  </div>
                </div>
                <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${getViralScoreColor(viralScore)} text-white font-semibold text-lg shadow-lg`}>
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {viralLabel}
                </div>
              </div>

              {/* Why is this video viral? */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 text-left">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="text-2xl mr-3">🔥</span>
                  Why is this video viral?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  This video achieves high viral potential through its perfect combination of educational value and accessibility. 
                  The creator uses clear, jargon-free explanations that make complex machine learning concepts digestible for beginners. 
                  The timing is excellent, riding the current AI trend wave, while the practical examples and hands-on approach 
                  keep viewers engaged throughout the entire duration. The thumbnail and title optimization also contribute to its 
                  discoverability and click-through rate.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'recommendation' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
                Create Similar Viral Content
              </h2>
              
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">Recommended Video Idea</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">📹 Video Concept</h4>
                    <h5 className="text-lg font-medium text-white mb-3">
                      "Build Your First AI Chatbot in 10 Minutes - No Coding Required!"
                    </h5>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Target className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h6 className="text-white font-medium mb-1">Target Audience</h6>
                          <p className="text-gray-300 text-sm">Entrepreneurs, small business owners, and tech enthusiasts aged 25-45</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h6 className="text-white font-medium mb-1">Content Style</h6>
                          <p className="text-gray-300 text-sm">Step-by-step tutorial with screen recording, upbeat music, and quick cuts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">🎬 Suggested Structure</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-yellow-400">
                        <h6 className="text-white font-medium mb-1">Hook (0-15s)</h6>
                        <p className="text-gray-300 text-sm">"Watch me build a chatbot that can answer customer questions 24/7"</p>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-blue-400">
                        <h6 className="text-white font-medium mb-1">Introduction (15-30s)</h6>
                        <p className="text-gray-300 text-sm">Brief explanation of why every business needs a chatbot</p>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-green-400">
                        <h6 className="text-white font-medium mb-1">Main Content (30s-8min)</h6>
                        <p className="text-gray-300 text-sm">Step-by-step tutorial using a no-code platform</p>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-purple-400">
                        <h6 className="text-white font-medium mb-1">Call to Action (8-10min)</h6>
                        <p className="text-gray-300 text-sm">Encourage viewers to try it themselves and share results</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl border border-purple-500/30">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <span className="text-xl mr-2">💡</span>
                    Pro Tips for Maximum Engagement
                  </h4>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      Use trending hashtags like #AI, #NoCode, #Automation
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      Post during peak hours (7-9 PM in your target timezone)
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      Create an eye-catching thumbnail with bright colors and clear text
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      Engage with comments in the first hour after posting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-4">
      <div className="flex flex-col sm:flex-row border-b border-gray-700">
        <button
          className={`px-6 py-3 text-sm font-medium flex items-center justify-center transition-all duration-300 ${
            activeTab === 'youtube'
              ? 'text-cyan-400 border-b-2 border-cyan-500 bg-gray-800/50'
              : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/30'
          }`}
          onClick={() => setActiveTab('youtube')}
        >
          <Youtube className="h-4 w-4 mr-2" />
          YouTube URL
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium flex items-center justify-center transition-all duration-300 ${
            activeTab === 'document'
              ? 'text-cyan-400 border-b-2 border-cyan-500 bg-gray-800/50'
              : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/30'
          }`}
          onClick={() => setActiveTab('document')}
        >
          <FileUp className="h-4 w-4 mr-2" />
          Document Upload
        </button>
      </div>

      <div className="mt-6">
        {summaryState.isLoading ? (
          <div className="text-center py-12">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-cyan-500 mx-auto mb-6"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <p className="text-gray-300 text-lg">Analyzing your content...</p>
            <p className="text-gray-500 text-sm mt-2">This may take a few moments</p>
          </div>
        ) : activeTab === 'youtube' ? (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Paste YouTube video URL here"
              className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            />
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Start Analysis
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 sm:p-12 text-center hover:border-cyan-500 transition-all duration-300 cursor-pointer bg-gray-800/30">
            <FileUp className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-300 mb-2 text-lg">Drag files or click to upload</p>
            <p className="text-gray-500 text-sm">(PDF, Word, PPT)</p>
            <input type="file" className="hidden" multiple accept=".pdf,.doc,.docx,.ppt,.pptx" />
            <button
              onClick={handleSubmit}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Start Analysis
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputTabs;