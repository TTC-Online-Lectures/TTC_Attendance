// A minimal service worker to satisfy Android PWA installation requirements
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Pass-through fetch handler
});
