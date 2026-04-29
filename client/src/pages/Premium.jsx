import { useState, useEffect } from 'react';
import { Crown, Star, Clock, ShieldCheck, Zap, ArrowRight, UserCheck } from 'lucide-react';

export default function Premium() {
  const [toast, setToast] = useState(null);

  const mentors = [
    { id: 1, name: 'Rahul Sharma', skill: 'Python & ML Expert', price: 100, duration: 30, rating: 4.9, img: 'bg-blue-600', initials: 'RS' },
    { id: 2, name: 'Priya Nair', skill: 'UI/UX Design Master', price: 150, duration: 30, rating: 4.8, img: 'bg-pink-600', initials: 'PN' },
    { id: 3, name: 'Arjun Reddy', skill: 'AI Architecture', price: 200, duration: 30, rating: 5.0, img: 'bg-green-600', initials: 'AR' },
  ];

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="space-y-8 py-6">
      {toast && (
        <div className="fixed bottom-6 right-6 z-[110] bg-amber-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-in">
          <span className="text-2xl">✨</span>
          <span className="font-bold">{toast}</span>
        </div>
      )}

      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-500/20">
          <Crown className="w-4 h-4" /> Premium Access
        </div>
        <h1 className="text-5xl font-extrabold text-white">Expert Mentor <span className="text-amber-500">Sessions</span> 💰</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Book 1-on-1 private sessions with top campus performers and industry-ready seniors</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 pt-6">
        {mentors.map(m => (
          <div key={m.id} className="glass-card rounded-[2.5rem] p-8 border border-white/5 relative group hover:border-amber-500/30 transition-all">
            <div className="absolute -top-4 right-8 bg-amber-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-amber-500/40">
              <UserCheck className="w-3 h-3" /> Available Now
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className={`${m.img} w-24 h-24 rounded-[2rem] flex items-center justify-center text-white text-3xl font-bold shadow-2xl group-hover:scale-110 transition-transform`}>
                  {m.initials}
                </div>
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-2xl font-bold text-white">{m.name}</h3>
                <p className="text-amber-500 text-sm font-semibold">{m.skill}</p>
                <div className="flex items-center justify-center gap-1 pt-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-amber-500 fill-current" />)}
                  <span className="text-xs text-slate-500 ml-1">({m.rating})</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 flex items-center justify-between border border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <div>
                    <p className="text-white font-bold text-sm">{m.duration} min</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Duration</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-amber-500 font-black text-xl">₹{m.price}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Per Session</p>
                </div>
              </div>

              <button 
                onClick={() => showToast('Session booked successfully!')}
                className="w-full py-4 rounded-2xl font-bold bg-amber-500 text-white hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                Book Session <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
        {[
          { label: 'Verified Mentors', icon: <ShieldCheck className="text-primary" /> },
          { label: 'Instant Booking', icon: <Zap className="text-secondary" /> },
          { label: 'Money Back Guarantee', icon: <Star className="text-amber-500" /> },
          { label: 'Secure Payments', icon: <Crown className="text-primary" /> },
        ].map(b => (
          <div key={b.label} className="bg-white/5 rounded-2xl p-4 flex items-center gap-3 border border-white/5">
            <div className="p-2 bg-white/5 rounded-lg">{b.icon}</div>
            <span className="text-xs font-bold text-slate-300">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
