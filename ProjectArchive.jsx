import React, { useMemo, useState } from 'react';

const projectsSeed = [
  {
    id: 1,
    image: '/drone.jpg',
    category: 'ENGINEERING',
    year: '2023',
    semester: '2023/2024-2',
    title: 'Autonomous Drone Navigation',
    description: 'Implementing SLAM algorithms for real-time obstacle avoidance in complex indoor environments with adaptive routing.',
    supervisor: { name: 'Dr. Robert Fox', avatar: 'https://i.pravatar.cc/150?u=robert' },
    team: 'Solo Project',
    status: 'Published',
    showActions: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    category: 'HEALTH SCIENCES',
    year: '2023',
    semester: '2023/2024-1',
    title: 'AI in Healthcare Diagnostics',
    description: 'Predictive modeling for early detection of cardiac anomalies using wearable sensor streams and explainable AI pipelines.',
    supervisor: { name: 'Dr. Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    team: 'Layan Ahmad, Hala Khalaf',
    status: 'Published',
    showActions: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    category: 'INFORMATION SYSTEMS',
    year: '2022',
    semester: '2022/2023-2',
    title: 'Blockchain for Supply Chain',
    description: 'Developing a decentralized ledger system for end-to-end transparency in pharmaceutical logistics and auditing.',
    supervisor: { name: 'Prof. James Bond', avatar: 'https://i.pravatar.cc/150?u=james' },
    team: 'Ahmad Saleh, Omar Adwan',
    status: 'Archived',
    showActions: false,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    category: 'CIVIL ENGINEERING',
    year: '2023',
    semester: '2023/2024-2',
    title: 'Sustainable Infrastructure',
    description: 'Developing new concrete mixtures utilizing recycled plastics to reduce carbon footprint in infrastructure projects.',
    supervisor: { name: 'Dr. Emily White', avatar: 'https://i.pravatar.cc/150?u=emily' },
    team: 'Razan Sami, Ali Obeidat',
    status: 'Published',
    showActions: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    category: 'DATA SCIENCE',
    year: '2023',
    semester: '2023/2024-1',
    title: 'Predictive Climate Modeling',
    description: 'Utilizing machine learning networks to improve long-term weather anomaly predictions and climate pattern analysis.',
    supervisor: { name: 'Dr. Alan Turing', avatar: 'https://i.pravatar.cc/150?u=alan' },
    team: 'Masa Al-Hourani, Nour Khasawneh, Yazan Haddad',
    status: 'Featured',
    showActions: true,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200',
    category: 'SOFTWARE ENGINEERING',
    year: '2024',
    semester: '2024/2025-1',
    title: 'Smart Campus Services Platform',
    description: 'A service platform that unifies transportation, facility booking, and student support workflows in one smart dashboard.',
    supervisor: { name: 'Dr. Rami Malkawi', avatar: 'https://i.pravatar.cc/150?u=rami' },
    team: 'Bashar Al-Sharif, Amjad Al-Qudah',
    status: 'New',
    showActions: true,
  },
];

const YarmoukLogo = ({ className = 'h-12 w-12' }) => (
  <img
    src="/yu-logo.png"
    alt="Yarmouk University"
    className={className}
  />
);

const ArchivePill = ({ children, tone = 'default' }) => {
  const toneMap = {
    default: 'border-[#EBEAE4] bg-white text-grad-gray-900',
    green: 'border-[#dce9e2] bg-[#edf6f1] text-[#1a4231]',
    amber: 'border-amber-200 bg-amber-50 text-amber-700',
    dark: 'border-white/10 bg-white/5 text-[#F8F7F2]',
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] ${toneMap[tone]}`}>
      {children}
    </span>
  );
};

const ViewIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const PlayIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const EditIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const DeleteIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const CalendarIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const SupervisorIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SearchIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const DetailModal = ({ project, onClose, isDarkMode }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
      <button type="button" onClick={onClose} className={`absolute inset-0 backdrop-blur-md transition-colors ${isDarkMode ? 'bg-black/55' : 'bg-[#151d1a]/35'}`} />
      <div className={`motion-card relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] border shadow-2xl transition-colors duration-500 ${isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/40' : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-900/15'}`}>
        <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <div className="relative min-h-[320px] bg-[#e8ece9]">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute left-6 top-6 flex flex-wrap gap-2">
              <ArchivePill tone="green">{project.category}</ArchivePill>
              <ArchivePill tone="amber">{project.year}</ArchivePill>
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/20 bg-black/20 p-4 backdrop-blur-md">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/80">Project overview</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-white">{project.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-white/85">{project.description}</p>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm transition-colors ${isDarkMode ? 'border-white/10 bg-[#1d2823]/80' : 'border-[#EBEAE4] bg-white'}`}>
                  <YarmoukLogo className="h-11 w-11 object-contain" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">GradArchive · Yarmouk University</p>
                  <h4 className={`text-xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>Project Details</h4>
                </div>
              </div>

              <button type="button" onClick={onClose} className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all hover:-translate-y-0.5 ${isDarkMode ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10' : 'border-[#EBEAE4] bg-white text-grad-gray-900 hover:bg-[#F8F7F2]'}`}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Description</p>
              <p className={`text-base font-medium leading-7 transition-colors ${isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-600'}`}>{project.description}</p>
            </div>

            <div className={`mt-5 rounded-[1.75rem] border p-5 shadow-sm transition-colors ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-[#EBEAE4] bg-white/80'}`}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className={`rounded-2xl p-4 transition-colors ${isDarkMode ? 'bg-white/5' : 'bg-[#F8F7F2]'}`}>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Supervisor</p>
                  <div className="flex items-center gap-3">
                    <img src={project.supervisor.avatar} alt={project.supervisor.name} className={`h-10 w-10 rounded-full border object-cover ${isDarkMode ? 'border-white/10' : 'border-[#EBEAE4]'}`} />
                    <p className={`text-lg font-black transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{project.supervisor.name}</p>
                  </div>
                </div>

                <div className={`rounded-2xl p-4 transition-colors ${isDarkMode ? 'bg-white/5' : 'bg-[#F8F7F2]'}`}>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Semester</p>
                  <p className={`text-lg font-black transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{project.semester}</p>
                </div>

                <div className={`sm:col-span-2 rounded-2xl p-4 transition-colors ${isDarkMode ? 'bg-white/5' : 'bg-[#F8F7F2]'}`}>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Project Team</p>
                  <div className="flex flex-wrap gap-2">
                    {project.team === 'Solo Project'
                      ? <span className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-bold transition-colors ${isDarkMode ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-[#dce9e2] bg-[#edf6f1] text-[#1a4231]'}`}>Solo Project</span>
                      : project.team.split(',').map((member) => (
                          <span key={member.trim()} className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-bold transition-colors ${isDarkMode ? 'border-white/10 bg-[#1d2823] text-[#F8F7F2]' : 'border-[#EBEAE4] bg-white text-grad-gray-900'}`}>
                            {member.trim()}
                          </span>
                        ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-5 rounded-[1.5rem] border p-4 transition-colors ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-[#EBEAE4] bg-[#F8F7F2]'}`}>
              <p className={`text-sm font-black transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>Archive Note</p>
              <p className={`mt-1 text-sm font-medium leading-6 transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-500'}`}>
                This modal is frontend-ready and styled for GradArchive. Your backend teammate can later connect it to dynamic project data and API endpoints.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-[#1a4231] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#1a4231]/15 transition-all hover:-translate-y-0.5 hover:bg-[#123326]">
                <PlayIcon className="h-4 w-4" />
                Watch Demo
              </button>
              <button type="button" onClick={onClose} className={`inline-flex items-center justify-center rounded-2xl border px-6 py-4 text-sm font-black transition-all hover:-translate-y-0.5 ${isDarkMode ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10' : 'border-[#EBEAE4] bg-white text-grad-gray-900 hover:bg-[#F8F7F2]'}`}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectArchive = ({ onNavigate, isDarkMode, onToggleTheme }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const projects = useMemo(() => {
    if (!searchTerm.trim()) return projectsSeed;
    const term = searchTerm.toLowerCase();
    return projectsSeed.filter((project) =>
      project.title.toLowerCase().includes(term) ||
      project.category.toLowerCase().includes(term) ||
      project.supervisor.name.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#151d1a] text-[#F8F7F2]' : 'bg-[#F4F1EA] text-grad-gray-900'}`}>
      <style>{`
        .motion-card { animation: archiveCardIn 700ms cubic-bezier(.22,1,.36,1) both; }
        .motion-card-delay { animation: archiveCardIn 850ms cubic-bezier(.22,1,.36,1) both; }
        .motion-float { animation: archiveFloat 7s ease-in-out infinite; }
        .motion-shine { animation: archiveShine 5s ease-in-out infinite; }
        @keyframes archiveCardIn { 0% { opacity: 0; transform: translateY(18px) scale(.985); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes archiveFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes archiveShine { 0% { transform: translateX(-100%); opacity: 0; } 20% { opacity: 1; } 50% { transform: translateX(100%); opacity: .9; } 100% { transform: translateX(220%); opacity: 0; } }
      `}</style>

      <div className="relative overflow-hidden border-b border-white/20 bg-[radial-gradient(circle_at_top_left,_rgba(26,66,49,0.18),_transparent_30%),linear-gradient(135deg,_#0f201a,_#122820_55%,_#183328)]">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl motion-float" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl motion-float" />
        <nav className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <div className="flex min-w-0 items-center gap-6">
            <button onClick={() => onNavigate?.('student-dash')} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 shadow-sm">
                <YarmoukLogo className="h-10 w-10 object-contain" />
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#b9c4bd]">GradArchive · YU</p>
                <p className="text-lg font-black tracking-tight text-[#F8F7F2]">ProjectArchive</p>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
              <button onClick={() => onNavigate?.('student-dash')} className="rounded-full px-4 py-2 text-sm font-bold text-[#b9c4bd] transition-colors hover:text-white">Home</button>
              <button className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#1a4231] shadow-sm">Archive</button>
              <button className="rounded-full px-4 py-2 text-sm font-bold text-[#b9c4bd] transition-colors hover:text-white">Supervisors</button>
              <button className="rounded-full px-4 py-2 text-sm font-bold text-[#b9c4bd] transition-colors hover:text-white">Resources</button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8f9b94]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search projects, categories, or supervisors..."
                className="w-[320px] rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm font-medium text-[#F8F7F2] outline-none backdrop-blur-md placeholder:text-[#8f9b94] transition-all focus:ring-4 focus:ring-white/10"
              />
            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
              <img src="https://i.pravatar.cc/150?u=robert" alt="Dr. Robert Fox" className="h-11 w-11 rounded-full border border-white/10 object-cover" />
              <div className="hidden xl:block text-right">
                <p className="text-xs font-black text-[#F8F7F2]">Dr. Robert Fox</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f9b94]">Senior Supervisor</p>
              </div>
            </div>

            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 ${
                  isDarkMode 
                    ? 'border-white/10 bg-white/5 text-amber-300 hover:bg-white/10' 
                    : 'border-white/10 bg-white/5 text-[#b9c4bd] hover:text-white hover:bg-white/10'
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
          </div>
        </nav>

        <section className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
            <div className="motion-card max-w-3xl">
              <ArchivePill tone="dark"><span className="h-2 w-2 rounded-full bg-amber-400" />Academic Repository</ArchivePill>
              <h1 className="mt-6 text-5xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
                <span className="block text-[#F8F7F2]">Projects</span>
                <span className="block text-[#d2ad63]">Archive</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#b9c4bd]">
                Browse Yarmouk University graduation projects through a GradArchive interface that stays consistent with the rest of your platform.
              </p>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="motion-card relative flex h-[220px] w-[220px] items-center justify-center p-6">
                <YarmoukLogo className="relative h-full w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.25)]" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto max-w-[1400px] px-6 py-10 lg:px-8">
        <section className={`motion-card-delay rounded-[2rem] border p-5 sm:p-6 transition-colors duration-500 ${isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/25' : 'border-[#EBEAE4] bg-[#FAF9F6] shadow-[0_18px_50px_rgba(15,23,42,0.06)]'}`}>
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Archive controls</p>
              <h2 className={`mt-2 text-2xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>Refine your archive view</h2>
            </div>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-[#1a4231] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#1a4231]/15 transition-all hover:-translate-y-0.5 hover:bg-[#123326]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
              Upload Project
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${isDarkMode ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10' : 'border-[#EBEAE4] bg-white text-grad-gray-900 hover:bg-[#F8F7F2]'}`}><CalendarIcon className="h-4 w-4 text-gray-400" />All Years</button>
            <button className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${isDarkMode ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10' : 'border-[#EBEAE4] bg-white text-grad-gray-900 hover:bg-[#F8F7F2]'}`}>
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              All Categories
            </button>
            <button className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${isDarkMode ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10' : 'border-[#EBEAE4] bg-white text-grad-gray-900 hover:bg-[#F8F7F2]'}`}><SupervisorIcon className="h-4 w-4 text-gray-400" />All Supervisors</button>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.id} className={`motion-card group relative overflow-hidden rounded-[2rem] border transition-all duration-300 hover:-translate-y-1.5 ${isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/25 hover:shadow-black/40' : 'border-[#EBEAE4] bg-[#FAF9F6] shadow-[0_14px_40px_rgba(15,23,42,0.05)] hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)]'}`} style={{ animationDelay: `${index * 80}ms` }}>
              <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
              <div className="relative h-60 overflow-hidden bg-[#e6ebe7]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#1a4231] backdrop-blur-md">{project.category}</span>
                  <span className="rounded-full bg-black/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">{project.year}</span>
                </div>
                {project.showActions && (
                  <div className="absolute right-5 top-5 flex gap-2">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-grad-gray-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-white"><EditIcon className="h-4 w-4" /></button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d54b4b] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#bf3737]"><DeleteIcon className="h-4 w-4" /></button>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-colors ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-[#EBEAE4] bg-white'}`}>
                      <YarmoukLogo className="h-9 w-9 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">Yarmouk University</p>
                      <p className="truncate text-sm font-black text-[#1a4231]">GradArchive</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] transition-colors ${isDarkMode ? 'bg-emerald-500/15 text-emerald-200' : 'bg-[#edf6f1] text-[#1a4231]'}`}>{project.status}</span>
                </div>

                <h3 className={`text-xl font-black leading-tight tracking-tight transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{project.title}</h3>
                <p className={`mt-3 min-h-[72px] text-sm font-medium leading-7 transition-colors ${isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-500'}`}>{project.description}</p>

                <div className="mt-5 grid gap-3">
                  <div className={`flex items-center gap-3 rounded-2xl p-3 transition-colors ${isDarkMode ? 'bg-white/5' : 'bg-white'}`}>
                    <img src={project.supervisor.avatar} alt={project.supervisor.name} className={`h-10 w-10 rounded-full border object-cover ${isDarkMode ? 'border-white/10' : 'border-[#EBEAE4]'}`} />
                    <div className="min-w-0">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">Supervisor</p>
                      <p className={`truncate text-sm font-black transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{project.supervisor.name}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className={`rounded-2xl p-3 transition-colors ${isDarkMode ? 'bg-white/5' : 'bg-white'}`}>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">Semester</p>
                      <p className={`mt-1 text-sm font-black transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{project.semester}</p>
                    </div>
                    <div className={`rounded-2xl p-3 transition-colors ${isDarkMode ? 'bg-white/5' : 'bg-white'}`}>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400">Team</p>
                      <p className={`mt-1 truncate text-sm font-black transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>{project.team}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className={`inline-flex items-center justify-center gap-2 rounded-2xl border py-3 text-sm font-black transition-all hover:-translate-y-0.5 ${isDarkMode ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10' : 'border-[#EBEAE4] bg-white text-grad-gray-900 hover:bg-[#F8F7F2]'}`}><PlayIcon className="h-4 w-4" />Watch Demo</button>
                  <button type="button" onClick={() => setSelectedProject(project)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1a4231] py-3 text-sm font-black text-white shadow-lg shadow-[#1a4231]/15 transition-all hover:-translate-y-0.5 hover:bg-[#123326]"><ViewIcon className="h-4 w-4" />View Details</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {selectedProject && <DetailModal project={selectedProject} onClose={() => setSelectedProject(null)} isDarkMode={isDarkMode} />}
    </div>
  );
};

export default ProjectArchive;
