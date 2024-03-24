self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
        // ... other assets you want to cache ...
      ]);
    })
  );
});
