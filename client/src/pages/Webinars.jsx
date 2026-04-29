import { useState } from 'react';
import { Video, Calendar, User, ArrowRight, Play, Plus, Clock } from 'lucide-react';

export default function Webinars() {
  const [toast, setToast] = useState(null);

  const webinars = [
    { id: 1, title: 'Python Basics for Beginners', mentor: 'Rahul Sharma', time: 'Live Now 🔴', status: 'live', attendees: 124 },
    { id: 2, title: 'UI/UX Design Workshop', mentor: 'Priya Nair', time: 'Today 5:00 PM', status: 'upcoming', attendees: 85 },
    { id: 3, title: 'Advanced AI Bootcamp', mentor: 'Arjun Reddy', time: 'Tomorrow 10:00 AM', status: 'upcoming', attendees: 210 },
  ];

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

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold text-white">SkillBridge <span className="text-primary">Live</span> 🎥</h1>
          <p className="text-slate-400">Join real-time workshops hosted by top student mentors</p>
        </div>
        <button className="gradient-btn-primary flex items-center gap-2 text-white px-6 py-3 rounded-xl font-bold">
          <Plus className="w-5 h-5" /> Host a Webinar
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {webinars.map(w => (
          <div key={w.id} className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col group hover:border-primary/30 transition-all">
            <div className="h-40 bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  w.status === 'live' ? 'bg-red-500 text-white animate-pulse' : 'bg-blue-500 text-white'
                }`}>
                  {w.status}
                </span>
                <span className="bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-white text-[10px] font-bold flex items-center gap-1">
                  <User className="w-3 h-3" /> {w.attendees}
                </span>
              </div>
              {w.status === 'live' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                  <div className="bg-primary p-4 rounded-full shadow-2xl">
                    <Play className="text-white w-6 h-6 fill-current" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{w.title}</h3>
              <div className="space-y-2 mb-6 text-sm">
                <p className="text-slate-400 flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" /> {w.mentor}
                </p>
                <p className="text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" /> {w.time}
                </p>
              </div>
              <button 
                onClick={() => showToast(`Joined "${w.title}" successfully!`)}
                className="w-full mt-auto py-3 rounded-xl font-bold bg-white/5 text-white hover:bg-primary transition-all border border-white/10"
              >
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested for You Section */}
      <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-primary/20 p-6 rounded-2xl">
          <Video className="w-12 h-12 text-primary" />
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-white">Host Your Own Webinar!</h2>
          <p className="text-slate-400">Share your expertise and earn **50 SkillCoins** per attendee. You have already reached Level 2, making you eligible to host.</p>
        </div>
        <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
          Get Started <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
