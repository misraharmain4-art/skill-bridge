import { Link } from 'react-router-dom';
import { BookOpen, Users, Zap, Award, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 py-4">
      {/* Hero */}
      <section className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
          <Star className="w-4 h-4" /> #1 Skill Exchange Platform on Campus
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Find Your Perfect<br />
          <span className="text-primary">Skill Match</span>{' '}
          <span className="text-secondary">On Campus</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Connect with students who have the skills you need and teach what you know.
          Learn together. Grow together. Build together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/skills"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-blue-200 transition-all hover:scale-105">
            Offer My Skills <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/requests"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-orange-200 transition-all hover:scale-105">
            Request Help <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { number: '500+', label: 'Students', icon: '🎓', color: 'from-blue-500 to-blue-600' },
          { number: '50+', label: 'Skills', icon: '✨', color: 'from-orange-400 to-orange-500' },
          { number: '200+', label: 'Connections', icon: '🤝', color: 'from-purple-500 to-purple-600' },
          { number: '1000+', label: 'SkillCoins', icon: '🪙', color: 'from-emerald-500 to-emerald-600' },
        ].map((stat) => (
          <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-lg text-center`}>
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold">{stat.number}</div>
            <div className="text-white/80 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-slate-900">How It Works 🚀</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', icon: <Users className="w-8 h-8 text-primary" />, title: 'Create Your Profile', desc: 'Sign up and list the skills you can teach and the skills you want to learn from peers.', bg: 'bg-blue-50' },
            { step: '02', icon: <Zap className="w-8 h-8 text-secondary" />, title: 'Get Matched by AI', desc: 'Our smart algorithm finds the perfect skill exchange partner based on what you teach and what you want.', bg: 'bg-orange-50' },
            { step: '03', icon: <Award className="w-8 h-8 text-purple-500" />, title: 'Learn & Earn SkillCoins', desc: 'Complete skill swaps, earn SkillCoins, and climb the leaderboard as a campus Skill Hero!', bg: 'bg-purple-50' },
          ].map((step) => (
            <div key={step.step} className={`${step.bg} rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow`}>
              <div className="text-5xl font-black text-slate-200 mb-2">{step.step}</div>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-blue-700 rounded-3xl p-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Ready to Start Your Skill Journey?</h2>
        <p className="text-blue-100 mb-6 text-lg">Join 500+ students already swapping skills on campus</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/skills" className="bg-white text-primary font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition">Browse Skills</Link>
          <Link to="/match" className="bg-secondary font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition">Find My Match 🤖</Link>
        </div>
      </section>
    </div>
  );
}
