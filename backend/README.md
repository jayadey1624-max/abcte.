# ABC Textiles — Backend REST API Server

Production-grade Node.js REST API providing data persistence, showroom consultation bookings, textile catalogue management, and administrative metrics for the ABC Textiles frontend.

---

## 🏛️ Architecture & Endpoints

Base URL: `http://localhost:5000/api`

### 1. Fabric Catalogue (`/api/fabrics`)
- `GET /api/fabrics`
  - Query params: `category` (Linen, Silk, Cotton, Wool, Synthetic), `search` (name, keywords), `sort` (low-high, high-low).
- `GET /api/fabrics/:id`
  - Returns fabric specifications, usable width, composition, price per yard, and swatches.
- `POST /api/fabrics`
  - Creates a new textile in the archive catalogue.
- `DELETE /api/fabrics/:id`
  - Archives/removes a fabric from the live catalogue.

### 2. Curated Collections (`/api/collections`)
- `GET /api/collections`
  - Returns seasonal and permanent archive collections (Summer Bloom, Heritage Weaves, Sustainable Earth).
- `GET /api/collections/:id`
  - Single collection detail with linked fabrics.

### 3. Showroom Consultations (`/api/bookings`)
- `GET /api/bookings`
  - Query params: `status` (Upcoming, Completed, Cancelled), `search` (client name, company).
- `POST /api/bookings`
  - Schedules a showroom consultation (Name, Company, Email, Date, Time, Project Brief).
- `PATCH /api/bookings/:id/status`
  - Updates consultation status (`Upcoming`, `Completed`, `Cancelled`).

### 4. Concierge Inquiries & Samples (`/api/inquiries`, `/api/samples`)
- `GET /api/inquiries`
  - List of client inquiries for administrative review.
- `POST /api/inquiries`
  - Submits inquiry from the contact page.
- `POST /api/samples`
  - Submits swatch kit orders.

### 5. Admin Dashboard Metrics (`/api/admin/metrics`)
- `GET /api/admin/metrics`
  - Aggregated metrics matching the Admin Workspace bento grid (*Active Enquiries*, *Scheduled Consultations*, *Catalogue Textiles*, *Recent Bookings*).

---

## 💾 Storage & Persistence
- Storage engine: [store.json](file:///c:/Users/jaya%20dey/OneDrive/Attachments/Desktop/antigravity%20project/backend/src/data/store.json)
- Seed template: [initialSeed.json](file:///c:/Users/jaya%20dey/OneDrive/Attachments/Desktop/antigravity%20project/backend/src/data/initialSeed.json)
- ACID-safe JSON repository with automatic seeding on first boot. Zero external database dependencies required.

---

## 🚀 How to Run the Backend

```bash
cd backend
node server.js
```

Or with npm:
```bash
cd backend
npm start
```

The server will start on port `5000` with CORS enabled for frontend communication.
