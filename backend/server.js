/**
 * ABC Textiles — Atelier Weave Backend REST API Server
 * Professional Full-Stack Node.js Architecture
 * Supports both Express and native HTTP fallback for zero-dependency instant startup.
 */

const http = require('http');
const url = require('url');
const config = require('./src/config');
const db = require('./src/models/db');
const fabricController = require('./src/controllers/fabricController');
const collectionController = require('./src/controllers/collectionController');
const bookingController = require('./src/controllers/bookingController');
const inquiryController = require('./src/controllers/inquiryController');
const adminController = require('./src/controllers/adminController');

const PORT = config.PORT || 5000;

// Helper to send JSON responses
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

// Request dispatcher
function handleRequest(req, res) {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname.replace(/\/+$/, '') || '/';
  const query = parsedUrl.query;
  const method = req.method.toUpperCase();

  // Parse Body for POST / PUT / PATCH
  let bodyBuffer = '';
  req.on('data', chunk => {
    bodyBuffer += chunk;
  });

  req.on('end', () => {
    let body = {};
    if (bodyBuffer) {
      try {
        body = JSON.parse(bodyBuffer);
      } catch (e) {
        return sendJson(res, 400, { success: false, message: 'Invalid JSON payload' });
      }
    }

    // Mock Express req / res objects for shared controller compatibility
    const customReq = { query, body, params: {}, headers: req.headers };
    const customRes = {
      json: (data) => sendJson(res, 200, data),
      status: (code) => ({
        json: (data) => sendJson(res, code, data)
      })
    };

    try {
      // 1. Health check
      if (pathname === '/api/health' || pathname === '/') {
        return sendJson(res, 200, {
          success: true,
          service: 'ABC Textiles REST API',
          version: '1.0.0',
          timestamp: new Date().toISOString()
        });
      }

      // 2. Fabrics Routes
      if (pathname === '/api/fabrics') {
        if (method === 'GET') {
          return fabricController.getFabrics(customReq, customRes);
        }
        if (method === 'POST') {
          return fabricController.createFabric(customReq, customRes);
        }
      }

      if (pathname.startsWith('/api/fabrics/')) {
        const id = pathname.split('/')[3];
        customReq.params.id = id;
        if (method === 'GET') {
          return fabricController.getFabricById(customReq, customRes);
        }
        if (method === 'DELETE') {
          return fabricController.deleteFabric(customReq, customRes);
        }
      }

      // 3. Collections Routes
      if (pathname === '/api/collections') {
        if (method === 'GET') {
          return collectionController.getCollections(customReq, customRes);
        }
      }

      if (pathname.startsWith('/api/collections/')) {
        const id = pathname.split('/')[3];
        customReq.params.id = id;
        if (method === 'GET') {
          return collectionController.getCollectionById(customReq, customRes);
        }
      }

      // 4. Bookings Routes
      if (pathname === '/api/bookings') {
        if (method === 'GET') {
          return bookingController.getBookings(customReq, customRes);
        }
        if (method === 'POST') {
          return bookingController.createBooking(customReq, customRes);
        }
      }

      if (pathname.startsWith('/api/bookings/') && pathname.endsWith('/status')) {
        const parts = pathname.split('/');
        customReq.params.id = parts[3];
        if (method === 'PATCH' || method === 'POST') {
          return bookingController.updateBookingStatus(customReq, customRes);
        }
      }

      // 5. Inquiries Routes
      if (pathname === '/api/inquiries') {
        if (method === 'GET') {
          return inquiryController.getInquiries(customReq, customRes);
        }
        if (method === 'POST') {
          return inquiryController.createInquiry(customReq, customRes);
        }
      }

      // 6. Samples Order Route
      if (pathname === '/api/samples') {
        if (method === 'POST') {
          return inquiryController.createSampleOrder(customReq, customRes);
        }
      }

      // 7. Admin Metrics Route
      if (pathname === '/api/admin/metrics') {
        if (method === 'GET') {
          return adminController.getMetrics(customReq, customRes);
        }
      }

      // Not Found
      return sendJson(res, 404, {
        success: false,
        message: `Endpoint ${method} ${pathname} not found on ABC Textiles API`
      });
    } catch (err) {
      console.error('API Error:', err);
      return sendJson(res, 500, { success: false, message: err.message });
    }
  });
}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🧵 ABC Textiles REST API Server Running`);
  console.log(`📍 Port: http://localhost:${PORT}`);
  console.log(`🌐 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`✨ Mode: Production Ready Atelier Backend`);
  console.log(`=========================================`);
});

module.exports = server;
