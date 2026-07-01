// Minimal service worker — required for PWA installability.
// Serves as a network-first pass-through; caching can be added later.
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));
