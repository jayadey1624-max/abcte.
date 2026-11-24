import React, { createContext, useContext, useState, useEffect } from 'react';
import { FABRICS_DATA } from '../data/fabricsData';
import { COLLECTIONS_DATA } from '../data/collectionsData';
import { MEETINGS_DATA } from '../data/meetingsData';
import { api } from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([
    { fabricId: 'heritage-linen', name: 'Heritage Linen', yards: 5, color: '#f3ecd5' }
  ]);
  const [fabrics, setFabrics] = useState(FABRICS_DATA);
  const [collections, setCollections] = useState(COLLECTIONS_DATA);
  const [meetings, setMeetings] = useState(MEETINGS_DATA);
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backendOnline, setBackendOnline] = useState(false);

  // Sync with backend API on mount
  useEffect(() => {
    async function syncBackend() {
      const health = await api.checkHealth();
      if (health && health.success) {
        setBackendOnline(true);
        const [remoteFabrics, remoteCollections, remoteBookings] = await Promise.all([
          api.getFabrics(),
          api.getCollections(),
          api.getBookings()
        ]);
        if (remoteFabrics && remoteFabrics.length > 0) setFabrics(remoteFabrics);
        if (remoteCollections && remoteCollections.length > 0) setCollections(remoteCollections);
        if (remoteBookings && remoteBookings.length > 0) setMeetings(remoteBookings);
      }
    }
    syncBackend();
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (fabric, swatch = null) => {
    setCartItems(prev => [...prev, { fabricId: fabric.id, name: fabric.name, yards: 2, color: swatch || fabric.swatches[0] }]);
    showToast(`Added sample of ${fabric.name} to project kit.`);
  };

  const addBooking = async (newBooking) => {
    const saved = await api.createBooking(newBooking);
    setMeetings(prev => [saved, ...prev]);
    showToast(`Appointment confirmed for ${newBooking.name} on ${newBooking.date} at ${newBooking.time}`);
  };

  const addNewFabric = async (fabricData) => {
    const saved = await api.addFabric(fabricData);
    setFabrics(prev => [saved, ...prev]);
    showToast(`Textile "${saved.name}" archived in catalogue.`);
  };

  const navigateTo = (page, categoryFilter = null) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        cartItems,
        addToCart,
        meetings,
        addBooking,
        fabrics,
        addNewFabric,
        collections,
        selectedFabric,
        setSelectedFabric,
        toastMessage,
        showToast,
        mobileMenuOpen,
        setMobileMenuOpen,
        backendOnline
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
