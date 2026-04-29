import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SkillDirectory from './pages/SkillDirectory';
import RequestBoard from './pages/RequestBoard';
import SmartMatch from './pages/SmartMatch';
import HeatMap from './pages/HeatMap';
import Leaderboard from './pages/Leaderboard';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillDirectory />} />
            <Route path="/requests" element={<RequestBoard />} />
            <Route path="/match" element={<SmartMatch />} />
            <Route path="/heatmap" element={<HeatMap />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
