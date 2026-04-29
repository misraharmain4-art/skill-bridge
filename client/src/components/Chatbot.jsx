import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, User, Brain, Loader2, Target, Zap, Lightbulb } from 'lucide-react';

export default function Chatbot({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am your SkillBridge AI Mentor. How can I help you grow today? ✨' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const fakeAIResponse = (userInput) => {
    const q = userInput.toLowerCase();
    if (q.includes('python')) {
      return "I recommend **Rahul Sharma** (94% match) or **Priya Nair**. They are experts in Python and can help you master it fast!";
    }
    if (q.includes('connect')) {
      return "You should connect with **Rahul Sharma** (94% match). He matches your learning goals perfectly!";
    }
    if (q.includes('skill')) {
      return "Based on demand trends, you should learn **Python** or **UI/UX Design** to grow faster and earn more SkillCoins.";
    }
    if (q.includes('project')) {
      return "You can build a **Portfolio Website** or a **Campus Chat Application** with your matched partner.";
    }
    if (q.includes('career') || q.includes('role')) {
      return "Based on your current profile, you could excel as a **Frontend Developer** or an **AI Engineer**.";
    }
    return "I suggest exploring trending skills on the HeatMap and connecting with top mentors on the Leaderboard!";
  };

  const handleSend = (e, quickText = null) => {
    if (e) e.preventDefault();
    const textToSend = quickText || input;
    if (!textToSend.trim()) return;

    const userMsg = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Simulate thinking delay
    setTimeout(() => {
      const botResponse = fakeAIResponse(textToSend);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsLoading(false);
    }, 1000);
  };

  const quickButtons = [
    { label: 'Suggest Skill', icon: <Target className="w-3 h-3" />, text: 'What skill should I learn?' },
    { label: 'Find Match', icon: <Zap className="w-3 h-3" />, text: 'Who should I connect with?' },
    { label: 'Project Idea', icon: <Lightbulb className="w-3 h-3" />, text: 'Suggest a project idea' },
  ];

  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-[0_8px_25px_rgba(59,130,246,0.4)] transition-all duration-500 transform hover:scale-110 flex items-center justify-center group ${
          isOpen 
            ? 'bg-slate-100 dark:bg-slate-800 rotate-90' 
            : 'bg-gradient-to-br from-blue-500 to-purple-600 hover:shadow-[0_10px_30px_rgba(59,130,246,0.6)]'
        }`}
      >
        {isOpen ? (
          <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-800'}`} />
        ) : (
          <div className="relative">
            <Bot className="text-white w-7 h-7" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-20" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`absolute bottom-20 right-0 w-[360px] md:w-[420px] rounded-[2rem] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.2)] border animate-bounce-in max-h-[600px] transition-colors duration-500 ${
            isDark ? 'bg-slate-900/90 border-white/10' : 'bg-white/80 border-white'
          } backdrop-blur-xl`}
          style={!isDark ? { background: 'linear-gradient(135deg, rgba(224, 247, 255, 0.9), rgba(245, 240, 255, 0.9))' } : {}}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-2 rounded-2xl backdrop-blur-md border border-white/20">
                <Sparkles className="text-white w-5 h-5 fill-white" />
              </div>
              <div>
                <h3 className="text-white font-black text-base tracking-tight leading-none">SkillBridge AI Mentor</h3>
                <div className="flex items-center gap-1.5 mt-1">
                   <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]" />
                   <p className="text-white/80 text-[9px] font-black uppercase tracking-[0.2em]">Active & Guiding</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className={`flex-1 overflow-y-auto p-6 space-y-6 min-h-[380px] ${isDark ? 'bg-slate-900/40' : 'bg-transparent'}`}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm transition-all ${
                    m.role === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-tr-none' 
                      : isDark 
                        ? 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5' 
                        : 'bg-white/40 backdrop-blur-md text-slate-800 rounded-tl-none border border-white'
                  }`}
                >
                  <div className={`flex items-center gap-2 mb-1.5 opacity-40 text-[9px] font-black uppercase tracking-widest ${m.role === 'user' ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {m.role === 'user' ? <><User className="w-3 h-3" /> User Session</> : <><Brain className="w-3 h-3" /> AI Insight</>}
                  </div>
                  <div 
                    className="font-medium"
                    dangerouslySetInnerHTML={{ __html: m.text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-black">$1</strong>') }} 
                  />
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className={`${isDark ? 'bg-slate-800' : 'bg-white/40'} backdrop-blur-md text-slate-500 p-4 rounded-3xl rounded-tl-none border border-white/5 flex items-center gap-3`}>
                  <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Mentor is thinking...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Buttons */}
          <div className={`px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar border-t ${isDark ? 'bg-slate-800/60 border-white/5' : 'bg-white/20 border-white/40'}`}>
            {quickButtons.map(btn => (
              <button
                key={btn.label}
                onClick={() => handleSend(null, btn.text)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full border transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap text-[10px] font-black ${
                  isDark 
                    ? 'bg-slate-700 text-slate-300 border-white/10 hover:text-white hover:border-primary' 
                    : 'bg-white/60 text-slate-600 border-white/60 hover:text-blue-500 hover:border-blue-400'
                }`}
              >
                {btn.icon} {btn.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className={`p-6 border-t backdrop-blur-md ${isDark ? 'bg-slate-900/80 border-white/5' : 'bg-white/40 border-white/40'}`}>
            <div className="relative flex items-center gap-3">
              <div className="flex-1 relative group">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask your mentor..."
                  className={`w-full border-0 rounded-2xl px-5 py-4 text-sm font-bold shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all ${
                    isDark ? 'bg-slate-800 text-white placeholder:text-slate-600' : 'bg-white text-slate-800 placeholder:text-slate-400'
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-blue-500/40 disabled:opacity-30 transition-all transform hover:scale-105 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
