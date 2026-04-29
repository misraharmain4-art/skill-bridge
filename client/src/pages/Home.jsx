import { Link } from 'react-router-dom';
import { BookOpen, Users, Zap, Award, ArrowRight, Star, Brain, Sparkles, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 py-10 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      {/* Hero */}
      <section className="text-center space-y-8 pt-16 relative">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm animate-bounce-in">
          <Sparkles className="w-4 h-4" /> AI-Powered Student Ecosystem
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight">
          Find Your Perfect<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skill Match</span>
        </h1>
        <p className="text-xl opacity-60 max-w-2xl mx-auto font-medium leading-relaxed">
          The ultimate campus platform for student growth. Swap skills, join events, 
          book experts, and earn while you learn.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
          <Link to="/skills"
            className="gradient-btn-primary inline-flex items-center gap-2 text-white px-10 py-4.5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20">
            Offer My Skills <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/requests"
            className="glass-card px-10 py-4.5 rounded-2xl font-black text-lg shadow-sm transition-all hover:border-primary">
            Request Help
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          { number: '500+', label: 'Students', icon: '🎓', color: 'text-blue-500' },
          { number: '50+', label: 'Skills', icon: '✨', color: 'text-orange-500' },
          { number: '200+', label: 'Connections', icon: '🤝', color: 'text-purple-500' },
          { number: '1000+', label: 'SkillCoins', icon: '🪙', color: 'text-emerald-500' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-[2rem] p-8 text-center group hover:-translate-y-2 transition-all">
            <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform">{stat.icon}</div>
            <div className="text-3xl font-black">{stat.number}</div>
            <div className="text-[10px] font-black uppercase opacity-40 tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Showcase */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-black tracking-tight">The Future of Peer Learning</h2>
          <p className="opacity-50 font-medium italic">Empowering students through AI-driven collaboration.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Brain className="w-8 h-8 text-primary" />, 
              title: 'AI Matching', 
              desc: 'Our engine pairs you with peers who want exactly what you teach and vice versa.',
              badge: 'Smart'
            },
            { 
              icon: <Target className="w-8 h-8 text-secondary" />, 
              title: 'Career Paths', 
              desc: 'Convert your current skills into career-ready roles with personalized AI advice.',
              badge: 'Career'
            },
            { 
              icon: <Zap className="w-8 h-8 text-emerald-500" />, 
              title: 'Skill Economy', 
              desc: 'Teach to earn SkillCoins. Spend them to book premium sessions or enter contests.',
              badge: 'Economy'
            },
          ].map((feat) => (
            <div key={feat.title} className="glass-card rounded-[2.5rem] p-10 relative group hover:border-primary/20 transition-all">
              <div className="bg-slate-500/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                {feat.icon}
              </div>
              <span className="absolute top-10 right-10 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-opacity">
                {feat.badge}
              </span>
              <h3 className="text-2xl font-bold mb-3">{feat.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 rounded-[3.5rem] p-16 border border-primary/10 text-center relative overflow-hidden shadow-sm">
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black">Ready to start your journey?</h2>
          <p className="opacity-60 max-w-xl mx-auto font-medium">Join thousands of students and become a Skill Hero on your campus.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/dashboard" className="gradient-btn-primary px-10 py-4 rounded-2xl font-black text-white shadow-xl">Open My Dashboard</Link>
            <Link to="/match" className="glass-card px-10 py-4 rounded-2xl font-black hover:border-primary transition-all">Find AI Match 🤖</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
