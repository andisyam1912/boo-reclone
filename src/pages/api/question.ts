import type { NextApiRequest, NextApiResponse } from 'next';

const mockData = {
  id: "q-101",
  author: {
    name: "Cinta Laura",
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
  timestamp: "2 hours ago"
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  setTimeout(() => {
    res.status(200).json(mockData);
  }, 500);
}