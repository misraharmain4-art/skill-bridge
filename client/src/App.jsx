import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import SkillDirectory from './pages/SkillDirectory';
import RequestBoard from './pages/RequestBoard';
import SmartMatch from './pages/SmartMatch';
import HeatMap from './pages/HeatMap';
import Leaderboard from './pages/Leaderboard';
import Dashboard from './pages/Dashboard';
import Webinars from './pages/Webinars';
import Events from './pages/Events';
import Premium from './pages/Premium';
import Login from './pages/Login';
import DataView from './pages/DataView';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('skillBridge_user');
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const savedUser = localStorage.getItem('skillBridge_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-primary/20">
        {user && <Navbar user={user} theme={theme} toggleTheme={toggleTheme} />}
        <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
            
            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/skills" element={<ProtectedRoute><SkillDirectory /></ProtectedRoute>} />
            <Route path="/requests" element={<ProtectedRoute><RequestBoard /></ProtectedRoute>} />
            <Route path="/match" element={<ProtectedRoute><SmartMatch /></ProtectedRoute>} />
            <Route path="/heatmap" element={<ProtectedRoute><HeatMap /></ProtectedRoute>} />
            <Route path="/webinars" element={<ProtectedRoute><Webinars /></ProtectedRoute>} />
            <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
            <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
            <Route path="/premium" element={<ProtectedRoute><Premium /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard user={user} /></ProtectedRoute>} />
            <Route path="/data" element={<ProtectedRoute><DataView /></ProtectedRoute>} />
          </Routes>
        </main>
        {user && <Chatbot theme={theme} />}
      </div>
    </Router>
  );
}

export default App;
