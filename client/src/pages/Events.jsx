import { useState } from 'react';
import { Calendar, MapPin, Award, Filter, Search, ArrowRight } from 'lucide-react';

export default function Events() {
  const [filter, setFilter] = useState('All');
  const [toast, setToast] = useState(null);

  const events = [
    { id: 1, type: 'Hackathon', name: 'CODEBEGIN Hackathon', college: 'PESITM', date: 'Tomorrow', icon: '💻' },
    { id: 2, type: 'Competition', name: 'UI Design Contest', college: 'MIT', date: 'Next Week', icon: '🎨' },
    { id: 3, type: 'Workshop', name: 'AI & Data Science Workshop', college: 'IIT', date: 'May 15', icon: '🤖' },
    { id: 4, type: 'Hackathon', name: 'Smart Campus Challenge', college: 'BMS', date: 'May 20', icon: '🏫' },
  ];

  const categories = ['All', 'Hackathon', 'Workshop', 'Competition'];

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.type === filter);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="space-y-8 py-6">
      {toast && (
        <div className="fixed bottom-6 right-6 z-[110] bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-in">
          <span className="text-2xl">✅</span>
          <span className="font-bold">{toast}</span>
        </div>
      )}

      <div className="space-y-1 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-white">Opportunity <span className="text-secondary">Hub</span> 🏆</h1>
        <p className="text-slate-400 text-lg">Discover and register for the biggest campus events</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto w-full md:w-auto">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                filter === c ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Search events..." 
            className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredEvents.map(e => (
          <div key={e.id} className="glass-card rounded-3xl p-6 border border-white/5 flex gap-6 hover:border-secondary/30 transition-all group">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
              {e.icon}
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-secondary/20">
                  {e.type}
                </span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {e.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">{e.name}</h3>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {e.college}</p>
                <p className="flex items-center gap-1.5 text-secondary"><Award className="w-3.5 h-3.5" /> 500 SkillCoins Prize</p>
              </div>
              <div className="pt-2">
                <button 
                  onClick={() => showToast('Registered successfully!')}
                  className="w-full py-2.5 rounded-xl font-bold bg-white/5 text-white hover:bg-secondary transition-all border border-white/10 flex items-center justify-center gap-2 group-hover:bg-secondary"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
