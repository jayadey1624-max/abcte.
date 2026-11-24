/**
 * API Service for ABC Textiles
 * Handles communication with the Node.js backend REST API
 * Supports graceful fallback to local data if the backend server is offline.
 */

const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // --- HEALTH ---
  async checkHealth() {
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      return await res.json();
    } catch (err) {
      return { success: false, offline: true };
    }
  },

  // --- FABRICS ---
  async getFabrics(params = {}) {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE_URL}/fabrics${query ? `?${query}` : ''}`);
      if (!res.ok) throw new Error('Failed to fetch fabrics');
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Backend offline, using fallback data for fabrics:', err.message);
      return null;
    }
  },

  async addFabric(fabricData) {
    try {
      const res = await fetch(`${API_BASE_URL}/fabrics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fabricData)
      });
      if (!res.ok) throw new Error('Failed to create fabric');
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Backend offline, saving locally:', err.message);
      return { ...fabricData, id: `fabric-${Date.now()}` };
    }
  },

  // --- COLLECTIONS ---
  async getCollections() {
    try {
      const res = await fetch(`${API_BASE_URL}/collections`);
      if (!res.ok) throw new Error('Failed to fetch collections');
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Backend offline, using fallback data for collections:', err.message);
      return null;
    }
  },

  // --- BOOKINGS ---
  async getBookings(params = {}) {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`${API_BASE_URL}/bookings${query ? `?${query}` : ''}`);
      if (!res.ok) throw new Error('Failed to fetch bookings');
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Backend offline, using fallback data for bookings:', err.message);
      return null;
    }
  },

  async createBooking(bookingData) {
    try {
      const res = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      if (!res.ok) throw new Error('Failed to book showroom appointment');
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Backend offline, saving booking locally:', err.message);
      return {
        id: `mtg-${Date.now()}`,
        clientName: bookingData.name || bookingData.clientName,
        company: bookingData.company || 'Private Client',
        date: bookingData.date,
        time: bookingData.time,
        status: 'Upcoming',
        statusBadgeColor: 'bg-secondary-container text-on-secondary-container',
        email: bookingData.email,
        notes: bookingData.message || 'Consultation booked via Showroom visit request.'
      };
    }
  },

  // --- INQUIRIES ---
  async sendInquiry(inquiryData) {
    try {
      const res = await fetch(`${API_BASE_URL}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData)
      });
      if (!res.ok) throw new Error('Failed to send inquiry');
      return await res.json();
    } catch (err) {
      console.warn('Backend offline, recording locally:', err.message);
      return { success: true, offline: true };
    }
  },

  // --- ADMIN METRICS ---
  async getAdminMetrics() {
    try {
      const res = await fetch(`${API_BASE_URL}/admin/metrics`);
      if (!res.ok) throw new Error('Failed to fetch admin metrics');
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Backend offline, calculating locally:', err.message);
      return null;
    }
  }
};
