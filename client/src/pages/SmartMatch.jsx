import { useState } from 'react';
import { Sparkles, Search, ArrowRight, Brain, Target, Info, CheckCircle } from 'lucide-react';
import { students, SKILLS_LIST } from '../data/students';

function getMatches(teach, learn) {
  if (!teach || !learn) return [];
  return students
    .map(s => {
      let score = 0;
      const offers = s.skillsOffered.map(x => x.toLowerCase());
      const wants = s.skillsWanted.map(x => x.toLowerCase());
      
      // AI Logic: Mutual match check
      const theyTeachWhatYouWant = offers.some(o => o.includes(learn.toLowerCase()) || learn.toLowerCase().includes(o));
      const theyWantWhatYouTeach = wants.some(w => w.includes(teach.toLowerCase()) || teach.toLowerCase().includes(w));
      
      if (theyTeachWhatYouWant) score += 55;
      if (theyWantWhatYouTeach) score += 35;
      
      // Random bonus for 'compatibility'
      score = Math.min(score + Math.floor(Math.random() * 9), 99);
      
      return { 
        ...s, 
        matchPercent: score,
        isMutual: theyTeachWhatYouWant && theyWantWhatYouTeach,
        matchReason: theyTeachWhatYouWant && theyWantWhatYouTeach 
          ? `Perfect 2-way swap! They teach ${learn} and want to learn ${teach}.` 
          : theyTeachWhatYouWant 
            ? `Expert match for ${learn}. They have mastered what you seek.`
            : `Collaboration match. You can help them reach their goals.`
      };
    })
    .filter(s => s.matchPercent >= 40)
    .sort((a, b) => b.matchPercent - a.matchPercent)
    .slice(0, 3);
}

function MatchCard({ student, onSwap }) {
  const pct = student.matchPercent;

  return (
    <div className="glass-card rounded-[2.5rem] p-8 border border-white/5 relative group hover:border-primary/40 transition-all overflow-hidden animate-bounce-in">
      {student.isMutual && (
        <div className="absolute top-6 right-6 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
          <CheckCircle className="w-3 h-3" /> Mutual Match
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col items-center space-y-4">
          <div className={`${student.color} w-24 h-24 rounded-[2rem] flex items-center justify-center text-white text-3xl font-black shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
            {student.initials}
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-white">{student.name}</h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{student.branch} · {student.year}</p>
          </div>
        </div>

        <div className="flex-1 space-y-6 w-full">
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-2 text-slate-400">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">Compatibility Score</span>
              </div>
              <span className="text-2xl font-black text-white">{pct}%</span>
            </div>
            <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(37,99,235,0.4)]" 
                style={{ width: `${pct}%` }} 
              />
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 flex gap-4">
            <div className="bg-primary/20 p-2 rounded-xl h-fit">
              <Info className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Why this match?</p>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">{student.matchReason}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={onSwap}
              className="flex-1 gradient-btn-primary text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl"
            >
              Start Skill Swap <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3.5 bg-white/5 text-slate-300 hover:bg-white/10 rounded-2xl font-bold text-sm border border-white/10 transition-all">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SmartMatch() {
  const [teach, setTeach] = useState('');
  const [learn, setLearn] = useState('');
  const [matches, setMatches] = useState([]);
  const [searched, setSearched] = useState(false);
  const [toast, setToast] = useState(null);

  const handleFind = () => {
    if (!teach || !learn) return;
    const results = getMatches(teach, learn);
    setMatches(results);
    setSearched(true);
  };

  const showToast = () => {
    setToast('Swap Request Sent! 🔄');
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="space-y-12 py-8 max-w-4xl mx-auto">
      {toast && (
        <div className="fixed bottom-6 right-6 z-[120] bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-in">
          <span className="text-2xl">🔄</span>
          <span className="font-bold">{toast}</span>
        </div>
      )}

      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/5">
          <Sparkles className="w-4 h-4" /> AI Engine v2.0
        </div>
        <h1 className="text-5xl font-black text-white leading-tight">Advanced <span className="text-primary">Skill Matcher</span></h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">Our AI analyzes thousands of peer profiles to find your perfect technical counterpart.</p>
      </div>

      <div className="glass-card rounded-[3rem] p-10 border border-white/5 shadow-2xl relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
        
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-3">
            <label className="block text-sm font-black text-slate-400 uppercase tracking-widest ml-1">I can teach 🎓</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Target className="w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
              </div>
              <select
                value={teach}
                onChange={e => setTeach(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-[1.5rem] pl-12 pr-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none transition-all hover:bg-slate-900"
              >
                <option value="">Select your expert skill</option>
                {SKILLS_LIST.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-black text-slate-400 uppercase tracking-widest ml-1">I want to learn 🌱</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Sparkles className="w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
              </div>
              <select
                value={learn}
                onChange={e => setLearn(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-[1.5rem] pl-12 pr-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none transition-all hover:bg-slate-900"
              >
                <option value="">Select target skill</option>
                {SKILLS_LIST.filter(s => s !== teach).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleFind}
          disabled={!teach || !learn}
          className="w-full mt-10 gradient-btn-primary disabled:opacity-30 disabled:cursor-not-allowed text-white py-5 rounded-[1.5rem] font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 relative z-10"
        >
          <Search className="w-6 h-6" /> Find My AI Match
        </button>
      </div>

      {searched && (
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-4 justify-center">
            <div className="h-px bg-white/10 flex-1" />
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] whitespace-nowrap">
              Top Matches found for you
            </h2>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <div className="space-y-6">
            {matches.length > 0 ? (
              matches.map(m => <MatchCard key={m.id} student={m} onSwap={showToast} />)
            ) : (
              <div className="glass-card rounded-[2.5rem] p-16 text-center border border-white/5">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">😕</div>
                <h3 className="text-2xl font-bold text-white mb-2">No High-Confidence Matches</h3>
                <p className="text-slate-500 max-w-sm mx-auto">Try expanding your skill selection or listing more skills in your profile dashboard.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
