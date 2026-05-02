import React from 'react';

const DashboardHeader = ({ title, showNewProjectBtn, isDarkMode, onToggleTheme, children }) => {
  const theme = {
    header: isDarkMode ? 'bg-[#151d1a]/85 border-white/10' : 'bg-white border-gray-100',
    title: isDarkMode ? 'text-[#b9c4bd]' : 'text-grad-gray-600',
    input: isDarkMode ? 'bg-white/5 text-[#F8F7F2] placeholder-[#8f9b94]' : 'bg-gray-50 text-gray-900 placeholder-gray-400',
    divider: isDarkMode ? 'bg-white/10' : 'bg-gray-200',
    subtext: isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400',
  };

  return (
    <header className={`h-20 border-b flex items-center justify-between px-10 sticky top-0 z-50 backdrop-blur-xl transition-colors duration-500 ${theme.header}`}>
      <div className="flex items-center gap-4">
        <h2 className={`text-sm font-bold uppercase tracking-widest transition-colors ${theme.title}`}>{title}</h2>
        <div className={`h-4 w-px transition-colors ${theme.divider}`}></div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search projects ..."
            className={`pl-10 pr-4 py-2 border-none rounded-full text-sm w-80 focus:ring-2 focus:ring-grad-green/10 outline-none transition-all ${theme.input}`}
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {children}

        {onToggleTheme && (
          <button 
            onClick={onToggleTheme}
            className={`p-2 rounded-xl transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/5 text-amber-300 hover:bg-white/10' 
                : 'bg-gray-50 text-grad-green hover:bg-gray-100 shadow-sm'
            }`}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        )}

        <button className="relative p-2 text-gray-400 hover:text-grad-green transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {showNewProjectBtn && (
          <button className="flex items-center gap-2 bg-grad-green text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-grad-green-dark transition-all shadow-lg shadow-grad-green/10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            New Project
          </button>
        )}

        <div className={`flex items-center gap-3 pl-6 border-l transition-colors ${theme.divider}`}>
          <div className="text-right hidden xl:block">
            <p className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${theme.subtext}`}>Faculty of IT & CS</p>
            <p className="text-xs font-bold text-grad-green">Yarmouk University</p>
          </div>
          <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
            <img
              src="https://9afi.com/thumb/1130x636/storage/blogs/9gVEvnfB3YFvOpxVlc1EeFQpYMT76q0powhnXeaD.png"
              alt="YU Logo"
              className="w-full h-full object-contain scale-[2.2]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
