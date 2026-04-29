import { useState } from 'react';
import { Search, Filter, Star, MessageSquare, ShieldCheck, Zap, ArrowRight, User } from 'lucide-react';
import { students, SKILLS_LIST } from '../data/students';

export default function SkillDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [toast, setToast] = useState(null);

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          s.skillsOffered.some(sk => sk.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === 'All' || s.category === filter;
    return matchesSearch && matchesFilter;
  });

  const showToast = (name) => {
    setToast(`Connection request sent to ${name}! 🤝`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="space-y-10 py-6">
      {toast && (
        <div className="fixed bottom-6 right-6 z-[220] bg-primary text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-in">
          <span className="text-2xl">🤝</span>
          <span className="font-bold">{toast}</span>
        </div>
      )}

      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black italic">Skill <span className="text-primary">Directory</span> 🌎</h1>
          <p className="opacity-60 font-medium">Connect with verified peers and start your learning journey</p>
        </div>
        <div className="w-full md:w-96 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search by name or skill (e.g. Python)..."
            className="w-full bg-slate-500/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {['All', 'Coding', 'Design', 'Math', 'Music', 'Speaking'].map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
              filter === c ? 'bg-primary text-white border-primary shadow-lg' : 'glass-card opacity-60 hover:opacity-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Student Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStudents.map(s => (
          <div key={s.id} className="glass-card rounded-[2.5rem] p-6 flex flex-col group hover:border-primary/20 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg group-hover:scale-110 transition-transform`}>
                {s.initials}
              </div>
              <div className="flex flex-col items-end">
                <div className="flex gap-0.5">
                  {[...Array(s.stars)].map((_, i) => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                </div>
                <span className="text-[10px] font-black opacity-40 uppercase tracking-widest mt-1">{s.level}</span>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  {s.name} {s.id % 2 === 0 && <ShieldCheck className="w-4 h-4 text-primary" />}
                </h3>
                <p className="opacity-40 text-xs font-bold uppercase tracking-widest">{s.branch} · {s.year}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-2">Can Teach</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.skillsOffered.map(sk => (
                      <span key={sk} className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded-lg border border-primary/10">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mb-2">Wants To Learn</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.skillsWanted.map(sk => (
                      <span key={sk} className="bg-slate-500/10 opacity-60 text-[10px] font-black px-2 py-1 rounded-lg border border-white/5">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                 <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
                 <span className="font-black text-sm">{s.coins}</span>
              </div>
              <button
                onClick={() => showToast(s.name)}
                className="gradient-btn-primary text-white p-2.5 rounded-xl shadow-lg shadow-primary/20"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
