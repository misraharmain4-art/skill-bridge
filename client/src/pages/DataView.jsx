import { useState, useEffect } from 'react';
import { Database, User, MessageSquare, Star, ArrowLeft, Download, Trash2, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { students } from '../data/students';

export default function DataView() {
  const [localRequests, setLocalRequests] = useState([]);
  const [localReviews, setLocalReviews] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setLocalRequests(JSON.parse(localStorage.getItem('skillBridge_requests') || '[]'));
    setLocalReviews(JSON.parse(localStorage.getItem('skillBridge_reviews') || '[]'));
    setCurrentUser(JSON.parse(localStorage.getItem('skillBridge_user') || 'null'));
  }, []);

  const clearData = () => {
    if (window.confirm('Are you sure you want to clear all local activity data?')) {
      localStorage.removeItem('skillBridge_requests');
      localStorage.removeItem('skillBridge_reviews');
      setLocalRequests([]);
      setLocalReviews([]);
    }
  };

  return (
    <div className="space-y-10 py-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-1">
          <Link to="/dashboard" className="text-primary text-xs font-bold flex items-center gap-1 hover:underline mb-2">
            <ArrowLeft className="w-3 h-3" /> Back to Dashboard
          </Link>
          <h1 className="text-4xl font-black text-white">Data <span className="text-primary">Storage</span> 📂</h1>
          <p className="text-slate-400 font-medium">Viewing current application state and local session data</p>
        </div>
        <div className="flex gap-3">
          <button onClick={clearData} className="bg-red-500/10 border border-red-500/20 text-red-500 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-red-500 hover:text-white transition-all flex items-center gap-2">
            <Trash2 className="w-4 h-4" /> Clear Local Data
          </button>
          <button className="gradient-btn-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2">
            <Download className="w-4 h-4" /> Export JSON
          </button>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 flex items-center gap-4">
        <div className="bg-primary/20 p-3 rounded-2xl">
          <Info className="w-6 h-6 text-primary" />
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          <strong className="text-white">Note:</strong> This application currently uses <strong className="text-primary">LocalStorage</strong> for persistence. This ensures your requests and reviews persist across page refreshes. In a production environment, this data would be synchronized with <strong className="text-primary">Firebase Firestore</strong>.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* User Session Data */}
        <div className="glass-card rounded-[2.5rem] p-8 border border-white/5">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" /> Active Session
          </h3>
          {currentUser ? (
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center text-white font-black">{currentUser.avatar}</div>
                <div>
                  <p className="text-white font-bold">{currentUser.name}</p>
                  <p className="text-slate-500 text-xs font-medium">{currentUser.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900 rounded-xl p-3">
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SkillCoins</p>
                   <p className="text-white font-black">{currentUser.coins}</p>
                </div>
                <div className="bg-slate-900 rounded-xl p-3">
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">User ID</p>
                   <p className="text-white font-mono text-[10px] truncate">{currentUser.id}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-slate-500 text-sm">No active session found.</p>
          )}
        </div>

        {/* Global Student Registry (Read Only) */}
        <div className="glass-card rounded-[2.5rem] p-8 border border-white/5">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Database className="w-5 h-5 text-secondary" /> Student Registry
          </h3>
          <div className="max-h-[200px] overflow-y-auto pr-2 space-y-3">
            {students.map(s => (
              <div key={s.id} className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className={`${s.color} w-8 h-8 rounded-lg flex items-center justify-center text-white text-[10px] font-bold`}>{s.initials}</div>
                  <span className="text-xs font-bold text-white">{s.name}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold uppercase">{s.branch}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Activity Tables */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Local Requests Table */}
        <div className="glass-card rounded-[2.5rem] p-8 border border-white/5 overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-500" /> Local Requests ({localRequests.length})
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5">
                <tr>
                  <th className="pb-4">Title</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4 text-right">Coins</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {localRequests.map((r, i) => (
                  <tr key={i} className="text-xs group">
                    <td className="py-4 text-white font-bold max-w-[150px] truncate">{r.title}</td>
                    <td className="py-4">
                      <span className={`px-2 py-0.5 rounded-lg font-black text-[8px] uppercase ${r.type === 'SOS' ? 'bg-red-500/20 text-red-500' : 'bg-primary/20 text-primary'}`}>
                        {r.type}
                      </span>
                    </td>
                    <td className="py-4 text-right text-white font-black">{r.coins}</td>
                  </tr>
                ))}
                {localRequests.length === 0 && (
                  <tr><td colSpan="3" className="py-8 text-center text-slate-600 font-medium italic">No local requests found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Local Reviews Table */}
        <div className="glass-card rounded-[2.5rem] p-8 border border-white/5 overflow-hidden">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500" /> Local Reviews ({localReviews.length})
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5">
                <tr>
                  <th className="pb-4">Target Peer</th>
                  <th className="pb-4">Rating</th>
                  <th className="pb-4">Feedback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {localReviews.map((rv, i) => (
                  <tr key={i} className="text-xs">
                    <td className="py-4 text-white font-bold">{rv.targetUser}</td>
                    <td className="py-4 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-white font-black">{rv.rating}</span>
                    </td>
                    <td className="py-4 text-slate-500 truncate max-w-[150px] italic">"{rv.feedback}"</td>
                  </tr>
                ))}
                {localReviews.length === 0 && (
                  <tr><td colSpan="3" className="py-8 text-center text-slate-600 font-medium italic">No reviews submitted yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
