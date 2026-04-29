import { Trophy, Medal, Star, ArrowUp, Crown, CheckCircle } from 'lucide-react';
import { students } from '../data/students';

export default function Leaderboard() {
  const sortedStudents = [...students].sort((a, b) => b.coins - a.coins);
  const top3 = sortedStudents.slice(0, 3);
  const rest = sortedStudents.slice(3);

  return (
    <div className="space-y-12 py-8 max-w-5xl mx-auto">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm">
          <Trophy className="w-4 h-4" /> Global Ranking
        </div>
        <h1 className="text-5xl font-black">Campus <span className="text-amber-500">Leaderboard</span> 🏆</h1>
        <p className="opacity-60 text-lg font-medium">Ranked by SkillCoins and verified peer mentor ratings</p>
      </div>

      {/* Podium */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-6 pt-10">
        {/* 2nd Place */}
        <div className="w-full md:w-64 space-y-4 order-2 md:order-1">
          <div className="flex flex-col items-center">
            <div className="bg-slate-400/20 w-16 h-16 rounded-2xl flex items-center justify-center font-bold mb-4 shadow-lg border-4 border-slate-400/50">2</div>
            <div className="glass-card w-full rounded-[2.5rem] p-6 text-center space-y-4 relative shadow-sm">
              {top3[1]?.isTopMentor && <div className="absolute -top-3 -right-3 bg-primary p-1.5 rounded-lg shadow-lg border border-white/20"><CheckCircle className="w-4 h-4 text-white" /></div>}
              <div className={`${top3[1]?.color} w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white text-xl font-bold shadow-lg`}>{top3[1]?.initials}</div>
              <div>
                <p className="font-bold">{top3[1]?.name}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                   <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                   <span className="text-[10px] font-black">{top3[1]?.rating}</span>
                </div>
                <p className="opacity-40 text-[10px] uppercase font-black tracking-widest mt-1">{top3[1]?.coins} 🪙</p>
              </div>
            </div>
          </div>
        </div>

        {/* 1st Place */}
        <div className="w-full md:w-72 space-y-4 order-1 md:order-2 transform scale-110">
          <div className="flex flex-col items-center">
            <div className="bg-amber-400 w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold mb-4 shadow-2xl border-4 border-amber-300 animate-bounce">
              <Crown className="w-10 h-10" />
            </div>
            <div className="glass-card w-full rounded-[2.5rem] p-8 border-amber-500/20 bg-amber-500/5 text-center space-y-4 shadow-2xl shadow-amber-500/10 relative">
              <div className="absolute -top-4 -right-4 bg-amber-500 p-2 rounded-xl shadow-lg border border-white/20 rotate-12 flex items-center gap-1">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-[10px] font-black text-white">TOP MENTOR</span>
              </div>
              <div className={`${top3[0]?.color} w-20 h-20 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-xl`}>{top3[0]?.initials}</div>
              <div>
                <p className="text-xl font-black">{top3[0]?.name}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                   <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                   <span className="text-sm font-black">{top3[0]?.rating}</span>
                </div>
                <p className="text-amber-500 text-sm font-black uppercase tracking-widest mt-1">{top3[0]?.coins} 🪙</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="w-full md:w-64 space-y-4 order-3 md:order-3">
          <div className="flex flex-col items-center">
            <div className="bg-orange-600/20 w-16 h-16 rounded-2xl flex items-center justify-center font-bold mb-4 shadow-lg border-4 border-orange-700/50">3</div>
            <div className="glass-card w-full rounded-[2.5rem] p-6 text-center space-y-4 shadow-sm">
              <div className={`${top3[2]?.color} w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white text-xl font-bold shadow-lg`}>{top3[2]?.initials}</div>
              <div>
                <p className="font-bold">{top3[2]?.name}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                   <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                   <span className="text-[10px] font-black">{top3[2]?.rating}</span>
                </div>
                <p className="opacity-40 text-[10px] uppercase font-black tracking-widest mt-1">{top3[2]?.coins} 🪙</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="glass-card rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="p-6 bg-slate-500/5 border-b border-white/5 flex justify-between items-center px-8">
          <h3 className="text-xs font-black opacity-40 uppercase tracking-widest">Active Leaderboard Rankings</h3>
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Live Campus Feed</span>
        </div>
        <div className="divide-y divide-white/5">
          {rest.map((student, index) => (
            <div key={student.id} className="p-6 px-8 flex items-center gap-6 hover:bg-slate-500/5 transition-all group">
              <span className="text-lg font-black opacity-10 w-8 group-hover:text-primary transition-colors">{index + 4}</span>
              <div className={`${student.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-md relative`}>
                {student.initials}
                {student.isTopMentor && <div className="absolute -top-1 -right-1 bg-emerald-500 w-3 h-3 rounded-full border-2 border-white/20" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-bold">{student.name}</p>
                  {student.isTopMentor && <span className="bg-amber-500/10 text-amber-500 text-[8px] font-black px-1.5 py-0.5 rounded uppercase border border-amber-500/20">Top Mentor</span>}
                </div>
                <p className="opacity-40 text-xs font-medium uppercase tracking-wider">{student.branch} · {student.year}</p>
              </div>
              <div className="text-right flex items-center gap-8">
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center">
                     <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                     <p className="font-black text-xs">{student.rating}</p>
                  </div>
                  <p className="opacity-40 text-[8px] font-black uppercase tracking-widest">{student.reviewCount} Reviews</p>
                </div>
                <div className="text-right">
                  <p className="font-black">{student.coins} 🪙</p>
                  <p className="text-emerald-500 text-[10px] font-black flex items-center justify-end gap-1">
                    <ArrowUp className="w-3 h-3" /> +12%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
