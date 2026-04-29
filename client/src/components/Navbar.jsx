import { Link, useLocation } from 'react-router-dom';
import { Layers, Home, Users, MessageSquare, Sparkles, Map, Trophy, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4 mr-1" /> },
    { name: 'Skills', path: '/skills', icon: <Users className="w-4 h-4 mr-1" /> },
    { name: 'Requests', path: '/requests', icon: <MessageSquare className="w-4 h-4 mr-1" /> },
    { name: 'Smart Match', path: '/match', icon: <Sparkles className="w-4 h-4 mr-1" /> },
    { name: 'Heat Map', path: '/heatmap', icon: <Map className="w-4 h-4 mr-1" /> },
    { name: 'Leaderboard', path: '/leaderboard', icon: <Trophy className="w-4 h-4 mr-1" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4 mr-1" /> },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Layers className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-slate-900">SkillBridge 🌉</span>
          </Link>
          
          <div className="hidden md:flex space-x-1 overflow-x-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-primary' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center">
            <button className="bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
