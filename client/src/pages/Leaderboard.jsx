import { students } from '../data/students';

const ranked = [...students].sort((a, b) => b.coins - a.coins);

const BADGE = (coins) => {
  if (coins >= 400) return { label: '🏅 Mentor', color: 'bg-amber-100 text-amber-700 border-amber-200' };
  if (coins >= 250) return { label: '🤝 Collaborator', color: 'bg-blue-100 text-blue-700 border-blue-200' };
  return { label: '🦸 Hero', color: 'bg-purple-100 text-purple-700 border-purple-200' };
};

const RANK_STYLE = {
  0: { bg: 'bg-gradient-to-r from-yellow-400 to-amber-500', text: 'text-yellow-900', medal: '🥇', border: 'border-yellow-300' },
  1: { bg: 'bg-gradient-to-r from-slate-300 to-slate-400', text: 'text-slate-800', medal: '🥈', border: 'border-slate-300' },
  2: { bg: 'bg-gradient-to-r from-orange-300 to-amber-400', text: 'text-orange-900', medal: '🥉', border: 'border-orange-300' },
};

export default function Leaderboard() {
  return (
    <div className="space-y-8 py-4 max-w-3xl mx-auto">
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold text-slate-900">Skill Heroes Leaderboard 🏆</h1>
        <p className="text-slate-500">The top contributors on campus this month</p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-3 items-end">
        {/* 2nd */}
        <div className={`rounded-2xl p-4 text-center border ${RANK_STYLE[1].border} ${RANK_STYLE[1].bg} ${RANK_STYLE[1].text}`}>
          <div className="text-3xl mb-1">{RANK_STYLE[1].medal}</div>
          <div className={`w-12 h-12 rounded-full ${ranked[1].color} flex items-center justify-center text-white font-bold mx-auto mb-2`}>{ranked[1].initials}</div>
          <p className="font-bold text-sm">{ranked[1].name}</p>
          <p className="text-xs opacity-75">{ranked[1].branch}</p>
          <p className="font-bold mt-1">🪙 {ranked[1].coins}</p>
        </div>
        {/* 1st */}
        <div className={`rounded-2xl p-5 text-center border ${RANK_STYLE[0].border} ${RANK_STYLE[0].bg} ${RANK_STYLE[0].text} transform scale-105 shadow-xl`}>
          <div className="text-3xl mb-1">{RANK_STYLE[0].medal}</div>
          <div className={`w-14 h-14 rounded-full ${ranked[0].color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-2 ring-4 ring-yellow-200`}>{ranked[0].initials}</div>
          <p className="font-bold">{ranked[0].name}</p>
          <p className="text-xs opacity-75">{ranked[0].branch}</p>
          <p className="font-bold mt-1 text-lg">🪙 {ranked[0].coins}</p>
          <span className="text-xs bg-yellow-200 text-yellow-900 px-2 py-0.5 rounded-full mt-1 inline-block">Champion</span>
        </div>
        {/* 3rd */}
        <div className={`rounded-2xl p-4 text-center border ${RANK_STYLE[2].border} ${RANK_STYLE[2].bg} ${RANK_STYLE[2].text}`}>
          <div className="text-3xl mb-1">{RANK_STYLE[2].medal}</div>
          <div className={`w-12 h-12 rounded-full ${ranked[2].color} flex items-center justify-center text-white font-bold mx-auto mb-2`}>{ranked[2].initials}</div>
          <p className="font-bold text-sm">{ranked[2].name}</p>
          <p className="text-xs opacity-75">{ranked[2].branch}</p>
          <p className="font-bold mt-1">🪙 {ranked[2].coins}</p>
        </div>
      </div>

      {/* Full List */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
          <h2 className="font-bold text-slate-900">Full Rankings</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {ranked.map((student, i) => {
            const badge = BADGE(student.coins);
            return (
              <div key={student.id} className={`flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors ${i < 3 ? 'bg-amber-50/30' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${i === 0 ? 'bg-yellow-400 text-yellow-900' : i === 1 ? 'bg-slate-300 text-slate-800' : i === 2 ? 'bg-orange-300 text-orange-900' : 'bg-slate-100 text-slate-600'}`}>
                  {i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1}
                </div>
                <div className={`w-10 h-10 rounded-full ${student.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {student.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900">{student.name}</p>
                  <p className="text-slate-400 text-sm">{student.branch} · {student.year}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium hidden sm:block ${badge.color}`}>{badge.label}</span>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">🪙 {student.coins}</p>
                    <p className="text-xs text-slate-400">SkillCoins</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
