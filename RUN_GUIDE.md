# 🚀 How to Run Frontend & Backend Together

This guide provides step-by-step instructions to run both the **Frontend** and **Backend** of the ABC Textiles luxury platform on your laptop.

---

## ⚡ Option 1: One-Command Startup (Recommended)

You can launch both the frontend and backend simultaneously using the included `dev-server.js` script.

### Step 1: Open Terminal
Open **Command Prompt**, **PowerShell**, or **Git Bash** in the project root folder:
```powershell
cd "c:\Users\jaya dey\OneDrive\Attachments\Desktop\antigravity project"
```

### Step 2: Run the Unified Server
Run:
```powershell
node dev-server.js
```
*(If `node` is not in your current shell's PATH yet, you can also use: `& "C:\Users\jaya dey\AppData\Local\ms-playwright-go\1.50.1\node.exe" dev-server.js`)*

### Step 3: Open in Browser
Once running, open your web browser (Chrome, Edge, etc.) and visit:
- **Frontend Application**: [http://localhost:3000](http://localhost:3000)
- **Backend REST API**: [http://localhost:5000/api](http://localhost:5000/api)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 🛠️ Option 2: Run in Two Separate Terminals

If you prefer to run and inspect the backend and frontend in separate console windows:

### Terminal 1 — Start Backend API (Port 5000)
```powershell
cd "c:\Users\jaya dey\OneDrive\Attachments\Desktop\antigravity project\backend"
node server.js
```
Output:
```text
🧵 ABC Textiles REST API Server Running
📍 Port: http://localhost:5000
🌐 Health Check: http://localhost:5000/api/health
```

### Terminal 2 — Start Frontend Application (Port 3000)
```powershell
cd "c:\Users\jaya dey\OneDrive\Attachments\Desktop\antigravity project\frontend"
```
You can serve the frontend with:
```powershell
# Using Node built-in server:
node -e "const http=require('http'),fs=require('fs'),p=require('path');http.createServer((q,s)=>{const f=p.join(__dirname,q.url==='/'?'index.html':q.url);fs.readFile(f,(e,d)=>{if(e){fs.readFile(p.join(__dirname,'index.html'),(e2,d2)=>{s.writeHead(200,{'Content-Type':'text/html'});s.end(d2);});}else{s.writeHead(200);s.end(d);}});}).listen(3000,()=>console.log('Frontend running at http://localhost:3000'));"
```

*Or, if you use standard Vite development:*
```powershell
npm install
npm run dev
```

---

## 🎯 Option 3: Instant Browser Double-Click (No Terminal Needed)

If you just want to immediately preview the entire 8-page React application without opening any terminal or installing dependencies:

1. Navigate to the `frontend/` folder in Windows File Explorer.
2. Double-click [index.html](file:///c:/Users/jaya%20dey/OneDrive/Attachments/Desktop/antigravity%20project/frontend/index.html).
3. The application will launch with standalone React 18, Atelier Weave styling, and automatic backend detection.

---

## 🔍 Verification Checklist

When both servers are running:
1. Navigate to `http://localhost:3000` — the **Home Page** with the silk hero banner and featured collections will load.
2. Open the **Fabric Catalogue** page — fabrics query live from `http://localhost:5000/api/fabrics`.
3. Open **Book Showroom Visit** — select a date and time slot, enter your name and email, then click **Confirm Appointment**.
4. Check **Admin Workspace** (`http://localhost:3000` -> Admin -> Consultations) — your newly booked consultation will immediately appear in the database list!
