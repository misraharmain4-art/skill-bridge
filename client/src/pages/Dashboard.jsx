import { Link } from 'react-router-dom';
import { BookOpen, Users, Zap, Award, ArrowRight, CheckCircle, Clock } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'My Skills', value: '3', icon: '✨', color: 'from-blue-500 to-blue-600' },
    { label: 'Requests', value: '2', icon: '📋', color: 'from-orange-400 to-orange-500' },
    { label: 'Connections', value: '5', icon: '🤝', color: 'from-purple-500 to-purple-600' },
    { label: 'SkillCoins', value: '150', icon: '🪙', color: 'from-emerald-500 to-emerald-600' },
  ];

  const mySkills = [
    { name: 'Python', level: 'Intermediate', type: 'teach' },
    { name: 'Mathematics', level: 'Expert', type: 'teach' },
    { name: 'React', level: 'Beginner', type: 'learn' },
  ];

  const myRequests = [
    { title: 'Need UI Design guidance', status: 'pending', date: 'Today' },
    { title: 'Looking for React mentor', status: 'accepted', date: '2 days ago' },
  ];

  const recentConnections = [
    { initials: 'RS', color: 'bg-blue-500', name: 'Rahul Sharma', skill: 'Python Expert' },
    { initials: 'PN', color: 'bg-pink-500', name: 'Priya Nair', skill: 'UI Design' },
    { initials: 'KP', color: 'bg-teal-500', name: 'Kiran Patil', skill: 'Web Dev' },
  ];

  return (
    <div className="space-y-6 py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, Student! 👋</h1>
          <p className="text-slate-500 mt-1">Here's what's happening with your skill journey</p>
        </div>
        <Link to="/skills" className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition">
          Browse Skills <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-2xl p-5 text-white shadow-sm`}>
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-white/80 text-sm mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="text-4xl">🤖</div>
          <div className="flex-1">
            <h2 className="font-bold text-xl mb-1">AI Recommendation</h2>
            <p className="text-blue-100 mb-1">Based on your profile, we suggest learning <strong className="text-white">Python</strong>!</p>
            <p className="text-blue-100 mb-4">Best match: <strong className="text-white">Rahul Sharma</strong> — <span className="bg-blue-500 px-2 py-0.5 rounded-full text-sm">⭐ 94% compatibility</span></p>
            <Link to="/match" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-4 py-2 rounded-xl text-sm hover:bg-blue-50 transition">
              Start Skill Swap <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* My Skills */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-primary" />My Skills</h2>
          <div className="space-y-3">
            {mySkills.map(skill => (
              <div key={skill.name} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-800 text-sm">{skill.name}</p>
                  <p className="text-xs text-slate-400">{skill.level}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${skill.type === 'teach' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                  {skill.type === 'teach' ? 'Teaching' : 'Learning'}
                </span>
              </div>
            ))}
          </div>
          <Link to="/skills" className="mt-4 text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            Add more skills <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* My Requests */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-secondary" />My Requests</h2>
          <div className="space-y-3">
            {myRequests.map((r, i) => (
              <div key={i} className="flex items-start gap-3">
                {r.status === 'accepted'
                  ? <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  : <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />}
                <div>
                  <p className="text-slate-800 text-sm font-medium">{r.title}</p>
                  <p className="text-xs text-slate-400">{r.date} · <span className={r.status === 'accepted' ? 'text-emerald-600' : 'text-amber-600'}>{r.status}</span></p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/requests" className="mt-4 text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            View all requests <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Recent Connections */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-purple-500" />Recent Connections</h2>
          <div className="space-y-3">
            {recentConnections.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${c.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>{c.initials}</div>
                <div>
                  <p className="font-medium text-slate-800 text-sm">{c.name}</p>
                  <p className="text-xs text-slate-400">{c.skill}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/skills" className="mt-4 text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            Find more peers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
