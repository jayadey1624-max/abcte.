import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AdminLayout } from '../../components/layout/AdminLayout';

export const AdminMeetingHistoryPage = () => {
  const { meetings } = useApp();
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const filters = ['All', 'Upcoming', 'Completed', 'Cancelled'];

  const filteredMeetings = meetings.filter((meeting) => {
    const matchesFilter = activeFilter === 'All' || meeting.status.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch =
      meeting.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meeting.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meeting.notes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <AdminLayout activeAdminTab="meetings">
      <div className="space-y-8">
        {/* Top Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-outline-variant/30">
          <div>
            <span className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant">
              Showroom Records
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-1">
              Meeting History
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Review and manage client consultations, bespoke requests, and appointment archives.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80 group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients or companies..."
              className="w-full bg-transparent border-b border-outline-variant pb-2 focus:outline-none focus:border-primary font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors pr-8"
            />
            <span className="material-symbols-outlined absolute right-0 bottom-2 text-outline group-focus-within:text-primary transition-colors">
              search
            </span>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2 font-label-md text-xs uppercase tracking-wider whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-primary text-on-primary border border-primary shadow-sm'
                    : 'border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-surface-container-lowest'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Meeting List View */}
        <div className="flex flex-col border-t border-outline-variant">
          {filteredMeetings.length > 0 ? (
            filteredMeetings.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMeeting(item)}
                className="border-b border-outline-variant py-6 group hover:bg-surface-container-low transition-colors cursor-pointer px-4 -mx-4 rounded-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-gutter items-center">
                  {/* Client & Company */}
                  <div className="md:col-span-5">
                    <p className="font-body-lg text-body-lg text-primary font-medium group-hover:text-tertiary transition-colors mb-1">
                      {item.clientName}
                    </p>
                    <p className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                      {item.company}
                    </p>
                  </div>

                  {/* Date & Time */}
                  <div className="md:col-span-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                      <span className="font-body-md text-body-md">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                      <span className="font-body-md text-body-md">{item.time}</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="md:col-span-2 flex items-center justify-start">
                    <span
                      className={`inline-flex items-center px-3.5 py-1 rounded-full font-label-md text-xs uppercase tracking-wider font-semibold ${item.statusBadgeColor}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden md:flex md:col-span-1 justify-end">
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl mb-2 text-outline-variant">event_busy</span>
              <p className="font-headline-md text-lg text-primary">No consultations found</p>
              <p className="text-caption mt-1">Try selecting a different filter or search query.</p>
            </div>
          )}
        </div>
      </div>

      {/* Meeting Detail Modal */}
      {selectedMeeting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-surface-container-lowest max-w-lg w-full p-8 rounded-2xl border border-outline-variant/40 shadow-2xl relative space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full font-label-md text-xs uppercase tracking-wider mb-2 ${selectedMeeting.statusBadgeColor}`}>
                  {selectedMeeting.status}
                </span>
                <h2 className="font-display-lg text-headline-md text-primary">
                  {selectedMeeting.clientName}
                </h2>
                <p className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant">
                  {selectedMeeting.company}
                </p>
              </div>
              <button
                onClick={() => setSelectedMeeting(null)}
                className="text-on-surface-variant hover:text-primary p-1"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-3 border-y border-outline-variant/30 py-4 text-sm font-body-md text-on-surface-variant">
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <strong className="text-primary">{selectedMeeting.date} ({selectedMeeting.time})</strong>
              </div>
              <div className="flex justify-between">
                <span>Email Address:</span>
                <strong className="text-primary">{selectedMeeting.email}</strong>
              </div>
              <div className="mt-3">
                <span className="block text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                  Consultation Brief / Notes:
                </span>
                <p className="bg-surface-container p-3 rounded text-on-surface leading-relaxed text-xs">
                  {selectedMeeting.notes}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedMeeting(null)}
                className="bg-primary text-on-primary px-6 py-2.5 rounded font-label-md text-xs uppercase tracking-wider hover:bg-tertiary-container"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};
