import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Layers, Home, Users, MessageSquare, Sparkles, Map, 
  Trophy, LayoutDashboard, Video, Calendar, Crown, Database, LogOut,
  Sun, Moon
} from 'lucide-react';

export default function Navbar({ user, theme, toggleTheme }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4 mr-1" /> },
    { name: 'Skills', path: '/skills', icon: <Users className="w-4 h-4 mr-1" /> },
    { name: 'Requests', path: '/requests', icon: <MessageSquare className="w-4 h-4 mr-1" /> },
    { name: 'Smart Match', path: '/match', icon: <Sparkles className="w-4 h-4 mr-1" /> },
    { name: 'Heat Map', path: '/heatmap', icon: <Map className="w-4 h-4 mr-1" /> },
    { name: 'Webinars', path: '/webinars', icon: <Video className="w-4 h-4 mr-1" /> },
    { name: 'Events', path: '/events', icon: <Calendar className="w-4 h-4 mr-1" /> },
    { name: 'Leaderboard', path: '/leaderboard', icon: <Trophy className="w-4 h-4 mr-1" /> },
    { name: 'Premium', path: '/premium', icon: <Crown className="w-4 h-4 mr-1 text-amber-500" /> },
    { name: 'Data', path: '/data', icon: <Database className="w-4 h-4 mr-1" /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem('skillBridge_user');
    window.location.href = '/login';
  };

  return (
    <nav className="glass-nav sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/dashboard" className="flex items-center space-x-2 group">
            <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Layers className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">SkillBridge <span className="text-primary">🌉</span></span>
          </Link>
          
          <div className="hidden xl:flex space-x-1 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center px-3 py-2 rounded-lg text-[11px] font-bold transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20' 
                      : 'text-slate-500 hover:bg-slate-100 hover:text-primary dark:hover:bg-white/5'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-primary transition-all relative overflow-hidden group"
              title={theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            >
              <div className={`transition-transform duration-500 transform ${theme === 'dark' ? 'translate-y-10' : 'translate-y-0'}`}>
                <Sun className="w-5 h-5" />
              </div>
              <div className={`absolute top-0 left-0 p-2 transition-transform duration-500 transform ${theme === 'light' ? '-translate-y-10' : 'translate-y-0'}`}>
                <Moon className="w-5 h-5 text-blue-400" />
              </div>
            </button>

            <Link to="/dashboard" className={`flex items-center gap-2 p-1 pr-3 rounded-full border transition-all ${
              location.pathname === '/dashboard' ? 'bg-primary/10 border-primary/20' : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-white'
            }`}>
              <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                {user?.avatar || 'U'}
              </div>
              <span className="text-xs font-bold hidden sm:block">{user?.name?.split(' ')[0]}</span>
            </Link>
            
            <button 
              onClick={handleLogout}
              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
