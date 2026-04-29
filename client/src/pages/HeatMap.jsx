import { useState } from 'react';
import { Map, Info, TrendingUp, Zap, Target, ArrowUpRight } from 'lucide-react';

export default function HeatMap() {
  const skillData = [
    { name: 'Python', requests: 45, level: 'High', color: 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' },
    { name: 'React', requests: 38, level: 'High', color: 'bg-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.3)]' },
    { name: 'UI Design', requests: 32, level: 'High', color: 'bg-red-500/60 shadow-[0_0_15px_rgba(239,68,68,0.2)]' },
    { name: 'Figma', requests: 28, level: 'Medium', color: 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]' },
    { name: 'Node.js', requests: 22, level: 'Medium', color: 'bg-orange-500/80 shadow-[0_0_15px_rgba(249,115,22,0.2)]' },
    { name: 'SQL', requests: 19, level: 'Medium', color: 'bg-orange-500/60 shadow-[0_0_15px_rgba(249,115,22,0.1)]' },
    { name: 'Public Speaking', requests: 15, level: 'Low', color: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' },
    { name: 'Excel', requests: 12, level: 'Low', color: 'bg-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.2)]' },
    { name: 'Leadership', requests: 10, level: 'Low', color: 'bg-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.1)]' },
    { name: 'C++', requests: 8, level: 'Low', color: 'bg-emerald-500/40' },
    { name: 'Java', requests: 6, level: 'Low', color: 'bg-emerald-500/30' },
    { name: 'Music Theory', requests: 4, level: 'Low', color: 'bg-emerald-500/20' },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="space-y-10 py-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-1 text-center md:text-left">
          <h1 className="text-4xl font-black text-white">Skill <span className="text-primary">HeatMap</span> 📊</h1>
          <p className="text-slate-400 font-medium">Visualizing campus demand with real-time request tracking</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">Trending: Python</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Heat Grid */}
        <div className="lg:col-span-3 glass-card rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10">
            {skillData.map((s) => (
              <div 
                key={s.name}
                onMouseEnter={() => setHoveredSkill(s)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative aspect-square rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer hover:scale-105 ${s.color}`}
              >
                <div className="text-white/40 group-hover:text-white transition-colors">
                   <Target className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-white font-black text-sm group-hover:scale-110 origin-left transition-transform">{s.name}</p>
                   <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{s.requests} Requests</p>
                </div>

                {/* Tooltip */}
                {hoveredSkill?.name === s.name && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/20 text-white px-4 py-2 rounded-xl text-[10px] font-bold whitespace-nowrap z-50 shadow-2xl animate-bounce-in">
                    {s.name}: {s.requests} requests ({s.level} Demand)
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">High Demand (30+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Medium Demand (15-30)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Low Demand (0-15)</span>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 space-y-6">
            <div className="bg-primary/20 w-12 h-12 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary fill-current" />
            </div>
            <h3 className="text-xl font-bold text-white">Heat Insights</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Learn <strong className="text-white">Python</strong> now! It has reached a critical demand level. Mentors teaching Python are currently earning <span className="text-primary font-bold">2x SkillCoins</span>.
            </p>
            <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              Start Learning <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-white/5">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
              <TrendingUp className="w-4 h-4 text-secondary" /> Top Trending
            </h3>
            <div className="space-y-6">
              {skillData.slice(0, 3).map((t, i) => (
                <div key={t.name} className="flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-600 font-black text-xs">0{i+1}</span>
                    <p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{t.name}</p>
                  </div>
                  <span className="text-emerald-500 text-[10px] font-black tracking-tighter">+{(12-i)*2}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
