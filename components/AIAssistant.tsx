'use client';

import { useState } from 'react';
import { mockAIInsights } from '@/lib/mockData';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const quickActions = [
  { id: '1', label: 'Find best shipments', query: 'What are the best shipments available now?' },
  { id: '2', label: 'Track my orders', query: 'Show me my active shipments' },
  { id: '3', label: 'Investment advice', query: 'How should I diversify my portfolio?' },
  { id: '4', label: 'Market trends', query: 'What are the current shipping trends?' }
];

const aiResponses: Record<string, string> = {
  'What are the best shipments available now?': 
    'Based on current market analysis, I recommend:\n\n1. **Singapore to LA Tech Components** (SH003) - 14.2% ROI, Low Risk\n2. **Dubai to NY Luxury Goods** (SH002) - 15.8% ROI, Medium Risk\n3. **Vancouver to Tokyo Lumber** (SH006) - 11.2% ROI, Low Risk\n\nThese shipments have strong demand and reliable routes.',
  
  'Show me my active shipments':
    'You have 2 active shipments:\n\n1. **Shanghai to Rotterdam Electronics** - 50 shares, +8.3% profit\n2. **Santos to Hamburg Coffee** - 100 shares, +5% profit\n\nBoth shipments are on schedule with no delays reported.',
  
  'How should I diversify my portfolio?':
    'Your current portfolio is 100% in container cargo. I recommend:\n\n• Add 20-30% bulk cargo (lower risk, steady returns)\n• Consider 10-15% liquid cargo (higher ROI)\n• Diversify across different routes and regions\n\nThis will reduce risk and stabilize returns.',
  
  'What are the current shipping trends?':
    'Current shipping market trends:\n\n📈 **Rising**: Tech components (+15% demand)\n📊 **Stable**: Bulk commodities\n📉 **Declining**: Traditional retail goods\n\nRecommendation: Focus on tech and commodities for next quarter.'
};

export default function AIAssistant({ minimal = false }: { minimal?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hi! I\'m your AI shipping assistant. I can help you find the best shipments, track orders, and provide investment advice. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponses[content] || 'I understand your question. Let me analyze the current shipping data and provide you with the best recommendations based on your portfolio and market conditions.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  if (minimal) {
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center text-2xl"
      >
        🤖
      </button>
    );
  }

  return (
    <>
      {/* Floating Assistant Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center text-3xl"
      >
        🤖
      </button>

      {/* Assistant Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-card border-2 border-primary rounded-2xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:opacity-80 transition-opacity"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => sendMessage(action.query)}
                  className="text-xs p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-left"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

