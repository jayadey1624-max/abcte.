# ABC Textiles — Atelier Weave React Frontend

A production-grade, modular React frontend transformed from the Google Stitch design project (`stitch_abc_textiles_premium_platform`).

Created with modern React 18, Tailwind CSS, Material Symbols, Playfair Display & Hanken Grotesk typography, and strict adherence to the **Atelier Weave** design system tokens.

---

## 🏛️ Project Directory Structure

```
frontend/
├── index.html                   # Universal standalone browser entry (instant zero-install launch)
├── package.json                 # Modern npm package configuration
├── vite.config.js               # Vite build & development server config
├── tailwind.config.js           # Full Atelier Weave design token configuration
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project documentation & mapping
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application orchestrator & router
    ├── context/
    │   └── AppContext.jsx       # Global application state (navigation, samples, bookings, toasts)
    ├── data/
    │   ├── fabricsData.js       # Curated fabric specifications, swatches, and high-res imagery
    │   ├── collectionsData.js   # Seasonal & archive collection definitions
    │   └── meetingsData.js      # Client consultations & showroom appointments
    ├── styles/
    │   └── globals.css          # Tailwind directives, Material Symbols, custom scrollbar tokens
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx       # Public responsive header with navigation & sample bag
    │   │   ├── Footer.jsx       # Editorial luxury footer
    │   │   ├── MobileNav.jsx    # Fixed mobile bottom bar with active indicators
    │   │   └── AdminLayout.jsx  # Desktop sidebar & top header for admin workspace
    │   └── ui/
    │       ├── FabricCard.jsx        # Fabric swatch card with interactive color selector
    │       └── FabricDetailModal.jsx # Quick view modal with specs and sample ordering
    └── pages/
        ├── home/
        │   └── HomePage.jsx               # (from abc_textiles_home)
        ├── collections/
        │   └── OurCollectionsPage.jsx     # (from our_collections)
        ├── fabric-catalogue/
        │   └── FabricCataloguePage.jsx    # (from fabric_catalogue)
        ├── heritage-vision/
        │   └── OurHeritageVisionPage.jsx  # (from our_heritage_vision)
        ├── book-showroom/
        │   └── BookShowroomVisitPage.jsx  # (from book_a_showroom_visit)
        ├── contact/
        │   └── ContactPage.jsx            # (from contact_abc_textiles)
        ├── admin-workspace/
        │   └── AdminWorkspacePage.jsx     # (from admin_workspace)
        └── admin-meeting-history/
            └── AdminMeetingHistoryPage.jsx# (from admin_meeting_history)
```

---

## 🎨 Page-by-Page Stitch Conversion Matrix

| Original Stitch HTML Folder | React Page Component | Key Features & Interactivity |
| :--- | :--- | :--- |
| `abc_textiles_home/code.html` | `src/pages/home/HomePage.jsx` | Editorial hero with silk backdrop, horizontal featured fabric showcase, asymmetric story teaser, 3-column bento grid ("The ABC Difference"). |
| `our_collections/code.html` | `src/pages/collections/OurCollectionsPage.jsx` | Full-bleed collection cards with gradient overlays, season badges, fabric counts, and direct catalogue filter links. |
| `fabric_catalogue/code.html` | `src/pages/fabric-catalogue/FabricCataloguePage.jsx` | Real-time search, category filter pills (Linen, Silk, Cotton, Wool, Synthetic), price sorting, swatch color preview, and quick-view modal. |
| `our_heritage_vision/code.html` | `src/pages/heritage-vision/OurHeritageVisionPage.jsx` | Workshop hero photograph, 30-year heritage narrative, juxtaposed Mission (charcoal) and Vision (ivory) statement blocks. |
| `book_a_showroom_visit/code.html` | `src/pages/book-showroom/BookShowroomVisitPage.jsx` | Interactive date card carousel (October 2024), live time slot selector, sticky booking form, instant appointment confirmation & sync to Admin. |
| `contact_abc_textiles/code.html` | `src/pages/contact/ContactPage.jsx` | Direct phone & email cards, contact form with toast confirmation, and styled NYC Design District showroom map card. |
| `admin_workspace/code.html` | `src/pages/admin-workspace/AdminWorkspacePage.jsx` | Bento grid metrics (Active Enquiries, Consultations, Live Weaves), "+ Add New Textile" modal, quick navigation tiles with hover transitions. |
| `admin_meeting_history/code.html` | `src/pages/admin-meeting-history/AdminMeetingHistoryPage.jsx` | Searchable client appointments, status filter tabs (All, Upcoming, Completed, Cancelled), color-coded badges, and detailed consultation modal. |

---

## 🚀 How to Run

### Method 1: Instant In-Browser Preview (Zero Install Required)
You can open `frontend/index.html` directly in Google Chrome, Microsoft Edge, or any modern web browser.
It comes with standalone React 18 and Babel, along with the complete Atelier Weave Tailwind configuration, allowing immediate testing of all 8 pages, swatches, modals, booking workflows, and admin tools.

### Method 2: Local Static Server (Node.js)
From the project root:
```bash
node -e "const http=require('http'),fs=require('fs'),path=require('path');http.createServer((req,res)=>{const p=path.join(__dirname,'frontend',req.url==='/'?'index.html':req.url);fs.readFile(p,(e,d)=>{if(e){res.writeHead(404);res.end('Not found');}else{res.writeHead(200);res.end(d);}});}).listen(3000,()=>console.log('Server running at http://localhost:3000'));"
```

### Method 3: Standard Vite Development
When Node.js and npm are installed in your PATH:
```bash
cd frontend
npm install
npm run dev
```

---

## ✨ Design System Compliance
- **Palette**: Deep Charcoal (`#000000`), Soft Ivory (`#fbf9f8`), Muted Gold (`#a17f3b` / `#ffdea5`), Neutral Outlines (`#c4c7c7`).
- **Typography**: `Playfair Display` for editorial serifs, `Hanken Grotesk` for sharp functional copy.
- **Elevation**: Tonal layering with fine 1px / 0.5px borders mimicking tailored seams, avoiding heavy drop shadows.
