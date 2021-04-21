const CACHE = 'cache';
const staticCache = [
      '/index.html',
      '/index.css',
      '/App.css',
      '/index.js',
      '/bluepurplejagged.png',
      '/archcloud.png'
]

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(staticCache))
  )
})

self.addEventListener('activate', (e) => {
  let cacheCleaned = caches.keys()
    .then(keys => {
      keys.forEach(key => {
        if (key !== CACHE) {
          return caches.delete(key)
        }
      })
    })
  e.waitUntil(cacheCleaned)
})

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
      if (!(evt.request.url.indexOf('http') === 0)) return;
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}