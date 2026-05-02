import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Sidebar = ({ role, activeTab, user, onTabClick, isDarkMode }) => {
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const menuItems = role === 'student'
    ? [
      { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { id: 'archive', label: 'Archive', icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2' },
      { id: 'messages', label: 'Messages', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
      { id: 'idea', label: 'Idea Request', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    ]
    : [
      { id: 'overview', label: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
      { id: 'manage', label: 'Manage Requests', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
      { id: 'archive', label: 'Archive', icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2' },
      { id: 'messages', label: 'Messages', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    ];

  return (
    <aside className={`w-72 border-r flex flex-col h-screen sticky top-0 transition-colors duration-500 ${isDarkMode ? 'bg-[#151d1a] border-white/10' : 'bg-white border-gray-100'}`}>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 overflow-hidden flex items-center justify-center">
            <img
              src="https://9afi.com/thumb/1130x636/storage/blogs/9gVEvnfB3YFvOpxVlc1EeFQpYMT76q0powhnXeaD.png"
              alt="YU Logo"
              className="w-full h-full object-contain scale-[2.5]"
            />
          </div>
          <div>
            <h1 className={`text-sm font-bold leading-tight transition-colors ${isDarkMode ? 'text-emerald-400' : 'text-grad-green'}`}>Grad Archive</h1>
            <p className={`text-[10px] font-semibold uppercase transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>{role === 'student' ? 'Student Portal' : 'Supervisor Console'}</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabClick && onTabClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === item.id
                  ? 'bg-[#1a4231] text-white shadow-lg shadow-[#1a4231]/20'
                  : isDarkMode
                    ? 'text-[#8f9b94] hover:bg-white/5 hover:text-[#F8F7F2]'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-grad-green'
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className={`mt-auto p-8 border-t flex flex-col gap-4 transition-colors ${isDarkMode ? 'border-white/10' : 'border-gray-50'}`}>
        <div className={`flex items-center gap-3 p-4 rounded-2xl transition-colors ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${isDarkMode ? 'bg-[#1a4231]/30 text-emerald-400' : 'bg-grad-green/10 text-grad-green'}`}>
            {user.initials}
          </div>
          <div className="overflow-hidden">
            <p className={`text-xs font-bold truncate transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{user.name}</p>
            <p className={`text-[10px] font-medium transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>{user.subtext}</p>
          </div>
        </div>

        <button
          onClick={() => setShowSignOutModal(true)}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-all ${isDarkMode ? 'bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white' : 'bg-red-50 text-red-500 hover:bg-red-500 hover:text-white'}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </button>
      </div>

      {showSignOutModal && createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            onClick={() => setShowSignOutModal(false)}
            className={`absolute inset-0 backdrop-blur-sm transition-colors ${isDarkMode ? 'bg-black/60' : 'bg-[#151d1a]/20'}`}
          />
          <div className={`motion-card relative z-10 w-full max-w-sm overflow-hidden rounded-[2rem] border p-8 text-center shadow-2xl transition-colors duration-300 ${isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/40' : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-900/15'}`}>
            <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${isDarkMode ? 'bg-red-500/20' : 'bg-red-50'}`}>
              <svg className={`h-8 w-8 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            <h3 className={`mb-2 text-xl font-black tracking-tight ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
              Ready to leave?
            </h3>
            <p className={`mb-8 text-sm font-medium leading-relaxed ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-500'}`}>
              Are you sure you want to sign out of the Grad Archive system? You will need to sign in again to access your portal.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setShowSignOutModal(false);
                  window.location.href = '/';
                }}
                className="w-full rounded-xl bg-red-500 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 hover:bg-red-600"
              >
                Yes, Sign Out
              </button>
              <button
                onClick={() => setShowSignOutModal(false)}
                className={`w-full rounded-xl px-5 py-3.5 text-sm font-black transition-all hover:-translate-y-0.5 ${isDarkMode ? 'bg-white/5 text-[#F8F7F2] hover:bg-white/10' : 'bg-white text-grad-gray-900 border border-[#EBEAE4] hover:bg-gray-50'}`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </aside>
  );
};

export default Sidebar;
