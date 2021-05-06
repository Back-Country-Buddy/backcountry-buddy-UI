importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

//The new installed service worker replaces the old service worker immediately
self.skipWaiting();

//Test workbox
if (workbox) {
    console.log('Workbox is loaded');
} else {
    console.log('Workbox did not loaded');
}


//Precaching
workbox.precaching.precacheAndRoute([
    { url: 'index.html', revision: '0000' },
    { url: 'manifest.json', revision: '0000' },
    { url: '/static/media/brightpurple.5355596b.png', revision: '0000' },
    { url: '/static/js/bundle.js', revision: '0000' },
    { url: '/static/js/vendors~main.chunk.js', revision: '0000' },
    { url: '/static/js/main.chunk.js', revision: '0000' },
    { url: '/sw.js', revision: '0000' },
    { url: '/favicon.ico', revision: '0000' },
    { url: '/logo192.png', revision: '0000' },
    { url: new RegExp('http://localhost'), revision: '0000' },
    { url: 'http://localhost:3000/past-tours', revision: '0000' },
    { url: new RegExp('https://backcountry-restapi.herokuapp.com/api/private/v1/'), revision: '0000' },
]);

//BackgroundSync
//On https://ptsv2.com/t/n5y9f-1556037444 you can check for received posts
const bgSyncPlugin = new workbox.backgroundSync.Plugin('queue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
    new RegExp('https://backcountry-restapi.herokuapp.com/api/private/v1/'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'GET'
);

workbox.routing.registerRoute(
    new RegExp('https://backcountry-restapi.herokuapp.com/api/private/v1/'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);

workbox.routing.registerRoute(
    new RegExp('https://backcountry-restapi.herokuapp.com/api/private/v1/'),
    new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'PUT'
);

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(event.request.url).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          if(navigator.onLine){
            return fetch(event.request).then(function(response) {
              if(event.request.method == 'GET'){
                cache.put(event.request, response.clone());
              }
              return response;
            });
          }else{
            if(response){
              return response
            }else{
              return null
            }
          }
        });
      })
    );
});
