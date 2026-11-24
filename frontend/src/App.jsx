import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';

import { HomePage } from './pages/home/HomePage';
import { OurCollectionsPage } from './pages/collections/OurCollectionsPage';
import { FabricCataloguePage } from './pages/fabric-catalogue/FabricCataloguePage';
import { OurHeritageVisionPage } from './pages/heritage-vision/OurHeritageVisionPage';
import { BookShowroomVisitPage } from './pages/book-showroom/BookShowroomVisitPage';
import { ContactPage } from './pages/contact/ContactPage';
import { AdminWorkspacePage } from './pages/admin-workspace/AdminWorkspacePage';
import { AdminMeetingHistoryPage } from './pages/admin-meeting-history/AdminMeetingHistoryPage';

export const App = () => {
  const { currentPage, toastMessage } = useApp();

  const isAdminView = currentPage === 'admin' || currentPage === 'admin-meetings';

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'collections':
        return <OurCollectionsPage />;
      case 'catalogue':
        return <FabricCataloguePage />;
      case 'heritage':
        return <OurHeritageVisionPage />;
      case 'showroom':
        return <BookShowroomVisitPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminWorkspacePage />;
      case 'admin-meetings':
        return <AdminMeetingHistoryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-primary text-on-primary px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-outline-variant/30 animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="material-symbols-outlined text-tertiary-fixed text-lg">check_circle</span>
          <span className="font-label-md text-xs uppercase tracking-wider">{toastMessage}</span>
        </div>
      )}

      {/* Public Header (Navbar) */}
      {!isAdminView && <Navbar />}

      {/* Main Content View */}
      <main className={`flex-1 ${!isAdminView ? 'pt-16 md:pt-[110px]' : ''}`}>
        {renderCurrentPage()}
      </main>

      {/* Public Footer */}
      {!isAdminView && <Footer />}

      {/* Mobile Bottom Navigation */}
      {!isAdminView && <MobileNav />}
    </div>
  );
};

export default App;
