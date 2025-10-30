// Service Worker for Advanced Caching
const CACHE_NAME = 'hyperkit-v1';
const STATIC_CACHE = 'hyperkit-static-v1';
const DYNAMIC_CACHE = 'hyperkit-dynamic-v1';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/foundation',
  '/products',
  '/build',
  '/roadmap',
  '/ai',
  '/app',
  '/_next/static/css/',
  '/_next/static/js/',
  '/favicon.ico'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // For static assets, try cache first
        if (isStaticAsset(request.url)) {
          return fetchAndCache(request, STATIC_CACHE);
        }

        // For dynamic content, try network first
        return fetchAndCache(request, DYNAMIC_CACHE);
      })
      .catch(() => {
        // Return offline page for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      })
  );
});

// Helper function to check if asset is static
function isStaticAsset(url) {
  return url.includes('/_next/static/') ||
         url.includes('/favicon.ico') ||
         url.includes('/images/') ||
         url.includes('/icons/') ||
         url.includes('/fonts/') ||
         url.endsWith('.css') ||
         url.endsWith('.js') ||
         url.endsWith('.png') ||
         url.endsWith('.jpg') ||
         url.endsWith('.jpeg') ||
         url.endsWith('.gif') ||
         url.endsWith('.svg') ||
         url.endsWith('.webp');
}

// Helper function to fetch and cache
function fetchAndCache(request, cacheName) {
  return fetch(request)
    .then((response) => {
      // Don't cache non-successful responses
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }

      // Clone the response
      const responseToCache = response.clone();

      // Cache the response
      caches.open(cacheName)
        .then((cache) => {
          cache.put(request, responseToCache);
        });

      return response;
    });
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Go to the site',
          icon: '/icons/checkmark.png'
        },
        {
          action: 'close',
          title: 'Close notification',
          icon: '/icons/xmark.png'
        }
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Store performance metrics
    const metrics = event.data.metrics;
    console.log('Performance metrics:', metrics);
    
    // Send to analytics if needed
    if (metrics.fps < 30) {
      console.warn('Low FPS detected:', metrics.fps);
    }
  }
});
