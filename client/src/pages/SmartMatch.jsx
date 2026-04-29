import { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';
import { students, SKILLS_LIST } from '../data/students';

function Toast({ message, onClose }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
      <span className="text-2xl">🔄</span>
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 text-slate-400 hover:text-white text-xl">×</button>
    </div>
  );
}

function getMatches(teach, learn) {
  if (!teach || !learn) return [];
  return students
    .map(s => {
      let score = 0;
      const offers = s.skillsOffered.map(x => x.toLowerCase());
      const wants = s.skillsWanted.map(x => x.toLowerCase());
      // Student offers what you want to learn
      if (offers.some(o => o.includes(learn.toLowerCase()) || learn.toLowerCase().includes(o))) score += 50;
      // Student wants what you teach
      if (wants.some(w => w.includes(teach.toLowerCase()) || teach.toLowerCase().includes(w))) score += 44;
      score = Math.min(score + Math.floor(Math.random() * 10), 99);
      return { ...s, matchPercent: score };
    })
    .filter(s => s.matchPercent >= 40)
    .sort((a, b) => b.matchPercent - a.matchPercent)
    .slice(0, 3);
}

function MatchCard({ student, teach, learn, onSwap }) {
  const pct = student.matchPercent;
  const color = pct >= 80 ? 'text-emerald-600 bg-emerald-50 border-emerald-200' :
    pct >= 60 ? 'text-blue-600 bg-blue-50 border-blue-200' : 'text-orange-600 bg-orange-50 border-orange-200';

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <div className={`${student.color} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl`}>
          {student.initials}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 text-lg">{student.name}</h3>
          <p className="text-slate-400 text-sm">{student.branch} · {student.year}</p>
        </div>
        <div className={`text-center px-3 py-1.5 rounded-full border font-bold text-lg ${color}`}>
          ⭐ {pct}%
        </div>
      </div>

      <div className={`rounded-xl p-3 mb-4 text-sm ${color} border`}>
        <strong>Why matched:</strong>{' '}
        {student.name.split(' ')[0]} knows{' '}
        {student.skillsOffered.join(', ')} (what you want) and needs{' '}
        {student.skillsWanted.join(', ')} (what you offer)!
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        {student.skillsOffered.map(s => (
          <span key={s} className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-0.5 rounded-full">{s}</span>
        ))}
        {student.skillsWanted.map(s => (
          <span key={s} className="bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2.5 py-0.5 rounded-full">{s}</span>
        ))}
      </div>

      <button
        onClick={onSwap}
        className="w-full bg-secondary hover:bg-orange-600 text-white py-2.5 rounded-xl font-semibold transition-colors"
      >
        Start Skill Swap 🔄
      </button>
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
    <div className="space-y-8 py-4 max-w-3xl mx-auto">
      {toast && <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
        <span className="text-2xl">🔄</span><span className="font-medium">{toast}</span>
        <button onClick={() => setToast(null)} className="ml-2 text-slate-400 hover:text-white text-xl">×</button>
      </div>}

      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" /> Powered by AI Matching
        </div>
        <h1 className="text-3xl font-bold text-slate-900">🤖 AI Skill Matcher</h1>
        <p className="text-slate-500">Tell us what you know and what you want to learn</p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">I can teach... 🎓</label>
            <select
              value={teach}
              onChange={e => setTeach(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
            >
              <option value="">Select a skill you can teach</option>
              {SKILLS_LIST.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">I want to learn... 🌱</label>
            <select
              value={learn}
              onChange={e => setLearn(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
            >
              <option value="">Select a skill you want to learn</option>
              {SKILLS_LIST.filter(s => s !== teach).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <button
          onClick={handleFind}
          disabled={!teach || !learn}
          className="w-full bg-primary hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-200"
        >
          <Search className="w-5 h-5" /> Find My Match 🔍
        </button>
      </div>

      {searched && (
        <div className="space-y-4">
          {matches.length > 0 ? (
            <>
              <h2 className="text-xl font-bold text-slate-900 text-center">
                🎯 Found {matches.length} Match{matches.length > 1 ? 'es' : ''} for You!
              </h2>
              <div className="space-y-4">
                {matches.map(m => (
                  <MatchCard key={m.id} student={m} teach={teach} learn={learn} onSwap={showToast} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
              <div className="text-5xl mb-3">😔</div>
              <p className="text-slate-600 font-medium">No strong matches found right now</p>
              <p className="text-slate-400 text-sm mt-1">Try different skill combinations!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
