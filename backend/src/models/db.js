const fs = require('fs');
const path = require('path');
const config = require('../config');

class Database {
  constructor() {
    this.filePath = config.DATA_FILE_PATH;
    this.seedPath = config.SEED_FILE_PATH;
    this.data = null;
    this.init();
  }

  init() {
    try {
      if (fs.existsSync(this.filePath)) {
        const raw = fs.readFileSync(this.filePath, 'utf8');
        this.data = JSON.parse(raw);
      } else {
        // Seed initial data
        const seedRaw = fs.readFileSync(this.seedPath, 'utf8');
        this.data = JSON.parse(seedRaw);
        this.persist();
      }
    } catch (err) {
      console.error('Database initialization warning, loading fresh seed:', err.message);
      const seedRaw = fs.readFileSync(this.seedPath, 'utf8');
      this.data = JSON.parse(seedRaw);
    }
  }

  persist() {
    try {
      const dir = path.dirname(this.filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), 'utf8');
    } catch (err) {
      console.error('Failed to write database file:', err.message);
    }
  }

  // --- FABRIC REPOSITORY ---
  getFabrics(query = {}) {
    let list = [...(this.data.fabrics || [])];
    if (query.category && query.category.toLowerCase() !== 'all') {
      list = list.filter(f => f.category.toLowerCase() === query.category.toLowerCase());
    }
    if (query.search) {
      const s = query.search.toLowerCase();
      list = list.filter(f =>
        f.name.toLowerCase().includes(s) ||
        f.category.toLowerCase().includes(s) ||
        (f.composition && f.composition.toLowerCase().includes(s))
      );
    }
    if (query.sort === 'low-high') {
      list.sort((a, b) => a.pricePerYard - b.pricePerYard);
    } else if (query.sort === 'high-low') {
      list.sort((a, b) => b.pricePerYard - a.pricePerYard);
    }
    return list;
  }

  getFabricById(id) {
    return this.data.fabrics.find(f => f.id === id) || null;
  }

  addFabric(fabricData) {
    const newFabric = {
      id: fabricData.id || `fabric-${Date.now()}`,
      name: fabricData.name,
      category: fabricData.category || 'Linen',
      spec: fabricData.spec || '250 GSM',
      composition: fabricData.composition || '100% Pure Natural Fiber',
      width: fabricData.width || '145 cm',
      description: fabricData.description || 'Exclusive atelier textile sample.',
      image: fabricData.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDem9jvjRUOUPj5i6gQH3V9MK_PUExcyXKXgvdWI3jbICfHYPathZfyDwdYTYGJJe0m5u2F1ZUHd4WOK53P0Uejv-RMfL4IkY15RvkpDTM6UHxGVzAYFmtxWW5O7tFgYe4lLF48YEmsnWCsJO28-iMJzsOWeKNNtgxF2QhgCDU6kMQYI5qQlBeLgv0Ezy1i5CHX-5OG07rCmyGPW2CuyzGpitbfrpBAytXpB98Ean6wS5-aDTounNF8',
      swatches: fabricData.swatches || ['#f3ecd5', '#3a3c39'],
      inStock: fabricData.inStock !== false,
      pricePerYard: Number(fabricData.pricePerYard || fabricData.price || 75),
      createdAt: new Date().toISOString()
    };
    this.data.fabrics.unshift(newFabric);
    this.persist();
    return newFabric;
  }

  deleteFabric(id) {
    const idx = this.data.fabrics.findIndex(f => f.id === id);
    if (idx !== -1) {
      const removed = this.data.fabrics.splice(idx, 1)[0];
      this.persist();
      return removed;
    }
    return null;
  }

  // --- COLLECTIONS REPOSITORY ---
  getCollections() {
    return this.data.collections || [];
  }

  getCollectionById(id) {
    return this.data.collections.find(c => c.id === id) || null;
  }

  // --- BOOKINGS REPOSITORY ---
  getBookings(query = {}) {
    let list = [...(this.data.bookings || [])];
    if (query.status && query.status.toLowerCase() !== 'all') {
      list = list.filter(b => b.status.toLowerCase() === query.status.toLowerCase());
    }
    if (query.search) {
      const s = query.search.toLowerCase();
      list = list.filter(b =>
        b.clientName.toLowerCase().includes(s) ||
        (b.company && b.company.toLowerCase().includes(s)) ||
        (b.notes && b.notes.toLowerCase().includes(s))
      );
    }
    return list;
  }

  getBookingById(id) {
    return this.data.bookings.find(b => b.id === id) || null;
  }

  addBooking(bookingData) {
    const newBooking = {
      id: `mtg-${Date.now()}`,
      clientName: bookingData.name || bookingData.clientName,
      company: bookingData.company || 'Private Client',
      date: bookingData.date,
      time: bookingData.time,
      status: 'Upcoming',
      statusBadgeColor: 'bg-secondary-container text-on-secondary-container',
      email: bookingData.email,
      notes: bookingData.message || bookingData.notes || 'Consultation booked via Showroom visit request.',
      createdAt: new Date().toISOString()
    };
    this.data.bookings.unshift(newBooking);
    this.persist();
    return newBooking;
  }

  updateBookingStatus(id, status) {
    const booking = this.getBookingById(id);
    if (booking) {
      booking.status = status;
      if (status.toLowerCase() === 'completed') {
        booking.statusBadgeColor = 'bg-tertiary-container text-on-tertiary-container';
      } else if (status.toLowerCase() === 'cancelled') {
        booking.statusBadgeColor = 'bg-error-container text-on-error-container';
      } else {
        booking.statusBadgeColor = 'bg-secondary-container text-on-secondary-container';
      }
      this.persist();
      return booking;
    }
    return null;
  }

  // --- INQUIRIES REPOSITORY ---
  getInquiries() {
    return this.data.inquiries || [];
  }

  addInquiry(inquiryData) {
    const newInquiry = {
      id: `inq-${Date.now()}`,
      subject: inquiryData.subject || 'Direct Inquiry',
      message: inquiryData.message,
      email: inquiryData.email || 'concierge@abctextiles.com',
      phone: inquiryData.phone || '',
      status: 'Needs Action',
      createdAt: new Date().toISOString()
    };
    this.data.inquiries.unshift(newInquiry);
    this.persist();
    return newInquiry;
  }

  // --- SAMPLES REPOSITORY ---
  addSampleOrder(sampleData) {
    const order = {
      id: `smp-${Date.now()}`,
      items: sampleData.items || [],
      clientName: sampleData.clientName || 'Designer',
      email: sampleData.email || '',
      address: sampleData.address || '',
      status: 'Processing',
      createdAt: new Date().toISOString()
    };
    if (!this.data.samples) this.data.samples = [];
    this.data.samples.unshift(order);
    this.persist();
    return order;
  }

  // --- ADMIN METRICS ---
  getMetrics() {
    const upcoming = (this.data.bookings || []).filter(b => b.status === 'Upcoming').length;
    const inquiries = (this.data.inquiries || []).filter(i => i.status === 'Needs Action').length + 22; // historical active
    const totalFabrics = (this.data.fabrics || []).length;
    return {
      activeEnquiries: inquiries,
      scheduledConsultations: upcoming,
      catalogueTextiles: totalFabrics,
      recentBookings: (this.data.bookings || []).slice(0, 5)
    };
  }
}

module.exports = new Database();
