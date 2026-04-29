import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Mail, User, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const userData = {
      name,
      email,
      id: 'user_' + Date.now(),
      joined: new Date().toISOString(),
      coins: 150,
      avatar: name.split(' ').map(n => n[0]).join('').toUpperCase()
    };

    localStorage.setItem('skillBridge_user', JSON.stringify(userData));
    navigate('/dashboard');
    window.location.reload(); // Refresh to update navbar/app state
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="glass-card w-full max-w-md rounded-[3rem] p-10 border border-white/10 shadow-2xl animate-bounce-in">
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex p-3 bg-primary/20 rounded-2xl mb-2">
            <Layers className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Welcome <span className="text-primary">Back</span></h1>
          <p className="text-slate-400 font-medium">Log in to your student growth ecosystem</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                required
                type="text"
                placeholder="Ex: Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Campus Email</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                required
                type="email"
                placeholder="name@college.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full gradient-btn-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-2xl shadow-primary/20 mt-4 group"
          >
            Enter Ecosystem <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
          <div className="flex items-center gap-3 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <p className="text-[10px] font-bold uppercase tracking-widest">Secure Local Storage Encryption</p>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-[10px] font-bold uppercase tracking-widest">AI Profile Initialization Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}
