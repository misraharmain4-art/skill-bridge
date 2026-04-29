export default function HeatMap() {
  const skills = [
    { name: 'Python', demand: 15, supply: 5, category: 'high-demand' },
    { name: 'Web Dev', demand: 12, supply: 6, category: 'high-demand' },
    { name: 'UI Design', demand: 10, supply: 4, category: 'high-demand' },
    { name: 'Content Writing', demand: 6, supply: 5, category: 'balanced' },
    { name: 'Mathematics', demand: 5, supply: 6, category: 'balanced' },
    { name: 'Music', demand: 3, supply: 8, category: 'high-supply' },
    { name: 'Public Speaking', demand: 4, supply: 7, category: 'high-supply' },
    { name: 'React', demand: 8, supply: 4, category: 'high-demand' },
    { name: 'Data Science', demand: 7, supply: 3, category: 'high-demand' },
  ];

  const getColor = (cat) => {
    if (cat === 'high-demand') return 'bg-red-500';
    if (cat === 'balanced') return 'bg-yellow-400';
    return 'bg-emerald-500';
  };

  const getSize = (demand) => {
    if (demand >= 12) return 'text-2xl px-8 py-5';
    if (demand >= 8) return 'text-xl px-6 py-4';
    if (demand >= 5) return 'text-base px-5 py-3';
    return 'text-sm px-4 py-2.5';
  };

  return (
    <div className="space-y-8 py-4">
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold text-slate-900">Campus Skill Heat Map 🗺️</h1>
        <p className="text-slate-500">See which skills are in high demand and which have plenty of helpers</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { label: 'High Demand 🔴', color: 'bg-red-500' },
          { label: 'Balanced 🟡', color: 'bg-yellow-400' },
          { label: 'High Supply 🟢', color: 'bg-emerald-500' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-full ${l.color}`}></div>
            <span className="text-sm font-medium text-slate-700">{l.label}</span>
          </div>
        ))}
      </div>

      {/* Heat Map Bubbles */}
      <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {skills.map(skill => (
            <div
              key={skill.name}
              className={`${getColor(skill.category)} ${getSize(skill.demand)} text-white rounded-full font-bold text-center cursor-default hover:scale-110 transition-transform shadow-md`}
              title={`Demand: ${skill.demand} | Supply: ${skill.supply}`}
            >
              {skill.name}
              <div className="text-xs font-normal opacity-80 mt-0.5">{skill.demand} requests</div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid View */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* High Demand */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <h3 className="font-bold text-red-600 text-lg mb-3 flex items-center gap-2">🔴 High Demand</h3>
          <div className="space-y-2">
            {skills.filter(s => s.category === 'high-demand').map(s => (
              <div key={s.name} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-red-100">
                <span className="font-medium text-slate-800 text-sm">{s.name}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-red-400 rounded-full" style={{ width: `${s.demand * 5}px` }}></div>
                  <span className="text-xs text-red-600 font-bold">{s.demand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Balanced */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <h3 className="font-bold text-yellow-700 text-lg mb-3 flex items-center gap-2">🟡 Balanced</h3>
          <div className="space-y-2">
            {skills.filter(s => s.category === 'balanced').map(s => (
              <div key={s.name} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-yellow-100">
                <span className="font-medium text-slate-800 text-sm">{s.name}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-yellow-400 rounded-full" style={{ width: `${s.demand * 5}px` }}></div>
                  <span className="text-xs text-yellow-700 font-bold">{s.demand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High Supply */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
          <h3 className="font-bold text-emerald-600 text-lg mb-3 flex items-center gap-2">🟢 High Supply</h3>
          <div className="space-y-2">
            {skills.filter(s => s.category === 'high-supply').map(s => (
              <div key={s.name} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-emerald-100">
                <span className="font-medium text-slate-800 text-sm">{s.name}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-emerald-400 rounded-full" style={{ width: `${s.supply * 5}px` }}></div>
                  <span className="text-xs text-emerald-600 font-bold">{s.supply} helpers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insight */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5">
        <h3 className="font-bold text-primary text-lg mb-3">💡 Campus Insights</h3>
        <div className="space-y-2">
          <p className="text-slate-700 text-sm">🔥 <strong>Python</strong> has 3x more demand than supply! Great opportunity for Python experts.</p>
          <p className="text-slate-700 text-sm">🎯 <strong>UI Design</strong> is the most requested skill — only 4 helpers available for 10 requests.</p>
          <p className="text-slate-700 text-sm">🎸 <strong>Music</strong> has 8 helpers but only 3 learners — if you want to learn, now's the time!</p>
        </div>
      </div>
    </div>
  );
}
