import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
const StatCard = ({ label, value, trend, icon, accent, isDarkMode, delay = 0 }) => (
  <div
    className={`motion-card relative overflow-hidden rounded-[2rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      isDarkMode
        ? 'border-white/10 bg-[#1d2823]/95 shadow-black/25'
        : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-200/40'
    }`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />

    <div className="flex items-start justify-between gap-4">
      <div>
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </div>

        <p className={`mb-1 text-[10px] font-black uppercase tracking-[0.22em] ${
          isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'
        }`}>
          {label}
        </p>
        <h3 className={`text-2xl font-black ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
          {value}
        </h3>
      </div>

      <div className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
        isDarkMode ? 'bg-amber-300/10 text-amber-200' : 'bg-green-50 text-green-600'
      }`}>
        {trend}
      </div>
    </div>
  </div>
);

const DistributionBar = ({ label, value, max, isDarkMode, delay = 0 }) => {
  const height = `${(value / max) * 100}%`;

  return (
    <div className="flex w-full flex-col items-center gap-3 group">
      <div className={`h-4 text-[10px] font-black leading-none transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 ${
        isDarkMode ? 'text-amber-200' : 'text-[#1a4231]'
      }`}>
        {value}
      </div>

      <div className={`relative flex h-56 w-full max-w-[56px] items-end overflow-hidden rounded-full p-1 ${
        isDarkMode ? 'bg-white/8' : 'bg-[#1a4231]/8'
      }`}>
        <div
          className="bar-rise w-full rounded-full bg-gradient-to-t from-[#1a4231] via-[#2d5a47] to-[#c5a059] shadow-lg shadow-[#1a4231]/20 group-hover:scale-x-110 transition-transform duration-300"
          style={{ height, animationDelay: `${delay}ms` }}
        />
      </div>

      <span className={`text-[10px] font-black uppercase tracking-[0.18em] ${
        isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'
      }`}>
        {label}
      </span>
    </div>
  );
};


const RequestEditIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.862 4.487l1.651-1.651a1.875 1.875 0 112.652 2.652L9.38 17.273 5.75 18.25l.977-3.63L16.862 4.487z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 7.125L16.875 4.5M18 14v5.25A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

const RequestTeamIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m8-4a4 4 0 100-8 4 4 0 000 8zM9 10a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);

const RequestStudentIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0118 16.5c0 1.657-2.686 3-6 3s-6-1.343-6-3c0-2.062.428-4.01 1.84-5.922L12 14z" />
  </svg>
);

const RequestCalendarIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M4 11h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);

const RequestTimerIcon = ({ className = 'h-4 w-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v5l3 2M9 2h6M12 22a8 8 0 100-16 8 8 0 000 16z" />
  </svg>
);


const ManageProjectTeamModal = ({ request, isDarkMode, onClose, onSave }) => {
  // Frontend placeholder data. Replace this array with API results later.
  const studentOptions = [
    { id: 1, name: 'Omar Daraghmeh', status: 'Engaged' },
    { id: 2, name: 'Ali Sami', status: 'Available' },
    { id: 3, name: 'Noor Fadi', status: 'Engaged' },
    { id: 4, name: 'Rami Jamal', status: 'Available' },
    { id: 5, name: 'Bashar Al-Sharif', status: 'Available' },
    { id: 6, name: 'Amjad Al-Qudah', status: 'Available' },
    { id: 7, name: 'Sara Ahmad', status: 'Available' },
    { id: 8, name: 'Leen Obeidat', status: 'Available' },
  ];

  const initialTeam = request.team
    .split(',')
    .map((member) => member.trim())
    .filter(Boolean);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState(initialTeam);

  const filteredStudents = studentOptions.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const canAddMore = selectedTeam.length < 4;
  const canSave = selectedTeam.length >= 2 && selectedTeam.length <= 4;

  const addStudent = (student) => {
    if (student.status === 'Engaged' || selectedTeam.includes(student.name) || !canAddMore) return;
    setSelectedTeam((team) => [...team, student.name]);
  };

  const removeStudent = (studentName) => {
    setSelectedTeam((team) => team.filter((member) => member !== studentName));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSave) return;
    onSave({
      ...request,
      team: selectedTeam.join(', '),
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close team management modal"
        onClick={onClose}
        className={`absolute inset-0 backdrop-blur-md transition-colors ${
          isDarkMode ? 'bg-black/55' : 'bg-[#151d1a]/25'
        }`}
      />

      <form
        onSubmit={handleSubmit}
        className={`motion-card relative z-10 w-full max-w-3xl overflow-hidden rounded-[2rem] border p-8 shadow-2xl transition-colors duration-500 sm:p-10 ${
          isDarkMode
            ? 'border-white/10 bg-[#1d2823]/95 shadow-black/40'
            : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-900/15'
        }`}
      >
        <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1a4231]/5" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-amber-400/10" />

        <div className="relative z-10">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm transition-colors ${
                isDarkMode
                  ? 'border-white/10 bg-[#1d2823]/80 text-[#b9c4bd]'
                  : 'border-[#EBEAE4] bg-[#FAF9F6]/80 text-gray-500'
              }`}>
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                  Team Manager
                </span>
              </div>

              <h3 className={`text-2xl font-black tracking-tight transition-colors ${
                isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'
              }`}>
                Manage Project Team
              </h3>
              <p className={`mt-2 text-sm font-medium leading-6 transition-colors ${
                isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-500'
              }`}>
                Add 2–4 colleagues to keep the total project team between 3 and 5 members including you.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-all hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10'
                  : 'border-[#EBEAE4] bg-white text-grad-gray-900 hover:bg-[#F8F7F2]'
              }`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <label className="block">
            <span className={`mb-2 block text-[10px] font-black uppercase tracking-[0.22em] ${
              isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'
            }`}>
              Search Students
            </span>
            <div className="relative">
              <RequestStudentIcon className={`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 ${
                isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'
              }`} />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className={`w-full rounded-2xl border py-4 pl-11 pr-5 text-sm font-semibold outline-none transition-all focus:ring-4 focus:ring-[#1a4231]/10 ${
                  isDarkMode
                    ? 'border-white/10 bg-[#111a16] text-[#F8F7F2] placeholder:text-[#728078]'
                    : 'border-[#EBEAE4] bg-white text-grad-gray-900 placeholder:text-gray-400'
                }`}
                placeholder="Search students..."
              />
            </div>
          </label>

          <div className={`mt-5 max-h-72 overflow-y-auto rounded-[1.5rem] border p-3 transition-colors ${
            isDarkMode
              ? 'border-white/10 bg-[#111a16]/70'
              : 'border-[#EBEAE4] bg-white/60'
          }`}>
            <div className="space-y-2">
              {filteredStudents.map((student) => {
                const isSelected = selectedTeam.includes(student.name);
                const isEngaged = student.status === 'Engaged';
                const isDisabled = isEngaged || isSelected || !canAddMore;

                return (
                  <button
                    key={student.id}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => addStudent(student)}
                    className={`flex w-full items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-left transition-all ${
                      isDarkMode
                        ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10'
                        : 'border-[#EBEAE4] bg-[#FAF9F6] text-grad-gray-900 hover:bg-white'
                    } ${isDisabled ? 'cursor-not-allowed opacity-60' : 'hover:-translate-y-0.5 hover:shadow-sm'}`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                        isDarkMode ? 'bg-white/10 text-amber-200' : 'bg-[#1a4231]/10 text-[#1a4231]'
                      }`}>
                        <RequestStudentIcon className="h-4 w-4" />
                      </span>
                      <span className="truncate text-sm font-bold">{student.name}</span>
                    </span>

                    <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${
                      isEngaged
                        ? isDarkMode ? 'bg-red-500/10 text-red-200' : 'bg-red-50 text-red-500'
                        : isSelected
                          ? isDarkMode ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-50 text-emerald-600'
                          : isDarkMode ? 'bg-amber-300/10 text-amber-200' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {isEngaged ? 'Engaged' : isSelected ? 'Selected' : 'Add'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className={`text-[10px] font-black uppercase tracking-[0.22em] ${
                isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'
              }`}>
                Selected Colleagues
              </span>
              <span className={`rounded-full px-3 py-1 text-[10px] font-black ${
                canSave
                  ? isDarkMode ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-50 text-emerald-600'
                  : isDarkMode ? 'bg-amber-300/10 text-amber-200' : 'bg-amber-50 text-amber-600'
              }`}>
                {selectedTeam.length + 1}/5 including you
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedTeam.map((member) => (
                <span
                  key={member}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                    isDarkMode
                      ? 'border-white/10 bg-white/5 text-[#F8F7F2]'
                      : 'border-[#EBEAE4] bg-white text-grad-gray-900'
                  }`}
                >
                  {member}
                  <button
                    type="button"
                    onClick={() => removeStudent(member)}
                    className="text-red-500 transition-transform hover:scale-110"
                    aria-label={`Remove ${member}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            {!canSave && (
              <p className={`mt-3 text-xs font-semibold ${
                isDarkMode ? 'text-amber-200' : 'text-amber-600'
              }`}>
                Select at least 2 colleagues. Maximum is 4 colleagues.
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={!canSave}
              className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#1a4231]/15 transition-all ${
                canSave
                  ? 'bg-[#1a4231] hover:-translate-y-0.5 hover:bg-[#123326]'
                  : 'cursor-not-allowed bg-[#1a4231]/45'
              }`}
            >
              <RequestTeamIcon className="h-4 w-4" />
              Save Team
            </button>

            <button
              type="button"
              onClick={onClose}
              className={`inline-flex items-center justify-center rounded-2xl border px-6 py-4 text-sm font-black transition-all hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10'
                  : 'border-[#EBEAE4] bg-[#F2F4F3] text-grad-gray-900 hover:bg-white'
              }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const EditProjectRequestModal = ({ request, isDarkMode, onClose, onSave }) => {
  const [title, setTitle] = useState(request.title);
  const [description, setDescription] = useState(request.description);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSave({
      ...request,
      title: title.trim() || request.title,
      description: description.trim() || request.description,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close edit request modal"
        onClick={onClose}
        className={`absolute inset-0 backdrop-blur-md transition-colors ${
          isDarkMode ? 'bg-black/55' : 'bg-[#151d1a]/25'
        }`}
      />

      <form
        onSubmit={handleSubmit}
        className={`motion-card relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border p-8 shadow-2xl transition-colors duration-500 sm:p-10 ${
          isDarkMode
            ? 'border-white/10 bg-[#1d2823]/95 shadow-black/40'
            : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-900/15'
        }`}
      >
        <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1a4231]/5" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-amber-400/10" />

        <div className="relative z-10">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm transition-colors ${
                isDarkMode
                  ? 'border-white/10 bg-[#1d2823]/80 text-[#b9c4bd]'
                  : 'border-[#EBEAE4] bg-[#FAF9F6]/80 text-gray-500'
              }`}>
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                  Request Editor
                </span>
              </div>

              <h3 className={`text-2xl font-black tracking-tight transition-colors ${
                isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'
              }`}>
                Edit Project Request
              </h3>
              <p className={`mt-2 text-sm font-medium leading-6 transition-colors ${
                isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-500'
              }`}>
                Update your project title and description while the request is still editable.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-all hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10'
                  : 'border-[#EBEAE4] bg-white text-grad-gray-900 hover:bg-[#F8F7F2]'
              }`}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className={`mb-2 block text-[10px] font-black uppercase tracking-[0.22em] ${
                isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'
              }`}>
                Project Title
              </span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className={`w-full rounded-2xl border px-5 py-4 text-sm font-semibold outline-none transition-all focus:ring-4 focus:ring-[#1a4231]/10 ${
                  isDarkMode
                    ? 'border-white/10 bg-[#111a16] text-[#F8F7F2] placeholder:text-[#728078]'
                    : 'border-[#EBEAE4] bg-white text-grad-gray-900 placeholder:text-gray-400'
                }`}
                placeholder="Project title"
              />
            </label>

            <label className="block">
              <span className={`mb-2 block text-[10px] font-black uppercase tracking-[0.22em] ${
                isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'
              }`}>
                Description
              </span>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={5}
                className={`w-full resize-none rounded-2xl border px-5 py-4 text-sm font-semibold leading-7 outline-none transition-all focus:ring-4 focus:ring-[#1a4231]/10 ${
                  isDarkMode
                    ? 'border-white/10 bg-[#111a16] text-[#F8F7F2] placeholder:text-[#728078]'
                    : 'border-[#EBEAE4] bg-white text-grad-gray-900 placeholder:text-gray-400'
                }`}
                placeholder="Short project description"
              />
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1a4231] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#1a4231]/15 transition-all hover:-translate-y-0.5 hover:bg-[#123326]"
            >
              <RequestEditIcon className="h-4 w-4" />
              Save Changes
            </button>

            <button
              type="button"
              onClick={onClose}
              className={`inline-flex items-center justify-center rounded-2xl border px-6 py-4 text-sm font-black transition-all hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10'
                  : 'border-[#EBEAE4] bg-[#F2F4F3] text-grad-gray-900 hover:bg-white'
              }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const ActiveRequestCard = ({ request, isDarkMode, onEditTeam, onEditDetails }) => (
  <div
    className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      isDarkMode
        ? 'border-white/10 bg-[#1d2823]/95 shadow-black/20'
        : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-200/30'
    }`}
  >
    <div className="motion-shine absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent" />
    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1a4231]/5 transition-transform duration-500 group-hover:scale-110" />
    <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-amber-400/10 transition-transform duration-500 group-hover:scale-110" />

    <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
      <div className="min-w-0 flex-1">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a4231] text-white shadow-lg shadow-[#1a4231]/15">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
            </svg>
          </div>

          <div>
            <h5 className={`text-xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
              {request.title}
            </h5>
            <p className={`mt-1 text-[10px] font-black uppercase tracking-[0.18em] transition-colors ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>
              Project request
            </p>
          </div>

          <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${
            isDarkMode ? 'bg-emerald-500/15 text-emerald-200' : 'bg-emerald-50 text-emerald-600'
          }`}>
            Active
          </span>

          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black ${
            isDarkMode ? 'bg-amber-300/10 text-amber-200' : 'bg-amber-50 text-amber-600'
          }`}>
            <RequestTimerIcon className="h-3.5 w-3.5" />
            {request.daysLeft} days left
          </span>
        </div>

        <p className={`mb-5 max-w-3xl text-sm font-medium leading-7 transition-colors ${isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-500'}`}>
          {request.description}
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          <div className={`rounded-2xl border px-4 py-3 transition-colors ${
            isDarkMode ? 'border-white/10 bg-white/5' : 'border-[#EBEAE4] bg-white/50'
          }`}>
            <p className={`mb-1 text-[10px] font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>
              Student
            </p>
            <p className={`flex items-center gap-2 text-sm font-bold ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
              <RequestStudentIcon className="h-4 w-4 text-[#1a4231]" />
              {request.owner}
            </p>
          </div>

          <div className={`rounded-2xl border px-4 py-3 transition-colors ${
            isDarkMode ? 'border-white/10 bg-white/5' : 'border-[#EBEAE4] bg-white/50'
          }`}>
            <p className={`mb-1 text-[10px] font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>
              Team
            </p>
            <p className={`flex items-center gap-2 text-sm font-bold ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
              <RequestTeamIcon className="h-4 w-4 text-[#1a4231]" />
              {request.team}
            </p>
          </div>

          <div className={`rounded-2xl border px-4 py-3 transition-colors ${
            isDarkMode ? 'border-white/10 bg-white/5' : 'border-[#EBEAE4] bg-white/50'
          }`}>
            <p className={`mb-1 text-[10px] font-black uppercase tracking-[0.18em] ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>
              Submitted
            </p>
            <p className={`flex items-center gap-2 text-sm font-bold ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
              <RequestCalendarIcon className="h-4 w-4 text-[#1a4231]" />
              {request.submitted}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 xl:w-auto xl:min-w-[170px]">
        <button
          onClick={() => onEditDetails && onEditDetails(request)}
          className="rounded-xl bg-[#1a4231] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#1a4231]/15 transition-all hover:-translate-y-0.5 hover:bg-[#123326]"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <RequestEditIcon className="h-4 w-4" />
            Edit Details
          </span>
        </button>
        <button
          onClick={() => onEditTeam && onEditTeam(request)}
          className={`rounded-xl border px-5 py-3 text-sm font-black transition-all hover:-translate-y-0.5 ${
            isDarkMode
              ? 'border-white/10 bg-white/5 text-[#F8F7F2] hover:bg-white/10'
              : 'border-[#EBEAE4] bg-[#FAF9F6] text-grad-gray-900 hover:bg-white'
          }`}
        >
          <span className="inline-flex items-center justify-center gap-2">
            <RequestTeamIcon className="h-4 w-4" />
            Edit Team
          </span>
        </button>
      </div>
    </div>
  </div>
);

const StudentDashboard = ({ onNavigate, isDarkMode = false, onToggleTheme }) => {
  const stats = [
    {
      label: 'Total Projects',
      value: '1,248',
      trend: '+12%',
      accent: 'bg-[#1a4231]',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    },
    {
      label: 'Active Trend',
      value: 'AI 45%',
      trend: '+5%',
      accent: 'bg-[#c5a059]',
      icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    },
  ];

  const categoryData = [
    { label: 'AI', value: 82 },
    { label: 'WEB', value: 68 },
    { label: 'MOBILE', value: 54 },
    { label: 'CYBER', value: 61 },
    { label: 'DATA', value: 47 },
    { label: 'IOT', value: 39 },
  ];

  const recentProjects = [
    { title: 'Smart Campus Navigation using Augmented Reality', batch: '2024', category: 'Artificial Intelligence', color: 'bg-[#1a4231]/10', text: 'text-[#1a4231]' },
    { title: 'Blockchain-based Secure E-Voting System', batch: '2024', category: 'Cyber Security', color: 'bg-[#c5a059]/15', text: 'text-[#8a6327]' },
    { title: 'Predictive Analysis of Student Academic Performance', batch: '2023', category: 'Data Science', color: 'bg-[#1a4231]/10', text: 'text-[#1a4231]' },
  ];

  const [activeRequests, setActiveRequests] = useState([
    {
      title: 'Sport and Fitness',
      description: 'About football history',
      owner: 'Rami Malkawi',
      team: 'Bashar Al-Sharif, Amjad Al-Qudah',
      submitted: '4/27/2026',
      daysLeft: 10,
    },
  ]);

  const [editingTeamRequest, setEditingTeamRequest] = useState(null);
  const [editingDetailsRequest, setEditingDetailsRequest] = useState(null);

  const handleSaveRequestDetails = (updatedRequest) => {
    setActiveRequests((requests) =>
      requests.map((request) =>
        request.title === editingDetailsRequest.title && request.submitted === editingDetailsRequest.submitted
          ? updatedRequest
          : request
      )
    );
    setEditingDetailsRequest(null);
  };

  const handleSaveTeam = (updatedRequest) => {
    setActiveRequests((requests) =>
      requests.map((request) =>
        request.title === editingTeamRequest.title && request.submitted === editingTeamRequest.submitted
          ? updatedRequest
          : request
      )
    );
    setEditingTeamRequest(null);
  };

  const maxValue = Math.max(...categoryData.map((item) => item.value));

  const theme = {
    page: isDarkMode ? 'bg-[#151d1a] text-[#F8F7F2]' : 'bg-[#F8F7F2] text-grad-gray-900',
    header: isDarkMode ? 'border-white/10 bg-[#151d1a]/85' : 'border-[#EBEAE4] bg-[#F8F7F2]/80',
    card: isDarkMode ? 'border-white/10 bg-[#1d2823]/95 shadow-black/25' : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-200/40',
    panel: isDarkMode ? 'border-white/10 bg-[#1d2823]/80' : 'border-[#EBEAE4] bg-[#FAF9F6]/80',
    text: isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900',
    muted: isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-400',
    faint: isDarkMode ? 'text-[#8f9b94]' : 'text-gray-300',
  };

  return (
    <div className={`relative flex min-h-screen overflow-hidden transition-colors duration-500 ${theme.page}`}>
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

        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes barRise {
          from { height: 0; opacity: 0.65; }
          to { opacity: 1; }
        }

        .motion-bg-one { animation: floatSlow 12s ease-in-out infinite; }
        .motion-bg-two { animation: floatReverse 14s ease-in-out infinite; }
        .motion-card { animation: cardIn 650ms cubic-bezier(0.22, 1, 0.36, 1) both; }

        .motion-shine::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
          animation: shimmer 4s ease-in-out infinite;
        }

        .bar-rise {
          animation: barRise 850ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .motion-bg-one,
          .motion-bg-two,
          .motion-card,
          .motion-shine::before,
          .bar-rise {
            animation: none !important;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`motion-bg-one absolute -top-24 -left-20 h-72 w-72 rounded-full blur-3xl ${isDarkMode ? 'bg-[#6ee7b7]/10' : 'bg-[#1a4231]/10'}`} />
        <div className={`motion-bg-two absolute top-24 right-0 h-80 w-80 rounded-full blur-3xl ${isDarkMode ? 'bg-amber-400/10' : 'bg-amber-500/10'}`} />
        <div className={`absolute bottom-10 left-1/3 h-64 w-64 rounded-full blur-3xl ${isDarkMode ? 'bg-[#1a4231]/30' : 'bg-white/70'}`} />
      </div>

      <Sidebar
        role="student"
        activeTab="home"
        user={{ name: 'Alex Johnson', subtext: "CS Senior '24", initials: 'AJ' }}
        isDarkMode={isDarkMode}
        onTabClick={(tabId) => {
          if (tabId === 'archive' && onNavigate) onNavigate('archive');
        }}
      />

      <main className="relative z-10 flex flex-grow flex-col">
        <DashboardHeader
          title="STUDENT DASHBOARD"
          isDarkMode={isDarkMode}
          onToggleTheme={onToggleTheme}
        />

        <div className="max-w-[1600px] space-y-10 p-8 lg:p-10">
          <div className="motion-card space-y-3">
            <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm transition-colors ${theme.panel}`}>
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className={`text-[10px] font-black uppercase tracking-[0.22em] ${isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-500'}`}>
                Student Workspace
              </span>
            </div>
            <div>
              <h1 className={`mb-2 text-3xl font-black transition-colors ${theme.text}`}>Welcome back, Student</h1>
              <p className={`font-medium italic transition-colors ${theme.muted}`}>Review your progress and manage your graduation project workflow.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} isDarkMode={isDarkMode} delay={120 + index * 120} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            <div className={`motion-card xl:col-span-2 rounded-[2rem] border p-8 shadow-sm transition-colors duration-500 ${theme.card}`} style={{ animationDelay: '220ms' }}>
              <div className="mb-10 flex items-start justify-between gap-4">
                <div className="max-w-2xl">
                  <h4 className={`text-sm font-black uppercase tracking-[0.22em] transition-colors ${theme.text}`}>Project Distribution by Category</h4>
                  <p className={`mt-3 text-sm font-medium leading-6 transition-colors ${theme.muted}`}>A quick overview of the most common graduation project categories.</p>
                </div>
                <div className={`shrink-0 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] ${
                  isDarkMode ? 'bg-amber-300/10 text-amber-200' : 'bg-[#1a4231]/8 text-grad-green'
                }`}>
                  Live Overview
                </div>
              </div>

              <div className="grid grid-cols-[40px_1fr] gap-4 pt-2">
                <div className={`flex h-72 flex-col justify-between pb-10 text-[10px] font-bold ${theme.faint}`}>
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 flex h-72 flex-col justify-between pb-10 pt-7">
                    {[0, 1, 2, 3, 4].map((item) => (
                      <div key={item} className={`border-t border-dashed ${isDarkMode ? 'border-white/10' : 'border-[#d9d5c9]'}`} />
                    ))}
                  </div>

                  <div className="relative flex h-72 items-end justify-between gap-4 pb-1 pt-7">
                    {categoryData.map((item, index) => (
                      <DistributionBar
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        max={maxValue}
                        isDarkMode={isDarkMode}
                        delay={300 + index * 80}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="motion-card relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b3f2c] via-[#0b4a32] to-[#163e31] p-8 text-white shadow-xl shadow-[#1a4231]/20" style={{ animationDelay: '320ms' }}>
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/6" />
              <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-amber-400/8" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div>
                  <h3 className="mb-4 text-2xl font-black leading-tight">Ready to Submit Your Project Request?</h3>
                  <p className="max-w-sm text-sm font-medium leading-7 text-[#cbe3d6]">
                    Start your graduation journey by sending your project request for review and approval through the department system.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate && onNavigate('archive')}
                  className="w-full rounded-xl bg-[#07281d] py-3 text-base font-black text-white transition-all hover:-translate-y-0.5 hover:bg-[#061e17]"
                >
                  Submit Project Request
                </button>
              </div>
            </div>
          </div>

          <div className="motion-card" style={{ animationDelay: '420ms' }}>
            <div className="mb-8 flex items-center justify-between">
              <h4 className={`text-sm font-black uppercase tracking-[0.22em] transition-colors ${theme.text}`}>Latest Added Projects</h4>
              <button
                onClick={() => onNavigate && onNavigate('archive')}
                className="flex items-center gap-2 text-sm font-bold text-grad-green transition-all hover:underline"
              >
                View All
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {recentProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group rounded-[2rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isDarkMode
                      ? 'border-white/10 bg-[#1d2823]/95 shadow-black/20'
                      : 'border-[#EBEAE4] bg-[#FAF9F6]/95 shadow-gray-200/30'
                  }`}
                  style={{ animationDelay: `${520 + index * 100}ms` }}
                >
                  <span className={`mb-4 inline-block rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wide ${
                    isDarkMode ? 'bg-amber-300/10 text-amber-200' : `${project.color} ${project.text}`
                  }`}>
                    {project.category}
                  </span>
                  <h5 className={`mb-6 font-bold transition-colors group-hover:text-grad-green ${isDarkMode ? 'text-[#F8F7F2]' : 'text-grad-gray-900'}`}>
                    {project.title}
                  </h5>
                  <div className="flex items-center justify-between">
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#8f9b94]' : 'text-gray-400'}`}>Batch: {project.batch}</p>
                    <div className="flex -space-x-2">
                      <div className="h-6 w-6 rounded-full border-2 border-white bg-gray-200" />
                      <div className="h-6 w-6 rounded-full border-2 border-white bg-gray-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="motion-card space-y-6" style={{ animationDelay: '540ms' }}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm transition-colors ${theme.panel}`}>
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className={`text-[10px] font-black uppercase tracking-[0.22em] ${isDarkMode ? 'text-[#b9c4bd]' : 'text-gray-500'}`}>
                    Request Center
                  </span>
                </div>
                <h4 className={`text-sm font-black uppercase tracking-[0.22em] transition-colors ${theme.text}`}>
                  My Active Requests
                </h4>
                <p className={`mt-2 max-w-2xl text-sm leading-6 transition-colors ${theme.muted}`}>
                  Track your submitted project requests and update details while the edit window is still open.
                </p>
              </div>

              <div className={`inline-flex items-center gap-2 self-start rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] shadow-sm transition-colors sm:self-auto ${
                isDarkMode
                  ? 'border-white/10 bg-[#1d2823]/80 text-[#b9c4bd]'
                  : 'border-[#EBEAE4] bg-[#FAF9F6]/80 text-gray-500'
              }`}>
                <RequestEditIcon className="h-3.5 w-3.5 text-amber-500" />
                Editable for 14 days after submission
              </div>
            </div>

            <div className="space-y-4">
              {activeRequests.map((request) => (
                <ActiveRequestCard
                  key={request.title}
                  request={request}
                  isDarkMode={isDarkMode}
                  onNavigate={onNavigate}
                  onEditTeam={setEditingTeamRequest}
                  onEditDetails={setEditingDetailsRequest}
                />
              ))}
            </div>
          </div>

          <footer className={`border-t pt-10 text-center transition-colors ${isDarkMode ? 'border-white/10' : 'border-gray-100'}`}>
            <p className={`text-[10px] font-medium uppercase tracking-[0.22em] transition-colors ${theme.muted}`}>© 2024 GradArchive. All academic rights reserved.</p>
          </footer>
        </div>
      </main>

      {editingTeamRequest && (
        <ManageProjectTeamModal
          request={editingTeamRequest}
          isDarkMode={isDarkMode}
          onClose={() => setEditingTeamRequest(null)}
          onSave={handleSaveTeam}
        />
      )}

      {editingDetailsRequest && (
        <EditProjectRequestModal
          request={editingDetailsRequest}
          isDarkMode={isDarkMode}
          onClose={() => setEditingDetailsRequest(null)}
          onSave={handleSaveRequestDetails}
        />
      )}
    </div>
  );
};

export default StudentDashboard;
