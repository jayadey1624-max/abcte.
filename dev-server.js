/**
 * ABC Textiles — Full-Stack Development Runner
 * Boots both the Backend REST API (Port 5000) and Frontend App (Port 3000) simultaneously.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. Boot Backend Server (Port 5000)
require('./backend/server.js');

// 2. Boot Frontend Static Server (Port 3000)
const FRONTEND_DIR = path.join(__dirname, 'frontend');
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jsx': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const frontendServer = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const filePath = path.join(FRONTEND_DIR, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for Single Page Application routing
      const indexPath = path.join(FRONTEND_DIR, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('500 Internal Server Error');
      }
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content);
    });
  });
});

const FRONTEND_PORT = 3000;
frontendServer.listen(FRONTEND_PORT, () => {
  console.log(`\n======================================================`);
  console.log(`✨ ABC Textiles Full-Stack Environment is Ready!`);
  console.log(`======================================================`);
  console.log(`🌐 Frontend App:   http://localhost:${FRONTEND_PORT}`);
  console.log(`🔌 Backend API:    http://localhost:5000/api`);
  console.log(`❤️  API Health:     http://localhost:5000/api/health`);
  console.log(`======================================================\n`);
});
