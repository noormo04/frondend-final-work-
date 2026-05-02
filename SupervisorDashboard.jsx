import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

const StatCard = ({ label, value, trend, icon, color, isDarkMode, delay }) => (
  <div className={`motion-card relative overflow-hidden p-6 rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 ${isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/25' : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-200/40'}`} style={{ animationDelay: `${delay}ms` }}>
    <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
    <div className="relative flex items-start justify-between">
      <div>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </div>
        <p className={`text-[10px] font-black uppercase tracking-wider mb-1 transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>{label}</p>
        <h3 className={`text-2xl font-black transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{value}</h3>
      </div>
      <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${trend.startsWith('+') ? (isDarkMode ? 'bg-emerald-500/15 text-emerald-200' : 'bg-green-50 text-green-600') : (isDarkMode ? 'bg-amber-300/10 text-amber-200' : 'bg-amber-50 text-amber-600')}`}>
        {trend}
      </div>
    </div>
  </div>
);

const SupervisorDashboard = ({ onNavigate, isDarkMode, onToggleTheme }) => {
  const stats = [
    { label: 'Total Projects', value: '42', trend: '+5%', color: 'bg-[#1a4231]', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' },
    { label: 'Supervised Projects', value: '12', trend: '+2%', color: 'bg-[#8a6327]', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { label: 'Pending Approvals', value: '08', trend: 'Active', color: 'bg-[#c5a059]', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Completed Terms', value: '156', trend: 'Archive', color: 'bg-[#2d5a47]', icon: 'M5 13l4 4L19 7' },
  ];

  const pendingRequests = [
    { name: 'Alice Schmidt', project: 'AI-Driven Traffic Optimization System', date: 'Oct 24, 2023', initials: 'AS', color: 'bg-[#1a4231]' },
    { name: 'John Doe', project: 'Blockchain for Supply Chain Transpare...', date: 'Oct 22, 2023', initials: 'JD', color: 'bg-[#c5a059]' },
    { name: 'Maria Lopez', project: 'Decentralized E-Voting Architecture', date: 'Oct 20, 2023', initials: 'ML', color: 'bg-[#8a6327]' },
    { name: 'Kevin Wang', project: 'Smart Grid Energy Consumption Predic...', date: 'Oct 19, 2023', initials: 'KW', color: 'bg-[#2d5a47]' },
  ];

  return (
    <div className={`flex min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#111a16] text-[#F8F7F2]' : 'bg-[#F8F7F2] text-grad-gray-900'}`}>
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(20px, -24px, 0) scale(1.08); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-18px, 18px, 0) scale(0.96); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .motion-bg-one { animation: floatSlow 12s ease-in-out infinite; }
        .motion-bg-two { animation: floatReverse 14s ease-in-out infinite; }
        .motion-card { animation: cardIn 650ms cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`motion-bg-one absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl ${isDarkMode ? 'bg-[#6ee7b7]/10' : 'bg-[#1a4231]/10'}`} />
        <div className={`motion-bg-two absolute top-24 right-0 h-80 w-80 rounded-full blur-3xl ${isDarkMode ? 'bg-amber-400/10' : 'bg-amber-500/10'}`} />
        <div className={`absolute bottom-10 left-1/3 h-64 w-64 rounded-full blur-3xl ${isDarkMode ? 'bg-[#1a4231]/30' : 'bg-white/70'}`} />
      </div>

      <Sidebar 
        role="supervisor" 
        activeTab="overview" 
        user={{ name: 'Dr. Robert Chen', subtext: 'Computer Science Dept.', initials: 'RC' }} 
        isDarkMode={isDarkMode}
        onTabClick={(tabId) => {
          if (tabId === 'archive' && onNavigate) onNavigate('archive');
        }}
      />
      
      <main className="relative z-10 flex-grow flex flex-col">
        <DashboardHeader title="SUPERVISOR CONSOLE" showNewProjectBtn={true} isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
        
        <div className="p-10 space-y-10 max-w-[1600px]">
          {/* Welcome Area */}
          <div className="motion-card">
            <h1 className={`text-3xl font-black mb-2 transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>Dashboard Overview</h1>
            <p className={`font-medium italic transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>Welcome back, Dr. Chen. Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => <StatCard key={stat.label} {...stat} isDarkMode={isDarkMode} delay={i * 100} />)}
          </div>

          {/* Pending Requests Table */}
          <div className={`motion-card relative overflow-hidden rounded-[2rem] border transition-all duration-300 ${isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/25' : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-200/40'}`} style={{ animationDelay: '400ms' }}>
            <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent z-10" />
            <div className={`relative p-8 flex items-center justify-between border-b transition-colors ${isDarkMode ? 'border-white/10' : 'border-gray-50'}`}>
              <h4 className={`text-sm font-bold uppercase tracking-wider transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>Pending Requests</h4>
              <button className={`text-xs font-bold transition-all ${isDarkMode ? 'text-[#8f9b94] hover:text-[#F8F7F2]' : 'text-gray-400 hover:text-grad-green'}`}>View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className={`text-[10px] font-black uppercase tracking-widest border-b transition-colors ${isDarkMode ? 'border-white/10 bg-white/5 text-[#8f9b94]' : 'border-gray-50 bg-gray-50/30 text-gray-400'}`}>
                    <th className="px-8 py-4">Student Name</th>
                    <th className="px-8 py-4">Project Title</th>
                    <th className="px-8 py-4">Date Sent</th>
                    <th className="px-8 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className={`divide-y transition-colors ${isDarkMode ? 'divide-white/10' : 'divide-gray-50'}`}>
                  {pendingRequests.map((req) => (
                    <tr key={req.name} className={`transition-all ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50/50'}`}>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${req.color} text-white text-[10px] font-bold flex items-center justify-center`}>
                            {req.initials}
                          </div>
                          <span className={`text-sm font-bold transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{req.name}</span>
                        </div>
                      </td>
                      <td className={`px-8 py-5 text-sm font-medium transition-colors ${isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-500'}`}>{req.project}</td>
                      <td className={`px-8 py-5 text-xs font-bold uppercase transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>{req.date}</td>
                      <td className="px-8 py-5 text-right">
                        <button className={`px-4 py-2 text-[10px] font-bold rounded-xl transition-all border flex items-center gap-2 ml-auto ${isDarkMode ? 'border-white/10 bg-white/5 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500' : 'border-gray-100 bg-gray-50 text-grad-green hover:bg-grad-green hover:text-white'}`}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Run Similarity
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Upcoming Milestones */}
            <div className={`motion-card relative overflow-hidden p-8 rounded-[2rem] border transition-all duration-300 ${isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/25' : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-200/40'}`} style={{ animationDelay: '500ms' }}>
              <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
              <h4 className={`relative text-sm font-bold uppercase tracking-wider mb-8 flex items-center gap-2 transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Milestones
              </h4>
              <div className="space-y-6">
                {[
                  { date: 'OCT 28', title: 'Initial Proposal Review', desc: 'Review batch of 5 new proposals from CS Dept.', color: 'text-emerald-500' },
                  { date: 'NOV 02', title: 'Interim Progress Report', desc: 'Second year students submission deadline.', color: 'text-blue-500' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 group">
                    <div className="text-center min-w-[60px]">
                      <p className={`text-[10px] font-black ${item.color} uppercase`}>{item.date.split(' ')[0]}</p>
                      <p className={`text-2xl font-black transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{item.date.split(' ')[1]}</p>
                    </div>
                    <div className={`flex-grow p-4 rounded-2xl transition-all ${isDarkMode ? 'bg-white/5 group-hover:bg-white/10' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
                      <h6 className={`text-sm font-bold mb-1 transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{item.title}</h6>
                      <p className={`text-xs font-medium transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Messages */}
            <div className={`motion-card relative overflow-hidden p-8 rounded-[2rem] border transition-all duration-300 ${isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/25' : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-200/40'}`} style={{ animationDelay: '600ms' }}>
              <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
              <h4 className={`relative text-sm font-bold uppercase tracking-wider mb-8 flex items-center gap-2 transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Quick Messages
              </h4>
              <div className="space-y-6 mb-8">
                {[
                  { name: 'Sarah Jenkins', msg: 'Dr. Robert, I\'ve updated the methodology section...', time: '10m ago' },
                  { name: 'Mark Thompson', msg: 'Thank you for the feedback on the diagrams.', time: '2h ago' },
                ].map((msg) => (
                  <div key={msg.name} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex-shrink-0 transition-colors ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`}></div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`text-xs font-bold transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{msg.name}</p>
                        <p className={`text-[10px] font-medium transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>{msg.time}</p>
                      </div>
                      <p className={`text-xs truncate w-full transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>{msg.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className={`w-full py-3 text-xs font-bold rounded-xl transition-all border ${isDarkMode ? 'border-white/10 bg-white/5 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500' : 'border-gray-100 bg-gray-50 text-grad-green hover:bg-grad-green hover:text-white'}`}>
                Open Inbox
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupervisorDashboard;
