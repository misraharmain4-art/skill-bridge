import { useState } from 'react';
import { MessageSquare, Plus, AlertCircle, Clock, CheckCircle, Search, User, Filter, Zap, Target } from 'lucide-react';
import { students } from '../data/students';
import RatingModal from '../components/RatingModal';

export default function RequestBoard() {
  const [requests, setRequests] = useState([
    { id: 1, title: 'Need help with React State Management', user: 'Ananya Singh', skills: ['React', 'JavaScript'], type: 'Standard', time: '1h ago', coins: 50 },
    { id: 2, title: 'URGENT: Python script debugging for project', user: 'Rohit Verma', skills: ['Python'], type: 'SOS', time: '30m ago', coins: 150 },
    { id: 3, title: 'Looking for a UI Design mentor', user: 'Sneha Kulkarni', skills: ['Figma', 'UI Design'], type: 'Standard', time: '3h ago', coins: 75 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratingTarget, setRatingTarget] = useState(null);
  const [newReq, setNewReq] = useState({ title: '', skills: '', type: 'Standard' });
  const [toast, setToast] = useState(null);

  const sosHelpers = students
    .filter(s => s.skillsOffered.includes('Python'))
    .slice(0, 3)
    .map(s => ({ ...s, reason: 'Python Expert', availability: 'Available Now' }));

  const handlePost = (e) => {
    e.preventDefault();
    const req = {
      id: Date.now(),
      title: newReq.title,
      user: 'You',
      skills: newReq.skills.split(',').map(s => s.trim()),
      type: newReq.type,
      time: 'Just now',
      coins: newReq.type === 'SOS' ? 150 : 50
    };
    setRequests([req, ...requests]);
    setIsModalOpen(false);
    setNewReq({ title: '', skills: '', type: 'Standard' });
    setToast('Request posted to the board!');
    setTimeout(() => setToast(null), 3000);
  };

  const handleHelp = (targetUser) => {
    setRatingTarget(targetUser);
  };

  return (
    <div className="space-y-10 py-6 max-w-6xl mx-auto">
      {toast && (
        <div className="fixed bottom-6 right-6 z-[220] bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-in">
          <span className="text-2xl">📢</span>
          <span className="font-bold">{toast}</span>
        </div>
      )}

      <RatingModal 
        isOpen={!!ratingTarget} 
        onClose={() => setRatingTarget(null)} 
        userName={ratingTarget}
        onRate={() => {
          setToast(`Rated ${ratingTarget} successfully!`);
          setTimeout(() => setToast(null), 3000);
        }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h1 className="text-4xl font-black">Request <span className="text-secondary">Board</span> 📋</h1>
          <p className="opacity-60 font-medium">Post help requests or earn SkillCoins by helping others</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="gradient-btn-secondary text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 flex items-center gap-2 w-full md:w-auto justify-center"
        >
          <Plus className="w-6 h-6" /> Post New Request
        </button>
      </div>

      {/* SOS ALERT SECTION */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-[2.5rem] p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px]" />
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div className="bg-red-500 p-3 rounded-2xl shadow-lg shadow-red-500/30">
            <Zap className="w-8 h-8 text-white fill-current" />
          </div>
          <div>
            <h2 className="text-2xl font-black italic tracking-tight">TOP SOS HELPERS 🚨</h2>
            <p className="text-red-500/80 text-sm font-bold uppercase tracking-widest">Active Python Experts Available Now</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {sosHelpers.map(h => (
            <div key={h.id} className="glass-card rounded-2xl p-5 hover:bg-slate-500/5 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className={`${h.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform`}>
                  {h.initials}
                </div>
                <div>
                  <p className="font-bold">{h.name}</p>
                  <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">{h.availability}</p>
                </div>
              </div>
              <p className="text-xs opacity-60 mb-4 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-red-500" /> {h.reason}
              </p>
              <button 
                onClick={() => handleHelp(h.name)}
                className="w-full py-2 bg-red-500 text-white rounded-xl text-xs font-bold hover:bg-red-600 transition-all"
              >
                Quick Help
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Requests Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4 px-2">
            <Filter className="w-4 h-4 opacity-40" />
            <h3 className="text-xs font-black opacity-40 uppercase tracking-widest">Latest Active Requests</h3>
          </div>
          
          <div className="space-y-4">
            {requests.map((r) => (
              <div key={r.id} className={`glass-card rounded-[2rem] p-8 border transition-all hover:scale-[1.01] ${r.type === 'SOS' ? 'border-red-500/30' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-500/5 p-2 rounded-xl border border-white/5">
                      <User className="w-4 h-4 opacity-40" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{r.user}</p>
                      <p className="opacity-40 text-[10px] font-bold uppercase">{r.time}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    r.type === 'SOS' ? 'bg-red-500 text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    {r.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{r.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {r.skills.map((s) => (
                    <span key={s} className="bg-slate-500/10 opacity-60 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🪙</span>
                    <span className="font-black">{r.coins}</span>
                    <span className="opacity-40 text-[10px] font-bold uppercase tracking-widest">Offered</span>
                  </div>
                  <button 
                    onClick={() => handleHelp(r.user)}
                    className="gradient-btn-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20"
                  >
                    I Can Help
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="glass-card rounded-[2.5rem] p-8">
            <h3 className="text-lg font-bold mb-6">Help Center</h3>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <div className="bg-emerald-500/20 p-2 rounded-xl h-fit"><CheckCircle className="w-5 h-5 text-emerald-500" /></div>
                <p className="opacity-60 leading-relaxed">Help others to earn <strong>SkillCoins</strong> and increase your rank.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-500/20 p-2 rounded-xl h-fit"><AlertCircle className="w-5 h-5 text-red-500" /></div>
                <p className="opacity-60 leading-relaxed"><strong>SOS</strong> requests get priority board placement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-[200] animate-fade-in">
          <div className="glass-card rounded-[3rem] p-10 w-full max-w-lg border border-white/10 animate-bounce-in shadow-2xl relative">
            <h2 className="text-3xl font-black mb-6">Create Request</h2>
            <form onSubmit={handlePost} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold opacity-40 uppercase tracking-widest ml-1">Title</label>
                <input
                  autoFocus
                  required
                  placeholder="Ex: Help me with Java Collections"
                  className="w-full bg-slate-500/10 border border-white/10 rounded-2xl px-6 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  onChange={e => setNewReq({ ...newReq, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold opacity-40 uppercase tracking-widest ml-1">Skills</label>
                <input
                  required
                  placeholder="React, Frontend"
                  className="w-full bg-slate-500/10 border border-white/10 rounded-2xl px-6 py-4 font-bold focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  onChange={e => setNewReq({ ...newReq, skills: e.target.value })}
                />
              </div>
              <div className="flex gap-4 p-1 bg-slate-500/10 rounded-2xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setNewReq({ ...newReq, type: 'Standard' })}
                  className={`flex-1 py-3 rounded-xl text-xs font-black uppercase transition-all ${newReq.type === 'Standard' ? 'bg-primary text-white shadow-lg' : 'opacity-40'}`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setNewReq({ ...newReq, type: 'SOS' })}
                  className={`flex-1 py-3 rounded-xl text-xs font-black uppercase transition-all ${newReq.type === 'SOS' ? 'bg-red-500 text-white shadow-lg' : 'opacity-40'}`}
                >
                  SOS Alert
                </button>
              </div>
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 opacity-40 font-bold hover:opacity-100 transition-opacity">Cancel</button>
                <button type="submit" className="flex-1 gradient-btn-secondary py-4 rounded-2xl text-white font-black shadow-lg">Post Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
