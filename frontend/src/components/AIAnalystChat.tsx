import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  User, 
  Bot, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { queryAIAnalyst } from '../services/api';
import type { DashboardData } from '../services/api';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface AIAnalystChatProps {
  isOpen: boolean;
  onClose: () => void;
  data: DashboardData;
}

export const AIAnalystChat: React.FC<AIAnalystChatProps> = ({ isOpen, onClose, data }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hello! I am your AI Financial Copilot. I have analyzed your business records for ${data.summary.business_name}. 

You can ask me questions about:
- Payment delay details for ABC Industries or other key clients
- Factors driving the baseline revenue forecast
- Market updates and their local business impact

How can I assist you today?`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Why did revenue decrease?",
    "Which customer has the highest payment risk?",
    "Explain the AI Scenario Forecast.",
    "What caused today's recommendation?",
    "Summarize my business health.",
    "Generate a board meeting summary."
  ];

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;
    
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Map message history to Gemini API format
      const history = messages.map(m => ({
        role: m.role,
        parts: m.text
      }));
      
      const aiResponse = await queryAIAnalyst(textToSend, history, data);
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: aiResponse
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error: any) {
      console.error("AI analyst query failed:", error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Sorry, I encountered an issue querying the model. Please check that the backend service is running."
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose}></div>
      
      {/* Chat panel */}
      <div className="w-full max-w-lg bg-white h-screen shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-slide-in">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white text-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-rose-500 rounded-2xl text-white">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 font-sans">Ask our AI Analyst</h3>
              <p className="text-[10px] text-slate-500 font-semibold font-sans">Contextual financial copilot for {data.summary.business_name}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50">
          {messages.map((m) => (
            <div 
              key={m.id} 
              className={`flex gap-3 max-w-[85%] ${
                m.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
              }`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                m.role === 'user' ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/10' : 'bg-slate-950 text-white'
              }`}>
                {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>
              
              <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-rose-500 text-white rounded-tr-none shadow-sm shadow-rose-500/10' 
                  : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-tl-none whitespace-pre-wrap'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3 max-w-[85%] self-start">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
                <Bot size={14} />
              </div>
              <div className="p-3 bg-white text-slate-800 border border-slate-200 shadow-sm rounded-2xl rounded-tl-none flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input & Quick Prompts */}
        <div className="p-4 border-t border-slate-200 bg-white flex flex-col gap-3">
          {/* Quick prompt tags */}
          {messages.length === 1 && (
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Suggested Questions</span>
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((qp, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(qp)}
                    className="text-[10px] text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-2.5 py-1.5 rounded-lg text-left transition-colors font-medium flex items-center gap-1"
                  >
                    <MessageSquare size={10} />
                    <span>{qp}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Text Input area */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              placeholder="Ask a question about your business data..."
              className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={loading || !input.trim()}
              className="p-2.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white disabled:text-slate-400 rounded-xl transition-colors"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
