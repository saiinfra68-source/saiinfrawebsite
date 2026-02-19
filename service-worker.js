self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('sai-infra-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon-192x192.png',
        '/favicon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});