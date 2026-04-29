import { useState } from 'react';
import { AlertTriangle, Plus, X, MessageCircle } from 'lucide-react';

const INITIAL_REQUESTS = [
  {
    id: 1, urgent: true, title: 'Need Python help — exam tomorrow!',
    student: 'Ravi Kumar', branch: 'CSE', offers: 'Math help',
    description: 'My Python exam is tomorrow and I am stuck on OOP concepts. Please help ASAP!',
  },
  {
    id: 2, urgent: false, title: 'Looking for UI/UX guidance for my final project',
    student: 'Meera Joshi', branch: 'ISE', offers: 'Content Writing',
    description: 'Need someone to review my Figma design for the college project submission.',
  },
  {
    id: 3, urgent: false, title: 'Need a teammate for upcoming hackathon',
    student: 'Kiran', branch: 'CSE', offers: 'React skills',
    description: 'Smart India Hackathon is coming up. Looking for a backend dev or designer.',
  },
  {
    id: 4, urgent: false, title: 'Want to learn public speaking basics',
    student: 'Divya', branch: 'ECE', offers: 'Python help',
    description: 'I have a seminar presentation coming up and I am very nervous about it.',
  },
];

function Toast({ message, onClose }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
      <span className="text-2xl">🎉</span>
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 text-slate-400 hover:text-white text-xl">×</button>
    </div>
  );
}

function RequestCard({ request, onHelp }) {
  return (
    <div className={`bg-white rounded-2xl p-5 border ${request.urgent ? 'border-red-200 shadow-red-50' : 'border-slate-100'} shadow-sm hover:shadow-md transition-all`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className={`font-bold ${request.urgent ? 'text-red-600' : 'text-slate-900'} text-base leading-snug`}>
          {request.urgent ? '🚨 ' : ''}{request.title}
        </h3>
        {request.urgent && (
          <span className="bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full ml-2 flex-shrink-0 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> URGENT
          </span>
        )}
      </div>
      <p className="text-slate-500 text-sm mb-3 leading-relaxed">{request.description}</p>
      <div className="flex items-center gap-3 flex-wrap mb-4">
        <span className="font-medium text-slate-700 text-sm">— {request.student}, {request.branch}</span>
        <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-200">I offer: {request.offers}</span>
      </div>
      <button
        onClick={() => onHelp()}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
      >
        🙋 I Can Help!
      </button>
    </div>
  );
}

function PostForm({ onPost, onClose }) {
  const [form, setForm] = useState({ name: '', skillNeeded: '', description: '', skillOffer: '', urgency: 'Normal' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.skillNeeded) return;
    onPost({
      id: Date.now(), urgent: form.urgency === 'SOS',
      title: `Need help with ${form.skillNeeded}`,
      student: form.name, branch: 'Student', offers: form.skillOffer || 'To be discussed',
      description: form.description || 'Looking for assistance.',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-slate-900">Post a Request 📋</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
            <input value={form.name} onChange={e => set('name', e.target.value)} required placeholder="e.g. Rahul Sharma"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Skill You Need *</label>
            <input value={form.skillNeeded} onChange={e => set('skillNeeded', e.target.value)} required placeholder="e.g. Python, UI Design"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={3} placeholder="Describe what you need..."
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Skill You Can Offer</label>
            <input value={form.skillOffer} onChange={e => set('skillOffer', e.target.value)} placeholder="e.g. Math, Design"
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Urgency</label>
            <select value={form.urgency} onChange={e => set('urgency', e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
              <option value="Normal">Normal</option>
              <option value="SOS">🚨 SOS (Urgent)</option>
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 border border-slate-200 text-slate-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50">Cancel</button>
            <button type="submit" className="flex-1 bg-primary text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700">Post Request</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function RequestBoard() {
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const handlePost = (newRequest) => {
    setRequests(prev => [newRequest, ...prev]);
    showToast('Your request has been posted! 🎉');
  };

  const urgent = requests.filter(r => r.urgent);
  const normal = requests.filter(r => !r.urgent);

  return (
    <div className="space-y-6 py-4">
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      {showForm && <PostForm onPost={handlePost} onClose={() => setShowForm(false)} />}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Request Board 📋</h1>
          <p className="text-slate-500 mt-1">Post and browse skill help requests</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { setShowForm(true); }}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
          >
            <AlertTriangle className="w-4 h-4" /> SOS Request
          </button>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" /> Post Request
          </button>
        </div>
      </div>

      {/* SOS Section */}
      {urgent.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-red-600 font-bold text-lg">
            <AlertTriangle className="w-5 h-5" /> SOS — Urgent Requests
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {urgent.map(r => <RequestCard key={r.id} request={r} onHelp={() => showToast('Great! The student will be notified! 🎉')} />)}
          </div>
        </div>
      )}

      {/* Normal Requests */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary" /> Open Requests
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {normal.map(r => <RequestCard key={r.id} request={r} onHelp={() => showToast('Great! The student will be notified! 🎉')} />)}
        </div>
      </div>
    </div>
  );
}
