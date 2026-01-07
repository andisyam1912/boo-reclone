import { useState, useEffect } from 'react';
import Head from 'next/head';

const MOCK_DATA = {
  id: "q-101",
  author: {
    name: "Cinta Laura",
    username: "@claurakiehl",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", 
    verified: true
  },
  title: "What would you choose a relationship full of?",
  description: "If you had to pick one essential quality for your forever partner, which one outweighs the other?",
  options: [
    { id: "opt-1", text: "Passion & Adventure", votes: 45 },
    { id: "opt-2", text: "Stability & Peace", votes: 55 }
  ],
  totalVotes: 100,
  commentsCount: 24,
  timestamp: "2h"
};

const VerifiedIcon = () => (
  <svg className="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const CommentIcon = () => (
  <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

export default function Home() {
  const [data, setData] = useState<typeof MOCK_DATA | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {    
    setTimeout(() => {
      setData(MOCK_DATA);
    }, 300);
  }, []);

  const handleVote = (id: string) => {
    if (selectedOption) return; 
    setSelectedOption(id);
  };

  if (!data) return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-400">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-sans">
      <Head>
        <title>Boo - Relationship Choice</title>
      </Head>
      
      <main className="w-full max-w-[500px] bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
                
        <div className="p-6 pb-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">              
              <div className="p-0.5 bg-gradient-to-tr from-yellow-400 to-blue-500 rounded-full">
                <div className="p-0.5 bg-white rounded-full">
                   <img 
                    src={data.author.avatar} 
                    alt="avatar" 
                    className="w-10 h-10 rounded-full bg-gray-200 object-cover"
                  />
                </div>
              </div>
                            
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-bold text-gray-900 text-sm">{data.author.name}</span>
                  {data.author.verified && <VerifiedIcon />}
                  <span className="mx-1.5 text-gray-300">•</span>
                  <span className="text-gray-400 text-xs">{data.timestamp}</span>
                </div>
                <span className="text-xs text-gray-500">Popular on Personality</span>
              </div>
            </div>
            
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
            </button>
          </div>
        </div>
        
        <div className="px-6 pb-6">
          <h1 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
            {data.title}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {data.description}
          </p>
          
          <div className="space-y-3">
            {data.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const hasVoted = selectedOption !== null;
                            
              const percentage = Math.round((option.votes / data.totalVotes) * 100);

              return (
                <div 
                  key={option.id}
                  onClick={() => handleVote(option.id)}
                  className={`
                    relative group cursor-pointer 
                    h-14 rounded-2xl border transition-all duration-200 overflow-hidden
                    flex items-center px-4
                    ${hasVoted ? 'border-transparent bg-gray-50' : 'border-gray-200 hover:border-blue-400 bg-white'}
                  `}
                >                  
                  {hasVoted && (
                    <div 
                      className={`absolute left-0 top-0 h-full transition-all duration-700 ease-out 
                        ${isSelected ? 'bg-cyan-100' : 'bg-gray-100'}
                      `}
                      style={{ width: `${percentage}%` }}
                    />
                  )}
                  
                  <div className="relative z-10 w-full flex justify-between items-center">
                    <span className={`font-medium text-sm ${isSelected ? 'text-cyan-800' : 'text-gray-700'}`}>
                      {option.text}
                    </span>
                                        
                    {hasVoted && (
                      <span className="font-bold text-sm text-gray-700">
                        {percentage}%
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-gray-500">
             <div className="flex gap-6">
                <button className="flex items-center text-sm hover:text-red-500 transition-colors">
                  <HeartIcon /> 
                  <span>Like</span>
                </button>
                <button className="flex items-center text-sm hover:text-blue-500 transition-colors">
                  <CommentIcon /> 
                  <span>{data.commentsCount}</span>
                </button>
                <button className="flex items-center text-sm hover:text-green-500 transition-colors">
                   <ShareIcon />
                </button>
             </div>
             <div className="text-xs text-gray-400">
                {data.totalVotes} votes
             </div>
          </div>
        </div>

      </main>
    </div>
  );
}