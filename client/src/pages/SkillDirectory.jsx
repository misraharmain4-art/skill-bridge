import { useState } from 'react';
import { Search, Coins } from 'lucide-react';
import { students } from '../data/students';

const FILTERS = ['All', 'Coding', 'Design', 'Music', 'Speaking', 'Math'];

function Toast({ message, onClose }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-in">
      <span className="text-2xl">{message.includes('✅') ? '✅' : '🔄'}</span>
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 text-slate-400 hover:text-white text-xl">×</button>
    </div>
  );
}

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map(i => (
        <span key={i} className={i <= count ? 'text-yellow-400' : 'text-slate-200'}>★</span>
      ))}
    </div>
  );
}

function StudentCard({ student, onAction }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={`${student.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
          {student.initials}
        </div>
        <div>
          <h3 className="font-bold text-slate-900">{student.name}</h3>
          <p className="text-slate-400 text-sm">{student.branch} · {student.year}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Offers</span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {student.skillsOffered.map(s => (
              <span key={s} className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-2.5 py-0.5 rounded-full font-medium">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Wants</span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {student.skillsWanted.map(s => (
              <span key={s} className="bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2.5 py-0.5 rounded-full font-medium">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <Stars count={student.stars} />
          <span className="text-xs text-slate-400">{student.level}</span>
        </div>
        <div className="flex items-center gap-1 text-amber-600 font-bold">
          <span>🪙</span>
          <span>{student.coins}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => onAction(`Connection Request Sent! ✅`)}
          className="flex-1 bg-primary hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-semibold transition-colors"
        >
          Connect
        </button>
        <button
          onClick={() => onAction(`Skill Swap Proposed! 🔄`)}
          className="flex-1 bg-orange-50 hover:bg-orange-100 text-secondary border border-orange-200 py-2 rounded-xl text-sm font-semibold transition-colors"
        >
          Skill Swap
        </button>
      </div>
    </div>
  );
}

export default function SkillDirectory() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const filtered = students.filter(s => {
    const matchSearch = search === '' ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.skillsOffered.some(sk => sk.toLowerCase().includes(search.toLowerCase())) ||
      s.skillsWanted.some(sk => sk.toLowerCase().includes(search.toLowerCase()));
    const matchFilter = activeFilter === 'All' || s.category === activeFilter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-6 py-4">
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold text-slate-900">Skill Directory 📚</h1>
        <p className="text-slate-500">Browse students and find your perfect skill exchange partner</p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or skill..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white shadow-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              activeFilter === f
                ? 'bg-primary text-white border-primary shadow-md'
                : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-slate-500 text-center">{filtered.length} student{filtered.length !== 1 ? 's' : ''} found</p>

      {/* Cards Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <div className="text-6xl mb-4">😕</div>
          <p className="text-lg font-medium">No students match your search</p>
          <p className="text-sm">Try a different skill or clear the filter</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(student => (
            <StudentCard key={student.id} student={student} onAction={showToast} />
          ))}
        </div>
      )}
    </div>
  );
}
