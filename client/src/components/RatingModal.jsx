import { useState } from 'react';
import { Star, X, Send, Heart, Sparkles } from 'lucide-react';

export default function RatingModal({ isOpen, onClose, userName, onRate }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;
    
    const review = {
      id: Date.now(),
      targetUser: userName,
      rating,
      feedback,
      date: new Date().toLocaleDateString(),
    };

    // Save to local state/storage
    const existing = JSON.parse(localStorage.getItem('skillBridge_reviews') || '[]');
    localStorage.setItem('skillBridge_reviews', JSON.stringify([...existing, review]));

    onRate(review);
    onClose();
    setRating(0);
    setFeedback('');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[300] animate-fade-in">
      <div className="glass-card rounded-[3rem] p-10 w-full max-w-md border border-white/10 animate-bounce-in shadow-2xl relative">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex p-4 bg-amber-500/10 rounded-3xl mb-2">
            <Heart className="w-10 h-10 text-amber-500 fill-amber-500/20" />
          </div>
          <h2 className="text-3xl font-black text-white leading-tight">Rate Your <span className="text-amber-500">Peer</span></h2>
          <p className="text-slate-400 text-sm font-medium">How was your experience collaborating with <strong className="text-white">{userName}</strong>?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className="transition-all transform hover:scale-125 focus:outline-none"
              >
                <Star
                  className={`w-10 h-10 ${
                    (hover || rating) >= star ? 'text-amber-500 fill-amber-500' : 'text-slate-700'
                  } transition-colors`}
                />
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Write a Review</label>
            <textarea
              placeholder="Tell others about their skills..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white font-medium placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 min-h-[100px] transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={rating === 0}
            className="w-full bg-amber-500 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-2xl shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            Submit Feedback <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-2 opacity-50">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Earn +10 SkillCoins for Reviewing</p>
        </div>
      </div>
    </div>
  );
}
