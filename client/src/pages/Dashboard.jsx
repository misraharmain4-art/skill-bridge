import { Link } from 'react-router-dom';
import { 
  Zap, BookOpen, Users, ArrowRight, CheckCircle, 
  Clock, Brain, Target, Sparkles, TrendingUp, Briefcase, Star
} from 'lucide-react';

export default function Dashboard({ user }) {
  const stats = [
    { label: 'Avg Rating', value: '5.0', icon: '⭐', color: 'from-amber-400 to-amber-500' },
    { label: 'Requests', value: '2', icon: '📋', color: 'from-orange-400 to-orange-500' },
    { label: 'Connections', value: '5', icon: '🤝', color: 'from-purple-500 to-purple-600' },
    { label: 'SkillCoins', value: user?.coins || '180', icon: '🪙', color: 'from-emerald-500 to-emerald-600' },
  ];

  const aiInsights = {
    bestMatch: 'Rahul Sharma',
    matchPercent: 94,
    suggestedSkill: 'Python',
    suggestedProject: 'Smart Campus AI',
    suggestedRole: 'AI Engineer'
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black leading-tight">Hello, <span className="text-primary">{user?.name?.split(' ')[0] || 'Student'}</span> 👋</h1>
          <p className="opacity-60 mt-1 font-medium italic">"Your path to mastery is 94% optimized today."</p>
        </div>
        <div className="flex gap-3">
          <Link to="/match" className="glass-card px-5 py-2.5 rounded-xl font-bold text-sm hover:border-primary transition-all flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" /> Get Match
          </Link>
          <Link to="/premium" className="gradient-btn-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2">
            <Target className="w-4 h-4" /> Book Mentor
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="glass-card p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className={`absolute -right-4 -bottom-4 text-6xl opacity-5 group-hover:scale-125 transition-transform duration-500`}>{s.icon}</div>
            <div className="relative z-10 space-y-1">
              <p className="opacity-50 text-[10px] font-black uppercase tracking-widest">{s.label}</p>
              <div className="text-3xl font-black">{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* AI INSIGHTS PANEL */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full" />
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">AI Ecosystem Insights</h2>
              <p className="opacity-60 text-sm">Personalized career growth recommendations</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-500/5 rounded-2xl p-5 border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-4 h-4 text-secondary" />
                  <span className="text-[10px] font-black opacity-40 uppercase tracking-widest">Recommended Career Role</span>
                </div>
                <p className="text-xl font-bold mb-1">{aiInsights.suggestedRole}</p>
                <p className="text-xs opacity-60 leading-relaxed">Based on your HTML/CSS skills, prioritize <span className="text-primary font-bold">React & Node.js</span> next.</p>
              </div>

              <div className="bg-slate-500/5 rounded-2xl p-5 border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black opacity-40 uppercase tracking-widest">Collaboration Opportunity</span>
                </div>
                <p className="text-lg font-bold mb-1">{aiInsights.suggestedProject}</p>
                <p className="text-xs opacity-60 leading-relaxed">Partner with <span className="text-emerald-500 font-bold">{aiInsights.bestMatch}</span> to build a production-ready app.</p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 text-center space-y-4">
                <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">Best Ecosystem Compatibility</p>
                <div className="relative inline-block">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="opacity-10" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - aiInsights.matchPercent/100)} className="text-primary" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-black">{aiInsights.matchPercent}%</div>
                </div>
                <p className="text-sm font-medium">Connect with <strong className="text-primary">{aiInsights.bestMatch}</strong></p>
                <Link to="/match" className="block w-full py-2.5 bg-primary text-white rounded-xl font-bold text-xs hover:bg-blue-600 transition-all shadow-lg">Start Swap</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Connections */}
        <div className="glass-card rounded-[2.5rem] p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-500" /> Mentor Network
          </h2>
          <div className="space-y-6">
            {[
              { initials: 'RS', color: 'bg-blue-600', name: 'Rahul Sharma', role: 'AI Expert', rating: 4.9 },
              { initials: 'PN', color: 'bg-pink-600', name: 'Priya Nair', role: 'UI Expert', rating: 4.8 },
              { initials: 'KP', color: 'bg-teal-600', name: 'Kiran Patil', role: 'Full Stack', rating: 4.8 },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer hover:bg-slate-500/5 p-2 -m-2 rounded-2xl transition-all">
                <div className={`${c.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform shadow-lg`}>
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                     <p className="font-bold truncate">{c.name}</p>
                     <div className="flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                        <span className="text-[10px] font-black">{c.rating}</span>
                     </div>
                  </div>
                  <p className="opacity-40 text-[10px] font-bold uppercase tracking-widest">{c.role}</p>
                </div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              </div>
            ))}
          </div>
          <Link to="/skills" className="mt-8 block text-center text-[10px] font-black uppercase tracking-widest text-primary hover:text-inherit transition-colors">
            Expand Network <ArrowRight className="inline-block w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-2 gap-6 pb-10">
        <div className="glass-card rounded-3xl p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest"><Zap className="w-4 h-4 text-secondary" /> Learning Progression</h3>
          <div className="space-y-4">
            {['Frontend Mastery', 'Design Thinking'].map(skill => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between text-[10px] uppercase font-black tracking-widest">
                  <span className="opacity-60">{skill}</span>
                  <span className="text-secondary">75%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-500/10 rounded-full overflow-hidden border border-white/5 p-0.5">
                  <div className="h-full bg-secondary w-3/4 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.3)]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest"><BookOpen className="w-4 h-4 text-emerald-500" /> Active Board Items</h3>
          <div className="space-y-4">
            {[
              { title: 'Need help with React State', date: '2h ago', status: 'Pending' },
              { title: 'Looking for a Figma partner', date: '5h ago', status: '1 Match' },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between bg-slate-500/5 p-3 rounded-2xl border border-white/5 hover:bg-slate-500/10 transition-all">
                <div>
                  <p className="text-sm font-bold">{r.title}</p>
                  <p className="text-[10px] opacity-40 font-black uppercase tracking-widest">{r.date}</p>
                </div>
                <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded-lg border border-primary/20">
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
